import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Coach David | David's Soccer Training (Gilbert & Mesa)",
  description:
    "Meet Coach David — coaching philosophy, USSF & Coerver licenses, and experience developing youth soccer players ages 8–16 in Gilbert and Mesa.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
