import Link from "next/link";

type Pillar = {
  icon: string;
  title: string;
  description: string;
  points: string[];
};

type WhatWeWorkOnProps = {
  title?: string;
  subtitle?: string;
  pillars?: Pillar[];
  ctaHref?: string;
  ctaLabel?: string;
};

const defaultPillars: Pillar[] = [
  {
    icon: "⚽",
    title: "Technical, tactical & positioning",
    description:
      "Master the ball and the game — the skills that actually show up on match day.",
    points: [
      "First touch, dribbling, passing & finishing",
      "Tactical awareness & decision-making",
      "Field positioning — knowing where to be and why",
    ],
  },
  {
    icon: "🧠",
    title: "Confidence & visualization",
    description:
      "The mental side that separates good players from great ones.",
    points: [
      "Confidence on and off the ball",
      "Composure under pressure",
      "Visualization & a strong game-day mindset",
    ],
  },
  {
    icon: "🎯",
    title: "Deliberate, correct training",
    description:
      "No random drills — the right technique, repeated the right way, until it sticks.",
    points: [
      "Correct technique built deliberately",
      "One clear priority per session",
      "Focused reps that drive real improvement",
    ],
  },
];

export default function WhatWeWorkOn({
  title = "What we work on",
  subtitle = "Real, top-standard 1-on-1 development — not just kicking a ball around.",
  pillars = defaultPillars,
  ctaHref,
  ctaLabel = "See how training works",
}: WhatWeWorkOnProps) {
  return (
    <section id="what-we-work-on" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-linear-to-br from-emerald-50 to-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-emerald-100 flex flex-col"
            >
              <div className="text-5xl mb-4">{pillar.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {pillar.title}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-5">
                {pillar.description}
              </p>
              <ul className="space-y-2 mt-auto">
                {pillar.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start text-gray-700 text-sm"
                  >
                    <span className="text-emerald-600 mr-2 text-lg leading-none">
                      ✓
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {ctaHref && (
          <div className="mt-12 text-center">
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-700 transition-colors shadow-lg"
            >
              {ctaLabel}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
