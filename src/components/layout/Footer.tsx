"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const exploreLinks = [
  { label: "Experience", href: "/experience" },
  { label: "Schedule", href: "/schedule" },
  { label: "Vendors", href: "/vendors" },
  { label: "Tickets", href: "/tickets" },
];

const informationLinks = [
  { label: "Location", href: "/location" },
  { label: "FAQ", href: "/faq" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/thestylededit25?stkn=MW1wcGVlYWp6MWMxYw%3D%3D&utm_source=qr",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@thestylededit25?_r=1&_t=ZS-9ABWaWZVHhY",
  },
];

const communityLinks = [
  {
    label: "Community",
    href: "https://chat.whatsapp.com/DZGoBCqjN2yF5Fdef3DRRm",
  },
  {
    label: "Main Group",
    href: "https://chat.whatsapp.com/E1svM76iwp5HtHUnwDbkpT?s=cl&p=i&ilr=0",
  },
  {
    label: "Second Group",
    href: "https://chat.whatsapp.com/Hq4cOWQJnaIHhrGdI3TDxx?s=cl&p=i&ilr=0",
  },
];

const whatsappNumber = "0110277215";

export default function Footer() {
  return (
    <footer className="bg-tse-black text-tse-paper">
      <div className="mx-auto max-w-360 px-6 sm:px-8 lg:px-16">

        {/* =====================================================
            BRAND STATEMENT
        ===================================================== */}

        <div className="border-t border-white/10 pb-20 pt-20 sm:pb-24 sm:pt-24 lg:pb-28 lg:pt-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">

            {/* BRAND */}

            <div className="lg:col-span-8">
              <p className="tse-eyebrow mb-7 text-white/30">
                The Styled Edit Live
              </p>

              <h2
                className="
                  max-w-[8ch]
                  font-display
                  text-[clamp(5rem,12vw,12rem)]
                  uppercase
                  leading-[0.73]
                  tracking-[-0.07em]
                "
              >
                TSE
                <br />
                <span className="ml-[7%] text-white/30">
                  Live.
                </span>
              </h2>
            </div>

            {/* STATEMENT */}

            <div className="lg:col-span-3 lg:col-start-10 lg:pb-2">

              <p className="max-w-xs text-sm leading-7 text-white/45 md:text-[15px]">
                One year of thrift, styling and community — brought to life
                for one day.
              </p>

              <p className="mt-6 text-[9px] uppercase tracking-[0.22em] text-white/25">
                30.10.26
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            NAVIGATION
        ===================================================== */}

        <div className="border-t border-white/10">
          <div className="grid lg:grid-cols-12">

            {/* =================================================
                EXPLORE
            ================================================= */}

            <div className="border-b border-white/10 py-10 lg:col-span-3 lg:border-b-0 lg:border-r lg:py-12 lg:pr-10">
              <p className="tse-label mb-7 text-white/25">
                Explore
              </p>

              <nav
                aria-label="Explore"
                className="flex flex-col"
              >
                {exploreLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="
                      group
                      flex
                      w-fit
                      items-center
                      py-2
                      font-display
                      text-[clamp(1.8rem,2.5vw,2.35rem)]
                      uppercase
                      leading-none
                      tracking-[-0.035em]
                      text-white/60
                      transition-colors
                      duration-300
                      hover:text-tse-paper
                    "
                  >
                    <span>{link.label}</span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* =================================================
                INFORMATION
            ================================================= */}

            <div className="border-b border-white/10 py-10 lg:col-span-3 lg:border-b-0 lg:border-r lg:px-10 lg:py-12">
              <p className="tse-label mb-7 text-white/25">
                Information
              </p>

              <nav
                aria-label="Information"
                className="flex flex-col"
              >
                {informationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="
                      group
                      flex
                      w-fit
                      items-center
                      py-2
                      font-display
                      text-[clamp(1.8rem,2.5vw,2.35rem)]
                      uppercase
                      leading-none
                      tracking-[-0.035em]
                      text-white/60
                      transition-colors
                      duration-300
                      hover:text-tse-paper
                    "
                  >
                    <span>{link.label}</span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* =================================================
                FOLLOW TSE
            ================================================= */}

            <div className="border-b border-white/10 py-10 lg:col-span-3 lg:border-b-0 lg:border-r lg:px-10 lg:py-12">
              <p className="tse-label mb-7 text-white/25">
                Follow TSE
              </p>

              <nav
                aria-label="Social media"
                className="flex flex-col"
              >
                {socialLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group
                      flex
                      w-fit
                      items-center
                      py-2
                      font-display
                      text-[clamp(1.8rem,2.5vw,2.35rem)]
                      uppercase
                      leading-none
                      tracking-[-0.035em]
                      text-white/60
                      transition-colors
                      duration-300
                      hover:text-tse-paper
                    "
                  >
                    <span>{link.label}</span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* =================================================
                COMMUNITY
            ================================================= */}

            <div className="py-10 lg:col-span-3 lg:py-12 lg:pl-10">
              <p className="tse-label mb-7 text-white/25">
                Join the community
              </p>

              <nav
                aria-label="TSE community"
                className="flex flex-col"
              >
                {communityLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group
                      flex
                      w-fit
                      items-center
                      py-2
                      font-display
                      text-[clamp(1.8rem,2.5vw,2.35rem)]
                      uppercase
                      leading-none
                      tracking-[-0.035em]
                      text-white/60
                      transition-colors
                      duration-300
                      hover:text-tse-paper
                    "
                  >
                    <span>{link.label}</span>
                  </Link>
                ))}
              </nav>

              {/* WHATSAPP */}

              <a
                href={`https://wa.me/254${whatsappNumber.slice(1)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  mt-7
                  inline-flex
                  items-center
                  gap-3
                  border-b
                  border-white/20
                  pb-2
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-white/45
                  transition-all
                  duration-300
                  hover:border-tse-accent
                  hover:text-tse-accent
                "
              >
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* =====================================================
            EVENT INFORMATION
        ===================================================== */}

        <div className="border-t border-white/10 py-9 md:py-10">
          <div className="grid gap-8 md:grid-cols-12 md:items-end">

            {/* DATE */}

            <div className="md:col-span-3">
              <p className="tse-label text-white/25">
                Date
              </p>

              <p className="mt-3 font-display text-3xl uppercase leading-none tracking-[-0.035em]">
                30.10.26
              </p>
            </div>

            {/* LOCATION */}

            <div className="md:col-span-3">
              <p className="tse-label text-white/25">
                Location
              </p>

              <p className="mt-3 font-display text-3xl uppercase leading-none tracking-[-0.035em]">
                Gataka · Rongai
              </p>
            </div>

            {/* FORMAT */}

            <div className="md:col-span-3">
              <p className="tse-label text-white/25">
                Format
              </p>

              <p className="mt-3 font-display text-3xl uppercase leading-none tracking-[-0.035em]">
                One Day
              </p>
            </div>

            {/* TICKETS */}

            <div className="md:col-span-3 md:text-right">
              <Link
                href="/tickets"
                className="
                  group
                  inline-flex
                  items-center
                  gap-4
                  border-b
                  border-white/25
                  pb-3
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-tse-paper
                  transition-all
                  duration-300
                  hover:border-tse-accent
                  hover:text-tse-accent
                "
              >
                <span>Get Your Ticket</span>
              </Link>
            </div>
          </div>
        </div>

        {/* =====================================================
            FINAL FOOTER LINE
        ===================================================== */}

        <div className="border-t border-white/10 py-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <p className="text-[8px] font-medium uppercase tracking-[0.18em] text-white/25">
              {"©"} {new Date().getFullYear()} The Styled Edit Live
          </p>
            <p className="text-[8px] font-medium uppercase tracking-[0.18em] text-white/25">
              Fashion · Culture · Community
            </p>

            <p className="text-[8px] font-medium uppercase tracking-[0.18em] text-white/25">
              Nairobi · Kenya
            </p>

          </div>
        </div>

      </div>
    </footer>
  );
}