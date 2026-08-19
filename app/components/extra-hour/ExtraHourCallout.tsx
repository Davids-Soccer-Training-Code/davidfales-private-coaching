import Link from "next/link";

type Point = { icon: string; title: string; body: string };

type Variant = {
  eyebrow: string;
  heading: string;
  lede: string;
  points: Point[];
  closer: string;
  ctaLabel: string;
};

const variants: Record<"training" | "pricing", Variant> = {
  training: {
    eyebrow: "What happens after the session ends",
    heading: "The hour is the part you see",
    lede: "Training this way only works because of everything wrapped around it. We test, we record, we write it down, and we put all of it somewhere you can actually look at it.",
    points: [
      {
        icon: "📊",
        title: "Tested, not guessed at",
        body: "Eight tests, run the same way at the start and every 6th session. The numbers tell us what to train next instead of us guessing.",
      },
      {
        icon: "🏆",
        title: "A level in every test",
        body: "Seven levels with fixed standards. Your player can be further ahead in one test than another — which is exactly how we find the gap worth working on.",
      },
      {
        icon: "📝",
        title: "Written down every time",
        body: "A coach’s note after every session, a baseline read at the start, and a full progress report every 6 sessions.",
      },
      {
        icon: "📱",
        title: "All of it in one app",
        body: "Stats, levels, reports, goals, and history in the Player Dashboard — open it whenever you want.",
      },
    ],
    closer:
      "The difference is not that we say we are better. It is that we can show you the work behind the development.",
    ctaLabel: "See the whole system",
  },
  pricing: {
    eyebrow: "Why we price where we do",
    heading: "You are not paying for an hour",
    lede: "Plenty of people will run your player through drills for less. What you are paying for here is everything that happens around the session — the part that turns a good hour into actual development.",
    points: [
      {
        icon: "📊",
        title: "Testing and data",
        body: "A full test battery at the start and every 6th session, recorded and compared. Almost nobody in private training does this.",
      },
      {
        icon: "📝",
        title: "Real written feedback",
        body: "A coach’s note after every session and a full progress report every 6 — written by the coach who trains your player, not a template.",
      },
      {
        icon: "🎯",
        title: "Goals and planning between sessions",
        body: "A focused goal with steps to do at home, check-ins while it is running, and next-session planning before your player shows up.",
      },
      {
        icon: "💬",
        title: "Communication that starts with us",
        body: "We check in about every two weeks — and when it helps, we talk to your player’s team coach too. You should never have to chase us for an update.",
      },
    ],
    closer:
      "Every one of those is unpaid time between sessions. That is the standard we hold our coaches to, and it is what the price reflects.",
    ctaLabel: "See exactly what you are paying for",
  },
};

export default function ExtraHourCallout({
  variant,
}: {
  variant: "training" | "pricing";
}) {
  const v = variants[variant];

  return (
    <section className="relative overflow-hidden bg-slate-900 py-20 px-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl"
      />

      <div className="relative container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-emerald-400 font-bold tracking-[0.25em] text-xs md:text-sm uppercase mb-4">
            {v.eyebrow}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            {v.heading}
          </h2>
          <p className="mt-4 text-2xl md:text-3xl font-black text-emerald-300 tracking-tight">
            THE EXTRA HOUR
          </p>
          <p className="mt-5 text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {v.lede}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {v.points.map((point) => (
            <div
              key={point.title}
              className="rounded-2xl bg-white/5 border border-white/10 p-6"
            >
              <div className="text-3xl mb-3">{point.icon}</div>
              <p className="font-bold text-white text-lg">{point.title}</p>
              <p className="mt-1.5 text-slate-300 leading-relaxed">
                {point.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/the-extra-hour"
            className="inline-flex items-center gap-2 bg-emerald-500 text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-400 transition-colors shadow-xl shadow-emerald-500/20"
          >
            {v.ctaLabel}
            <span aria-hidden="true">→</span>
          </Link>
          <p className="mt-5 text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {v.closer}
          </p>
        </div>
      </div>
    </section>
  );
}
