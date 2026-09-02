import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

/* =========================================================
   SUPABASE
========================================================= */

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL;

const supabaseKey =
  process.env.SUPABASE_SECRET_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Missing Supabase environment variables."
  );
}

const supabase = createClient(
  supabaseUrl,
  supabaseKey
);

/* =========================================================
   HELPERS
========================================================= */

function normalizePhone(phone: string): string {
  const cleaned = phone
    .replace(/\s+/g, "")
    .replace(/-/g, "");

  if (cleaned.startsWith("+254")) {
    return cleaned.slice(1);
  }

  if (cleaned.startsWith("254")) {
    return cleaned;
  }

  if (cleaned.startsWith("0")) {
    return `254${cleaned.slice(1)}`;
  }

  if (
    cleaned.startsWith("7") ||
    cleaned.startsWith("1")
  ) {
    return `254${cleaned}`;
  }

  return cleaned;
}

function isValidKenyanPhone(
  phone: string
): boolean {
  return /^254[17]\d{8}$/.test(phone);
}

/* =========================================================
   GET ACCESS TOKEN
========================================================= */

async function getAccessToken(): Promise<string> {
  const consumerKey =
    process.env.MPESA_CONSUMER_KEY;

  const consumerSecret =
    process.env.MPESA_CONSUMER_SECRET;

  if (
    !consumerKey ||
    !consumerSecret
  ) {
    throw new Error(
      "Missing M-Pesa consumer credentials."
    );
  }

  const credentials = Buffer.from(
    `${consumerKey}:${consumerSecret}`
  ).toString("base64");

  const response = await fetch(
    "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
    {
      method: "GET",

      headers: {
        Authorization: `Basic ${credentials}`,
      },

      cache: "no-store",
    }
  );

  const data =
    await response.json();

  if (!response.ok || !data.access_token) {
    console.error(
      "M-Pesa OAuth error:",
      data
    );

    throw new Error(
      "Could not authenticate with M-Pesa."
    );
  }

  return data.access_token;
}

/* =========================================================
   POST /api/mpesa/stkpush
========================================================= */

export async function POST(
  request: Request
) {
  try {
    /* =====================================================
       PARSE REQUEST
    ===================================================== */

    const body =
      (await request.json()) as {
        orderId?: string;
        phone?: string;
        amount?: number;
      };

    const orderId =
      body.orderId;

    const phone =
      body.phone;

    const requestedAmount =
      Number(body.amount);

    /* =====================================================
       BASIC VALIDATION
    ===================================================== */

    if (
      !orderId ||
      typeof orderId !== "string"
    ) {
      return NextResponse.json(
        {
          error:
            "Order ID is required.",
        },
        {
          status: 400,
        }
      );
    }

    if (
      !phone ||
      typeof phone !== "string"
    ) {
      return NextResponse.json(
        {
          error:
            "Phone number is required.",
        },
        {
          status: 400,
        }
      );
    }

    const normalizedPhone =
      normalizePhone(phone);

    if (
      !isValidKenyanPhone(
        normalizedPhone
      )
    ) {
      return NextResponse.json(
        {
          error:
            "Please enter a valid Kenyan M-Pesa number.",
        },
        {
          status: 400,
        }
      );
    }

    if (
      !Number.isFinite(
        requestedAmount
      ) ||
      requestedAmount <= 0
    ) {
      return NextResponse.json(
        {
          error:
            "Invalid payment amount.",
        },
        {
          status: 400,
        }
      );
    }

    /* =====================================================
       LOAD ORDER
    ===================================================== */

    const {
      data: order,
      error: orderError,
    } = await supabase
      .from("orders")
      .select(
        `
        id,
        total,
        payment_status,
        payment_method
        `
      )
      .eq(
        "id",
        orderId
      )
      .single();

    if (
      orderError ||
      !order
    ) {
      console.error(
        "ORDER LOOKUP ERROR:",
        orderError
      );

      return NextResponse.json(
        {
          error:
            "Order could not be found.",
        },
        {
          status: 404,
        }
      );
    }

    /* =====================================================
       CHECK PAYMENT STATUS
    ===================================================== */

    if (
      order.payment_status !==
      "pending"
    ) {
      return NextResponse.json(
        {
          error:
            "This order is no longer awaiting payment.",
        },
        {
          status: 400,
        }
      );
    }

    /* =====================================================
       CHECK PAYMENT METHOD
    ===================================================== */

    if (
      order.payment_method !==
      "mpesa"
    ) {
      return NextResponse.json(
        {
          error:
            "This order is not configured for M-Pesa.",
        },
        {
          status: 400,
        }
      );
    }

    /* =====================================================
       VERIFY AMOUNT
    ===================================================== */

    const orderTotal =
      Number(order.total);

    if (
      !Number.isFinite(
        orderTotal
      ) ||
      orderTotal <= 0
    ) {
      return NextResponse.json(
        {
          error:
            "Invalid order total.",
        },
        {
          status: 400,
        }
      );
    }

    if (
      Math.round(
        requestedAmount
      ) !==
      Math.round(
        orderTotal
      )
    ) {
      return NextResponse.json(
        {
          error:
            "Payment amount does not match the order total.",
        },
        {
          status: 400,
        }
      );
    }

    /* =====================================================
       M-PESA CONFIG
    ===================================================== */

    const shortcode =
      process.env.MPESA_SHORTCODE;

    const passkey =
      process.env.MPESA_PASSKEY;

    const callbackUrl =
      process.env.MPESA_CALLBACK_URL;

    if (
      !shortcode ||
      !passkey ||
      !callbackUrl
    ) {
      console.error(
        "Missing M-Pesa configuration."
      );

      return NextResponse.json(
        {
          error:
            "M-Pesa configuration is incomplete.",
        },
        {
          status: 500,
        }
      );
    }

    /* =====================================================
       TIMESTAMP
    ===================================================== */

    const timestamp =
      new Date()
        .toISOString()
        .replace(
          /[-:TZ.]/g,
          ""
        )
        .slice(
          0,
          14
        );

    /* =====================================================
       PASSWORD
    ===================================================== */

    const password =
      Buffer.from(
        `${shortcode}${passkey}${timestamp}`
      ).toString(
        "base64"
      );

    /* =====================================================
       ACCESS TOKEN
    ===================================================== */

    const accessToken =
      await getAccessToken();

    /* =====================================================
       STK PUSH REQUEST
    ===================================================== */

    const stkPayload = {
      BusinessShortCode:
        shortcode,

      Password:
        password,

      Timestamp:
        timestamp,

      TransactionType:
        "CustomerPayBillOnline",

      Amount:
        Math.round(
          orderTotal
        ),

      PartyA:
        normalizedPhone,

      PartyB:
        shortcode,

      PhoneNumber:
        normalizedPhone,

      CallBackURL:
        callbackUrl,

      AccountReference:
        `TSE-${order.id}`,

      TransactionDesc:
        "TSE Live Ticket",
    };

    console.log(
      "M-Pesa STK Push:",
      {
        orderId:
          order.id,

        amount:
          orderTotal,

        phone:
          normalizedPhone,
      }
    );

    const stkResponse =
      await fetch(
        "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
        {
          method: "POST",

          headers: {
            Authorization:
              `Bearer ${accessToken}`,

            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(
            stkPayload
          ),
        }
      );

    const stkData =
      await stkResponse.json();

    console.log(
      "M-Pesa STK Response:",
      stkData
    );

    /* =====================================================
       SAFARICOM ERROR
    ===================================================== */

    if (
      !stkResponse.ok ||
      stkData.ResponseCode !==
        "0"
    ) {
      console.error(
        "M-Pesa STK Push failed:",
        stkData
      );

      return NextResponse.json(
        {
          error:
            stkData.errorMessage ||
            stkData.ResponseDescription ||
            "M-Pesa payment request failed.",
        },
        {
          status: 400,
        }
      );
    }

    /* =====================================================
       EXTRACT REQUEST IDS
    ===================================================== */

    const checkoutRequestId =
      stkData.CheckoutRequestID;

    const merchantRequestId =
      stkData.MerchantRequestID;

    if (
      !checkoutRequestId ||
      !merchantRequestId
    ) {
      console.error(
        "M-Pesa response missing request IDs:",
        stkData
      );

      return NextResponse.json(
        {
          error:
            "M-Pesa did not return valid payment request IDs.",
        },
        {
          status: 502,
        }
      );
    }

    /* =====================================================
       SAVE M-PESA REQUEST IDS
    ===================================================== */

    const {
      error:
        updateError,
    } = await supabase
      .from("orders")
      .update({
        checkout_request_id:
          checkoutRequestId,

        merchant_request_id:
          merchantRequestId,
      })
      .eq(
        "id",
        order.id
      );

    if (
      updateError
    ) {
      console.error(
        "ORDER M-PESA UPDATE ERROR:",
        updateError
      );

      return NextResponse.json(
        {
          error:
            "M-Pesa request was sent, but the order could not be updated.",
        },
        {
          status: 500,
        }
      );
    }

    /* =====================================================
       SUCCESS
    ===================================================== */

    return NextResponse.json(
      {
        success: true,

        message:
          "M-Pesa payment request sent successfully.",

        orderId:
          order.id,

        checkoutRequestId,

        merchantRequestId,

        customerMessage:
          stkData.CustomerMessage ||
          "Please check your phone and enter your M-Pesa PIN.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(
      "STK PUSH ERROR:",
      error
    );

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Something went wrong while initiating M-Pesa payment.",
      },
      {
        status: 500,
      }
    );
  }
}