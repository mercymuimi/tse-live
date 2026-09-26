"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    number: "01",
    title: "Thrift",
    tag: "Shop",
    description:
      "Curated thrift finds and independent fashion, sold live at TSE prices — the racks you know from Instagram, in person.",
    image: "/images/thrift1.JPG",
    className: "lg:col-span-7",
  },
  {
    number: "02",
    title: "Style",
    tag: "Get Styled",
    description:
      "Live styling sessions and curated looks — come as you are, leave photographed and put together.",
    image: "/images/experience4.JPG",
    className: "lg:col-span-5 lg:mt-12",
  },
  {
    number: "03",
    title: "Content",
    tag: "Create",
    description:
      "Photoshoot setups and content moments built for the shots you'll actually want to post.",
    image: "/images/shoot6.JPG",
    className: "lg:col-span-5",
  },
  {
    number: "04",
    title: "Lifestyle",
    tag: "Unwind",
    description:
      "Poolside hangouts, food, drinks and music — the parts of the day that aren't about shopping at all.",
    image: "/images/lifestyle1.jpg",
    className: "lg:col-span-7 lg:mt-12",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#090909] text-[#F4F0E8]"
    >
<div className="mx-auto max-w-360 px-6 pt-16 pb-16 sm:px-8 sm:pt-20 sm:pb-20 lg:px-10 lg:pt-24 lg:pb-24">       {/* HEADER */}
<div className="mb-24 grid gap-8 lg:grid-cols-12 lg:items-start">

  <div className="lg:col-span-7">

    <div className="mb-7 flex items-center gap-4">
      <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/40">
        02 / The Experience
      </span>

      <span className="h-px w-14 bg-white/20" />
    </div>

    <h2 className="font-display text-[clamp(4.5rem,9vw,9rem)] uppercase leading-[0.78] tracking-[-0.06em]">
      More than
      <br />
      <span className="ml-[7%]">a market.</span>
    </h2>
  </div>

  <div className="lg:col-span-4 lg:col-start-9 lg:border-l lg:border-white/10 lg:pl-8 lg:pt-2">
    <p className="max-w-sm text-sm leading-6 text-white/50 sm:text-base sm:leading-7">
      Come for the thrift.
      <br />
      Stay for the day.
      <br />
      <br />
      One year of TSE, marked with a day built around thrift,
      styling, content and everything around it.
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
              <div className="relative aspect-4/3 overflow-hidden bg-[#111]">

                <img
                  src={experience.image}
                  alt={experience.title}
                  className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                />

                <div className="absolute inset-0 bg-black/25 transition-colors duration-500 group-hover:bg-black/10" />

                <div className="absolute left-5 top-5">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/70">
                    {experience.number}
                  </span>
                </div>

                <div className="absolute inset-x-5 bottom-16">
                  <h3 className="font-display text-[clamp(4rem,8vw,8rem)] uppercase leading-[0.78] tracking-[-0.06em] text-white">
                    {experience.title}
                  </h3>
                </div>

                <div className="absolute bottom-5 left-5">
                  <span className="border border-white/30 bg-black/20 px-3 py-2 text-[8px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                    {experience.tag}
                  </span>
                </div>

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

                <p className="max-w-70 text-xs leading-5 text-white/45 sm:text-sm sm:leading-6">
                  {experience.description}
                </p>

              </div>

            </motion.article>
          ))}

        </div>

       {/* CLOSING BAR */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
  className="mt-20 flex flex-col gap-8 border-t border-white/10 pt-10 sm:flex-row sm:items-end sm:justify-between"
>
  <div>
    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40">
      Also on the day
    </span>
    <p className="mt-3 font-display text-3xl uppercase leading-[0.9] tracking-[-0.02em] sm:text-4xl">
      The TSE Launch.
    </p>
    <p className="mt-3 max-w-md text-sm leading-6 text-white/50">
      One year of thrift and styling becomes a lifestyle brand —
      announced live, on the day.
    </p>
  </div>

  <Link
    href="/experience"
    className="group flex w-fit shrink-0 items-center gap-3 border-b border-white/30 pb-2 text-[10px] font-bold uppercase tracking-[0.18em] transition-colors duration-300 hover:border-white"
  >
    Explore the full experience
  </Link>
</motion.div>

      </div>
    </section>
  );
}