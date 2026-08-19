import Link from "next/link";

const vendors = [
  {
    number: "01",
    name: "TSE Archive",
    category: "Curated Thrift",
    description:
      "A carefully selected edit of vintage and contemporary pieces for the fashion-forward.",
    tags: ["Vintage", "Streetwear", "Designer"],
  },
  {
    number: "02",
    name: "The Vintage Room",
    category: "Vintage Fashion",
    description:
      "Rare finds, timeless silhouettes and pieces with stories worth carrying forward.",
    tags: ["Vintage", "Archive", "Y2K"],
  },
  {
    number: "03",
    name: "Made Local",
    category: "Artisan",
    description:
      "Independent Kenyan creatives bringing handmade objects, accessories and art into the TSE world.",
    tags: ["Handmade", "Local", "Craft"],
  },
  {
    number: "04",
    name: "Second Story",
    category: "Thrift & Rework",
    description:
      "Pre-loved fashion transformed into fresh expressions of personal style.",
    tags: ["Reworked", "Upcycled", "Thrift"],
  },
  {
    number: "05",
    name: "The Accessory Edit",
    category: "Accessories",
    description:
      "Statement pieces designed to finish the look and make the outfit unmistakably yours.",
    tags: ["Jewellery", "Bags", "Accessories"],
  },
  {
    number: "06",
    name: "Creative Market",
    category: "Independent Creatives",
    description:
      "A rotating selection of emerging designers, makers and creative businesses.",
    tags: ["Designers", "Creators", "Independent"],
  },
];

export default function VendorsPage() {
  return (
    <main className="min-h-screen bg-[#f4f1ea] text-black">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="bg-black px-6 pb-20 pt-32 text-white md:px-12 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <p className="text-[9px] uppercase tracking-[0.35em] text-white/35">
            TSE LIVE // THE MARKET
          </p>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_360px] lg:items-end">
            <h1 className="max-w-6xl font-display text-[clamp(4rem,11vw,9rem)] uppercase leading-[0.78] tracking-[-0.06em]">
              Meet
              <br />
              The
              <br />
              Vendors.
            </h1>

            <div className="max-w-sm">
              <p className="text-xs uppercase leading-6 tracking-[0.12em] text-white/45">
                Independent sellers, designers, creatives and
                collectors coming together for one unforgettable
                fashion and culture experience.
              </p>

              <Link
                href="/tickets"
                className="mt-8 inline-flex border border-white/20 px-6 py-4 text-[9px] font-bold uppercase tracking-[0.25em] transition hover:bg-white hover:text-black"
              >
                Get Your Ticket →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="border-b border-black/10 px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[220px_1fr]">
          <p className="text-[9px] uppercase tracking-[0.3em] text-black/35">
            01 // The Market
          </p>

          <div className="max-w-4xl">
            <p className="text-2xl uppercase leading-[1.15] tracking-[-0.04em] md:text-4xl">
              TSE Live is more than an event. It is a meeting
              point for people who believe style should be
              discovered, shared and experienced.
            </p>

            <p className="mt-8 max-w-2xl text-sm leading-7 text-black/45">
              Explore curated thrift, vintage fashion, independent
              designers, handmade pieces and creative businesses
              from across Nairobi's fashion community.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          VENDOR GRID
      ===================================================== */}

      <section className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between border-b border-black/10 pb-6">
            <div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-black/35">
                02 // Featured
              </p>

              <h2 className="mt-3 text-3xl uppercase tracking-[-0.04em] md:text-5xl">
                The Edit
              </h2>
            </div>

            <span className="hidden text-[9px] uppercase tracking-[0.2em] text-black/30 sm:block">
              {vendors.length} Creatives
            </span>
          </div>

          <div className="grid border-l border-t border-black/10 md:grid-cols-2 lg:grid-cols-3">
            {vendors.map((vendor) => (
              <article
                key={vendor.number}
                className="group min-h-90 border-b border-r border-black/10 p-6 transition hover:bg-black hover:text-white md:p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="text-[9px] tracking-[0.2em] text-black/30 transition group-hover:text-white/30">
                    {vendor.number}
                  </span>

                  <span className="text-[9px] uppercase tracking-[0.18em] text-black/30 transition group-hover:text-white/30">
                    {vendor.category}
                  </span>
                </div>

                <div className="mt-24">
                  <h3 className="text-3xl uppercase tracking-[-0.04em]">
                    {vendor.name}
                  </h3>

                  <p className="mt-5 max-w-sm text-sm leading-6 text-black/45 transition group-hover:text-white/45">
                    {vendor.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {vendor.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-black/10 px-3 py-2 text-[8px] uppercase tracking-[0.15em] text-black/40 transition group-hover:border-white/10 group-hover:text-white/40"
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
          VENDOR CTA
      ===================================================== */}

      <section className="bg-black px-6 py-20 text-white md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_400px] lg:items-end">
            <div>
              <p className="text-[9px] uppercase tracking-[0.35em] text-white/30">
                03 // Want In?
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
                Are you a thrift seller, designer, stylist, artist,
                maker or creative business? TSE Live is built for
                people shaping the culture.
              </p>

              <a
                href="mailto:hello@thestyledeedit.com"
                className="mt-8 inline-flex border border-white/20 px-7 py-5 text-[9px] font-bold uppercase tracking-[0.25em] transition hover:bg-white hover:text-black"
              >
                Become A Vendor →
              </a>
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

          <p className="text-[8px] uppercase tracking-[0.2em] text-white/30">
            Nairobi, Kenya
          </p>
        </div>
      </footer>
    </main>
  );
}