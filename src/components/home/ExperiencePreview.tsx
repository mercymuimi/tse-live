"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    number: "01",
    title: "Fashion",
    tag: "Shop",
    description:
      "Discover independent designers, thrift curators and fashion brands bringing fresh pieces to the scene.",
    image: "/images/hero.jpg",
    className: "lg:col-span-7",
  },
  {
    number: "02",
    title: "Styling",
    tag: "Style",
    description:
      "See fashion differently through live styling, curated looks and creative expression.",
    image: "/images/image1.jpg",
    className: "lg:col-span-5 lg:mt-32",
  },
  {
    number: "03",
    title: "Community",
    tag: "Connect",
    description:
      "Meet creatives, entrepreneurs, designers and people building the culture around fashion.",
    image: "/images/image2.jpg",
    className: "lg:col-span-5",
  },
  {
    number: "04",
    title: "Culture",
    tag: "Experience",
    description:
      "Music, conversations, food, activations and unexpected moments designed to keep you engaged.",
    image: "/images/image3.jpg",
    className: "lg:col-span-7 lg:mt-32",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#090909] text-[#F4F0E8]"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-28 sm:px-8 sm:py-36 lg:px-10 lg:py-44">

        {/* HEADER */}
        <div className="mb-24 grid gap-12 lg:grid-cols-12 lg:items-end">

          <div className="lg:col-span-8">

            <div className="mb-7 flex items-center gap-4">
              <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/40">
                02 / The Experience
              </span>

              <span className="h-px w-14 bg-white/20" />
            </div>

            <h2 className="font-display text-[clamp(4.5rem,9vw,9rem)] uppercase leading-[0.78] tracking-[-0.06em]">
              More than
              <br />
              <span className="ml-[7%]">an event.</span>
            </h2>
          </div>

          <div className="lg:col-span-3 lg:col-start-10">
            <p className="max-w-sm text-sm leading-6 text-white/50 sm:text-base sm:leading-7">
              Come for the fashion.
              <br />
              Stay for the culture.
              <br />
              <br />
              TSE Live brings together the people, brands and experiences
              shaping the next generation of style.
            </p>
          </div>

        </div>

        {/* EXPERIENCE GRID */}
        <div className="grid gap-x-6 gap-y-20 lg:grid-cols-12 lg:gap-y-28">

          {experiences.map((experience) => (
            <motion.article
              key={experience.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group ${experience.className}`}
            >

              {/* IMAGE */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#111]">

                <img
                  src={experience.image}
                  alt={experience.title}
                  className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/25 transition-colors duration-500 group-hover:bg-black/10" />

                {/* TOP NUMBER */}
                <div className="absolute left-5 top-5">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/70">
                    {experience.number}
                  </span>
                </div>

                {/* LARGE EDITORIAL TITLE */}
                <div className="absolute inset-x-5 bottom-16">
                  <h3 className="font-display text-[clamp(4rem,8vw,8rem)] uppercase leading-[0.78] tracking-[-0.06em] text-white">
                    {experience.title}
                  </h3>
                </div>

                {/* TAG */}
                <div className="absolute bottom-5 left-5">
                  <span className="border border-white/30 bg-black/20 px-3 py-2 text-[8px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                    {experience.tag}
                  </span>
                </div>

                {/* ARROW */}
                <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center border border-white/30 bg-black/10 text-white backdrop-blur-sm transition-all duration-300 group-hover:border-[#F4F0E8] group-hover:bg-[#F4F0E8] group-hover:text-black">
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
              </div>

              {/* DESCRIPTION */}
              <div className="mt-5 flex items-start justify-between gap-8 border-t border-white/10 pt-5">

                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/30">
                  TSE / {experience.number}
                </span>

                <p className="max-w-[280px] text-xs leading-5 text-white/45 sm:text-sm sm:leading-6">
                  {experience.description}
                </p>

              </div>

            </motion.article>
          ))}

        </div>

        {/* BOTTOM CTA */}
        <div className="mt-28 flex flex-col justify-between gap-8 border-t border-white/10 pt-7 sm:flex-row sm:items-center">

          <p className="text-xs uppercase tracking-[0.12em] text-white/35">
            One day.
            <br />
            Multiple worlds.
          </p>

          <Link
            href="/experience"
            className="group flex w-fit items-center gap-4 border-b border-white/30 pb-3 text-[10px] font-bold uppercase tracking-[0.18em] transition-colors duration-300 hover:border-white"
          >
            Explore the full experience

            <ArrowUpRight
              size={15}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>

        </div>

      </div>
    </section>
  );
}