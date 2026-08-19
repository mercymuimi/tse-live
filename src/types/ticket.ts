export type AddOnId = "pool" | "food" | "drinks";

export type AddOn = {
  id: AddOnId;
  name: string;
  price: number;
  description: string;
};

export type TicketType = {
  id: string;
  tier: string;
  name: string;
  description: string;
  price: number;
  inclusions: string[];
  addOns: AddOn[];
};

export type SelectedTicket = {
  ticket: TicketType;
  quantity: number;
  addOns: AddOnId[];
};

export type StoredTicketSelection = {
  ticketId: string;
  quantity: number;
  addOns: AddOnId[];
};