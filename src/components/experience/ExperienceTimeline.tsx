"use client";

const moments = [
  {
    time: "01",
    title: "Arrive",
    description:
      "Walk in, check in and step into the world of TSE Live.",
  },
  {
    time: "02",
    title: "Explore",
    description:
      "Browse the thrift market, discover vendors and find something unexpected.",
  },
  {
    time: "03",
    title: "Style",
    description:
      "Play with your look, meet stylists and make the edit your own.",
  },
  {
    time: "04",
    title: "Create",
    description:
      "Find your angle. Capture the fit. Create something worth posting.",
  },
  {
    time: "05",
    title: "Connect",
    description:
      "Meet people, exchange ideas and become part of the TSE community.",
  },
  {
    time: "06",
    title: "Stay",
    description:
      "Music, movement, food, drinks and the energy of the night.",
  },
];

export default function ExperienceTimeline() {
  return (
    <section className="bg-[#f4f1ea] px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-[9px] uppercase tracking-[0.35em] text-black/35">
              The flow
            </p>

            <h2 className="mt-6 font-display text-6xl uppercase leading-[0.8] tracking-[-0.055em] md:text-8xl">
              Your
              <br />
              Day
              <br />
              At TSE.
            </h2>
          </div>

          <div className="border-t border-black/15">
            {moments.map((moment) => (
              <div
                key={moment.time}
                className="grid gap-6 border-b border-black/15 py-7 md:grid-cols-[70px_1fr_1fr] md:items-center"
              >
                <span className="text-[9px] tracking-[0.25em] text-black/30">
                  {moment.time}
                </span>

                <h3 className="font-display text-4xl uppercase leading-none tracking-[-0.04em]">
                  {moment.title}
                </h3>

                <p className="max-w-sm text-sm leading-6 text-black/40">
                  {moment.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
