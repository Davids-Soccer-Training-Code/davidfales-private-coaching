"use client";

import { useState } from "react";
import Link from "next/link";
import {
  PLAYER_DASHBOARD_URL,
  BOOKING_URL,
  defaultTextTemplate,
  buildSmsHref,
} from "@/app/lib/contact";

type NavItem = { href: string; label: string; external?: boolean };

const programLinks: NavItem[] = [
  { href: "/training", label: "Training & Approach" },
  { href: "/testing", label: "Testing & Dashboard" },
  { href: "/pricing", label: "Pricing & Packages" },
  { href: "/group-sessions", label: "Group Sessions" },
];

const exploreLinks: NavItem[] = [
  { href: "/stories", label: "Player Stories" },
  { href: "/about", label: "About Coach David" },
  { href: "/blog", label: "Blog" },
  { href: "/gallery", label: "Gallery" },
  { href: PLAYER_DASHBOARD_URL, label: "Player Dashboard", external: true },
];

function NavLink({ item, onClick }: { item: NavItem; onClick?: () => void }) {
  const cls =
    "block px-4 py-2.5 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors text-sm font-medium";
  return item.external ? (
    <a href={item.href} target="_blank" rel="noreferrer" className={cls}>
      {item.label}
    </a>
  ) : (
    <Link href={item.href} className={cls} onClick={onClick}>
      {item.label}
    </Link>
  );
}

function Dropdown({ label, items }: { label: string; items: NavItem[] }) {
  return (
    <div className="relative group">
      <button className="flex items-center gap-1 px-2 py-2 font-medium text-sm hover:text-emerald-200 transition-colors">
        {label}
        <svg
          className="w-4 h-4 transition-transform group-hover:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {/* pt-2 bridges the gap so hover doesn't drop */}
      <div className="absolute left-0 top-full pt-2 hidden group-hover:block group-focus-within:block">
        <div className="w-56 bg-white rounded-xl shadow-xl border border-emerald-100 overflow-hidden py-1">
          {items.map((item) => (
            <NavLink key={item.label} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function MainHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const smsHref = buildSmsHref(defaultTextTemplate);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="bg-linear-to-r from-emerald-600 to-emerald-700 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6 py-3">
        <div className="flex justify-between items-center gap-4">
          {/* Wordmark (logo icon removed for a cleaner bar) */}
          <Link href="/" className="shrink-0">
            <span className="block text-lg lg:text-2xl font-bold tracking-tight leading-none">
              David's Soccer Training
            </span>
            <span className="block text-emerald-100 text-xs mt-1 hidden sm:block">
              Coach David • Gilbert, Mesa & nearby East Valley
            </span>
          </Link>

          {/* Desktop nav + CTAs */}
          <div className="hidden lg:flex items-center gap-2">
            <nav className="flex items-center gap-1">
              <Dropdown label="Program" items={programLinks} />
              <Dropdown label="Explore" items={exploreLinks} />
              <Link
                href="/contact"
                className="px-2 py-2 font-medium text-sm hover:text-emerald-200 transition-colors"
              >
                Contact
              </Link>
            </nav>

            <div className="flex items-center gap-2 ml-2">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center bg-white text-emerald-700 px-4 py-2 rounded-full font-semibold text-sm hover:bg-emerald-50 transition-colors shadow"
              >
                Book a session
              </a>
              <a
                href={smsHref}
                className="inline-flex items-center justify-center bg-transparent text-white px-4 py-2 rounded-full font-semibold text-sm border-2 border-white/80 hover:bg-white/10 transition-colors"
              >
                Text Coach David
              </a>
            </div>
          </div>

          {/* Mobile: CTA + hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-white text-emerald-700 px-3 py-1.5 rounded-full font-semibold text-xs hover:bg-emerald-50 transition-colors"
            >
              Book
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 hover:bg-emerald-600 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-emerald-500 pt-4 space-y-5">
            <div>
              <p className="text-emerald-200 text-xs font-semibold uppercase tracking-wide px-1 mb-1">
                Program
              </p>
              <nav className="flex flex-col">
                {programLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="py-2 font-medium text-base hover:text-emerald-200 transition-colors"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="text-emerald-200 text-xs font-semibold uppercase tracking-wide px-1 mb-1">
                Explore
              </p>
              <nav className="flex flex-col">
                {exploreLinks.map((item) =>
                  item.external ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="py-2 font-medium text-base hover:text-emerald-200 transition-colors"
                      onClick={closeMenu}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="py-2 font-medium text-base hover:text-emerald-200 transition-colors"
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  )
                )}
                <Link
                  href="/contact"
                  className="py-2 font-medium text-base hover:text-emerald-200 transition-colors"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </nav>
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                className="text-center bg-white text-emerald-700 py-3 rounded-full font-semibold shadow"
              >
                Book a session
              </a>
              <a
                href={smsHref}
                className="text-center bg-transparent text-white py-3 rounded-full font-semibold border-2 border-white/80"
              >
                Text Coach David
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
