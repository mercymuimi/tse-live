"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll();

  const imageY = useTransform(
    scrollYProgress,
    [0, 0.35],
    [0, -55]
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.35],
    [1.08, 1]
  );

  const dateY = useTransform(
    scrollYProgress,
    [0, 0.35],
    [0, -25]
  );

  return (
    <section className="relative overflow-hidden bg-[#090909] text-[#F4F0E8]">
      {/* =====================================================
          HERO
      ====================================================== */}

      <div className="mx-auto max-w-360 px-5 pb-8 pt-28 sm:px-8 sm:pt-32 lg:px-10 lg:pt-36">
        <div className="grid lg:grid-cols-12 lg:gap-10">

          {/* =================================================
              LEFT — EDITORIAL CONTENT
          ================================================= */}

          <div className="relative z-20 lg:col-span-7">

            {/* TOP META */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-10 flex items-center gap-3"
            >
              <span className="relative flex h-2 w-2 items-center justify-center">
                <span className="absolute h-2 w-2 animate-ping rounded-full bg-red-500/30" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-red-500" />
              </span>

              <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/55">
                The Styled Edit Live
              </span>

              <span className="h-px w-8 bg-white/20" />

              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/35">
                Nairobi
              </span>
            </motion.div>

            {/* DATE */}
            <motion.div
              style={{
                y: prefersReducedMotion ? 0 : dateY,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-5 flex items-center gap-4"
            >
              <span className="font-display text-[clamp(1.1rem,2vw,1.5rem)] tracking-[0.04em] text-[#F4F0E8]">
                30.10.26
              </span>

              <span className="h-px w-12 bg-white/20" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white/35">
                One day only
              </span>
            </motion.div>

            {/* MAIN TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display uppercase tracking-[-0.07em]"
            >
              <span className="block text-[clamp(6rem,13vw,12rem)] leading-[0.72]">
                TSE.
              </span>

              <span className="ml-[10%] block text-[clamp(5.8rem,12vw,11rem)] leading-[0.82] italic text-white/90">
                live
              </span>
            </motion.h1>

            {/* MANIFESTO */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.28,
                ease: "easeOut",
              }}
              className="mt-10 max-w-125"
            >
              <p className="text-[15px] leading-7 text-white/60 sm:text-base">
                A live expression of thrift, style, creativity and
                community — bringing The Styled Edit from the screen
                into real life.
              </p>

              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[8px] font-bold uppercase tracking-[0.2em] text-white/35">
                <span>Thrift</span>
                <span>Style</span>
                <span>Create</span>
                <span>Connect</span>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.38,
                ease: "easeOut",
              }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/tickets"
                className="group inline-flex h-13 items-center justify-center gap-5 bg-[#F4F0E8] px-7 text-[10px] font-bold uppercase tracking-[0.18em] text-black transition-all duration-300 hover:bg-white"
              >
                <span>Secure Your Spot</span>
              </Link>

              <Link
                href="/experience"
                className="group inline-flex h-13 items-center justify-center gap-5 border border-white/20 px-7 text-[10px] font-bold uppercase tracking-[0.18em] text-[#F4F0E8] transition-all duration-300 hover:border-white/50 hover:bg-white/[0.04]"
              >
                <span>Explore TSE Live</span>
              </Link>
            </motion.div>
          </div>

          {/* =================================================
              RIGHT — IMAGE
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.1,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mt-16 lg:col-span-5 lg:col-start-8 lg:mt-8"
          >
            {/* IMAGE */}
            <div className="group relative aspect-4/5 overflow-hidden bg-[#111]">

              <motion.div
                style={{
                  y: prefersReducedMotion ? 0 : imageY,
                  scale: prefersReducedMotion ? 1 : imageScale,
                }}
                className="absolute inset-[-7%]"
              >
                <img
                  src="/images/hero1.jpeg"
                  alt="The Styled Edit Live"
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
                />
              </motion.div>

              {/* DARK GRADIENT */}
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/10" />

              {/* IMAGE NUMBER */}
              <div className="absolute right-5 top-5 z-10">
                <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/50">
                  01 — 01
                </span>
              </div>

              {/* IMAGE CAPTION */}
              <div className="absolute bottom-5 left-5 z-10">
                <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/70">
                  The Styled Edit
                </p>

                <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-white/35">
                  Live / Nairobi / 2026
                </p>
              </div>

              {/* FRAME */}
              <div className="pointer-events-none absolute inset-0 border border-white/10 transition-colors duration-500 group-hover:border-white/25" />
            </div>

            {/* EDITORIAL STICKER */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: -5 }}
              transition={{
                duration: 0.7,
                delay: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute -left-4 top-8 z-20 bg-[#F4F0E8] px-5 py-3 shadow-2xl sm:-left-6"
            >
              <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-black">
                No° 01 — FW26
              </span>
            </motion.div>

            {/* RED ACCENT */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute -bottom-3 -right-3 z-20 h-8 w-8 rounded-full border border-red-500/30"
            >
              <div className="absolute inset-2 rounded-full bg-red-500" />
            </motion.div>

            {/* VERTICAL LABEL */}
            <div className="absolute -right-8 bottom-12 hidden rotate-90 lg:block">
              <span className="text-[7px] font-bold uppercase tracking-[0.3em] text-white/25">
                Fashion / Culture / Community
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM MANIFESTO STRIP
      ====================================================== */}

      <div className="border-y border-white/10">
        <div className="mx-auto flex max-w-360 items-center justify-between gap-6 overflow-hidden px-5 py-5 sm:px-8 lg:px-10">
          <div className="flex min-w-max items-center gap-6">
            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/35">
              The Styled Edit Live
            </span>

            <span className="h-1 w-1 rounded-full bg-red-500" />

            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/35">
              Thrift
            </span>

            <span className="text-white/15">×</span>

            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/35">
              Style
            </span>

            <span className="text-white/15">×</span>

            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/35">
              Culture
            </span>

            <span className="text-white/15">×</span>

            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/35">
              Community
            </span>
          </div>

          <span className="hidden whitespace-nowrap text-[8px] font-semibold uppercase tracking-[0.2em] text-white/20 sm:block">
            30 October 2026
          </span>
        </div>
      </div>
    </section>
  );
}