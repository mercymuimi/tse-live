"use client";

import {
  CreditCard,
  LockKeyhole,
  Smartphone,
} from "lucide-react";

import type { PaymentMethod as PaymentMethodType } from "@/types/checkout";

type PaymentMethodProps = {
  value: PaymentMethodType;
  onChange: (value: PaymentMethodType) => void;
};

export default function PaymentMethod({
  value,
  onChange,
}: PaymentMethodProps) {
  return (
    <section className="border border-black/10 bg-[#f4f1ea]">
      {/* HEADER */}
      <div className="border-b border-black/10 px-6 py-6 md:px-8">
        <p className="text-[9px] uppercase tracking-[0.3em] text-black/35">
          Step 02
        </p>

        <h2 className="mt-2 text-2xl uppercase tracking-[-0.03em]">
          Payment
        </h2>

        <p className="mt-2 max-w-lg text-xs leading-5 text-black/45">
          Choose your preferred payment method.
        </p>
      </div>

      <div className="space-y-3 p-6 md:p-8">
        {/* M-PESA */}
        <button
          type="button"
          onClick={() => onChange("mpesa")}
          className={`flex w-full items-center justify-between border p-5 text-left transition ${
            value === "mpesa"
              ? "border-black bg-black text-white"
              : "border-black/15 bg-transparent hover:border-black/40"
          }`}
        >
          <div className="flex items-start gap-4">
            <Smartphone
              size={19}
              strokeWidth={1.5}
              className="mt-0.5 shrink-0"
            />

            <div>
              <p className="text-sm uppercase tracking-[0.08em]">
                M-Pesa
              </p>

              <p
                className={`mt-1 text-[9px] uppercase tracking-[0.15em] ${
                  value === "mpesa"
                    ? "text-white/45"
                    : "text-black/35"
                }`}
              >
                Recommended
              </p>
            </div>
          </div>

          <Radio
            active={value === "mpesa"}
            inverted={value === "mpesa"}
          />
        </button>

        {/* M-PESA INFORMATION */}
        {value === "mpesa" && (
          <div className="border border-black/10 bg-white p-5">
            <div className="flex gap-3">
              <Smartphone
                size={17}
                strokeWidth={1.5}
                className="mt-0.5 shrink-0 text-black/50"
              />

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.08em]">
                  How it works
                </p>

                <p className="mt-2 text-xs leading-5 text-black/45">
                  After you click the payment button, an
                  M-Pesa STK prompt will be sent to the
                  phone number you entered above.
                </p>

                <p className="mt-3 text-xs leading-5 text-black/45">
                  Enter your M-Pesa PIN on your phone to
                  complete the payment.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* CARD */}
        <button
          type="button"
          onClick={() => onChange("card")}
          className={`flex w-full items-center justify-between border p-5 text-left transition ${
            value === "card"
              ? "border-black bg-black text-white"
              : "border-black/15 bg-transparent hover:border-black/40"
          }`}
        >
          <div className="flex items-start gap-4">
            <CreditCard
              size={19}
              strokeWidth={1.5}
              className="mt-0.5 shrink-0"
            />

            <div>
              <p className="text-sm uppercase tracking-[0.08em]">
                Card
              </p>

              <p
                className={`mt-1 text-[9px] uppercase tracking-[0.15em] ${
                  value === "card"
                    ? "text-white/45"
                    : "text-black/35"
                }`}
              >
                Visa / Mastercard
              </p>
            </div>
          </div>

          <Radio
            active={value === "card"}
            inverted={value === "card"}
          />
        </button>

        {/* CARD NOT YET AVAILABLE */}
        {value === "card" && (
          <div className="border border-black/10 bg-white p-5">
            <div className="flex gap-3">
              <CreditCard
                size={17}
                strokeWidth={1.5}
                className="mt-0.5 shrink-0 text-black/50"
              />

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.08em]">
                  Card payments
                </p>

                <p className="mt-2 text-xs leading-5 text-black/45">
                  Card payments are not available yet.
                  Please select M-Pesa to continue.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SECURITY NOTE */}
        <div className="flex items-center gap-2 pt-3">
          <LockKeyhole
            size={13}
            strokeWidth={1.5}
            className="text-black/35"
          />

          <p className="text-[8px] uppercase tracking-[0.12em] text-black/30">
            Secure checkout · M-Pesa payment
          </p>
        </div>
      </div>
    </section>
  );
}

function Radio({
  active,
  inverted,
}: {
  active: boolean;
  inverted: boolean;
}) {
  return (
    <span
      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
        active
          ? inverted
            ? "border-white"
            : "border-black"
          : "border-black/30"
      }`}
    >
      {active && (
        <span
          className={`h-2.5 w-2.5 rounded-full ${
            inverted ? "bg-white" : "bg-black"
          }`}
        />
      )}
    </span>
  );
}