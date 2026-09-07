"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll();

  const imageY = useTransform(
    scrollYProgress,
    [0, 0.35],
    [0, -45]
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.35],
    [1.08, 1]
  );

  const dateY = useTransform(
    scrollYProgress,
    [0, 0.35],
    [0, -20]
  );

  return (
    <section className="relative overflow-hidden bg-[#090909] text-[#F4F0E8]">
      {/* =====================================================
          ATMOSPHERE
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Editorial grid */}
        <div className="absolute left-[8%] top-0 h-full w-px bg-white/[0.045]" />
        <div className="absolute right-[8%] top-0 h-full w-px bg-white/[0.045]" />

        {/* Soft vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(255,255,255,0.035),transparent_35%)]" />
      </div>

      {/* =====================================================
          HERO CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 pb-0 pt-28 sm:px-8 sm:pt-32 lg:px-10 lg:pt-36">
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
                <span className="absolute h-2 w-2 animate-ping rounded-full bg-[#B7A06A]/20" />

                <span className="relative h-1.5 w-1.5 rounded-full bg-[#B7A06A]" />
              </span>

              <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.24em] text-white/55">
                The Styled Edit Live
              </span>

              <span className="h-px w-8 bg-white/15" />

              <span className="font-sans text-[9px] font-medium uppercase tracking-[0.2em] text-white/30">
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
              className="mb-6 flex items-center gap-4"
            >
              <span className="font-display text-[clamp(1.25rem,2vw,1.6rem)] tracking-[0.04em] text-[#F4F0E8]">
                30.10.26
              </span>

              <span className="h-px w-10 bg-white/20 sm:w-14" />

              <span className="font-sans text-[8px] font-medium uppercase tracking-[0.22em] text-white/30">
                One day only
              </span>
            </motion.div>

            {/* =================================================
                MAIN TITLE
            ================================================== */}

            <motion.h1
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display uppercase tracking-[-0.065em]"
            >
              <span className="block text-[clamp(6.2rem,13vw,12rem)] leading-[0.68]">
                TSE.
              </span>

              <span className="font-accent ml-[9%] block text-[clamp(5.6rem,11.5vw,10.8rem)] leading-[0.82] tracking-[-0.04em] text-white/90">
                live
              </span>
            </motion.h1>

            {/* =================================================
                MANIFESTO
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.28,
                ease: "easeOut",
              }}
              className="mt-10 max-w-[500px]"
            >
              <p className="font-sans text-[14px] leading-6 text-white/55 sm:text-[15px] sm:leading-7">
                A live expression of thrift, style, creativity and
                community — bringing The Styled Edit from the screen
                into real life.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
                {["Thrift", "Style", "Create", "Connect"].map(
                  (item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-5"
                    >
                      <span className="font-sans text-[8px] font-semibold uppercase tracking-[0.22em] text-white/30">
                        {item}
                      </span>

                      {index !== 3 && (
                        <span className="h-1 w-1 rounded-full bg-white/15" />
                      )}
                    </div>
                  )
                )}
              </div>
            </motion.div>

            {/* =================================================
                CTA
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.4,
                ease: "easeOut",
              }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              {/* PRIMARY */}
              <Link
                href="/tickets"
                className="
                  group
                  inline-flex h-[52px]
                  items-center justify-center gap-6
                  bg-black
                  px-7
                  text-[#090909]
                  transition-all duration-300
                  hover:bg-black
                  border border-white
                "
              >
                <span className="font-sans text-[9px] font-bold uppercase tracking-[0.2em]">
                  Secure Your Spot
                </span>
              </Link>

              {/* SECONDARY */}
              <Link
                href="/experience"
                className="
                  group
                  inline-flex h-13
                  items-center justify-center gap-6
                  border border-white/20
                  px-7
                  text-black
                  transition-all duration-300
                  bg-black
                  hover:border-white/50
                  hover:bg-white/4
                "
              >
                <span className="font-sans text-[9px] font-bold uppercase tracking-[0.2em]">
                  Explore TSE Live
                </span>
              </Link>
            </motion.div>

            {/* SMALL PRICE NOTE */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-4 font-sans text-[8px] uppercase tracking-[0.18em] text-white/25"
            >
              Online entry from KES 500 · Gate entry KES 800
            </motion.p>
          </div>

          {/* =================================================
              RIGHT — IMAGE
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.1,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mt-16 lg:col-span-5 lg:col-start-8 lg:mt-8"
          >
            {/* IMAGE */}
            <div className="group relative aspect-[4/5] overflow-hidden bg-[#111]">
              <motion.div
                style={{
                  y: prefersReducedMotion ? 0 : imageY,
                  scale: prefersReducedMotion ? 1 : imageScale,
                }}
                className="absolute inset-[-7%]"
              >
                <Image
                  src="/images/hero1.jpeg"
                  alt="The Styled Edit Live"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 42vw"
                  className="
                    object-cover
                    grayscale
                    transition-all
                    duration-700
                    ease-out
                    group-hover:scale-[1.035]
                    group-hover:grayscale-0
                  "
                />
              </motion.div>

              {/* IMAGE TREATMENT */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/5" />

              {/* SUBTLE FILM WASH */}
              <div className="pointer-events-none absolute inset-0 bg-[#B7A06A]/[0.025] mix-blend-screen" />

              {/* IMAGE NUMBER */}
              <div className="absolute right-5 top-5 z-10">
                <span className="font-sans text-[8px] font-semibold uppercase tracking-[0.2em] text-white/45">
                  01 — 01
                </span>
              </div>

              {/* IMAGE CAPTION */}
              <div className="absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between">
                <div>
                  <p className="font-sans text-[8px] font-semibold uppercase tracking-[0.2em] text-white/75">
                    The Styled Edit
                  </p>

                  <p className="mt-1 font-sans text-[8px] uppercase tracking-[0.18em] text-white/35">
                    Live / Nairobi / 2026
                  </p>
                </div>

                <span className="font-display text-[24px] leading-none text-white/50">
                  01
                </span>
              </div>

              {/* FRAME */}
              <div className="pointer-events-none absolute inset-0 border border-white/10 transition-colors duration-500 group-hover:border-white/25" />
            </div>

            {/* =================================================
                EDITORIAL STICKER
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
                rotate: -8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: -4,
              }}
              transition={{
                duration: 0.7,
                delay: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute
                -left-4
                top-8
                z-20
                bg-[#F4F0E8]
                px-5
                py-3
                shadow-2xl
                sm:-left-6
              "
            >
              <span className="font-sans text-[8px] font-bold uppercase tracking-[0.18em] text-black">
                No° 01 — 30.10.26
              </span>
            </motion.div>

            {/* GOLD ACCENT */}
            <motion.div
              initial={{
                scale: 0,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute
                -bottom-3
                -right-3
                z-20
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-[#B7A06A]/35
                bg-[#090909]
              "
            >
              <div className="h-2 w-2 rounded-full bg-[#B7A06A]" />
            </motion.div>

            {/* VERTICAL LABEL */}
            <div className="absolute -right-9 bottom-14 hidden rotate-90 lg:block">
              <span className="font-sans text-[7px] font-semibold uppercase tracking-[0.3em] text-white/20">
                Fashion / Culture / Community
              </span>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM INFORMATION
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.9,
          }}
          className="mt-20 border-t border-white/10 py-5"
        >
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div>
              <p className="font-sans text-[7px] font-medium uppercase tracking-[0.24em] text-white/25">
                Date
              </p>

              <p className="mt-1 font-display text-[23px] uppercase leading-none">
                30 October
              </p>
            </div>

            <div>
              <p className="font-sans text-[7px] font-medium uppercase tracking-[0.24em] text-white/25">
                Location
              </p>

              <p className="mt-2 font-sans text-[9px] font-semibold uppercase tracking-[0.15em] text-white/65">
                Rongai · Kenya
              </p>
            </div>

            <div>
              <p className="font-sans text-[7px] font-medium uppercase tracking-[0.24em] text-white/25">
                Entry
              </p>

              <p className="mt-2 font-sans text-[9px] font-semibold uppercase tracking-[0.15em] text-white/65">
                From KES 500
              </p>
            </div>

            <div>
              <p className="font-sans text-[7px] font-medium uppercase tracking-[0.24em] text-white/25">
                Edition
              </p>

              <p className="mt-2 font-sans text-[9px] font-semibold uppercase tracking-[0.15em] text-white/65">
                Anniversary / 01
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          MANIFESTO STRIP
      ====================================================== */}

      <div className="border-y border-white/10 bg-[#0B0B0B]">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-8 overflow-hidden px-5 py-5 sm:px-8 lg:px-10">
          <div className="flex min-w-max items-center gap-5 sm:gap-6">
            <span className="font-sans text-[8px] font-semibold uppercase tracking-[0.25em] text-white/35">
              The Styled Edit Live
            </span>

            <span className="h-1 w-1 rounded-full bg-[#B7A06A]" />

            <span className="font-sans text-[8px] font-semibold uppercase tracking-[0.25em] text-white/30">
              Thrift
            </span>

            <span className="text-white/10">×</span>

            <span className="font-sans text-[8px] font-semibold uppercase tracking-[0.25em] text-white/30">
              Style
            </span>

            <span className="text-white/10">×</span>

            <span className="font-sans text-[8px] font-semibold uppercase tracking-[0.25em] text-white/30">
              Create
            </span>

            <span className="text-white/10">×</span>

            <span className="font-sans text-[8px] font-semibold uppercase tracking-[0.25em] text-white/30">
              Connect
            </span>

            <span className="text-white/10">×</span>

            <span className="font-sans text-[8px] font-semibold uppercase tracking-[0.25em] text-white/30">
              Lifestyle
            </span>
          </div>

          <span className="hidden whitespace-nowrap font-sans text-[7px] font-medium uppercase tracking-[0.25em] text-white/15 sm:block">
            30 October 2026 · Rongai
          </span>
        </div>
      </div>
    </section>
  );
}