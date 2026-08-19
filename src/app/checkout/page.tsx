"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import CheckoutForm from "@/components/checkout/CheckoutForm";
import PaymentMethod from "@/components/checkout/PaymentMethod";
import CheckoutSummary from "@/components/checkout/CheckoutSummary";

import type {
  CustomerDetails,
  PaymentMethod as PaymentMethodType,
} from "@/types/checkout";

import type {
  SelectedTicket,
  AddOnId,
} from "@/types/ticket";

import { ADD_ONS, TICKETS as tickets } from "@/lib/tickets";

/* =========================================================
   STORED TICKET DATA
========================================================= */

type StoredTicketSelection = {
  ticketId: string;
  quantity: number;
  selectedAddOns?: string[];
};

/* =========================================================
   PAYMENT STATUS
========================================================= */

type PaymentState =
  | "idle"
  | "initiating"
  | "waiting"
  | "paid"
  | "failed";

/* =========================================================
   CHECKOUT PAGE
========================================================= */

export default function CheckoutPage() {
  const router = useRouter();

  /* -------------------------------------------------------
     CUSTOMER
  ------------------------------------------------------- */

  const [customer, setCustomer] =
    useState<CustomerDetails>({
      fullName: "",
      email: "",
      phone: "",
    });

  /* -------------------------------------------------------
     PAYMENT
  ------------------------------------------------------- */

  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethodType>("mpesa");

  const [paymentState, setPaymentState] =
    useState<PaymentState>("idle");

  const [paymentMessage, setPaymentMessage] =
    useState("");

  const [currentOrderId, setCurrentOrderId] =
    useState<string | null>(null);

  /* -------------------------------------------------------
     TICKETS
  ------------------------------------------------------- */

  const [selectedTickets, setSelectedTickets] =
    useState<SelectedTicket[]>([]);

  /* -------------------------------------------------------
     CHECKOUT STATE
  ------------------------------------------------------- */

  const [termsAccepted, setTermsAccepted] =
    useState(false);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  /* =======================================================
     LOAD TICKETS FROM SESSION STORAGE
  ======================================================= */

  useEffect(() => {
    const stored =
      sessionStorage.getItem(
        "tse-ticket-selection"
      );

    if (!stored) {
      return;
    }

    try {
      const parsed =
        JSON.parse(
          stored
        ) as StoredTicketSelection[];

      const hydrated: SelectedTicket[] =
        parsed
          .map((item): SelectedTicket | null => {
            const ticket =
              tickets.find(
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
                item.quantity,
              addOns:
                (item.selectedAddOns ?? []).filter(
                  (id): id is AddOnId =>
                    id in ADD_ONS
                ),
            };
          })
          .filter(
            (
              item
            ): item is SelectedTicket =>
              item !== null
          );

      setSelectedTickets(
        hydrated
      );
    } catch (error) {
      console.error(
        "Could not load ticket selection:",
        error
      );

      sessionStorage.removeItem(
        "tse-ticket-selection"
      );
    }
  }, []);

  /* =======================================================
     ACTIVE TICKETS
  ======================================================= */

  const activeTickets =
    useMemo(() => {
      return selectedTickets.filter(
        (item) =>
          item.quantity > 0
      );
    }, [selectedTickets]);

  /* =======================================================
     TICKET TOTAL
  ======================================================= */

  const ticketTotal =
    useMemo(() => {
      return activeTickets.reduce(
        (sum, item) =>
          sum +
          item.ticket.price *
            item.quantity,
        0
      );
    }, [activeTickets]);

  /* =======================================================
     ADD-ON TOTAL
  ======================================================= */

  const addOnTotal =
    useMemo(() => {
      return activeTickets.reduce(
        (sum, item) => {
          const poolSelected =
            (item.addOns ?? []).includes(
              "pool"
            );

          return (
            sum +
            (poolSelected
              ? ADD_ONS.pool.price *
                item.quantity
              : 0)
          );
        },
        0
      );
    }, [activeTickets]);

  /* =======================================================
     FINAL TOTAL
  ======================================================= */

  const total =
    ticketTotal +
    addOnTotal;

  /* =======================================================
     CHECKOUT VALIDATION
  ======================================================= */

  const canCheckout =
    customer.fullName.trim() !==
      "" &&
    customer.email.trim() !==
      "" &&
    customer.phone.trim() !==
      "" &&
    termsAccepted &&
    activeTickets.length > 0;

  /* =======================================================
     CHECK PAYMENT STATUS
  ======================================================= */

  const checkPaymentStatus =
    async (
      orderId: string
    ) => {
      try {
        const response =
          await fetch(
            `/api/orders/${orderId}`,
            {
              method: "GET",
              cache: "no-store",
            }
          );

        if (!response.ok) {
          return null;
        }

        const data =
          await response.json();

        return data;
      } catch (error) {
        console.error(
          "Payment status check failed:",
          error
        );

        return null;
      }
    };

  /* =======================================================
     WAIT FOR PAYMENT
  ======================================================= */

  useEffect(() => {
    if (
      paymentState !==
        "waiting" ||
      !currentOrderId
    ) {
      return;
    }

    let cancelled = false;

    let attempts = 0;

    const maxAttempts = 30;

    const poll =
      async () => {
        if (cancelled) {
          return;
        }

        attempts++;

        const data =
          await checkPaymentStatus(
            currentOrderId
          );

        if (cancelled) {
          return;
        }

        if (
          data?.paymentStatus ===
          "paid"
        ) {
          setPaymentState(
            "paid"
          );

          setPaymentMessage(
            "Payment received successfully."
          );

          setIsSubmitting(
            false
          );

          sessionStorage.removeItem(
            "tse-ticket-selection"
          );

          router.push(
            `/checkout/success?orderId=${currentOrderId}`
          );

          return;
        }

        if (
          data?.paymentStatus ===
          "failed"
        ) {
          setPaymentState(
            "failed"
          );

          setPaymentMessage(
            data.paymentResultDescription ||
              "M-Pesa payment was not completed."
          );

          setIsSubmitting(
            false
          );

          return;
        }

        if (
          attempts >=
          maxAttempts
        ) {
          setPaymentState(
            "failed"
          );

          setPaymentMessage(
            "We could not confirm the payment yet. Please check your M-Pesa messages or contact support."
          );

          setIsSubmitting(
            false
          );

          return;
        }

        setTimeout(
          poll,
          2000
        );
      };

    poll();

    return () => {
      cancelled = true;
    };
  }, [
    paymentState,
    currentOrderId,
  ]);

  /* =======================================================
     SUBMIT CHECKOUT
  ======================================================= */

  const handleSubmit =
    async (
      event: React.FormEvent<HTMLFormElement>
    ) => {
      event.preventDefault();

      if (
        !canCheckout ||
        isSubmitting
      ) {
        return;
      }

      setIsSubmitting(
        true
      );

      setPaymentState(
        "initiating"
      );

      setPaymentMessage(
        ""
      );

      try {
        /* ===============================================
           STEP 1 — CREATE ORDER
        =============================================== */

        const checkoutResponse =
          await fetch(
            "/api/checkout",
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify({
                customer,
                paymentMethod,
                selectedTickets,
              }),
            }
          );

        const checkoutData =
          await checkoutResponse.json();

        console.log(
          "CHECKOUT RESPONSE:",
          checkoutData
        );

        if (
          !checkoutResponse.ok
        ) {
          throw new Error(
            checkoutData.error ||
              "Checkout failed. Please try again."
          );
        }

        const orderId =
          checkoutData.orderId;

        const orderTotal =
          checkoutData.total;

        if (!orderId) {
          throw new Error(
            "Order was created but no order ID was returned."
          );
        }

        setCurrentOrderId(
          orderId
        );

        /* ===============================================
           STEP 2 — M-PESA
        =============================================== */

        if (
          paymentMethod ===
          "mpesa"
        ) {
          const mpesaResponse =
            await fetch(
              "/api/mpesa/stkpush",
              {
                method: "POST",

                headers: {
                  "Content-Type":
                    "application/json",
                },

                body: JSON.stringify({
                  orderId,
                  phone:
                    customer.phone,
                  amount:
                    orderTotal,
                }),
              }
            );

          const mpesaData =
            await mpesaResponse.json();

          console.log(
            "M-PESA RESPONSE:",
            mpesaData
          );

          if (
            !mpesaResponse.ok
          ) {
            throw new Error(
              mpesaData.error ||
                "Could not initiate M-Pesa payment."
            );
          }

          /* =============================================
             STK PUSH SENT
          ============================================= */

          setPaymentState(
            "waiting"
          );

          setPaymentMessage(
            "Check your phone and enter your M-Pesa PIN."
          );

          return;
        }

        /* ===============================================
           CARD PAYMENT
        =============================================== */

        if (
          paymentMethod ===
          "card"
        ) {
          setPaymentState(
            "failed"
          );

          setPaymentMessage(
            `Order ${orderId} was created. Card payments will be available soon.`
          );

          setIsSubmitting(
            false
          );

          return;
        }
      } catch (error) {
        console.error(
          "Checkout error:",
          error
        );

        setPaymentState(
          "failed"
        );

        setPaymentMessage(
          error instanceof Error
            ? error.message
            : "Something went wrong during checkout."
        );

        setIsSubmitting(
          false
        );
      }
    };

  /* =======================================================
     PAGE
  ======================================================= */

  return (
    <main className="min-h-screen bg-[#f4f1ea] text-black">

      {/* ===================================================
          HEADER
      =================================================== */}

      <section className="bg-black px-6 pb-16 pt-32 text-white md:px-12 md:pb-20 md:pt-40">
        <div className="mx-auto max-w-7xl">

          <Link
            href="/tickets"
            className="mb-8 inline-block text-[9px] uppercase tracking-[0.3em] text-white/35 transition hover:text-white"
          >
            ← Back to tickets
          </Link>

          <p className="text-[9px] uppercase tracking-[0.35em] text-white/35">
            TSE LIVE // CHECKOUT
          </p>

          <h1 className="mt-6 max-w-5xl font-display text-[clamp(4.5rem,10vw,8rem)] uppercase leading-[0.78] tracking-[-0.055em]">
            Complete
            <br />
            Your Entry.
          </h1>

        </div>
      </section>

      {/* ===================================================
          CHECKOUT CONTENT
      =================================================== */}

      <section className="px-6 py-12 md:px-12 md:py-20">
        <div className="mx-auto max-w-7xl">

          <form
            onSubmit={
              handleSubmit
            }
            className="grid gap-8 lg:grid-cols-[1fr_380px]"
          >

            {/* LEFT COLUMN */}

            <div className="space-y-6">

              <CheckoutForm
                customer={
                  customer
                }
                onChange={
                  setCustomer
                }
              />

              <PaymentMethod
                value={
                  paymentMethod
                }
                onChange={
                  setPaymentMethod
                }
              />

              {/* TERMS */}

              <div className="border border-black/15 bg-[#f4f1ea] p-6 md:p-8">

                <label className="flex cursor-pointer gap-4">

                  <input
                    type="checkbox"
                    checked={
                      termsAccepted
                    }
                    onChange={(
                      event
                    ) =>
                      setTermsAccepted(
                        event
                          .target
                          .checked
                      )
                    }
                    className="mt-1 h-4 w-4 accent-black"
                  />

                  <span className="text-[10px] uppercase leading-5 tracking-[0.08em] text-black/50">
                    I understand that
                    tickets are
                    non-refundable
                    and agree to the
                    TSE Live terms of
                    entry.
                  </span>

                </label>

              </div>

              {/* PAYMENT STATUS */}

              {paymentState !==
                "idle" && (
                <div
                  className={`border p-6 ${
                    paymentState ===
                    "paid"
                      ? "border-black bg-black text-white"
                      : paymentState ===
                        "failed"
                      ? "border-red-300 bg-red-50 text-red-900"
                      : "border-black/10 bg-white"
                  }`}
                >
                  <p className="text-[9px] uppercase tracking-[0.25em] opacity-50">
                    {paymentState ===
                    "initiating"
                      ? "Payment"
                      : paymentState ===
                        "waiting"
                      ? "M-Pesa"
                      : paymentState ===
                        "paid"
                      ? "Payment complete"
                      : "Payment status"}
                  </p>

                  <p className="mt-3 text-sm leading-6">
                    {paymentMessage}
                  </p>

                  {paymentState ===
                    "waiting" && (
                    <p className="mt-4 text-[9px] uppercase tracking-[0.15em] opacity-40">
                      Waiting for payment confirmation...
                    </p>
                  )}
                </div>
              )}

              {/* PAY BUTTON */}

              <button
                type="submit"
                disabled={
                  !canCheckout ||
                  isSubmitting ||
                  paymentState ===
                    "paid"
                }
                className={`flex w-full items-center justify-between px-6 py-5 text-[10px] font-bold uppercase tracking-[0.2em] transition ${
                  canCheckout &&
                  !isSubmitting &&
                  paymentState !==
                    "paid"
                    ? "bg-black text-white hover:bg-black/80"
                    : "cursor-not-allowed bg-black/10 text-black/25"
                }`}
              >

                <span>
                  {isSubmitting
                    ? paymentState ===
                      "waiting"
                      ? "Waiting for payment..."
                      : "Processing..."
                    : paymentState ===
                      "paid"
                    ? "Payment complete"
                    : paymentMethod ===
                      "mpesa"
                    ? "Pay with M-Pesa"
                    : "Continue to Card"}
                </span>

                <span>
                  →
                </span>

              </button>

              <p className="text-center text-[8px] uppercase tracking-[0.2em] text-black/25">
                Secure checkout · M-Pesa · Visa · Mastercard
              </p>

            </div>

            {/* RIGHT COLUMN */}

            <CheckoutSummary
              selectedTickets={
                selectedTickets
              }
            />

          </form>

        </div>
      </section>

      {/* FOOTER */}

      <footer className="bg-black px-6 py-12 text-white md:px-12">

        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-end">

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