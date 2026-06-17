import { PLAYER_DASHBOARD_URL } from "@/app/lib/contact";

const tests = [
  {
    icon: "⚽",
    title: "Power Shot Test",
    description:
      "Measure your shooting power and accuracy with both feet to identify strengths and areas for improvement.",
    features: [
      "Distance measurement",
      "Both foot testing",
      "Power & accuracy tracking",
    ],
  },
  {
    icon: "🎯",
    title: "Distance Serve",
    description:
      "Test your long-range passing ability and technique to evaluate ball control and distribution skills.",
    features: [
      "Long-range accuracy",
      "Technical form analysis",
      "Distance benchmarking",
    ],
  },
  {
    icon: "🚪",
    title: "Passing Gates",
    description:
      "Navigate precision passing through multiple gates to assess your passing accuracy and decision-making.",
    features: [
      "Precision testing",
      "Speed & accuracy combo",
      "Game-situation simulation",
    ],
  },
  {
    icon: "🔄",
    title: "Figure 8 Dribbling",
    description:
      "Test your close control and dribbling ability through figure 8 patterns to measure ball mastery.",
    features: [
      "Ball control assessment",
      "Agility & coordination",
      "Speed with control",
    ],
  },
];

const dashboardFeatures = [
  {
    title: "Player info",
    desc: "Basic details so training stays personalized (age, notes, and what we’re focusing on).",
  },
  {
    title: "Tests & results",
    desc: "Skill tests like shooting, passing, and dribbling — with history so we can track improvement.",
  },
  {
    title: "Goals",
    desc: "Clear targets and next steps (what to work on between sessions).",
  },
];

const dashboardCards = [
  {
    title: "Tests & Results",
    subtitle: "Scores + history so progress is measurable",
    imgSrc: "/dashboard-tests-results.png",
    imgAlt: "Player Dashboard - Tests and Results screen",
    aspectClass: "aspect-[4/5]",
  },
  {
    title: "Goals",
    subtitle: "Targets + what to work on next",
    imgSrc: "/dashboard-goals.png",
    imgAlt: "Player Dashboard - Goals screen",
    aspectClass: "aspect-[4/5]",
  },
  {
    title: "Player Info",
    subtitle: "Profile + notes we use to personalize training",
    imgSrc: "/dashboard-player-info.png",
    imgAlt: "Player Dashboard - Player Info screen",
    aspectClass: "aspect-video",
  },
];

export default function TestingSection() {
  return (
    <section
      id="testing"
      className="py-20 px-6 bg-linear-to-b from-emerald-50 to-emerald-100"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            More Than Just Coaching
          </h2>
          <p className="text-xl text-gray-600">
            Data-driven skill assessments to track your progress, identify areas
            for improvement, and celebrate your achievements.
          </p>
          <p className="text-base text-gray-600 mt-3 max-w-3xl mx-auto">
            Testing is simple and optional. It helps us measure progress — not
            overcomplicate training.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {tests.map((test, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-emerald-200"
            >
              <div className="flex items-start mb-4">
                <div className="text-5xl mr-4">{test.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {test.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {test.description}
                  </p>
                </div>
              </div>
              <ul className="space-y-2">
                {test.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="text-emerald-600 mr-2 text-xl">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Tests Note */}
        <div className="mt-12 text-center">
          <div className="bg-linear-to-r from-emerald-50 to-white p-8 rounded-2xl shadow-md border border-emerald-200 max-w-3xl mx-auto">
            <p className="text-gray-700 text-lg mb-2">
              <span className="font-bold text-emerald-600">
                Additional tests available
              </span>{" "}
              based on your specific goals and skill level
            </p>
            <p className="text-gray-600">
              Custom assessments can be designed to target any aspect of your
              game
            </p>
          </div>
        </div>

        {/* Player Dashboard */}
        <div className="mt-14">
          <div className="bg-white rounded-3xl shadow-xl border-2 border-emerald-200 p-8 md:p-10">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Player Dashboard
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The Player Dashboard is where we keep everything organized so
                  progress is clear — not guesswork. It helps players stay
                  motivated and helps parents actually see improvement over time.
                </p>

                <div className="mt-6 space-y-3">
                  {dashboardFeatures.map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <span className="text-emerald-600 text-xl leading-none mt-0.5">
                        ✓
                      </span>
                      <div>
                        <p className="font-bold text-gray-900">{item.title}</p>
                        <p className="text-gray-700">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-7">
                  <a
                    href={PLAYER_DASHBOARD_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors shadow-lg"
                  >
                    Open Player Dashboard
                  </a>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {dashboardCards.map((card, idx) => (
                  <div
                    key={card.title}
                    className={`bg-white rounded-2xl shadow-md border border-emerald-100 overflow-hidden ${
                      idx === 2 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <div className="p-4 border-b border-emerald-100">
                      <p className="font-bold text-gray-900">{card.title}</p>
                      <p className="text-gray-600 text-sm mt-1">
                        {card.subtitle}
                      </p>
                    </div>

                    <div className="p-4">
                      <div
                        className={`${card.aspectClass} rounded-xl bg-linear-to-br from-gray-50 to-gray-100 border border-gray-200 overflow-hidden`}
                      >
                        <img
                          src={card.imgSrc}
                          alt={card.imgAlt}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
