import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet the Staff | David's Soccer Training (Gilbert & Mesa)",
  description:
    "Meet the coaches at David's Soccer Training — licenses, backgrounds, training areas across the East Valley, and a direct booking link for each coach.",
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
