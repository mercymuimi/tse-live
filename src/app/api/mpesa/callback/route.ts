import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SECRET_KEY!
);

type CallbackItem = {
  Name: string;
  Value?: string | number;
};

type StkCallback = {
  MerchantRequestID?: string;
  CheckoutRequestID?: string;
  ResultCode?: number;
  ResultDesc?: string;
  CallbackMetadata?: {
    Item?: CallbackItem[];
  };
};

type MpesaCallbackBody = {
  Body?: {
    stkCallback?: StkCallback;
  };
};

export async function POST(request: NextRequest) {
  try {
    const body =
      (await request.json()) as MpesaCallbackBody;

    console.log("🔥 M-PESA CALLBACK RECEIVED");
    console.log(
      "🔥 CALLBACK BODY:",
      JSON.stringify(body, null, 2)
    );

    const stkCallback = body?.Body?.stkCallback;

    if (!stkCallback) {
      console.error("❌ Invalid M-Pesa callback");

      return NextResponse.json({
        ResultCode: 0,
        ResultDesc: "Accepted",
      });
    }

    const {
      MerchantRequestID,
      CheckoutRequestID,
      ResultCode,
      ResultDesc,
      CallbackMetadata,
    } = stkCallback;

    console.log("🔥 CheckoutRequestID:", CheckoutRequestID);
    console.log("🔥 ResultCode:", ResultCode);
    console.log("🔥 ResultDesc:", ResultDesc);

    if (!CheckoutRequestID) {
      console.error("❌ Missing CheckoutRequestID");

      return NextResponse.json({
        ResultCode: 0,
        ResultDesc: "Accepted",
      });
    }

    // --------------------------------------------------
    // Find the order
    // --------------------------------------------------

    const { data: order, error: orderError } = await supabase
      .from("orders")
      .select(`
        id,
        total,
        payment_status,
        checkout_request_id
      `)
      .eq("checkout_request_id", CheckoutRequestID)
      .maybeSingle();

    if (orderError) {
      console.error(
        "❌ Error finding order:",
        orderError
      );

      return NextResponse.json({
        ResultCode: 0,
        ResultDesc: "Accepted",
      });
    }

    if (!order) {
      console.error(
        "❌ No order found for CheckoutRequestID:",
        CheckoutRequestID
      );

      return NextResponse.json({
        ResultCode: 0,
        ResultDesc: "Accepted",
      });
    }

    console.log("🔥 ORDER FOUND:", order);

    // --------------------------------------------------
    // Prevent duplicate callback processing
    // --------------------------------------------------

    if (order.payment_status === "paid") {
      console.log(
        "✅ Order already marked as paid:",
        order.id
      );

      return NextResponse.json({
        ResultCode: 0,
        ResultDesc: "Accepted",
      });
    }

    // --------------------------------------------------
    // PAYMENT SUCCESS
    // --------------------------------------------------

    if (Number(ResultCode) === 0) {
      const metadata = CallbackMetadata?.Item ?? [];

      const getMetadata = (name: string) =>
        metadata.find((item) => item.Name === name)?.Value;

      const amount = getMetadata("Amount");
      const receiptNumber = getMetadata(
        "MpesaReceiptNumber"
      );
      const transactionDate = getMetadata(
        "TransactionDate"
      );
      const phoneNumber = getMetadata("PhoneNumber");

      console.log("🔥 PAYMENT METADATA:", {
        amount,
        receiptNumber,
        transactionDate,
        phoneNumber,
      });

      // ------------------------------------------------
      // Verify amount
      // ------------------------------------------------

      if (
        amount !== undefined &&
        Number(amount) !== Number(order.total)
      ) {
        console.error("❌ PAYMENT AMOUNT MISMATCH", {
          expected: order.total,
          received: amount,
        });

        await supabase
          .from("orders")
          .update({
            payment_status: "failed",
            payment_result_code: Number(ResultCode),
            payment_result_description:
              "Payment amount mismatch",
          })
          .eq("id", order.id);

        return NextResponse.json({
          ResultCode: 0,
          ResultDesc: "Accepted",
        });
      }

      // ------------------------------------------------
      // MARK ORDER AS PAID
      // ------------------------------------------------

      const { data: updatedOrder, error: updateError } =
        await supabase
          .from("orders")
          .update({
            payment_status: "paid",
            merchant_request_id:
              MerchantRequestID || null,
            mpesa_receipt_number:
              receiptNumber !== undefined
                ? String(receiptNumber)
                : null,
            payment_result_code: Number(ResultCode),
            payment_result_description:
              ResultDesc || "Payment successful",
            mpesa_transaction_date:
              transactionDate !== undefined
                ? String(transactionDate)
                : null,
          })
          .eq("id", order.id)
          .select("id, payment_status")
          .single();

      if (updateError) {
        console.error(
          "❌ FAILED TO UPDATE ORDER:",
          updateError
        );

        return NextResponse.json({
          ResultCode: 0,
          ResultDesc: "Accepted",
        });
      }

      console.log(
        "🔥 ORDER UPDATED AFTER PAYMENT:",
        updatedOrder
      );

      console.log(
        `✅ M-PESA PAYMENT SUCCESSFUL FOR ORDER ${order.id}`
      );
    }

    // --------------------------------------------------
    // PAYMENT FAILED / CANCELLED
    // --------------------------------------------------

    else {
      const { error: updateError } = await supabase
        .from("orders")
        .update({
          payment_status: "failed",
          merchant_request_id:
            MerchantRequestID || null,
          payment_result_code: Number(ResultCode),
          payment_result_description:
            ResultDesc || "M-Pesa payment failed",
        })
        .eq("id", order.id);

      if (updateError) {
        console.error(
          "❌ FAILED TO UPDATE FAILED PAYMENT:",
          updateError
        );
      } else {
        console.log(
          `❌ M-PESA PAYMENT FAILED FOR ORDER ${order.id}`
        );
      }
    }

    // Safaricom expects acknowledgement
    return NextResponse.json({
      ResultCode: 0,
      ResultDesc: "Accepted",
    });
  } catch (error) {
    console.error(
      "❌ M-PESA CALLBACK ERROR:",
      error
    );

    // Always acknowledge the callback
    return NextResponse.json({
      ResultCode: 0,
      ResultDesc: "Accepted",
    });
  }
}