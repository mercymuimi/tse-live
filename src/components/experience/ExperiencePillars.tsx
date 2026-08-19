"use client";

import { ArrowUpRight } from "lucide-react";

const pillars = [
  {
    number: "01",
    title: "Shop",
    description:
      "Discover curated thrift pieces, independent vendors and unexpected fashion finds.",
    label: "THE MARKET",
  },
  {
    number: "02",
    title: "Style",
    description:
      "Experiment with your wardrobe, get inspired and connect with people who understand personal style.",
    label: "THE EDIT",
  },
  {
    number: "03",
    title: "Create",
    description:
      "Step into spaces designed for content, photography, expression and creative discovery.",
    label: "THE STUDIO",
  },
  {
    number: "04",
    title: "Connect",
    description:
      "Meet creatives, fashion lovers, vendors and a community built around shared taste.",
    label: "THE COMMUNITY",
  },
];

export default function ExperiencePillars() {
  return (
    <section
      id="experience"
      className="bg-[#f4f1ea] px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-[9px] uppercase tracking-[0.35em] text-black/35">
              What happens here
            </p>

            <h2 className="mt-6 max-w-sm font-display text-6xl uppercase leading-[0.82] tracking-[-0.055em] md:text-8xl">
              Enter
              <br />
              The
              <br />
              World.
            </h2>
          </div>

          <div className="grid border-t border-black/15 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <article
                key={pillar.number}
                className="group border-b border-black/15 p-6 sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="text-[9px] tracking-[0.2em] text-black/35">
                    {pillar.number}
                  </span>

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.3}
                    className="text-black/25 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black"
                  />
                </div>

                <p className="mt-12 text-[8px] uppercase tracking-[0.25em] text-black/35">
                  {pillar.label}
                </p>

                <h3 className="mt-3 font-display text-5xl uppercase leading-none tracking-[-0.04em]">
                  {pillar.title}
                </h3>

                <p className="mt-5 max-w-sm text-sm leading-6 text-black/45">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
