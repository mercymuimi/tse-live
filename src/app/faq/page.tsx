"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "What is TSE Live?",
    answer:
      "TSE Live is The Styled Edit brought to life. It is a one-day fashion and lifestyle experience built around thrifting, styling, creativity, music, community and culture.",
  },
  {
    question: "When is TSE Live?",
    answer:
      "TSE Live takes place on 30 October. Detailed event timings and arrival information will be shared with ticket holders.",
  },
  {
    question: "Where is TSE Live?",
    answer:
      "The event is taking place at Kid Palace in Gatakwa-Rongai, Nairobi.",
  },
  {
    question: "What does my General Admission ticket include?",
    answer:
      "General Admission gives you full event access, entry to the TSE Thrift Market, styling consultations, curated content spaces, live music and DJ sets, and access to the wider creative community.",
  },
  {
    question: "Does my ticket include food and drinks?",
    answer:
      "No. Food and drinks are available separately at the event and are not included in the General Admission ticket price.",
  },
  {
    question: "Is swimming included?",
    answer:
      "Pool access is available as an additional paid add-on and can be selected during ticket checkout.",
  },
  {
    question: "What is included in VIP?",
    answer:
      "VIP includes full event access, priority entry, VIP lounge access, a styling consultation, a curated experience and access to the creative community.",
  },
  {
    question: "Can I get a refund for my ticket?",
    answer:
      "TSE Live tickets are non-refundable. Please make sure your details and ticket selection are correct before completing checkout.",
  },
  {
    question: "Can I buy tickets at the event?",
    answer:
      "Tickets are primarily sold online. If additional tickets become available at the door, this will be communicated through The Styled Edit's official channels.",
  },
  {
    question: "What should I wear?",
    answer:
      "Come as yourself. TSE Live is about personal style, experimentation and self-expression. Think fashion-forward, comfortable and ready to move.",
  },
  {
    question: "Can I attend if I am coming alone?",
    answer:
      "Absolutely. TSE Live is designed to bring people together. Come solo, meet people, discover new brands and become part of the community.",
  },
  {
    question: "Will there be vendors?",
    answer:
      "Yes. TSE Live will feature a curated mix of fashion, thrift, creative and lifestyle vendors.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] =
    useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(
      openIndex === index ? null : index
    );
  };

  return (
    <main className="min-h-screen bg-[#f4f1ea] text-black">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="bg-black px-6 pb-20 pt-32 text-white md:px-12 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-7xl">

          <Link
            href="/"
            className="mb-10 inline-block text-[9px] uppercase tracking-[0.3em] text-white/35 transition hover:text-white"
          >
            ← Back home
          </Link>

          <p className="text-[9px] uppercase tracking-[0.35em] text-white/35">
            TSE LIVE // FAQ
          </p>

          <h1 className="mt-6 max-w-6xl font-display text-[clamp(4.5rem,11vw,10rem)] uppercase leading-[0.78] tracking-[-0.06em]">
            Got
            <br />
            Questions?
          </h1>

          <p className="mt-10 max-w-xl text-sm leading-7 text-white/45 md:text-base">
            Everything you need to know before stepping
            into TSE Live.
          </p>

        </div>
      </section>

      {/* =====================================================
          FAQ LIST
      ===================================================== */}

      <section className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-5xl">

          <div className="mb-12 flex items-end justify-between border-b border-black/15 pb-6">
            <div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-black/35">
                TSE LIVE // INFORMATION
              </p>

              <h2 className="mt-3 text-3xl uppercase tracking-[-0.04em] md:text-5xl">
                Frequently asked
              </h2>
            </div>

            <p className="hidden text-[9px] uppercase tracking-[0.2em] text-black/30 md:block">
              {faqs.length} questions
            </p>
          </div>

          <div className="border-t border-black">

            {faqs.map((faq, index) => {
              const isOpen =
                openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="border-b border-black/15"
                >

                  <button
                    type="button"
                    onClick={() =>
                      toggleFAQ(index)
                    }
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-8 py-6 text-left md:py-8"
                  >

                    <div className="flex items-start gap-6">

                      <span className="pt-1 text-[8px] uppercase tracking-[0.2em] text-black/25">
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      <span className="text-base uppercase tracking-[-0.01em] md:text-lg">
                        {faq.question}
                      </span>

                    </div>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/15 transition ${
                        isOpen
                          ? "rotate-45 bg-black text-white"
                          : ""
                      }`}
                    >
                      <Plus
                        size={15}
                        strokeWidth={1.4}
                      />
                    </span>

                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-8 pl-12 pr-10 md:pl-16 md:pr-16">
                        <p className="max-w-2xl text-sm leading-7 text-black/50">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* =====================================================
          STILL HAVE QUESTIONS
      ===================================================== */}

      <section className="bg-[#171717] px-6 py-20 text-white md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">

            <div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/30">
                Still wondering?
              </p>

              <h2 className="mt-5 max-w-xl font-display text-6xl uppercase leading-[0.8] tracking-tighter md:text-8xl">
                Ask
                <br />
                Us.
              </h2>
            </div>

            <div className="flex flex-col justify-end">

              <p className="max-w-md text-sm leading-7 text-white/40">
                If your question isn't answered here,
                reach out to The Styled Edit and we'll
                point you in the right direction.
              </p>

              <a
                href="mailto:hello@thestylededit.com"
                className="mt-8 inline-flex w-fit items-center gap-4 border border-white/20 px-6 py-4 text-[9px] font-bold uppercase tracking-[0.2em] transition hover:bg-white hover:text-black"
              >
                Contact TSE
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.5}
                />
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="border-t border-black/15 pt-10 md:flex md:items-end md:justify-between">

            <div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-black/35">
                No more questions.
              </p>

              <h2 className="mt-4 font-display text-6xl uppercase leading-[0.8] tracking-tighter md:text-8xl">
                Secure
                <br />
                Your Spot.
              </h2>
            </div>

            <Link
              href="/tickets"
              className="mt-10 inline-flex items-center gap-4 bg-black px-7 py-5 text-[9px] font-bold uppercase tracking-[0.22em] text-white transition hover:bg-black/80 md:mt-0"
            >
              Get tickets
              <ArrowUpRight
                size={15}
                strokeWidth={1.5}
              />
            </Link>

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
