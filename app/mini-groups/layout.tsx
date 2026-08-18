import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mini Groups | 2-6 Player Soccer Training in Gilbert, AZ",
  description:
    "Mini group soccer training capped at 6 players - private-session coaching quality for $30-$50 per session. Browse upcoming mini groups and sign up online.",
  alternates: {
    canonical: "/mini-groups",
  },
  openGraph: {
    type: "website",
    url: "/mini-groups",
    title: "Mini Groups | David's Soccer Training",
    description:
      "2-6 players, never more. The same coaching quality as a private session at roughly half the price.",
    siteName: "David's Soccer Training",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "David's Soccer Training Mini Groups",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mini Groups | Sign Up Online",
    description:
      "View upcoming mini groups, enter player details, and checkout online.",
    images: ["/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MiniGroupsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
