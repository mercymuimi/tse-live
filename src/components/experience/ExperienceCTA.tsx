"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ExperienceCTA() {
  return (
    <section className="bg-[#f4f1ea] px-6 pb-24 md:px-12 md:pb-32">
      <div className="mx-auto max-w-7xl border-t border-black/15 pt-16 md:pt-24">
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
          <div>
            <p className="text-[9px] uppercase tracking-[0.35em] text-black/35">
              TSE LIVE // OCTOBER 30
            </p>

            <h2 className="mt-6 max-w-5xl font-display text-[clamp(4rem,9vw,8rem)] uppercase leading-[0.78] tracking-[-0.06em]">
              Don't Just
              <br />
              Hear About It.
              <br />
              Be There.
            </h2>
          </div>

          <Link
            href="/tickets"
            className="group flex w-full items-center justify-between bg-black px-6 py-5 text-white transition hover:bg-black/80 lg:w-70"
          >
            <span className="text-[9px] font-bold uppercase tracking-[0.25em]">
              Get your ticket
            </span>

            <ArrowUpRight
              size={17}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
