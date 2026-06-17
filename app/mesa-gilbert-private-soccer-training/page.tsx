import Script from "next/script";
import MainHeaderMinimal from "@/app/components/layout/MainHeaderMinimal";
import MainFooter from "@/app/components/layout/MainFooter";
import StickyContactBar from "@/app/components/layout/StickyContactBar";
import Hero from "@/app/components/sections/Hero";
import WhoThisIsFor from "@/app/components/sections/WhoThisIsFor";
import HowItWorks from "@/app/components/sections/HowItWorks";
import WhatWeWorkOn from "@/app/components/sections/WhatWeWorkOn";
import TestingSection from "@/app/components/sections/TestingSection";
import AboutSection from "@/app/components/sections/AboutSection";
import CredentialsSection from "@/app/components/sections/CredentialsSection";
import GettingStarted from "@/app/components/sections/GettingStarted";
import PricingSection from "@/app/components/sections/PricingSection";
import FaqSection from "@/app/components/sections/FaqSection";
import ContactSection from "@/app/components/sections/ContactSection";
import ReviewsCarousel from "@/app/components/home/ReviewsCarousel";
import BlogPreview from "@/app/components/home/BlogPreview";
import { buildSmsHref } from "@/app/lib/contact";

const mesaTemplate =
  "Hi David, my player is __ years old. Main goal is __. Best days are __. We’re in Mesa/Gilbert.";

const mesaFaqItems = [
  {
    q: "Where exactly do sessions happen in Mesa and Gilbert?",
    a: "We meet at quality public parks like Freestone Park, Discovery Park, Hetchler Park (Gilbert Soccer Complex), Red Mountain Park, and other Mesa/Gilbert locations. I’ll confirm the exact spot when we schedule based on what’s most convenient for you.",
  },
  {
    q: "What age is this for?",
    a: "Ages 8–16. Beginner to club level. Most of my players are in Mesa and Gilbert club soccer programs or looking to join one.",
  },
  {
    q: "Do you work with players from specific Gilbert/Mesa soccer clubs?",
    a: "Yes! I work with players from various East Valley clubs including Gilbert Youth Soccer Association (GYSA), Mesa United, and others. Training complements what they’re learning at club practice.",
  },
  {
    q: "What should my player bring?",
    a: "Ball, water, cleats, shin guards. Parks have shade but bring sunscreen for Arizona weather.",
  },
  {
    q: "Do you do small groups with my player’s teammates?",
    a: "Absolutely! Small groups (2-7 players) are great for teammates who want to train together. Just text me to coordinate.",
  },
  {
    q: "How do I know which park we’ll use?",
    a: "When you text me your location in Mesa or Gilbert, I’ll suggest 2-3 nearby parks and you can pick what works best for your schedule.",
  },
  {
    q: "What if weather is bad?",
    a: "Arizona weather is usually great, but if it’s raining or too hot (110+), we’ll reschedule. I’ll text you in advance.",
  },
  {
    q: "How fast will we see improvement?",
    a: "Most players improve fastest with consistency. I’ll give a simple plan after the first session.",
  },
];

const MesaGilbertLandingPage = () => {
  const smsHref = buildSmsHref(mesaTemplate);

  // Structured Data for SEO
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id":
      "https://www.davidssoccertraining.com/mesa-gilbert-private-soccer-training",
    name: "David's Soccer Training - Mesa & Gilbert",
    url: "https://www.davidssoccertraining.com/mesa-gilbert-private-soccer-training",
    telephone: "+17206122979",
    email: "davidfalesct@gmail.com",
    description:
      "Private soccer training for youth players ages 8-16 in Mesa and Gilbert, Arizona. 1-on-1 and small group sessions with progress tracking.",
    priceRange: "$60-$100",
    areaServed: [
      {
        "@type": "City",
        name: "Gilbert",
        "@id": "https://en.wikipedia.org/wiki/Gilbert,_Arizona",
      },
      {
        "@type": "City",
        name: "Mesa",
        "@id": "https://en.wikipedia.org/wiki/Mesa,_Arizona",
      },
      {
        "@type": "Place",
        name: "East Valley, Arizona",
      },
    ],
    geo: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "33.3528",
        longitude: "-111.7890",
      },
      geoRadius: "15000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Soccer Training Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "1-on-1 Private Soccer Training",
            description: "Individual soccer training session",
          },
          price: "60",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "2-Player Small Group Training",
            description: "Soccer training for 2 players",
          },
          price: "80",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "3-Player Small Group Training",
            description: "Soccer training for 3 players",
          },
          price: "90",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Small Group Training",
            description: "Soccer training for 2-7 players",
          },
          price: "70",
          priceCurrency: "USD",
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      bestRating: "5",
      ratingCount: "1",
    },
    sameAs: ["https://app.davidssoccertraining.com/book"],
  };

  // FAQPage Schema for Mesa/Gilbert-specific questions
  const faqPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: mesaFaqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  // BreadcrumbList Schema for better navigation
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.davidssoccertraining.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Mesa & Gilbert Private Soccer Training",
        item: "https://www.davidssoccertraining.com/mesa-gilbert-private-soccer-training",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-white to-emerald-50 pb-24 md:pb-0">
      {/* Structured Data - LocalBusiness */}
      <Script
        id="local-business-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />

      {/* Structured Data - FAQPage */}
      <Script
        id="faq-page-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageJsonLd),
        }}
      />

      {/* Structured Data - BreadcrumbList */}
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      <MainHeaderMinimal />

      <Hero
        eyebrow="Serving Mesa & Gilbert"
        titleLead="Private Soccer Training in "
        titleHighlight="Mesa and Gilbert, Arizona"
        subtitle="1-on-1 and small group sessions for ages 8–16 at convenient East Valley parks. Clear goals, real improvement, and a coach parents can trust."
        bullets={[
          "Customized sessions based on your player’s needs",
          "Progress tracking with simple skill benchmarks",
          "Flexible scheduling by text at Mesa/Gilbert parks",
        ]}
        template={mesaTemplate}
        note="Text me and we’ll confirm time & location at your preferred Mesa or Gilbert park."
        titleAs="h1"
      />

      <WhoThisIsFor
        title="Who This Is For: Youth Soccer Players in Mesa & Gilbert"
        subtitle="Designed for Mesa and Gilbert families who want structured training, clear goals, and consistent progress."
        cards={[
          {
            icon: "👦👧",
            title: "Ages 8-16",
            desc: "Training programs tailored to youth players at the perfect age for skill development and growth",
          },
          {
            icon: "📈",
            title: "All Skill Levels",
            desc: "From beginners taking their first steps to high-level players looking to reach the next stage",
          },
          {
            icon: "🎯",
            title: "Convenient East Valley Locations",
            desc: "One-on-one sessions with a customized plan for your player at parks near you, plus clear goals and measurable progress.",
          },
        ]}
      />

      <HowItWorks
        title="How Private Soccer Training Works in the East Valley"
        template={mesaTemplate}
        steps={[
          {
            step: "Step 1",
            title: "Text me your player’s age + main goal",
            desc: "We’ll pick one priority (confidence on the ball, passing, finishing, etc.).",
            icon: "💬",
          },
          {
            step: "Step 2",
            title: "We pick a park in Mesa or Gilbert that works for you",
            desc: "Popular options: Freestone Park, Hetchler Park, Discovery Park, Red Mountain Park, or your favorite local field.",
            icon: "📍",
          },
          {
            step: "Step 3",
            title: "We train — you get a simple progress plan",
            desc: "Short benchmarks so you can see improvement session to session.",
            icon: "✅",
          },
        ]}
      />

      {/* Training Locations (Parks) Section - unique to this landing page */}
      <section
        id="training-locations"
        className="py-20 px-6 bg-linear-to-b from-white to-emerald-50"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Where We Train: Mesa & Gilbert Parks
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sessions happen at safe, convenient public parks in Mesa and
              Gilbert. We&apos;ll confirm the exact location when we schedule
              based on your preference and availability.
            </p>
          </div>

          {/* Gilbert Parks */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Gilbert Area Parks
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Freestone Park */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-emerald-100">
                <div className="text-4xl mb-3">⚽</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Freestone Park
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  Gilbert&apos;s first major district park with 88 acres of open
                  space
                </p>
                <p className="text-gray-500 text-xs">
                  📍 1045 E. Juniper Rd, Gilbert
                </p>
                <ul className="mt-3 space-y-1 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    Large open fields
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    Well-maintained grass
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    Family-friendly amenities
                  </li>
                </ul>
              </div>

              {/* Discovery Park */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-emerald-100">
                <div className="text-4xl mb-3">🌳</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Discovery Park
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  Modern district park in the Santan Village area
                </p>
                <p className="text-gray-500 text-xs">
                  📍 2214 E. Pecos Rd, Gilbert
                </p>
                <ul className="mt-3 space-y-1 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    Open turf areas
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    Convenient parking
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    Great for training
                  </li>
                </ul>
              </div>

              {/* Hetchler Park */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-emerald-100">
                <div className="text-4xl mb-3">🏟️</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Hetchler Park (Gilbert Soccer Complex)
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  Premier soccer facility with 22 fields (10 lighted)
                </p>
                <p className="text-gray-500 text-xs">
                  📍 4260 S. Greenfield Rd, Gilbert
                </p>
                <ul className="mt-3 space-y-1 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    Professional fields
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    Multiple field options
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    Soccer-specific complex
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mesa Parks */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Mesa Area Parks
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Red Mountain Park */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-emerald-100">
                <div className="text-4xl mb-3">🏔️</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Red Mountain Park
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  Popular Mesa park with excellent training space
                </p>
                <p className="text-gray-500 text-xs">📍 Mesa, AZ</p>
                <ul className="mt-3 space-y-1 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    Quality fields
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    Good location
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    Open space
                  </li>
                </ul>
              </div>

              {/* Other Mesa parks */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-emerald-100">
                <div className="text-4xl mb-3">⚽</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Additional Mesa Parks
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  We also train at other quality Mesa parks based on your
                  location
                </p>
                <ul className="mt-3 space-y-1 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    Riverview area
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    Multiple locations
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    Flexible options
                  </li>
                </ul>
              </div>

              {/* Custom location */}
              <div className="bg-linear-to-br from-emerald-50 to-white p-6 rounded-2xl shadow-lg border-2 border-emerald-200">
                <div className="text-4xl mb-3">📍</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Your Preferred Location
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  Have a park closer to you? Let&apos;s discuss options.
                </p>
                <ul className="mt-3 space-y-1 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    Flexible scheduling
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    Convenient for you
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    Just ask when booking
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Flexibility Note */}
          <div className="mt-10 text-center">
            <div className="bg-linear-to-r from-emerald-50 to-white p-8 rounded-2xl shadow-md border border-emerald-200 max-w-3xl mx-auto">
              <p className="text-gray-800 text-lg mb-2">
                <span className="font-bold text-emerald-600">
                  Not near these parks?
                </span>
              </p>
              <p className="text-gray-700">
                We&apos;re flexible! If you have a preferred park in the
                Mesa/Gilbert area, just mention it when you text. We&apos;ll make
                it work for your schedule and location.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href={smsHref}
              className="inline-flex items-center justify-center bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-700 transition-colors shadow-lg"
            >
              Text me your location
            </a>
          </div>
        </div>
      </section>

      <WhatWeWorkOn title="What We Work On: Core Soccer Skills for Mesa & Gilbert Players" />

      <TestingSection />

      <AboutSection
        title="Meet Your Mesa & Gilbert Soccer Coach"
        bio="I'm a dedicated soccer coach with a passion for helping young players reach their full potential. What sets my coaching apart is a clear plan + measurable benchmarks, paired with supportive coaching that builds confidence and consistency. I'm proud to serve Mesa and Gilbert families."
      />

      <CredentialsSection />

      <GettingStarted />

      {/* Reviews - Mesa/Gilbert specific */}
      <section id="reviews" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Mesa &amp; Gilbert Parents Say
            </h2>
            <p className="text-xl text-gray-600">
              What Mesa &amp; Gilbert parents are saying about training with
              Coach David.
            </p>
          </div>
          <ReviewsCarousel />
        </div>
      </section>

      <PricingSection
        title="Training Packages & Options for Mesa/Gilbert Families"
        template={mesaTemplate}
      />

      <FaqSection
        title="FAQ: Common Questions from Mesa & Gilbert Parents"
        items={mesaFaqItems}
      />

      <ContactSection
        title="Start Your Mesa/Gilbert Soccer Training Today"
        defaultArea="Mesa or Gilbert"
        source="mesa-gilbert-landing"
        bookingIntro="Ready to lock in a session in Mesa or Gilbert? Book directly in a few taps — pick a time and you’re set."
        locationLabel="Mesa & Gilbert (local parks)"
      />

      <BlogPreview />

      <StickyContactBar template={mesaTemplate} />

      <MainFooter />
    </div>
  );
};

export default MesaGilbertLandingPage;
