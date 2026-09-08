"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
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

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* -------------------------------------------------------
     SCROLL STATE
  ------------------------------------------------------- */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
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

  return (
    <>
      {/* ===================================================
          HEADER
      =================================================== */}

      <header
        className={`
          fixed inset-x-0 top-0 z-50
          transition-all duration-500
          ${
            scrolled
              ? "border-b border-white/[0.08] bg-tse-black/88 backdrop-blur-xl"
              : "bg-transparent"
          }
        `}
      >
        <div
          className="
            tse-container
            flex h-[76px] items-center justify-between
          "
        >
          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            href="/"
            aria-label="The Styled Edit Live — Home"
            onClick={() => setMenuOpen(false)}
            className="
              group
              relative
              z-[60]
              flex
              items-center
              focus-visible:outline-none
            "
          >
            <span
              className="
                font-display
                text-[31px]
                leading-none
                tracking-[0.015em]
                text-tse-paper
                transition-colors
                duration-300
                group-hover:text-tse-white
              "
            >
              TSE
            </span>

            <span
              className="
                ml-[7px]
                mt-[3px]
                font-sans
                text-[9px]
                font-medium
                uppercase
                tracking-[0.24em]
                text-white/45
                transition-colors
                duration-300
                group-hover:text-tse-accent
              "
            >
              Live
            </span>

            {/* Editorial underline */}
            <span
              aria-hidden="true"
              className="
                absolute
                -bottom-[7px]
                left-0
                h-px
                w-0
                bg-tse-accent
                transition-all
                duration-500
                group-hover:w-full
              "
            />
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <nav
            aria-label="Main navigation"
            className="
              hidden
              items-center
              gap-7
              lg:flex
            "
          >
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" &&
                  pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="
                    group
                    relative
                    py-3
                    focus-visible:outline-none
                  "
                >
                  <span
                    className={`
                      font-sans
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.17em]
                      transition-colors
                      duration-300
                      ${
                        isActive
                          ? "text-tse-paper"
                          : "text-white/55 group-hover:text-tse-paper"
                      }
                    `}
                  >
                    {item.label}
                  </span>

                  {/* Active / hover indicator */}
                  <span
                    className={`
                      absolute
                      bottom-1
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
                tse-button
                tse-button-outline
                min-h-[42px]
                px-5
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
            aria-label={
              menuOpen ? "Close menu" : "Open menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((value) => !value)}
            className="
              relative
              z-[60]
              flex
              h-11
              w-11
              items-center
              justify-center
              border
              border-white/15
              text-tse-paper
              transition-all
              duration-300
              hover:border-white/35
              hover:bg-white/[0.04]
              focus-visible:outline-none
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
                  initial={{
                    opacity: 0,
                    rotate: -45,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 45,
                    scale: 0.8,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={18} strokeWidth={1.4} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{
                    opacity: 0,
                    rotate: 45,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -45,
                    scale: 0.8,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={18} strokeWidth={1.4} />
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
            transition={{ duration: 0.35 }}
            className="
              fixed
              inset-0
              z-40
              bg-tse-black
            "
          >
            {/* Editorial atmosphere */}
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
                  h-[420px]
                  w-[420px]
                  rounded-full
                  bg-tse-accent/[0.045]
                  blur-[100px]
                "
              />

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-px
                  w-full
                  bg-white/[0.08]
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
                px-5
                pb-7
                pt-[108px]
                sm:px-8
              "
            >
              {/* =================================================
                  MOBILE LINKS
              ================================================= */}

              <nav aria-label="Mobile navigation">
                <div className="mb-7 flex items-center justify-between">
                  <span className="tse-eyebrow text-white/35">
                    Navigation
                  </span>

                  <span className="tse-label text-white/20">
                    TSE / 01
                  </span>
                </div>

                <div>
                  {navItems.map((item, index) => {
                    const isActive =
                      pathname === item.href ||
                      (item.href !== "/" &&
                        pathname.startsWith(item.href));

                    return (
                      <motion.div
                        key={item.href}
                        initial={{
                          opacity: 0,
                          x: -24,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        exit={{
                          opacity: 0,
                          x: -12,
                        }}
                        transition={{
                          duration: 0.45,
                          delay: index * 0.055,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className="
                            group
                            flex
                            items-baseline
                            border-b
                            border-white/[0.09]
                            py-[17px]
                            focus-visible:outline-none
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
                              text-[46px]
                              uppercase
                              leading-none
                              transition-all
                              duration-300
                              ${
                                isActive
                                  ? "text-tse-paper"
                                  : "text-white/90 group-hover:text-white/55"
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
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.55,
                  delay: 0.38,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href="/tickets"
                  onClick={() => setMenuOpen(false)}
                  className="
                    group
                    block
                    bg-tse-paper
                    px-5
                    py-5
                    text-tse-black
                    transition-colors
                    duration-300
                    hover:bg-tse-white
                  "
                >
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
                      text-[32px]
                      leading-none
                    "
                  >
                    GET TICKETS
                  </p>
                </Link>

                {/* Event information */}
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
                      The Styled Edit Live
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
                      Rongai · Kenya
                    </p>
                  </div>
                </div>

                {/* Edition mark */}
                <div
                  className="
                    mt-7
                    flex
                    items-center
                    gap-3
                  "
                >
                  <span className="h-px flex-1 bg-white/[0.08]" />

                  <span className="tse-label text-white/20">
                    Edition 01
                  </span>

                  <span className="h-px flex-1 bg-white/[0.08]" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}