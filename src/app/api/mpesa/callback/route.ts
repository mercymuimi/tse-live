import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SECRET_KEY!
);

type MpesaCallbackItem = {
  Name: string;
  Value?: string | number;
};

type MpesaCallback = {
  Body?: {
    stkCallback?: {
      MerchantRequestID?: string;
      CheckoutRequestID?: string;
      ResultCode?: number;
      ResultDesc?: string;
      CallbackMetadata?: {
        Item?: MpesaCallbackItem[];
      };
    };
  };
};

export async function POST(
  request: Request
) {
  try {
    const body =
      (await request.json()) as MpesaCallback;

    console.log(
      "M-PESA CALLBACK:",
      JSON.stringify(
        body,
        null,
        2
      )
    );

    const stkCallback =
      body?.Body?.stkCallback;

    if (!stkCallback) {
      console.error(
        "Invalid M-Pesa callback payload."
      );

      return NextResponse.json({
        ResultCode: 1,
        ResultDesc:
          "Invalid callback payload",
      });
    }

    const {
      CheckoutRequestID,
      ResultCode,
      ResultDesc,
      CallbackMetadata,
    } = stkCallback;

    if (!CheckoutRequestID) {
      console.error(
        "Missing CheckoutRequestID."
      );

      return NextResponse.json({
        ResultCode: 1,
        ResultDesc:
          "Missing CheckoutRequestID",
      });
    }

    /* =====================================================
       PAYMENT SUCCESS
    ===================================================== */

    if (
      ResultCode === 0
    ) {
      const items =
        CallbackMetadata?.Item ??
        [];

      const getValue = (
        name: string
      ) => {
        const item =
          items.find(
            (item) =>
              item.Name ===
              name
          );

        return (
          item?.Value ??
          null
        );
      };

      const amount =
        getValue("Amount");

      const mpesaReceiptNumber =
        getValue(
          "MpesaReceiptNumber"
        );

      const transactionDate =
        getValue(
          "TransactionDate"
        );

      const phoneNumber =
        getValue(
          "PhoneNumber"
        );

      console.log(
        "M-PESA PAYMENT SUCCESS:",
        {
          CheckoutRequestID,
          amount,
          mpesaReceiptNumber,
          transactionDate,
          phoneNumber,
        }
      );

      /* ===================================================
         UPDATE ORDER
      =================================================== */

      const {
        data,
        error,
      } = await supabase
        .from("orders")
        .update({
          payment_status:
            "paid",

          mpesa_receipt_number:
            mpesaReceiptNumber
              ? String(
                  mpesaReceiptNumber
                )
              : null,

          payment_result_code:
            ResultCode,

          payment_result_description:
            ResultDesc ??
            null,
        })
        .eq(
          "checkout_request_id",
          CheckoutRequestID
        )
        .select("id")
        .single();

      if (error) {
        console.error(
          "Failed to update paid order:",
          error
        );

        return NextResponse.json({
          ResultCode: 1,
          ResultDesc:
            "Failed to update order",
        });
      }

      console.log(
        "ORDER MARKED AS PAID:",
        data?.id
      );
    }

    /* =====================================================
       PAYMENT FAILED / CANCELLED
    ===================================================== */

    else {
      console.log(
        "M-PESA PAYMENT FAILED:",
        {
          CheckoutRequestID,
          ResultCode,
          ResultDesc,
        }
      );

      const {
        error,
      } = await supabase
        .from("orders")
        .update({
          payment_status:
            "failed",

          payment_result_code:
            ResultCode ??
            null,

          payment_result_description:
            ResultDesc ??
            null,
        })
        .eq(
          "checkout_request_id",
          CheckoutRequestID
        );

      if (error) {
        console.error(
          "Failed to update failed order:",
          error
        );

        return NextResponse.json({
          ResultCode: 1,
          ResultDesc:
            "Failed to update order",
        });
      }
    }

    /* =====================================================
       ACKNOWLEDGE CALLBACK
    ===================================================== */

    return NextResponse.json({
      ResultCode: 0,
      ResultDesc:
        "Callback received successfully",
    });
  } catch (error) {
    console.error(
      "M-Pesa callback error:",
      error
    );

    return NextResponse.json({
      ResultCode: 1,
      ResultDesc:
        "Internal server error",
    });
  }
}