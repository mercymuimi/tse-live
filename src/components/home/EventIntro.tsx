"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const FLASH = "#FF2A2A";

const stats = [
  { value: "01", label: "Year of TSE" },
  { value: "20+", label: "Vendors" },
  { value: "100+", label: "Looks" },
  { value: "500+", label: "Creatives" },
];

const activities = [
  "Thrift Market",
  "Live Styling",
  "Content & Photoshoots",
  "Poolside Hangout",
  "Food & Drinks",
  "TSE Launch",
];

export default function Intro() {
  const shouldReduceMotion = useReducedMotion();

  const fadeInView = (delay = 0) => ({
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <section className="bg-[#090909] text-white">
<div className="mx-auto max-w-360 px-6 pt-24 pb-16 sm:px-8 sm:pt-32 sm:pb-20 lg:px-10 lg:pt-40 lg:pb-24">
        {/* TOP META */}
        <motion.div
          {...fadeInView(0)}
          className="mb-16 flex items-start justify-between border-t border-white/10 pt-4"
        >
          <span className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/45">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: FLASH }}
            />
            01 / One Year of TSE
          </span>

          <span className="hidden text-[9px] uppercase tracking-[0.2em] text-white/35 sm:block">
            Nairobi &middot; Kenya
          </span>
        </motion.div>

        {/* MAIN STATEMENT */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">

          <div className="lg:col-span-7">
            <h2 className="font-display text-[clamp(3.5rem,8vw,8rem)] uppercase leading-[0.82] tracking-tighter">
              <motion.span {...fadeInView(0.1)} className="block">
                From the
              </motion.span>
              <motion.span
                {...fadeInView(0.2)}
                className="block ml-[8%]"
              >
                screen to
              </motion.span>
              <motion.span
                {...fadeInView(0.3)}
                className="block lowercase font-accent font-normal tracking-[-0.02em]"
              >
                real life.
              </motion.span>
            </h2>
          </div>

          {/* DESCRIPTION */}
          <div className="flex flex-col justify-end lg:col-span-4 lg:col-start-9">
            <motion.p
              {...fadeInView(0.4)}
              className="max-w-md text-base leading-7 text-white/70 sm:text-lg sm:leading-8"
            >
              A year ago, TSE started as a thrift and styling page. TSE Live
              is where we mark that anniversary — and step into what TSE
              becomes next: thrift, styling and lifestyle, together.
            </motion.p>

            <motion.p
              {...fadeInView(0.48)}
              className="mt-6 max-w-md text-sm leading-6 text-white/45"
            >
              Shop the racks, get styled, shoot content, meet the people
              building alongside you, and unwind by the pool — all in one
              day, all in one place.
            </motion.p>

            <motion.div {...fadeInView(0.56)}>
              <Link
                href="/experience"
                className="group mt-10 inline-flex w-fit items-center gap-3 border-b border-white/40 pb-2 text-[10px] font-bold uppercase tracking-[0.18em] transition-colors duration-300 hover:border-[#f2dd98]"
              >
                <span className="transition-colors duration-300 group-hover:text-[#f2dd98]">
                  Explore the experience
                </span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* ACTIVITIES STRIP */}
        <motion.div
          {...fadeInView(0.5)}
          className="mt-20 flex flex-wrap gap-x-8 gap-y-3 border-y border-white/10 py-6"
        >
          {activities.map((activity) => (
            <span
              key={activity}
              className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/50"
            >
              {activity}
            </span>
          ))}
        </motion.div>

        {/* BOTTOM STATS */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              {...fadeInView(0.6 + index * 0.08)}
              className="border-b border-white/10 py-6 sm:border-b-0 sm:border-r sm:border-white/10 sm:px-6 sm:first:pl-0 sm:last:border-r-0"
            >
              <p className="font-display text-4xl leading-none sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/45">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}