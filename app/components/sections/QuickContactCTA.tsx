"use client";

import Link from "next/link";
import {
  defaultTextTemplate,
  buildSmsHref,
  buildWaHref,
  telHref,
  BOOKING_URL,
} from "@/app/lib/contact";

type QuickContactCTAProps = {
  title?: string;
  subtitle?: string;
  template?: string;
};

export default function QuickContactCTA({
  title = "Text me to get started",
  subtitle = "Fastest is text or WhatsApp — copy the message below and send it. Prefer a form or a quick intro call? Head to the contact page.",
  template = defaultTextTemplate,
}: QuickContactCTAProps) {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-linear-to-b from-emerald-50 to-emerald-100"
    >
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600">{subtitle}</p>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border-2 border-emerald-200">
          <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4">
            <p className="text-gray-800 leading-relaxed">{template}</p>
          </div>

          {/* Primary actions */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <a
              href={buildSmsHref(template)}
              className="flex-1 inline-flex items-center justify-center bg-emerald-600 text-white px-6 py-4 rounded-full font-semibold text-lg hover:bg-emerald-700 transition-colors shadow-lg"
            >
              Text Coach David
            </a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center bg-gray-900 text-white px-6 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors shadow-lg"
            >
              Book a session
            </a>
          </div>

          {/* Secondary actions */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-5 text-sm font-semibold text-gray-600">
            <button
              type="button"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(template);
                } catch {
                  // noop
                }
              }}
              className="hover:text-emerald-700 transition-colors"
            >
              Copy template
            </button>
            <span className="text-gray-300" aria-hidden>
              •
            </span>
            <a
              href={buildWaHref(template)}
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-700 transition-colors"
            >
              WhatsApp
            </a>
            <span className="text-gray-300" aria-hidden>
              •
            </span>
            <a href={telHref} className="hover:text-emerald-700 transition-colors">
              Call
            </a>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/contact"
              className="text-emerald-700 font-semibold hover:text-emerald-800 underline underline-offset-4"
            >
              Prefer to send a form? Go to the contact page →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
