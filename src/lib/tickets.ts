import type {
  AddOn,
  AddOnId,
  TicketType,
} from "@/types/ticket";

/* =========================================================
   ADD-ONS
========================================================= */

export const ADD_ONS: Record<AddOnId, AddOn> = {
  pool: {
    id: "pool",
    name: "Pool Access",
    price: 500,
    description:
      "Access to the pool area during TSE Live.",
  },

  food: {
    id: "food",
    name: "Artisan Food",
    price: 0,
    description:
      "Food available separately at the event.",
  },

  drinks: {
    id: "drinks",
    name: "Craft Drinks",
    price: 0,
    description:
      "Drinks available separately at the event.",
  },
};

/* =========================================================
   TICKETS
========================================================= */

export const TICKETS: TicketType[] = [
  {
    id: "general",
    tier: "Tier 01",
    name: "General Admission",

    description:
      "Full event access. Fashion, culture, music and community.",

    price: 5,

    inclusions: [
      "Full event access",
      "TSE Thrift Market",
      "Styling consultations",
      "Curated content spaces",
      "Live music & DJ sets",
      "Creative community",
    ],

    addOns: [
      ADD_ONS.pool,
      ADD_ONS.food,
      ADD_ONS.drinks,
    ],
  },

  {
    id: "vip",
    tier: "Tier 02",
    name: "VIP Experience",

    description:
      "An elevated TSE Live experience with premium access.",

    price: 3500,

    inclusions: [
      "Full event access",
      "Priority entry",
      "VIP lounge access",
      "Styling consultation",
      "Curated experience",
      "Creative community",
    ],

    addOns: [
      ADD_ONS.pool,
      ADD_ONS.food,
      ADD_ONS.drinks,
    ],
  },
];

/* =========================================================
   TICKET HELPERS
========================================================= */

export function getTicketById(
  ticketId: string
): TicketType | undefined {
  return TICKETS.find(
    (ticket) => ticket.id === ticketId
  );
}

/* =========================================================
   ADD-ON HELPERS
========================================================= */

export function getAddOnById(
  addOnId: AddOnId
): AddOn {
  return ADD_ONS[addOnId];
}

/* =========================================================
   PRICE HELPERS
========================================================= */

/**
 * Returns the price of a ticket using
 * the server-side ticket catalogue.
 */
export function getTicketPrice(
  ticketId: string
): number | null {
  const ticket =
    getTicketById(ticketId);

  return ticket
    ? ticket.price
    : null;
}

/**
 * Calculates the paid add-on total
 * for one ticket.
 */
export function calculateAddOnTotal(
  addOns: AddOnId[]
): number {
  return addOns.reduce(
    (total, addOnId) => {
      const addOn =
        getAddOnById(addOnId);

      return (
        total +
        (addOn?.price ?? 0)
      );
    },
    0
  );
}

/**
 * Calculates the complete price
 * for one selected ticket.
 */
export function calculateTicketTotal(
  ticketId: string,
  quantity: number,
  addOns: AddOnId[] = []
): number {
  const ticket =
    getTicketById(ticketId);

  if (!ticket) {
    return 0;
  }

  const ticketTotal =
    ticket.price * quantity;

  const addOnTotal =
    calculateAddOnTotal(addOns) *
    quantity;

  return (
    ticketTotal +
    addOnTotal
  );
}