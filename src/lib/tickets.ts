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
    price: 300,
    description:
      "Access to the pool and lifestyle area during TSE Live.",
  },

  food: {
    id: "food",
    name: "Artisan Food",
    price: 0,
    description:
      "Food will be available for purchase separately at the venue.",
  },

  drinks: {
    id: "drinks",
    name: "Craft Drinks",
    price: 0,
    description:
      "Drinks will be available for purchase separately at the venue.",
  },
};

/* =========================================================
   ONLINE TICKETS
========================================================= */

export const TICKETS: TicketType[] = [
  {
    id: "experience",
    tier: "Tier 01 — Advance",
    name: "TSE Experience",
    description:
      "Your full TSE Live experience — thrift, style, create, connect and celebrate one year of The Styled Edit.",
    price: 5,

    inclusions: [
      "Full event access",
      "TSE Thrift Market",
      "Styling sessions",
      "Content & photoshoot spaces",
      "Live music & DJ sets",
      "Creative community",
      "TSE event outfit / styled piece",
    ],

    addOns: [
      ADD_ONS.pool,
    ],
  },

  {
    id: "vendor",
    tier: "Tier 02 — Vendor",
    name: "TSE Vendor",
    description:
      "Bring your brand to TSE Live. Sell, connect and get your work in front of the TSE community.",
    price: 1000,

    inclusions: [
      "Full event access",
      "Dedicated selling spot",
      "Featured in TSE content",
      "TSE community exposure",
      "Priority vendor setup",
      "Networking with creatives, vendors & brands",
    ],

    addOns: [
      ADD_ONS.pool,
    ],
  },
];

/* =========================================================
   GATE PRICING
   ========================================================= */

/**
 * At-the-gate pricing is intentionally kept separate
 * from the online ticket catalogue.
 *
 * This means customers cannot accidentally purchase
 * the gate ticket through the normal online checkout.
 */

export const GATE_TICKET = {
  id: "gate",
  name: "At The Gate",
  price: 800,
  description:
    "Walk-in entry on the day. Full event access, subject to availability.",
};

/* =========================================================
   PAID ADD-ONS
========================================================= */

/**
 * Only these add-ons should affect checkout totals.
 *
 * Food and drinks are purchased separately at the venue.
 */

export const PAID_ADD_ONS: AddOn[] = [
  ADD_ONS.pool,
];

/* =========================================================
   VENUE EXTRAS
========================================================= */

/**
 * Informational extras that may appear on the website,
 * but are NOT charged during checkout.
 */

export const VENUE_EXTRAS: AddOn[] = [
  ADD_ONS.food,
  ADD_ONS.drinks,
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
): AddOn | undefined {
  return ADD_ONS[addOnId];
}

/**
 * Returns the canonical price of a ticket.
 *
 * IMPORTANT:
 * This function should be used by server-side
 * checkout/payment validation.
 */
export function getTicketPrice(
  ticketId: string
): number | null {
  const ticket = getTicketById(ticketId);

  return ticket ? ticket.price : null;
}

/**
 * Returns whether an add-on is actually payable
 * through online checkout.
 */
export function isPaidAddOn(
  addOnId: AddOnId
): boolean {
  return PAID_ADD_ONS.some(
    (addOn) => addOn.id === addOnId
  );
}

/**
 * Calculates the paid add-on total for ONE ticket.
 *
 * Free venue extras such as food and drinks
 * automatically contribute KES 0.
 */
export function calculateAddOnTotal(
  addOns: AddOnId[]
): number {
  return addOns.reduce((total, addOnId) => {
    if (!isPaidAddOn(addOnId)) {
      return total;
    }

    const addOn = getAddOnById(addOnId);

    return total + (addOn?.price ?? 0);
  }, 0);
}

/**
 * Calculates the complete price for a ticket selection.
 */
export function calculateTicketTotal(
  ticketId: string,
  quantity: number,
  addOns: AddOnId[] = []
): number {
  const ticket = getTicketById(ticketId);

  if (!ticket || quantity <= 0) {
    return 0;
  }

  const ticketTotal =
    ticket.price * quantity;

  const addOnTotal =
    calculateAddOnTotal(addOns) * quantity;

  return ticketTotal + addOnTotal;
}