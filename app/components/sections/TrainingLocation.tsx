import {
  TRAINING_LOCATION_NAME,
  TRAINING_LOCATION_CITY,
  TRAINING_LOCATION_FIELD,
  TRAINING_MAP_EMBED_URL,
  TRAINING_MAP_DIRECTIONS_URL,
} from "@/app/lib/contact";

export default function TrainingLocation() {
  return (
    <section id="location" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Where we train
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            One consistent, convenient home base for every session.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* Details */}
          <div className="bg-linear-to-br from-emerald-50 to-white p-8 md:p-10 rounded-3xl shadow-lg border-2 border-emerald-100 flex flex-col">
            <div className="text-5xl mb-4">📍</div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              {TRAINING_LOCATION_NAME}
            </h3>
            <p className="text-emerald-700 font-semibold mb-5">
              {TRAINING_LOCATION_CITY}
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              All of my 1-on-1 training is held at {TRAINING_LOCATION_NAME} in{" "}
              {TRAINING_LOCATION_CITY} — we train on{" "}
              <span className="font-semibold text-gray-900">
                {TRAINING_LOCATION_FIELD}
              </span>
              . Same place every time, so it&apos;s easy to plan around.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center text-gray-700">
                <span className="text-2xl mr-3 text-emerald-600">🥅</span>
                <span className="text-lg">
                  Meet on {TRAINING_LOCATION_FIELD}
                </span>
              </div>
              <div className="flex items-center text-gray-700">
                <span className="text-2xl mr-3 text-emerald-600">⏱️</span>
                <span className="text-lg">Each session is one hour long</span>
              </div>
              <div className="flex items-center text-gray-700">
                <span className="text-2xl mr-3 text-emerald-600">🅿️</span>
                <span className="text-lg">Easy parking and open field space</span>
              </div>
            </div>

            <a
              href={TRAINING_MAP_DIRECTIONS_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-auto inline-flex items-center justify-center bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors shadow-lg self-start"
            >
              Get directions
            </a>
          </div>

          {/* Map */}
          <div className="rounded-3xl overflow-hidden shadow-xl border-2 border-emerald-100 min-h-[320px]">
            <iframe
              title={`Map of ${TRAINING_LOCATION_NAME}, ${TRAINING_LOCATION_CITY}`}
              src={TRAINING_MAP_EMBED_URL}
              className="w-full h-full min-h-[320px]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
