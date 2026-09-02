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
   GET /api/orders/[orderId]
========================================================= */

export async function GET(
  _request: Request,
  {
    params,
  }: {
    params: Promise<{
      orderId: string;
    }>;
  }
) {
  try {
    /* =====================================================
       GET ORDER ID
    ===================================================== */

    const { orderId } =
      await params;

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

    /* =====================================================
       FETCH ORDER
    ===================================================== */

    const {
      data: order,
      error: orderError,
    } = await supabase
      .from("orders")
      .select(
        `
        id,
        full_name,
        email,
        phone,
        payment_method,
        payment_status,
        subtotal,
        addon_total,
        total,
        checkout_request_id,
        merchant_request_id,
        mpesa_receipt_number,
        payment_result_code,
        payment_result_description,
        mpesa_transaction_date,
        created_at
        `
      )
      .eq(
        "id",
        orderId
      )
      .single();

    if (
      orderError
    ) {
      console.error(
        "ORDER STATUS LOOKUP ERROR:",
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

    if (!order) {
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
       FETCH ORDER ITEMS
       Only needed once payment has been completed.
    ===================================================== */

    let items: unknown[] = [];

    if (
      order.payment_status ===
      "paid"
    ) {
      const {
        data: orderItems,
        error:
          itemsError,
      } = await supabase
        .from("order_items")
        .select(
          `
          id,
          ticket_id,
          ticket_name,
          quantity,
          unit_price,
          add_on_total,
          order_item_addons (
            id,
            addon_id,
            addon_name,
            addon_price
          )
          `
        )
        .eq(
          "order_id",
          order.id
        );

      if (
        itemsError
      ) {
        console.error(
          "ORDER ITEMS LOOKUP ERROR:",
          itemsError
        );

        /*
         * We don't fail the payment-status
         * request just because item details
         * could not be loaded.
         */
      } else {
        items =
          orderItems ?? [];
      }
    }

    /* =====================================================
       RESPONSE
    ===================================================== */

    return NextResponse.json(
      {
        success: true,

        order: {
          id:
            order.id,

          customer: {
            fullName:
              order.full_name,

            email:
              order.email,

            phone:
              order.phone,
          },

          paymentMethod:
            order.payment_method,

          paymentStatus:
            order.payment_status,

          subtotal:
            Number(
              order.subtotal
            ),

          addonTotal:
            Number(
              order.addon_total
            ),

          total:
            Number(
              order.total
            ),

          checkoutRequestId:
            order.checkout_request_id,

          merchantRequestId:
            order.merchant_request_id,

          mpesaReceiptNumber:
            order.mpesa_receipt_number,

          paymentResultCode:
            order.payment_result_code,

          paymentResultDescription:
            order.payment_result_description,

          mpesaTransactionDate:
            order.mpesa_transaction_date,

          createdAt:
            order.created_at,

          items,
        },

        /* -----------------------------------------------
           Convenience fields
           Used by checkout polling.
        ----------------------------------------------- */

        paymentStatus:
          order.payment_status,

        paymentResultCode:
          order.payment_result_code,

        paymentResultDescription:
          order.payment_result_description,

        mpesaReceiptNumber:
          order.mpesa_receipt_number,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(
      "ORDER API ERROR:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Something went wrong while retrieving the order.",
      },
      {
        status: 500,
      }
    );
  }
}