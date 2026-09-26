"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const schedule = [
  {
    time: "03:00",
    period: "PM",
    title: "Doors Open",
    description: "Arrive, check in, meet the community and ease into the day.",
    type: "Arrival",
  },
  {
    time: "03:30",
    period: "PM",
    title: "The Thrift Edit",
    description: "Explore curated thrift, vintage pieces and independent fashion.",
    type: "Market",
  },
  {
    time: "05:00",
    period: "PM",
    title: "Style & Splash",
    description: "Live styling, fashion conversations and pool access for VIP & VVIP.",
    type: "Fashion",
  },
  {
    time: "07:00",
    period: "PM",
    title: "The Celebration",
    description: "Cake cutting, best dressed and games — marking 1 year of TSE.",
    type: "Community",
  },
  {
    time: "08:30",
    period: "PM",
    title: "The Afterglow",
    description: "Live music, DJ sets and the final stretch — till late.",
    type: "Night",
  },
];

export default function SchedulePreview() {
  return (
    <section className="bg-[#090909] text-[#F4F0E8]">
      <div className="mx-auto max-w-360 px-6 pt-16 pb-16 sm:px-8 sm:pt-20 sm:pb-20 lg:px-10 lg:pt-24 lg:pb-24">

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
            <p className="text-sm leading-6 text-white/50 sm:text-base sm:leading-7">
              From the first arrival to the final song, every part of
              TSE Live is designed to give you something to discover.
            </p>
          </div>
        </div>

        <div className="mt-20">
          {schedule.map((item, index) => (
            <motion.div
              key={item.time}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group grid gap-6 border-t border-white/10 py-7 transition-colors duration-300 hover:bg-white/2.5 sm:grid-cols-[100px_1fr_auto] sm:items-center sm:gap-10"
            >
              <div className="flex items-baseline gap-1">
                <span className="font-display text-4xl leading-none tracking-[-0.03em] sm:text-5xl">
                  {item.time}
                </span>
                <span className="text-[8px] font-semibold uppercase tracking-[0.15em] text-white/35">
                  {item.period}
                </span>
              </div>

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

              <span className="hidden text-[9px] font-medium tracking-[0.18em] text-white/20 sm:block">
                0{index + 1}
              </span>
            </motion.div>
          ))}
          <div className="border-t border-white/10" />
        </div>

        <div className="mt-10 flex items-center justify-between">
          <p className="text-xs text-white/40">
            Timing is subject to change.
          </p>

          <Link
            href="/schedule"
            className="group flex w-fit items-center gap-3 border-b border-white/30 pb-2 text-[10px] font-bold uppercase tracking-[0.18em] transition-colors duration-300 hover:border-white"
          >
            View full schedule
            <ArrowUpRight
              size={14}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}