"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

export default function ExperienceHero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-tse-black text-tse-paper">
      {/* IMAGE */}
      <Image
        src="/images/experience1.JPG"
        alt="The Styled Edit Live experience"
        fill
        priority
        className="object-cover opacity-50 grayscale transition-all duration-700"
        sizes="100vw"
      />

      {/* ATMOSPHERE */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-black/45" />

      {/* SUBTLE GLOW */}
      <div className="absolute -right-32 top-1/4 h-100 w-100 rounded-full bg-tse-accent/10 blur-[120px]" />

      {/* GRAIN */}
      <div className="tse-noise absolute inset-0 opacity-20" />

      {/* CONTENT */}
      <div className="relative z-10 flex min-h-[88vh] flex-col justify-between px-6 pb-8 pt-28 sm:px-8 sm:pb-10 md:px-12 md:pt-36 lg:px-16">
        <div className="mx-auto w-full max-w-360">
          {/* TOP META */}
          <div className="flex items-center justify-between border-b border-white/15 pb-4">
            <p className="tse-eyebrow text-white/50">
              TSE LIVE // THE EXPERIENCE
            </p>

            <p className="hidden text-[9px] uppercase tracking-[0.3em] text-white/40 sm:block">
              30.10.26
            </p>
          </div>

          {/* HEADLINE */}
          <div className="mt-14 md:mt-20">
            <p className="mb-5 font-accent text-lg italic text-tse-accent md:text-xl">
              More than an event.
            </p>

            <h1 className="max-w-310 font-display text-[clamp(5rem,14vw,13rem)] uppercase leading-[0.76] tracking-[-0.065em]">
              A Day
              <br />
              Built
              <br />
              Around
              <br />
              <span className="text-white/80">Style.</span>
            </h1>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mx-auto mt-16 w-full max-w-360">
          <div className="grid gap-8 border-t border-white/15 pt-6 md:grid-cols-12 md:items-end">
            {/* DESCRIPTION */}
            <div className="md:col-span-5">
              <p className="max-w-md text-sm leading-6 text-white/60 md:text-[15px]">
                A live expression of fashion, culture, creativity and
                community. Come thrift. Come style. Come create. Come
                connect — as we celebrate one year of The Styled Edit.
              </p>
            </div>

            {/* EVENT DETAILS */}
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:col-span-5 md:col-start-7">
              <div>
                <p className="tse-label text-white/35">Date</p>
                <p className="mt-2 text-sm uppercase tracking-[0.12em]">
                  30 October
                </p>
              </div>

              <div>
                <p className="tse-label text-white/35">Location</p>
                <p className="mt-2 text-sm uppercase tracking-[0.12em]">
                  Nairobi
                </p>
              </div>

              <div>
                <p className="tse-label text-white/35">Format</p>
                <p className="mt-2 text-sm uppercase tracking-[0.12em]">
                  One Day
                </p>
              </div>
            </div>

            {/* SCROLL CTA */}
            <Link
              href="#experience"
              className="group flex w-fit items-center gap-4 md:col-span-2 md:justify-self-end"
            >
              <span className="text-[9px] uppercase tracking-[0.28em] text-white/60 transition-colors group-hover:text-white">
                Explore
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}