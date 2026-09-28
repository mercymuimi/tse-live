"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const experiences = [
  {
    number: "01",
    title: "Thrift",
    tag: "Shop",
    description:
      "Curated thrift finds, independent fashion and TSE pieces — discover something, try it on and take it home.",
    image: "/images/thrift1.JPG",
    className: "lg:col-span-7",
  },
  {
    number: "02",
    title: "Style",
    tag: "The Style Off",
    description:
      "Come with your personal style and make it count. Get styled, build your look and step into the TSE fashion competition.",
    image: "/images/experience4.JPG",
    className: "lg:col-span-5 lg:mt-16",
  },
  {
    number: "03",
    title: "Create",
    tag: "Content",
    description:
      "Photoshoot setups, creative corners and content collaborations made for creators, brands and anyone who wants the shot.",
    image: "/images/shoot6.JPG",
    className: "lg:col-span-5",
  },
  {
    number: "04",
    title: "Unwind",
    tag: "Poolside",
    description:
      "Step away from the racks. Swim, eat, listen to live music, meet people and enjoy the day beyond the shopping.",
    image: "/images/lifestyle1.jpg",
    className: "lg:col-span-7 lg:mt-16",
  },
];

export default function ExperiencePreview() {
  const shouldReduceMotion = useReducedMotion();

  const fadeInView = (delay = 0) => ({
    initial: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 35,
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

        <div className="mb-20 grid gap-10 lg:mb-28 lg:grid-cols-12 lg:items-start lg:gap-8">
          {/* LEFT */}

          <div className="lg:col-span-7">
            <motion.div
              {...fadeInView(0)}
              className="mb-7 flex items-center gap-4"
            >
              <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/40">
                02 / The Experience
              </span>

              <span className="h-px w-14 bg-white/20" />
            </motion.div>

            <h2 className="font-display text-[clamp(4.5rem,9vw,9rem)] uppercase leading-[0.78] tracking-[-0.06em]">
              <motion.span
                {...fadeInView(0.1)}
                className="block"
              >
                Shop.
              </motion.span>

              <motion.span
                {...fadeInView(0.18)}
                className="ml-[7%] block"
              >
                Create.
              </motion.span>

              <motion.span
                {...fadeInView(0.26)}
                className="block font-accent font-normal lowercase tracking-[-0.03em] text-white/80"
              >
                live a little.
              </motion.span>
            </h2>
          </div>

          {/* RIGHT */}

          <motion.div
            {...fadeInView(0.35)}
            className="lg:col-span-4 lg:col-start-9 lg:border-l lg:border-white/10 lg:pl-8 lg:pt-2"
          >
            <p className="max-w-sm text-sm leading-6 text-white/55 sm:text-base sm:leading-7">
              TSE Live is not just a place to shop. It is a full day built
              around fashion, creativity, movement and community.
            </p>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/35">
              Come for the racks. Stay for the styling, the competition, the
              content, the pool, the music and the people.
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

                {/* DARK OVERLAY */}

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
            SUPPORTING MOMENTS
        ====================================================== */}

        <motion.div
          {...fadeInView(0.3)}
          className="mt-20 border-y border-white/10 py-8 sm:mt-28 sm:py-10"
        >
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-3">
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-tse-accent">
                And then...
              </span>
            </div>

            <div className="lg:col-span-9">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                {[
                  "The Style Off",
                  "Live Music",
                  "Poolside",
                  "Food & Drinks",
                  "Gifts & Awards",
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
              community. Now we are bringing the world of TSE offline —
              together, for one day.
            </p>
          </div>

          <Link
            href="/experience"
            className="group flex w-fit shrink-0 items-center gap-3 border-b border-white/30 pb-2 text-[10px] font-bold uppercase tracking-[0.18em] transition-colors duration-300 hover:border-tse-accent"
          >
            <span className="transition-colors duration-300 group-hover:text-tse-accent">
              Explore the full experience
            </span>

            <ArrowUpRight
              size={14}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}