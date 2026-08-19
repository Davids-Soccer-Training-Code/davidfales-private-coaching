import {
  BOOKING_URL,
  defaultTextTemplate,
  buildSmsHref,
} from "@/app/lib/contact";

const chips = [
  "7 levels",
  "8 tests",
  "Notes every session",
  "Reports every 6 sessions",
  "Goals with check-ins",
  "One app for all of it",
];

export default function ExtraHourHero() {
  const smsHref = buildSmsHref(defaultTextTemplate);

  return (
    <section className="relative overflow-hidden bg-slate-900 text-white">
      {/* Ambient emerald glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-32 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-40 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl"
      />

      <div className="relative container mx-auto max-w-5xl px-6 py-20 md:py-28">
        <p className="text-emerald-400 font-bold tracking-[0.25em] text-xs md:text-sm uppercase mb-6">
          What makes us different
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95]">
          THE
          <br />
          EXTRA HOUR
        </h1>

        <p className="mt-8 text-xl md:text-3xl font-bold text-emerald-300 leading-snug max-w-3xl">
          The session may be one hour. The development system is not.
        </p>

        <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl">
          Private training should not be one hour of drills followed by six days
          of guessing. At David’s Soccer Training, every session sits inside a
          larger development system. We measure. We document. We set goals. We
          communicate. We track progress. Then we use all of it to decide what
          the player needs next.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href={smsHref}
            className="inline-flex items-center justify-center bg-emerald-500 text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-400 transition-colors shadow-xl shadow-emerald-500/20"
          >
            Text Coach David
          </a>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center bg-transparent text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-white/40 hover:bg-white/10 transition-colors"
          >
            Book a session
          </a>
        </div>

        <div className="mt-12 flex flex-wrap gap-2.5">
          {chips.map((chip) => (
            <span
              key={chip}
              className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-200"
            >
              {chip}
            </span>
          ))}
        </div>

        <p className="mt-12 border-l-4 border-emerald-400 pl-6 text-lg md:text-xl font-semibold text-white/90 max-w-3xl leading-relaxed">
          The difference is not that we say we are better. It is that we can
          show you the work behind the development.
        </p>
      </div>
    </section>
  );
}
