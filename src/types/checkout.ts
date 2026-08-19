import type {
  AddOnId,
  StoredTicketSelection,
} from "@/types/ticket";

export type PaymentMethod =
  | "mpesa"
  | "card";

export type CustomerDetails = {
  fullName: string;
  email: string;
  phone: string;
};

export type CheckoutRequest = {
  customer: CustomerDetails;
  paymentMethod: PaymentMethod;
  tickets: StoredTicketSelection[];
};

export type CheckoutResponse = {
  success: boolean;
  orderId: string;
  total: number;
  paymentStatus: "pending";
};

export type OrderPaymentStatus =
  | "pending"
  | "paid"
  | "failed";

export type CheckoutSelection = {
  ticketId: string;
  quantity: number;
  addOns: AddOnId[];
};