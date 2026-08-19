"use client";

import type { CustomerDetails } from "@/types/checkout";

type CheckoutFormProps = {
  customer: CustomerDetails;
  onChange: (customer: CustomerDetails) => void;
};

export default function CheckoutForm({
  customer,
  onChange,
}: CheckoutFormProps) {
  const updateField = (
    field: keyof CustomerDetails,
    value: string
  ) => {
    onChange({
      ...customer,
      [field]: value,
    });
  };

  return (
    <section className="border border-black/10 bg-[#f4f1ea]">
      {/* HEADER */}
      <div className="border-b border-black/10 px-6 py-6 md:px-8">
        <p className="text-[9px] uppercase tracking-[0.3em] text-black/35">
          Step 01
        </p>

        <h2 className="mt-2 text-2xl uppercase tracking-[-0.03em]">
          Your details
        </h2>

        <p className="mt-2 max-w-lg text-xs leading-5 text-black/45">
          Enter the details we&apos;ll use for your ticket
          confirmation and payment communication.
        </p>
      </div>

      {/* FORM FIELDS */}
      <div className="grid gap-6 p-6 md:grid-cols-2 md:p-8">
        {/* FULL NAME */}
        <div className="md:col-span-2">
          <label
            htmlFor="fullName"
            className="mb-2 block text-[9px] uppercase tracking-[0.25em] text-black/45"
          >
            Full name
          </label>

          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            value={customer.fullName}
            onChange={(event) =>
              updateField(
                "fullName",
                event.target.value
              )
            }
            placeholder="Your full name"
            className="w-full border-b border-black/20 bg-transparent px-0 py-3 text-sm outline-none placeholder:text-black/25 transition-colors focus:border-black"
          />
        </div>

        {/* EMAIL */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-[9px] uppercase tracking-[0.25em] text-black/45"
          >
            Email address
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={customer.email}
            onChange={(event) =>
              updateField(
                "email",
                event.target.value
              )
            }
            placeholder="you@example.com"
            className="w-full border-b border-black/20 bg-transparent px-0 py-3 text-sm outline-none placeholder:text-black/25 transition-colors focus:border-black"
          />
        </div>

        {/* PHONE */}
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-[9px] uppercase tracking-[0.25em] text-black/45"
          >
            M-Pesa phone number
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel"
            value={customer.phone}
            onChange={(event) =>
              updateField(
                "phone",
                event.target.value
              )
            }
            placeholder="07XX XXX XXX"
            className="w-full border-b border-black/20 bg-transparent px-0 py-3 text-sm outline-none placeholder:text-black/25 transition-colors focus:border-black"
          />

          <p className="mt-2 text-[8px] uppercase tracking-[0.12em] text-black/30">
            Enter the number that should receive the M-Pesa prompt.
          </p>
        </div>
      </div>
    </section>
  );
}