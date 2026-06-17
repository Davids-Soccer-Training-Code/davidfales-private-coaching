import MainHeader from "@/app/components/layout/MainHeader";
import MainFooter from "@/app/components/layout/MainFooter";
import StickyContactBar from "@/app/components/layout/StickyContactBar";
import AboutSection from "@/app/components/sections/AboutSection";
import CredentialsSection from "@/app/components/sections/CredentialsSection";
import QuickContactCTA from "@/app/components/sections/QuickContactCTA";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-white to-emerald-50 pb-24 md:pb-0">
      <MainHeader />
      <AboutSection />
      <CredentialsSection />
      <QuickContactCTA />
      <StickyContactBar />
      <MainFooter />
    </div>
  );
}
