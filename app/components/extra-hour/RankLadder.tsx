import Link from "next/link";

const levels = [
  { level: 1, label: "Starting level", heightClass: "h-16" },
  { level: 2, label: "Earned", heightClass: "h-24" },
  { level: 3, label: "Earned", heightClass: "h-32" },
  { level: 4, label: "Earned", heightClass: "h-40" },
  { level: 5, label: "Earned", heightClass: "h-48" },
  { level: 6, label: "Earned", heightClass: "h-56" },
  { level: 7, label: "Earned", heightClass: "h-64" },
];

const tests = [
  {
    icon: "🔵",
    name: "Juggling",
    desc: "Touch quality and comfort on the ball, both feet.",
  },
  {
    icon: "🔄",
    name: "Dribbling",
    desc: "Control, turning, and speed with the ball at their feet.",
  },
  {
    icon: "🎯",
    name: "Passing",
    desc: "Accuracy, weight, and repeatability with either foot.",
  },
  {
    icon: "💥",
    name: "Power",
    desc: "Striking output, measured on the strong foot and the weak one.",
  },
  {
    icon: "📏",
    name: "Distance",
    desc: "How far they can strike a ball cleanly through the air.",
  },
  {
    icon: "✨",
    name: "Skill Moves",
    desc: "Moves and combos, then performing them on command under pressure.",
  },
  {
    icon: "⚽",
    name: "Shooting Accuracy",
    desc: "Hitting corners from set positions and off a moving ball.",
  },
  {
    icon: "🪄",
    name: "First Touch",
    desc: "Killing the ball into a small box, on the ground and out of the air.",
  },
];

const rules = [
  {
    title: "You pass everything, or you do not rank up",
    body: "There is no averaging and no rounding up. Every category for that level has to be met, plus the session minimum behind it.",
  },
  {
    title: "Levels are earned in order",
    body: "The system stops at the first requirement a player has not met. Nobody gets placed into a level they have not proven.",
  },
  {
    title: "Each test carries its own level too",
    body: "A player can be further ahead in one test than their overall level — which is exactly how we find the gap worth training next.",
  },
];

export default function RankLadder() {
  return (
    <section id="rank" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The rank system
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Seven levels. Eight tests. One coach mission. Every player starts at
            Level 1 — everything above it is earned against fixed standards the
            app checks, not a coach’s mood on the day.
          </p>
        </div>

        {/* Ladder */}
        <div className="rounded-3xl bg-linear-to-b from-slate-50 to-emerald-50 border-2 border-emerald-100 p-6 md:p-10">
          <div className="flex items-end justify-between gap-2 md:gap-4">
            {levels.map((l) => (
              <div key={l.level} className="flex-1 min-w-0 text-center">
                <div
                  className={`${l.heightClass} rounded-t-xl ${
                    l.level === 1
                      ? "bg-slate-300"
                      : "bg-linear-to-t from-emerald-600 to-emerald-400"
                  } flex items-start justify-center pt-2 shadow-md`}
                >
                  <span className="text-white font-black text-lg md:text-2xl drop-shadow">
                    {l.level}
                  </span>
                </div>
                <p className="mt-2 hidden sm:block text-[10px] md:text-xs font-bold uppercase tracking-wide text-gray-500 leading-tight">
                  {l.label}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-3 sm:hidden text-center text-xs font-bold uppercase tracking-wide text-gray-500">
            Level 1 is where everyone starts. Levels 2–7 are earned.
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {rules.map((rule) => (
              <div
                key={rule.title}
                className="bg-white rounded-2xl p-5 border border-emerald-100 shadow-sm"
              >
                <p className="font-bold text-gray-900">{rule.title}</p>
                <p className="mt-1.5 text-gray-600 text-sm leading-relaxed">
                  {rule.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* The eight tests */}
        <div className="mt-14">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
            What gets tested
          </h3>
          <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">
            The same eight tests, run the same way every time, so the numbers
            actually mean something when we compare them six sessions later.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {tests.map((test) => (
              <div
                key={test.name}
                className="bg-linear-to-br from-emerald-50 to-white rounded-2xl p-6 border-2 border-emerald-100 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-3">{test.icon}</div>
                <p className="font-bold text-gray-900">{test.name}</p>
                <p className="mt-1.5 text-sm text-gray-600 leading-relaxed">
                  {test.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Coach Mission */}
          <div className="mt-6 rounded-2xl bg-slate-900 p-8 md:p-10 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="text-5xl shrink-0">🎖️</div>
              <div>
                <p className="text-emerald-400 font-bold tracking-widest text-xs uppercase">
                  And one more, every single level
                </p>
                <h4 className="mt-1 text-2xl md:text-3xl font-bold text-white">
                  The Coach Mission
                </h4>
                <p className="mt-3 text-slate-300 leading-relaxed">
                  Every level from 2 to 7 also requires a mission the coach
                  chooses for that specific player — physical, defensive, 1v1,
                  game IQ, scanning, confidence, focus, movement, whatever that
                  player actually needs. The tests keep the standard honest. The
                  mission keeps it personal.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/testing"
              className="inline-flex items-center gap-2 text-emerald-700 font-bold hover:text-emerald-800 transition-colors"
            >
              See the actual tests and the Player Dashboard
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
