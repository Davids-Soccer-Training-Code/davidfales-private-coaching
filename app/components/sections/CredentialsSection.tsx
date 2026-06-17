const certifications = [
  "USSF D License",
  "Coerver Diploma",
  "Background checked through Coerver Arizona",
  "CPR & First Aid trained",
  "11v11 Grassroots Certification",
  "9v9 Grassroots Certification",
  "7v7 Grassroots Certification",
];

const experience = [
  {
    title: "5 Years of Coaching Experience",
    desc: "Dedicated to developing players' skills, confidence, and love for the game through personalized coaching approaches.",
  },
  {
    title: "4 Years of Technical Coaching",
    desc: "Specialized technical training across all skill levels, focusing on fundamental development and advanced techniques.",
  },
  {
    title: "1 Year of Club-Based Coaching",
    desc: "Experience in competitive club environments, preparing players for high-level performance and team dynamics.",
  },
];

export default function CredentialsSection() {
  return (
    <section id="credentials" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Licenses & Experience
          </h2>
          <p className="text-xl text-gray-600">Proven expertise you can trust</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Certifications */}
          <div className="bg-linear-to-br from-emerald-50 to-white p-8 rounded-2xl shadow-lg border-2 border-emerald-200">
            <div className="flex items-center mb-6">
              <span className="text-5xl mr-4">🏆</span>
              <h3 className="text-3xl font-bold text-gray-900">
                Certifications
              </h3>
            </div>
            <ul className="space-y-4">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start text-gray-700">
                  <span className="text-emerald-600 mr-3 text-2xl shrink-0">
                    ●
                  </span>
                  <span className="text-lg">{cert}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Experience */}
          <div className="bg-linear-to-br from-emerald-50 to-white p-8 rounded-2xl shadow-lg border-2 border-emerald-200">
            <div className="flex items-center mb-6">
              <span className="text-5xl mr-4">💼</span>
              <h3 className="text-3xl font-bold text-gray-900">Experience</h3>
            </div>
            <div className="space-y-6">
              {experience.map((exp) => (
                <div
                  key={exp.title}
                  className="border-l-4 border-emerald-600 pl-6"
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {exp.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
