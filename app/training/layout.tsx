import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Training & Approach | David's Soccer Training (Gilbert & Mesa)",
  description:
    "What we work on in private soccer training for ages 8–16 in Gilbert and Mesa — core skills, how sessions run, and getting started.",
  alternates: {
    canonical: "/training",
  },
};

export default function TrainingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
