"use client";

import Link from "next/link";
import { ArrowDownRight, Clock, MapPin } from "lucide-react";

type ScheduleItem = {
  number: string;
  title: string;
  description: string;
  location: string;
  category: string;
  featured?: boolean;
};

const schedule: ScheduleItem[] = [
  {
    number: "01",
    title: "Doors Open",
    description:
      "Step into TSE Live. Check in, explore the space and get familiar with the day's energy.",
    location: "Main Entrance",
    category: "Arrival",
  },
  {
    number: "02",
    title: "The Thrift Market",
    description:
      "Discover curated fashion, vintage finds, independent vendors and pieces worth taking home.",
    location: "Market Floor",
    category: "Shop",
    featured: true,
  },
  {
    number: "03",
    title: "Style Sessions",
    description:
      "Get personal styling direction, experiment with your wardrobe and discover new ways to wear what you already own.",
    location: "Style Corner",
    category: "Style",
  },
  {
    number: "04",
    title: "The Competition",
    description:
      "Strut your look on the floor. TSE's fashion competition, live — this is where Best Styled and Best Dressed get decided.",
    location: "Main Stage",
    category: "Compete",
    featured: true,
  },
  {
    number: "05",
    title: "Pool & Chill",
    description:
      "Slow down, cool off and connect. Pool access is included with VIP and VVIP tickets.",
    location: "Pool Area",
    category: "Splash",
  },
  {
    number: "06",
    title: "Content Hour",
    description:
      "The space becomes your studio. Capture looks, create content and make the event part of your feed.",
    location: "Content Spaces",
    category: "Create",
    featured: true,
  },
  {
    number: "07",
    title: "The Celebration",
    description:
      "Cake cutting and awards — Best Styled, Best Dressed and Client of the Year — with TSE merch and vouchers up for grabs, marking 1 year of TSE.",
    location: "Main Stage",
    category: "Celebrate",
    featured: true,
  },
  {
    number: "08",
    title: "Live Music",
    description:
      "As the night sets in, the energy shifts. Live performances set the tone for the evening.",
    location: "Main Stage",
    category: "Music",
  },
  {
    number: "09",
    title: "TSE After Dark",
    description:
      "DJ sets, fashion, drinks, conversations and the kind of night you don't want to end early.",
    location: "Main Stage",
    category: "Night",
    featured: true,
  },
];

const experiences = [
  "THRIFT",
  "STYLE",
  "COMPETE",
  "SPLASH",
  "CREATE",
  "CELEBRATE",
  "MUSIC",
];

export default function SchedulePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-tse-black px-6 pb-20 pt-28 text-tse-paper md:px-12 md:pb-24 md:pt-36 lg:px-16">
        <div className="mx-auto max-w-360">
          <div className="grid gap-12 lg:grid-cols-[1fr_300px] lg:items-center">
            {/* HERO TITLE */}

            <div>
              <p className="tse-eyebrow text-white/35">
                TSE LIVE // THE FLOW
              </p>

              <h1 className="mt-6 max-w-[10ch] font-display text-[clamp(5rem,12vw,11rem)] uppercase leading-[0.76] tracking-[-0.065em]">
                The
                <br />
                Schedule.
              </h1>
            </div>

            {/* EVENT META */}

            <div className="border-l border-white/10 pl-6">
              <p className="font-display text-3xl uppercase leading-none tracking-[-0.04em]">
                30.10.26
              </p>

              <p className="mt-3 text-[9px] uppercase tracking-[0.3em] text-white/35">
                One year of TSE
              </p>

              <p className="mt-6 max-w-xs text-sm leading-6 text-white/50">
                Fashion, music, creativity, community and everything that
                happens between arrival and after dark.
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM META */}

        <div className="mx-auto mt-16 flex max-w-360 items-center justify-between border-t border-white/10 pt-5">
          <span className="text-[8px] uppercase tracking-[0.3em] text-white/30">
            Nine Moments, One Day
          </span>

          <span className="text-[8px] uppercase tracking-[0.3em] text-white/30">
            Barizi Resort
          </span>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="border-b border-white/10 px-6 py-14 md:px-12 md:py-20 lg:px-16">
        <div className="mx-auto grid max-w-360 gap-8 md:grid-cols-12 md:items-start">
          <p className="tse-eyebrow text-white/35 md:col-span-3">
            What happens
          </p>

          <div className="md:col-span-7 md:col-start-6">
            <p className="max-w-3xl text-[clamp(1.5rem,3vw,2.7rem)] leading-[1.08] tracking-[-0.04em] text-white">
              TSE Live is more than a place to shop. Move through fashion,
              creativity, music, water and community — all in one afternoon
              that turns into a night.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE STRIP
      ===================================================== */}

      <section className="overflow-hidden border-b border-white/10 bg-[#111111]">
        <div className="mx-auto flex max-w-360 min-w-max">
          {experiences.map((item, index) => (
            <div
              key={item}
              className="flex items-center border-r border-white/10 px-7 py-5 md:px-10 md:py-6"
            >
              <span className="mr-4 text-[8px] tracking-[0.2em] text-white/25">
                0{index + 1}
              </span>

              <span className="font-display text-2xl uppercase tracking-[-0.03em] text-white md:text-3xl">
                {item}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          SCHEDULE
      ===================================================== */}

      <section className="px-6 py-16 md:px-12 md:py-24 lg:px-16">
        <div className="mx-auto max-w-360">
          {/* SECTION HEADER */}

          <div className="grid gap-8 border-b border-white/10 pb-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <p className="tse-eyebrow text-white/35">
                The running order
              </p>

              <h2 className="mt-4 font-display text-[clamp(4rem,7vw,7rem)] uppercase leading-[0.8] tracking-[-0.06em] text-white">
                Your
                <br />
                Day.
              </h2>
            </div>

            <div className="md:col-span-4 md:col-start-9">
              <p className="max-w-sm text-sm leading-6 text-white/45">
                No fixed clock — the flow is designed to move naturally from
                afternoon into evening, at its own pace.
              </p>
            </div>
          </div>

          {/* TIMELINE */}

          <div className="divide-y divide-white/10">
            {schedule.map((item) => (
              <article
                key={item.number}
                className={`group relative py-8 transition-colors duration-300 md:py-10 ${
                  item.featured ? "bg-white/[0.03]" : ""
                }`}
              >
                <div className="grid gap-7 md:grid-cols-12 md:items-center md:gap-8">
                  {/* NUMBER */}

                  <div className="md:col-span-2">
                    <span className="font-display text-4xl leading-none tracking-tighter text-white md:text-5xl">
                      {item.number}
                    </span>
                  </div>

                  {/* CONTENT */}

                  <div className="md:col-span-7">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="text-[8px] uppercase tracking-[0.25em] text-white/35">
                        {item.category}
                      </span>

                      {item.featured && (
                        <span className="h-px w-6 bg-white/20 transition-all duration-300 group-hover:w-10 group-hover:bg-white/60" />
                      )}
                    </div>

                    <h3 className="font-display text-[clamp(2.7rem,4.5vw,5rem)] uppercase leading-[0.82] tracking-[-0.055em] text-white transition-transform duration-500 ease-out group-hover:translate-x-1">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-xl text-sm leading-6 text-white/45 transition-colors duration-300 group-hover:text-white/75">
                      {item.description}
                    </p>
                  </div>

                  {/* LOCATION */}

                  <div className="flex items-start gap-3 md:col-span-3 md:justify-self-end">
                    <MapPin
                      size={13}
                      strokeWidth={1.4}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-white/25"
                    />

                    <div>
                      <p className="text-[8px] uppercase tracking-[0.2em] text-white/25">
                        Location
                      </p>

                      <p className="mt-1.5 text-[9px] uppercase tracking-[0.12em] text-white">
                        {item.location}
                      </p>
                    </div>
                  </div>
                </div>

                {/* HOVER LINE */}

                <div className="absolute -bottom-px left-0 h-px w-0 bg-white/50 transition-all duration-500 ease-out group-hover:w-full" />
              </article>
            ))}
          </div>

          {/* TIMELINE NOTE */}

          <div className="grid gap-6 pt-8 md:grid-cols-2 md:items-end">
            <p className="tse-label text-white/30">
              The schedule is a guide, not a script.
            </p>

            <p className="max-w-sm text-sm leading-6 text-white/40 md:justify-self-end">
              Leave room for the unexpected — a new find, a new connection,
              an extra photo or a reason to stay a little longer.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CLOSING STATEMENT
      ===================================================== */}

      <section className="bg-tse-black px-6 py-20 text-tse-paper md:px-12 md:py-28 lg:px-16">
        <div className="mx-auto grid max-w-360 gap-12 md:grid-cols-12 md:items-center">
          <div className="md:col-span-8">
            <p className="tse-eyebrow text-white/30">
              Come for the fashion.
            </p>

            <h2 className="mt-5 max-w-4xl font-display text-[clamp(4rem,8vw,8rem)] uppercase leading-[0.78] tracking-[-0.06em]">
              Stay for
              <br />
              the energy.
            </h2>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <p className="max-w-sm text-sm leading-7 text-white/45">
              The schedule is only the beginning. Find something unexpected,
              meet someone new, make something worth posting and stay for the
              night.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="px-6 py-16 md:px-12 md:py-24 lg:px-16">
        <div className="mx-auto max-w-360 border-t border-white/10 pt-10">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              <p className="tse-eyebrow text-white/35">
                30.10.26 // Barizi Resort
              </p>

              <h2 className="mt-4 font-display text-[clamp(4rem,7vw,7rem)] uppercase leading-[0.8] tracking-[-0.06em] text-white">
                Be
                <br />
                There.
              </h2>
            </div>

            <Link
              href="/tickets"
              className="group flex w-full items-center justify-between bg-white px-6 py-5 text-[9px] font-bold uppercase tracking-[0.22em] text-black transition-colors duration-300 hover:bg-white/80 md:w-64"
            >
              <span>Get your ticket</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="bg-tse-black px-6 py-10 text-tse-paper md:px-12 lg:px-16">
        <div className="mx-auto flex max-w-360 flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-display text-3xl uppercase tracking-[-0.04em]">
              TSE / LIVE
            </p>

            <p className="mt-2 text-[8px] uppercase tracking-[0.25em] text-white/30">
              The Styled Edit Live
            </p>
          </div>

          <div className="flex items-center gap-2 text-[8px] uppercase tracking-[0.2em] text-white/30">
            <Clock size={12} strokeWidth={1.5} aria-hidden="true" />
            <span>Nairobi, Kenya</span>
          </div>
        </div>
      </footer>
    </main>
  );
}