import Link from "next/link";
import { MINI_GROUP_LOCATION, MINI_GROUP_PRICE } from "@/app/lib/miniGroups";

/**
 * Announcement strip above the hero. Sits on the homepage only, and points at
 * the schedule block on /mini-groups.
 */
export default function MiniGroupsBanner() {
  return (
    <Link
      href="/mini-groups#signup"
      className="group block bg-emerald-900 text-white transition-colors hover:bg-emerald-950"
    >
      <div className="container mx-auto max-w-6xl px-6 py-3.5">
        <div className="flex flex-col items-center justify-center gap-x-3 gap-y-1.5 text-center sm:flex-row">
          <span className="inline-flex shrink-0 items-center rounded-full bg-amber-400 px-3 py-1 text-xs font-black uppercase tracking-wider text-emerald-950">
            New
          </span>

          <p className="text-base font-semibold sm:text-lg">
            Mini groups starting soon
            <span className="hidden text-emerald-100 lg:inline">
              {" "}
              &mdash; Fridays &amp; Sunday nights at {MINI_GROUP_LOCATION}, $
              {MINI_GROUP_PRICE} per player
            </span>
          </p>

          <span className="shrink-0 font-bold text-amber-300 underline-offset-4 group-hover:underline">
            See the schedule &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}
