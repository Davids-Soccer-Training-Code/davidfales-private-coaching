import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Extra Hour | The Development System Behind Every Session",
  description:
    "Most private training is one hour of drills and six days of guessing. We test, rank, document, and report on every player - with stats, coach's notes, progress reports every 6 sessions, and an app where parents can see all of it.",
  alternates: {
    canonical: "/the-extra-hour",
  },
  openGraph: {
    type: "website",
    url: "/the-extra-hour",
    title: "The Extra Hour | David's Soccer Training",
    description:
      "The session may be one hour. The development system is not. Stats, a 7-level rank system, coach's notes every session, and progress reports every 6.",
    siteName: "David's Soccer Training",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "David's Soccer Training - The Extra Hour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Extra Hour | David's Soccer Training",
    description:
      "The session may be one hour. The development system is not.",
    images: ["/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TheExtraHourLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
