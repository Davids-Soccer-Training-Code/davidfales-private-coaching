type Card = { icon: string; title: string; desc: string };

type WhoThisIsForProps = {
  title?: string;
  subtitle?: string;
  cards?: Card[];
  callout?: string;
};

const defaultCards: Card[] = [
  {
    icon: "👦👧",
    title: "Ages 8-16",
    desc: "Training programs tailored to youth players at the perfect age for skill development and growth",
  },
  {
    icon: "📈",
    title: "All Skill Levels",
    desc: "From beginners taking their first steps to high-level players looking to reach the next stage",
  },
  {
    icon: "🎯",
    title: "Individual attention",
    desc: "One-on-one sessions with a customized plan for your player, plus clear goals and measurable progress.",
  },
];

export default function WhoThisIsFor({
  title = "Who This Is For",
  subtitle = "Designed for families who want structured training, clear goals, and consistent progress.",
  cards = defaultCards,
  callout = "🌟 Every player receives a customized training plan designed just for them",
}: WhoThisIsForProps) {
  return (
    <section className="py-20 px-6 bg-linear-to-r from-emerald-600 to-emerald-700 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{title}</h2>
          <p className="text-xl text-emerald-100 leading-relaxed max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border-2 border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-6xl mb-4 text-center">{card.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-center">
                {card.title}
              </h3>
              <p className="text-emerald-50 text-center leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/30 inline-block">
            <p className="text-lg text-white font-semibold">{callout}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
