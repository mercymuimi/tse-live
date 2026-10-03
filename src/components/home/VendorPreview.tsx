"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const marketSpaces = [
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

export default function VendorPreview() {
  const shouldReduceMotion = useReducedMotion();

  const fadeInView = (delay = 0) => ({
    initial: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 24,
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
      <div className="mx-auto max-w-360 px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        {/* =====================================================
            HEADER
        ===================================================== */}
        <div className="grid gap-10 border-t border-white/10 pt-5 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
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
              className="mt-12 max-w-6xl font-display text-[clamp(4rem,9vw,9rem)] uppercase leading-[0.78] tracking-[-0.06em]"
            >
              Meet the
              <br />
              <span className="ml-[7%]">culture.</span>
            </motion.h2>
          </div>

          <motion.div
            {...fadeInView(0.16)}
            className="lg:col-span-4 lg:col-start-9 lg:border-l lg:border-white/10 lg:pl-8 lg:pt-2"
          >
            <p className="max-w-md text-sm leading-6 text-white/55 sm:text-base sm:leading-7">
              TSE Live brings together independent sellers, makers and
              creatives — each with their own point of view, their own edit
              and their own story.
            </p>

            <p className="mt-5 max-w-md text-sm leading-6 text-white/35">
              Shop the pieces. Discover new brands. Meet the people behind
              the culture.
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            MARKET GRID
        ===================================================== */}
        <div className="mt-14 grid gap-x-6 gap-y-14 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-y-20">
          {marketSpaces.map((space, index) => (
            <motion.article
              key={space.number}
              {...fadeInView(0.08 + index * 0.08)}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-tse-ink">
                <Image
                  src={space.image}
                  alt={`${space.name} at The Styled Edit Live`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover grayscale transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
                />

                <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/5" />

                <div className="absolute left-5 top-5 z-10">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/75">
                    {space.number}
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 z-10">
                  <span className="border border-white/30 bg-black/20 px-3 py-2 text-[8px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                    {space.tag}
                  </span>
                </div>
              </div>

              <div className="mt-5 border-t border-white/10 pt-5">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <span className="text-[8px] uppercase tracking-[0.2em] text-white/25">
                      Market / {space.number}
                    </span>

                    <h3 className="mt-3 font-display text-2xl uppercase leading-none tracking-[-0.03em] sm:text-3xl">
                      {space.name}
                    </h3>
                  </div>

                  <span className="pt-1 text-[9px] font-medium uppercase tracking-[0.15em] text-white/25">
                    TSE
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* =====================================================
            CLOSING STATEMENT
        ===================================================== */}
        <motion.div
          {...fadeInView(0.2)}
          className="mt-20 border-t border-white/10 pt-10 sm:mt-24"
        >
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            {/* BIG STATEMENT */}
            <div className="lg:col-span-7">
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-tse-accent">
                More than shopping
              </span>

              <h3 className="mt-5 max-w-3xl font-display text-[clamp(3.5rem,7vw,7rem)] uppercase leading-[0.8] tracking-[-0.055em]">
                Find it.
                <br />
                <span className="ml-[6%]">Make it yours.</span>
              </h3>
            </div>

            {/* COPY + CTA */}
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-sm leading-6 text-white/45 sm:text-base sm:leading-7">
                Come looking for one thing. Leave with something unexpected.
                The TSE Market is where fashion, discovery and the people
                behind the culture meet.
              </p>

              <Link
                href="/vendors"
                className="group mt-8 inline-flex items-center gap-4 border-b border-white/30 pb-3 text-[10px] font-bold uppercase tracking-[0.18em] transition-all duration-300 hover:border-tse-accent"
              >
                Explore the market
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}