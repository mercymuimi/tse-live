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
      "Included with VIP and VVIP tickets. Not sold separately.",
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
    id: "regular",
    tier: "Tier 01 — Regular",
    name: "Regular",
    description:
      "Your entry into TSE Live — thrift, style, create and celebrate one year of The Styled Edit.",
    price: 500,

    inclusions: [
      "Full event access",
      "1 thrift outfit",
      "TSE Thrift Market",
      "Live music & entertainment",
      "Unlimited photography",
      "Curated content spaces",
    ],

    addOns: [],
  },

  {
    id: "vip",
    tier: "Tier 02 — VIP",
    name: "VIP",
    description:
      "The full TSE Live day, plus a splash — pool access included.",
    price: 800,

    inclusions: [
      "Full event access",
      "1 thrift outfit",
      "TSE Thrift Market",
      "Live music & entertainment",
      "Unlimited photography",
      "Curated content spaces",
      "Pool access",
    ],

    addOns: [],
  },

  {
    id: "vvip",
    tier: "Tier 03 — VVIP",
    name: "VVIP",
    description:
      "The complete TSE Live experience, plus your own space to showcase or sell on the day.",
    price: 1200,

    inclusions: [
      "Full event access",
      "1 thrift outfit",
      "TSE Thrift Market",
      "Live music & entertainment",
      "Unlimited photography",
      "Curated content spaces",
      "Pool access",
      "Vendor space",
    ],

    addOns: [],
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
 * No add-ons are currently sold separately through online
 * checkout. Pool access is bundled into VIP and VVIP instead
 * of being offered as a standalone add-on.
 */

export const PAID_ADD_ONS: AddOn[] = [];

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