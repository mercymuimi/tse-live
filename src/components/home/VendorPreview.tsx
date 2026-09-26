"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    number: "01",
    name: "Thrift & Vintage",
    tag: "Curated Racks",
    image: "/images/thrift1.JPG",
  },
  {
    number: "02",
    name: "Bags",
    tag: "Everyday Carry",
    image: "/images/bags1.jpg",
  },
  {
    number: "03",
    name: "accessories",
    tag: "Everyday Carry",
    image: "/images/accessories2.JPG",
  },
];

export default function VendorPreview() {
  return (
    <section className="bg-[#090909] text-[#F4F0E8]">
     <div className="mx-auto max-w-360 px-6 pt-12 pb-16 sm:px-8 sm:pt-16 sm:pb-20 lg:px-10 lg:pt-20 lg:pb-24">        {/* HEADER */}
        <div className="grid gap-8 border-t border-white/10 pt-5 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4">
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/45">
                03 / The Market
              </span>

              <span className="h-px w-10 bg-white/20" />
            </div>

            <h2
              className="
                mt-14
                font-display
                text-[clamp(4rem,9vw,9rem)]
                uppercase
                leading-[0.8]
                tracking-[-0.055em]
              "
            >
              Meet the
              <br />
              <span className="ml-[8%]">culture.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 lg:border-l lg:border-white/10 lg:pl-8 lg:pt-2">
            <p className="text-sm leading-6 text-white/55 sm:text-base sm:leading-7">
              20+ independent vendors across thrift, accessories, styling
              and design — shaping the scene, one rack at a time.
            </p>
          </div>
        </div>

        {/* CATEGORY GRID */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <motion.article
              key={category.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.06,
              }}
              className="group"
            >
              {/* IMAGE */}
              <div className="relative aspect-3/4 overflow-hidden bg-[#111]">
                <img
                  src={category.image}
                  alt={category.name}
                  className="
                    h-full
                    w-full
                    object-cover
                    grayscale
                    transition-all
                    duration-700
                    group-hover:scale-[1.04]
                    group-hover:grayscale-0
                  "
                />

                <div className="absolute inset-0 bg-black/25 transition-colors duration-500 group-hover:bg-black/10" />

                <span
                  className="
                    absolute
                    left-5
                    top-5
                    text-[9px]
                    font-semibold
                    tracking-[0.18em]
                    text-white
                    drop-shadow-sm
                  "
                >
                  {category.number}
                </span>

                <span
                  className="
                    absolute
                    bottom-5
                    left-5
                    border
                    border-white/40
                    bg-black/20
                    px-3
                    py-2
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-white
                    backdrop-blur-sm
                  "
                >
                  {category.tag}
                </span>

                <div
                  className="
                    absolute
                    bottom-5
                    right-5
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    bg-[#F4F0E8]
                    text-black
                    opacity-0
                    transition-all
                    duration-300
                    group-hover:opacity-100
                  "
                >
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
              </div>

              {/* INFO */}
              <div className="mt-5 flex items-start justify-between border-t border-white/10 pt-4">
                <h3 className="font-display text-2xl uppercase leading-none tracking-[-0.02em] sm:text-3xl">
                  {category.name}
                </h3>

                <span className="shrink-0 pl-4 text-[9px] uppercase tracking-[0.15em] text-white/35">
                  TSE Live
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CLOSING BAR */}
        <div className="mt-20 flex flex-col gap-8 border-t border-white/10 pt-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40">
              Building the next wave
            </p>

            <h3 className="mt-3 max-w-xl font-display text-4xl uppercase leading-[0.9] tracking-[-0.03em] sm:text-5xl">
              Your brand belongs
              <br />
              in the room.
            </h3>
          </div>

          <Link
            href="/vendors"
            className="
              group
              flex
              w-fit
              shrink-0
              items-center
              gap-4
              border-b
              border-white/30
              pb-3
              text-[10px]
              font-bold
              uppercase
              tracking-[0.17em]
              transition-colors
              duration-300
              hover:border-[#edc87d]
            "
          >
            Explore all vendors

          
                    </Link>
        </div>
      </div>
    </section>
  );
}