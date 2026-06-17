import { defaultTextTemplate, buildSmsHref } from "@/app/lib/contact";

type Step = { step: string; title: string; desc: string; icon: string };

type HowItWorksProps = {
  title?: string;
  subtitle?: string;
  intro?: string;
  steps?: Step[];
  ctaLabel?: string;
  template?: string;
};

const defaultSteps: Step[] = [
  {
    step: "Step 1",
    title: "Text me your player’s age + main goal",
    desc: "We’ll pick one priority (confidence on the ball, passing, finishing, etc.).",
    icon: "💬",
  },
  {
    step: "Step 2",
    title: "I confirm a time + location",
    desc: "Usually local parks in Gilbert/Mesa. Exact spot shared when we schedule.",
    icon: "📍",
  },
  {
    step: "Step 3",
    title: "We train — you get a simple progress plan",
    desc: "Short benchmarks so you can see improvement session to session.",
    icon: "✅",
  },
];

export default function HowItWorks({
  title = "How it works",
  subtitle = "Simple scheduling. Clear plan. Real progress.",
  intro = "Sessions are organized, age-appropriate, and parent-friendly. I communicate clearly before and after training.",
  steps = defaultSteps,
  ctaLabel = "Text to get started",
  template = defaultTextTemplate,
}: HowItWorksProps) {
  return (
    <section id="how-it-works" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600">{subtitle}</p>
          <p className="text-base text-gray-600 mt-3 max-w-3xl mx-auto">
            {intro}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div
              key={s.step}
              className="bg-linear-to-br from-emerald-50 to-white p-8 rounded-2xl shadow-lg border-2 border-emerald-100"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-emerald-700 font-semibold">{s.step}</span>
                <span className="text-4xl">{s.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {s.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={buildSmsHref(template)}
            className="inline-flex items-center justify-center bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-700 transition-colors shadow-lg"
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
