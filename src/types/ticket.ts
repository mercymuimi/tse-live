/* =========================================================
   TSE LIVE — TICKET TYPES
========================================================= */

/**
 * All add-ons recognized by the TSE Live system.
 *
 * `food` and `drinks` are informational venue extras.
 * They are NOT currently charged through online checkout.
 */
export type AddOnId =
  | "pool"
  | "food"
  | "drinks";

/**
 * All tickets available through the online ticketing system.
 *
 * At-the-gate pricing is intentionally excluded because
 * it is not an online ticket.
 */
export type TicketId =
  | "regular"
  | "vip"
  | "vvip";

/* =========================================================
   ADD-ON
========================================================= */

export type AddOn = {
  /**
   * Unique identifier for the add-on.
   */
  id: AddOnId;

  /**
   * Display name shown to customers.
   */
  name: string;

  /**
   * Price in Kenyan Shillings.
   *
   * A price of 0 means the item is not charged
   * during online checkout.
   */
  price: number;

  /**
   * Short explanation shown in the UI.
   */
  description: string;
};

/* =========================================================
   TICKET
========================================================= */

export type TicketType = {
  /**
   * Unique ticket identifier.
   */
  id: TicketId;

  /**
   * Ticket tier displayed above the ticket name.
   *
   * Example:
   * "Tier 01 — Advance"
   */
  tier: string;

  /**
   * Customer-facing ticket name.
   */
  name: string;

  /**
   * Short description of the ticket.
   */
  description: string;

  /**
   * Ticket price in Kenyan Shillings.
   *
   * This should always be treated as the canonical
   * catalogue price on the server.
   */
  price: number;

  /**
   * Everything included with the ticket.
   */
  inclusions: string[];

  /**
   * Optional extras available for this ticket.
   */
  addOns: AddOn[];
};

/* =========================================================
   SELECTED TICKET
========================================================= */

/**
 * Represents a ticket after the customer has selected it
 * and configured its quantity/add-ons.
 *
 * Used by the frontend while building an order.
 */
export type SelectedTicket = {
  /**
   * Complete ticket object from the catalogue.
   */
  ticket: TicketType;

  /**
   * Number of tickets selected.
   */
  quantity: number;

  /**
   * Selected add-on IDs.
   */
  addOns: AddOnId[];
};

/* =========================================================
   STORED TICKET SELECTION
========================================================= */

/**
 * Lightweight version stored in sessionStorage.
 *
 * We intentionally store IDs instead of the complete
 * ticket object so that prices and ticket information
 * always come from the central catalogue.
 */
export type StoredTicketSelection = {
  /**
   * ID of the selected ticket.
   */
  ticketId: TicketId;

  /**
   * Number of tickets selected.
   */
  quantity: number;

  /**
   * IDs of selected add-ons.
   */
  addOns: AddOnId[];
};

/* =========================================================
   CHECKOUT
========================================================= */

/**
 * Supported payment methods.
 *
 * M-Pesa is the primary live payment method.
 * Card can remain available for future integration.
 */
export type PaymentMethod =
  | "mpesa"
  | "card";

/**
 * Customer information collected during checkout.
 */
export type CustomerDetails = {
  fullName: string;
  email: string;
  phone: string;
};

/* =========================================================
   ORDER STATUS
========================================================= */

export type OrderStatus =
  | "pending"
  | "paid"
  | "failed"
  | "cancelled";

/**
 * Payment status used by the checkout/payment flow.
 */
export type PaymentStatus =
  | "pending"
  | "paid"
  | "failed"
  | "cancelled";