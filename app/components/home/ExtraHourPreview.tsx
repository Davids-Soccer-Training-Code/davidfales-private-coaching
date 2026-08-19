import Link from "next/link";

const pillars = [
  {
    icon: "📊",
    title: "Data + Stats",
    line: "Tested at the start and every 6th session. We measure instead of guessing.",
  },
  {
    icon: "🏆",
    title: "Rank + Level-Up",
    line: "Seven levels, eight tests, fixed standards. Progress players can chase.",
  },
  {
    icon: "📝",
    title: "Deliberate Feedback",
    line: "A coach’s note every session and a full progress report every 6.",
  },
  {
    icon: "🎯",
    title: "Period Goals",
    line: "One clear target at a time, with steps and regular check-ins.",
  },
  {
    icon: "📱",
    title: "Player App",
    line: "Stats, reports, goals, and history in one place you can open anytime.",
  },
  {
    icon: "💬",
    title: "Constant Communication",
    line: "We check in with you — and, when it helps, your player’s team coach.",
  },
];

export default function ExtraHourPreview() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-20 px-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl"
      />

      <div className="relative container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-emerald-400 font-bold tracking-[0.25em] text-xs md:text-sm uppercase mb-4">
            What makes us different
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            THE EXTRA HOUR
          </h2>
          <p className="mt-5 text-xl md:text-2xl font-bold text-emerald-300 max-w-3xl mx-auto leading-snug">
            The session may be one hour. The development system is not.
          </p>
          <p className="mt-5 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Every session sits inside a bigger system. We measure, document, set
            goals, communicate, and track progress — then use all of it to
            decide what your player needs next.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl bg-white/5 border border-white/10 p-6"
            >
              <div className="text-3xl mb-3">{pillar.icon}</div>
              <p className="font-bold text-white text-lg">{pillar.title}</p>
              <p className="mt-1.5 text-slate-300 leading-relaxed">
                {pillar.line}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/the-extra-hour"
            className="inline-flex items-center gap-2 bg-emerald-500 text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-400 transition-colors shadow-xl shadow-emerald-500/20"
          >
            See the whole system
            <span aria-hidden="true">→</span>
          </Link>
          <p className="mt-5 text-slate-400 max-w-2xl mx-auto">
            The difference is not that we say we are better. It is that we can
            show you the work behind the development.
          </p>
        </div>
      </div>
    </section>
  );
}
