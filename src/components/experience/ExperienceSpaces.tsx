"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const spaces = [
  {
    number: "01",
    title: "The Market",
    eyebrow: "SHOP + DISCOVER",
    description:
      "The heart of TSE Live. Browse curated thrift, independent fashion and unexpected finds from brands and creatives bringing their pieces into the room.",
    image: "/images/thrift2.JPG",
    detail: "THRIFT · INDEPENDENT BRANDS · DISCOVERY",
  },
  {
    number: "02",
    title: "The Studio",
    eyebrow: "CREATE + CONNECT",
    description:
      "A space built for the camera. Capture your fit, create with friends, meet other creatives and turn the day into content worth keeping.",
    image: "/images/content1.jpg",
    detail: "CONTENT · FIT CHECKS · COLLABORATIONS",
  },
  {
    number: "03",
    title: "The Pool",
    eyebrow: "SWIM + UNWIND",
    description:
      "Step away from the racks and into the water. Poolside energy, food, drinks and music give the day a completely different rhythm.",
    image: "/images/pool1.jpg",
    detail: "SWIMMING · FOOD · MUSIC",
    tag: "VIP + VVIP",
  },
  {
    number: "04",
    title: "The Moment",
    eyebrow: "CELEBRATE + REMEMBER",
    description:
      "When the day comes together, we celebrate one year of The Styled Edit — with cake, awards, gifts and the people who made the journey possible.",
    image: "/images/Celebration1.JPG",
    detail: "ONE YEAR · AWARDS · TSE COMMUNITY",
  },
];

export default function ExperienceSpaces() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-tse-black px-6 pt-20 pb-24 text-tse-paper md:px-12 md:pt-24 md:pb-32 lg:px-16 lg:pt-28 lg:pb-40">
      <div className="mx-auto max-w-360">

   {/* HEADER */}
<div className="border-b border-white/10 pb-12 md:pb-16">
  <div className="grid gap-10 md:grid-cols-12 md:items-center md:gap-8">
    {/* LABEL */}
    <div className="md:col-span-3">
      <p className="tse-eyebrow text-white/35">
        Inside TSE Live
      </p>
    </div>

    {/* HEADING */}
    <div className="md:col-span-6 md:col-start-1">
      <h2 className="mt-6 max-w-[10ch] font-display text-[clamp(4rem,7.5vw,8rem)] uppercase leading-[0.78] tracking-[-0.06em] md:mt-10">
        Enter
        <br />
        The
        <br />
        <span className="text-white/30">World.</span>
      </h2>
    </div>

    {/* INTRO */}
    <div className="md:col-span-4 md:col-start-9 md:pb-2">
      <p className="max-w-sm text-sm leading-7 text-white/45 md:text-[15px]">
        TSE Live isn&apos;t one room and it isn&apos;t one activity. It&apos;s
        a collection of spaces that let you experience The Styled Edit from
        different angles.
      </p>
    </div>
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
              className="group border-b border-white/10 py-12 first:pt-0 md:py-20"
            >
              <div className="grid gap-10 md:grid-cols-12 md:items-center md:gap-10">
                {/* NUMBER */}
                <div className="md:col-span-1 md:self-start">
                  <span className="font-mono text-[10px] tracking-[0.25em] text-white/25">
                    {space.number}
                  </span>
                </div>

                {/* IMAGE */}
                <div className="order-2 md:order-1 md:col-span-6">
                  <div className="relative aspect-4/3 overflow-hidden bg-white/5">
                    <Image
                      src={space.image}
                      alt={space.title}
                      fill
                      className="object-cover grayscale transition-all duration-700 ease-out group-hover:scale-[1.035] group-hover:grayscale-0"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />

                    <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:bg-black/5" />

                    {space.tag && (
                      <div className="absolute bottom-4 left-4">
                        <span className="border border-white/25 bg-black/60 px-3 py-1.5 text-[8px] uppercase tracking-[0.25em] text-white backdrop-blur-sm">
                          {space.tag}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* COPY */}
                <div className="order-1 md:order-2 md:col-span-4 md:col-start-9">
                  <p className="tse-label text-tse-accent">
                    {space.eyebrow}
                  </p>

                  <h3 className="mt-4 font-display text-[clamp(3.8rem,6vw,6.5rem)] uppercase leading-[0.8] tracking-[-0.06em] transition-transform duration-500 ease-out group-hover:translate-x-1">
                    {space.title}
                  </h3>

                  <p className="mt-7 max-w-sm text-sm leading-7 text-white/45 md:text-[15px]">
                    {space.description}
                  </p>

                  <div className="mt-7 flex items-center gap-3">
                    <span className="h-px w-8 bg-white/20 transition-all duration-500 group-hover:w-12 group-hover:bg-tse-accent" />

                    <p className="text-[9px] uppercase tracking-[0.24em] text-white/25">
                      {space.detail}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* MARKET STATEMENT */}
        <div className="grid gap-8 border-t border-white/10 pt-10 md:grid-cols-12 md:pt-14">
          <div className="md:col-span-4">
            <p className="tse-label text-white/30">
              THE TSE MARKET
            </p>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <p className="font-display text-[clamp(2.5rem,4vw,4rem)] uppercase leading-[0.9] tracking-[-0.04em] text-white/80">
              Come looking.
              <br />
              Leave with
              <br />
              <span className="text-white/35">something.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}