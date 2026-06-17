import MainHeader from "@/app/components/layout/MainHeader";
import MainFooter from "@/app/components/layout/MainFooter";
import StickyContactBar from "@/app/components/layout/StickyContactBar";
import ContactSection from "@/app/components/sections/ContactSection";
import FaqSection from "@/app/components/sections/FaqSection";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-white to-emerald-50 pb-24 md:pb-0">
      <MainHeader />
      <ContactSection />
      <FaqSection />
      <StickyContactBar />
      <MainFooter />
    </div>
  );
}
