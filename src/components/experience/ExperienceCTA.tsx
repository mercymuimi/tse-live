"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function ExperienceCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-tse-black px-6 pb-24 text-tse-paper md:px-12 md:pb-32 lg:px-16 lg:pb-40">
      <div className="mx-auto max-w-360 border-t border-white/10 pt-16 md:pt-24">
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 24,
                }
          }
          whileInView={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid gap-14 lg:grid-cols-12 lg:items-end"
        >
          {/* COPY */}
          <div className="lg:col-span-9">
            <div className="flex items-center gap-3">
              

              <p className="tse-eyebrow text-white/35">
                TSE LIVE // 30.10.26
              </p>
            </div>

            <h2 className="mt-7 max-w-260 font-display text-[clamp(4rem,9vw,9rem)] uppercase leading-[0.78] tracking-[-0.065em]">
              Don&apos;t Just
              <br />
              Hear About It.
              <br />
              <span className="text-white/30">Be There.</span>
            </h2>
          </div>

          {/* ACTION */}
          <div className="lg:col-span-3 lg:justify-self-end">
            <Link
              href="/tickets"
              className="group flex w-full items-center justify-between border border-white/15 bg-tse-paper px-6 py-5 text-tse-black transition-all duration-300 hover:border-tse-paper hover:bg-white lg:w-72"
            >
              <span className="text-[9px] font-bold uppercase tracking-[0.25em]">
                Get your ticket
              </span>
            </Link>

            <p className="mt-4 text-[9px] uppercase tracking-[0.25em] text-white/25">
              One day only · Barizi Resort
            </p>
          </div>
        </motion.div>

        {/* BOTTOM LINE */}
        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between md:mt-24">
          <p className="tse-label text-white/25">
            The Styled Edit Live
          </p>

          <p className="tse-label text-white/25">
            01 year · 01 day · 01 experience
          </p>
        </div>
      </div>
    </section>
  );
}