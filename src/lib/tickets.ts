import type {
  AddOn,
  AddOnId,
  TicketType,
} from "@/types/ticket";

/* =========================================================
   ADD-ONS
========================================================= */

export const ADD_ONS: Record<
  AddOnId,
  AddOn
> = {
  pool: {
    id: "pool",
    name: "Pool Access",
    price: 500,
    description:
      "Access to the pool area during the event.",
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
    id: "regular",
    tier: "Tier 01 — Advance",
    name: "Regular",
    description:
      "Advance entry to TSE Live. Full event access plus your day's outfit, curated by TSE.",
    price: 500,

    inclusions: [
      "Full event access",
      "Your day's outfit — a styled TSE piece",
      "TSE Thrift Market",
      "Styling sessions",
      "Content & photoshoot spaces",
      "Live music & DJ sets",
      "Pool & lifestyle area",
      "Creative community",
    ],

    addOns: [
      ADD_ONS.pool,
      ADD_ONS.food,
      ADD_ONS.drinks,
    ],
  },

  {
    id: "gate",
    tier: "Tier 02 — At The Gate",
    name: "At The Gate",
    description:
      "Walk-in entry on the day. Full event access — outfit pieces available while stock lasts.",
    price: 800,

    inclusions: [
      "Full event access",
      "TSE Thrift Market",
      "Styling sessions",
      "Content & photoshoot spaces",
      "Live music & DJ sets",
      "Pool & lifestyle area",
      "Creative community",
    ],

    addOns: [
      ADD_ONS.pool,
      ADD_ONS.food,
      ADD_ONS.drinks,
    ],
  },

  {
    id: "vendor",
    tier: "Tier 03 — Vendor",
    name: "Vendor",
    description:
      "Sell at TSE Live and get featured in TSE content and community — for thrift sellers, designers, stylists and creative businesses.",
    price: 1000,

    inclusions: [
      "Full event access",
      "Dedicated selling spot",
      "Featured in TSE content",
      "Spotlighted in the TSE community",
      "Priority vendor setup access",
      "Networking with other vendors & brands",
    ],

    addOns: [
      ADD_ONS.pool,
      ADD_ONS.food,
      ADD_ONS.drinks,
    ],
  },
];

/* =========================================================
   HELPERS
========================================================= */

export function getTicketById(
  ticketId: string
): TicketType | undefined {
  return TICKETS.find(
    (ticket) => ticket.id === ticketId
  );
}

export function getAddOnById(
  addOnId: AddOnId
): AddOn {
  return ADD_ONS[addOnId];
}

/**
 * Returns the price of a ticket using
 * the server-side ticket catalogue.
 */
export function getTicketPrice(
  ticketId: string
): number | null {
  const ticket = getTicketById(ticketId);
  return ticket ? ticket.price : null;
}

/**
 * Calculates the paid add-on total
 * for one ticket.
 */
export function calculateAddOnTotal(
  addOns: AddOnId[]
): number {
  return addOns.reduce((total, addOnId) => {
    const addOn = getAddOnById(addOnId);
    return total + (addOn?.price ?? 0);
  }, 0);
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
  const ticket = getTicketById(ticketId);

  if (!ticket) {
    return 0;
  }

  const ticketTotal = ticket.price * quantity;
  const addOnTotal = calculateAddOnTotal(addOns) * quantity;

  return ticketTotal + addOnTotal;
}