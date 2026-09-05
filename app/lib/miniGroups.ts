// The mini group schedule is fixed and hand-managed: three weekly slots at one
// park. Both the public page and the interest API read from this list, so a
// schedule change is a one-line edit here.

export const MINI_GROUP_PRICE = 40;

export const MINI_GROUP_LOCATION = "Gilbert Regional Park";
export const MINI_GROUP_ADDRESS = "3005 E Queen Creek Rd, Gilbert, AZ 85298";
export const MINI_GROUP_MAP_URL =
  "https://maps.google.com/?q=Gilbert+Regional+Park,+3005+E+Queen+Creek+Rd,+Gilbert,+AZ+85298";

export type MiniGroupSlot = {
  /** Stable value submitted by the form and stored in the database. */
  id: string;
  day: string;
  time: string;
};

export const MINI_GROUP_SLOTS: MiniGroupSlot[] = [
  { id: "friday-6pm", day: "Fridays", time: "6:00 - 7:00 PM" },
  { id: "sunday-5pm", day: "Sundays", time: "5:00 - 6:00 PM" },
  { id: "sunday-6pm", day: "Sundays", time: "6:00 - 7:00 PM" },
];

export function getSlotLabel(id: string) {
  const slot = MINI_GROUP_SLOTS.find((item) => item.id === id);
  return slot ? `${slot.day} ${slot.time}` : id;
}

/** Drops anything that is not one of our slot ids, so stored data stays clean. */
export function normalizeSlotIds(input: unknown): string[] {
  if (!Array.isArray(input)) return [];
  const valid = new Set(MINI_GROUP_SLOTS.map((slot) => slot.id));
  return input
    .filter((value): value is string => typeof value === "string")
    .filter((value) => valid.has(value));
}
