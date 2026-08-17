"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const vendors = [
  {
    number: "01",
    name: "Vendor One",
    category: "Vintage / Thrift",
    image: "/images/hero.jpg",
  },
  {
    number: "02",
    name: "Vendor Two",
    category: "Independent Fashion",
    image: "/images/image1.jpg",
  },
  {
    number: "03",
    name: "Vendor Three",
    category: "Accessories / Lifestyle",
    image: "/images/image3.jpg",
  },
];

export default function Vendors() {
  return (
    <section className="bg-[#090909] text-[#F4F0E8]">
      <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">

        {/* HEADER */}
        <div className="grid gap-10 border-t border-black/15 pt-5 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4">
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/45">
                03 / The Market
              </span>

              <span className="h-px w-10 bg-black/20" />
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

          <div className="lg:col-span-3 lg:col-start-10">
            <p className="text-sm leading-6 text-black/55 sm:text-base sm:leading-7">
              Shop from independent fashion labels, thrift curators,
              designers and creative businesses shaping the scene.
            </p>
          </div>
        </div>

        {/* VENDOR GRID */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {vendors.map((vendor, index) => (
            <motion.article
              key={vendor.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group"
            >
              {/* IMAGE */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#D9D4CA]">
                <img
                  src={vendor.image}
                  alt={vendor.name}
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

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/5 transition-colors duration-500 group-hover:bg-black/0" />

                {/* NUMBER */}
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
                  {vendor.number}
                </span>

                {/* CATEGORY */}
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
                  {vendor.category}
                </span>

                {/* ARROW */}
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
              <div className="mt-5 flex items-start justify-between border-t border-black/15 pt-4">
                <h3 className="font-display text-3xl uppercase leading-none tracking-[-0.025em]">
                  {vendor.name}
                </h3>

                <span className="text-[9px] uppercase tracking-[0.15em] text-black/35">
                  TSE Live
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-20 border-t border-black/15 pt-6">
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/40">
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
                items-center
                gap-4
                border-b
                border-black
                pb-3
                text-[10px]
                font-bold
                uppercase
                tracking-[0.17em]
              "
            >
              Explore all vendors

              <ArrowUpRight
                size={15}
                strokeWidth={1.5}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
