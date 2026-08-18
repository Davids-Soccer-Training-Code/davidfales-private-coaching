import { getStaffForSite } from "@/app/lib/db/queries";
import { BOOKING_URL } from "@/app/lib/contact";
import type { StaffMember } from "@/app/types/staff";

const AVATAR_COLORS = [
  "bg-emerald-600",
  "bg-blue-600",
  "bg-amber-600",
  "bg-rose-600",
  "bg-indigo-600",
  "bg-teal-600",
];

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

function bookingHref(slug: string) {
  return `${BOOKING_URL}?coach=${encodeURIComponent(slug)}`;
}

function paragraphs(bio: string | null) {
  if (!bio) return [];
  return bio
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function locationLabel(member: StaffMember) {
  const preferred =
    member.booking_locations.find((location) => location.preferred) ||
    member.booking_locations[0];
  if (!preferred) return null;
  const park = preferred.address?.trim().split(",")[0];
  return park ? `${park} · ${preferred.city}` : preferred.city;
}

function CoachPhoto({
  member,
  color,
  className,
}: {
  member: StaffMember;
  color: string;
  className: string;
}) {
  if (member.photo_url) {
    return (
      <img
        src={member.photo_url}
        alt={`Coach ${member.name}`}
        className={`${className} object-cover object-top`}
      />
    );
  }

  // Photo slot: drop a URL into crm_staff.photo_url and it replaces this.
  return (
    <div
      className={`${className} ${color} flex items-center justify-center text-white font-black`}
    >
      <span className="text-4xl md:text-5xl">{initials(member.name)}</span>
    </div>
  );
}

export default async function StaffSection() {
  let staff: StaffMember[] = [];

  try {
    staff = await getStaffForSite();
  } catch (error) {
    console.error("Failed to load staff", error);
  }

  if (staff.length === 0) return null;

  return (
    <section id="staff" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet the Staff
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every coach here trains to the same standard. Pick the one closest
            to you and book straight onto their calendar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {staff.map((member, index) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl shadow-lg border-2 border-emerald-100 overflow-hidden flex flex-col"
            >
              <CoachPhoto
                member={member}
                color={AVATAR_COLORS[index % AVATAR_COLORS.length]}
                className="w-full aspect-square"
              />
              <div className="p-6 flex flex-col grow">
                <h3 className="text-2xl font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-emerald-700 font-semibold text-sm mt-1">
                  {member.booking_role || member.role || "Head Coach"}
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500 mt-2">
                  {locationLabel(member) ? (
                    <span>📍 {locationLabel(member)}</span>
                  ) : null}
                  {member.player_ages ? (
                    <span>⚽ Ages {member.player_ages}</span>
                  ) : null}
                </div>
                <div className="space-y-3 mt-4 grow">
                  {paragraphs(member.bio).map((line) => (
                    <p
                      key={line}
                      className="text-gray-700 text-sm leading-relaxed"
                    >
                      {line}
                    </p>
                  ))}
                </div>
                <a
                  href={bookingHref(member.slug)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center bg-emerald-600 text-white px-5 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors mt-6"
                >
                  Book with {member.name.split(" ")[0]}
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-10">
          Not sure who to pick? Text us your area and your player&apos;s age and
          we&apos;ll match you with the right coach.
        </p>
      </div>
    </section>
  );
}
