"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Location() {
  return (
    <section className="bg-[#090909] text-[#F4F0E8]">
      <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">

        {/* TOP META */}
        <div className="flex items-center gap-4 border-t border-white/10 pt-5">
          <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40">
            05 / The Setting
          </span>

          <span className="h-px w-10 bg-white/20" />
        </div>

        {/* HEADER */}
        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h2 className="font-display text-[clamp(4rem,9vw,9rem)] uppercase leading-[0.8] tracking-[-0.055em]">
              Come for
              <br />
              the culture.
              <br />
              <span className="ml-[8%]">Stay for the day.</span>
            </h2>
          </div>

          <div className="lg:col-span-3 lg:col-start-10">
            <p className="text-sm leading-6 text-white/50 sm:text-base sm:leading-7">
              A space designed for movement, connection and
              experiencing TSE Live beyond the screen.
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
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group relative aspect-[16/10] overflow-hidden lg:col-span-8"
          >
            {/* IMAGE */}
            <Image
              src="/images/image1.jpg"
              alt="TSE Live venue"
              fill
              priority={false}
              className="object-cover grayscale transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />

            {/* DARK EDITORIAL OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20" />

            {/* TOP META */}
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

            {/* IMAGE INDEX */}
            <div className="absolute right-5 top-5">
              <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/60">
                01 / 01
              </span>
            </div>

            {/* VENUE INFORMATION */}
            <div className="absolute bottom-6 left-6">
              <p className="font-display text-4xl uppercase leading-none tracking-[-0.03em] text-white sm:text-5xl">
                Kid Palace
              </p>

              <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/60">
                Gataka · Rongai
              </p>
            </div>

            {/* IMAGE CTA */}
            <Link
              href="/location"
              aria-label="View venue location"
              className="absolute bottom-6 right-6 flex h-11 w-11 items-center justify-center border border-white/30 bg-black/10 text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-[#F4F0E8] hover:text-black"
            >
              <ArrowUpRight
                size={16}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>

          {/* VENUE DETAILS */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="flex flex-col justify-between border-t border-white/10 pt-5 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-8"
          >
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/35">
                Where
              </p>

              <h3 className="mt-5 font-display text-5xl uppercase leading-[0.85] tracking-[-0.035em]">
                Kid
                <br />
                Palace
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

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* EXPERIENCE STRIP */}
        <div className="mt-20 grid border-t border-white/10 sm:grid-cols-3">

          <div className="border-b border-white/10 py-6 sm:border-b-0 sm:border-r sm:pr-6">
            <p className="font-display text-3xl uppercase tracking-[-0.02em]">
              Fashion
            </p>

            <p className="mt-2 text-xs leading-5 text-white/40">
              Shop, discover and style.
            </p>
          </div>

          <div className="border-b border-white/10 py-6 sm:border-b-0 sm:border-r sm:px-6">
            <p className="font-display text-3xl uppercase tracking-[-0.02em]">
              Lifestyle
            </p>

            <p className="mt-2 text-xs leading-5 text-white/40">
              Swim, eat, move and unwind.
            </p>
          </div>

          <div className="py-6 sm:pl-6">
            <p className="font-display text-3xl uppercase tracking-[-0.02em]">
              Culture
            </p>

            <p className="mt-2 text-xs leading-5 text-white/40">
              Music, people and community.
            </p>
          </div>
        </div>

        {/* BOTTOM STATEMENT */}
        <div className="mt-20 flex flex-col justify-between gap-6 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="max-w-md text-xs uppercase tracking-[0.12em] text-white/30">
            Nairobi.
            <br />
            One day. Multiple worlds.
          </p>

          <Link
            href="/tickets"
            className="group flex w-fit items-center gap-3 border-b border-white/30 pb-2 text-[10px] font-bold uppercase tracking-[0.18em] transition-colors duration-300 hover:border-white"
          >
            Plan your visit

            <ArrowUpRight
              size={14}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </div>

      </div>
    </section>
  );
}