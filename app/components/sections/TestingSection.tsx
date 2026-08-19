import Link from "next/link";

type Test = {
  icon: string;
  title: string;
  measures: string;
  records: string[];
  format: string;
};

const tests: Test[] = [
  {
    icon: "🔵",
    title: "Juggling",
    measures:
      "Touch quality, rhythm, and how comfortable a player is on the ball with either foot.",
    records: [
      "Best juggles, any surface and feet only",
      "Body-part challenge",
      "Speed touches in 3 minutes",
      "14-in-14 reps and the weak-foot ladder",
    ],
    format:
      "Count challenges get 4 attempts and the best one counts. Timed challenges get a 10-minute window, and the highest clean attempt counts.",
  },
  {
    icon: "🔄",
    title: "Dribbling",
    measures:
      "Close control, turning, and how much speed a player keeps with the ball at their feet.",
    records: [
      "Figure-8 loops",
      "Cross-dribble loops",
      "Obstacle shuttle score",
    ],
    format:
      "Every set is one minute, run separately on the strong foot, the weak foot, and both. The obstacle course runs a cone weave, pole cross, skill-move gates, hurdles, and a minefield out to a turn cone and back — with deductions for touching equipment or using the wrong foot.",
  },
  {
    icon: "🎯",
    title: "Passing",
    measures:
      "Accuracy, weight of pass, and whether a player can repeat it under a clock.",
    records: [
      "Gate passes",
      "Passes into a colour mini-goal",
      "Read-the-colour passes",
      "Passes through a 2-yard gate",
    ],
    format:
      "One minute per foot. The harder versions add a decision before the pass, so it is never just technique in isolation.",
  },
  {
    icon: "💥",
    title: "Power",
    measures: "Shot speed — the actual number, on both feet.",
    records: ["4 strong-foot attempts", "4 weak-foot attempts"],
    format:
      "The best attempt on each foot counts, and both feet have to clear the standard. A big strong foot does not cover for a weak one.",
  },
  {
    icon: "📏",
    title: "Distance",
    measures: "How far a player can strike a ball cleanly through the air.",
    records: ["4 strong-foot attempts", "4 weak-foot attempts"],
    format:
      "The ball has to be struck in the air and is measured where it first lands, inside a 9-yard alley. Balls that finish outside the alley take a deduction, so distance never comes at the cost of accuracy.",
  },
  {
    icon: "✨",
    title: "Skill Moves",
    measures:
      "How many moves a player owns, how many they can chain, and whether they can produce them on demand.",
    records: [
      "Different moves executed",
      "Combos executed",
      "Live application percentage",
      "The specific move names",
    ],
    format:
      "Live application means the coach calls a move or a combo and the player performs it on command — which is the difference between knowing a move and having one.",
  },
  {
    icon: "⚽",
    title: "Shooting Accuracy",
    measures: "Whether a player can actually hit the corners on purpose.",
    records: [
      "Bottom corners from inside the box",
      "Bottom corners from the top of the 18",
      "All four corners",
      "The same tests off a moving ball",
    ],
    format:
      "Ball counts are fixed per drill so the score always means the same thing. Distance goes up, the ball starts moving, and the target shrinks to all four corners as the levels climb.",
  },
  {
    icon: "🪄",
    title: "First Touch",
    measures:
      "Receiving and killing the ball into a small box, from the ground and out of the air.",
    records: [
      "Ground into a 5x5 box — distance reached",
      "Ground into a 3x3 box, one touch",
      "Aerial into a 3x3 box",
      "Aerial into a 3x3 box, one touch",
    ],
    format:
      "It runs as a ladder: start at 5 yards, move a yard farther after a clean rep and a yard closer after a miss, for 5 minutes. We record how far they got.",
  },
];

const athleticTests = [
  {
    icon: "⚡",
    title: "5-10-5 Agility",
    desc: "Change of direction and body control over a short shuttle.",
  },
  {
    icon: "🦵",
    title: "Single Leg Hop",
    desc: "Balance, stability, and single-leg power — often where a weak side shows up first.",
  },
];

const cycle = [
  {
    step: "1",
    title: "Baseline",
    desc: "The full test battery at the start, so we know exactly where we are beginning.",
  },
  {
    step: "2",
    title: "Training focus",
    desc: "The numbers point at a weak spot, and that becomes what we actually train.",
  },
  {
    step: "3",
    title: "Retest",
    desc: "Same tests, same setup, every 6th session. The comparison is honest because nothing changed but the player.",
  },
  {
    step: "4",
    title: "Next step",
    desc: "The new numbers decide the next focus. Then it starts again.",
  },
];

export default function TestingSection() {
  return (
    <section
      id="testing"
      className="py-20 px-6 bg-linear-to-b from-emerald-50 to-emerald-100"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Testing &amp; Data
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We do not guess. Every player is tested at the start and again every
            6th session — run the same way every time, so the numbers are
            actually comparable.
          </p>
          <p className="text-base text-gray-600 mt-3 max-w-3xl mx-auto">
            Results feed the player’s stats, their level in each individual
            test, and their overall rank. That is how we find the gap worth
            training next instead of guessing at it.
          </p>
          <p className="mt-5">
            <Link
              href="/the-extra-hour"
              className="inline-flex items-center gap-2 text-emerald-700 font-bold hover:text-emerald-800 transition-colors"
            >
              See how testing fits into The Extra Hour, our full development
              system
              <span aria-hidden="true">→</span>
            </Link>
          </p>
        </div>

        {/* The eight tests */}
        <div className="mt-14">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              The eight tests
            </h3>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Every one of these has a fixed standard at each level, and a
              player has to pass all eight to rank up.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {tests.map((test) => (
              <div
                key={test.title}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-emerald-200 flex flex-col"
              >
                <div className="flex items-start mb-4">
                  <div className="text-5xl mr-4 shrink-0">{test.icon}</div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">
                      {test.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {test.measures}
                    </p>
                  </div>
                </div>

                <p className="text-xs font-bold uppercase tracking-wide text-emerald-700 mb-2">
                  What the coach records
                </p>
                <ul className="space-y-1.5 pb-2">
                  {test.records.map((record) => (
                    <li key={record} className="flex items-start text-gray-700">
                      <span className="text-emerald-600 mr-2 leading-6">✓</span>
                      <span>{record}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-auto pt-4 text-sm text-gray-600 leading-relaxed border-t border-emerald-100">
                  {test.format}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Athletic benchmarks */}
        <div className="mt-12 bg-white rounded-3xl shadow-md border border-emerald-200 p-8 md:p-10">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            Athletic benchmarks, when they are useful
          </h3>
          <p className="mt-3 text-gray-600 max-w-3xl">
            Alongside the eight, we can run athletic tests for players whose
            limit is physical rather than technical.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-5">
            {athleticTests.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-6"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="font-bold text-gray-900">{item.title}</p>
                <p className="mt-1.5 text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-gray-700">
            <span className="font-bold text-emerald-700">
              Custom tests are available too
            </span>{" "}
            — if a player has a specific goal or a specific problem, we can build
            an assessment around it.
          </p>
        </div>

        {/* How the cycle works */}
        <div className="mt-14">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              How the testing cycle works
            </h3>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Testing is not the training. It is the thing that tells us what
              the training should be.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-5">
            {cycle.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="h-full bg-white rounded-2xl border-2 border-emerald-200 shadow-md p-6">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-emerald-600 text-white font-bold">
                    {item.step}
                  </span>
                  <p className="mt-3 text-xl font-bold text-gray-900">
                    {item.title}
                  </p>
                  <p className="mt-2 text-gray-600 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
                {index < cycle.length - 1 && (
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

          <div className="mt-8 rounded-2xl bg-white border border-emerald-200 shadow-sm p-6 md:p-8">
            <p className="font-bold text-gray-900 text-lg">
              Lighter checks in between
            </p>
            <p className="mt-2 text-gray-700 leading-relaxed">
              Juggling and skill moves are quick enough to fit into a warmup, so
              we practice them often and officially record them every couple of
              weeks. The bigger benchmark tests stay at the checkpoints — that
              is what keeps them meaningful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
