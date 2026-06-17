import MainHeader from "@/app/components/layout/MainHeader";
import MainFooter from "@/app/components/layout/MainFooter";
import StickyContactBar from "@/app/components/layout/StickyContactBar";
import TestingSection from "@/app/components/sections/TestingSection";
import QuickContactCTA from "@/app/components/sections/QuickContactCTA";

export default function TestingPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-white to-emerald-50 pb-24 md:pb-0">
      <MainHeader />
      <TestingSection />
      <QuickContactCTA />
      <StickyContactBar />
      <MainFooter />
    </div>
  );
}
