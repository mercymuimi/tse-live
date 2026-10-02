"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const schedule = [
  {
    number: "01",
    title: "Doors Open",
    description:
      "Arrive, check in, meet the community and ease into the world of TSE Live.",
    type: "Arrive",
  },
  {
    number: "02",
    title: "The Thrift Edit",
    description:
      "Explore curated thrift, vintage pieces, independent brands and the day's vendor edit.",
    type: "Shop",
  },
  {
    number: "03",
    title: "The Style Off",
    description:
      "Get styled, bring your look and step onto the floor for TSE's live fashion competition.",
    type: "Compete",
    featured: true,
  },
  {
    number: "04",
    title: "The Content Floor",
    description:
      "Shoot, create and collaborate across curated content spaces built for creators and brands.",
    type: "Create",
  },
  {
    number: "05",
    title: "Poolside",
    description:
      "Swim, eat and connect. Pool access is included with VIP and VVIP tickets.",
    type: "Splash",
  },
  {
    number: "06",
    title: "One Year of TSE",
    description:
      "Cake cutting and awards — Best Styled, Best Dressed and Client of the Year — with TSE merch and vouchers up for grabs.",
    type: "Celebrate",
    featured: true,
  },
  {
    number: "07",
    title: "Live Music",
    description:
      "Live performances, DJ sets and the energy that carries TSE Live into the night.",
    type: "Music",
  },
];

export default function SchedulePreview() {
  const shouldReduceMotion = useReducedMotion();

  const fadeInView = (delay = 0) => ({
    initial: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 25,
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
      <div className="mx-auto max-w-360 px-6 pb-20 pt-20 sm:px-8 sm:pb-24 sm:pt-24 lg:px-10 lg:pb-28 lg:pt-28">
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
                The Day
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
              One day.
              <br />
              <span className="ml-[7%]">Many moments.</span>
            </motion.h2>
          </div>

          {/* RIGHT */}

          <motion.div
            {...fadeInView(0.18)}
            className="lg:col-span-4 lg:col-start-9 lg:border-l lg:border-white/10 lg:pl-8 lg:pt-2"
          >
            <p className="max-w-md text-sm leading-6 text-white/55 sm:text-base sm:leading-7">
              From the first arrival to the final song, TSE Live moves through
              fashion, creativity, community and celebration — all in one day.
            </p>

            <p className="mt-5 max-w-md text-sm leading-6 text-white/35">
              Come early. Stay late. There is more to the day than the
              schedule suggests.
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            DAY FLOW
        ====================================================== */}

        <motion.div
          {...fadeInView(0.15)}
          className="mt-16 grid grid-cols-4 border-y border-white/10 sm:mt-20 sm:grid-cols-7"
        >
          {["THRIFT", "STYLE", "COMPETE", "SPLASH", "CREATE", "CELEBRATE", "MUSIC"].map(
            (item, index, arr) => (
              <div
                key={item}
                className={`
                  flex
                  min-h-16
                  items-center
                  justify-center
                  gap-2
                  px-2
                  text-center
                  ${
                    index < arr.length - 1
                      ? "border-r border-white/10"
                      : ""
                  }
                `}
              >
                <span className="font-display text-[9px] text-tse-accent/60">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-[8px] font-semibold uppercase tracking-[0.15em] text-white/40 sm:text-[9px]">
                  {item}
                </span>
              </div>
            ),
          )}
        </motion.div>

        {/* =====================================================
            SCHEDULE
        ====================================================== */}

        <div className="mt-16 sm:mt-20">
          {schedule.map((item, index) => (
            <motion.div
              key={item.number}
              {...fadeInView(0.05 + index * 0.05)}
              className={`
                group
                grid
                gap-6
                border-t
                border-white/10
                py-7
                transition-colors
                duration-300
                hover:bg-white/[0.025]
                sm:grid-cols-[80px_1fr_auto]
                sm:items-center
                sm:gap-10
                ${item.featured ? "bg-white/[0.03]" : ""}
              `}
            >
              {/* NUMBER */}

              <span className="font-display text-4xl leading-none tracking-[-0.04em] text-white/70 sm:text-5xl">
                {item.number}
              </span>

              {/* CONTENT */}

              <div>
                <div className="mb-2 flex items-center gap-3">
                  <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-tse-accent/70">
                    {item.type}
                  </span>

                  <span className="h-px w-5 bg-white/15" />
                </div>

                <h3 className="font-display text-3xl uppercase leading-none tracking-[-0.025em] sm:text-4xl">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-xl text-xs leading-5 text-white/40 sm:text-sm sm:leading-6">
                  {item.description}
                </p>
              </div>

              {/* FEATURED TAG */}

              <span
                className={`hidden self-start pt-1 text-[8px] font-bold uppercase tracking-[0.2em] sm:block ${
                  item.featured ? "text-tse-accent" : "text-white/0"
                }`}
              >
                {item.featured ? "Highlight" : ""}
              </span>
            </motion.div>
          ))}

          <div className="border-t border-white/10" />
        </div>

        {/* =====================================================
            FOOTER
        ====================================================== */}

        <motion.div
          {...fadeInView(0.25)}
          className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30">
              30.10.26 / One day only
            </span>

            <p className="mt-3 max-w-md text-xs leading-5 text-white/35">
              No fixed clock — the flow moves naturally from afternoon into
              evening, at its own pace.
            </p>
          </div>

          <Link
            href="/schedule"
            className="
              group
              flex
              w-fit
              items-center
              gap-3
              border-b
              border-white/30
              pb-2
              text-[10px]
              font-bold
              uppercase
              tracking-[0.18em]
              transition-colors
              duration-300
              hover:border-tse-accent
              hover:text-tse-accent
            "
          >
            View full schedule
                      </Link>
        </motion.div>
      </div>
    </section>
  );
}