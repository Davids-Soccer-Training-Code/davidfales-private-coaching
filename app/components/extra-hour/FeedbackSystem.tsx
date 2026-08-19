type Feedback = {
  icon: string;
  title: string;
  cadence: string;
  body: string;
  bullets: string[];
};

const feedbackTypes: Feedback[] = [
  {
    icon: "📝",
    title: "Coach’s Note",
    cadence: "Every session",
    body: "A short, useful write-up after every single session — not a checkbox, an actual record of the hour.",
    bullets: [
      "What was worked on",
      "What clicked and what did not",
      "What comes next",
    ],
  },
  {
    icon: "🧭",
    title: "Baseline Snapshot",
    cadence: "1st or 2nd session",
    body: "An early coaching read on your player. It is a starting point, not a verdict — we are honest that two hours is two hours.",
    bullets: [
      "Early strengths",
      "Early focus areas",
      "How they respond to coaching",
      "The direction of the first block",
    ],
  },
  {
    icon: "⚡",
    title: "Mini Blurbs",
    cadence: "When something stands out",
    body: "Unscheduled notes for the moments worth telling you about before the next report comes around.",
    bullets: [
      "A breakthrough moment",
      "A habit starting to form",
      "Confidence changing",
      "Something you should know now",
    ],
  },
  {
    icon: "📈",
    title: "Progress Report",
    cadence: "Every 6 sessions",
    body: "The deep one. A full coaching opinion on how your player is developing across the whole game, written by the coach who trains them.",
    bullets: [
      "Every skill area rated 1–5 with notes",
      "Overall strengths",
      "Where to keep the focus",
      "Long-term goals for the player",
    ],
  },
];

const ratedAreas = [
  { name: "First Touch", desc: "Receiving, control, setup touch" },
  { name: "Dribbling", desc: "Ball control, turns, carrying, confidence" },
  { name: "Passing Technique", desc: "Accuracy, weight, surface, consistency" },
  { name: "Shot Technique", desc: "Contact, balance, power, placement" },
  {
    name: "Vision / Recognition",
    desc: "Scanning, awareness, decision making",
  },
  {
    name: "Other Soccer Habits",
    desc: "Body shape, communication, effort, reaction after mistakes",
  },
];

const timeline = [
  {
    marker: "Session 1",
    title: "Baseline",
    desc: "Full test battery plus the Baseline Snapshot. We find out exactly where we are starting.",
  },
  {
    marker: "Sessions 2–5",
    title: "Focused training",
    desc: "One clear focus at a time, a Coach’s Note after each session, a period goal running, and mini blurbs when there is something worth sharing.",
  },
  {
    marker: "Session 6",
    title: "Retest + Progress Report",
    desc: "Same tests, same setup, new numbers — next to a full written report on what changed and why.",
  },
  {
    marker: "Then",
    title: "The next block",
    desc: "The data and the report decide the next focus. Nobody starts from zero.",
  },
];

export default function FeedbackSystem() {
  return (
    <section
      id="feedback"
      className="py-20 px-6 bg-linear-to-b from-emerald-50 to-white"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            You will never wonder how it is going
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four kinds of feedback, each with its own job. Testing data is kept
            separate from coaching opinion on purpose — the numbers are the
            numbers, and the coach’s read is the coach’s read.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {feedbackTypes.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl shadow-lg border-2 border-emerald-100 p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{item.icon}</span>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                </div>
                <span className="self-start shrink-0 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800 uppercase tracking-wide">
                  {item.cadence}
                </span>
              </div>

              <p className="mt-4 text-gray-700 leading-relaxed">{item.body}</p>

              <ul className="mt-4 space-y-1.5">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start text-gray-700">
                    <span className="text-emerald-600 mr-2 leading-6">✓</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Rated areas */}
        <div className="mt-14 bg-white rounded-3xl shadow-xl border-2 border-emerald-200 p-8 md:p-10">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            What a Progress Report actually covers
          </h3>
          <p className="mt-3 text-gray-600 max-w-3xl">
            Six areas, each rated 1–5 with written coach notes — so you are
            reading something specific about your player, not a generic
            “great job this month.”
          </p>

          <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ratedAreas.map((area) => (
              <div
                key={area.name}
                className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="font-bold text-gray-900">{area.name}</p>
                  <span className="shrink-0 text-xs font-bold text-emerald-700 bg-white border border-emerald-200 rounded-full px-2.5 py-1">
                    1–5
                  </span>
                </div>
                <p className="mt-1.5 text-sm text-gray-600">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Six-session block timeline */}
        <div className="mt-14">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
            What a six-session block looks like
          </h3>

          <div className="mt-8 grid md:grid-cols-4 gap-5">
            {timeline.map((step, index) => (
              <div key={step.marker} className="relative">
                <div className="h-full bg-white rounded-2xl border-2 border-emerald-100 shadow-md p-6">
                  <p className="text-xs font-black uppercase tracking-widest text-emerald-600">
                    {step.marker}
                  </p>
                  <p className="mt-2 text-xl font-bold text-gray-900">
                    {step.title}
                  </p>
                  <p className="mt-2 text-gray-600 leading-relaxed text-sm">
                    {step.desc}
                  </p>
                </div>
                {index < timeline.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="hidden md:block absolute top-1/2 -right-3.5 -translate-y-1/2 text-emerald-400 text-2xl font-bold"
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
