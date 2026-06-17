"use client";

import {
  defaultTextTemplate,
  buildSmsHref,
  buildWaHref,
  telHref,
  BOOKING_URL,
} from "@/app/lib/contact";

type StickyContactBarProps = {
  template?: string;
};

export default function StickyContactBar({
  template = defaultTextTemplate,
}: StickyContactBarProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-emerald-100 bg-white/95 backdrop-blur">
      <div className="max-w-6xl mx-auto px-3 py-3 grid grid-cols-4 gap-2">
        <a
          href={buildSmsHref(template)}
          className="text-center bg-emerald-600 text-white py-3 rounded-xl font-semibold text-sm shadow"
        >
          Text
        </a>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noreferrer"
          className="text-center bg-gray-900 text-white py-3 rounded-xl font-semibold text-sm shadow"
        >
          Book
        </a>
        <a
          href={telHref}
          className="text-center bg-white text-gray-900 py-3 rounded-xl font-semibold text-sm border-2 border-gray-200"
        >
          Call
        </a>
        <a
          href={buildWaHref(template)}
          target="_blank"
          rel="noreferrer"
          className="text-center bg-white text-emerald-700 py-3 rounded-xl font-semibold text-sm border-2 border-emerald-200"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
