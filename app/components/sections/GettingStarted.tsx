const items = [
  {
    icon: "🎯",
    title: "Individual Player Focus",
    desc: "Each session is designed around the individual player. Training is adjusted based on age, experience, and goals, with an emphasis on long-term development, confidence on the ball, and measurable improvement over time.",
  },
  {
    icon: "📈",
    title: "Measurable Progress",
    desc: "Track your improvement through regular assessments and see real results as you develop your technical skills, build confidence, and reach your soccer goals.",
  },
  {
    icon: "⚽",
    title: "Ball-Based Training",
    desc: "Every minute of every session involves the ball. Maximum touches, maximum learning, maximum improvement. This is how real soccer skills are developed.",
  },
];

export default function GettingStarted() {
  return (
    <section className="py-20 px-6 bg-linear-to-b from-emerald-50 to-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Getting Started
          </h2>
          <p className="text-xl text-gray-600">
            Your journey to improved skills and confidence starts here
          </p>
        </div>

        <div className="bg-white p-10 rounded-3xl shadow-2xl border-2 border-emerald-200">
          <div className="space-y-6">
            {items.map((item) => (
              <div key={item.title} className="flex items-start">
                <span className="text-4xl mr-4">{item.icon}</span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
