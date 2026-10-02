import Link from "next/link";
import {
  MapPin,
  Navigation,
  CalendarDays,
} from "lucide-react";

export const metadata = {
  title: "Location | The Styled Edit Live",
  description:
    "Find The Styled Edit Live at Barizi Resort, Gataka-Rongai, Nairobi.",
};

export default function LocationPage() {
  return (
    <main className="min-h-screen bg-tse-black text-tse-paper">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="bg-tse-black px-6 pb-20 pt-28 text-tse-paper md:px-12 md:pb-28 md:pt-36 lg:px-16">
        <div className="mx-auto max-w-360">
          {/* TOP META */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <p className="tse-eyebrow text-white/35">
              TSE LIVE // LOCATION
            </p>

            <p className="hidden text-[9px] uppercase tracking-[0.3em] text-white/25 sm:block">
              30.10.26
            </p>
          </div>

          {/* HERO CONTENT */}
          <div className="mt-16 md:mt-20 lg:mt-24">
            <h1 className="max-w-[9ch] font-display text-[clamp(5rem,11vw,11rem)] uppercase leading-[0.76] tracking-[-0.065em]">
              Find
              <br />
              The
              <br />
              <span className="text-white/30">Scene.</span>
            </h1>

            <div className="mt-10 grid gap-8 md:grid-cols-12 md:items-end">
              <div className="md:col-span-5">
                <p className="max-w-lg text-sm leading-7 text-white/45 md:text-[15px]">
                  One day. One space. A meeting point for fashion, culture,
                  creativity and community.
                </p>
              </div>

              <div className="md:col-span-3 md:col-start-10">
                <p className="tse-label text-white/25">
                  Gataka // Rongai
                </p>

                <p className="mt-2 text-sm uppercase tracking-[0.12em] text-white/70">
                  Nairobi, Kenya
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          VENUE
      ===================================================== */}

      <section className="bg-tse-black px-6 pb-20 md:px-12 md:pb-28 lg:px-16">
        <div className="mx-auto max-w-360">
          <div className="border-t border-white/10 pt-10 md:pt-14">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
              {/* TITLE */}
              <div className="lg:col-span-4">
                <p className="tse-eyebrow text-white/30">
                  The venue
                </p>

                <h2 className="mt-6 max-w-[8ch] font-display text-[clamp(3.8rem,6vw,6.5rem)] uppercase leading-[0.8] tracking-[-0.06em]">
                  Meet Us
                  <br />
                  In
                  <br />
                  <span className="text-white/30">Rongai.</span>
                </h2>
              </div>

              {/* DETAILS */}
              <div className="lg:col-span-7 lg:col-start-6">
                <div className="grid border-y border-white/10 md:grid-cols-2">
                  {/* VENUE */}
                  <div className="border-b border-white/10 p-7 md:border-b-0 md:border-r md:p-9">
                    <MapPin
                      size={20}
                      strokeWidth={1.3}
                      className="text-tse-accent"
                    />

                    <p className="mt-8 tse-label text-white/30">
                      Venue
                    </p>

                    <h3 className="mt-3 font-display text-3xl uppercase leading-none tracking-[-0.04em] md:text-4xl">
                      Barizi
                      <br />
                      Resort
                    </h3>

                    <p className="mt-5 text-sm leading-6 text-white/40">
                      Gataka, Rongai
                      <br />
                      Nairobi, Kenya
                    </p>
                  </div>

                  {/* DATE */}
                  <div className="p-7 md:p-9">
                    <CalendarDays
                      size={20}
                      strokeWidth={1.3}
                      className="text-tse-accent"
                    />

                    <p className="mt-8 tse-label text-white/30">
                      Event date
                    </p>

                    <h3 className="mt-3 font-display text-3xl uppercase leading-none tracking-[-0.04em] md:text-4xl">
                      30
                      <br />
                      October
                    </h3>

                    <p className="mt-5 text-sm leading-6 text-white/40">
                      Full event details and arrival information will be
                      shared with ticket holders.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAP / LOCATION VISUAL
      ===================================================== */}

      <section className="bg-tse-black px-6 pb-24 md:px-12 md:pb-32 lg:px-16">
        <div className="mx-auto max-w-360">
          <div className="relative min-h-[420px] overflow-hidden border border-white/10 bg-[#0d0d0d] md:min-h-[540px]">
            {/* GRID */}
            <div className="pointer-events-none absolute inset-0 opacity-20">
              <div className="absolute left-1/4 top-0 h-full border-l border-white/20" />
              <div className="absolute left-2/4 top-0 h-full border-l border-white/20" />
              <div className="absolute left-3/4 top-0 h-full border-l border-white/20" />

              <div className="absolute left-0 top-1/3 w-full border-t border-white/20" />
              <div className="absolute left-0 top-2/3 w-full border-t border-white/20" />
            </div>

            {/* ABSTRACT ROAD LINES */}
            <div className="pointer-events-none absolute inset-0 opacity-20">
              <div className="absolute left-[8%] top-[-10%] h-[130%] w-px rotate-[28deg] bg-white/20" />

              <div className="absolute left-[38%] top-[-15%] h-[140%] w-px rotate-[62deg] bg-white/15" />

              <div className="absolute left-[68%] top-[-20%] h-[150%] w-px rotate-[105deg] bg-white/15" />

              <div className="absolute left-[-10%] top-[65%] h-px w-[120%] rotate-[-8deg] bg-white/15" />

              <div className="absolute left-[-10%] top-[32%] h-px w-[120%] rotate-[12deg] bg-white/10" />
            </div>

            {/* LOCATION MARKER */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/25">
                <span className="absolute inset-2 rounded-full border border-tse-accent/30" />

                <MapPin
                  size={27}
                  strokeWidth={1.2}
                  className="relative text-tse-paper"
                />
              </div>

              <div className="mt-5 text-center">
                <p className="tse-label text-white/35">
                  TSE LIVE
                </p>

                <p className="mt-2 whitespace-nowrap text-sm uppercase tracking-[0.12em] text-white/80">
                  Barizi Resort
                </p>
              </div>
            </div>

            {/* TOP META */}
            <div className="absolute left-6 top-6 md:left-8 md:top-8">
              <p className="text-[8px] uppercase tracking-[0.3em] text-white/25">
                01 // 01
              </p>
            </div>

            {/* BOTTOM META */}
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
              <p className="text-[8px] uppercase tracking-[0.3em] text-white/30">
                Gataka // Rongai
              </p>
            </div>

            <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8">
              <p className="text-[8px] uppercase tracking-[0.25em] text-white/25">
                Nairobi, Kenya
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          GETTING THERE
      ===================================================== */}

      <section className="border-t border-white/10 bg-tse-black px-6 py-20 text-tse-paper md:px-12 md:py-28 lg:px-16">
        <div className="mx-auto max-w-360">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            {/* TITLE */}
            <div className="lg:col-span-4">
              <p className="tse-eyebrow text-white/30">
                 Getting there
              </p>

              <h2 className="mt-6 max-w-[7ch] font-display text-[clamp(4rem,6vw,6.5rem)] uppercase leading-[0.78] tracking-[-0.06em]">
                Pull
                <br />
                <span className="text-white/30">Up.</span>
              </h2>
            </div>

            {/* TRANSPORT */}
            <div className="lg:col-span-7 lg:col-start-6">
              <div className="grid border-y border-white/10 md:grid-cols-2">
                {/* CAR */}
                <div className="border-b border-white/10 p-7 md:border-b-0 md:border-r md:p-9">
                  <Navigation
                    size={20}
                    strokeWidth={1.3}
                    className="text-tse-accent"
                  />

                  <p className="mt-8 tse-label text-white/30">
                    By car
                  </p>

                  <h3 className="mt-3 font-display text-3xl uppercase leading-none tracking-[-0.04em]">
                    Drive
                    <br />
                    In.
                  </h3>

                  <p className="mt-5 max-w-xs text-sm leading-6 text-white/40">
                    Search for Barizi Resort, Gataka-Rongai on your preferred
                    navigation app.
                  </p>
                </div>

                {/* PUBLIC TRANSPORT */}
                <div className="p-7 md:p-9">
                  <MapPin
                    size={20}
                    strokeWidth={1.3}
                    className="text-tse-accent"
                  />

                  <p className="mt-8 tse-label text-white/30">
                    Local transport
                  </p>

                  <h3 className="mt-3 font-display text-3xl uppercase leading-none tracking-[-0.04em]">
                    Get
                    <br />
                    Here.
                  </h3>

                  <p className="mt-5 max-w-xs text-sm leading-6 text-white/40">
                    More detailed public transport and arrival instructions
                    will be released closer to the event.
                  </p>
                </div>
              </div>

              {/* NOTE */}
              <div className="mt-6 flex items-center gap-3">
                <span className="h-px w-8 bg-tse-accent/60" />

                <p className="text-[8px] uppercase tracking-[0.25em] text-white/25">
                  Arrival information for ticket holders
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="bg-tse-black px-6 py-20 md:px-12 md:py-28 lg:px-16">
        <div className="mx-auto max-w-360">
          <div className="border-t border-white/10 pt-10 md:pt-14">
            <div className="grid gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-6">
                <p className="tse-eyebrow text-white/30">
                  Ready?
                </p>

                <h2 className="mt-5 font-display text-[clamp(5rem,9vw,9rem)] uppercase leading-[0.75] tracking-[-0.065em]">
                  Be
                  <br />
                  <span className="text-white/30">There.</span>
                </h2>
              </div>

              <div className="md:col-span-4 md:col-start-9 md:pb-1">
                <p className="mb-6 max-w-sm text-sm leading-6 text-white/40">
                  One day. One venue. A full day of fashion, creativity,
                  community, music and everything TSE Live.
                </p>

                <Link
                  href="/tickets"
                  className="
                    group
                    inline-flex
                    w-full
                    items-center
                    justify-between
                    border
                    border-white/20
                    px-6
                    py-5
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-tse-paper
                    transition-all
                    duration-300
                    hover:border-tse-accent
                    hover:bg-tse-accent
                    hover:text-tse-black
                    md:w-auto
                    md:min-w-64
                  "
                >
                  <span>Get Your Ticket</span>
                                  </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="border-t border-white/10 bg-tse-black px-6 py-10 text-white md:px-12 lg:px-16">
        <div className="mx-auto flex max-w-360 flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-display text-3xl leading-none tracking-[-0.04em]">
              TSE
              <span className="ml-2 font-sans text-[8px] font-medium uppercase tracking-[0.25em] text-white/35">
                Live
              </span>
            </p>

            <p className="mt-2 text-[8px] uppercase tracking-[0.25em] text-white/25">
              The Styled Edit Live
            </p>
          </div>

          <div className="text-left md:text-right">
            <p className="text-[8px] uppercase tracking-[0.2em] text-white/25">
              30.10.26
            </p>

            <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-white/25">
              Nairobi, Kenya
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}