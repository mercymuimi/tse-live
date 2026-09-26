"use client";

import Link from "next/link";
import { ArrowDownRight, Clock, MapPin } from "lucide-react";

type ScheduleItem = {
  time: string;
  period: string;
  title: string;
  description: string;
  location: string;
  category: string;
  featured?: boolean;
};

const schedule: ScheduleItem[] = [
  {
    time: "3:00",
    period: "PM",
    title: "Doors Open",
    description:
      "Step into TSE Live. Check in, explore the space and get familiar with the day's energy.",
    location: "Main Entrance",
    category: "Arrival",
  },
  {
    time: "3:30",
    period: "PM",
    title: "The Thrift Market",
    description:
      "Discover curated fashion, vintage finds, independent vendors and pieces worth taking home.",
    location: "Market Floor",
    category: "Shop",
    featured: true,
  },
  {
    time: "5:00",
    period: "PM",
    title: "Style Sessions",
    description:
      "Get personal styling direction, experiment with your wardrobe and discover new ways to wear what you already own.",
    location: "Style Corner",
    category: "Style",
  },
  {
    time: "5:30",
    period: "PM",
    title: "Pool & Chill",
    description:
      "Slow down, cool off and connect. Pool access is included with VIP and VVIP tickets.",
    location: "Pool Area",
    category: "Splash",
  },
  {
    time: "6:30",
    period: "PM",
    title: "Content Hour",
    description:
      "The space becomes your studio. Capture looks, create content and make the event part of your feed.",
    location: "Content Spaces",
    category: "Create",
    featured: true,
  },
  {
    time: "7:30",
    period: "PM",
    title: "The Celebration",
    description:
      "Cake cutting, the best dressed reveal, games and giveaways — marking 1 year of TSE.",
    location: "Main Stage",
    category: "Celebrate",
    featured: true,
  },
  {
    time: "8:30",
    period: "PM",
    title: "Live Music",
    description:
      "As the night sets in, the energy shifts. Live performances set the tone for the evening.",
    location: "Main Stage",
    category: "Music",
  },
  {
    time: "10:00",
    period: "PM",
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
  "SPLASH",
  "CREATE",
  "CELEBRATE",
  "MUSIC",
];

export default function SchedulePage() {
  return (
    <main className="min-h-screen bg-[#f4f1ea] text-black">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-black px-6 pb-20 pt-32 text-white md:px-12 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-white/35 transition hover:text-white"
          >
            ← Back home
          </Link>

          <div className="grid gap-12 lg:grid-cols-[1fr_280px] lg:items-end">
            <div>
              <p className="text-[9px] uppercase tracking-[0.35em] text-white/35">
                TSE LIVE // THE DAY
              </p>

              <h1 className="mt-6 max-w-5xl font-display text-[clamp(5rem,13vw,11rem)] uppercase leading-[0.75] tracking-[-0.065em]">
                The
                <br />
                Schedule.
              </h1>
            </div>

            <div className="border-l border-white/15 pl-6">
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/35">
                October 30
              </p>

              <p className="mt-4 text-sm leading-6 text-white/55">
                One day. Fashion, music, creativity, community and
                everything in between.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative number */}
        <div className="pointer-events-none absolute -bottom-12 right-4 select-none font-display text-[18rem] leading-none tracking-[-0.08em] text-white/2.5 md:right-12">
          01
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="border-b border-black/10 px-6 py-12 md:px-12 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[180px_1fr]">
          <p className="text-[9px] uppercase tracking-[0.3em] text-black/35">
            What happens
          </p>

          <div className="max-w-3xl">
            <p className="text-2xl leading-[1.15] tracking-[-0.035em] md:text-4xl">
              TSE Live isn't just an event you attend. It's a full-day
              experience built around fashion, culture, creativity and
              connection.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE STRIP
      ===================================================== */}

      <section className="overflow-hidden border-b border-black/10 bg-[#e8e4da]">
        <div className="flex min-w-max">
          {experiences.map((item, index) => (
            <div
              key={item}
              className="flex items-center border-r border-black/10 px-8 py-6 md:px-12"
            >
              <span className="mr-5 text-[8px] text-black/30">
                0{index + 1}
              </span>

              <span className="font-display text-2xl tracking-[-0.03em] md:text-3xl">
                {item}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          SCHEDULE
      ===================================================== */}

      <section className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          {/* SECTION HEADER */}

          <div className="mb-14 flex flex-col justify-between gap-6 border-b border-black/10 pb-8 md:flex-row md:items-end">
            <div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-black/35">
                Timeline
              </p>

              <h2 className="mt-3 font-display text-5xl uppercase leading-none tracking-tighter md:text-7xl">
                The Day
              </h2>
            </div>

            <p className="max-w-xs text-[10px] uppercase leading-5 tracking-[0.12em] text-black/40">
              Times may shift slightly throughout the day. Follow TSE Live
              updates for the final running order.
            </p>
          </div>

          {/* TIMELINE */}

          <div className="divide-y divide-black/10">
            {schedule.map((item, index) => (
              <article
                key={`${item.time}-${item.title}`}
                className={`group grid gap-8 py-10 md:grid-cols-[130px_1fr_180px] md:gap-12 md:py-14 ${
                  item.featured ? "bg-black/2.5" : ""
                }`}
              >
                {/* TIME */}

                <div className="flex items-start gap-3">
                  <span className="font-display text-4xl leading-none tracking-[-0.04em] md:text-5xl">
                    {item.time}
                  </span>

                  <span className="pt-1 text-[8px] uppercase tracking-[0.2em] text-black/35">
                    {item.period}
                  </span>
                </div>

                {/* CONTENT */}

                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="text-[8px] uppercase tracking-[0.25em] text-black/35">
                      {item.category}
                    </span>

                    {item.featured && (
                      <span className="border border-black/15 px-2 py-1 text-[7px] uppercase tracking-[0.18em]">
                        Highlight
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-4xl uppercase leading-none tracking-[-0.045em] transition-transform duration-300 group-hover:translate-x-1 md:text-6xl">
                    {item.title}
                  </h3>

                  <p className="mt-5 max-w-xl text-sm leading-6 text-black/45">
                    {item.description}
                  </p>
                </div>

                {/* LOCATION */}

                <div className="flex items-start gap-3 md:justify-end">
                  <MapPin
                    size={14}
                    strokeWidth={1.5}
                    className="mt-0.5 shrink-0 text-black/35"
                  />

                  <div>
                    <p className="text-[8px] uppercase tracking-[0.2em] text-black/30">
                      Location
                    </p>

                    <p className="mt-2 text-[10px] uppercase tracking-[0.12em]">
                      {item.location}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          NOTE
      ===================================================== */}

      <section className="bg-black px-6 py-16 text-white md:px-12 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1fr_280px] md:items-end">
          <div>
            <p className="text-[9px] uppercase tracking-[0.3em] text-white/30">
              Come for the fashion.
            </p>

            <h2 className="mt-5 max-w-4xl font-display text-[clamp(4rem,9vw,8rem)] uppercase leading-[0.78] tracking-[-0.06em]">
              Stay for
              <br />
              the energy.
            </h2>
          </div>

          <div>
            <p className="text-sm leading-6 text-white/45">
              The schedule is only the beginning. Leave room for unexpected
              finds, new people, spontaneous content and moments that aren't
              on the timetable.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl border-t border-black/10 pt-10">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-black/35">
                Ready?
              </p>

              <h2 className="mt-4 font-display text-5xl uppercase leading-none tracking-tighter md:text-7xl">
                Be there.
              </h2>
            </div>

            <Link
              href="/tickets"
              className="group inline-flex items-center justify-between bg-black px-6 py-5 text-[9px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-black/80 md:min-w-60"
            >
              <span>Get your ticket</span>

              <ArrowDownRight
                size={15}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="bg-black px-6 py-12 text-white md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-display text-3xl tracking-[-0.04em]">
              TSE / LIVE
            </p>

            <p className="mt-2 text-[8px] uppercase tracking-[0.25em] text-white/30">
              The Styled Edit Live
            </p>
          </div>

          <div className="flex items-center gap-2 text-[8px] uppercase tracking-[0.2em] text-white/30">
            <Clock size={12} strokeWidth={1.5} />
            <span>Nairobi, Kenya</span>
          </div>
        </div>
      </footer>
    </main>
  );
}