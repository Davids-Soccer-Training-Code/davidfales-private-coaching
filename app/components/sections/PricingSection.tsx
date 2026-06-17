import {
  defaultTextTemplate,
  buildSmsHref,
  buildWaHref,
  telHref,
  BOOKING_URL,
} from "@/app/lib/contact";

type PricingSectionProps = {
  title?: string;
  subtitle?: string;
  template?: string;
};

export default function PricingSection({
  title = "Training Packages & Options",
  subtitle = "Choose the commitment level that works best for your player",
  template = defaultTextTemplate,
}: PricingSectionProps) {
  const smsHref = buildSmsHref(template);
  const waHref = buildWaHref(template);

  return (
    <section id="pricing" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600">{subtitle}</p>
        </div>

        {/* Package Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* 12-Week Package - Most Popular */}
          <div className="bg-linear-to-br from-emerald-600 to-emerald-700 p-8 rounded-2xl shadow-xl border-4 border-emerald-400 relative transform hover:scale-105 transition-all duration-300">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                BEST VALUE
              </span>
            </div>
            <div className="text-center text-white">
              <div className="text-5xl mb-3">🏆</div>
              <h3 className="text-3xl font-bold mb-3">12-Week Package</h3>
              <p className="text-emerald-100 mb-6 leading-relaxed">
                Maximum progress and consistency. Lowest per-session rate.
              </p>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-6">
                <p className="text-2xl font-bold mb-2">Best Per-Session Rate</p>
                <p className="text-emerald-100 text-sm">
                  Commitment = Better results + better pricing
                </p>
              </div>
              <ul className="space-y-3 text-left">
                {[
                  "Real skill development takes time",
                  "Build lasting habits and technique",
                  "Track meaningful progress over time",
                  "Priority scheduling",
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="text-yellow-300 mr-2 text-xl">✓</span>
                    <span className="text-emerald-50">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 6-Week Package */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-emerald-200 hover:border-emerald-400 transition-all duration-300">
            <div className="text-center">
              <div className="text-5xl mb-3">📈</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                6-Week Package
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Great for focused improvement on specific skills.
              </p>
              <div className="bg-emerald-50 rounded-xl p-4 mb-6">
                <p className="text-xl font-bold text-gray-900 mb-1">
                  Better Rate
                </p>
                <p className="text-gray-600 text-sm">
                  Solid commitment for noticeable results
                </p>
              </div>
              <ul className="space-y-3 text-left">
                {[
                  "Focus on 1-2 key areas",
                  "See clear improvement",
                  "Progress tracking included",
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="text-emerald-600 mr-2 text-xl">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 4-Week or Session-to-Session */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-200">
            <div className="text-center">
              <div className="text-5xl mb-3">📅</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                4-Week Package or Week-to-Week
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Flexible option to try training or work around busy schedules.
              </p>
              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <p className="text-xl font-bold text-gray-900 mb-1">
                  Standard Rate
                </p>
                <p className="text-gray-600 text-sm">
                  Maximum flexibility, less commitment
                </p>
              </div>
              <ul className="space-y-3 text-left">
                {[
                  "Test out training first",
                  "Schedule week by week",
                  "No long-term commitment",
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="text-emerald-600 mr-2 text-xl">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Training Format & Pricing Range */}
        <div className="bg-linear-to-br from-emerald-50 to-white p-8 rounded-2xl shadow-lg border-2 border-emerald-200 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Training Format & Pricing
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md border border-emerald-100">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">👤</div>
                <h4 className="text-xl font-bold text-gray-900">
                  1-on-1 Private Sessions
                </h4>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Maximum individual attention. Fully customized to your player's
                needs and goals.
              </p>
              <div className="bg-emerald-50 rounded-lg p-4">
                <p className="text-gray-900 font-semibold">
                  Sessions range from $60-$80 based on package choice
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  12-week package = lowest rate per session
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-emerald-100">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">👥</div>
                <h4 className="text-xl font-bold text-gray-900">
                  Small Group Sessions
                </h4>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                2-7 players. Great for teammates or friends. Game-like pressure
                with focused coaching.
              </p>
              <div className="bg-emerald-50 rounded-lg p-4">
                <p className="text-gray-900 font-semibold">
                  Sessions range from $50-$70 based on package and group size
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  Cost split among families
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why 12-Week Packages Work Best */}
        <div className="bg-linear-to-br from-gray-900 to-gray-800 p-8 md:p-10 rounded-2xl shadow-2xl border-2 border-gray-700 mb-12">
          <h3 className="text-3xl font-bold text-white mb-6 text-center">
            Why 12 Weeks Is the Best Investment
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🧠",
                title: "Skill Development Takes Time",
                desc: "Real technique changes don't happen in 2-3 sessions. Your player needs consistent repetition to build muscle memory and confidence.",
              },
              {
                icon: "📊",
                title: "Measurable Progress",
                desc: "12 weeks gives us time to test, train, and retest. You'll see actual improvement in skill benchmarks, not just \"feeling better.\"",
              },
              {
                icon: "💪",
                title: "Build Lasting Habits",
                desc: "Consistency builds confidence. Players who commit to 12 weeks develop routines and mindsets that carry over to games and practice.",
              },
            ].map((reason) => (
              <div key={reason.title} className="text-center">
                <div className="text-5xl mb-3">{reason.icon}</div>
                <h4 className="text-xl font-bold text-white mb-3">
                  {reason.title}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <p className="text-white text-center text-lg font-semibold mb-2">
              🎯 Parents who commit to 12 weeks see the most dramatic improvement
            </p>
            <p className="text-gray-300 text-center text-sm">
              Short-term training can help, but real development requires time
              and repetition.
            </p>
          </div>
        </div>

        {/* What's Included */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-emerald-200 mb-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Every Package Includes
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "⚽",
                title: "1-Hour Sessions",
                desc: "Ball-based technical training. Every minute on the ball, maximum touches, real improvement.",
              },
              {
                icon: "📱",
                title: "Player Dashboard Access",
                desc: "Track test results, goals, and progress over time. Parents see clear improvement.",
              },
              {
                icon: "📈",
                title: "Progress Plans",
                desc: "Simple benchmarks after each session so you know exactly what to work on next.",
              },
            ].map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Scheduling Section */}
        <div className="bg-linear-to-br from-emerald-50 to-white p-8 rounded-2xl shadow-lg border-2 border-emerald-200">
          <div className="text-center mb-6">
            <div className="text-5xl mb-4">📅</div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Flexible Scheduling
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg mb-6 max-w-2xl mx-auto">
              Sessions are scheduled directly by text. Times are flexible and
              based on availability.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="space-y-3">
              {["After school hours available", "Weekend sessions available"].map(
                (item) => (
                  <div key={item} className="flex items-center text-gray-700">
                    <span className="text-2xl mr-3 text-emerald-600">✓</span>
                    <span>{item}</span>
                  </div>
                )
              )}
            </div>
            <div className="space-y-3">
              {[
                "One-on-one or small groups",
                "Schedule via text, call, or WhatsApp",
              ].map((item) => (
                <div key={item} className="flex items-center text-gray-700">
                  <span className="text-2xl mr-3 text-emerald-600">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a
              href={smsHref}
              className="inline-flex items-center justify-center bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-700 transition-colors shadow-lg"
            >
              Text to discuss packages
            </a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors shadow-lg"
            >
              Book a session
            </a>
            <a
              href={waHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-white text-emerald-700 px-8 py-4 rounded-full font-semibold text-lg border-2 border-emerald-200 hover:bg-emerald-50 transition-colors shadow"
            >
              WhatsApp
            </a>
            <a
              href={telHref}
              className="inline-flex items-center justify-center bg-white text-gray-800 px-8 py-4 rounded-full font-semibold text-lg border-2 border-gray-200 hover:border-gray-300 transition-colors shadow"
            >
              Call
            </a>
          </div>
          <p className="text-gray-500 text-sm text-center mt-6">
            We'll discuss the best package for your player's goals and your
            schedule. Pricing confirmed when we book.
          </p>
        </div>
      </div>
    </section>
  );
}
