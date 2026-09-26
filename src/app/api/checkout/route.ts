import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

import {
  ADD_ONS,
  TICKETS,
  getTicketById,
} from "@/lib/tickets";

import type {
  AddOnId,
} from "@/types/ticket";

/* =========================================================
   SUPABASE
========================================================= */

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL;

const supabaseKey =
  process.env.SUPABASE_SECRET_KEY;

if (
  !supabaseUrl ||
  !supabaseKey
) {
  throw new Error(
    "Missing Supabase environment variables."
  );
}

const supabase =
  createClient(
    supabaseUrl,
    supabaseKey
  );

/* =========================================================
   TYPES
========================================================= */

type Customer = {
  fullName: string;
  email: string;
  phone: string;
};

type IncomingTicket = {
  ticketId?: string;
  quantity?: number;
  addOns?: string[];

  /*
   * Kept optional for backwards compatibility
   * with the current checkout payload.
   */
  ticket?: {
    id?: string;
  };
};

type CheckoutRequest = {
  customer?: Customer;
  paymentMethod?: "mpesa" | "card";
  selectedTickets?: IncomingTicket[];
};

/* =========================================================
   HELPERS
========================================================= */

function isValidEmail(
  email: string
): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    email
  );
}

function normalizePhone(
  phone: string
): string {
  const cleaned =
    phone
      .replace(/\s+/g, "")
      .replace(/-/g, "");

  if (
    cleaned.startsWith(
      "+254"
    )
  ) {
    return cleaned.slice(1);
  }

  if (
    cleaned.startsWith(
      "254"
    )
  ) {
    return cleaned;
  }

  if (
    cleaned.startsWith(
      "0"
    )
  ) {
    return `254${cleaned.slice(
      1
    )}`;
  }

  if (
    cleaned.startsWith(
      "7"
    ) ||
    cleaned.startsWith(
      "1"
    )
  ) {
    return `254${cleaned}`;
  }

  return cleaned;
}

function isValidKenyanPhone(
  phone: string
): boolean {
  return /^254[17]\d{8}$/.test(
    phone
  );
}

function isAddOnId(
  value: string
): value is AddOnId {
  return (
    value in ADD_ONS
  );
}

/* =========================================================
   POST /api/checkout
========================================================= */

export async function POST(
  request: Request
) {
  try {
    /* =====================================================
       PARSE REQUEST
    ===================================================== */

    const body =
      (await request.json()) as CheckoutRequest;

    const customer =
      body.customer;

    const paymentMethod =
      body.paymentMethod;

    const selectedTickets =
      body.selectedTickets;

    /* =====================================================
       BASIC VALIDATION
    ===================================================== */

    if (!customer) {
      return NextResponse.json(
        {
          error:
            "Customer details are required.",
        },
        {
          status: 400,
        }
      );
    }

    if (
      typeof customer.fullName !==
        "string" ||
      customer.fullName.trim()
        .length < 2
    ) {
      return NextResponse.json(
        {
          error:
            "Please enter your full name.",
        },
        {
          status: 400,
        }
      );
    }

    if (
      typeof customer.email !==
        "string" ||
      !isValidEmail(
        customer.email.trim()
      )
    ) {
      return NextResponse.json(
        {
          error:
            "Please enter a valid email address.",
        },
        {
          status: 400,
        }
      );
    }

    if (
      typeof customer.phone !==
        "string"
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
      normalizePhone(
        customer.phone
      );

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
      paymentMethod !==
        "mpesa" &&
      paymentMethod !==
        "card"
    ) {
      return NextResponse.json(
        {
          error:
            "Invalid payment method.",
        },
        {
          status: 400,
        }
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
            "Please select at least one ticket.",
        },
        {
          status: 400,
        }
      );
    }

    /* =====================================================
       LIMIT TICKET TYPES
       Prevents duplicate ticket entries being abused.
    ===================================================== */

    if (
      selectedTickets.length >
      TICKETS.length
    ) {
      return NextResponse.json(
        {
          error:
            "Invalid ticket selection.",
        },
        {
          status: 400,
        }
      );
    }

    /* =====================================================
       SERVER-SIDE CALCULATION
    ===================================================== */

    let subtotal = 0;
    let addonTotal = 0;

    const validatedTickets: {
      ticketId: string;
      ticketName: string;
      quantity: number;
      unitPrice: number;
      addOns: AddOnId[];
      addOnTotal: number;
    }[] = [];

    const selectedTicketIds =
      new Set<string>();

    for (
      const item of selectedTickets
    ) {
      const ticketId =
        item.ticketId ??
        item.ticket?.id;

      if (
        typeof ticketId !==
        "string"
      ) {
        return NextResponse.json(
          {
            error:
              "Invalid ticket selection.",
          },
          {
            status: 400,
          }
        );
      }

      /* -----------------------------------------------
         PREVENT DUPLICATE TICKET IDS
      ----------------------------------------------- */

      if (
        selectedTicketIds.has(
          ticketId
        )
      ) {
        return NextResponse.json(
          {
            error:
              "Duplicate ticket selection detected.",
          },
          {
            status: 400,
          }
        );
      }

      selectedTicketIds.add(
        ticketId
      );

      /* -----------------------------------------------
         GET CANONICAL TICKET
      ----------------------------------------------- */

      const ticket =
        getTicketById(
          ticketId
        );

      if (!ticket) {
        return NextResponse.json(
          {
            error:
              "One or more selected tickets are invalid.",
          },
          {
            status: 400,
          }
        );
      }

      /* -----------------------------------------------
         QUANTITY
      ----------------------------------------------- */

      const quantity =
        Number(
          item.quantity
        );

      if (
        !Number.isInteger(
          quantity
        ) ||
        quantity < 1 ||
        quantity > 10
      ) {
        return NextResponse.json(
          {
            error:
              "Ticket quantity must be between 1 and 10.",
          },
          {
            status: 400,
          }
        );
      }

      /* -----------------------------------------------
         ADD-ONS
      ----------------------------------------------- */

      const requestedAddOns =
        Array.isArray(
          item.addOns
        )
          ? item.addOns
          : [];

      const uniqueAddOns =
        [
          ...new Set(
            requestedAddOns
          ),
        ];

      const validAddOns: AddOnId[] =
        [];

      for (
        const addOnId of uniqueAddOns
      ) {
        if (
          !isAddOnId(
            addOnId
          )
        ) {
          return NextResponse.json(
            {
              error:
                "One or more selected add-ons are invalid.",
            },
            {
              status: 400,
            }
          );
        }

        const offered =
          ticket.addOns.some(
            (addOn) =>
              addOn.id ===
              addOnId
          );

        if (!offered) {
          return NextResponse.json(
            {
              error:
                `${addOnId} is not available for ${ticket.name}.`,
            },
            {
              status: 400,
            }
          );
        }

        validAddOns.push(
          addOnId
        );
      }

      /* -----------------------------------------------
         CALCULATE ADD-ONS
      ----------------------------------------------- */

      const itemAddOnTotal =
        validAddOns.reduce(
          (
            total,
            addOnId
          ) => {
            const addOn =
              ADD_ONS[
                addOnId
              ];

            return (
              total +
              addOn.price
            );
          },
          0
        );

      /* -----------------------------------------------
         CALCULATE TICKET
      ----------------------------------------------- */

      const itemTicketTotal =
        ticket.price *
        quantity;

      const itemTotal =
        itemTicketTotal +
        itemAddOnTotal *
          quantity;

      subtotal +=
        itemTicketTotal;

      addonTotal +=
        itemAddOnTotal *
        quantity;

      validatedTickets.push({
        ticketId:
          ticket.id,
        ticketName:
          ticket.name,
        quantity,
        unitPrice:
          ticket.price,
        addOns:
          validAddOns,
        addOnTotal:
          itemAddOnTotal,
      });
    }

    /* =====================================================
       FINAL TOTAL
    ===================================================== */

    const total =
      subtotal +
      addonTotal;

    if (
      !Number.isFinite(
        total
      ) ||
      total <= 0
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
          customer.email
            .trim()
            .toLowerCase(),

        phone:
          normalizedPhone,

        payment_method:
          paymentMethod,

        payment_status:
          "pending",

        subtotal,

        addon_total:
          addonTotal,

        total,
      })
      .select(
        "id, total, payment_status"
      )
      .single();

    if (orderError) {
      console.error(
        "ORDER CREATION ERROR:",
        orderError
      );

      return NextResponse.json(
        {
          error:
            "Could not create your order.",
        },
        {
          status: 500,
        }
      );
    }

    if (!order) {
      return NextResponse.json(
        {
          error:
            "Order creation failed.",
        },
        {
          status: 500,
        }
      );
    }

    /* =====================================================
       CREATE ORDER ITEMS (BATCHED)

       All order_items are inserted in a single request
       instead of looping with sequential awaits. This
       cuts several round-trips down to one, which matters
       a lot for perceived checkout speed.
    ===================================================== */

    const orderItemRows =
      validatedTickets.map(
        (item) => ({
          order_id:
            order.id,

          ticket_id:
            item.ticketId,

          ticket_name:
            item.ticketName,

          quantity:
            item.quantity,

          unit_price:
            item.unitPrice,

          add_on_total:
            item.addOnTotal *
            item.quantity,
        })
      );

    const {
      data: insertedItems,
      error: orderItemsError,
    } = await supabase
      .from("order_items")
      .insert(
        orderItemRows
      )
      .select(
        "id, ticket_id"
      );

    if (
      orderItemsError ||
      !insertedItems
    ) {
      console.error(
        "ORDER ITEMS ERROR:",
        orderItemsError
      );

      /*
       * Remove the incomplete order.
       * This prevents orphaned pending orders.
       */
      await supabase
        .from("orders")
        .delete()
        .eq(
          "id",
          order.id
        );

      return NextResponse.json(
        {
          error:
            "Could not create your order items.",
        },
        {
          status: 500,
        }
      );
    }

    /* =====================================================
       CREATE ADD-ONS (BATCHED)

       Match each inserted order_item back to its original
       validated ticket (by ticket_id) so we know which
       add-ons belong to which order_item id, then insert
       every add-on row in a single request.
    ===================================================== */

    const addonRows =
      insertedItems.flatMap(
        (insertedItem) => {
          const original =
            validatedTickets.find(
              (item) =>
                item.ticketId ===
                insertedItem.ticket_id
            );

          if (
            !original ||
            original.addOns
              .length === 0
          ) {
            return [];
          }

          return original.addOns.map(
            (addOnId) => ({
              order_item_id:
                insertedItem.id,

              addon_id:
                addOnId,

              addon_name:
                ADD_ONS[
                  addOnId
                ].name,

              addon_price:
                ADD_ONS[
                  addOnId
                ].price,
            })
          );
        }
      );

    if (
      addonRows.length > 0
    ) {
      const {
        error: addonError,
      } = await supabase
        .from(
          "order_item_addons"
        )
        .insert(
          addonRows
        );

      if (addonError) {
        console.error(
          "ORDER ADD-ON ERROR:",
          addonError
        );

        /*
         * Clean up the incomplete order.
         */
        await supabase
          .from(
            "order_items"
          )
          .delete()
          .eq(
            "order_id",
            order.id
          );

        await supabase
          .from("orders")
          .delete()
          .eq(
            "id",
            order.id
          );

        return NextResponse.json(
          {
            error:
              "Could not save your selected add-ons.",
          },
          {
            status: 500,
          }
        );
      }
    }

    /* =====================================================
       SUCCESS
    ===================================================== */

    return NextResponse.json(
      {
        success: true,

        orderId:
          order.id,

        total:
          Number(
            order.total
          ),

        paymentStatus:
          order.payment_status,

        paymentMethod,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(
      "CHECKOUT API ERROR:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Something went wrong while creating your order.",
      },
      {
        status: 500,
      }
    );
  }
}