import MainHeader from "@/app/components/layout/MainHeader";
import MainFooter from "@/app/components/layout/MainFooter";
import StickyContactBar from "@/app/components/layout/StickyContactBar";
import StaffSection from "@/app/components/sections/StaffSection";
import QuickContactCTA from "@/app/components/sections/QuickContactCTA";

export const dynamic = "force-dynamic";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-white to-emerald-50 pb-24 md:pb-0">
      <MainHeader />
      <StaffSection />
      <QuickContactCTA />
      <StickyContactBar />
      <MainFooter />
    </div>
  );
}
