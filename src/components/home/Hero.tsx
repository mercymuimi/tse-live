"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll();

  const imageY = useTransform(
    scrollYProgress,
    [0, 0.35],
    [0, -70]
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.35],
    [1.08, 1]
  );

  const labelY = useTransform(
    scrollYProgress,
    [0, 0.35],
    [0, -35]
  );

  return (
    <section className="relative overflow-hidden bg-[#090909] text-[#F4F0E8]">
      <div className="mx-auto max-w-[1440px] px-6 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-36 lg:px-10 lg:pb-28 lg:pt-40">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">

          {/* =========================================
              LEFT — HERO CONTENT
          ========================================== */}
          <div className="relative z-10 lg:col-span-6">

            {/* EVENT META */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              className="mb-8 flex items-center gap-4"
            >
              {/* LIVE DOT */}
              <span className="relative flex h-2 w-2 items-center justify-center">
                <span className="absolute h-2 w-2 animate-ping rounded-full bg-red-500/30" />

                <span className="relative h-1.5 w-1.5 rounded-full bg-red-500" />
              </span>

              <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/50">
                The Styled Edit Live
              </span>

              <span className="h-px w-10 bg-white/20" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40">
                30.10.26
              </span>
            </motion.div>

            {/* MAIN TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display uppercase tracking-[-0.065em]"
            >
              <span className="block text-[clamp(5.5rem,11vw,10.5rem)] leading-[0.76]">
                TSE.
              </span>

              <span className="ml-[8%] block text-[clamp(5.5rem,11vw,10.5rem)] italic leading-[0.82]">
                live
              </span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.25,
                ease: "easeOut",
              }}
              className="mt-10 max-w-[430px] border-l border-white/20 pl-5"
            >
              <p className="text-sm leading-6 text-white/55 sm:text-[15px] sm:leading-7">
                Nairobi&apos;s independent fashion, culture and creative
                community — brought together for one unforgettable day.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.35,
                ease: "easeOut",
              }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              {/* PRIMARY CTA */}
              <Link
                href="/tickets"
                className="group inline-flex h-12 items-center justify-center gap-4 bg-[#F4F0E8] px-6 text-[10px] font-bold uppercase tracking-[0.17em] text-black transition-all duration-300 hover:bg-white"
              >
                <span>Get Your Ticket</span>

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>

              {/* SECONDARY CTA */}
              <Link
                href="/experience"
                className="group inline-flex h-12 items-center justify-center gap-4 border border-white/20 px-6 text-[10px] font-bold uppercase tracking-[0.17em] text-[#F4F0E8] transition-all duration-300 hover:border-white hover:bg-white/5"
              >
                <span>Explore Experience</span>

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>

            {/* LOCATION */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.5,
              }}
              className="mt-7 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-white/20" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white/30">
                Nairobi · Kenya
              </span>
            </motion.div>
          </div>

          {/* =========================================
              RIGHT — DYNAMIC EDITORIAL IMAGE
          ========================================== */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative lg:col-span-6 lg:col-start-7"
          >
            {/* IMAGE FRAME */}
            <div className="group relative aspect-[4/5] overflow-hidden bg-[#111] sm:aspect-[5/6] lg:aspect-[4/5]">

              {/* MOVING IMAGE */}
              <motion.div
                style={{
                  y: prefersReducedMotion ? 0 : imageY,
                  scale: prefersReducedMotion ? 1 : imageScale,
                }}
                className="absolute inset-[-8%]"
              >
                <img
                  src="/images/hero.jpg"
                  alt="The Styled Edit Live"
                  className="h-full w-full object-cover grayscale transition-[filter,transform] duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
                />
              </motion.div>

              {/* IMAGE OVERLAY */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />

              {/* TOP EDITORIAL LABEL */}
              <motion.div
                style={{
                  y: prefersReducedMotion ? 0 : labelY,
                }}
                className="absolute -left-3 top-5 z-10 rotate-[-5deg] bg-[#F4F0E8] px-4 py-2 shadow-xl sm:-left-5"
              >
                <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-black">
                  No° 01 — FW26
                </span>
              </motion.div>

              {/* IMAGE CAPTION */}
              <div className="absolute bottom-5 left-5 z-10">
                <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white/70">
                  The Styled Edit Live
                </span>
              </div>

              {/* IMAGE INDEX */}
              <div className="absolute bottom-5 right-5 z-10">
                <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white/50">
                  01 / 01
                </span>
              </div>

              {/* HOVER FRAME */}
              <div className="pointer-events-none absolute inset-0 border border-white/0 transition-all duration-700 group-hover:border-white/20" />
            </div>

            {/* RED EDITORIAL ACCENT */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute -bottom-3 -left-3 h-7 w-7 rounded-full border border-red-500/30"
            >
              <div className="absolute inset-2 rounded-full bg-red-500" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM DIVIDER */}
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-10">
        <div className="border-t border-white/10" />
      </div>
    </section>
  );
}