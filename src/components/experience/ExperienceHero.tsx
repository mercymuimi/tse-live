"use client";

import Image from "next/image";
import Link from "next/link";

export default function ExperienceHero() {
  return (
    <section
      id="experience"
      className="relative min-h-[92vh] overflow-hidden bg-tse-black text-tse-paper"
    >
      {/* IMAGE */}
      <Image
        src="/images/experience1.JPG"
        alt="The Styled Edit Live experience"
        fill
        priority
        className="object-cover grayscale"
        sizes="100vw"
      />

      {/* ATMOSPHERE */}
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/50" />

      {/* SUBTLE GOLD GLOW */}
      <div className="absolute -right-32 top-1/4 h-[25rem] w-[25rem] rounded-full bg-tse-accent/10 blur-[120px]" />

      {/* GRAIN */}
      <div className="tse-noise absolute inset-0 opacity-20" />

      {/* CONTENT */}
      <div className="relative z-10 flex min-h-[92vh] flex-col justify-between px-6 pb-8 pt-28 sm:px-8 sm:pb-10 md:px-12 md:pt-36 lg:px-16">
        <div className="mx-auto w-full max-w-[90rem]">
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
              One year of The Styled Edit.
            </p>

            <h1 className="max-w-[75rem] font-display text-[clamp(4.8rem,13vw,12.5rem)] uppercase leading-[0.76] tracking-[-0.065em]">
              Come For
              <br />
              The Thrift.
              <br />
              <span className="text-white/75">Stay For</span>
              <br />
              The Experience.
            </h1>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mx-auto mt-16 w-full max-w-[90rem]">
          <div className="grid gap-8 border-t border-white/15 pt-6 md:grid-cols-12 md:items-end">
            {/* DESCRIPTION */}
            <div className="md:col-span-5">
              <p className="max-w-lg text-sm leading-6 text-white/65 md:text-[15px]">
                TSE Live brings fashion, creativity and lifestyle together for
                one full day. Thrift, style, create, play and celebrate as we
                mark one year of The Styled Edit.
              </p>
            </div>

            {/* EVENT DETAILS */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 md:col-span-5 md:col-start-7">
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
              className="group flex w-fit items-center gap-3 md:col-span-2 md:justify-self-end"
            >
              <span className="text-[9px] uppercase tracking-[0.28em] text-white/55 transition-colors duration-300 group-hover:text-white">
                Explore Experience
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}