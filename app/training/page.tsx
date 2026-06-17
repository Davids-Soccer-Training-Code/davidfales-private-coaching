import MainHeader from "@/app/components/layout/MainHeader";
import MainFooter from "@/app/components/layout/MainFooter";
import StickyContactBar from "@/app/components/layout/StickyContactBar";
import WhatWeWorkOn from "@/app/components/sections/WhatWeWorkOn";
import TrainingProcess from "@/app/components/sections/TrainingProcess";
import TrainingLocation from "@/app/components/sections/TrainingLocation";
import QuickContactCTA from "@/app/components/sections/QuickContactCTA";

export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-white to-emerald-50 pb-24 md:pb-0">
      <MainHeader />
      <WhatWeWorkOn />
      <TrainingProcess />
      <TrainingLocation />
      <QuickContactCTA />
      <StickyContactBar />
      <MainFooter />
    </div>
  );
}
