"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const experiences = [
  {
    number: "01",
    title: "Thrift",
    tag: "The Market",
    description:
      "Curated thrift finds, independent fashion and TSE pieces — discover something, try it on and take it home.",
    image: "/images/thrift2.JPG",
    className: "lg:col-span-7",
  },
  {
    number: "02",
    title: "Style",
    tag: "The Style Off",
    description:
      "Build your look, bring your personal style and step into the TSE fashion competition.",
    image: "/images/shoot1.JPG",
    className: "lg:col-span-5 lg:mt-20",
  },
  {
    number: "03",
    title: "Create",
    tag: "The Studio",
    description:
      "Photoshoot setups, creative corners and content collaborations made for creators, brands and anyone who wants the shot.",
    image: "/images/content2.jpg",
    className: "lg:col-span-5",
  },
  {
    number: "04",
    title: "Play",
    tag: "Poolside",
    description:
      "Swim, eat, listen to live music, meet people and enjoy the day beyond the racks.",
    image: "/images/pool1.jpg",
    className: "lg:col-span-7 lg:mt-20",
  },
];

export default function ExperiencePreview() {
  const shouldReduceMotion = useReducedMotion();

  const fadeInView = (delay = 0) => ({
    initial: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 32,
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
      duration: 0.75,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-tse-black text-tse-paper"
    >
      <div className="mx-auto max-w-360 px-6 pb-20 pt-20 sm:px-8 sm:pb-24 sm:pt-24 lg:px-10 lg:pb-32 lg:pt-28">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mb-20 grid gap-10 lg:mb-28 lg:grid-cols-12 lg:items-center lg:gap-8">
          {/* LEFT */}

          <div className="lg:col-span-7">
            <motion.div
              {...fadeInView(0)}
              className="mb-7 flex items-center gap-4"
            >
              <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/40">
                The Experience
              </span>

              <span className="h-px w-14 bg-white/20" />
            </motion.div>

            <h2 className="font-display text-[clamp(4.5rem,9vw,9rem)] uppercase leading-[0.78] tracking-[-0.06em]">
              <motion.span
                {...fadeInView(0.08)}
                className="block"
              >
                Shop.
              </motion.span>

              <motion.span
                {...fadeInView(0.16)}
                className="ml-[7%] block"
              >
                Style.
              </motion.span>

              <motion.span
                {...fadeInView(0.24)}
                className="block font-accent font-normal lowercase tracking-[-0.03em] text-white/80"
              >
                then live.
              </motion.span>
            </h2>
          </div>

          {/* RIGHT */}

          <motion.div
            {...fadeInView(0.3)}
            className="lg:col-span-4 lg:col-start-9 lg:border-l lg:border-white/10 lg:pl-8"
          >
            <p className="max-w-sm text-sm leading-6 text-white/55 sm:text-base sm:leading-7">
              TSE Live is a full day built around fashion, creativity,
              movement and community.
            </p>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/35">
              Shop the market. Find your look. Create something. Play,
              connect and celebrate one year of TSE.
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            EXPERIENCE GRID
        ====================================================== */}

        <div className="grid gap-x-6 gap-y-20 lg:grid-cols-12 lg:gap-y-32">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.number}
              {...fadeInView(0.08 + index * 0.08)}
              className={`group ${experience.className}`}
            >
              {/* IMAGE */}

              <div className="relative aspect-4/3 overflow-hidden bg-tse-ink">
                <Image
                  src={experience.image}
                  alt={`${experience.title} experience at The Styled Edit Live`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="
                    object-cover
                    grayscale
                    transition-all
                    duration-700
                    ease-out
                    group-hover:scale-105
                    group-hover:grayscale-0
                  "
                />

                {/* IMAGE OVERLAY */}

                <div className="absolute inset-0 bg-black/25 transition-colors duration-500 group-hover:bg-black/10" />

                {/* NUMBER */}

                <div className="absolute left-5 top-5 z-10">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/70">
                    {experience.number}
                  </span>
                </div>

                {/* TITLE */}

                <div className="absolute inset-x-5 bottom-14 z-10">
                  <h3 className="font-display text-[clamp(4rem,8vw,8rem)] uppercase leading-[0.78] tracking-[-0.06em] text-white">
                    {experience.title}
                  </h3>
                </div>

                {/* TAG */}

                <div className="absolute bottom-5 left-5 z-10">
                  <span className="border border-white/30 bg-black/20 px-3 py-2 text-[8px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                    {experience.tag}
                  </span>
                </div>
              </div>

              {/* DESCRIPTION */}

              <div className="mt-5 flex items-start justify-between gap-8 border-t border-white/10 pt-5">
                <span className="shrink-0 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/30">
                  TSE / {experience.number}
                </span>

                <p className="max-w-70 text-xs leading-5 text-white/45 sm:text-sm sm:leading-6">
                  {experience.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* =====================================================
            EXPERIENCE THREAD
        ====================================================== */}

        <motion.div
          {...fadeInView(0.3)}
          className="mt-20 border-y border-white/10 py-8 sm:mt-28 sm:py-10"
        >
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-3">
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-tse-accent">
                The day, in motion
              </span>
            </div>

            <div className="lg:col-span-9">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                {[
                  "Thrift Market",
                  "Style Sessions",
                  "Style Off",
                  "Content",
                  "Poolside",
                  "Live Music",
                  "Awards",
                  "One Year of TSE",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <span className="font-display text-[10px] text-tse-accent/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/45">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            ANNIVERSARY MOMENT
        ====================================================== */}

        <motion.div
          {...fadeInView(0.4)}
          className="mt-20 flex flex-col gap-8 border-t border-white/10 pt-10 sm:mt-24 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40">
              One year in
            </span>

            <p className="mt-3 font-display text-3xl uppercase leading-[0.9] tracking-[-0.02em] sm:text-4xl">
              One year of TSE.
            </p>

            <p className="mt-4 max-w-lg text-sm leading-6 text-white/45">
              One year of finding pieces, building looks and building
              community. Now the world of TSE comes offline — together,
              for one day.
            </p>
          </div>

          <Link
            href="/experience"
            className="group flex w-fit shrink-0 items-center gap-3 border-b border-white/30 pb-2 text-[10px] font-bold uppercase tracking-[0.18em] transition-colors duration-300 hover:border-tse-accent"
          >
            <span className="transition-colors duration-300 group-hover:text-tse-accent">
              Explore the full experience
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}