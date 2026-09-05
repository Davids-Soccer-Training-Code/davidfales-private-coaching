import MainHeader from "@/app/components/layout/MainHeader";
import MainFooter from "@/app/components/layout/MainFooter";
import MiniGroupInterestForm from "@/app/components/mini-groups/MiniGroupInterestForm";
import {
  MINI_GROUP_ADDRESS,
  MINI_GROUP_LOCATION,
  MINI_GROUP_MAP_URL,
  MINI_GROUP_PRICE,
  MINI_GROUP_SLOTS,
} from "@/app/lib/miniGroups";

const comparisonRows = [
  {
    label: "Players per session",
    private: "1 player",
    group: "2-6 players, capped",
    team: "15-20+ players",
  },
  {
    label: "Coach attention",
    private: "Every rep watched",
    group: "Every rep watched",
    team: "Whatever is left over",
  },
  {
    label: "Corrections",
    private: "Immediate and detailed",
    group: "Immediate and detailed",
    team: "Rare and general",
  },
  {
    label: "Cost per session",
    private: "$60-$80",
    group: `$${MINI_GROUP_PRICE} flat`,
    team: "Included in club fees",
  },
  {
    label: "Best for",
    private: "Specific goals and detailed corrections",
    group: "Quality coaching plus game-like pressure",
    team: "Team shape and match prep",
  },
];

const whyMiniGroups = [
  {
    title: "Nobody gets lost",
    desc: "With a handful of players, every touch gets seen. Your player is corrected while the mistake is still fresh instead of finding out about it three drills later, which is what makes the habit actually change.",
  },
  {
    title: "They train against someone real",
    desc: "A defender who genuinely wants the ball back is something no private session can manufacture. Players learn to protect the ball, pick a head up under pressure, and make decisions at game speed.",
  },
  {
    title: "Competition pulls more out of them",
    desc: "Players push harder when someone is next to them doing the same drill. The intensity goes up on its own, and the session stays fun in a way solo reps rarely are.",
  },
  {
    title: "They talk, lead, and problem-solve",
    desc: "Communication, reading a teammate, sorting out a small-sided game - these only develop around other players, and they are the parts of the game that show up loudest on Saturday.",
  },
  {
    title: "Friends and teammates train together",
    desc: "Bring a teammate, a sibling, or a friend from the club. Players who train together carry the same habits back into practice and games, and most kids simply show up more willingly.",
  },
  {
    title: "It fits a real family budget",
    desc: "Sharing a coach makes this the format families can sustain week after week. Consistency beats intensity, and the group is what makes staying consistent realistic.",
  },
];

/*
 * ARCHIVED: per-session listings and online checkout.
 *
 * Mini groups used to be one-off sessions posted to the `group_sessions` table,
 * each with its own price, image, and Stripe checkout on the booking app. The
 * schedule is now three fixed weekly slots and placement is done by hand, so the
 * page below renders `MINI_GROUP_SLOTS` instead. The data, the API routes under
 * /api/group-sessions, and the /mini-groups/:id redirect in next.config.ts are
 * all still in place - restore this block to bring the listings back.
 *
 * import Link from "next/link";
 * import { getUpcomingGroupSessions } from "@/app/lib/db/queries";
 *
 * export const dynamic = "force-dynamic";
 * const GROUP_TIME_ZONE = "America/Phoenix";
 *
 * function formatSessionDate(input: string) {
 *   return new Intl.DateTimeFormat("en-US", {
 *     weekday: "long", month: "long", day: "numeric", year: "numeric",
 *     hour: "numeric", minute: "2-digit", timeZone: GROUP_TIME_ZONE,
 *   }).format(new Date(input));
 * }
 *
 * function addMinutes(input: string | Date, minutes: number) {
 *   return new Date(new Date(input).getTime() + minutes * 60_000);
 * }
 *
 * function formatSessionTimeRange(startInput: string, endInput: string | null) {
 *   const start = new Date(startInput);
 *   const end = endInput ? new Date(endInput) : addMinutes(start, 75);
 *   const format = new Intl.DateTimeFormat("en-US", {
 *     hour: "numeric", minute: "2-digit", timeZone: GROUP_TIME_ZONE,
 *   });
 *   return `${format.format(start)} - ${format.format(end)}`;
 * }
 *
 * function formatPrice(input: number | null) {
 *   if (!input || Number.isNaN(Number(input))) return "TBD";
 *   return new Intl.NumberFormat("en-US", {
 *     style: "currency", currency: "USD", maximumFractionDigits: 2,
 *   }).format(Number(input));
 * }
 *
 * function formatSpotsRemaining(spots: number) {
 *   return `${spots} ${spots === 1 ? "spot" : "spots"} remaining`;
 * }
 *
 * // Inside the component:
 * const upcomingSessions = await getUpcomingGroupSessions(100);
 *
 * // And in place of the schedule section:
 * <section id="upcoming" className="py-20 px-6 bg-linear-to-r from-emerald-600 to-emerald-700 text-white">
 *   ...grid of session cards linking to /mini-groups/${session.id}...
 * </section>
 */

export default function MiniGroupsPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-white to-emerald-50">
      <MainHeader />

      <section className="relative overflow-hidden min-h-[72vh] md:min-h-[78vh] px-6 py-16 bg-linear-to-br from-emerald-700 via-emerald-600 to-emerald-800 text-white">
        <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-white/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -left-16 h-80 w-80 rounded-full bg-emerald-300/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-emerald-900/30 blur-3xl" />

        <div className="container relative mx-auto max-w-6xl min-h-[72vh] md:min-h-[78vh] flex items-center">
          <div className="w-full text-center">
            <p className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-semibold tracking-wide">
              {MINI_GROUP_LOCATION} &middot; ${MINI_GROUP_PRICE} per player
            </p>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight mt-5 mb-5">
              Mini Groups
            </h1>

            <p className="text-xl md:text-3xl text-emerald-50 leading-relaxed max-w-4xl mx-auto">
              Small enough that every touch gets coached. Big enough that your
              player has someone to beat.
            </p>

            <div className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-3">
              {MINI_GROUP_SLOTS.map((slot) => (
                <div
                  key={slot.id}
                  className="rounded-2xl border border-white/25 bg-white/10 px-4 py-3 backdrop-blur-sm"
                >
                  <p className="text-lg font-bold">{slot.day}</p>
                  <p className="text-emerald-50">{slot.time}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 mt-9">
              <a
                href="#signup"
                className="inline-flex items-center justify-center bg-white text-emerald-800 px-6 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-colors shadow-lg"
              >
                Save My Spot
              </a>
              <a
                href="#why"
                className="inline-flex items-center justify-center bg-emerald-900/35 text-white px-6 py-3 rounded-full font-semibold border border-white/35 hover:bg-emerald-900/55 transition-colors"
              >
                Why Mini Groups
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What a Mini Group Actually Is
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A mini group is a handful of players and one coach. Your player
              gets the detail of a private session and the competition of a
              real game, in the same hour.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {whyMiniGroups.map((item) => (
              <div
                key={item.title}
                className="bg-linear-to-br from-emerald-50 to-white p-8 rounded-2xl shadow-lg border border-emerald-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-linear-to-br from-gray-900 to-gray-800 p-8 md:p-10 rounded-2xl shadow-2xl border-2 border-gray-700">
            <h3 className="text-3xl font-bold text-white mb-4 text-center">
              Why the cap matters
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg max-w-3xl mx-auto text-center">
              Most &ldquo;small group&rdquo; training is eight, ten, twelve
              players. At that size a coach is managing a crowd: players stand
              in line, reps drop, and mistakes go by uncorrected because nobody
              can watch that many touches at once. Six is the point where a
              coach can still see every player on every rep. That is why we stop
              there, even when more families ask to join.
            </p>
            <div className="mt-8 grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {[
                { stat: "2-6", label: "Players, hard cap" },
                { stat: "60 min", label: "Every minute on the ball" },
                { stat: "1", label: "Coach watching every rep" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 text-center"
                >
                  <p className="text-3xl font-black text-white">{item.stat}</p>
                  <p className="text-gray-300 text-sm mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-linear-to-b from-emerald-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Mini Group vs Private vs Team Practice
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mini groups sit right next to private training on quality, and
              nowhere near team practice on attention per player.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border-2 border-emerald-200 overflow-hidden">
            <div className="overflow-x-auto">
              <div className="min-w-[640px]">
                <div className="grid grid-cols-4 bg-emerald-600 text-white font-semibold text-sm md:text-base">
                  <div className="p-4">Category</div>
                  <div className="p-4">Private</div>
                  <div className="p-4 bg-emerald-700">Mini Group</div>
                  <div className="p-4">Team Practice</div>
                </div>
                {comparisonRows.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-4 border-t border-emerald-100"
                  >
                    <div className="p-4 font-semibold text-gray-900 bg-emerald-50/60">
                      {row.label}
                    </div>
                    <div className="p-4 text-gray-700">{row.private}</div>
                    <div className="p-4 text-gray-900 font-semibold bg-emerald-50">
                      {row.group}
                    </div>
                    <div className="p-4 text-gray-500">{row.team}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="signup"
        className="py-20 px-6 bg-linear-to-r from-emerald-600 to-emerald-700 text-white"
      >
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The Schedule
            </h2>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
              Same park, same times, every week. ${MINI_GROUP_PRICE} per player
              per session, capped at 6.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {MINI_GROUP_SLOTS.map((slot) => (
              <div
                key={slot.id}
                className="rounded-2xl border border-white/25 bg-white/10 backdrop-blur-sm p-6 text-center"
              >
                <p className="text-2xl font-bold">{slot.day}</p>
                <p className="text-emerald-50 text-lg mt-1">{slot.time}</p>
              </div>
            ))}
          </div>

          <div className="mb-10 rounded-2xl border border-white/25 bg-white/10 backdrop-blur-sm p-6 text-center">
            <p className="text-lg font-semibold">{MINI_GROUP_LOCATION}</p>
            <p className="text-emerald-100">{MINI_GROUP_ADDRESS}</p>
            <a
              href={MINI_GROUP_MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 font-semibold underline underline-offset-4 hover:text-emerald-100"
            >
              Open in Maps
            </a>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-3">
              Tell us who is coming
            </h3>
            <p className="text-lg text-emerald-100 max-w-2xl mx-auto">
              Four boxes and you&apos;re done. Coach David reads every one and
              texts you back with the group that fits your player best.
            </p>
          </div>

          <MiniGroupInterestForm />
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-linear-to-br from-emerald-50 to-white p-7 rounded-2xl border-2 border-emerald-100 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                How placement works
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                You pick the times that work. We group players by age and level
                so nobody is the odd one out, then text you the confirmed slot.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Placement is flexible for players near age and level boundaries.
              </p>
            </div>

            <div className="bg-linear-to-br from-emerald-50 to-white p-7 rounded-2xl border-2 border-emerald-100 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Contact</h3>
              <div className="space-y-3 text-gray-700">
                <p className="font-semibold">Text/Call: (720) 612-2979</p>
                <p className="font-semibold">Email: davidfalesct@gmail.com</p>
                <p>Questions about schedule or placement are welcome.</p>
              </div>
            </div>

            <div className="bg-linear-to-br from-emerald-50 to-white p-7 rounded-2xl border-2 border-emerald-100 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                If you have to miss
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>Nothing is paid online, so nothing to refund.</li>
                <li>Text as early as you can so the spot goes to someone else.</li>
                <li>Coach or weather cancellation: we move you to another night.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <MainFooter />
    </div>
  );
}
