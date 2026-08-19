import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

import { ADD_ONS } from "@/lib/tickets";
import type { AddOnId } from "@/types/ticket";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

type CheckoutRequest = {
  customer: {
    fullName: string;
    email: string;
    phone: string;
  };

  paymentMethod: "mpesa" | "card";

  selectedTickets: {
    ticket: {
      id: string;
      name: string;
      price: number;
    };

    quantity: number;
    addOns: AddOnId[];
  }[];
};

export async function POST(
  request: Request
) {
  try {
    const body =
      (await request.json()) as CheckoutRequest;

    const {
      customer,
      paymentMethod,
      selectedTickets,
    } = body;

    /* =====================================================
       VALIDATION
    ===================================================== */

    if (
      !customer?.fullName?.trim() ||
      !customer?.email?.trim() ||
      !customer?.phone?.trim()
    ) {
      return NextResponse.json(
        {
          error:
            "Customer details are required.",
        },
        { status: 400 }
      );
    }

    if (
      !["mpesa", "card"].includes(
        paymentMethod
      )
    ) {
      return NextResponse.json(
        {
          error:
            "Invalid payment method.",
        },
        { status: 400 }
      );
    }

    if (
      !Array.isArray(
        selectedTickets
      ) ||
      selectedTickets.length === 0
    ) {
      return NextResponse.json(
        {
          error:
            "No tickets selected.",
        },
        { status: 400 }
      );
    }

    /* =====================================================
       CALCULATE TOTAL
    ===================================================== */

    let subtotal = 0;
    let addonTotal = 0;

    for (const item of selectedTickets) {
      if (
        !item.ticket ||
        !item.ticket.id ||
        !item.ticket.name ||
        typeof item.ticket.price !==
          "number" ||
        item.quantity <= 0
      ) {
        return NextResponse.json(
          {
            error:
              "Invalid ticket selection.",
          },
          { status: 400 }
        );
      }

      subtotal +=
        item.ticket.price *
        item.quantity;

      for (const addonId of
        item.addOns ?? []) {
        const addon =
          ADD_ONS[
            addonId as keyof typeof ADD_ONS
          ];

        if (!addon) {
          continue;
        }

        addonTotal +=
          addon.price *
          item.quantity;
      }
    }

    const total =
      subtotal + addonTotal;

    /* =====================================================
       CREATE ORDER
    ===================================================== */

    const {
      data: order,
      error: orderError,
    } = await supabase
      .from("orders")
      .insert({
        full_name:
          customer.fullName.trim(),

        email:
          customer.email.trim(),

        phone:
          customer.phone.trim(),

        payment_method:
          paymentMethod,

        payment_status:
          "pending",

        subtotal,
        addon_total:
          addonTotal,
        total,
      })
      .select()
      .single();

    if (orderError) {
      console.error(
        "Order creation error:",
        orderError
      );

      return NextResponse.json(
        {
          error:
            "Could not create order.",
          details:
            orderError.message,
        },
        { status: 500 }
      );
    }

    /* =====================================================
       CREATE ORDER ITEMS
    ===================================================== */

    for (const item of selectedTickets) {
      let itemAddonTotal = 0;

      const selectedAddOns =
        item.addOns ?? [];

      for (const addonId of
        selectedAddOns) {
        const addon =
          ADD_ONS[
            addonId as keyof typeof ADD_ONS
          ];

        if (!addon) {
          continue;
        }

        itemAddonTotal +=
          addon.price *
          item.quantity;
      }

      const {
        data: orderItem,
        error: itemError,
      } = await supabase
        .from("order_items")
        .insert({
          order_id: order.id,
          ticket_id:
            item.ticket.id,
          ticket_name:
            item.ticket.name,
          quantity:
            item.quantity,
          unit_price:
            item.ticket.price,
          add_on_total:
            itemAddonTotal,
        })
        .select()
        .single();

      if (itemError) {
        console.error(
          "Order item creation error:",
          itemError
        );

        return NextResponse.json(
          {
            error:
              "Order was created but ticket details could not be saved.",
            details:
              itemError.message,
          },
          { status: 500 }
        );
      }

      /* =================================================
         CREATE ADD-ONS
      ================================================= */

      for (const addonId of
        selectedAddOns) {
        const addon =
          ADD_ONS[
            addonId as keyof typeof ADD_ONS
          ];

        if (!addon) {
          continue;
        }

        const {
          error: addonError,
        } = await supabase
          .from("order_item_addons")
          .insert({
            order_item_id:
              orderItem.id,

            addon_id:
              addonId,

            addon_name:
              addon.name,

            price:
              addon.price,
          });

        if (addonError) {
          console.error(
            "Add-on creation error:",
            addonError
          );

          return NextResponse.json(
            {
              error:
                "Order was created but add-on details could not be saved.",
              details:
                addonError.message,
            },
            { status: 500 }
          );
        }
      }
    }

    /* =====================================================
       SUCCESS
    ===================================================== */

    return NextResponse.json({
      success: true,
      orderId: order.id,
      total,
      paymentStatus: "pending",
    });
  } catch (error) {
    console.error(
      "Checkout API error:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Something went wrong during checkout.",
      },
      { status: 500 }
    );
  }
}