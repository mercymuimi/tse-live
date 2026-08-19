import Link from "next/link";
import { ArrowUpRight, MapPin, Navigation } from "lucide-react";

export default function LocationPage() {
  return (
    <main className="min-h-screen bg-[#f4f1ea] text-black">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="bg-black px-6 pb-20 pt-32 text-white md:px-12 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-7xl">

          <Link
            href="/"
            className="mb-10 inline-block text-[9px] uppercase tracking-[0.3em] text-white/35 transition hover:text-white"
          >
            ← Back home
          </Link>

          <p className="text-[9px] uppercase tracking-[0.35em] text-white/35">
            TSE LIVE // LOCATION
          </p>

          <h1 className="mt-6 max-w-6xl font-display text-[clamp(4.5rem,11vw,10rem)] uppercase leading-[0.78] tracking-[-0.06em]">
            Find
            <br />
            The Scene.
          </h1>

          <div className="mt-10 max-w-xl">
            <p className="text-sm leading-7 text-white/50 md:text-base">
              One day. One space. A meeting point for fashion,
              culture, creativity and community.
            </p>
          </div>

        </div>
      </section>

      {/* =====================================================
          LOCATION INTRO
      ===================================================== */}

      <section className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.3fr]">

          <div>
            <p className="text-[9px] uppercase tracking-[0.3em] text-black/35">
              01 // The venue
            </p>

            <h2 className="mt-5 max-w-md text-4xl uppercase leading-[0.9] tracking-tighter md:text-6xl">
              Meet us
              <br />
              in Rongai.
            </h2>
          </div>

          <div className="space-y-6">

            <div className="border-t border-black/15 pt-6">
              <div className="flex items-start gap-4">
                <MapPin
                  size={20}
                  strokeWidth={1.5}
                  className="mt-1 shrink-0"
                />

                <div>
                  <p className="text-[9px] uppercase tracking-[0.25em] text-black/40">
                    Venue
                  </p>

                  <h3 className="mt-2 text-2xl uppercase tracking-[-0.03em]">
                    Kid Palace
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-black/45">
                    Gatakwa, Rongai
                    <br />
                    Nairobi, Kenya
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-black/15 pt-6">
              <p className="text-[9px] uppercase tracking-[0.25em] text-black/40">
                Event date
              </p>

              <p className="mt-2 text-2xl uppercase tracking-[-0.03em]">
                30 October
              </p>

              <p className="mt-2 text-sm leading-6 text-black/45">
                Full event details and arrival information
                will be shared with ticket holders.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          MAP / VISUAL BLOCK
      ===================================================== */}

      <section className="px-6 pb-16 md:px-12 md:pb-24">
        <div className="mx-auto max-w-7xl">

          <div className="relative min-h-105 overflow-hidden bg-[#171717] text-white md:min-h-130">

            {/* Editorial grid */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute left-1/4 top-0 h-full border-l border-white/20" />
              <div className="absolute left-2/4 top-0 h-full border-l border-white/20" />
              <div className="absolute left-3/4 top-0 h-full border-l border-white/20" />

              <div className="absolute left-0 top-1/3 w-full border-t border-white/20" />
              <div className="absolute left-0 top-2/3 w-full border-t border-white/20" />
            </div>

            {/* Center marker */}

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/30">
                <MapPin
                  size={26}
                  strokeWidth={1.2}
                />
              </div>

              <div className="mt-5 text-center">
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/40">
                  TSE LIVE
                </p>

                <p className="mt-2 text-sm uppercase tracking-[0.08em]">
                  Kid Palace
                </p>

              </div>

            </div>

            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
              <p className="text-[8px] uppercase tracking-[0.3em] text-white/30">
                Gatakwa // Rongai
              </p>
            </div>

            <div className="absolute right-6 top-6 md:right-8 md:top-8">
              <p className="text-[8px] uppercase tracking-[0.25em] text-white/30">
                01 // 01
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          GETTING THERE
      ===================================================== */}

      <section className="bg-black px-6 py-16 text-white md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">

            <div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/35">
                02 // Getting there
              </p>

              <h2 className="mt-5 text-4xl uppercase leading-[0.9] tracking-tighter md:text-6xl">
                Pull
                <br />
                Up.
              </h2>
            </div>

            <div className="grid gap-px bg-white/10 md:grid-cols-2">

              <div className="bg-black p-7 md:p-9">
                <Navigation
                  size={20}
                  strokeWidth={1.4}
                  className="mb-8"
                />

                <h3 className="text-xl uppercase tracking-[-0.03em]">
                  By car
                </h3>

                <p className="mt-4 text-sm leading-6 text-white/40">
                  Search for Kid Palace, Gatakwa-Rongai
                  on your preferred navigation app.
                </p>
              </div>

              <div className="bg-black p-7 md:p-9">
                <MapPin
                  size={20}
                  strokeWidth={1.4}
                  className="mb-8"
                />

                <h3 className="text-xl uppercase tracking-[-0.03em]">
                  Local transport
                </h3>

                <p className="mt-4 text-sm leading-6 text-white/40">
                  More detailed public transport and
                  arrival instructions will be released
                  closer to the event.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="border-t border-black/15 pt-10 md:flex md:items-end md:justify-between">

            <div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-black/35">
                Ready?
              </p>

              <h2 className="mt-4 max-w-2xl font-display text-6xl uppercase leading-[0.8] tracking-tighter md:text-8xl">
                Be
                <br />
                There.
              </h2>
            </div>

            <Link
              href="/tickets"
              className="mt-10 inline-flex items-center gap-4 bg-black px-7 py-5 text-[9px] font-bold uppercase tracking-[0.22em] text-white transition hover:bg-black/80 md:mt-0"
            >
              Get your ticket
              <ArrowUpRight size={15} strokeWidth={1.5} />
            </Link>

          </div>

        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="bg-black px-6 py-12 text-white md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>
            <p className="font-display text-3xl tracking-[-0.04em]">
              TSE / LIVE
            </p>

            <p className="mt-2 text-[8px] uppercase tracking-[0.25em] text-white/30">
              The Styled Edit Live
            </p>
          </div>

          <p className="text-[8px] uppercase tracking-[0.2em] text-white/30">
            Nairobi, Kenya
          </p>

        </div>
      </footer>

    </main>
  );
}