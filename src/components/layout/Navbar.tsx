"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Schedule", href: "/schedule" },
  { label: "Vendors", href: "/vendors" },
  { label: "Location", href: "/location" },
  { label: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`
          fixed inset-x-0 top-0 z-50
          transition-all duration-500
          ${
            scrolled
              ? "border-b border-white/10 bg-[#080808]/90 backdrop-blur-xl"
              : "bg-transparent"
          }
        `}
      >
        <div className="mx-auto flex h-[76px] w-[min(100%-32px,1440px)] items-center justify-between">
          {/* LOGO */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="group relative z-50 flex items-center"
          >
            <span className="font-display text-[30px] leading-none tracking-[0.02em]">
              TSE
            </span>

            <span className="ml-1 mt-0.5 font-sans text-[10px] font-medium tracking-[0.22em] text-white/55">
              LIVE
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative py-2"
              >
                <span className="font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-white/65 transition-colors duration-300 group-hover:text-white">
                  {item.label}
                </span>

                <span className="absolute bottom-0 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />

                <span className="absolute -top-2 -right-2.5 text-[7px] font-medium text-white/25 opacity-0 transition-opacity group-hover:opacity-100">
                  0{index + 1}
                </span>
              </Link>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden lg:block">
            <Link
              href="/tickets"
              className="
                group
                flex items-center gap-3
                border border-white/25
                px-5 py-3
                transition-all duration-300
                hover:border-white
                hover:bg-black
                hover:text-white
              "
            >
              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em]">
                Get Tickets
              </span>
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
            className="
              relative z-50
              flex h-11 w-11
              items-center justify-center
              border border-white/15
              lg:hidden
            "
          >
            {menuOpen ? (
              <X size={19} strokeWidth={1.5} />
            ) : (
              <Menu size={19} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#080808]"
          >
            <div className="flex h-full flex-col justify-between px-6 pb-8 pt-[110px]">
              <nav>
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.06,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="
                        group
                        flex items-baseline
                        border-b border-white/10
                        py-5
                      "
                    >
                      <span className="mr-4 font-sans text-[9px] tracking-[0.2em] text-white/25">
                        0{index + 1}
                      </span>

                      <span className="font-display text-[48px] uppercase leading-none text-white transition-colors duration-300 group-hover:text-white/60">
                        {item.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                <Link
                  href="/tickets"
                  onClick={() => setMenuOpen(false)}
                  className="
                    flex items-center justify-between
                    bg-[#F3F1EC]
                    px-5 py-5
                    text-[#080808]
                  "
                >
                  <div>
                    <p className="font-sans text-[9px] font-medium uppercase tracking-[0.2em] text-black/45">
                      Secure your spot
                    </p>

                    <p className="mt-1 font-display text-[32px] leading-none">
                      GET TICKETS
                    </p>
                  </div>

                  <ArrowUpRight size={22} strokeWidth={1.5} />
                </Link>

                <div className="mt-6 flex items-end justify-between">
                  <div>
                    <p className="font-sans text-[9px] uppercase tracking-[0.18em] text-white/30">
                      The Styled Edit Live
                    </p>

                    <p className="mt-1 font-display text-[22px] leading-none">
                      30.10.26
                    </p>
                  </div>

                  <p className="font-sans text-[9px] uppercase tracking-[0.18em] text-white/30">
                    Rongai · Kenya
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}