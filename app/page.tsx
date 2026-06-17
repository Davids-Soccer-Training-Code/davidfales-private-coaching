import Script from "next/script";
import MainHeader from "@/app/components/layout/MainHeader";
import MainFooter from "@/app/components/layout/MainFooter";
import StickyContactBar from "@/app/components/layout/StickyContactBar";
import Hero from "@/app/components/sections/Hero";
import HowItWorks from "@/app/components/sections/HowItWorks";
import WhatWeWorkOn from "@/app/components/sections/WhatWeWorkOn";
import TrainingLocation from "@/app/components/sections/TrainingLocation";
import QuickContactCTA from "@/app/components/sections/QuickContactCTA";
import ReviewsCarousel from "@/app/components/home/ReviewsCarousel";
import OutboundLinks from "@/app/components/home/OutboundLinks";
import StoriesPreview from "@/app/components/home/StoriesPreview";
import BlogPreview from "@/app/components/home/BlogPreview";

const Home = () => {
  // Basic LocalBusiness Schema for homepage
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "David's Soccer Training",
    url: "https://www.davidssoccertraining.com",
    areaServed: ["Gilbert, AZ", "Mesa, AZ", "East Valley, AZ"],
    description:
      "Private soccer training in Gilbert and Mesa for ages 8–16. 1-on-1 and small group sessions scheduled by text.",
    telephone: "+17206122979",
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-white to-emerald-50 pb-24 md:pb-0">
      {/* Structured Data */}
      <Script
        id="local-business-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />

      <MainHeader />

      <Hero />

      {/* Social proof */}
      <section id="reviews" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Reviews
            </h2>
            <p className="text-xl text-gray-600">
              What parents are saying about training with Coach David.
            </p>
          </div>
          <ReviewsCarousel />
        </div>
      </section>

      <HowItWorks />

      {/* Short "what we work on" teaser → full detail on /training */}
      <WhatWeWorkOn ctaHref="/training" ctaLabel="See how training works" />

      <StoriesPreview />

      <TrainingLocation />

      <OutboundLinks />

      <QuickContactCTA />

      <BlogPreview />

      <StickyContactBar />

      <MainFooter />
    </div>
  );
};

export default Home;
