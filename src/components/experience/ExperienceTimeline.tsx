"use client";

import { motion, useReducedMotion } from "framer-motion";

const moments = [
  {
    time: "01",
    title: "Arrive",
    description:
      "Walk in, check in and step into the world of TSE Live.",
  },
  {
    time: "02",
    title: "Explore",
    description:
      "Browse the thrift market, discover vendors and find something unexpected.",
  },
  {
    time: "03",
    title: "Style",
    description:
      "Play with your look, meet stylists and make the edit your own.",
  },
  {
    time: "04",
    title: "Compete",
    description:
      "Strut your look on the floor. TSE's fashion competition, live — this is where Best Styled and Best Dressed get decided.",
  },
  {
    time: "05",
    title: "Splash",
    description:
      "Cool off at the pool — included with VIP and VVIP tickets.",
  },
  {
    time: "06",
    title: "Create",
    description:
      "Find your angle. Capture the fit. Create something worth posting.",
  },
  {
    time: "07",
    title: "Celebrate",
    description:
      "Cake cutting and awards — Best Styled, Best Dressed and Client of the Year — with TSE merch and vouchers up for grabs, marking 1 year of TSE.",
  },
  {
    time: "08",
    title: "Stay",
    description:
      "Live music, DJ sets, food and drinks till late.",
  },
];

export default function ExperienceTimeline() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-tse-black px-6 pt-16 pb-24 text-tse-paper md:px-12 md:pt-20 md:pb-32 lg:px-16 lg:pt-24 lg:pb-40">
      <div className="mx-auto max-w-360">
        {/* HEADER */}
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-12 md:gap-8 md:pb-16">
          {/* HEADING */}
          <div className="md:col-span-7">
            <p className="tse-eyebrow text-white/35">
              The flow
            </p>

            <h2 className="mt-6 max-w-[10ch] font-display text-[clamp(4rem,7.5vw,7.5rem)] uppercase leading-[0.82] tracking-[-0.06em]">
              Your
              <br />
              Day
              <br />
              <span className="text-white/30">At TSE.</span>
            </h2>
          </div>

          {/* INTRO COPY */}
          <div className="md:col-span-4 md:col-start-9 md:self-start md:pt-16 lg:pt-20">
            <p className="max-w-sm text-sm leading-7 text-white/45 md:text-[15px]">
              No fixed script. Move through the day at your own pace — shop,
              style, compete, create, celebrate and stay for the night.
            </p>
          </div>
        </div>

        {/* TIMELINE */}
        <div className="mt-12 md:mt-16">
          {moments.map((moment, index) => (
            <motion.article
              key={moment.time}
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 20,
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
                amount: 0.15,
              }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.6,
                delay: shouldReduceMotion ? 0 : index * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative border-b border-white/10 py-7 md:py-9"
            >
              <div className="grid gap-6 md:grid-cols-12 md:items-center md:gap-8">
                {/* NUMBER */}
                <div className="md:col-span-1">
                  <div className="flex items-center gap-3 md:block">
                    <span className="text-[9px] uppercase tracking-[0.28em] text-white/30 transition-colors duration-300 group-hover:text-white/60">
                      {moment.time}
                    </span>

                    <span className="h-px w-7 bg-white/15 transition-all duration-300 group-hover:w-10 group-hover:bg-white/40 md:mt-5 md:block md:w-5" />
                  </div>
                </div>

                {/* TITLE */}
                <div className="md:col-span-5">
                  <h3 className="font-display text-[clamp(3rem,5vw,5.5rem)] uppercase leading-[0.82] tracking-[-0.055em] text-white transition-transform duration-500 ease-out group-hover:translate-x-1">
                    {moment.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <div className="md:col-span-5 md:col-start-8">
                  <p className="max-w-lg text-sm leading-7 text-white/40 transition-colors duration-300 group-hover:text-white/60 md:text-[15px]">
                    {moment.description}
                  </p>
                </div>
              </div>

              {/* HOVER LINE */}
              <div className="absolute -bottom-px left-0 h-px w-0 bg-white/40 transition-all duration-500 ease-out group-hover:w-full" />
            </motion.article>
          ))}
        </div>

        {/* CLOSING STATEMENT */}
        <div className="grid gap-6 pt-8 md:grid-cols-12 md:items-end md:pt-10">
          <p className="tse-label text-white/30 md:col-span-5">
            One day. One year. One shared experience.
          </p>

          <p className="max-w-md text-sm leading-6 text-white/40 md:col-span-5 md:col-start-8 md:justify-self-end">
            Come for the clothes. Stay for the people. Leave with something
            worth remembering.
          </p>
        </div>
      </div>
    </section>
  );
}
