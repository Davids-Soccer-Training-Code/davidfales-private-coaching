import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testing & Player Dashboard | David's Soccer Training",
  description:
    "Data-driven skill assessments and the Player Dashboard that tracks tests, goals, and progress over time for youth soccer players in Gilbert and Mesa.",
  alternates: {
    canonical: "/testing",
  },
};

export default function TestingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
