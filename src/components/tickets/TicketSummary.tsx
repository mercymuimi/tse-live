"use client";

import Link from "next/link";

import type {
  SelectedTicket,
} from "@/types/ticket";

import { ADD_ONS } from "@/lib/tickets";

type TicketSummaryProps = {
  selectedTickets: SelectedTicket[];
  onContinue: () => void;
};

export default function TicketSummary({
  selectedTickets,
  onContinue,
}: TicketSummaryProps) {
  const activeTickets =
    selectedTickets.filter(
      (item) => item.quantity > 0
    );

  const ticketSubtotal =
    activeTickets.reduce(
      (sum, item) =>
        sum +
        item.ticket.price *
          item.quantity,
      0
    );

  const addOnSubtotal =
    activeTickets.reduce(
      (sum, item) => {
        const poolSelected =
          item.addOns.includes(
            "pool"
          );

        return (
          sum +
          (poolSelected
            ? ADD_ONS.pool.price * item.quantity
            : 0)
        );
      },
      0
    );

  const total =
    ticketSubtotal +
    addOnSubtotal;

  const ticketCount =
    activeTickets.reduce(
      (sum, item) =>
        sum + item.quantity,
      0
    );

  if (activeTickets.length === 0) {
    return (
      <aside className="bg-[#171717] p-6 text-white md:p-8 lg:sticky lg:top-28">
        <p className="text-[9px] uppercase tracking-[0.3em] text-white/35">
          Your selection
        </p>

        <h2 className="mt-2 text-2xl uppercase tracking-[-0.03em]">
          No tickets yet
        </h2>

        <div className="my-8 border-y border-white/10 py-10">
          <p className="text-sm text-white/40">
            Select a ticket to
            continue.
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 pt-6">
          <span className="text-[9px] uppercase tracking-[0.2em] text-white/35">
            Total
          </span>

          <span className="text-2xl">
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
            Your selection
          </p>

          <h2 className="mt-2 text-2xl uppercase tracking-[-0.03em]">
            Summary
          </h2>
        </div>

        <span className="text-[9px] uppercase tracking-[0.2em] text-white/35">
          {ticketCount}{" "}
          {ticketCount === 1
            ? "ticket"
            : "tickets"}
        </span>
      </div>

      {/* TICKETS */}

      <div className="my-8 space-y-6 border-y border-white/10 py-7">
        {activeTickets.map(
          ({
            ticket,
            quantity,
            addOns,
          }) => {
            const poolSelected =
              addOns.includes(
                "pool"
              );

            return (
              <div
                key={ticket.id}
                className="space-y-3"
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-sm uppercase">
                      {ticket.name}
                    </p>

                    <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-white/35">
                      {quantity} × KES{" "}
                      {ticket.price.toLocaleString()}
                    </p>
                  </div>

                  <p className="text-sm">
                    KES{" "}
                    {(
                      ticket.price *
                      quantity
                    ).toLocaleString()}
                  </p>
                </div>

                {poolSelected && (
                  <div className="flex items-center justify-between border-l border-white/10 pl-4 text-xs">
                    <span className="text-white/40">
                      Pool Access ×{" "}
                      {quantity}
                    </span>

                    <span>
                      KES{" "}
                      {(
                        ADD_ONS.pool.price * quantity
                      ).toLocaleString()}
                    </span>
                  </div>
                )}

                {addOns.some(
                  (id) =>
                    id === "food" ||
                    id === "drinks"
                ) && (
                  <p className="border-l border-white/10 pl-4 text-[8px] uppercase tracking-[0.12em] text-white/25">
                    Food & drinks
                    available
                    separately
                  </p>
                )}
              </div>
            );
          }
        )}
      </div>

      {/* BREAKDOWN */}

      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-white/40">
            Tickets
          </span>

          <span>
            KES{" "}
            {ticketSubtotal.toLocaleString()}
          </span>
        </div>

        {addOnSubtotal > 0 && (
          <div className="flex justify-between text-sm">
            <span className="text-white/40">
              Paid add-ons
            </span>

            <span>
              KES{" "}
              {addOnSubtotal.toLocaleString()}
            </span>
          </div>
        )}

        <div className="flex justify-between text-sm">
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
              Total
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
            {total.toLocaleString()}
          </span>
        </div>
      </div>

      {/* CTA */}

      <button
        type="button"
        onClick={onContinue}
        className="mt-7 flex w-full items-center justify-between bg-white px-5 py-4 text-[9px] font-bold uppercase tracking-[0.2em] text-black transition hover:bg-white/85"
      >
        <span>
          Continue to checkout
        </span>

        <span>→</span>
      </button>

      <Link
        href="/"
        className="mt-5 block text-center text-[8px] uppercase tracking-[0.18em] text-white/25 transition hover:text-white/50"
      >
        ← Back to TSE Live
      </Link>
    </aside>
  );
}