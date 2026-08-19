type Piece = {
  title: string;
  cadence: string;
  sessionOnly: string;
  extraHour: string;
  player: string;
  parent: string;
  coach: string;
};

const pieces: Piece[] = [
  {
    title: "Testing + Stats",
    cadence: "Start + every 6th session",
    sessionOnly: "Development is judged mainly by observation.",
    extraHour:
      "Objective testing creates repeatable data that can be compared over time.",
    player: "Can see measurable gains and weak areas.",
    parent: "Gets evidence that training is producing change.",
    coach: "Gets objective direction for planning.",
  },
  {
    title: "Rank + Level-Up System",
    cadence: "Ongoing",
    sessionOnly: "No structured progression outside the drill itself.",
    extraHour:
      "Stats feed a rank and challenge system with clear standards to chase.",
    player: "Gets motivation, milestones, and visible progression.",
    parent: "Can see that progress is earned and tracked.",
    coach: "Gets a framework for raising expectations.",
  },
  {
    title: "Coach’s Note",
    cadence: "Every session",
    sessionOnly: "The session ends when the player leaves the field.",
    extraHour:
      "A short note records what was trained, what clicked, what did not, and what comes next.",
    player: "Remembers the lesson and next focus.",
    parent: "Can see what actually happened in training.",
    coach: "Creates continuity from one session to the next.",
  },
  {
    title: "Baseline Snapshot",
    cadence: "1st or 2nd session",
    sessionOnly: "No formal starting point beyond first impressions.",
    extraHour:
      "An early coaching read captures strengths, focus areas, learning style, and starting direction.",
    player: "Understands where the journey begins.",
    parent: "Gets a clear initial picture of the player.",
    coach: "Creates an intentional first training block.",
  },
  {
    title: "Progress Report",
    cadence: "Every 6 sessions",
    sessionOnly: "Progress may be discussed informally.",
    extraHour:
      "A structured report reviews first touch, dribbling, passing, shooting, vision, habits, strengths, focus areas, and long-term goals.",
    player: "Sees development beyond a single drill.",
    parent: "Receives a meaningful long-term update.",
    coach: "Forces reflection and next-block planning.",
  },
  {
    title: "Period Goals",
    cadence: "Active goal + check-ins",
    sessionOnly: "Goals are broad or informal.",
    extraHour:
      "One focused goal is given a time period, clear steps, and regular check-ins.",
    player: "Knows exactly what to work toward.",
    parent: "Can understand the purpose behind the sessions.",
    coach: "Keeps training focused instead of random.",
  },
  {
    title: "Parent Communication",
    cadence: "About every 2 weeks",
    sessionOnly: "Parents may only hear something when they ask.",
    extraHour:
      "The coach checks in proactively about confidence, schedule, team changes, injuries, and priorities.",
    player: "Gets better support around the training.",
    parent: "Does not have to chase the coach for updates.",
    coach: "Gets context that may not show up on the field.",
  },
  {
    title: "Team Coach Communication",
    cadence: "As needed",
    sessionOnly: "Private work can become disconnected from team needs.",
    extraHour:
      "When it helps — and always with your awareness — we ask the player’s team coach what they are seeing and what needs attention.",
    player: "Private training connects to real match and team demands.",
    parent:
      "Knows private work is supporting the player’s bigger soccer environment.",
    coach: "Gets another informed viewpoint to guide priorities.",
  },
  {
    title: "Player Development App",
    cadence: "Ongoing",
    sessionOnly: "Progress lives in memory, texts, or scattered notes.",
    extraHour:
      "Stats, rank progress, reports, goals, notes, and history live together in the player’s online profile.",
    player: "Can open the app and see the journey.",
    parent: "Gets one place to review development.",
    coach: "Keeps the coaching system organized.",
  },
  {
    title: "Photos + Video",
    cadence: "Regularly",
    sessionOnly: "Training moments may disappear after the session.",
    extraHour:
      "Short clips and photos can be captured and added to the player’s profile.",
    player: "Can see moments from the work.",
    parent: "Gets visibility into the training experience.",
    coach: "Creates visual evidence and teaching material.",
  },
];

function Benefit({ who, text }: { who: string; text: string }) {
  return (
    <div className="flex gap-2 text-sm">
      <span className="shrink-0 font-bold text-emerald-700 w-14">{who}</span>
      <span className="text-gray-600">{text}</span>
    </div>
  );
}

export default function SystemBreakdown() {
  return (
    <section
      id="system"
      className="py-20 px-6 bg-linear-to-b from-emerald-50 to-emerald-100"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The system, piece by piece
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            What happens around the training session is what turns isolated
            practice into long-term development. Here is every piece, and what
            it replaces.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {pieces.map((piece) => (
            <div
              key={piece.title}
              className="bg-white rounded-2xl shadow-lg border-2 border-emerald-200 overflow-hidden flex flex-col"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 p-6 pb-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {piece.title}
                </h3>
                <span className="self-start shrink-0 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800 uppercase tracking-wide">
                  {piece.cadence}
                </span>
              </div>

              <div className="px-6 pb-6 space-y-3">
                <div className="rounded-xl bg-gray-50 border border-gray-200 p-4">
                  <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-gray-500">
                    <span className="text-red-500 text-base leading-none">
                      ✕
                    </span>
                    Session-only model
                  </p>
                  <p className="mt-1.5 text-gray-600">{piece.sessionOnly}</p>
                </div>

                <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4">
                  <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-emerald-700">
                    <span className="text-emerald-600 text-base leading-none">
                      ✓
                    </span>
                    The Extra Hour
                  </p>
                  <p className="mt-1.5 text-gray-800 font-medium">
                    {piece.extraHour}
                  </p>
                </div>
              </div>

              <div className="mt-auto p-6 space-y-1.5 border-t border-emerald-100 bg-white">
                <Benefit who="Player" text={piece.player} />
                <Benefit who="Parent" text={piece.parent} />
                <Benefit who="Coach" text={piece.coach} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Closing band */}
      <div className="container mx-auto max-w-6xl mt-14">
        <div className="rounded-3xl bg-slate-900 p-10 md:p-14 text-center shadow-2xl">
          <p className="text-2xl md:text-4xl font-black text-white leading-tight">
            A session-only model gives you training.
            <br className="hidden sm:block" />{" "}
            <span className="text-emerald-400">
              The Extra Hour gives you a development system.
            </span>
          </p>
          <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Parents get clarity. Players get proof. Coaches get direction. That
            is the difference between simply doing private training and building
            a player over time.
          </p>
        </div>
      </div>
    </section>
  );
}
