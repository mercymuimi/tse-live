"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const schedule = [
  {
    time: "10:00",
    period: "AM",
    title: "Doors Open",
    description:
      "Arrive, check in, meet the community and ease into the day.",
    type: "Arrival",
  },
  {
    time: "11:00",
    period: "AM",
    title: "The Thrift Edit",
    description:
      "Explore curated thrift, vintage pieces and independent fashion.",
    type: "Market",
  },
  {
    time: "01:00",
    period: "PM",
    title: "Style Sessions",
    description:
      "Live styling, fashion conversations and creative looks.",
    type: "Fashion",
  },
  {
    time: "03:00",
    period: "PM",
    title: "Poolside",
    description:
      "Take a break, cool down, connect and enjoy the atmosphere.",
    type: "Lifestyle",
  },
  {
    time: "05:00",
    period: "PM",
    title: "Live Sessions",
    description:
      "Music, performances and the energy of the TSE community.",
    type: "Music",
  },
  {
    time: "07:00",
    period: "PM",
    title: "The Afterglow",
    description:
      "One final moment to connect, celebrate and leave inspired.",
    type: "Community",
  },
];

export default function SchedulePreview() {
  return (
    <section className="bg-[#090909] text-[#F4F0E8]">
      <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">

        {/* HEADER */}
        <div className="grid gap-12 border-t border-white/10 pt-5 lg:grid-cols-12 lg:items-end">

          <div className="lg:col-span-8">
            <div className="flex items-center gap-4">
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40">
                04 / The Day
              </span>

              <span className="h-px w-10 bg-white/20" />
            </div>

            <h2
              className="
                mt-14
                font-display
                text-[clamp(4rem,9vw,9rem)]
                uppercase
                leading-[0.8]
                tracking-[-0.055em]
              "
            >
              One day.
              <br />
              <span className="ml-[8%]">Many moments.</span>
            </h2>
          </div>

          <div className="lg:col-span-3 lg:col-start-10">
            <p className="text-sm leading-6 text-white/50 sm:text-base sm:leading-7">
              From the first arrival to the final song, every part of
              TSE Live is designed to give you something to discover.
            </p>
          </div>
        </div>

        {/* TIMELINE */}
        <div className="mt-20">

          {schedule.map((item, index) => (
            <motion.div
              key={item.time}
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

                <h3 className="font-display text-3xl uppercase leading-none tracking-[-0.025em] sm:text-4xl">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-lg text-xs leading-5 text-white/40 sm:text-sm sm:leading-6">
                  {item.description}
                </p>
              </div>

              {/* NUMBER */}
              <span
                className="
                  hidden
                  text-[9px]
                  font-medium
                  tracking-[0.18em]
                  text-white/20
                  sm:block
                "
              >
                0{index + 1}
              </span>
            </motion.div>
          ))}

          <div className="border-t border-white/10" />
        </div>

        {/* FOOTER CTA */}
        <div className="mt-10 flex flex-col justify-between gap-8 sm:flex-row sm:items-center">

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/30">
              Timing is subject to change
            </p>

            <p className="mt-2 text-xs text-white/40">
              Follow the live schedule for updates closer to the event.
            </p>
          </div>

          <Link
            href="/schedule"
            className="
              group
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
              hover:border-white
            "
          >
            View full schedule

            <ArrowUpRight
              size={15}
              strokeWidth={1.5}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-1
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
