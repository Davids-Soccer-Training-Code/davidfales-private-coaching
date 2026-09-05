import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mini Groups | 2-6 Player Soccer Training in Gilbert, AZ",
  description:
    "Mini group soccer training capped at 6 players - $40 per player, Fridays and Sunday nights at Gilbert Regional Park in Gilbert, AZ. Sign up online in under a minute.",
  alternates: {
    canonical: "/mini-groups",
  },
  openGraph: {
    type: "website",
    url: "/mini-groups",
    title: "Mini Groups | David's Soccer Training",
    description:
      "2-6 players, never more. $40 per player, Fridays and Sunday nights at Gilbert Regional Park.",
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
      "Fridays 6-7pm and Sundays 5-6pm or 6-7pm at Gilbert Regional Park. $40 per player.",
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
