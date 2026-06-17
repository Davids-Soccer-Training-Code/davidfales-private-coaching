"use client";

import React, { useState } from "react";
import {
  BOOKING_URL,
  COACH_EMAIL,
  COACH_PHONE_DISPLAY,
  telHref,
  buildSmsHref,
  buildWaHref,
  buildPrefilledMessage,
  type ContactFormData,
} from "@/app/lib/contact";

type ContactSectionProps = {
  title?: string;
  subtitle?: string;
  defaultArea?: string;
  source?: string;
  bookingIntro?: string;
  locationLabel?: string;
};

export default function ContactSection({
  title = "Text me to get started",
  subtitle = "Fastest is text or WhatsApp. If you prefer, fill this quick form.",
  defaultArea = "",
  source,
  bookingIntro = "Ready to lock in a session? Book directly in a few taps — pick a time and you’re set.",
  locationLabel = "Gilbert & Mesa (local parks)",
}: ContactSectionProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    parentName: "",
    email: "",
    phone: "",
    playerAge: "",
    mainGoal: "",
    bestDaysTimes: "",
    area: defaultArea,
    sessionType: "Private (1-on-1)",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<
    "idle" | "success" | "error" | "loading"
  >("idle");

  const message = buildPrefilledMessage(formData);
  const smsHref = buildSmsHref(message);
  const waHref = buildWaHref(message);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          message,
          ...(source ? { source } : {}),
        }),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({
          parentName: "",
          email: "",
          phone: "",
          playerAge: "",
          mainGoal: "",
          bestDaysTimes: "",
          area: defaultArea,
          sessionType: "Private (1-on-1)",
          notes: "",
        });
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
      if (formStatus === "loading") setFormStatus("idle");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-linear-to-b from-emerald-50 to-emerald-100"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600">{subtitle}</p>
        </div>

        <div className="bg-white p-10 rounded-3xl shadow-2xl border-2 border-emerald-200">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Quick message (copy/paste)
              </h3>
              <p className="text-gray-600 mb-4">
                This is the easiest way to schedule.
              </p>
              <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4">
                <p className="text-gray-800 leading-relaxed">{message}</p>
              </div>
              <div className="flex flex-wrap gap-3 mt-5">
                <button
                  type="button"
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(message);
                    } catch {
                      // noop
                    }
                  }}
                  className="inline-flex items-center justify-center bg-gray-900 text-white px-5 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
                >
                  Copy
                </button>
                <a
                  href={smsHref}
                  className="inline-flex items-center justify-center bg-emerald-600 text-white px-5 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors"
                >
                  Text
                </a>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center bg-white text-emerald-700 px-5 py-3 rounded-full font-semibold border-2 border-emerald-200 hover:bg-emerald-50 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Or send a quick form
              </h3>

              {formStatus === "success" ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 text-gray-800">
                  <p className="font-semibold mb-1">Thanks — message sent.</p>
                  <p className="text-gray-700">
                    I’ll reply as soon as I can to confirm a time and location.
                  </p>
                </div>
              ) : formStatus === "error" ? (
                <div className="bg-red-50 border border-red-200 rounded-2xl p-5 text-gray-800 mb-5">
                  <p className="font-semibold mb-1">
                    Something went wrong sending your message.
                  </p>
                  <p className="text-gray-700">
                    Please try again, or just text me directly.
                  </p>
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="parentName"
                    className="block text-gray-700 font-semibold mb-2 text-lg"
                  >
                    Parent name *
                  </label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-gray-900"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-semibold mb-2 text-lg"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-gray-900"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-gray-700 font-semibold mb-2 text-lg"
                    >
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-gray-900"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="playerAge"
                      className="block text-gray-700 font-semibold mb-2 text-lg"
                    >
                      Player age *
                    </label>
                    <input
                      type="text"
                      inputMode="numeric"
                      id="playerAge"
                      name="playerAge"
                      value={formData.playerAge}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-gray-900"
                      placeholder="8–16"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="mainGoal"
                    className="block text-gray-700 font-semibold mb-2 text-lg"
                  >
                    Main goal *
                  </label>
                  <input
                    type="text"
                    id="mainGoal"
                    name="mainGoal"
                    value={formData.mainGoal}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-gray-900"
                    placeholder="First touch, dribbling confidence, finishing, etc."
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="bestDaysTimes"
                      className="block text-gray-700 font-semibold mb-2 text-lg"
                    >
                      Best days/times *
                    </label>
                    <input
                      type="text"
                      id="bestDaysTimes"
                      name="bestDaysTimes"
                      value={formData.bestDaysTimes}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-gray-900"
                      placeholder="Mon/Wed after 4pm, Sat mornings..."
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="area"
                      className="block text-gray-700 font-semibold mb-2 text-lg"
                    >
                      Area *
                    </label>
                    <input
                      type="text"
                      id="area"
                      name="area"
                      value={formData.area}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-gray-900"
                      placeholder="Gilbert or Mesa"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="sessionType"
                    className="block text-gray-700 font-semibold mb-2 text-lg"
                  >
                    Session type
                  </label>
                  <input
                    type="text"
                    id="sessionType"
                    name="sessionType"
                    value={formData.sessionType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-gray-900"
                    placeholder="Private (1-on-1) or Small group"
                  />
                </div>

                <div>
                  <label
                    htmlFor="notes"
                    className="block text-gray-700 font-semibold mb-2 text-lg"
                  >
                    Notes (optional)
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors resize-none text-gray-900"
                    placeholder="Anything helpful (club level, position, injuries, etc.)"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Direct booking */}
        <div
          id="book"
          className="mt-10 bg-white p-8 md:p-10 rounded-3xl shadow-2xl border-2 border-emerald-200"
        >
          <div className="text-center">
            <div className="text-5xl mb-4">📅</div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Book a session
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">{bookingIntro}</p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-700 transition-colors shadow-lg"
            >
              Book now
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center gap-8 text-gray-700">
            <div className="flex items-center">
              <span className="text-2xl mr-2">📧</span>
              <a
                href={`mailto:${COACH_EMAIL}`}
                className="text-lg hover:text-emerald-600 transition-colors"
              >
                {COACH_EMAIL}
              </a>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center mb-1">
                <span className="text-2xl mr-2">📞</span>
                <a
                  href={telHref}
                  className="text-lg hover:text-emerald-600 transition-colors"
                >
                  {COACH_PHONE_DISPLAY}
                </a>
              </div>
              <span className="text-sm text-gray-500">Text • Call • WhatsApp</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">📍</span>
              <span className="text-lg">{locationLabel}</span>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            I usually reply within 24 hours. If I’m coaching, I’ll respond later
            that day.
          </p>
        </div>
      </div>
    </section>
  );
}
