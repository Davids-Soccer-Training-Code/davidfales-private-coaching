type AboutSectionProps = {
  title?: string;
  subtitle?: string;
  bio?: string;
  philosophy?: string;
};

export default function AboutSection({
  title = "Meet Your Coach",
  subtitle = "Passionate about developing the next generation of soccer players",
  bio = "I'm a dedicated soccer coach with a passion for helping young players reach their full potential. What sets my coaching apart is a clear plan + measurable benchmarks, paired with supportive coaching that builds confidence and consistency.",
  philosophy = "Sessions stay organized and age-appropriate. We focus on one priority at a time, track progress simply, and communicate clearly with parents.",
}: AboutSectionProps) {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-emerald-200">
              <div className="aspect-square">
                <img
                  src="/me.JPG"
                  alt="David Fales - Soccer Coach"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Bio Text */}
          <div className="order-1 md:order-2 space-y-6">
            <div className="bg-linear-to-br from-emerald-50 to-white p-8 rounded-2xl shadow-lg border-2 border-emerald-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-3xl mr-3">⚽</span>
                Hi, I’m Coach David
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">{bio}</p>
            </div>

            <div className="bg-linear-to-br from-emerald-50 to-white p-8 rounded-2xl shadow-lg border-2 border-emerald-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-3xl mr-3">🎯</span>
                My Coaching Philosophy
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {philosophy}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
