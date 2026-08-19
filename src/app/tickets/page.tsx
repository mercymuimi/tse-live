"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import { useRouter } from "next/navigation";

import TicketCard from "@/components/tickets/TicketCard";
import TicketSummary from "@/components/tickets/TicketSummary";

import {
  TICKETS,
} from "@/lib/tickets";

import type {
  AddOnId,
  SelectedTicket,
  StoredTicketSelection,
} from "@/types/ticket";

const STORAGE_KEY =
  "tse-ticket-selection";

export default function TicketsPage() {
  const router = useRouter();

  const [
    selectedTickets,
    setSelectedTickets,
  ] = useState<SelectedTicket[]>([]);

  const [
    hydrated,
    setHydrated,
  ] = useState(false);

  /* =========================================================
     LOAD SAVED SELECTION
  ========================================================= */

  useEffect(() => {
    try {
      const stored =
        sessionStorage.getItem(
          STORAGE_KEY
        );

      if (!stored) {
        setHydrated(true);
        return;
      }

      const parsed =
        JSON.parse(
          stored
        ) as StoredTicketSelection[];

      const restored: SelectedTicket[] =
        parsed
          .map((item) => {
            const ticket =
              TICKETS.find(
                (ticket) =>
                  ticket.id ===
                  item.ticketId
              );

            if (!ticket) {
              return null;
            }

            return {
              ticket,
              quantity:
                Math.max(
                  0,
                  item.quantity
                ),
              addOns:
                Array.isArray(
                  item.addOns
                )
                  ? item.addOns.filter(
                      (id) =>
                        ticket.addOns.some(
                          (addOn) =>
                            addOn.id ===
                            id
                        )
                    )
                  : [],
            };
          })
          .filter(
            (
              item
            ): item is SelectedTicket =>
              item !== null &&
              item.quantity > 0
          );

      setSelectedTickets(
        restored
      );
    } catch (error) {
      console.error(
        "Failed to restore ticket selection:",
        error
      );

      sessionStorage.removeItem(
        STORAGE_KEY
      );
    } finally {
      setHydrated(true);
    }
  }, []);

  /* =========================================================
     SAVE SELECTION
  ========================================================= */

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    const stored: StoredTicketSelection[] =
      selectedTickets
        .filter(
          (item) =>
            item.quantity > 0
        )
        .map((item) => ({
          ticketId:
            item.ticket.id,
          quantity:
            item.quantity,
          addOns:
            item.addOns,
        }));

    sessionStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(stored)
    );
  }, [
    selectedTickets,
    hydrated,
  ]);

  /* =========================================================
     UPDATE QUANTITY
  ========================================================= */

  const handleQuantityChange = (
    ticketId: string,
    quantity: number
  ) => {
    setSelectedTickets(
      (current) => {
        const existing =
          current.find(
            (item) =>
              item.ticket.id ===
              ticketId
          );

        if (quantity <= 0) {
          return current.filter(
            (item) =>
              item.ticket.id !==
              ticketId
          );
        }

        if (existing) {
          return current.map(
            (item) =>
              item.ticket.id ===
              ticketId
                ? {
                    ...item,
                    quantity,
                  }
                : item
          );
        }

        const ticket =
          TICKETS.find(
            (item) =>
              item.id ===
              ticketId
          );

        if (!ticket) {
          return current;
        }

        return [
          ...current,
          {
            ticket,
            quantity,
            addOns: [],
          },
        ];
      }
    );
  };

  /* =========================================================
     TOGGLE ADD-ON
  ========================================================= */

  const handleToggleAddOn = (
    ticketId: string,
    addOnId: AddOnId
  ) => {
    setSelectedTickets(
      (current) =>
        current.map((item) => {
          if (
            item.ticket.id !==
            ticketId
          ) {
            return item;
          }

          const exists =
            item.addOns.includes(
              addOnId
            );

          return {
            ...item,
            addOns: exists
              ? item.addOns.filter(
                  (id) =>
                    id !==
                    addOnId
                )
              : [
                  ...item.addOns,
                  addOnId,
                ],
          };
        })
    );
  };

  /* =========================================================
     CONTINUE
  ========================================================= */

  const handleContinue =
    () => {
      if (
        selectedTickets.length ===
        0
      ) {
        return;
      }

      router.push(
        "/checkout"
      );
    };

  /* =========================================================
     ACTIVE COUNT
  ========================================================= */

  const ticketCount =
    useMemo(
      () =>
        selectedTickets.reduce(
          (sum, item) =>
            sum + item.quantity,
          0
        ),
      [selectedTickets]
    );

  return (
    <main className="min-h-screen bg-[#f4f1ea] text-black">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="bg-black px-6 pb-16 pt-32 text-white md:px-12 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <p className="text-[9px] uppercase tracking-[0.35em] text-white/35">
            TSE LIVE // TICKETS
          </p>

          <div className="mt-6 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <h1 className="max-w-5xl font-display text-[clamp(4.5rem,11vw,9rem)] uppercase leading-[0.76] tracking-[-0.06em]">
              Choose
              <br />
              Your Entry.
            </h1>

            <div className="max-w-xs">
              <p className="text-xs leading-6 text-white/40">
                Select your ticket,
                choose your
                experience, and
                continue to secure
                your place at TSE
                Live.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <section className="px-6 py-12 md:px-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
            {/* =================================================
                TICKETS
            ================================================= */}

            <div className="space-y-6">
              <div className="flex items-end justify-between border-b border-black/10 pb-5">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-black/35">
                    Available tickets
                  </p>

                  <h2 className="mt-2 text-2xl uppercase tracking-[-0.03em]">
                    Find your experience
                  </h2>
                </div>

                {ticketCount >
                  0 && (
                  <p className="text-[9px] uppercase tracking-[0.2em] text-black/35">
                    {ticketCount}{" "}
                    selected
                  </p>
                )}
              </div>

              {TICKETS.map(
                (ticket) => (
                  <TicketCard
                    key={
                      ticket.id
                    }
                    ticket={
                      ticket
                    }
                    selected={selectedTickets.find(
                      (
                        item
                      ) =>
                        item
                          .ticket
                          .id ===
                        ticket.id
                    )}
                    onQuantityChange={
                      handleQuantityChange
                    }
                    onToggleAddOn={
                      handleToggleAddOn
                    }
                  />
                )
              )}

              <div className="border border-black/10 bg-white p-6 md:p-8">
                <p className="text-[8px] uppercase leading-5 tracking-[0.15em] text-black/35">
                  Tickets are
                  non-refundable.
                  Please review your
                  selection carefully
                  before completing
                  payment.
                </p>
              </div>
            </div>

            {/* =================================================
                SUMMARY
            ================================================= */}

            <TicketSummary
              selectedTickets={
                selectedTickets
              }
              onContinue={
                handleContinue
              }
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="bg-black px-6 py-12 text-white md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-display text-3xl tracking-[-0.04em]">
              TSE / LIVE
            </p>

            <p className="mt-2 text-[8px] uppercase tracking-[0.25em] text-white/30">
              The Styled Edit Live
            </p>
          </div>

          <p className="text-[8px] uppercase tracking-[0.2em] text-white/30">
            Nairobi, Kenya
          </p>
        </div>
      </footer>
    </main>
  );
}