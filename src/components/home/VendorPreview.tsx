"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const vendorSpaces = [
  {
    number: "01",
    name: "Thrift & Vintage",
    tag: "The Market",
    image: "/images/thrift1.JPG",
  },
  {
    number: "02",
    name: "Bags & Goods",
    tag: "The Edit",
    image: "/images/bags1.jpg",
  },
  {
    number: "03",
    name: "Accessories",
    tag: "The Details",
    image: "/images/accessories2.JPG",
  },
];

const vendorExperience = [
  "SELL",
  "SHOWCASE",
  "CREATE",
  "COLLABORATE",
  "CONNECT",
  "GROW",
];

export default function VendorPreview() {
  const shouldReduceMotion = useReducedMotion();

  const fadeInView = (delay = 0) => ({
    initial: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 30,
    },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    viewport: {
      once: true,
      amount: 0.15,
    },
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <section className="relative overflow-hidden bg-tse-black text-tse-paper">
      <div className="mx-auto max-w-360 px-6 pb-20 pt-20 sm:px-8 sm:pb-24 sm:pt-24 lg:px-10 lg:pb-32 lg:pt-28">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="grid gap-10 border-t border-white/10 pt-5 lg:grid-cols-12 lg:items-start lg:gap-8">
          {/* LEFT */}

          <div className="lg:col-span-7">
            <motion.div
              {...fadeInView(0)}
              className="flex items-center gap-4"
            >
              <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/40">
                The Market
              </span>

              <span className="h-px w-14 bg-white/20" />
            </motion.div>

            <motion.h2
              {...fadeInView(0.08)}
              className="
                mt-14
                font-display
                text-[clamp(4rem,9vw,9rem)]
                uppercase
                leading-[0.78]
                tracking-[-0.06em]
              "
            >
              Meet the
              <br />
              <span className="ml-[7%]">culture.</span>
            </motion.h2>
          </div>

          {/* RIGHT */}

          <motion.div
            {...fadeInView(0.18)}
            className="lg:col-span-4 lg:col-start-9 lg:border-l lg:border-white/10 lg:pl-8 lg:pt-2"
          >
            <p className="max-w-md text-sm leading-6 text-white/55 sm:text-base sm:leading-7">
              TSE Live brings together independent sellers, makers and
              creatives — each with their own point of view, their own edit
              and their own story.
            </p>

            <p className="mt-5 max-w-md text-sm leading-6 text-white/35">
              Shop the pieces. Discover new brands. Meet the people building
              the culture around fashion.
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            MARKET GRID
        ====================================================== */}

        <div className="mt-20 grid gap-x-6 gap-y-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-24">
          {vendorSpaces.map((space, index) => (
            <motion.article
              key={space.number}
              {...fadeInView(0.08 + index * 0.08)}
              className="group"
            >
              {/* IMAGE */}

              <div className="relative aspect-3/4 overflow-hidden bg-tse-ink">
                <Image
                  src={space.image}
                  alt={`${space.name} at The Styled Edit Live`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="
                    object-cover
                    grayscale
                    transition-all
                    duration-700
                    ease-out
                    group-hover:scale-[1.04]
                    group-hover:grayscale-0
                  "
                />

                {/* OVERLAY */}

                <div className="absolute inset-0 bg-black/25 transition-colors duration-500 group-hover:bg-black/10" />

                {/* NUMBER */}

                <div className="absolute left-5 top-5 z-10">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/70">
                    {space.number}
                  </span>
                </div>

                {/* TAG */}

                <div className="absolute bottom-5 left-5 z-10">
                  <span className="border border-white/30 bg-black/20 px-3 py-2 text-[8px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                    {space.tag}
                  </span>
                </div>
              </div>

              {/* INFO */}

              <div className="mt-5 flex items-start justify-between gap-6 border-t border-white/10 pt-5">
                <h3
                  className="
                    font-display
                    text-2xl
                    uppercase
                    leading-none
                    tracking-tight
                    sm:text-3xl
                  "
                >
                  {space.name}
                </h3>

                <span className="shrink-0 pt-1 text-[9px] font-medium uppercase tracking-[0.15em] text-white/30">
                  TSE / {space.number}
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* =====================================================
            VENDOR EXPERIENCE
        ====================================================== */}

        <motion.div
          {...fadeInView(0.25)}
          className="mt-24 border-t border-white/10 pt-10 sm:mt-28"
        >
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            {/* TITLE */}

            <div className="lg:col-span-7">
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-tse-accent">
                For the ones building the culture
              </span>

              <h3
                className="
                  mt-5
                  max-w-3xl
                  font-display
                  text-[clamp(3.5rem,7vw,7rem)]
                  uppercase
                  leading-[0.8]
                  tracking-[-0.055em]
                "
              >
                Bring your
                <br />
                <span className="ml-[6%]">edit.</span>
              </h3>
            </div>

            {/* COPY */}

            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-sm leading-6 text-white/50 sm:text-base sm:leading-7">
                Sell your pieces. Showcase your brand. Create content.
                Collaborate with other creatives and connect with people who
                care about fashion and the culture around it.
              </p>

              <Link
                href="/vendors"
                className="
                  group
                  mt-8
                  flex
                  w-fit
                  items-center
                  gap-4
                  border-b
                  border-white/30
                  pb-3
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  transition-colors
                  duration-300
                  hover:border-tse-accent
                "
              >
                Explore vendor spaces
              </Link>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            EXPERIENCE STRIP
        ====================================================== */}

        <motion.div
          {...fadeInView(0.35)}
          className="mt-20 grid grid-cols-2 border-y border-white/10 sm:grid-cols-3 lg:grid-cols-6"
        >
          {vendorExperience.map((item, index) => (
            <div
              key={item}
              className={`
                flex
                min-h-20
                items-center
                justify-center
                gap-3
                px-4
                text-center
                ${
                  index !== vendorExperience.length - 1
                    ? "border-r border-white/10"
                    : ""
                }
                ${
                  index >= 2
                    ? "border-t border-white/10 sm:border-t-0"
                    : ""
                }
              `}
            >
              <span className="font-display text-[10px] text-tse-accent/60">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/40">
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}