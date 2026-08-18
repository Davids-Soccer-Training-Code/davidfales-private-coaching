import {
  TRAINING_LOCATION_NAME,
  TRAINING_LOCATION_CITY,
  TRAINING_LOCATION_ADDRESS,
  TRAINING_LOCATION_FIELD,
  TRAINING_MAP_EMBED_URL,
  TRAINING_MAP_DIRECTIONS_URL,
} from "@/app/lib/contact";
import { getStaffForSite } from "@/app/lib/db/queries";

// Where our other coaches train, so families outside Gilbert can see there is
// someone near them. Cities come from crm_staff.booking_locations; a park name
// only shows when that row actually has an address on it.
const HOME_CITY = TRAINING_LOCATION_CITY.split(",")[0].trim();

async function getOtherLocations() {
  try {
    const staff = await getStaffForSite();
    const byCity = new Map<string, string[]>();

    for (const member of staff) {
      for (const location of member.booking_locations) {
        const city = location.city?.trim();
        if (!city || city === HOME_CITY) continue;

        const parks = byCity.get(city) || [];
        const address = location.address?.trim();
        if (address && !address.includes(TRAINING_LOCATION_NAME)) {
          const park = address.split(",")[0].trim();
          if (park && park !== city && !parks.includes(park)) parks.push(park);
        }
        byCity.set(city, parks);
      }
    }

    return Array.from(byCity.entries()).map(([city, parks]) => ({
      city,
      parks,
    }));
  } catch (error) {
    console.error("Failed to load coach locations", error);
    return [];
  }
}

export default async function TrainingLocation() {
  const otherLocations = await getOtherLocations();

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
              {TRAINING_LOCATION_ADDRESS}
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Our Gilbert sessions are held at {TRAINING_LOCATION_NAME} in{" "}
              {TRAINING_LOCATION_CITY}
              {TRAINING_LOCATION_FIELD ? (
                <>
                  {" "}
                  — we train on{" "}
                  <span className="font-semibold text-gray-900">
                    {TRAINING_LOCATION_FIELD}
                  </span>
                </>
              ) : null}
              . Same place every time, so it&apos;s easy to plan around.
            </p>

            <div className="space-y-3 mb-8">
              {TRAINING_LOCATION_FIELD ? (
                <div className="flex items-center text-gray-700">
                  <span className="text-2xl mr-3 text-emerald-600">🥅</span>
                  <span className="text-lg">
                    Meet on {TRAINING_LOCATION_FIELD}
                  </span>
                </div>
              ) : null}
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

        {otherLocations.length > 0 ? (
          <div className="mt-10 bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              We also coach elsewhere in the East Valley
            </h3>
            <p className="text-gray-600 mb-5">
              Our other coaches run sessions closer to home. Text us your area
              and we&apos;ll match you with the coach nearest you.
            </p>
            <div className="flex flex-wrap gap-3">
              {otherLocations.map((location) => (
                <div
                  key={location.city}
                  className="bg-white border border-gray-200 rounded-xl px-4 py-3"
                >
                  <p className="font-semibold text-gray-900">{location.city}</p>
                  {location.parks.length > 0 ? (
                    <p className="text-sm text-gray-600">
                      {location.parks.join(" · ")}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
