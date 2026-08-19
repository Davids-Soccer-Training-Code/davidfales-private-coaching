type Pillar = {
  number: string;
  icon: string;
  title: string;
  hook: string;
  body: string;
};

const pillars: Pillar[] = [
  {
    number: "01",
    icon: "📊",
    title: "Data + Stats",
    hook: "We do not guess. We measure.",
    body: "Players are tested at the start and again every 6th session. Objective numbers show what is improving, what is stalling, and where the next training block should go.",
  },
  {
    number: "02",
    icon: "🏆",
    title: "Rank + Level-Up System",
    hook: "Progress becomes something players can chase.",
    body: "Testing feeds the player’s stats and rank progression. Players can see concrete milestones, level up through challenges, and understand that improvement is earned through measurable work.",
  },
  {
    number: "03",
    icon: "📝",
    title: "Deliberate Feedback",
    hook: "Every session leaves a record.",
    body: "Coach’s Notes capture what was trained, what clicked, what did not, and what should happen next. Players also receive an initial Baseline Snapshot and a full Progress Report every 6 sessions.",
  },
  {
    number: "04",
    icon: "🎯",
    title: "Period Goals",
    hook: "Improvement needs a target.",
    body: "Players work through focused goals over defined periods of time with clear steps and regular check-ins. The goal is never just “get better.” The player should know exactly what they are working toward.",
  },
  {
    number: "05",
    icon: "📱",
    title: "Player Development App",
    hook: "The work becomes visible.",
    body: "Stats, rank progress, reports, goals, notes, and development history live together online. Players and parents can see the journey instead of relying on memory or vague promises.",
  },
  {
    number: "06",
    icon: "💬",
    title: "Constant Communication",
    hook: "Private training stays connected to the real player.",
    body: "We stay in contact with parents and, when appropriate, the player’s team coach. We ask what they are seeing, what the player needs, and what should be emphasized so private training supports the player’s actual game and team environment.",
  },
];

export default function SixPillars() {
  return (
    <section id="pillars" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Six things that happen around every session
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The hour on the field is the part you see. These six are the part
            that makes the hour add up to something.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="relative bg-linear-to-br from-emerald-50 to-white p-8 rounded-2xl shadow-lg border-2 border-emerald-100 hover:shadow-2xl transition-shadow duration-300"
            >
              <span
                aria-hidden="true"
                className="absolute top-5 right-6 text-6xl font-black text-emerald-100 leading-none select-none"
              >
                {pillar.number}
              </span>

              <div className="relative">
                <div className="text-4xl mb-4">{pillar.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-lg font-bold text-emerald-700">
                  {pillar.hook}
                </p>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  {pillar.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
