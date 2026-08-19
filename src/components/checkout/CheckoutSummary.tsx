"use client";

import type { SelectedTicket } from "@/types/ticket";
import { ADD_ONS } from "@/lib/tickets";

type CheckoutSummaryProps = {
  selectedTickets: SelectedTicket[];
  total?: number;
};

export default function CheckoutSummary({
  selectedTickets,
  total,
}: CheckoutSummaryProps) {
  const activeTickets = selectedTickets.filter(
    (item) => item.quantity > 0
  );

  const ticketSubtotal = activeTickets.reduce(
    (sum, item) =>
      sum +
      item.ticket.price * item.quantity,
    0
  );

  const addOnSubtotal = activeTickets.reduce(
    (sum, item) => {
      const poolSelected =
        (item.addOns ?? []).includes("pool");

      return (
        sum +
        (poolSelected
          ? ADD_ONS.pool.price * item.quantity
          : 0)
      );
    },
    0
  );

  const calculatedTotal =
    ticketSubtotal + addOnSubtotal;

  const displayTotal =
    typeof total === "number"
      ? total
      : calculatedTotal;

  const ticketCount = activeTickets.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  if (activeTickets.length === 0) {
    return (
      <aside className="bg-[#171717] p-6 text-white md:p-8 lg:sticky lg:top-28">
        <p className="text-[9px] uppercase tracking-[0.3em] text-white/35">
          Order
        </p>

        <h2 className="mt-2 text-2xl uppercase tracking-[-0.03em]">
          Summary
        </h2>

        <div className="my-8 border-y border-white/10 py-10 text-center">
          <p className="text-sm uppercase tracking-[0.08em] text-white/40">
            No tickets selected
          </p>

          <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-white/20">
            Return to tickets to continue
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 pt-6">
          <span className="text-[9px] uppercase tracking-[0.25em] text-white/40">
            Total
          </span>

          <span className="text-3xl tracking-[-0.04em]">
            KES 0
          </span>
        </div>
      </aside>
    );
  }

  return (
    <aside className="bg-[#171717] p-6 text-white md:p-8 lg:sticky lg:top-28">
      {/* HEADER */}
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="text-[9px] uppercase tracking-[0.3em] text-white/35">
            Your order
          </p>

          <h2 className="mt-2 text-2xl uppercase tracking-[-0.03em]">
            Summary
          </h2>
        </div>

        <span className="pt-1 text-[9px] uppercase tracking-[0.2em] text-white/35">
          {ticketCount}{" "}
          {ticketCount === 1
            ? "ticket"
            : "tickets"}
        </span>
      </div>

      {/* ITEMS */}
      <div className="my-8 border-y border-white/10 py-7">
        <div className="space-y-8">
          {activeTickets.map(
            ({ ticket, quantity, addOns }) => {
              const selectedAddOns =
                addOns ?? [];

              const poolSelected =
                selectedAddOns.includes(
                  "pool"
                );

              const foodSelected =
                selectedAddOns.includes(
                  "food"
                );

              const drinksSelected =
                selectedAddOns.includes(
                  "drinks"
                );

              return (
                <div
                  key={ticket.id}
                  className="space-y-4"
                >
                  {/* TICKET */}
                  <div className="flex items-start justify-between gap-5">
                    <div className="min-w-0">
                      <p className="text-sm uppercase tracking-[-0.01em]">
                        {ticket.name}
                      </p>

                      <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-white/35">
                        {quantity} × KES{" "}
                        {ticket.price.toLocaleString()}
                      </p>
                    </div>

                    <p className="shrink-0 text-sm">
                      KES{" "}
                      {(
                        ticket.price *
                        quantity
                      ).toLocaleString()}
                    </p>
                  </div>

                  {/* ADD-ONS */}
                  {(poolSelected ||
                    foodSelected ||
                    drinksSelected) && (
                    <div className="border-l border-white/10 pl-4">
                      <p className="mb-3 text-[8px] uppercase tracking-[0.2em] text-white/25">
                        Extras
                      </p>

                      <div className="space-y-2">
                        {poolSelected && (
                          <div className="flex items-center justify-between gap-4 text-xs">
                            <span className="text-white/45">
                              Pool Access ×{" "}
                              {quantity}
                            </span>

                            <span>
                              KES{" "}
                              {(
                                ADD_ONS.pool.price *
                                quantity
                              ).toLocaleString()}
                            </span>
                          </div>
                        )}

                        {foodSelected && (
                          <div className="flex items-center justify-between gap-4 text-xs">
                            <span className="text-white/45">
                              Artisan Food
                            </span>

                            <span className="text-[9px] uppercase tracking-[0.12em] text-white/25">
                              At event
                            </span>
                          </div>
                        )}

                        {drinksSelected && (
                          <div className="flex items-center justify-between gap-4 text-xs">
                            <span className="text-white/45">
                              Craft Drinks
                            </span>

                            <span className="text-[9px] uppercase tracking-[0.12em] text-white/25">
                              At event
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            }
          )}
        </div>
      </div>

      {/* BREAKDOWN */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-white/40">
            Tickets
          </span>

          <span>
            KES{" "}
            {ticketSubtotal.toLocaleString()}
          </span>
        </div>

        {addOnSubtotal > 0 && (
          <div className="flex items-center justify-between text-sm">
            <span className="text-white/40">
              Paid extras
            </span>

            <span>
              KES{" "}
              {addOnSubtotal.toLocaleString()}
            </span>
          </div>
        )}

        <div className="flex items-center justify-between text-sm">
          <span className="text-white/40">
            Service fee
          </span>

          <span>KES 0</span>
        </div>
      </div>

      {/* TOTAL */}
      <div className="mt-7 border-t border-white/10 pt-6">
        <div className="flex items-end justify-between gap-5">
          <div>
            <p className="text-[9px] uppercase tracking-[0.25em] text-white/35">
              Total to pay
            </p>

            <p className="mt-1 text-[8px] uppercase tracking-[0.15em] text-white/20">
              {ticketCount}{" "}
              {ticketCount === 1
                ? "ticket"
                : "tickets"}
            </p>
          </div>

          <span className="text-3xl tracking-[-0.04em]">
            KES{" "}
            {displayTotal.toLocaleString()}
          </span>
        </div>
      </div>

      {/* NOTES */}
      <div className="mt-6 space-y-4 border-t border-white/10 pt-5">
        <p className="text-[8px] uppercase leading-5 tracking-[0.15em] text-white/25">
          Food and drinks are available separately
          at the event and are not included in your
          checkout total.
        </p>

        <p className="border-t border-white/10 pt-4 text-[8px] uppercase leading-5 tracking-[0.15em] text-white/25">
          Tickets are non-refundable. Physical
          identification may be required at entry.
        </p>
      </div>
    </aside>
  );
}