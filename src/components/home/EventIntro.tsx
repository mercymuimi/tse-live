"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const stats = [
  { value: "01", label: "Day of TSE Live" },
  { value: "20+", label: "Vendors" },
  { value: "100+", label: "Looks & Finds" },
  { value: "01", label: "Year of TSE" },
];

const activities = [
  "Thrift Market",
  "Live Styling",
  "Style Competition",
  "Content Creation",
  "Poolside",
  "Live Music",
  "Launch Moment",
  "Awards & Gifts",
];

export default function EventIntro() {
  const shouldReduceMotion = useReducedMotion();

  const fadeInView = (delay = 0) => ({
    initial: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 22,
    },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    viewport: {
      once: true,
      margin: "-80px",
    },
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <section className="relative overflow-hidden bg-tse-black text-tse-paper">
      <div className="mx-auto max-w-360 px-6 pb-20 pt-24 sm:px-8 sm:pb-24 sm:pt-32 lg:px-10 lg:pb-28 lg:pt-40">
        {/* =====================================================
            TOP META
        ====================================================== */}

        <motion.div
          {...fadeInView(0)}
          className="mb-16 flex items-start justify-between border-t border-white/10 pt-4 sm:mb-20"
        >
          <span className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/45">
            <span className="h-1.5 w-1.5 rounded-full bg-tse-accent" />
            01 / The TSE Live Experience
          </span>

          <span className="hidden text-[9px] uppercase tracking-[0.2em] text-white/35 sm:block">
            Nairobi · Kenya
          </span>
        </motion.div>

        {/* =====================================================
            MAIN STATEMENT
        ====================================================== */}

        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          {/* LEFT — HEADLINE */}

          <div className="lg:col-span-7">
            <h2 className="font-display text-[clamp(3.8rem,8vw,8rem)] uppercase leading-[0.82] tracking-[-0.045em]">
              <motion.span
                {...fadeInView(0.1)}
                className="block"
              >
                More than
              </motion.span>

              <motion.span
                {...fadeInView(0.2)}
                className="ml-[8%] block"
              >
                a thrift
              </motion.span>

              <motion.span
                {...fadeInView(0.3)}
                className="block font-accent font-normal lowercase tracking-[-0.035em] text-white/80"
              >
                experience.
              </motion.span>
            </h2>
          </div>

          {/* RIGHT — DESCRIPTION */}

          <div className="flex flex-col justify-end lg:col-span-4 lg:col-start-9">
            <motion.p
              {...fadeInView(0.4)}
              className="max-w-md text-base leading-7 text-white/70 sm:text-lg sm:leading-8"
            >
              TSE Live is The Styled Edit, offline — a one-day celebration of
              thrift, personal style, creativity, community and everything
              we're building next.
            </motion.p>

            <motion.p
              {...fadeInView(0.48)}
              className="mt-6 max-w-md text-sm leading-6 text-white/45"
            >
              Shop curated finds, get styled, compete for the best look,
              create content, meet independent vendors, take a dip, catch live
              music and celebrate one year of TSE with us.
            </motion.p>

            <motion.div {...fadeInView(0.56)}>
              <Link
                href="/experience"
                className="group mt-10 inline-flex w-fit items-center gap-3 border-b border-white/30 pb-2 text-[10px] font-bold uppercase tracking-[0.18em] transition-colors duration-300 hover:border-tse-accent"
              >
                <span className="transition-colors duration-300 group-hover:text-tse-accent">
                  Explore the experience
                </span>

                <ArrowUpRight
                  size={13}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* =====================================================
            EXPERIENCE STRIP
        ====================================================== */}

        <motion.div
          {...fadeInView(0.5)}
          className="mt-20 border-y border-white/10 py-6 sm:mt-24"
        >
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            {activities.map((activity, index) => (
              <div
                key={activity}
                className="flex items-center gap-3"
              >
                <span className="font-display text-[11px] text-tse-accent/70">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/50">
                  {activity}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* =====================================================
            EXPERIENCE NOTE
        ====================================================== */}

        <motion.div
          {...fadeInView(0.56)}
          className="mt-16 grid gap-10 border-b border-white/10 pb-16 lg:grid-cols-12 lg:gap-8"
        >
          <div className="lg:col-span-3">
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-tse-accent">
              The idea
            </p>
          </div>

          <div className="lg:col-span-7 lg:col-start-5">
            <p className="font-display text-[clamp(2rem,4vw,4rem)] uppercase leading-[0.9] tracking-tight text-white/90">
              Come for the thrift.
              <br />
              Stay for the experience.
            </p>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/45">
              TSE Live brings together the people, brands and creatives around
              The Styled Edit. It is a space to discover something new, express
              your personal style, create, connect and celebrate.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            BOTTOM STATS
        ====================================================== */}

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              {...fadeInView(0.6 + index * 0.08)}
              className="
                border-b
                border-white/10
                py-6
                sm:border-b-0
                sm:border-r
                sm:border-white/10
                sm:px-6
                sm:first:pl-0
                sm:last:border-r-0
              "
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