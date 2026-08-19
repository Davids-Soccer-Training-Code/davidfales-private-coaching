type Duty = {
  title: string;
  when: string;
  what: string;
  why: string;
  standard: "Required" | "Best Practice";
};

const duties: Duty[] = [
  {
    title: "Coach’s Note",
    when: "After every session",
    what: "Write 2 to 3 useful sentences: what was worked on, how the player did, and what comes next.",
    why: "Creates continuity and makes every session accountable.",
    standard: "Required",
  },
  {
    title: "Testing + Stats",
    when: "Start + every 6th session",
    what: "Run the relevant tests, save the results, then recompute stats so the player’s profile and rank update.",
    why: "Turns coaching opinions into measurable evidence.",
    standard: "Required",
  },
  {
    title: "Baseline Snapshot",
    when: "1st or 2nd session",
    what: "Record early strengths, focus areas, learning notes, and the starting training direction.",
    why: "Defines the player’s starting point and first block.",
    standard: "Required",
  },
  {
    title: "Progress Report",
    when: "Every 6 sessions",
    what: "Review technical and tactical habits, strengths, continuing focus, and long-term direction with specific notes.",
    why: "Stops training from becoming an endless string of disconnected sessions.",
    standard: "Required",
  },
  {
    title: "Period Goal",
    when: "Whenever no active goal covers today",
    what: "Set one clear focus with a time window and actionable steps the player can complete.",
    why: "Gives the player a target instead of a vague instruction to improve.",
    standard: "Required",
  },
  {
    title: "Goal Check-In",
    when: "Every other session while a goal is active",
    what: "Review completed steps, what is stuck, and whether the goal still fits.",
    why: "Keeps goals alive instead of letting them become forgotten text.",
    standard: "Required",
  },
  {
    title: "Parent Check-In",
    when: "About every 2 weeks",
    what: "Ask how the player feels, what has changed, and whether the parent has anything they want addressed.",
    why: "Parents should hear from us before they need to ask.",
    standard: "Required",
  },
  {
    title: "Next-Session Planning",
    when: "Before the next session",
    what: "Use the latest note, stats, goal, parent input, and team-coach input to decide the next priority.",
    why: "Makes every session the next step in a plan, not a random workout.",
    standard: "Required",
  },
  {
    title: "Team Coach Communication",
    when: "As needed",
    what: "With the parent’s awareness, ask the team coach what they are seeing, where the player is struggling, and what could be reinforced privately.",
    why: "Connects private development to the player’s real soccer environment.",
    standard: "Best Practice",
  },
  {
    title: "Photos + Video",
    when: "Regularly",
    what: "Capture short useful clips and photos during sessions and add them to the player’s profile.",
    why: "Creates visual evidence, memories, and teaching moments.",
    standard: "Best Practice",
  },
];

export default function CoachStandard() {
  return (
    <section id="coach-standard" className="py-20 px-6 bg-slate-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <p className="text-emerald-400 font-bold tracking-[0.25em] text-xs md:text-sm uppercase mb-4">
            The coach standard
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            This is not a bonus. It is the job.
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            The private session is only one part of what our coaches are
            responsible for. Every coach on our staff owns the player’s
            development process between sessions too — and here is exactly what
            we hold them to.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {duties.map((duty) => (
            <div
              key={duty.title}
              className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{duty.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-emerald-400">
                    {duty.when}
                  </p>
                </div>
                <span
                  className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide ${
                    duty.standard === "Required"
                      ? "bg-emerald-500 text-slate-900"
                      : "bg-white/10 text-slate-200 border border-white/20"
                  }`}
                >
                  {duty.standard}
                </span>
              </div>

              <p className="mt-4 text-slate-200 leading-relaxed">{duty.what}</p>
              <p className="mt-2 text-sm text-slate-400 italic">{duty.why}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border-2 border-emerald-500/40 bg-emerald-500/10 p-8 md:p-12">
          <p className="text-emerald-400 font-bold tracking-[0.25em] text-xs uppercase">
            The standard
          </p>
          <p className="mt-4 text-xl md:text-3xl font-bold text-white leading-snug">
            A player should never feel like they are starting from zero every
            week.
          </p>
          <p className="mt-5 text-lg text-slate-300 leading-relaxed max-w-4xl">
            The coach should know what happened last time, what the data says,
            what the current goal is, what the parent is seeing, and what the
            team environment is asking from the player.
          </p>
        </div>
      </div>
    </section>
  );
}
