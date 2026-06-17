import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | David's Soccer Training (Gilbert & Mesa)",
  description:
    "Get in touch about private soccer training in Gilbert and Mesa. Text Coach David, send a quick form, or book a 15-minute intro call.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
