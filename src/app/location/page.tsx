import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  Car,
  MapPin,
  MessageCircle,
  Navigation,
} from "lucide-react";

export const metadata = {
  title: "Location | The Styled Edit Live",
  description:
    "Find The Styled Edit Live at Barizi Resort, Nairobi.",
};

const googleMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Barizi+Resort%2C+Nairobi";

// Confirmed TSE Live WhatsApp number (reused from the vendors page).
// Double-check whether general directions support should use a
// different number than vendor inquiries.
const whatsappUrl =
  "https://wa.me/254110277215?text=Hi%20TSE%20Live!%20I%20need%20help%20with%20directions%20to%20Barizi%20Resort.";

export default function LocationPage() {
  return (
    <main className="min-h-screen bg-tse-black text-tse-paper">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-tse-black px-6 pb-20 pt-28 md:px-12 md:pb-28 md:pt-36 lg:px-16 lg:pt-40">
        {/* Atmosphere */}
        <div className="pointer-events-none absolute right-[-10%] top-[10%] h-125 w-125 rounded-full bg-tse-accent/6 blur-[140px]" />

        <div className="mx-auto max-w-360">
          {/* Top meta */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <p className="tse-eyebrow text-white/35">
              TSE LIVE // LOCATION
            </p>

            <p className="hidden text-[9px] uppercase tracking-[0.3em] text-white/25 sm:block">
              30.10.26
            </p>
          </div>

          {/* Hero */}
          <div className="mt-16 grid gap-12 md:mt-24 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <p className="font-accent text-lg italic text-tse-accent md:text-xl">
                One day. One venue.
              </p>

              <h1 className="mt-5 max-w-260 font-display text-[clamp(5rem,12vw,12rem)] uppercase leading-[0.75] tracking-[-0.065em]">
                Find
                <br />
                The
                <br />
                <span className="text-white/30">Scene.</span>
              </h1>
            </div>

            <div className="lg:col-span-4">
              <p className="max-w-md text-sm leading-7 text-white/50 md:text-base">
                TSE Live comes together at Barizi Resort, Nairobi — a
                one-day meeting point for fashion, creativity, community,
                music and everything that makes the TSE experience.
              </p>

              <Link
                href="#venue"
                className="group mt-8 inline-flex items-center gap-4"
              >
                <span className="text-[9px] uppercase tracking-[0.25em] text-white/55 transition-colors group-hover:text-white">
                  Explore the venue
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          VENUE
      ========================================================= */}
      <section
        id="venue"
        className="bg-tse-black px-6 py-16 text-tse-paper md:px-12 md:py-24 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-360">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            {/* IMAGE */}
            <div className="lg:col-span-7">
              <div className="group relative aspect-4/3 overflow-hidden border border-white/10 bg-[#10100f] md:aspect-[16/10]">
                <Image
                  src="/images/pool1.jpg"
                  alt="The Styled Edit Live at Barizi Resort"
                  fill
                  className="object-cover grayscale transition-all duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/10 to-black/10" />

                <div className="absolute left-5 top-5 md:left-7 md:top-7">
                  <p className="text-[8px] uppercase tracking-[0.3em] text-white/55">
                    TSE LIVE // 01
                  </p>
                </div>

                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between md:bottom-7 md:left-7 md:right-7">
                  <div>
                    <p className="text-[8px] uppercase tracking-[0.25em] text-white/50">
                      The venue
                    </p>

                    <p className="mt-2 font-display text-3xl uppercase leading-none tracking-[-0.03em] text-white md:text-4xl">
                      Barizi Resort
                    </p>
                  </div>

                  <MapPin
                    size={22}
                    strokeWidth={1.2}
                    className="text-white"
                  />
                </div>
              </div>
            </div>

            {/* VENUE INFORMATION */}
            <div className="flex flex-col justify-between lg:col-span-4 lg:col-start-9">
              <div>
                <p className="tse-eyebrow text-white/30">
                  The venue
                </p>

                <h2 className="mt-6 font-display text-[clamp(4rem,7vw,7rem)] uppercase leading-[0.78] tracking-[-0.06em]">
                  Meet Us
                  <br />
                  At
                  <br />
                  <span className="text-white/30">Barizi.</span>
                </h2>

                <p className="mt-8 max-w-md text-sm leading-7 text-white/50">
                  Barizi Resort is the home of TSE Live — giving us room for
                  fashion, creativity, poolside moments, music and everything
                  in between.
                </p>
              </div>

              {/* ADDRESS */}
              <div className="mt-12 border-t border-white/10 pt-6">
                <div className="flex items-start gap-4">
                  <MapPin
                    size={18}
                    strokeWidth={1.3}
                    className="mt-0.5 text-tse-accent"
                  />

                  <div>
                    <p className="tse-label text-white/30">
                      Address
                    </p>

                    <p className="mt-2 text-sm uppercase tracking-[0.08em]">
                      Barizi Resort
                    </p>

                    <p className="mt-1 text-sm leading-6 text-white/45">
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              NAVIGATION ACTIONS
          ===================================================== */}
          <div className="mt-10 grid gap-3 sm:flex sm:flex-wrap">
            {/* GOOGLE MAPS */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-between gap-10 border border-white/20 bg-tse-paper px-6 py-4 text-[9px] uppercase tracking-[0.22em] text-tse-black transition-all duration-300 hover:border-tse-accent hover:bg-tse-accent"
            >
              <span className="flex items-center gap-3">
                <Navigation size={15} strokeWidth={1.3} />
                Get Directions
              </span>
            </a>

            {/* WHATSAPP */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-between gap-10 border border-white/20 px-6 py-4 text-[9px] uppercase tracking-[0.22em] text-white transition-all duration-300 hover:border-tse-accent hover:bg-tse-accent hover:text-tse-black"
            >
              <span className="flex items-center gap-3">
                <MessageCircle size={15} strokeWidth={1.3} />
                Need Directions? WhatsApp Us
              </span>
            </a>
          </div>

          <p className="mt-4 text-[8px] uppercase tracking-[0.22em] text-white/20">
            Prefer to ask? Our team can help you find the venue.
          </p>
        </div>
      </section>

      {/* =========================================================
          EVENT DETAILS
      ========================================================= */}
      <section className="bg-tse-black px-6 pb-20 text-tse-paper md:px-12 md:pb-28 lg:px-16">
        <div className="mx-auto max-w-360">
          <div className="grid border-y border-white/10 md:grid-cols-3">
            {/* DATE */}
            <div className="border-b border-white/10 p-7 md:border-b-0 md:border-r md:p-9">
              <CalendarDays
                size={20}
                strokeWidth={1.3}
                className="text-tse-accent"
              />

              <p className="mt-8 tse-label text-white/30">
                Event date
              </p>

              <h3 className="mt-3 font-display text-4xl uppercase leading-none tracking-[-0.04em]">
                30
                <br />
                October
              </h3>

              <p className="mt-5 text-sm leading-6 text-white/40">
                One day only. Come ready to experience the full TSE Live
                programme.
              </p>
            </div>

            {/* LOCATION */}
            <div className="border-b border-white/10 p-7 md:border-b-0 md:border-r md:p-9">
              <MapPin
                size={20}
                strokeWidth={1.3}
                className="text-tse-accent"
              />

              <p className="mt-8 tse-label text-white/30">
                Location
              </p>

              <h3 className="mt-3 font-display text-4xl uppercase leading-none tracking-[-0.04em]">
                Barizi
                <br />
                Resort
              </h3>

              <p className="mt-5 text-sm leading-6 text-white/40">
                Nairobi, Kenya
              </p>
            </div>

            {/* ARRIVAL */}
            <div className="p-7 md:p-9">
              <Navigation
                size={20}
                strokeWidth={1.3}
                className="text-tse-accent"
              />

              <p className="mt-8 tse-label text-white/30">
                Arrival
              </p>

              <h3 className="mt-3 font-display text-4xl uppercase leading-none tracking-[-0.04em]">
                Plan
                <br />
                Ahead.
              </h3>

              <p className="mt-5 text-sm leading-6 text-white/40">
                Detailed arrival information will be shared with ticket
                holders closer to the event.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          GETTING THERE
      ========================================================= */}
      <section className="border-t border-white/10 bg-tse-black px-6 py-20 text-tse-paper md:px-12 md:py-28 lg:px-16">
        <div className="mx-auto max-w-360">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            {/* TITLE */}
            <div className="lg:col-span-4">
              <p className="tse-eyebrow text-white/30">
                Getting there
              </p>

              <h2 className="mt-6 font-display text-[clamp(4rem,7vw,7rem)] uppercase leading-[0.78] tracking-[-0.06em]">
                Make
                <br />
                Your
                <br />
                <span className="text-white/30">Way.</span>
              </h2>
            </div>

            {/* OPTIONS */}
            <div className="lg:col-span-7 lg:col-start-6">
              <div className="grid border-y border-white/10 md:grid-cols-2">
                {/* CAR */}
                <div className="border-b border-white/10 p-7 md:border-b-0 md:border-r md:p-9">
                  <Car
                    size={20}
                    strokeWidth={1.3}
                    className="text-tse-accent"
                  />

                  <p className="mt-8 tse-label text-white/30">
                    By car
                  </p>

                  <h3 className="mt-3 font-display text-4xl uppercase leading-none tracking-[-0.04em]">
                    Drive
                    <br />
                    In.
                  </h3>

                  <p className="mt-5 max-w-xs text-sm leading-6 text-white/40">
                    Search for Barizi Resort, Nairobi using your preferred
                    navigation app.
                  </p>

                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-7 inline-flex items-center gap-3 border-b border-white/20 pb-2 text-[8px] uppercase tracking-[0.22em] text-white/60 transition-colors hover:border-tse-accent hover:text-white"
                  >
                    Open directions

                  </a>
                </div>

                {/* WHATSAPP */}
                <div className="p-7 md:p-9">
                  <MessageCircle
                    size={20}
                    strokeWidth={1.3}
                    className="text-tse-accent"
                  />

                  <p className="mt-8 tse-label text-white/30">
                    Need help?
                  </p>

                  <h3 className="mt-3 font-display text-4xl uppercase leading-none tracking-[-0.04em]">
                    Ask
                    <br />
                    Us.
                  </h3>

                  <p className="mt-5 max-w-xs text-sm leading-6 text-white/40">
                    Not sure how to get there? Message the TSE Live team and
                    we&apos;ll help you find the venue.
                  </p>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-7 inline-flex items-center gap-3 border-b border-white/20 pb-2 text-[8px] uppercase tracking-[0.22em] text-white/60 transition-colors hover:border-tse-accent hover:text-white"
                  >
                    WhatsApp the team

      
                  </a>
                </div>
              </div>

              {/* ARRIVAL NOTE */}
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

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="bg-tse-black px-6 py-24 md:px-12 md:py-36 lg:px-16">
        <div className="mx-auto max-w-360">
          <div className="border-t border-white/10 pt-10 md:pt-14">
            <div className="grid gap-12 md:grid-cols-12 md:items-center">
              <div className="md:col-span-7">
                <p className="tse-eyebrow text-white/30">
                  TSE LIVE // 30.10.26
                </p>

                <h2 className="mt-6 font-display text-[clamp(5rem,11vw,11rem)] uppercase leading-[0.74] tracking-[-0.065em]">
                  Be
                  <br />
                  <span className="text-white/30">There.</span>
                </h2>
              </div>

              <div className="md:col-span-4 md:col-start-9">
                <p className="max-w-sm text-sm leading-7 text-white/40">
                  One day. One venue. A full day of fashion, creativity,
                  community, music and everything TSE Live.
                </p>

                <Link
                  href="/tickets"
                  className="group mt-7 flex w-full items-center justify-between border border-white/20 px-6 py-5 text-[9px] font-semibold uppercase tracking-[0.22em] transition-all duration-300 hover:border-tse-accent hover:bg-tse-accent hover:text-tse-black md:w-auto"
                >
                  <span>Get Your Ticket</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
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