"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

/* =========================================================
   TYPES
========================================================= */

type OrderAddOn = {
  name: string;
  price: number;
};

type OrderItem = {
  ticketName: string;
  quantity: number;
  unitPrice: number;
  addOnTotal: number;
  addOns: OrderAddOn[];
};

type OrderDetails = {
  orderId: string;
  paymentStatus: string;
  mpesaReceiptNumber: string | null;
  customer: {
    fullName: string;
    email: string;
    phone: string;
  };
  subtotal: number;
  addonTotal: number;
  total: number;
  createdAt: string;
  items: OrderItem[];
};

type FetchState = "loading" | "ready" | "error";

/* =========================================================
   SUCCESS PAGE (INNER — uses useSearchParams)
========================================================= */

function CheckoutSuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");

  const [order, setOrder] =
    useState<OrderDetails | null>(null);

  const [state, setState] =
    useState<FetchState>("loading");

  useEffect(() => {
    if (!orderId) {
      setState("error");
      return;
    }

    let cancelled = false;

    const load = async () => {
      try {
        const response = await fetch(
          `/api/orders/${orderId}`,
          { cache: "no-store" }
        );

        if (!response.ok) {
          throw new Error(
            "Could not load order."
          );
        }

        const data = await response.json();

        if (cancelled) {
          return;
        }

        setOrder(data);
        setState("ready");
      } catch (error) {
        console.error(
          "Failed to load order:",
          error
        );

        if (!cancelled) {
          setState("error");
        }
      }
    };

    load();

    return () => {
      cancelled = true;
    };
  }, [orderId]);

  /* =======================================================
     LOADING
  ======================================================= */

  if (state === "loading") {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f4f1ea] px-6 text-black">
        <p className="text-[9px] uppercase tracking-[0.3em] text-black/35">
          Loading your order...
        </p>
      </main>
    );
  }

  /* =======================================================
     ERROR / MISSING ORDER
  ======================================================= */

  if (state === "error" || !order) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#f4f1ea] px-6 text-center text-black">
        <p className="text-[9px] uppercase tracking-[0.3em] text-black/35">
          TSE LIVE // ORDER
        </p>

        <h1 className="max-w-md text-3xl uppercase tracking-[-0.03em]">
          We couldn&apos;t find that order.
        </h1>

        <p className="max-w-sm text-sm leading-6 text-black/45">
          If you just completed payment, check your
          M-Pesa messages for confirmation, or return
          to tickets to try again.
        </p>

        <Link
          href="/tickets"
          className="mt-4 bg-black px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-black/80"
        >
          Back to tickets
        </Link>
      </main>
    );
  }

  const shortOrderId = order.orderId.slice(0, 8);

  const totalTickets = order.items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  /* =======================================================
     CONFIRMED
  ======================================================= */

  return (
    <main className="min-h-screen bg-[#f4f1ea] text-black">
      {/* ===================================================
          HEADER
      =================================================== */}

      <section className="bg-black px-6 pb-16 pt-32 text-white md:px-12 md:pb-20 md:pt-40">
        <div className="mx-auto max-w-3xl">
          <p className="text-[9px] uppercase tracking-[0.35em] text-white/35">
            TSE LIVE // ORDER CONFIRMED
          </p>

          <h1 className="mt-6 max-w-xl font-display text-[clamp(3rem,8vw,5.5rem)] uppercase leading-[0.85] tracking-tighter">
            You&apos;re
            <br />
            In.
          </h1>

          <p className="mt-6 max-w-md text-sm leading-6 text-white/45">
            Your payment was received and your{" "}
            {totalTickets === 1 ? "ticket" : "tickets"}{" "}
            {totalTickets === 1 ? "is" : "are"} confirmed.
            A copy of this confirmation has been sent to{" "}
            {order.customer.email}.
          </p>
        </div>
      </section>

      {/* ===================================================
          ORDER DETAILS
      =================================================== */}

      <section className="px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="bg-[#171717] p-6 text-white md:p-8">
            {/* REFERENCE */}
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/35">
                  Order reference
                </p>

                <p className="mt-2 text-xl uppercase tracking-[-0.02em]">
                  #{shortOrderId}
                </p>
              </div>

              {order.mpesaReceiptNumber && (
                <div className="text-right">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-white/35">
                    M-Pesa receipt
                  </p>

                  <p className="mt-2 text-xl uppercase tracking-[-0.02em]">
                    {order.mpesaReceiptNumber}
                  </p>
                </div>
              )}
            </div>

            {/* CUSTOMER */}
            <div className="border-b border-white/10 py-6">
              <p className="text-[9px] uppercase tracking-[0.25em] text-white/35">
                Ticket holder
              </p>

              <p className="mt-2 text-sm">
                {order.customer.fullName}
              </p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-white/35">
                {order.customer.phone}
              </p>
            </div>

            {/* ITEMS */}
            <div className="space-y-6 border-b border-white/10 py-6">
              {order.items.map((item, index) => (
                <div
                  key={`${item.ticketName}-${index}`}
                  className="space-y-3"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-sm uppercase tracking-[-0.01em]">
                        {item.ticketName}
                      </p>

                      <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-white/35">
                        {item.quantity} × KES{" "}
                        {item.unitPrice.toLocaleString()}
                      </p>
                    </div>

                    <p className="shrink-0 text-sm">
                      KES{" "}
                      {(
                        item.unitPrice * item.quantity
                      ).toLocaleString()}
                    </p>
                  </div>

                  {item.addOns.length > 0 && (
                    <div className="space-y-2 border-l border-white/10 pl-4">
                      {item.addOns.map((addOn, addOnIndex) => (
                        <div
                          key={`${addOn.name}-${addOnIndex}`}
                          className="flex items-center justify-between gap-4 text-xs"
                        >
                          <span className="text-white/45">
                            {addOn.name}
                          </span>

                          <span>
                            {addOn.price > 0
                              ? `KES ${addOn.price.toLocaleString()}`
                              : "At event"}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* TOTAL */}
            <div className="pt-6">
              <div className="flex items-end justify-between gap-5">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.25em] text-white/35">
                    Total paid
                  </p>

                  <p className="mt-1 text-[8px] uppercase tracking-[0.15em] text-white/20">
                    {totalTickets}{" "}
                    {totalTickets === 1
                      ? "ticket"
                      : "tickets"}
                  </p>
                </div>

                <span className="text-3xl tracking-[-0.04em]">
                  KES {order.total.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* NOTE */}
          <div className="mt-6 border border-black/15 bg-white p-6 md:p-8">
            <p className="text-[8px] uppercase leading-5 tracking-[0.15em] text-black/35">
              Keep your order reference for entry. Tickets
              are non-refundable and physical
              identification may be required at the door.
            </p>
          </div>

          {/* ACTIONS */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="flex flex-1 items-center justify-center bg-black px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-black/80"
            >
              Back to TSE Live
            </Link>

            <Link
              href="/schedule"
              className="flex flex-1 items-center justify-center border border-black/15 bg-transparent px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-black transition hover:border-black/40"
            >
              View event schedule
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   SUCCESS PAGE (OUTER — provides the Suspense boundary
   Next.js requires around useSearchParams during
   static build/prerender)
========================================================= */

export default function CheckoutSuccessPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-[#f4f1ea] px-6 text-black">
          <p className="text-[9px] uppercase tracking-[0.3em] text-black/35">
            Loading your order...
          </p>
        </main>
      }
    >
      <CheckoutSuccessContent />
    </Suspense>
  );
}