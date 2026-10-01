"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Schedule", href: "/schedule" },
  { label: "Vendors", href: "/vendors" },
  { label: "Location", href: "/location" },
  { label: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* -------------------------------------------------------
     SCROLL STATE
  ------------------------------------------------------- */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* -------------------------------------------------------
     LOCK BODY WHEN MOBILE MENU IS OPEN
  ------------------------------------------------------- */

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* -------------------------------------------------------
     CLOSE MENU WHEN ROUTE CHANGES
  ------------------------------------------------------- */

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  /* -------------------------------------------------------
     ACTIVE ROUTE
  ------------------------------------------------------- */

  const isActiveRoute = (href: string) => {
    return (
      pathname === href ||
      (href !== "/" && pathname.startsWith(href))
    );
  };

  return (
    <>
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header
        className={`
          fixed inset-x-0 top-0 z-50
          transition-all duration-500
          ${
            scrolled
              ? "border-b border-white/8 bg-tse-black/90 backdrop-blur-xl"
              : "bg-transparent"
          }
        `}
      >
        <div
          className="
            tse-container
            flex h-[4.25rem] items-center justify-between
          "
        >
          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            href="/"
            aria-label="The Styled Edit Live — Home"
            aria-current={pathname === "/" ? "page" : undefined}
            onClick={() => setMenuOpen(false)}
            className="
              group
              relative
              z-60
              flex
              items-center
              focus-visible:outline-none
              focus-visible:ring-1
              focus-visible:ring-tse-accent
              focus-visible:ring-offset-4
              focus-visible:ring-offset-tse-black
            "
          >
            <span
              className="
                font-display
                text-[30px]
                leading-none
                tracking-[0.015em]
                text-tse-paper
                transition-colors
                duration-300
              "
            >
              TSE
            </span>

            <span
              className="
                ml-1.5
                mt-0.5
                font-sans
                text-[8px]
                font-medium
                uppercase
                tracking-[0.25em]
                text-white/40
                transition-colors
                duration-300
                group-hover:text-tse-accent
              "
            >
              Live
            </span>
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <nav
            aria-label="Main navigation"
            className="
              hidden
              items-center
              gap-6
              lg:flex
            "
          >
            {navItems.map((item) => {
              const isActive = isActiveRoute(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className="
                    group
                    relative
                    py-2.5
                    focus-visible:outline-none
                    focus-visible:ring-1
                    focus-visible:ring-tse-accent
                  "
                >
                  <span
                    className={`
                      font-sans
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.18em]
                      transition-colors
                      duration-300
                      ${
                        isActive
                          ? "text-tse-paper"
                          : "text-white/50 group-hover:text-tse-paper"
                      }
                    `}
                  >
                    {item.label}
                  </span>

                  {/* ACTIVE / HOVER LINE */}
                  <span
                    aria-hidden="true"
                    className={`
                      absolute
                      bottom-0.5
                      left-0
                      h-px
                      bg-tse-accent
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }
                    `}
                  />
                </Link>
              );
            })}
          </nav>

          {/* =================================================
              DESKTOP CTA
          ================================================= */}

          <div className="hidden lg:block">
            <Link
              href="/tickets"
              className="
                inline-flex
                min-h-10
                items-center
                justify-center
                border
                border-white/20
                px-5
                font-sans
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-tse-paper
                transition-all
                duration-300
                hover:border-tse-accent
                hover:bg-tse-accent
                hover:text-tse-black
                focus-visible:outline-none
                focus-visible:ring-1
                focus-visible:ring-tse-accent
              "
            >
              Get Tickets
            </Link>
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((value) => !value)}
            className="
              relative
              z-60
              flex
              h-10
              w-10
              items-center
              justify-center
              border
              border-white/15
              text-tse-paper
              transition-all
              duration-300
              hover:border-white/35
              hover:bg-white/4
              focus-visible:outline-none
              focus-visible:ring-1
              focus-visible:ring-tse-accent
              lg:hidden
            "
          >
            <AnimatePresence
              mode="wait"
              initial={false}
            >
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={
                    prefersReducedMotion
                      ? false
                      : {
                          opacity: 0,
                          rotate: -45,
                          scale: 0.8,
                        }
                  }
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={
                    prefersReducedMotion
                      ? undefined
                      : {
                          opacity: 0,
                          rotate: 45,
                          scale: 0.8,
                        }
                  }
                  transition={{
                    duration: prefersReducedMotion ? 0 : 0.2,
                  }}
                >
                  <X size={17} strokeWidth={1.4} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={
                    prefersReducedMotion
                      ? false
                      : {
                          opacity: 0,
                          rotate: 45,
                          scale: 0.8,
                        }
                  }
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={
                    prefersReducedMotion
                      ? undefined
                      : {
                          opacity: 0,
                          rotate: -45,
                          scale: 0.8,
                        }
                  }
                  transition={{
                    duration: prefersReducedMotion ? 0 : 0.2,
                  }}
                >
                  <Menu size={17} strokeWidth={1.4} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.3,
            }}
            className="
              fixed
              inset-0
              z-40
              bg-tse-black
            "
          >
            {/* ATMOSPHERE */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0
                overflow-hidden
              "
            >
              <div
                className="
                  absolute
                  -right-32
                  top-20
                  h-105
                  w-105
                  rounded-full
                  bg-tse-accent/4
                  blur-[110px]
                "
              />

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-px
                  w-full
                  bg-white/8
                "
              />
            </div>

            <div
              className="
                relative
                flex
                h-full
                flex-col
                justify-between
                overflow-y-auto
                px-5
                pb-7
                pt-24
                sm:px-8
                sm:pt-26
              "
            >
              {/* =================================================
                  MOBILE LINKS
              ================================================= */}

              <nav aria-label="Mobile navigation">
                <div className="mb-6 flex items-center justify-between">
                  <span className="tse-eyebrow text-white/35">
                    Navigation
                  </span>

                  <span className="tse-label text-white/20">
                    The Styled Edit Live
                  </span>
                </div>

                <div>
                  {navItems.map((item, index) => {
                    const isActive = isActiveRoute(item.href);

                    return (
                      <motion.div
                        key={item.href}
                        initial={
                          prefersReducedMotion
                            ? false
                            : {
                                opacity: 0,
                                x: -20,
                              }
                        }
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        exit={
                          prefersReducedMotion
                            ? undefined
                            : {
                                opacity: 0,
                                x: -10,
                              }
                        }
                        transition={{
                          duration: prefersReducedMotion ? 0 : 0.45,
                          delay: prefersReducedMotion
                            ? 0
                            : index * 0.045,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <Link
                          href={item.href}
                          aria-current={
                            isActive ? "page" : undefined
                          }
                          onClick={() => setMenuOpen(false)}
                          className="
                            group
                            flex
                            items-baseline
                            border-b
                            border-white/9
                            py-3.5
                            focus-visible:outline-none
                            focus-visible:ring-1
                            focus-visible:ring-inset
                            focus-visible:ring-tse-accent
                          "
                        >
                          <span
                            className={`
                              mr-4
                              w-5
                              font-sans
                              text-[8px]
                              font-medium
                              tracking-[0.12em]
                              transition-colors
                              duration-300
                              ${
                                isActive
                                  ? "text-tse-accent"
                                  : "text-white/25"
                              }
                            `}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span
                            className={`
                              font-display
                              text-[clamp(2.3rem,10vw,3.1rem)]
                              uppercase
                              leading-none
                              tracking-tight
                              transition-colors
                              duration-300
                              ${
                                isActive
                                  ? "text-tse-paper"
                                  : "text-white/85 group-hover:text-white/50"
                              }
                            `}
                          >
                            {item.label}
                          </span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </nav>

              {/* =================================================
                  MOBILE CTA / EVENT INFO
              ================================================= */}

              <motion.div
                initial={
                  prefersReducedMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 20,
                      }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.5,
                  delay: prefersReducedMotion ? 0 : 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="pt-8"
              >
                <Link
                  href="/tickets"
                  onClick={() => setMenuOpen(false)}
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    bg-tse-paper
                    px-5
                    py-5
                    text-tse-black
                    transition-colors
                    duration-300
                    hover:bg-tse-white
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-tse-accent
                  "
                >
                  <div>
                    <p
                      className="
                        font-sans
                        text-[8px]
                        font-medium
                        uppercase
                        tracking-[0.2em]
                        text-black/40
                      "
                    >
                      Secure your spot
                    </p>

                    <p
                      className="
                        mt-1
                        font-display
                        text-[clamp(1.9rem,8vw,2.2rem)]
                        leading-none
                        tracking-[-0.02em]
                      "
                    >
                      GET TICKETS
                    </p>
                  </div>

                  <ArrowUpRight
                    size={19}
                    strokeWidth={1.4}
                    aria-hidden="true"
                    className="
                      transition-transform
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                    "
                  />
                </Link>

                {/* EVENT INFORMATION */}

                <div
                  className="
                    mt-6
                    flex
                    items-end
                    justify-between
                    gap-6
                  "
                >
                  <div>
                    <p className="tse-eyebrow text-white/25">
                      Date
                    </p>

                    <p
                      className="
                        mt-1
                        font-display
                        text-[23px]
                        leading-none
                        text-tse-paper
                      "
                    >
                      30.10.26
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="tse-eyebrow text-white/25">
                      Location
                    </p>

                    <p
                      className="
                        mt-1
                        font-sans
                        text-[9px]
                        uppercase
                        tracking-[0.16em]
                        text-white/45
                      "
                    >
                      Gataka · Rongai
                    </p>
                  </div>
                </div>

                {/* CLOSING LINE */}

                <div
                  className="
                    mt-7
                    flex
                    items-center
                    gap-3
                  "
                >
                  <span className="h-px flex-1 bg-white/8" />

                  <span className="tse-label text-white/20">
                    Fashion · Culture · Community
                  </span>

                  <span className="h-px flex-1 bg-white/8" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}