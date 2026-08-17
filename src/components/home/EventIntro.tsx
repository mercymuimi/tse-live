"use client";
 
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
 
const FLASH = "#FF2A2A";
 
const stats = [
  { value: "01", label: "Day" },
  { value: "20+", label: "Vendors" },
  { value: "100+", label: "Looks" },
  { value: "500+", label: "Creatives" },
];
 
export default function Intro() {
  const shouldReduceMotion = useReducedMotion();
 
  const fadeInView = (delay = 0) => ({
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });
 
  return (
    <section className="bg-[#090909] text-white">
      <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
 
        {/* TOP META */}
        <motion.div
          {...fadeInView(0)}
          className="mb-16 flex items-start justify-between border-t border-black/15 pt-4"
        >
          <span className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-black/50">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: FLASH }}
            />
            01 / The Event
          </span>
 
          <span className="hidden text-[9px] uppercase tracking-[0.2em] text-black/40 sm:block">
            Nairobi &middot; Kenya
          </span>
        </motion.div>
 
        {/* MAIN STATEMENT */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
 
          <div className="lg:col-span-7">
            <h2 className="font-display text-[clamp(3.5rem,8vw,8rem)] uppercase leading-[0.82] tracking-[-0.05em]">
              <motion.span {...fadeInView(0.1)} className="block">
                Fashion
              </motion.span>
              <motion.span
                {...fadeInView(0.2)}
                className="block ml-[8%]"
              >
                meets
              </motion.span>
              <motion.span
                {...fadeInView(0.3)}
                className="block lowercase font-accent font-normal tracking-[-0.02em]"
              >
                culture.
              </motion.span>
            </h2>
          </div>
 
          {/* DESCRIPTION */}
          <div className="flex flex-col justify-end lg:col-span-4 lg:col-start-9">
            <motion.p
              {...fadeInView(0.4)}
              className="max-w-md text-base leading-7 text-white/65 sm:text-lg sm:leading-8"
            >
              The Styled Edit Live is where fashion, creativity and
              community come together. A one-day experience built for
              people who see style as more than what you wear.
            </motion.p>
 
            <motion.p
              {...fadeInView(0.48)}
              className="mt-6 max-w-md text-sm leading-6 text-white/45"
            >
              Discover independent brands, shop unique pieces, meet
              creators, experience live styling and connect with the
              people shaping Kenya&apos;s fashion culture.
            </motion.p>
 
            <motion.div {...fadeInView(0.56)}>
              <Link
                href="/experience"
                className="group mt-10 inline-flex w-fit items-center gap-3 border-b border-black pb-2 text-[10px] font-bold uppercase tracking-[0.18em] transition-colors duration-300 hover:border-[#FF2A2A]"
              >
                <span className="transition-colors duration-300 group-hover:text-[#FF2A2A]">
                  Explore the experience
                </span>
                <ArrowUpRight
                  size={13}
                  strokeWidth={1.8}
                  className="transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#FF2A2A]"
                />
              </Link>
            </motion.div>
          </div>
        </div>
 
        {/* BOTTOM STATS */}
        <div className="mt-24 grid grid-cols-2 border-t border-black/15 sm:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              {...fadeInView(0.6 + index * 0.08)}
              className="border-b border-black/15 py-6 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0"
            >
              <p className="font-display text-4xl leading-none sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.16em] text-black/45">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
 