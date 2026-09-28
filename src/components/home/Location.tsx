"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Location() {
  return (
    <section className="bg-[#090909] text-[#F4F0E8]">
      <div className="mx-auto max-w-360 px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        {/* TOP META */}
        <div className="flex items-center gap-4 border-t border-white/10 pt-5">
          <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40">
            05 / The Location
          </span>

          <span className="h-px w-10 bg-white/20" />
        </div>

        {/* HEADER */}
        <div className="mt-16 grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <h2 className="font-display text-[clamp(4rem,9vw,9rem)] uppercase leading-[0.8] tracking-[-0.055em]">
              Come for
              <br />
              the culture.
              <br />
              <span className="ml-[8%]">Stay for the day.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 lg:border-l lg:border-white/10 lg:pl-8 lg:pt-2">
            <p className="text-sm leading-6 text-white/50 sm:text-base sm:leading-7">
              One space. One day. A meeting point for fashion, creativity,
              community and everything happening around TSE Live.
            </p>
          </div>
        </div>

        {/* LOCATION */}
        <div className="mt-20 grid gap-8 lg:grid-cols-12">
          {/* VENUE IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative aspect-16/10 overflow-hidden lg:col-span-8"
          >
            <Image
              src="/images/venue1.jpg"
              alt="Kid Palace, Gataka — venue for TSE Live"
              fill
              priority={false}
              className="object-cover grayscale transition-all duration-1000 ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-black/20" />

            {/* VENUE LABEL */}
            <div className="absolute left-5 top-5 flex items-center gap-2">
              <MapPin
                size={14}
                strokeWidth={1.5}
                className="text-white"
              />

              <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/80">
                Venue
              </span>
            </div>

            {/* VENUE NAME */}
            <div className="absolute bottom-6 left-6">
              <p className="font-display text-4xl uppercase leading-none tracking-[-0.03em] text-white sm:text-5xl">
                Kid Palace
              </p>

              <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/60">
                Gataka · Rongai
              </p>
            </div>

            {/* LOCATION LINK */}
            <Link
              href="/location"
              aria-label="View venue location"
              className="absolute bottom-6 right-6 flex h-11 w-11 items-center justify-center border border-white/30 bg-black/10 text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-[#F4F0E8] hover:text-black"
            >
              <ArrowUpRight
                size={16}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </motion.div>

          {/* LOCATION DETAILS */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col justify-between border-t border-white/10 pt-5 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-8"
          >
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/35">
                Where
              </p>

              <h3 className="mt-5 font-display text-5xl uppercase leading-[0.85] tracking-[-0.035em] sm:text-6xl">
                Barizi
                <br />
                Resort
              </h3>

              <p className="mt-5 max-w-sm text-sm leading-6 text-white/50">
                Gataka, Rongai
                <br />
                Nairobi, Kenya
              </p>
            </div>

            {/* EVENT DETAILS */}
            <div className="mt-12">
              <div className="grid grid-cols-2 border-y border-white/10 py-5">
                <div>
                  <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-white/30">
                    Date
                  </p>

                  <p className="mt-2 font-display text-2xl uppercase">
                    30.10.26
                  </p>
                </div>

                <div>
                  <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-white/30">
                    City
                  </p>

                  <p className="mt-2 font-display text-2xl uppercase">
                    Nairobi
                  </p>
                </div>
              </div>

              {/* DIRECTIONS */}
              <Link
                href="/location"
                className="group mt-8 flex w-fit items-center gap-3 border-b border-white/30 pb-2 text-[10px] font-bold uppercase tracking-[0.17em] transition-colors duration-300 hover:border-white"
              >
                Get directions
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}