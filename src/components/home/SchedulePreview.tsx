"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const schedule = [
  {
    time: "03:00",
    period: "PM",
    title: "Doors Open",
    description:
      "Arrive, check in, meet the community and ease into the world of TSE Live.",
    type: "Arrive",
  },
  {
    time: "03:30",
    period: "PM",
    title: "The Thrift Edit",
    description:
      "Explore curated thrift, vintage pieces, independent brands and the day's vendor edit.",
    type: "Discover",
  },
  {
    time: "05:00",
    period: "PM",
    title: "The Style Off",
    description:
      "Bring your look, make your statement and step into the TSE fashion competition.",
    type: "Style",
  },
  {
    time: "06:00",
    period: "PM",
    title: "The Content Floor",
    description:
      "Shoot, create and collaborate across curated content spaces built for creators and brands.",
    type: "Create",
  },
  {
    time: "07:00",
    period: "PM",
    title: "Poolside",
    description:
      "Take a break from the racks. Swim, eat, connect and settle into the slower side of the day.",
    type: "Unwind",
  },
  {
    time: "08:00",
    period: "PM",
    title: "One Year of TSE",
    description:
      "Cake cutting, awards and a celebration of one year of building TSE and its community.",
    type: "Celebrate",
  },
  {
    time: "08:30",
    period: "PM",
    title: "Live Music",
    description:
      "Live performances, DJ sets and the energy that carries TSE Live into the night.",
    type: "Music",
  },
];

export default function SchedulePreview() {
  return (
    <section className="bg-[#090909] text-[#F4F0E8]">
      <div className="mx-auto max-w-360 px-6 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-20 lg:px-10 lg:pb-24 lg:pt-24">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="grid gap-8 border-t border-white/10 pt-5 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4">
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40">
                04 / The Day
              </span>

              <span className="h-px w-10 bg-white/20" />
            </div>

            <h2 className="mt-14 font-display text-[clamp(4rem,9vw,9rem)] uppercase leading-[0.8] tracking-[-0.055em]">
              One day.
              <br />
              <span className="ml-[8%]">Many moments.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 lg:border-l lg:border-white/10 lg:pl-8 lg:pt-2">
            <p className="max-w-md text-sm leading-6 text-white/50 sm:text-base sm:leading-7">
              From the first arrival to the final song, TSE Live moves through
              fashion, creativity, community and celebration — all in one day.
            </p>
          </div>
        </div>

        {/* =====================================================
            SCHEDULE
        ====================================================== */}

        <div className="mt-20">
          {schedule.map((item, index) => (
            <motion.div
              key={`${item.time}-${item.title}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              className="
                group
                grid
                gap-6
                border-t
                border-white/10
                py-7
                transition-colors
                duration-300
                hover:bg-white/[0.025]
                sm:grid-cols-[100px_1fr_auto]
                sm:items-center
                sm:gap-10
              "
            >
              {/* TIME */}

              <div className="flex items-baseline gap-1">
                <span className="font-display text-4xl leading-none tracking-[-0.03em] sm:text-5xl">
                  {item.time}
                </span>

                <span className="text-[8px] font-semibold uppercase tracking-[0.15em] text-white/35">
                  {item.period}
                </span>
              </div>

              {/* CONTENT */}

              <div>
                <div className="mb-2 flex items-center gap-3">
                  <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white/35">
                    {item.type}
                  </span>

                  <span className="h-px w-5 bg-white/15" />
                </div>

                <h3 className="font-display text-3xl uppercase leading-none tracking-tight sm:text-4xl">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-lg text-xs leading-5 text-white/40 sm:text-sm sm:leading-6">
                  {item.description}
                </p>
              </div>

              {/* NUMBER */}

              <span className="hidden text-[9px] font-medium tracking-[0.18em] text-white/20 sm:block">
                {String(index + 1).padStart(2, "0")}
              </span>
            </motion.div>
          ))}

          <div className="border-t border-white/10" />
        </div>

        {/* =====================================================
            FOOTER
        ====================================================== */}

        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-5 text-white/40">
            Timings are subject to change as the final programme comes
            together.
          </p>

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

            <ArrowUpRight
              size={14}
              strokeWidth={1.5}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </Link>
        </div>
      </div>
    </section>
  );
}