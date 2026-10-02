"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

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
      "The event is taking place at Barizi Resort in Gataka-Rongai, Nairobi.",
  },
  {
    question: "What does my Regular ticket include?",
    answer:
      "Regular gives you full event access, your day's outfit curated by TSE, entry to the TSE Thrift Market, styling sessions, content and photoshoot spaces, live music and DJ sets, and access to the wider creative community.",
  },
  {
    question: "What's the difference between Regular and At The Gate?",
    answer:
      "Regular is your advance ticket — book ahead and it includes a styled outfit piece for the day. At The Gate is walk-in entry on the day itself, with the same full event access; outfit pieces are available while stock lasts.",
  },
  {
    question: "What does the Vendor ticket include?",
    answer:
      "Vendor gives you full event access plus a dedicated selling spot, priority setup access, and a feature in TSE's content and community — built for thrift sellers, designers, stylists and creative businesses who want to sell and be seen.",
  },
  {
    question: "Does my ticket include food and drinks?",
    answer:
      "Food and drinks are available separately at the event and are not included in the ticket price.",
  },
  {
    question: "Is swimming included?",
    answer:
      "Pool access is available for vip tickets.",
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <main className="min-h-screen bg-tse-black text-tse-paper">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-tse-black px-6 pb-20 pt-32 md:px-12 md:pb-28 md:pt-40">
        <div className="tse-noise pointer-events-none absolute inset-0 opacity-10" />

        <div className="relative z-10 mx-auto max-w-360">
          <Link
            href="/"
            className="mb-10 inline-block text-[9px] uppercase tracking-[0.3em] text-white/30 transition-colors duration-300 hover:text-white"
          >
            ← Back home
          </Link>

          <div className="border-b border-white/10 pb-6">
            <p className="tse-eyebrow text-white/35">
              TSE LIVE // FAQ
            </p>
          </div>

          <div className="mt-14 md:mt-20">
            <p className="font-accent text-lg italic text-tse-accent md:text-xl">
              Everything before the day.
            </p>

            <h1 className="mt-6 max-w-300 font-display text-[clamp(4.5rem,12vw,11rem)] uppercase leading-[0.76] tracking-[-0.065em]">
              Got
              <br />
              Questions?
            </h1>

            <p className="mt-10 max-w-xl text-sm leading-7 text-white/45 md:text-base">
              Everything you need to know before stepping
              into TSE Live.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ LIST
      ===================================================== */}

      <section className="bg-tse-black px-6 pb-24 pt-4 md:px-12 md:pb-32">
        <div className="mx-auto max-w-300">
          <div className="mb-12 flex items-end justify-between border-b border-white/10 pb-6">
            <div>
              <p className="tse-eyebrow text-white/30">
                TSE LIVE // INFORMATION
              </p>

              <h2 className="mt-3 font-display text-3xl uppercase tracking-[-0.04em] md:text-5xl">
                Frequently asked
              </h2>
            </div>

            <p className="hidden text-[9px] uppercase tracking-[0.2em] text-white/25 md:block">
              {faqs.length} questions
            </p>
          </div>

          <div className="border-t border-white/30">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="border-b border-white/10"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="group flex w-full items-center justify-between gap-8 py-6 text-left md:py-8"
                  >
                    <div className="flex min-w-0 items-start gap-6">
                      <span className="pt-1 text-[8px] uppercase tracking-[0.2em] text-white/25">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-sm uppercase tracking-[0.01em] text-white transition-colors duration-300 group-hover:text-white/70 md:text-base">
                        {faq.question}
                      </span>
                    </div>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 border-white bg-white text-black"
                          : "border-white/15 text-white/60 group-hover:border-white/40 group-hover:text-white"
                      }`}
                    >
                      <Plus
                        size={15}
                        strokeWidth={1.3}
                      />
                    </span>
                  </button>

                  <div
                    id={`faq-answer-${index}`}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-8 pl-12 pr-8 md:pl-16 md:pr-20">
                        <p className="max-w-2xl text-sm leading-7 text-white/40 md:text-[15px]">
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

      <section className="bg-[#111111] px-6 py-20 text-white md:px-12 md:py-28">
        <div className="mx-auto max-w-360">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-6">
              <p className="tse-eyebrow text-white/30">
                Still wondering?
              </p>

              <h2 className="mt-5 font-display text-[clamp(4.5rem,9vw,8rem)] uppercase leading-[0.78] tracking-[-0.06em]">
                Ask
                <br />
                Us.
              </h2>
            </div>

            <div className="flex flex-col justify-end lg:col-span-5 lg:col-start-8">
              <p className="max-w-md text-sm leading-7 text-white/40">
                If your question isn't answered here,
                reach out to The Styled Edit and we'll
                point you in the right direction.
              </p>

              <a
                href="https://wa.me/254110277215"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex w-fit items-center gap-4 border border-white/15 px-6 py-4 text-[9px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-white hover:text-black"
>
                Contact TSE
                </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="bg-tse-black px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-360">
          <div className="border-t border-white/10 pt-10 md:flex md:items-end md:justify-between">
            <div>
              <p className="tse-eyebrow text-white/30">
                No more questions.
              </p>

              <h2 className="mt-5 font-display text-[clamp(4rem,8vw,8rem)] uppercase leading-[0.78] tracking-[-0.06em]">
                Secure
                <br />
                Your Spot.
              </h2>
            </div>

            <Link
              href="/tickets"
              className="group mt-10 inline-flex items-center gap-4 bg-tse-paper px-7 py-5 text-[9px] font-bold uppercase tracking-[0.22em] text-black transition-all duration-300 hover:bg-white md:mt-0"
            >
              Get tickets
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="border-t border-white/10 bg-black px-6 py-12 text-white md:px-12">
        <div className="mx-auto flex max-w-360 flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="font-display text-3xl tracking-[-0.04em]">
              TSE / LIVE
            </p>

            <p className="mt-2 text-[8px] uppercase tracking-[0.25em] text-white/30">
              The Styled Edit Live
            </p>
          </div>

          <div className="flex flex-col gap-2 md:items-end">
            <p className="text-[8px] uppercase tracking-[0.2em] text-white/30">
              Nairobi, Kenya
            </p>

            <p className="text-[8px] uppercase tracking-[0.2em] text-white/20">
              30.10.26 · One Day Only
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}