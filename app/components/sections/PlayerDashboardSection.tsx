import { PLAYER_DASHBOARD_URL } from "@/app/lib/contact";

type Screen = {
  title: string;
  subtitle: string;
  body: string;
  bullets: string[];
  imgSrc: string;
  imgAlt: string;
};

const screens: Screen[] = [
  {
    title: "Where your player stands today",
    subtitle: "The home screen",
    body: "The first thing you see is the honest summary: tests recorded, sessions completed, reports written, and challenges outstanding. Underneath it, every one of the eight tests with the level your player currently holds in it.",
    bullets: [
      "Each test carries its own level, so strengths and gaps are obvious at a glance",
      "Tests already clearing the next standard are marked ready to rank up",
      "A running count of how many of the eight are ready",
      "One tap to see exactly what is left before the next level",
    ],
    imgSrc: "/dashboard-overview.webp",
    imgAlt:
      "Player Dashboard home screen showing test, session and report counts alongside the current level in each of the eight tests",
  },
  {
    title: "Every attempt, and what it adds up to",
    subtitle: "Inside a single test",
    body: "Open any test and you get the raw attempts exactly as they were recorded — not a rounded summary. Below them, the progress tracking shows the first result against the latest one, and by how much it moved.",
    bullets: [
      "All four attempts on each foot, saved as recorded",
      "First result versus latest, with the change and percentage",
      "A trend line across every test date",
      "Derived metrics like strong and weak averages, and left-right asymmetry",
    ],
    imgSrc: "/dashboard-test-detail.webp",
    imgAlt:
      "Player Dashboard test detail screen for the Power test showing individual attempts, progress tracking over time, and derived metrics",
  },
  {
    title: "Everything the coach has written",
    subtitle: "Feedback & Reports",
    body: "The Baseline Snapshot, every Progress Report, and every coach’s note in one dated timeline. Nothing gets lost in a text thread, and you can always go back to what was said at the start.",
    bullets: [
      "The Baseline Snapshot from the first sessions",
      "Progress Reports at the checkpoints",
      "Shorter coach’s notes in between — breakthroughs, habits, soccer IQ",
      "Session notes attached to the sessions themselves",
    ],
    imgSrc: "/dashboard-feedback-reports.webp",
    imgAlt:
      "Player Dashboard Feedback and Reports screen showing a dated timeline of coach's notes, a progress report and a baseline snapshot",
  },
  {
    title: "What to work on before next session",
    subtitle: "Goals",
    body: "A period goal can be broken into the actual steps to do it, each assigned to a day. Players tick them off as they go, and both the current goal and every past one stay on the record.",
    bullets: [
      "One clear focus at a time, with a start and end date",
      "Specific steps, assigned to specific days",
      "Step-by-step completion tracking",
      "A full history of past goals and how they went",
    ],
    imgSrc: "/dashboard-goals-steps.webp",
    imgAlt:
      "Player Dashboard Goals screen showing a period goal broken into daily steps with completion tracking, plus past goals",
  },
];

export default function PlayerDashboardSection() {
  return (
    <section id="dashboard" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Player Dashboard
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            All of it — stats, levels, reports, notes, and goals — lives in one
            place your player and you can open any time. Progress stops being
            something you have to take our word for.
          </p>
          <div className="mt-7">
            <a
              href={PLAYER_DASHBOARD_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-emerald-600 text-white px-7 py-3.5 rounded-full font-semibold hover:bg-emerald-700 transition-colors shadow-lg"
            >
              Open Player Dashboard
            </a>
          </div>
        </div>

        <div className="space-y-10">
          {screens.map((screen, index) => (
            <div
              key={screen.title}
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
              {/* Copy */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <p className="text-xs font-black uppercase tracking-widest text-emerald-600">
                  {screen.subtitle}
                </p>
                <h3 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900">
                  {screen.title}
                </h3>
                <p className="mt-4 text-gray-700 leading-relaxed text-lg">
                  {screen.body}
                </p>
                <ul className="mt-5 space-y-2">
                  {screen.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start text-gray-700">
                      <span className="text-emerald-600 mr-2.5 leading-6 text-lg">
                        ✓
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Screenshot */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="rounded-2xl border-2 border-emerald-100 bg-linear-to-br from-gray-50 to-emerald-50/40 p-3 shadow-xl overflow-hidden">
                  <img
                    src={screen.imgSrc}
                    alt={screen.imgAlt}
                    className="w-full h-auto rounded-xl bg-white"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl bg-linear-to-br from-emerald-50 to-white border-2 border-emerald-200 p-8 md:p-10 text-center">
          <p className="text-xl md:text-2xl font-bold text-gray-900">
            Players get to see their own progress. Parents get to stop guessing.
          </p>
          <p className="mt-3 text-gray-700 max-w-2xl mx-auto leading-relaxed">
            That visibility is the whole point — it is what turns a good session
            into a long-term development plan.
          </p>
        </div>
      </div>
    </section>
  );
}
