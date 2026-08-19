import MainHeader from "@/app/components/layout/MainHeader";
import MainFooter from "@/app/components/layout/MainFooter";
import StickyContactBar from "@/app/components/layout/StickyContactBar";
import ExtraHourHero from "@/app/components/extra-hour/ExtraHourHero";
import SixPillars from "@/app/components/extra-hour/SixPillars";
import SystemBreakdown from "@/app/components/extra-hour/SystemBreakdown";
import RankLadder from "@/app/components/extra-hour/RankLadder";
import FeedbackSystem from "@/app/components/extra-hour/FeedbackSystem";
import CoachStandard from "@/app/components/extra-hour/CoachStandard";
import QuickContactCTA from "@/app/components/sections/QuickContactCTA";

export default function TheExtraHourPage() {
  return (
    <div className="min-h-screen bg-white pb-24 md:pb-0">
      <MainHeader />
      <ExtraHourHero />
      <SixPillars />
      <SystemBreakdown />
      <RankLadder />
      <FeedbackSystem />
      <CoachStandard />
      <QuickContactCTA />
      <StickyContactBar />
      <MainFooter />
    </div>
  );
}
