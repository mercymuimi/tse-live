"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

export default function ExperienceHero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-black text-white">
      <Image
        src="/images/experience1.JPG"
        alt="The Styled Edit Live"
        fill
        priority
        className="object-cover opacity-55"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 flex min-h-[92vh] flex-col justify-between px-6 pb-10 pt-32 md:px-12 md:pb-12 md:pt-40">
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-[9px] uppercase tracking-[0.4em] text-white/45">
            TSE LIVE // THE EXPERIENCE
          </p>

          <h1 className="mt-8 max-w-6xl font-display text-[clamp(5rem,13vw,12rem)] uppercase leading-[0.76] tracking-[-0.065em]">
            More
            <br />
            Than
            <br />
            An Event.
          </h1>
        </div>

        <div className="mx-auto flex w-full max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end">
          <p className="max-w-md text-sm leading-6 text-white/65 md:text-base">
            A live expression of fashion, culture, creativity and
            community. Come thrift. Come style. Come create. Come
            connect — as we celebrate 1 year of The Styled Edit.
          </p>

          <Link
            href="#experience"
            className="group flex w-fit items-center gap-4 text-[9px] uppercase tracking-[0.25em]"
          >
            Explore the experience
          </Link>
        </div>
      </div>
    </section>
  );
}