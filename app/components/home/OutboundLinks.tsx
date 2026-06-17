import Link from "next/link";
import { PLAYER_DASHBOARD_URL } from "@/app/lib/contact";

type LinkCard = {
  href: string;
  icon: string;
  title: string;
  desc: string;
  external?: boolean;
};

const cards: LinkCard[] = [
  {
    href: "/training",
    icon: "⚽",
    title: "Training & Approach",
    desc: "The skills we focus on and how each session runs.",
  },
  {
    href: "/testing",
    icon: "📊",
    title: "Testing & Player Dashboard",
    desc: "Skill assessments and the dashboard that tracks progress.",
  },
  {
    href: "/pricing",
    icon: "💳",
    title: "Pricing & Packages",
    desc: "Package options, session formats, and what's included.",
  },
  {
    href: "/about",
    icon: "🧑‍🏫",
    title: "About Coach David",
    desc: "Background, coaching philosophy, licenses & experience.",
  },
  {
    href: "/stories",
    icon: "🌟",
    title: "Player Stories",
    desc: "Real progress and wins from players who train with Coach David.",
  },
  {
    href: "/group-sessions",
    icon: "👥",
    title: "Group Sessions",
    desc: "Upcoming small-group sessions you can join.",
  },
  {
    href: "/blog",
    icon: "📝",
    title: "Blog",
    desc: "Tips, techniques, and coaching insights.",
  },
  {
    href: "/gallery",
    icon: "📸",
    title: "Gallery",
    desc: "Photos from training sessions.",
  },
  {
    href: PLAYER_DASHBOARD_URL,
    icon: "📱",
    title: "Player Dashboard",
    desc: "Log in to view tests, goals, and progress.",
    external: true,
  },
];

export default function OutboundLinks() {
  return (
    <section className="py-20 px-6 bg-linear-to-b from-white to-emerald-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore everything
          </h2>
          <p className="text-xl text-gray-600">
            Want more detail before you reach out? Here's where to find it.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            const inner = (
              <>
                <div className="text-4xl mb-3">{card.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {card.desc}
                </p>
                <span className="inline-block mt-4 text-emerald-700 font-semibold text-sm">
                  Learn more →
                </span>
              </>
            );

            const className =
              "block bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-emerald-100";

            return card.external ? (
              <a
                key={card.title}
                href={card.href}
                target="_blank"
                rel="noreferrer"
                className={className}
              >
                {inner}
              </a>
            ) : (
              <Link key={card.title} href={card.href} className={className}>
                {inner}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
