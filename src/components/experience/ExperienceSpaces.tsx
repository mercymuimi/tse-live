"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const spaces = [
  {
    number: "01",
    title: "The Market",
    eyebrow: "SHOP",
    description:
      "Curated thrift, independent vendors and unexpected fashion finds — all in one place.",
    image: "/images/thrift2.JPG",
  },
  {
    number: "02",
    title: "The Edit",
    eyebrow: "STYLE",
    description:
      "A space to experiment, get inspired, build your look and make personal style the main event.",
    image: "/images/shoot2.JPG",
  },
  {
    number: "03",
    title: "The Studio",
    eyebrow: "CREATE",
    description:
      "Content-ready corners, photography moments and creative setups made to be captured.",
    image: "/images/content1.jpg",
  },
  {
    number: "04",
    title: "The Pool",
    eyebrow: "PLAY",
    description:
      "Slow down, cool off and enjoy the poolside side of TSE Live with music, food and good company.",
    image: "/images/pool1.jpg",
    tag: "VIP & VVIP ACCESS",
  },
];

export default function ExperienceSpaces() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-tse-black px-6 pt-16 pb-24 text-tse-paper md:px-12 md:pt-20 md:pb-32 lg:px-16 lg:pt-24 lg:pb-40">
      <div className="mx-auto max-w-360">
        {/* HEADER */}
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-12 md:gap-8 md:pb-16">
          {/* HEADING */}
          <div className="md:col-span-7">
            <p className="tse-eyebrow text-white/35">
              The spaces
            </p>

            <h2 className="mt-6 max-w-[11ch] font-display text-[clamp(4rem,7.5vw,7.5rem)] uppercase leading-[0.82] tracking-[-0.06em]">
              Find
              <br />
              Your
              <br />
              <span className="text-white/30">Place.</span>
            </h2>
          </div>

          {/* INTRO COPY */}
          <div className="md:col-span-4 md:col-start-9 md:self-start md:pt-16 lg:pt-20">
            <p className="max-w-sm text-sm leading-7 text-white/45 md:text-[15px]">
              Move through TSE Live at your own pace. Shop, style, create,
              play — every space offers a different way into the experience.
            </p>
          </div>
        </div>

        {/* SPACES */}
        <div className="mt-14 md:mt-20">
          {spaces.map((space, index) => (
            <motion.article
              key={space.number}
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 30,
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
                duration: shouldReduceMotion ? 0 : 0.7,
                delay: shouldReduceMotion ? 0 : index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group border-b border-white/10 py-10 first:pt-0 md:py-16"
            >
              <div className="grid gap-8 md:grid-cols-12 md:items-center md:gap-10">
                {/* NUMBER */}
                <div className="md:col-span-1">
                  <span className="text-[10px] tracking-[0.25em] text-white/25">
                    {space.number}
                  </span>
                </div>

                {/* IMAGE */}
                <div className="order-2 md:order-1 md:col-span-6">
                  <div className="relative aspect-4/3 overflow-hidden">
                    <Image
                      src={space.image}
                      alt={space.title}
                      fill
                      className="object-cover grayscale transition-all duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />

                    <div className="absolute inset-0 bg-black/15 transition-opacity duration-500 group-hover:bg-transparent" />

                    {space.tag && (
                      <div className="absolute bottom-4 left-4">
                        <span className="border border-white/25 bg-black/50 px-3 py-1.5 text-[8px] uppercase tracking-[0.25em] text-white backdrop-blur-sm">
                          {space.tag}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* COPY */}
                <div className="order-1 md:order-2 md:col-span-4 md:col-start-9">
                  <div className="flex items-center justify-between md:block">
                    <p className="tse-label text-white/35">
                      {space.eyebrow}
                    </p>

                  </div>

                  <h3 className="mt-4 font-display text-[clamp(3.5rem,6vw,6rem)] uppercase leading-[0.82] tracking-[-0.055em]">
                    {space.title}
                  </h3>

                  <p className="mt-6 max-w-sm text-sm leading-7 text-white/45">
                    {space.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* FOOTER STATEMENT */}
        <div className="grid gap-6 pt-10 md:grid-cols-2 md:items-end md:pt-14">
          <p className="tse-label text-white/30">
            One venue. Different ways to experience TSE.
          </p>

          <p className="max-w-md text-sm leading-6 text-white/40 md:justify-self-end">
            Your day doesn&apos;t have to follow a script. Find the spaces
            that feel like you — then stay a little longer.
          </p>
        </div>
      </div>
    </section>
  );
}