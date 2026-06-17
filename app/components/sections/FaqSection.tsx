type FaqItem = { q: string; a: string };

type FaqSectionProps = {
  title?: string;
  subtitle?: string;
  items?: FaqItem[];
};

const defaultItems: FaqItem[] = [
  {
    q: "Where do sessions happen?",
    a: "We meet at well-known public parks in Gilbert/Mesa. I’ll confirm the exact park when we schedule.",
  },
  { q: "What age is this for?", a: "Ages 8–16. Beginner to club level." },
  {
    q: "What should my player bring?",
    a: "Ball, water, cleats, shin guards.",
  },
  { q: "Do you do small groups?", a: "Yes — text me for options." },
  {
    q: "What if we need to reschedule?",
    a: "Just text me as early as possible and we’ll find a new time.",
  },
  {
    q: "How fast will we see improvement?",
    a: "Most players improve fastest with consistency. I’ll give a simple plan after the first session.",
  },
];

export default function FaqSection({
  title = "FAQ",
  subtitle = "Quick answers parents usually want.",
  items = defaultItems,
}: FaqSectionProps) {
  return (
    <section id="faq" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600">{subtitle}</p>
        </div>

        <div className="space-y-5">
          {items.map((item) => (
            <div
              key={item.q}
              className="bg-linear-to-br from-emerald-50 to-white p-6 rounded-2xl shadow-md border border-emerald-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.q}</h3>
              <p className="text-gray-700 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
