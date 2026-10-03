import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const marketCategories = [
  {
    number: "01",
    name: "Thrift & Vintage",
    category: "THE FIND",
    description:
      "Curated thrift, vintage pieces and unexpected finds for people who like their style with a story.",
    tags: ["Vintage", "Thrift", "Archive"],
  },
  {
    number: "02",
    name: "Designers & Makers",
    category: "THE MAKER",
    description:
      "Independent designers, reworked pieces and handmade fashion created by the people shaping the next wave.",
    tags: ["Designers", "Handmade", "Reworked"],
  },
  {
    number: "03",
    name: "Accessories",
    category: "THE DETAIL",
    description:
      "Jewellery, bags and statement pieces that take a look somewhere completely different.",
    tags: ["Jewellery", "Bags", "Statement"],
  },
  {
    number: "04",
    name: "Beauty",
    category: "THE FINISH",
    description:
      "Makeup, nails and lashes bringing the finishing touches to the looks moving through TSE Live.",
    tags: ["Makeup", "Nails", "Lashes"],
  },
  {
    number: "05",
    name: "Creative Brands",
    category: "THE CULTURE",
    description:
      "Independent creative businesses, artists and makers bringing their world into the TSE market.",
    tags: ["Creative", "Local", "Independent"],
  },
  {
    number: "06",
    name: "Lifestyle",
    category: "THE LIFE",
    description:
      "Objects, experiences and ideas that extend TSE beyond the wardrobe and into everyday life.",
    tags: ["Lifestyle", "Culture", "Experience"],
  },
];

const marketFlow = [
  "SELL",
  "SHOWCASE",
  "CREATE",
  "COLLABORATE",
  "CONNECT",
  "GROW",
];

export default function VendorsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="bg-black px-6 pb-20 pt-32 text-white md:px-12 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            <p className="text-[9px] uppercase tracking-[0.35em] text-white/35">
              TSE LIVE // THE MARKET
            </p>

            <span className="hidden text-[9px] uppercase tracking-[0.25em] text-white/25 sm:block">
              30.10.26 / NAIROBI
            </span>
          </div>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_360px] lg:items-end">
            <h1 className="max-w-6xl font-display text-[clamp(4rem,11vw,9rem)] uppercase leading-[0.78] tracking-[-0.06em]">
              Meet
              <br />
              The
              <br />
              Market.
            </h1>

            <div className="max-w-sm pb-2">
              <p className="text-xs uppercase leading-6 tracking-[0.12em] text-white/45">
                A curated mix of thrift, fashion, beauty, design and
                independent creativity — all coming together under one roof.
              </p>

              <Link
                href="/tickets"
                className="group mt-8 inline-flex items-center justify-between gap-6 border border-white/20 px-6 py-4 text-[9px] font-bold uppercase tracking-[0.25em] transition duration-300 hover:bg-white hover:text-black"
              >
                <span>Get Your Ticket</span>

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6 text-[8px] uppercase tracking-[0.25em] text-white/30">
            <span>Thrift</span>
            <span>Style</span>
            <span>Beauty</span>
            <span>Design</span>
            <span>Culture</span>
            <span>Community</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="border-y border-white/10 px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[220px_1fr]">
          <p className="text-[9px] uppercase tracking-[0.3em] text-white/35">
            The Market
          </p>

          <div className="max-w-5xl">
            <p className="text-2xl uppercase leading-[1.1] tracking-[-0.04em] text-white md:text-4xl lg:text-5xl">
              Come looking for one thing.
              <br />
              Leave with something
              <br />
              completely unexpected.
            </p>

            <p className="mt-8 max-w-2xl text-sm leading-7 text-white/45">
              The TSE Market brings together people making, finding, styling
              and selling things worth discovering. Shop curated pieces,
              discover independent brands, meet creatives and find the details
              that make your look yours.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          MARKET FLOW
      ===================================================== */}

      <section className="border-b border-white/10 px-6 py-10 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap">
            {marketFlow.map((item, index) => (
              <div
                key={item}
                className="flex items-center border-b border-white/10 py-5 pr-8 md:border-b-0 md:pr-10"
              >
                <span className="mr-3 text-[8px] tracking-[0.2em] text-white/25">
                  0{index + 1}
                </span>

                <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/55">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          MARKET CATEGORIES
      ===================================================== */}

      <section className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between border-b border-white/10 pb-6">
            <div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/35">
                What&apos;s Inside
              </p>

              <h2 className="mt-3 text-3xl uppercase tracking-[-0.04em] text-white md:text-5xl">
                The Edit
              </h2>
            </div>

            <span className="hidden text-[9px] uppercase tracking-[0.2em] text-white/30 sm:block">
              06 Market Categories
            </span>
          </div>

          <div className="grid border-l border-t border-white/10 md:grid-cols-2 lg:grid-cols-3">
            {marketCategories.map((item) => (
              <article
                key={item.number}
                className="group min-h-[22rem] border-b border-r border-white/10 p-6 transition-colors duration-500 hover:bg-white hover:text-black md:p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="text-[9px] tracking-[0.2em] text-white/30 transition-colors duration-300 group-hover:text-black/30">
                    {item.number}
                  </span>

                  <span className="text-[9px] uppercase tracking-[0.18em] text-white/30 transition-colors duration-300 group-hover:text-black/30">
                    {item.category}
                  </span>
                </div>

                <div className="mt-24">
                  <h3 className="max-w-sm text-3xl uppercase leading-[0.95] tracking-[-0.04em] text-white transition-colors duration-300 group-hover:text-black">
                    {item.name}
                  </h3>

                  <p className="mt-5 max-w-sm text-sm leading-6 text-white/45 transition-colors duration-300 group-hover:text-black/45">
                    {item.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-white/10 px-3 py-2 text-[8px] uppercase tracking-[0.15em] text-white/40 transition-colors duration-300 group-hover:border-black/10 group-hover:text-black/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          MARKET STATEMENT
      ===================================================== */}

      <section className="border-y border-white/10 px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[220px_1fr]">
            <p className="text-[9px] uppercase tracking-[0.3em] text-white/30">
              More Than Shopping
            </p>

            <div>
              <h2 className="max-w-6xl font-display text-[clamp(3rem,7vw,7rem)] uppercase leading-[0.82] tracking-[-0.055em]">
                Find it.
                <br />
                Wear it.
                <br />
                Make it
                <br />
                yours.
              </h2>

              <p className="mt-10 max-w-xl text-sm leading-7 text-white/45">
                The market is part of the experience — not a separate stop.
                Move through the space, discover something new, build a look,
                meet the person behind the brand and keep the day moving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          VENDOR CTA
      ===================================================== */}

      <section className="bg-black px-6 py-20 text-white md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_400px] lg:items-center">
            <div>
              <p className="text-[9px] uppercase tracking-[0.35em] text-white/30">
                Want In?
              </p>

              <h2 className="mt-6 max-w-5xl font-display text-[clamp(3.5rem,8vw,7rem)] uppercase leading-[0.8] tracking-[-0.055em]">
                Bring
                <br />
                Your
                <br />
                Edit.
              </h2>
            </div>

            <div>
              <p className="text-sm leading-7 text-white/45">
                Are you a thrift seller, designer, stylist, beauty artist,
                maker or creative business? Bring what you do to TSE Live and
                become part of the market, the content and the community.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Link
                  href="/tickets"
                  className="group inline-flex items-center gap-4 border border-white/20 px-7 py-5 text-[9px] font-bold uppercase tracking-[0.25em] transition duration-300 hover:bg-white hover:text-black"
                >
                  <span>Get A Vendor Ticket</span>

                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>

                <a
                  href="https://wa.me/254110277215?text=Hi%20TSE%2C%20I%27d%20like%20to%20ask%20about%20becoming%20a%20vendor%20at%20TSE%20Live."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/40 transition-colors duration-300 hover:text-white"
                >
                  Or ask us on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="bg-black px-6 pb-12 text-white md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 border-t border-white/10 pt-8 md:flex-row md:items-end">
          <div>
            <p className="font-display text-3xl tracking-[-0.04em]">
              TSE / LIVE
            </p>

            <p className="mt-2 text-[8px] uppercase tracking-[0.25em] text-white/30">
              The Styled Edit Live
            </p>
          </div>

          <div className="flex flex-col gap-2 md:items-end">
            <p className="text-[8px] uppercase tracking-[0.2em] text-white/30">
              30.10.26
            </p>

            <p className="text-[8px] uppercase tracking-[0.2em] text-white/30">
              Nairobi, Kenya
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}