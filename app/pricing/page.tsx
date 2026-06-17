import MainHeader from "@/app/components/layout/MainHeader";
import MainFooter from "@/app/components/layout/MainFooter";
import StickyContactBar from "@/app/components/layout/StickyContactBar";
import PricingSection from "@/app/components/sections/PricingSection";
import FaqSection from "@/app/components/sections/FaqSection";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-white to-emerald-50 pb-24 md:pb-0">
      <MainHeader />
      <PricingSection />
      <FaqSection />
      <StickyContactBar />
      <MainFooter />
    </div>
  );
}
