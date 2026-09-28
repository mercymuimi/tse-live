"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const vendorSpaces = [
  {
    number: "01",
    name: "Thrift & Vintage",
    tag: "Shop the racks",
    image: "/images/thrift1.JPG",
  },
  {
    number: "02",
    name: "Bags & Goods",
    tag: "Discover the edit",
    image: "/images/bags1.jpg",
  },
  {
    number: "03",
    name: "Accessories",
    tag: "Find your detail",
    image: "/images/accessories2.JPG",
  },
];

export default function VendorPreview() {
  return (
    <section className="bg-[#090909] text-[#F4F0E8]">
      <div className="mx-auto max-w-360 px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        {/* HEADER */}
        <div className="grid gap-10 border-t border-white/10 pt-5 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4">
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/45">
                04 / The Market
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
            <p className="max-w-md text-sm leading-6 text-white/55 sm:text-base sm:leading-7">
              Discover independent sellers, makers and creatives bringing
              their own edit to TSE Live — from curated thrift and vintage to
              the details that complete your look.
            </p>
          </div>
        </div>

        {/* VENDOR SPACES */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {vendorSpaces.map((space, index) => (
            <motion.article
              key={space.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.07,
              }}
              className="group"
            >
              {/* IMAGE */}
              <div className="relative aspect-3/4 overflow-hidden bg-[#111]">
                <img
                  src={space.image}
                  alt={space.name}
                  className="
                    h-full
                    w-full
                    object-cover
                    grayscale
                    transition-all
                    duration-700
                    ease-out
                    group-hover:scale-[1.04]
                    group-hover:grayscale-0
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-black/25
                    transition-colors
                    duration-500
                    group-hover:bg-black/10
                  "
                />

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
                  {space.number}
                </span>

                {/* TAG */}
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
                  {space.tag}
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
                    className="
                      transition-transform
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </div>
              </div>

              {/* INFO */}
              <div className="mt-5 flex items-start justify-between border-t border-white/10 pt-4">
                <h3
                  className="
                    font-display
                    text-2xl
                    uppercase
                    leading-none
                    tracking-[-0.02em]
                    sm:text-3xl
                  "
                >
                  {space.name}
                </h3>

                <span className="shrink-0 pl-4 text-[9px] uppercase tracking-[0.15em] text-white/35">
                  TSE Live
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* VENDOR EXPERIENCE */}
        <div className="mt-24 border-t border-white/10 pt-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40">
                For the ones building the culture
              </p>

              <h3
                className="
                  mt-4
                  max-w-3xl
                  font-display
                  text-[clamp(3rem,6vw,6rem)]
                  uppercase
                  leading-[0.85]
                  tracking-[-0.045em]
                "
              >
                Bring your
                <br />
                <span className="ml-[6%]">edit.</span>
              </h3>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-sm leading-6 text-white/50 sm:text-base sm:leading-7">
                Sell your pieces. Showcase your brand. Create content.
                Connect with people who care about fashion, style and the
                culture around it.
              </p>

              <Link
                href="/vendors"
                className="
                  group
                  mt-8
                  flex
                  w-fit
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
                Explore vendor spaces

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.5}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </Link>
            </div>
          </div>
        </div>

        {/* EXPERIENCE STRIP */}
        <div className="mt-20 grid grid-cols-2 border-y border-white/10 sm:grid-cols-4 lg:grid-cols-6">
          {[
            "SELL",
            "SHOWCASE",
            "CREATE",
            "COLLABORATE",
            "CONNECT",
            "DISCOVER",
          ].map((item, index) => (
            <div
              key={item}
              className={`
                flex
                min-h-20
                items-center
                justify-center
                px-4
                text-center
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-white/40
                ${index < 5 ? "border-r border-white/10" : ""}
                ${index > 1 ? "border-t border-white/10 sm:border-t-0" : ""}
              `}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}