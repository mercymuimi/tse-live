"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);

  /* =====================================================
     HERO-SPECIFIC SCROLL PROGRESS

     Instead of tracking the entire page, the parallax
     animation now responds specifically to the Hero.
  ====================================================== */

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -45]
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1.05, 1]
  );

  const dateY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -18]
  );

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-tse-black text-tse-paper"
    >
      {/* =====================================================
          ATMOSPHERE
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Vertical editorial guide */}
        <div className="absolute left-[8%] top-0 h-full w-px bg-white/[0.035]" />

        {/* Soft radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_35%,rgba(255,255,255,0.028),transparent_32%)]" />

        {/* Grain */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.035] mix-blend-overlay"
          aria-hidden="true"
        >
          <filter id="tse-grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="2"
              stitchTiles="stitch"
            />
          </filter>

          <rect
            width="100%"
            height="100%"
            filter="url(#tse-grain)"
          />
        </svg>
      </div>

      {/* =====================================================
          HERO CONTAINER
      ====================================================== */}

      <div className="tse-container relative z-10 pb-0 pt-24 sm:pt-28 lg:pt-30">
        <div className="grid lg:grid-cols-12 lg:gap-12">
          {/* =================================================
              LEFT — CONTENT
          ================================================== */}

          <div className="relative z-20 flex flex-col lg:col-span-7">
            {/* TOP META */}

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-8 flex items-center gap-3 sm:mb-10"
            >
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-tse-accent"
              />

              <span className="tse-eyebrow text-white/50">
                The Styled Edit Live
              </span>

              <span
                aria-hidden="true"
                className="h-px w-8 bg-white/15"
              />

              <span className="tse-label text-white/35">
                Nairobi
              </span>
            </motion.div>

            {/* DATE */}

            <motion.div
              style={{
                y: prefersReducedMotion ? 0 : dateY,
              }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex items-center gap-4"
            >
              <span className="font-display text-[clamp(1.35rem,2vw,1.7rem)] tracking-[0.03em] text-tse-paper">
                30.10.26
              </span>

              <span
                aria-hidden="true"
                className="h-px w-10 bg-tse-accent/50 sm:w-14"
              />

              <span className="font-sans text-[8px] font-medium uppercase tracking-[0.22em] text-white/35">
                One day only
              </span>
            </motion.div>

            {/* =================================================
                MAIN TITLE
            ================================================== */}

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.95,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 font-display uppercase tracking-[-0.065em] sm:mt-12"
            >
              <span className="block text-[clamp(6.5rem,13vw,12rem)] leading-[0.68]">
                TSE<span className="text-tse-accent">.</span>
              </span>

              <span className="ml-[7%] block font-accent text-[clamp(5.7rem,11.5vw,10.8rem)] leading-[0.82] tracking-[-0.045em] text-white/85">
                live
              </span>
            </motion.h1>

            {/* =================================================
                DESCRIPTION
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.28,
                ease: "easeOut",
              }}
              className="mt-7 max-w-125 sm:mt-9"
            >
              <p className="font-sans text-[14px] leading-6 text-white/52 sm:text-[15px] sm:leading-7">
                A live expression of thrift, style, creativity and
                community — bringing The Styled Edit from the
                screen into real life.
              </p>
            </motion.div>

            {/* =================================================
                CTA
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.38,
                ease: "easeOut",
              }}
              className="mt-10 flex flex-col gap-3 pb-8 sm:mt-12 sm:flex-row sm:items-center"
            >
              {/* PRIMARY */}

              <Link
                href="/tickets"
                className="group relative inline-flex h-13 items-center justify-center overflow-hidden border border-tse-paper bg-tse-paper px-7 text-tse-black transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-tse-accent"
              >
                <span className="absolute inset-0 -translate-x-full bg-tse-accent transition-transform duration-500 ease-out group-hover:translate-x-0" />

                <span className="relative z-10 font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-tse-black">
                  Get Your Ticket
                </span>
              </Link>

              {/* SECONDARY */}

              <Link
                href="/experience"
                className="group relative inline-flex h-13 items-center justify-center overflow-hidden border border-white/20 bg-transparent px-7 text-tse-paper transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/40 hover:bg-white/4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-tse-accent"
              >
                <span className="absolute inset-y-0 left-0 w-0 bg-white/6 transition-all duration-500 ease-out group-hover:w-full" />

                <span className="relative z-10 font-sans text-[9px] font-bold uppercase tracking-[0.2em]">
                  Explore TSE Live
                </span>
              </Link>
            </motion.div>
          </div>

          {/* =================================================
              RIGHT — IMAGE
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mt-12 lg:col-span-5 lg:col-start-8 lg:mt-8"
          >
            <div className="group relative aspect-4/5 overflow-hidden bg-tse-ink">
              {/* IMAGE */}

              <motion.div
                style={{
                  y: prefersReducedMotion ? 0 : imageY,
                  scale: prefersReducedMotion ? 1 : imageScale,
                }}
                className="absolute inset-[-5%]"
              >
                <Image
                  src="/images/hero1.jpeg"
                  alt="The Styled Edit Live"
                  fill
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAKAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAj/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  sizes="(max-width: 1024px) 90vw, 42vw"
                  className="object-cover grayscale transition-all duration-1000 ease-out group-hover:scale-[1.025] group-hover:grayscale-0"
                />
              </motion.div>

              {/* IMAGE OVERLAY */}

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-black/5"
              />

              {/* SUBTLE FRAME */}

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-5 border border-white/10 transition-colors duration-700 group-hover:border-white/20 sm:inset-7"
              />

              {/* SMALL CAPTION */}

              <div className="absolute bottom-6 left-6 z-10 sm:bottom-8 sm:left-8">
                <p className="font-sans text-[8px] font-semibold uppercase tracking-[0.2em] text-white/65">
                  The Styled Edit
                </p>

                <p className="mt-1 font-sans text-[8px] uppercase tracking-[0.18em] text-white/35">
                  Live / Nairobi / 2026
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM INFORMATION
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.8,
          }}
          className="mt-14 border-t border-white/8 py-5 sm:mt-16"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {/* DATE */}

            <div className="border-b border-white/8 py-4 pr-5 sm:border-b-0 sm:border-r sm:py-2 sm:pr-8">
              <p className="tse-eyebrow text-white/35">
                Date
              </p>

              <p className="mt-1 font-display text-[22px] uppercase leading-none text-white/85">
                30 October
              </p>
            </div>

            {/* LOCATION */}

            <div className="border-b border-white/8 py-4 pl-5 sm:border-b-0 sm:border-r sm:py-2 sm:px-8">
              <p className="tse-eyebrow text-white/35">
                Location
              </p>

              <p className="mt-2 font-sans text-[9px] font-semibold uppercase tracking-[0.15em] text-white/55">
                Gataka · Rongai
              </p>
            </div>

            {/* ENTRY */}

            <div className="border-r border-white/8 py-4 pr-5 sm:py-2 sm:px-8">
              <p className="tse-eyebrow text-white/35">
                Entry
              </p>

              <p className="mt-2 font-sans text-[9px] font-semibold uppercase tracking-[0.15em] text-white/55">
                From KES 500
              </p>
            </div>

            {/* EXPERIENCE */}

            <div className="py-4 pl-5 sm:py-2 sm:pl-8">
              <p className="tse-eyebrow text-white/35">
                Experience
              </p>

              <p className="mt-2 font-sans text-[9px] font-semibold uppercase tracking-[0.15em] text-white/55">
                Thrift · Style · Live
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}