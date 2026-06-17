import Link from "next/link";
import { PLAYER_DASHBOARD_URL } from "@/app/lib/contact";

const footerLinks = [
  { href: "/training", label: "Training" },
  { href: "/testing", label: "Testing" },
  { href: "/pricing", label: "Pricing" },
  { href: "/group-sessions", label: "Group Sessions" },
  { href: "/stories", label: "Player Stories" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function MainFooter() {
  return (
    <footer className="bg-linear-to-r from-emerald-700 to-emerald-800 text-white py-10 px-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center mb-4">
          <img
            src="/logo.jpeg"
            alt="David’s Soccer Training Logo"
            className="h-12 w-auto"
          />
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-emerald-100 hover:text-white transition-colors text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={PLAYER_DASHBOARD_URL}
            target="_blank"
            rel="noreferrer"
            className="text-emerald-100 hover:text-white transition-colors text-sm font-medium"
          >
            Player Dashboard
          </a>
        </nav>

        <p className="text-emerald-100 mb-2">
          © 2025 David’s Soccer Training. All rights reserved.
        </p>
        <p className="text-emerald-200 text-sm">
          Private soccer training in Gilbert and Mesa for ages 8–16.
        </p>
      </div>
    </footer>
  );
}
