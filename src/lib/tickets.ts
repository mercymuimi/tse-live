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