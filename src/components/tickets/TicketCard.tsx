"use client";

import {
  Check,
  Minus,
  Plus,
} from "lucide-react";

import type {
  AddOnId,
  SelectedTicket,
  TicketType,
} from "@/types/ticket";

type TicketCardProps = {
  ticket: TicketType;
  selected?: SelectedTicket;
  onQuantityChange: (
    ticketId: string,
    quantity: number
  ) => void;
  onToggleAddOn: (
    ticketId: string,
    addOnId: AddOnId
  ) => void;
};

export default function TicketCard({
  ticket,
  selected,
  onQuantityChange,
  onToggleAddOn,
}: TicketCardProps) {
  const quantity =
    selected?.quantity ?? 0;

  const selectedAddOns =
    selected?.addOns ?? [];

  const isSelected =
    quantity > 0;

  return (
    <article
      className={`border transition ${
        isSelected
          ? "border-black bg-white"
          : "border-black/10 bg-[#f4f1ea]"
      }`}
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="border-b border-black/10 p-6 md:p-8">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-[9px] uppercase tracking-[0.3em] text-black/35">
              {ticket.tier}
            </p>

            <h2 className="mt-3 text-3xl uppercase tracking-[-0.04em] md:text-4xl">
              {ticket.name}
            </h2>
          </div>

          <div className="text-right">
            <p className="text-[8px] uppercase tracking-[0.2em] text-black/35">
              From
            </p>

            <p className="mt-1 text-2xl tracking-[-0.04em]">
              KES{" "}
              {ticket.price.toLocaleString()}
            </p>
          </div>
        </div>

        <p className="mt-5 max-w-xl text-sm leading-6 text-black/50">
          {ticket.description}
        </p>
      </div>

      {/* =====================================================
          INCLUSIONS
      ===================================================== */}

      <div className="grid gap-8 p-6 md:grid-cols-[1fr_auto] md:p-8">
        <div>
          <p className="text-[9px] uppercase tracking-[0.25em] text-black/35">
            Included
          </p>

          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {ticket.inclusions.map(
              (inclusion) => (
                <li
                  key={inclusion}
                  className="flex items-start gap-3 text-xs text-black/55"
                >
                  <Check
                    size={13}
                    strokeWidth={1.5}
                    className="mt-0.5 shrink-0"
                  />

                  <span>
                    {inclusion}
                  </span>
                </li>
              )
            )}
          </ul>
        </div>

        {/* =================================================
            QUANTITY
        ================================================= */}

        <div className="flex items-center justify-between gap-5 border-t border-black/10 pt-6 md:block md:border-t-0 md:pt-0">
          <div>
            <p className="text-[9px] uppercase tracking-[0.25em] text-black/35">
              Quantity
            </p>

            <div className="mt-3 flex items-center border border-black/15">
              <button
                type="button"
                aria-label={`Decrease ${ticket.name} quantity`}
                disabled={quantity === 0}
                onClick={() =>
                  onQuantityChange(
                    ticket.id,
                    Math.max(
                      0,
                      quantity - 1
                    )
                  )
                }
                className="flex h-11 w-11 items-center justify-center transition hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-20"
              >
                <Minus
                  size={15}
                  strokeWidth={1.5}
                />
              </button>

              <span className="flex h-11 min-w-12 items-center justify-center border-x border-black/15 text-sm">
                {quantity}
              </span>

              <button
                type="button"
                aria-label={`Increase ${ticket.name} quantity`}
                onClick={() =>
                  onQuantityChange(
                    ticket.id,
                    quantity + 1
                  )
                }
                className="flex h-11 w-11 items-center justify-center transition hover:bg-black hover:text-white"
              >
                <Plus
                  size={15}
                  strokeWidth={1.5}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          ADD-ONS
      ===================================================== */}

      {isSelected && (
        <div className="border-t border-black/10 bg-black/[0.025] p-6 md:p-8">
          <div className="mb-5">
            <p className="text-[9px] uppercase tracking-[0.25em] text-black/35">
              Enhance your experience
            </p>

            <p className="mt-2 text-xs text-black/40">
              Optional extras for your
              selected tickets.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {ticket.addOns.map(
              (addOn) => {
                const active =
                  selectedAddOns.includes(
                    addOn.id
                  );

                return (
                  <button
                    key={addOn.id}
                    type="button"
                    onClick={() =>
                      onToggleAddOn(
                        ticket.id,
                        addOn.id
                      )
                    }
                    className={`border p-4 text-left transition ${
                      active
                        ? "border-black bg-black text-white"
                        : "border-black/10 bg-white hover:border-black/30"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.08em]">
                          {addOn.name}
                        </p>

                        <p
                          className={`mt-2 text-[9px] leading-4 ${
                            active
                              ? "text-white/45"
                              : "text-black/35"
                          }`}
                        >
                          {
                            addOn.description
                          }
                        </p>
                      </div>

                      <div className="shrink-0 text-right">
                        <p className="text-xs">
                          {addOn.price ===
                          0
                            ? "A La Carte"
                            : `KES ${addOn.price.toLocaleString()}`}
                        </p>

                        {active && (
                          <Check
                            size={14}
                            strokeWidth={
                              1.5
                            }
                            className="ml-auto mt-3"
                          />
                        )}
                      </div>
                    </div>
                  </button>
                );
              }
            )}
          </div>
        </div>
      )}
    </article>
  );
}