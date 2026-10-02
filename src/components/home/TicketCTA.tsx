"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#090909] text-[#F4F0E8]">
      <div className="mx-auto max-w-360 px-6 pt-16 pb-28 sm:px-8 sm:pt-20 sm:pb-36 lg:px-10 lg:pt-24 lg:pb-48">
        {/* TOP META */}
        <div className="flex items-center justify-between border-t border-white/10 pt-5">
          <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/35">
            Be Part Of It
          </span>

          <span className="hidden text-[9px] uppercase tracking-[0.2em] text-white/25 sm:block">
            The Styled Edit Live
          </span>
        </div>

        {/* MAIN CTA */}
        <div className="relative mt-20">
          {/* Decorative year */}
          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-3
              -top-16
              font-display
              text-[clamp(10rem,25vw,25rem)]
              leading-none
              tracking-[-0.08em]
              text-white/2.5
            "
          >
            26
          </span>

          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              z-10
              max-w-275
              font-display
              text-[clamp(5rem,12vw,12rem)]
              uppercase
              leading-[0.76]
              tracking-[-0.065em]
            "
          >
            Be part
            <br />
            <span className="ml-[8%]">of it.</span>
          </motion.h2>

          {/* SUPPORTING CONTENT */}
          <div className="relative z-10 mt-12 grid gap-10 lg:grid-cols-12 lg:items-end">
            {/* COPY */}
            <div className="lg:col-span-5">
              <p className="max-w-md text-sm leading-6 text-white/45 sm:text-base sm:leading-7">
                Come for the fashion. Stay for the people.
                <br className="hidden sm:block" />
                Leave with something to remember — and something to create.
              </p>
            </div>

            {/* TICKET */}
            <div className="lg:col-span-4 lg:col-start-9">
              <div className="border-t border-white/10 pt-5">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/30">
                    From
                  </span>

                  <span className="font-display text-3xl uppercase">
                    KES 500
                  </span>
                </div>

                <Link
                  href="/tickets"
                  className="
                    group
                    mt-6
                    flex
                    h-14
                    w-full
                    items-center
                    justify-between
                    bg-[#F4F0E8]
                    px-6
                    text-black
                    transition-all
                    duration-300
                    hover:bg-white
                  "
                >
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.16em]">
                    Get Your Ticket
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM MESSAGE */}
        <div className="mt-28 border-t border-white/10 pt-6">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/25">
              Fashion · Culture · Community
            </p>

            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/25">
              30.10.26 · Nairobi, Kenya
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}