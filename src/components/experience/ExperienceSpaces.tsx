"use client";

import Image from "next/image";

const spaces = [
  {
    number: "01",
    title: "The Market",
    description:
      "A curated thrift playground where fashion finds meet independent vendors.",
    image: "/images/thrift5.jpg",
  },
  {
    number: "02",
    title: "The Studio",
    description:
      "Designed moments, creative corners and content-ready spaces made to be captured.",
    image: "/images/thrift1.jpg",
  },
  {
    number: "03",
    title: "The Pool",
    description:
      "Slow down, cool off and experience another side of TSE Live.",
    image: "/images/venue1.jpg",
  },
];

export default function ExperienceSpaces() {
  return (
    <section className="bg-black px-6 py-24 text-white md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-[9px] uppercase tracking-[0.35em] text-white/35">
              Explore the spaces
            </p>

            <h2 className="mt-6 max-w-3xl font-display text-6xl uppercase leading-[0.8] tracking-[-0.055em] md:text-8xl">
              Built
              <br />
              For The
              <br />
              Moment.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-white/40">
            Every part of TSE Live is designed to give you
            something to discover, experience and remember.
          </p>
        </div>

        <div className="mt-16 space-y-16 md:mt-24">
          {spaces.map((space, index) => (
            <article
              key={space.number}
              className="grid gap-8 border-t border-white/15 pt-8 lg:grid-cols-[80px_1fr_0.7fr]"
            >
              <div>
                <span className="text-[9px] tracking-[0.2em] text-white/35">
                  {space.number}
                </span>
              </div>

              <div>
                <h3 className="font-display text-5xl uppercase leading-none tracking-[-0.045em] md:text-7xl">
                  {space.title}
                </h3>

                <p className="mt-6 max-w-md text-sm leading-6 text-white/40">
                  {space.description}
                </p>
              </div>

              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={space.image}
                  alt={space.title}
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}