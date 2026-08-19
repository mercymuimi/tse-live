import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SECRET_KEY!
);

type RouteContext = {
  params: Promise<{
    orderId: string;
  }>;
};

export async function GET(
  request: Request,
  context: RouteContext
) {
  try {
    const { orderId } =
      await context.params;

    if (!orderId) {
      return NextResponse.json(
        {
          error:
            "Order ID is required.",
        },
        { status: 400 }
      );
    }

    /* =====================================================
       ORDER
    ===================================================== */

    const {
      data: order,
      error,
    } = await supabase
      .from("orders")
      .select(
        `
          id,
          full_name,
          email,
          phone,
          payment_status,
          payment_result_code,
          payment_result_description,
          mpesa_receipt_number,
          subtotal,
          addon_total,
          total,
          created_at
        `
      )
      .eq(
        "id",
        orderId
      )
      .single();

    if (error || !order) {
      console.error(
        "Order status lookup error:",
        error
      );

      return NextResponse.json(
        {
          error:
            "Order not found.",
        },
        { status: 404 }
      );
    }

    /* =====================================================
       ORDER ITEMS
       Only needed once payment is confirmed — this endpoint
       is polled every 2s while pending, so skip the extra
       queries until there's actually a receipt to build.
    ===================================================== */

    let formattedItems: {
      ticketName: string;
      quantity: number;
      unitPrice: number;
      addOnTotal: number;
      addOns: { name: string; price: number }[];
    }[] = [];

    if (order.payment_status === "paid") {
      const {
        data: items,
        error: itemsError,
      } = await supabase
        .from("order_items")
        .select(
          "id, ticket_name, quantity, unit_price, add_on_total"
        )
        .eq("order_id", orderId);

      if (itemsError) {
        console.error(
          "Order items lookup error:",
          itemsError
        );
      }

      const itemIds =
        (items ?? []).map(
          (item) => item.id
        );

      const {
        data: addons,
        error: addonsError,
      } =
        itemIds.length > 0
          ? await supabase
              .from(
                "order_item_addons"
              )
              .select(
                "order_item_id, addon_name, price"
              )
              .in(
                "order_item_id",
                itemIds
              )
          : { data: [], error: null };

      if (addonsError) {
        console.error(
          "Order item add-ons lookup error:",
          addonsError
        );
      }

      formattedItems =
        (items ?? []).map(
          (item) => ({
            ticketName:
              item.ticket_name,
            quantity:
              item.quantity,
            unitPrice:
              item.unit_price,
            addOnTotal:
              item.add_on_total,
            addOns:
              (addons ?? [])
                .filter(
                  (addon) =>
                    addon.order_item_id ===
                    item.id
                )
                .map(
                  (addon) => ({
                    name: addon.addon_name,
                    price: addon.price,
                  })
                ),
          })
        );
    }

    /* =====================================================
       RESPONSE
    ===================================================== */

    return NextResponse.json({
      success: true,
      orderId: order.id,
      paymentStatus:
        order.payment_status,
      paymentResultCode:
        order.payment_result_code,
      paymentResultDescription:
        order.payment_result_description,
      mpesaReceiptNumber:
        order.mpesa_receipt_number,
      customer: {
        fullName: order.full_name,
        email: order.email,
        phone: order.phone,
      },
      subtotal: order.subtotal,
      addonTotal: order.addon_total,
      total: order.total,
      createdAt: order.created_at,
      items: formattedItems,
    });
  } catch (error) {
    console.error(
      "Order status API error:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Could not check payment status.",
      },
      { status: 500 }
    );
  }
}