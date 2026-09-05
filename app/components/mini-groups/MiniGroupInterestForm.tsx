"use client";

import React, { useState } from "react";
import { MINI_GROUP_SLOTS } from "@/app/lib/miniGroups";

const EMPTY_FORM = {
  parentName: "",
  email: "",
  phone: "",
  playerName: "",
};

const FIELDS: {
  name: keyof typeof EMPTY_FORM;
  label: string;
  type: string;
  autoComplete: string;
  placeholder: string;
}[] = [
  {
    name: "parentName",
    label: "Parent name",
    type: "text",
    autoComplete: "name",
    placeholder: "Your name",
  },
  {
    name: "playerName",
    label: "Player name",
    type: "text",
    autoComplete: "off",
    placeholder: "Your player's name",
  },
  {
    name: "phone",
    label: "Phone",
    type: "tel",
    autoComplete: "tel",
    placeholder: "(480) 555-0134",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    autoComplete: "email",
    placeholder: "you@example.com",
  },
];

export default function MiniGroupInterestForm() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [preferredTimes, setPreferredTimes] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const toggleTime = (id: string) => {
    setPreferredTimes((current) =>
      current.includes(id)
        ? current.filter((value) => value !== id)
        : [...current, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/mini-groups/interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, preferredTimes }),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        setErrorMessage(
          payload.error || "Something went wrong. Please text us instead."
        );
        setStatus("error");
        return;
      }

      setForm(EMPTY_FORM);
      setPreferredTimes([]);
      setStatus("success");
    } catch (error) {
      console.error("Failed to submit mini group interest:", error);
      setErrorMessage("Something went wrong. Please text us instead.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-3xl shadow-2xl border-2 border-emerald-200 p-10 text-center">
        <p className="text-5xl mb-4">✅</p>
        <h3 className="text-3xl font-bold text-gray-900 mb-3">You&apos;re on the list</h3>
        <p className="text-lg text-gray-700 max-w-md mx-auto">
          Coach David will text you within a day to confirm which group your
          player fits best and what to bring.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-emerald-700 font-semibold hover:text-emerald-800"
        >
          Sign up another player
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl shadow-2xl border-2 border-emerald-200 p-8 md:p-10"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        {FIELDS.map((field) => (
          <div key={field.name}>
            <label
              htmlFor={field.name}
              className="block text-sm font-semibold text-gray-900 mb-2"
            >
              {field.label}
            </label>
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              autoComplete={field.autoComplete}
              placeholder={field.placeholder}
              value={form[field.name]}
              onChange={handleChange}
              required
              className="w-full rounded-xl border-2 border-emerald-100 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none"
            />
          </div>
        ))}
      </div>

      <fieldset className="mt-7">
        <legend className="text-sm font-semibold text-gray-900 mb-1">
          Which times could work?
        </legend>
        <p className="text-sm text-gray-600 mb-3">
          Optional - check any that work, or leave it blank and we&apos;ll find
          the best fit.
        </p>
        <div className="grid sm:grid-cols-3 gap-3">
          {MINI_GROUP_SLOTS.map((slot) => {
            const checked = preferredTimes.includes(slot.id);
            return (
              <label
                key={slot.id}
                className={`flex items-center gap-3 rounded-xl border-2 px-4 py-3 cursor-pointer transition-colors ${
                  checked
                    ? "border-emerald-500 bg-emerald-50"
                    : "border-emerald-100 hover:border-emerald-300"
                }`}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleTime(slot.id)}
                  className="h-5 w-5 accent-emerald-600"
                />
                <span className="text-sm">
                  <span className="block font-semibold text-gray-900">
                    {slot.day}
                  </span>
                  <span className="block text-gray-600">{slot.time}</span>
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      {status === "error" ? (
        <p className="mt-6 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-red-700">
          {errorMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-7 w-full bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-700 transition-colors shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending..." : "Save My Spot"}
      </button>

      <p className="mt-4 text-center text-sm text-gray-600">
        No payment now. Coach David texts you to confirm placement, then you pay
        at the field.
      </p>
    </form>
  );
}
