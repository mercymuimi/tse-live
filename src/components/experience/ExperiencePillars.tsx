"use client";

import { motion, useReducedMotion } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "Shop",
    label: "THE MARKET",
    description:
      "Start with the reason TSE exists. Browse curated thrift, independent fashion and unexpected finds — then leave with something that feels like it was waiting for you.",
    detail: "THRIFT · FASHION · DISCOVERY",
  },
  {
    number: "02",
    title: "Style",
    label: "THE EDIT",
    description:
      "Try something different. Build a look. Get styled. Then step into the competition and let your personal style speak for itself.",
    detail: "STYLING · FIT CHECKS · COMPETITION",
  },
  {
    number: "03",
    title: "Create",
    label: "THE STUDIO",
    description:
      "Bring the fit to life. Capture content, shoot your look and connect with other creatives through spaces designed for photographs, videos and collaboration.",
    detail: "CONTENT · PHOTOS · COLLABORATION",
  },
  {
    number: "04",
    title: "Play",
    label: "THE POOLSIDE",
    description:
      "When you're done shopping, slow down. Swim, eat, drink, listen to music and spend time with people who came for the same energy.",
    detail: "SWIMMING · FOOD · MUSIC",
  },
  {
    number: "05",
    title: "Celebrate",
    label: "ONE YEAR OF TSE",
    description:
      "End the day by celebrating the people behind the journey. Cake cutting, awards, gifts and a moment to mark one year of The Styled Edit.",
    detail: "LAUNCH · AWARDS · GIFTS",
  },
];

export default function ExperiencePillars() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-tse-black px-6 py-24 text-tse-paper md:px-12 md:py-32 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-360">
        {/* INTRO */}
        <div className="grid gap-10 border-b border-white/10 pb-16 lg:grid-cols-12 lg:pb-20">
          <div className="lg:col-span-3">
            <p className="tse-eyebrow text-white/35">
              01 — The worlds of TSE
            </p>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <h2 className="max-w-230 font-display text-[clamp(3.8rem,7.5vw,8rem)] uppercase leading-[0.8] tracking-[-0.06em]">
              Five ways
              <br />
              to spend
              <br />
              <span className="text-white/40">the day.</span>
            </h2>

            <p className="mt-10 max-w-xl text-sm leading-7 text-white/50 md:text-base">
              TSE Live takes everything we love about The Styled Edit and
              brings it into one physical space — fashion, creativity,
              community, play and celebration.
            </p>
          </div>
        </div>

        {/* PILLARS */}
        <div className="divide-y divide-white/10">
          {pillars.map((pillar, index) => (
            <motion.article
              key={pillar.number}
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 28,
                    }
              }
              whileInView={
                shouldReduceMotion
                  ? undefined
                  : {
                      opacity: 1,
                      y: 0,
                    }
              }
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.7,
                delay: shouldReduceMotion ? 0 : index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative py-12 md:py-16 lg:py-20"
            >
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                {/* NUMBER */}
                <div className="lg:col-span-1">
                  <span className="font-mono text-[10px] tracking-[0.25em] text-white/25">
                    {pillar.number}
                  </span>
                </div>

                {/* TITLE */}
                <div className="lg:col-span-5">
                  <p className="tse-label text-tse-accent">
                    {pillar.label}
                  </p>

                  <h3 className="mt-4 font-display text-[clamp(4.2rem,7vw,7.5rem)] uppercase leading-[0.78] tracking-[-0.06em] transition-transform duration-500 ease-out group-hover:translate-x-2">
                    {pillar.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <div className="lg:col-span-5 lg:col-start-8">
                  <p className="max-w-lg text-sm leading-7 text-white/55 md:text-[15px]">
                    {pillar.description}
                  </p>

                  <div className="mt-7 flex items-center gap-3">
                    <span className="h-px w-8 bg-tse-accent/60" />

                    <p className="text-[9px] uppercase tracking-[0.24em] text-white/30">
                      {pillar.detail}
                    </p>
                  </div>
                </div>
              </div>

              {/* HOVER LINE */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-tse-accent/60 transition-all duration-700 ease-out group-hover:w-full" />
            </motion.article>
          ))}
        </div>

        {/* CLOSING */}
        <div className="grid gap-8 border-t border-white/10 pt-8 md:grid-cols-12 md:pt-10">
          <div className="md:col-span-4">
            <p className="tse-label text-white/30">
              SHOP · STYLE · CREATE · PLAY · CELEBRATE
            </p>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <p className="text-sm leading-7 text-white/40 md:text-[15px]">
              There is no single way to experience TSE Live. Come to thrift.
              Come to compete. Come to create. Come to swim. Come to celebrate.
              Stay as long as the day takes you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}