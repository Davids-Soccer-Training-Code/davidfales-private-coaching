"use client";

import {
  defaultTextTemplate,
  buildSmsHref,
  buildWaHref,
  telHref,
  BOOKING_URL,
} from "@/app/lib/contact";
import FeaturedPhotos from "@/app/components/home/FeaturedPhotos";

type HeroProps = {
  eyebrow?: string;
  titleLead?: string;
  titleHighlight?: string;
  subtitle?: string;
  bullets?: string[];
  template?: string;
  note?: string;
  titleAs?: "h1" | "h2";
  showFeaturedPhotos?: boolean;
};

export default function Hero({
  eyebrow = "Private soccer training (Gilbert & Mesa)",
  titleLead = "Private Soccer Training in ",
  titleHighlight = "Gilbert and Mesa",
  subtitle = "1-on-1 and small group sessions for ages 8–16. Clear goals, real improvement, and a coach parents can trust.",
  bullets = [
    "Customized sessions based on your player’s needs",
    "Progress tracking with simple skill benchmarks",
    "Flexible scheduling by text",
  ],
  template = defaultTextTemplate,
  note = "Text me and we’ll confirm time & location and get started.",
  titleAs = "h2",
  showFeaturedPhotos = true,
}: HeroProps) {
  const smsHref = buildSmsHref(template);
  const waHref = buildWaHref(template);
  const TitleTag = titleAs;

  return (
    <section className="py-14 md:py-20 px-6 bg-linear-to-b from-emerald-50 to-white">
      <div className="container mx-auto max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-emerald-700 font-semibold mb-3">{eyebrow}</p>
            <TitleTag className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
              {titleLead}
              <span className="text-emerald-600">{titleHighlight}</span>
            </TitleTag>
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              {subtitle}
            </p>

            <ul className="space-y-3 mb-8">
              {bullets.map((item) => (
                <li key={item} className="flex items-start text-gray-700">
                  <span className="text-emerald-600 mr-3 text-xl leading-none">
                    ✓
                  </span>
                  <span className="text-base md:text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <a
                href={smsHref}
                className="inline-flex items-center justify-center bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors shadow-lg"
              >
                Text Coach David
              </a>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors shadow-lg"
              >
                Book a session
              </a>
              <a
                href={waHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center bg-white text-emerald-700 px-6 py-3 rounded-full font-semibold border-2 border-emerald-200 hover:border-emerald-300 hover:bg-emerald-50 transition-colors"
              >
                WhatsApp
              </a>
              <a
                href={telHref}
                className="inline-flex items-center justify-center bg-white text-gray-800 px-6 py-3 rounded-full font-semibold border-2 border-gray-200 hover:border-gray-300 transition-colors"
              >
                Call
              </a>
            </div>

            <p className="text-sm text-gray-500 mt-4">{note}</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-emerald-100 overflow-hidden">
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Quick Start
              </h3>
              <p className="text-gray-600 mb-5">
                Copy/paste this text and you’re done.
              </p>

              <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4">
                <p className="text-gray-800 leading-relaxed">{template}</p>
              </div>

              <div className="flex flex-wrap gap-3 mt-5">
                <button
                  type="button"
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(template);
                    } catch {
                      // Clipboard may fail in some browsers; still ok.
                    }
                  }}
                  className="inline-flex items-center justify-center bg-gray-900 text-white px-5 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
                >
                  Copy template
                </button>
                <a
                  href={smsHref}
                  className="inline-flex items-center justify-center bg-emerald-600 text-white px-5 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors"
                >
                  Open Text
                </a>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center bg-white text-emerald-700 px-5 py-3 rounded-full font-semibold border-2 border-emerald-200 hover:bg-emerald-50 transition-colors"
                >
                  Open WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {showFeaturedPhotos && <FeaturedPhotos />}
      </div>
    </section>
  );
}
