import { defaultTextTemplate, buildSmsHref, BOOKING_URL } from "@/app/lib/contact";

type TrainingProcessProps = {
  template?: string;
};

const steps = [
  {
    num: "01",
    title: "Start with an intro session",
    desc: "We begin with an intro session to figure out everything about your player — current strengths, weaknesses, and a clear baseline to build from. No guessing, just a real starting point.",
  },
  {
    num: "02",
    title: "One focus at a time, done deeply",
    desc: "If you decide to continue, we work on each thing as its own focused session. Some skills take more than one session — and that's the point. We work on them deeply and deliberately until they're locked in.",
  },
  {
    num: "03",
    title: "High intensity, high focus",
    desc: "Every session is high intensity with high focus. Come ready to play — this is real, demanding work, and it's exactly what drives real results.",
  },
];

export default function TrainingProcess({
  template = defaultTextTemplate,
}: TrainingProcessProps) {
  return (
    <section className="py-20 px-6 bg-linear-to-b from-emerald-50 to-white">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-14">
          <p className="text-emerald-700 font-semibold mb-3">
            Top-standard 1-on-1 training
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How our training works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            This isn't a group clinic. It's fully personalized, deliberate
            coaching built around your player and how they actually improve.
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white rounded-2xl shadow-md border border-emerald-100 p-6 md:p-8 flex flex-col sm:flex-row gap-5 sm:items-start"
            >
              <div className="shrink-0">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-600 text-white text-xl font-bold">
                  {step.num}
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight */}
        <div className="mt-10 bg-linear-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-10 text-center shadow-2xl">
          <p className="text-white text-xl md:text-2xl font-bold mb-3">
            Real 1-on-1 training, at a top standard.
          </p>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Each session is one hour of focused, intense, fully-personalized work
            — designed to get your player measurably better.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 justify-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Book a session
            </a>
            <a
              href={buildSmsHref(template)}
              className="inline-flex items-center justify-center bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-700 transition-colors shadow-lg"
            >
              Text Coach David
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
