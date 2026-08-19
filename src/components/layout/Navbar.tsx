"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Schedule", href: "/schedule" },
  { label: "Vendors", href: "/vendors" },
  { label: "Location", href: "/location" },
  { label: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* =====================================================
          MAIN NAVBAR
      ====================================================== */}
      <header className="fixed inset-x-0 top-0 z-50">
        <nav className="border-b border-white/10 bg-black/95 backdrop-blur-xl">
          <div className="mx-auto w-full max-w-360 px-6 sm:px-8 lg:px-10">
            <div className="flex h-18.5 items-center justify-between">

              {/* LOGO */}
              <Link
                href="/"
                onClick={closeMenu}
                aria-label="The Styled Edit Live"
                className="group flex shrink-0 items-center"
              >
                <span
                  className="
                    font-display
                    text-[28px]
                    font-bold
                    leading-none
                    tracking-[-0.07em]
                    text-[#F4F0E8]
                    transition-opacity
                    duration-300
                    group-hover:opacity-70
                  "
                >
                  TSE<span className="text-white/40">.</span>LIVE
                </span>
              </Link>

              {/* DESKTOP NAVIGATION */}
              <div className="hidden items-center gap-8 lg:flex">
                {navigation.map((item) => {
                  const active = isActive(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group relative py-2"
                    >
                      <span
                        className={`
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.17em]
                          transition-colors
                          duration-300
                          ${
                            active
                              ? "text-[#F4F0E8]"
                              : "text-white/50 group-hover:text-[#F4F0E8]"
                          }
                        `}
                      >
                        {item.label}
                      </span>

                      {/* ACTIVE / HOVER LINE */}
                      <span
                        className={`
                          absolute
                          bottom-0
                          left-0
                          h-px
                          bg-[#F4F0E8]
                          transition-all
                          duration-300
                          ${active ? "w-full" : "w-0 group-hover:w-full"}
                        `}
                      />
                    </Link>
                  );
                })}
              </div>

              {/* RIGHT SIDE */}
              <div className="flex items-center gap-3">

                {/* DESKTOP TICKET CTA */}
                <Link
                  href="/tickets"
                  className="
                    hidden
                    h-10
                    min-w-39
                    items-center
                    justify-center
                    bg-[#F4F0E8]
                    px-6
                    text-black
                    transition-all
                    duration-300
                    hover:bg-white
                    sm:flex
                  "
                >
                  <span
                    className="
                      whitespace-nowrap
                      text-[10px]
                      font-extrabold
                      uppercase
                      tracking-[0.13em]
                      text-black
                    "
                  >
                    Get Your Ticket
                  </span>
                </Link>

                {/* MOBILE MENU BUTTON */}
                <button
                  type="button"
                  onClick={() => setMenuOpen((open) => !open)}
                  aria-label={menuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={menuOpen}
                  className="
                    relative
                    z-60
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    border
                    border-white/20
                    text-[#F4F0E8]
                    transition-all
                    duration-300
                    hover:border-white
                    hover:bg-[#F4F0E8]
                    hover:text-black
                    lg:hidden
                  "
                >
                  {menuOpen ? (
                    <X size={18} strokeWidth={1.7} />
                  ) : (
                    <Menu size={18} strokeWidth={1.7} />
                  )}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#090909] lg:hidden"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="
                flex
                min-h-screen
                flex-col
                px-6
                pb-7
                pt-28
                sm:px-8
              "
            >
              {/* MOBILE LINKS */}
              <div className="flex flex-1 flex-col">
                {navigation.map((item, index) => {
                  const active = isActive(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className="
                        group
                        flex
                        items-center
                        justify-between
                        border-b
                        border-white/10
                        py-5
                      "
                    >
                      <div className="flex items-baseline gap-4">
                        <span
                          className="
                            text-[9px]
                            font-medium
                            tracking-[0.15em]
                            text-white/30
                          "
                        >
                          0{index + 1}
                        </span>

                        <span
                          className={`
                            font-display
                            text-4xl
                            uppercase
                            leading-none
                            tracking-[-0.02em]
                            transition-colors
                            duration-300
                            ${
                              active
                                ? "text-[#F4F0E8]"
                                : "text-white/45 group-hover:text-[#F4F0E8]"
                            }
                          `}
                        >
                          {item.label}
                        </span>
                      </div>

                      <ArrowUpRight
                        size={19}
                        strokeWidth={1.5}
                        className="
                          text-white/30
                          transition-all
                          duration-300
                          group-hover:-translate-y-1
                          group-hover:translate-x-1
                          group-hover:text-[#F4F0E8]
                        "
                      />
                    </Link>
                  );
                })}
              </div>

              {/* MOBILE TICKET CTA */}
              <Link
                href="/tickets"
                onClick={closeMenu}
                className="
                  flex
                  items-center
                  justify-between
                  bg-[#F4F0E8]
                  px-5
                  py-5
                  text-black
                  transition-colors
                  duration-300
                  hover:bg-white
                "
              >
                <div>
                  <p
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                    "
                  >
                    Entry
                  </p>

                  <p
                    className="
                      mt-1
                      font-display
                      text-3xl
                      leading-none
                    "
                  >
                    KES 500
                  </p>
                </div>

                <span
                  className="
                    text-[10px]
                    font-extrabold
                    uppercase
                    tracking-[0.14em]
                  "
                >
                  Get Your Ticket
                </span>
              </Link>

              {/* MOBILE META */}
              <div
                className="
                  mt-6
                  flex
                  items-center
                  justify-between
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.16em]
                  text-white/30
                "
              >
                <span>The Styled Edit Live</span>
                <span>30.10.26</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}