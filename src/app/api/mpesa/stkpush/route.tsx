import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SECRET_KEY!
);

/* =========================================================
   PHONE NORMALIZATION
========================================================= */

function normalizePhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, "");

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

/* =========================================================
   GET M-PESA ACCESS TOKEN
========================================================= */

async function getMpesaAccessToken(): Promise<string> {
  const consumerKey =
    process.env.MPESA_CONSUMER_KEY;

  const consumerSecret =
    process.env.MPESA_CONSUMER_SECRET;

  if (!consumerKey || !consumerSecret) {
    throw new Error(
      "M-Pesa consumer credentials are missing."
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

  const data = await response.json();

  if (!response.ok || !data.access_token) {
    console.error(
      "M-Pesa token error:",
      data
    );

    throw new Error(
      data.errorMessage ||
        "Could not get M-Pesa access token."
    );
  }

  return data.access_token;
}

/* =========================================================
   TIMESTAMP
========================================================= */

function generateTimestamp(): string {
  const date = new Date();

  return (
    date.getFullYear().toString() +
    String(date.getMonth() + 1).padStart(2, "0") +
    String(date.getDate()).padStart(2, "0") +
    String(date.getHours()).padStart(2, "0") +
    String(date.getMinutes()).padStart(2, "0") +
    String(date.getSeconds()).padStart(2, "0")
  );
}

/* =========================================================
   STK PUSH
========================================================= */

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      orderId,
      phone,
      amount,
    }: {
      orderId?: string;
      phone?: string;
      amount?: number;
    } = body;

    /* =====================================================
       VALIDATION
    ===================================================== */

    if (
      !orderId ||
      !phone ||
      !amount ||
      amount <= 0
    ) {
      return NextResponse.json(
        {
          error:
            "orderId, phone and a valid amount are required.",
        },
        { status: 400 }
      );
    }

    /* =====================================================
       VERIFY ORDER
    ===================================================== */

    const {
      data: order,
      error: orderError,
    } = await supabase
      .from("orders")
      .select(
        "id, total, payment_status"
      )
      .eq("id", orderId)
      .single();

    if (orderError || !order) {
      console.error(
        "Order lookup error:",
        orderError
      );

      return NextResponse.json(
        {
          error: "Order not found.",
        },
        { status: 404 }
      );
    }

    if (
      order.payment_status !== "pending"
    ) {
      return NextResponse.json(
        {
          error:
            "This order is no longer pending payment.",
        },
        { status: 400 }
      );
    }

    /* =====================================================
       VERIFY AMOUNT
    ===================================================== */

    if (
      Number(order.total) !==
      Number(amount)
    ) {
      return NextResponse.json(
        {
          error:
            "Payment amount does not match the order total.",
        },
        { status: 400 }
      );
    }

    /* =====================================================
       ENVIRONMENT VARIABLES
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
      throw new Error(
        "M-Pesa shortcode, passkey or callback URL is missing."
      );
    }

    console.log(
      "Using M-Pesa callback URL:",
      callbackUrl
    );

    /* =====================================================
       ACCESS TOKEN
    ===================================================== */

    const accessToken =
      await getMpesaAccessToken();

    /* =====================================================
       TIMESTAMP
    ===================================================== */

    const timestamp =
      generateTimestamp();

    /* =====================================================
       PASSWORD
    ===================================================== */

    const password =
      Buffer.from(
        `${shortcode}${passkey}${timestamp}`
      ).toString("base64");

    /* =====================================================
       PHONE
    ===================================================== */

    const formattedPhone =
      normalizePhone(phone);

    if (
      !/^254[17]\d{8}$/.test(
        formattedPhone
      )
    ) {
      return NextResponse.json(
        {
          error:
            "Please enter a valid Kenyan M-Pesa phone number.",
        },
        { status: 400 }
      );
    }

    console.log(
      "Initiating STK Push:",
      {
        orderId,
        amount,
        phone: formattedPhone,
        callbackUrl,
      }
    );

    /* =====================================================
       SEND STK PUSH
    ===================================================== */

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

          body: JSON.stringify({
            BusinessShortCode:
              shortcode,

            Password:
              password,

            Timestamp:
              timestamp,

            TransactionType:
              "CustomerPayBillOnline",

            Amount:
              Math.round(amount),

            PartyA:
              formattedPhone,

            PartyB:
              shortcode,

            PhoneNumber:
              formattedPhone,

            CallBackURL:
              callbackUrl,

            AccountReference:
              `TSE-${orderId.slice(
                0,
                8
              )}`,

            TransactionDesc:
              "TSE Live Ticket Payment",
          }),
        }
      );

    const stkData =
      await stkResponse.json();

    console.log(
      "M-Pesa STK response:",
      stkData
    );

    /* =====================================================
       HANDLE STK ERROR
    ===================================================== */

    if (
      !stkResponse.ok ||
      stkData.ResponseCode !== "0"
    ) {
      return NextResponse.json(
        {
          error:
            stkData.errorMessage ||
            stkData.ResponseDescription ||
            "M-Pesa STK Push failed.",
        },
        { status: 400 }
      );
    }

    /* =====================================================
       SAVE M-PESA REQUEST IDS
    ===================================================== */

    const {
      error: updateError,
    } = await supabase
      .from("orders")
      .update({
        checkout_request_id:
          stkData.CheckoutRequestID,

        merchant_request_id:
          stkData.MerchantRequestID,
      })
      .eq("id", orderId);

    if (updateError) {
      console.error(
        "Could not update order with M-Pesa request IDs:",
        updateError
      );

      return NextResponse.json(
        {
          error:
            "STK Push was initiated, but the payment request could not be linked to the order.",
        },
        { status: 500 }
      );
    }

    /* =====================================================
       SUCCESS
    ===================================================== */

    return NextResponse.json({
      success: true,

      message:
        "STK Push sent successfully.",

      merchantRequestId:
        stkData.MerchantRequestID,

      checkoutRequestId:
        stkData.CheckoutRequestID,

      customerMessage:
        stkData.CustomerMessage,
    });
  } catch (error) {
    console.error(
      "STK Push error:",
      error
    );

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to initiate M-Pesa payment.",
      },
      { status: 500 }
    );
  }
}