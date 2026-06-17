import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing & Packages | David's Soccer Training (Gilbert & Mesa)",
  description:
    "Private soccer training packages for ages 8–16 in Gilbert and Mesa. 12-week, 6-week, and flexible options. 1-on-1 and small group session pricing.",
  alternates: {
    canonical: "/pricing",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
