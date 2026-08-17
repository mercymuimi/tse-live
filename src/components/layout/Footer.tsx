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
  { label: "Instagram", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "WhatsApp", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#090909] text-[#F4F0E8]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-10">

        {/* ==================================================
            BRAND
        ================================================== */}

        <div className="py-20 sm:py-28 lg:py-36">

          <div className="max-w-[900px]">
            <p className="mb-8 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/35">
              The Styled Edit Live
            </p>

            <h2
              className="
                font-display
                text-[clamp(5rem,13vw,13rem)]
                font-bold
                uppercase
                leading-[0.73]
                tracking-[-0.065em]
              "
            >
              TSE
              <br />
              <span className="ml-[8%]">LIVE.</span>
            </h2>

            <p className="mt-10 max-w-md text-sm leading-6 text-white/40 sm:text-base sm:leading-7">
              Fashion, culture and community — brought together
              in real life.
            </p>
          </div>
        </div>

        {/* ==================================================
            NAVIGATION
        ================================================== */}

        <div className="grid border-t border-white/10 py-10 sm:grid-cols-2 lg:grid-cols-3">

          {/* EXPLORE */}
          <div className="border-b border-white/10 pb-10 sm:border-b-0 sm:pb-0 lg:border-r lg:border-white/10 lg:pr-10">
            <p className="mb-6 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30">
              Explore
            </p>

            <nav className="flex flex-col gap-4">
              {exploreLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="
                    group
                    flex
                    w-fit
                    items-center
                    gap-2
                    font-display
                    text-2xl
                    uppercase
                    leading-none
                    tracking-[-0.02em]
                    text-white/70
                    transition-colors
                    duration-300
                    hover:text-[#F4F0E8]
                  "
                >
                  {link.label}

                  <ArrowUpRight
                    size={13}
                    strokeWidth={1.5}
                    className="
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                      group-hover:opacity-100
                    "
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* INFORMATION */}
          <div className="border-b border-white/10 py-10 sm:border-b-0 sm:px-8 sm:py-0 lg:border-r lg:border-white/10">
            <p className="mb-6 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30">
              Information
            </p>

            <nav className="flex flex-col gap-4">
              {informationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="
                    group
                    flex
                    w-fit
                    items-center
                    gap-2
                    font-display
                    text-2xl
                    uppercase
                    leading-none
                    tracking-[-0.02em]
                    text-white/70
                    transition-colors
                    duration-300
                    hover:text-[#F4F0E8]
                  "
                >
                  {link.label}

                  <ArrowUpRight
                    size={13}
                    strokeWidth={1.5}
                    className="
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                      group-hover:opacity-100
                    "
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* SOCIAL */}
          <div className="pt-10 sm:px-8 sm:pt-0 lg:pl-8">
            <p className="mb-6 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30">
              Follow the movement
            </p>

            <nav className="flex flex-col gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    flex
                    w-fit
                    items-center
                    gap-2
                    font-display
                    text-2xl
                    uppercase
                    leading-none
                    tracking-[-0.02em]
                    text-white/70
                    transition-colors
                    duration-300
                    hover:text-[#F4F0E8]
                  "
                >
                  {link.label}

                  <ArrowUpRight
                    size={13}
                    strokeWidth={1.5}
                    className="
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                      group-hover:opacity-100
                    "
                  />
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* ==================================================
            EVENT STRIP
        ================================================== */}

        <div className="border-t border-white/10 py-8">

          <div className="grid gap-6 sm:grid-cols-3 sm:items-center">

            <div>
              <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white/25">
                Date
              </p>

              <p className="mt-2 font-display text-2xl uppercase">
                30.10.26
              </p>
            </div>

            <div>
              <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white/25">
                Location
              </p>

              <p className="mt-2 font-display text-2xl uppercase">
                Nairobi, Kenya
              </p>
            </div>

            <div className="sm:text-right">
              <Link
                href="/tickets"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  border-b
                  border-white/30
                  pb-2
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  transition-colors
                  duration-300
                  hover:border-white
                "
              >
                Get Your Ticket

                <ArrowUpRight
                  size={13}
                  strokeWidth={1.5}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>

          </div>
        </div>

        {/* ==================================================
            COPYRIGHT
        ================================================== */}

        <div
          className="
            flex
            flex-col
            justify-between
            gap-4
            border-t
            border-white/10
            py-6
            text-[8px]
            font-medium
            uppercase
            tracking-[0.17em]
            text-white/25
            sm:flex-row
          "
        >
          <span>
            © {new Date().getFullYear()} The Styled Edit Live
          </span>

          <span>
            Fashion · Culture · Community
          </span>

          <span>
            Nairobi · Kenya
          </span>
        </div>
      </div>
    </footer>
  );
}