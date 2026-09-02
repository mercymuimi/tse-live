"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

type Order = {
  id: string;
  customer: {
    fullName: string;
    email: string;
  };
  paymentStatus: string;
  total: number;
  mpesaReceiptNumber: string | null;
  items: Array<{
    id: string;
    ticket_name: string;
    quantity: number;
    unit_price: number;
    add_on_total: number;
    order_item_addons?: Array<{
      id: string;
      addon_name: string;
      addon_price: number;
    }>;
  }>;
};

type OrderResponse = {
  success: boolean;
  order?: Order;
  error?: string;
};

export default function CheckoutSuccessPage() {
  const [order, setOrder] =
    useState<Order | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  /* =========================================================
     GET ORDER ID
  ========================================================= */

  useEffect(() => {
    const loadOrder = async () => {
      try {
        const params =
          new URLSearchParams(
            window.location.search
          );

        const orderId =
          params.get(
            "orderId"
          );

        if (!orderId) {
          setError(
            "We could not find your order."
          );

          setLoading(false);

          return;
        }

        /* ===============================================
           FETCH ORDER
        =============================================== */

        const response =
          await fetch(
            `/api/orders/${orderId}`,
            {
              method: "GET",
              cache: "no-store",
            }
          );

        const data =
          (await response.json()) as OrderResponse;

        if (
          !response.ok ||
          !data.success ||
          !data.order
        ) {
          throw new Error(
            data.error ||
              "Could not load your order."
          );
        }

        setOrder(
          data.order
        );
      } catch (error) {
        console.error(
          "Success page error:",
          error
        );

        setError(
          error instanceof Error
            ? error.message
            : "Something went wrong while loading your order."
        );
      } finally {
        setLoading(false);
      }
    };

    loadOrder();
  }, []);

  /* =========================================================
     LOADING
  ========================================================= */

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
        <div className="text-center">

          <div className="mx-auto mb-8 h-10 w-10 animate-spin rounded-full border border-white/20 border-t-white" />

          <p className="text-[9px] uppercase tracking-[0.3em] text-white/50">
            Confirming your entry
          </p>

        </div>
      </main>
    );
  }

  /* =========================================================
     ERROR
  ========================================================= */

  if (error || !order) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f4f1ea] px-6 text-black">

        <div className="w-full max-w-xl text-center">

          <p className="text-[9px] uppercase tracking-[0.3em] text-black/40">
            TSE LIVE // ORDER
          </p>

          <h1 className="mt-6 font-display text-[clamp(4rem,10vw,7rem)] uppercase leading-[0.8] tracking-[-0.05em]">
            Order
            <br />
            Not Found.
          </h1>

          <p className="mx-auto mt-8 max-w-md text-sm leading-6 text-black/50">
            We couldn't load your order details.
            If you completed payment, please
            keep your M-Pesa confirmation message.
          </p>

          <Link
            href="/tickets"
            className="mt-10 inline-flex items-center gap-6 bg-black px-7 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-black/80"
          >
            Back to Tickets
            <ArrowRight size={15} />
          </Link>

        </div>

      </main>
    );
  }

  /* =========================================================
     SUCCESS
  ========================================================= */

  return (
    <main className="min-h-screen bg-[#f4f1ea] text-black">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="bg-black px-6 pb-20 pt-32 text-white md:px-12 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-7xl">

          {/* STATUS */}

          <div className="flex items-center gap-3">

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
              <Check size={16} strokeWidth={3} />
            </span>

            <span className="text-[9px] uppercase tracking-[0.3em] text-white/50">
              Payment Confirmed
            </span>

          </div>

          {/* TITLE */}

          <h1 className="mt-10 max-w-5xl font-display text-[clamp(5rem,12vw,10rem)] uppercase leading-[0.76] tracking-[-0.06em]">
            You're
            <br />
            In.
          </h1>

          <p className="mt-10 max-w-xl text-sm leading-7 text-white/50 md:text-base">
            Welcome to The Styled Edit Live.
            Your ticket has been secured and
            your payment has been confirmed.
          </p>

        </div>
      </section>

      {/* =====================================================
          ORDER DETAILS
      ===================================================== */}

      <section className="px-6 py-12 md:px-12 md:py-20">
        <div className="mx-auto max-w-5xl">

          {/* ORDER HEADER */}

          <div className="flex flex-col justify-between gap-6 border-b border-black/15 pb-8 md:flex-row md:items-end">

            <div>

              <p className="text-[9px] uppercase tracking-[0.3em] text-black/35">
                Order Number
              </p>

              <p className="mt-3 break-all font-mono text-xs">
                {order.id}
              </p>

            </div>

            <div className="md:text-right">

              <p className="text-[9px] uppercase tracking-[0.3em] text-black/35">
                Payment Status
              </p>

              <p className="mt-3 text-xs font-bold uppercase tracking-[0.15em]">
                Paid
              </p>

            </div>

          </div>

          {/* =================================================
              CUSTOMER
          ================================================= */}

          <div className="grid gap-8 border-b border-black/15 py-10 md:grid-cols-2">

            <div>

              <p className="text-[9px] uppercase tracking-[0.3em] text-black/35">
                Attendee
              </p>

              <p className="mt-3 text-sm font-medium">
                {order.customer.fullName}
              </p>

            </div>

            <div>

              <p className="text-[9px] uppercase tracking-[0.3em] text-black/35">
                Email
              </p>

              <p className="mt-3 break-all text-sm font-medium">
                {order.customer.email}
              </p>

            </div>

          </div>

          {/* =================================================
              TICKETS
          ================================================= */}

          <div className="py-10">

            <div className="mb-8">

              <p className="text-[9px] uppercase tracking-[0.3em] text-black/35">
                Your Entry
              </p>

              <h2 className="mt-3 font-display text-5xl uppercase tracking-[-0.03em]">
                TSE Live
              </h2>

            </div>

            <div className="divide-y divide-black/10 border-y border-black/10">

              {order.items.map(
                (item) => (
                  <div
                    key={
                      item.id
                    }
                    className="flex flex-col justify-between gap-4 py-6 sm:flex-row sm:items-center"
                  >

                    <div>

                      <p className="text-xs font-bold uppercase tracking-[0.12em]">
                        {
                          item.ticket_name
                        }
                      </p>

                      <p className="mt-2 text-[10px] uppercase tracking-[0.12em] text-black/40">
                        Quantity:{" "}
                        {
                          item.quantity
                        }
                      </p>

                      {item
                        .order_item_addons
                        ?.length ? (
                        <div className="mt-3 space-y-1">
                          {item.order_item_addons.map(
                            (
                              addon
                            ) => (
                              <p
                                key={
                                  addon.id
                                }
                                className="text-[9px] uppercase tracking-[0.1em] text-black/40"
                              >
                                +
                                {
                                  addon.addon_name
                                }
                              </p>
                            )
                          )}
                        </div>
                      ) : null}

                    </div>

                    <p className="text-sm font-bold">
                      KES{" "}
                      {(
                        item.unit_price *
                          item.quantity +
                        Number(
                          item.add_on_total
                        )
                      ).toLocaleString()}
                    </p>

                  </div>
                )
              )}

            </div>

          </div>

          {/* =================================================
              TOTAL
          ================================================= */}

          <div className="flex items-end justify-between border-t border-black pt-8">

            <div>

              <p className="text-[9px] uppercase tracking-[0.3em] text-black/35">
                Total Paid
              </p>

              {order.mpesaReceiptNumber && (
                <p className="mt-3 font-mono text-[10px] text-black/40">
                  M-Pesa Receipt:{" "}
                  {
                    order.mpesaReceiptNumber
                  }
                </p>
              )}

            </div>

            <p className="font-display text-5xl uppercase tracking-[-0.03em] md:text-6xl">
              KES{" "}
              {Number(
                order.total
              ).toLocaleString()}
            </p>

          </div>

          {/* =================================================
              EVENT INFO
          ================================================= */}

          <div className="mt-16 grid gap-px bg-black/10 md:grid-cols-3">

            <div className="bg-[#f4f1ea] p-6">

              <p className="text-[9px] uppercase tracking-[0.25em] text-black/35">
                Date
              </p>

              <p className="mt-4 text-sm font-bold">
                30 October 2026
              </p>

            </div>

            <div className="bg-[#f4f1ea] p-6">

              <p className="text-[9px] uppercase tracking-[0.25em] text-black/35">
                Event
              </p>

              <p className="mt-4 text-sm font-bold">
                The Styled Edit Live
              </p>

            </div>

            <div className="bg-[#f4f1ea] p-6">

              <p className="text-[9px] uppercase tracking-[0.25em] text-black/35">
                Entry
              </p>

              <p className="mt-4 text-sm font-bold">
                Show your confirmation
              </p>

            </div>

          </div>

          {/* =================================================
              ACTIONS
          ================================================= */}

          <div className="mt-12 flex flex-col gap-3 sm:flex-row">

            <Link
              href="/"
              className="flex flex-1 items-center justify-between bg-black px-6 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-black/80"
            >
              Back to TSE Live
              <ArrowRight size={15} />
            </Link>

            <Link
              href="/experience"
              className="flex flex-1 items-center justify-between border border-black/20 px-6 py-5 text-[10px] font-bold uppercase tracking-[0.2em] transition hover:border-black"
            >
              Explore Experience
              <ArrowRight size={15} />
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}