"use client";

import { useState, useEffect, useCallback } from "react";

type Review = {
  name: string;
  initial: string;
  color: string;
  text: string;
};

const REVIEWS: Review[] = [
  {
    name: "Robert B",
    initial: "R",
    color: "bg-blue-600",
    text: "David is an exceptional coach and he is very detail oriented. His sessions are intense and my girls are advancing each week. He keeps track of their progress and logs it to see how they are progressing. He provides an outline at each training session for parents to follow along as well. His energy and commitment to bringing our daughters' game to the next level is the best we have seen. It is showing in their game play each week as they continue to get better. We highly recommend coach David.",
  },
  {
    name: "Elizabeth Nieves",
    initial: "E",
    color: "bg-amber-600",
    text: "Coach David has been an exceptional coach for my daughter. He is extremely detailed, intentional, and fully invested in every training session. Each session is focused and intense, and we've already seen noticeable improvement in just a few weeks. He tracks her progress closely and provides clear outlines of each session, which shows how committed he is to her development. His energy, dedication, and genuine passion for helping her grow truly stand out. I highly recommend Coach David to anyone looking for a coach who truly cares about their athletes' progress!",
  },
  {
    name: "Kiki Bermudez",
    initial: "K",
    color: "bg-rose-600",
    text: "After enrolling my daughter in a soccer team I decided to get her extra help. She started training with coach David and she has improved with her foot to ball coordination and scoring strategies, not to mention how much more confidence she now plays with. I highly recommend coach David as he is very invested in your child's performance and he is a professional to work with. He is always well prepared for each session including a full report with the focus points for each training. Thank you coach David.",
  },
  {
    name: "Eric Boudreau",
    initial: "E",
    color: "bg-emerald-600",
    text: "We have loved how coach David has set a baseline of my child's skills, how we will retest halfway through and then do final testing. This sort of puts his money where his mouth is. Very impressive.",
  },
  {
    name: "Chadwick Tialino",
    initial: "C",
    color: "bg-indigo-600",
    text: "Highly recommend Coach David — a fantastic experience for our family.",
  },
];

const GOOGLE_REVIEW_URL = "https://g.page/r/CbrmGhQt_77aEBI/review";

function Stars() {
  return (
    <div className="flex gap-0.5 text-yellow-400" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.446a1 1 0 00-.364 1.118l1.287 3.957c.3.92-.755 1.688-1.54 1.118l-3.366-2.446a1 1 0 00-1.175 0l-3.367 2.446c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.343 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsCarousel() {
  const [index, setIndex] = useState(0);
  const count = REVIEWS.length;

  const goTo = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count]
  );
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, 15000);
    return () => clearInterval(timer);
  }, [count]);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative">
        {/* Carousel viewport */}
        <div className="overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {REVIEWS.map((review) => (
              <div key={review.name} className="w-full flex-shrink-0 px-1">
                <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border-2 border-emerald-100 h-full">
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className={`${review.color} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}
                    >
                      {review.initial}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {review.name}
                      </p>
                      <Stars />
                    </div>
                    <svg
                      className="w-7 h-7 ml-auto flex-shrink-0"
                      viewBox="0 0 48 48"
                      aria-label="Google review"
                    >
                      <path
                        fill="#4285F4"
                        d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
                      />
                      <path
                        fill="#34A853"
                        d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"
                      />
                      <path
                        fill="#EA4335"
                        d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    "{review.text}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          aria-label="Previous review"
          className="absolute -left-3 md:-left-5 top-1/2 -translate-y-1/2 bg-white hover:bg-emerald-600 hover:text-white text-emerald-700 w-11 h-11 rounded-full shadow-lg flex items-center justify-center transition-colors duration-200 border border-emerald-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={next}
          aria-label="Next review"
          className="absolute -right-3 md:-right-5 top-1/2 -translate-y-1/2 bg-white hover:bg-emerald-600 hover:text-white text-emerald-700 w-11 h-11 rounded-full shadow-lg flex items-center justify-center transition-colors duration-200 border border-emerald-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {REVIEWS.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to review ${i + 1}`}
            className={`h-2.5 rounded-full transition-all duration-200 ${
              i === index ? "w-8 bg-emerald-600" : "w-2.5 bg-emerald-200 hover:bg-emerald-300"
            }`}
          />
        ))}
      </div>

      {/* Write a review CTA */}
      <div className="mt-8 text-center">
        <a
          href={GOOGLE_REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
        >
          Write a Review
        </a>
      </div>
    </div>
  );
}
