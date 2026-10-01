"use client";

import { motion, useReducedMotion } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "Shop",
    label: "THE MARKET",
    description:
      "Dig through curated thrift, independent fashion and unexpected finds. Discover something you didn't come looking for.",
    detail: "Thrift Market",
  },
  {
    number: "02",
    title: "Style",
    label: "THE EDIT",
    description:
      "Build the look. Get inspired. Step into the style competition and let your personal style do the talking.",
    detail: "Styling + Competition",
  },
  {
    number: "03",
    title: "Create",
    label: "THE STUDIO",
    description:
      "Find your angle. Capture the moment. Explore photoshoot spaces and creative setups made for content and collaboration.",
    detail: "Content + Photoshoots",
  },
  {
    number: "04",
    title: "Play",
    label: "THE POOLSIDE",
    description:
      "Take a break from the racks. Swim, eat, listen to live music and enjoy the day without rushing anywhere.",
    detail: "Poolside + Live Music",
  },
  {
    number: "05",
    title: "Celebrate",
    label: "THE MOMENT",
    description:
      "One year of The Styled Edit. Cake, awards, gifts and a room full of people who helped make the journey possible.",
    detail: "Launch + Awards",
  },
];

export default function ExperiencePillars() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="bg-tse-black px-6 pt-24 pb-16 text-tse-paper md:px-12 md:pt-32 md:pb-20 lg:px-16 lg:pt-40 lg:pb-24"
    >
      <div className="mx-auto max-w-360">
        {/* INTRO */}
        <div className="grid gap-10 border-b border-white/10 pb-16 lg:grid-cols-12 lg:pb-20">
          <div className="lg:col-span-4">
            <p className="tse-eyebrow text-white/35">
              The experience
            </p>
          </div>

          <div className="lg:col-span-8">
            <h2 className="max-w-220 font-display text-[clamp(4rem,8vw,8rem)] uppercase leading-[0.8] tracking-[-0.06em]">
              Come for
              <br />
              the thrift.
              <br />
              <span className="text-white/45">Stay for</span>
              <br />
              the experience.
            </h2>

            <p className="mt-10 max-w-xl text-sm leading-7 text-white/50 md:text-base">
              TSE Live is built around more than shopping. Spend the day
              moving between fashion, creativity, music, water and community
              — with every part of the experience designed to feel like TSE,
              offline.
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
                      y: 24,
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
                duration: shouldReduceMotion ? 0 : 0.65,
                delay: shouldReduceMotion ? 0 : index * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative py-10 md:py-14 lg:py-16"
            >
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                {/* NUMBER */}
                <div className="lg:col-span-1">
                  <span className="text-[10px] tracking-[0.25em] text-white/30">
                    {pillar.number}
                  </span>
                </div>

                {/* TITLE */}
                <div className="lg:col-span-4">
                  <p className="tse-label text-tse-accent">
                    {pillar.label}
                  </p>

                  <h3 className="mt-3 font-display text-[clamp(4rem,7vw,7rem)] uppercase leading-[0.8] tracking-[-0.055em] transition-transform duration-500 group-hover:translate-x-2">
                    {pillar.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <div className="lg:col-span-5 lg:col-start-7">
                  <p className="max-w-lg text-sm leading-7 text-white/50 md:text-base">
                    {pillar.description}
                  </p>

                  <p className="mt-6 text-[9px] uppercase tracking-[0.25em] text-white/30">
                    {pillar.detail}
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-px left-0 h-px w-0 bg-white/25 transition-all duration-500 group-hover:w-full" />
            </motion.article>
          ))}
        </div>

        {/* CLOSING STATEMENT */}
        <div className="grid gap-6 border-t border-white/10 pt-8 md:grid-cols-2 md:items-end md:pt-10">
          <p className="tse-label text-white/30">
            One day. Five ways to experience TSE.
          </p>

          <p className="max-w-md text-sm leading-6 text-white/40 md:justify-self-end">
            Shop something new to you. Find your people. Make something.
            Take a swim. Stay for the music. Leave with a story.
          </p>
        </div>
      </div>
    </section>
  );
}