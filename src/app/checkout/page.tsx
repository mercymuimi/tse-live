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
  AddOnId,
  SelectedTicket,
  StoredTicketSelection,
} from "@/types/ticket";

import { ADD_ONS, TICKETS } from "@/lib/tickets";

const STORAGE_KEY = "tse-ticket-selection";

type PaymentState =
  | "idle"
  | "initiating"
  | "waiting"
  | "paid"
  | "failed";

type OrderStatusResponse = {
  success?: boolean;
  paymentStatus?: string;
  paymentResultCode?: number | null;
  paymentResultDescription?: string | null;
  mpesaReceiptNumber?: string | null;

  order?: {
    id: string;
    paymentStatus?: string;
    paymentResultCode?: number | null;
    paymentResultDescription?: string | null;
    mpesaReceiptNumber?: string | null;
  };
};

export default function CheckoutPage() {
  const router = useRouter();

  // --------------------------------------------------
  // CUSTOMER
  // --------------------------------------------------

  const [customer, setCustomer] =
    useState<CustomerDetails>({
      fullName: "",
      email: "",
      phone: "",
    });

  // --------------------------------------------------
  // PAYMENT
  // --------------------------------------------------

  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethodType>("mpesa");

  const [paymentState, setPaymentState] =
    useState<PaymentState>("idle");

  const [paymentMessage, setPaymentMessage] =
    useState("");

  const [currentOrderId, setCurrentOrderId] =
    useState<string | null>(null);

  // --------------------------------------------------
  // TICKETS
  // --------------------------------------------------

  const [selectedTickets, setSelectedTickets] =
    useState<SelectedTicket[]>([]);

  const [termsAccepted, setTermsAccepted] =
    useState(false);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  // --------------------------------------------------
  // LOAD TICKET SELECTION
  // --------------------------------------------------

  useEffect(() => {
    try {
      const stored =
        sessionStorage.getItem(STORAGE_KEY);

      if (!stored) {
        return;
      }

      const parsed =
        JSON.parse(stored) as StoredTicketSelection[];

      if (!Array.isArray(parsed)) {
        return;
      }

      const hydratedTickets: SelectedTicket[] =
        parsed
          .map((item) => {
            const ticket = TICKETS.find(
              (ticket) =>
                ticket.id === item.ticketId
            );

            if (!ticket) {
              return null;
            }

            const addOns: AddOnId[] =
              Array.isArray(item.addOns)
                ? item.addOns.filter(
                    (addOnId): addOnId is AddOnId =>
                      Boolean(ADD_ONS[addOnId])
                  )
                : [];

            return {
              ticket,
              quantity: Math.max(
                0,
                Number(item.quantity) || 0
              ),
              addOns,
            };
          })
          .filter(
            (
              item
            ): item is SelectedTicket =>
              item !== null
          );

      setSelectedTickets(hydratedTickets);
    } catch (error) {
      console.error(
        "❌ Failed to load ticket selection:",
        error
      );
    }
  }, []);

  // --------------------------------------------------
  // ACTIVE TICKETS
  // --------------------------------------------------

  const activeTickets = useMemo(
    () =>
      selectedTickets.filter(
        (item) => item.quantity > 0
      ),
    [selectedTickets]
  );

  // --------------------------------------------------
  // TICKET TOTAL
  // --------------------------------------------------

  const ticketTotal = useMemo(
    () =>
      activeTickets.reduce(
        (total, item) =>
          total +
          Number(item.ticket.price) *
            item.quantity,
        0
      ),
    [activeTickets]
  );

  // --------------------------------------------------
  // ADD-ON TOTAL
  // --------------------------------------------------

  const addOnTotal = useMemo(
    () =>
      activeTickets.reduce((total, item) => {
        const itemAddOnTotal =
          (item.addOns ?? []).reduce(
            (sum, addOnId) => {
              const addOn =
                ADD_ONS[addOnId];

              if (
                !addOn ||
                Number(addOn.price) <= 0
              ) {
                return sum;
              }

              return (
                sum + Number(addOn.price)
              );
            },
            0
          );

        return (
          total +
          itemAddOnTotal * item.quantity
        );
      }, 0),
    [activeTickets]
  );

  // --------------------------------------------------
  // TOTAL
  // --------------------------------------------------

  const total =
    ticketTotal + addOnTotal;

  // --------------------------------------------------
  // CHECKOUT VALIDATION
  // --------------------------------------------------

  const canCheckout =
    customer.fullName.trim() !== "" &&
    customer.email.trim() !== "" &&
    customer.phone.trim() !== "" &&
    termsAccepted &&
    activeTickets.length > 0;

  // --------------------------------------------------
  // CHECK PAYMENT STATUS
  // --------------------------------------------------

  const checkPaymentStatus = async (
    orderId: string
  ): Promise<OrderStatusResponse | null> => {
    try {
      const response = await fetch(
        `/api/orders/${orderId}`,
        {
          method: "GET",
          cache: "no-store",
        }
      );

      const data =
        (await response.json()) as OrderStatusResponse;

      if (!response.ok) {
        console.error(
          "❌ Payment status API error:",
          data
        );

        return null;
      }

      return data;
    } catch (error) {
      console.error(
        "❌ Failed to check payment status:",
        error
      );

      return null;
    }
  };

  // --------------------------------------------------
  // PAYMENT POLLING
  // --------------------------------------------------

  useEffect(() => {
    if (
      paymentState !== "waiting" ||
      !currentOrderId
    ) {
      return;
    }

    let cancelled = false;
    let attempts = 0;

    // 60 attempts × 2 seconds = 2 minutes
    const maxAttempts = 60;

    let timeoutId:
      ReturnType<typeof setTimeout> | undefined;

    const poll = async () => {
      if (cancelled) {
        return;
      }

      attempts += 1;

      console.log(
        `🔎 Checking payment status ${attempts}/${maxAttempts}`
      );

      const data =
        await checkPaymentStatus(
          currentOrderId
        );

      if (cancelled) {
        return;
      }

      console.log(
        "🔎 Payment status response:",
        data
      );

      // API returns paymentStatus at root.
      // We also support order.paymentStatus.
      const paymentStatus =
        data?.paymentStatus ??
        data?.order?.paymentStatus;

      console.log(
        "🔎 Current payment status:",
        paymentStatus
      );

      // --------------------------------------------
      // PAID
      // --------------------------------------------

      if (paymentStatus === "paid") {
        console.log(
          "🎉 PAYMENT CONFIRMED"
        );

        setPaymentState("paid");
        setPaymentMessage(
          "Payment received successfully."
        );
        setIsSubmitting(false);

        sessionStorage.removeItem(
          STORAGE_KEY
        );

        // Give React state a moment to settle,
        // then redirect.
        router.replace(
          `/checkout/success?orderId=${currentOrderId}`
        );

        return;
      }

      // --------------------------------------------
      // FAILED
      // --------------------------------------------

      if (paymentStatus === "failed") {
        console.log(
          "❌ PAYMENT FAILED"
        );

        setPaymentState("failed");

        setPaymentMessage(
          data?.paymentResultDescription ??
            data?.order
              ?.paymentResultDescription ??
            "M-Pesa payment was not completed. Please try again."
        );

        setIsSubmitting(false);

        return;
      }

      // --------------------------------------------
      // TIMEOUT
      // --------------------------------------------

      if (attempts >= maxAttempts) {
        console.log(
          "⚠️ PAYMENT STATUS CHECK TIMED OUT"
        );

        setPaymentState("failed");

        setPaymentMessage(
          "We could not confirm your payment yet. If you received an M-Pesa confirmation message, please contact us before making another payment."
        );

        setIsSubmitting(false);

        return;
      }

      // --------------------------------------------
      // CHECK AGAIN
      // --------------------------------------------

      timeoutId = setTimeout(
        poll,
        2000
      );
    };

    poll();

    return () => {
      cancelled = true;

      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [
    paymentState,
    currentOrderId,
    router,
  ]);

  // --------------------------------------------------
  // SUBMIT CHECKOUT
  // --------------------------------------------------

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (
      !canCheckout ||
      isSubmitting
    ) {
      return;
    }

    setIsSubmitting(true);
    setPaymentState("initiating");
    setPaymentMessage(
      "Creating your order..."
    );

    try {
      // --------------------------------------------
      // CREATE ORDER
      // --------------------------------------------

      const checkoutResponse =
        await fetch("/api/checkout", {
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
        });

      const checkoutData =
        await checkoutResponse.json();

      if (!checkoutResponse.ok) {
        throw new Error(
          checkoutData.error ||
            "Checkout failed. Please try again."
        );
      }

      const orderId =
        checkoutData.orderId;

      const orderTotal = Number(
        checkoutData.total
      );

      if (
        !orderId ||
        !Number.isFinite(orderTotal) ||
        orderTotal <= 0
      ) {
        throw new Error(
          "The order could not be prepared for payment."
        );
      }

      console.log(
        "✅ ORDER CREATED:",
        {
          orderId,
          orderTotal,
        }
      );

      setCurrentOrderId(orderId);

      // --------------------------------------------
      // M-PESA
      // --------------------------------------------

      if (
        paymentMethod === "mpesa"
      ) {
        setPaymentMessage(
          "Sending M-Pesa payment request..."
        );

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
                phone: customer.phone,
                amount: orderTotal,
              }),
            }
          );

        const mpesaData =
          await mpesaResponse.json();

        console.log(
          "📱 M-PESA RESPONSE:",
          mpesaData
        );

        if (!mpesaResponse.ok) {
          throw new Error(
            mpesaData.error ||
              "Could not initiate M-Pesa payment."
          );
        }

        // Start polling
        setPaymentState("waiting");

        setPaymentMessage(
          "M-Pesa prompt sent. Check your phone and enter your PIN."
        );

        return;
      }

      // --------------------------------------------
      // CARD
      // --------------------------------------------

      setPaymentState("failed");

      setPaymentMessage(
        "Card payments will be available soon. Please select M-Pesa."
      );

      setIsSubmitting(false);
    } catch (error) {
      console.error(
        "❌ Checkout error:",
        error
      );

      setPaymentState("failed");

      setPaymentMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong during checkout."
      );

      setIsSubmitting(false);
    }
  };

  // --------------------------------------------------
  // EMPTY CART
  // --------------------------------------------------

  if (activeTickets.length === 0) {
    return (
      <main className="min-h-screen bg-[#f4f1ea] text-black">
        <div className="mx-auto flex min-h-screen w-full max-w-xl items-center justify-center px-6">
          <div className="w-full text-center">

            <p className="text-[9px] uppercase tracking-[0.35em] text-black/35">
              The Styled Edit Live
            </p>

            <h1 className="mt-4 text-4xl uppercase tracking-[-0.04em] md:text-5xl">
              Your bag is empty.
            </h1>

            <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-black/45">
              You need to select a ticket before
              continuing to checkout.
            </p>

            <Link
              href="/tickets"
              className="mt-8 inline-flex border border-black bg-black px-8 py-4 text-[10px] uppercase tracking-[0.2em] text-white transition hover:bg-black/85"
            >
              Choose tickets
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // --------------------------------------------------
  // CHECKOUT PAGE
  // --------------------------------------------------

  return (
    <main className="min-h-screen bg-[#f4f1ea] text-black">

      {/* -------------------------------------------- */}
      {/* HEADER */}
      {/* -------------------------------------------- */}

      <div className="border-b border-black/10">
        <div className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-8 lg:px-12">

          <Link
            href="/tickets"
            className="text-[9px] uppercase tracking-[0.25em] text-black/40 transition hover:text-black"
          >
            ← Back to tickets
          </Link>

          <div className="mt-10 max-w-3xl">
            <p className="text-[9px] uppercase tracking-[0.35em] text-black/35">
              The Styled Edit Live / Checkout
            </p>

            <h1 className="mt-3 text-5xl uppercase tracking-[-0.05em] md:text-6xl">
              Secure your spot.
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-6 text-black/45">
              Complete your details below and
              secure your TSE Live ticket via
              M-Pesa.
            </p>
          </div>

        </div>
      </div>

      {/* -------------------------------------------- */}
      {/* CHECKOUT CONTENT */}
      {/* -------------------------------------------- */}

      <div className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-8 lg:px-12 lg:py-12">

        <form
          onSubmit={handleSubmit}
          className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_400px]"
        >

          {/* ---------------------------------------- */}
          {/* LEFT COLUMN */}
          {/* ---------------------------------------- */}

          <div className="space-y-6">

            {/* CUSTOMER */}

            <CheckoutForm
              customer={customer}
              onChange={setCustomer}
            />

            {/* PAYMENT */}

            <section className="border border-black/10 bg-[#f4f1ea]">

              <div className="border-b border-black/10 px-6 py-6 md:px-8">

                <p className="text-[9px] uppercase tracking-[0.3em] text-black/35">
                  Step 02
                </p>

                <h2 className="mt-2 text-2xl uppercase tracking-[-0.03em]">
                  Payment
                </h2>

                <p className="mt-2 max-w-lg text-xs leading-5 text-black/45">
                  Choose your payment method and
                  complete your ticket purchase.
                </p>

              </div>

              <div className="p-6 md:p-8">

                <PaymentMethod
                  value={paymentMethod}
                  onChange={setPaymentMethod}
                />

              </div>
            </section>

            {/* TERMS */}

            <section className="border border-black/10 bg-[#f4f1ea] p-6 md:p-8">

              <label className="flex cursor-pointer items-start gap-4">

                <input
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={(event) =>
                    setTermsAccepted(
                      event.target.checked
                    )
                  }
                  className="mt-0.5 h-4 w-4 accent-black"
                />

                <span className="text-xs leading-5 text-black/50">
                  I agree to the event terms and
                  understand that ticket purchases
                  are subject to the event&apos;s
                  cancellation and refund policy.
                </span>

              </label>

            </section>

            {/* PAYMENT STATUS */}

            {paymentMessage && (
              <section
                className={`border p-5 ${
                  paymentState === "failed"
                    ? "border-red-900/15 bg-red-900/[0.03]"
                    : paymentState === "paid"
                    ? "border-green-900/15 bg-green-900/[0.03]"
                    : "border-black/10 bg-[#f4f1ea]"
                }`}
              >

                <div className="flex items-start gap-4">

                  {/* LOADING */}

                  {(paymentState ===
                    "initiating" ||
                    paymentState ===
                      "waiting") && (
                    <div className="mt-0.5 h-4 w-4 shrink-0 animate-spin rounded-full border border-black/15 border-t-black" />
                  )}

                  {/* SUCCESS */}

                  {paymentState ===
                    "paid" && (
                    <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-black text-[9px] text-white">
                      ✓
                    </div>
                  )}

                  {/* FAILED */}

                  {paymentState ===
                    "failed" && (
                    <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-900 text-[9px] text-white">
                      !
                    </div>
                  )}

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em]">
                      {paymentState ===
                      "waiting"
                        ? "Waiting for payment"
                        : paymentState ===
                          "initiating"
                        ? "Processing"
                        : paymentState ===
                          "paid"
                        ? "Payment confirmed"
                        : paymentState ===
                          "failed"
                        ? "Payment unsuccessful"
                        : "Payment"}
                    </p>

                    <p className="mt-2 text-xs leading-5 text-black/45">
                      {paymentMessage}
                    </p>
                  </div>

                </div>

              </section>
            )}

            {/* PAY BUTTON */}

            <button
              type="submit"
              disabled={
                !canCheckout ||
                isSubmitting
              }
              className="w-full bg-black px-8 py-5 text-[10px] uppercase tracking-[0.25em] text-white transition hover:bg-black/85 disabled:cursor-not-allowed disabled:opacity-35"
            >
              {paymentState ===
              "waiting"
                ? "Waiting for payment..."
                : isSubmitting
                ? "Processing..."
                : paymentMethod ===
                  "mpesa"
                ? `Pay KES ${total.toLocaleString()} via M-Pesa`
                : `Pay KES ${total.toLocaleString()}`}
            </button>

            <p className="text-center text-[8px] uppercase tracking-[0.15em] text-black/25">
              Secure checkout · The Styled Edit Live
            </p>

          </div>

          {/* ---------------------------------------- */}
          {/* RIGHT COLUMN */}
          {/* ---------------------------------------- */}

          <div>
            <CheckoutSummary
              selectedTickets={
                activeTickets
              }
              total={total}
            />
          </div>

        </form>
      </div>
    </main>
  );
}