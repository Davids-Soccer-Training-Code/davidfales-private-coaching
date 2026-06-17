// Shared contact info, links, and helpers used across pages and headers.

export const COACH_PHONE_E164 = "+17206122979";
export const COACH_PHONE_WA = "17206122979"; // WhatsApp requires digits only in wa.me links
export const COACH_PHONE_DISPLAY = "(720) 612-2979";
export const COACH_EMAIL = "davidfalesct@gmail.com";

export const BOOKING_URL = "https://app.davidssoccertraining.com/book";

// All training is held at one location.
export const TRAINING_LOCATION_NAME = "Discovery District Park";
export const TRAINING_LOCATION_CITY = "Gilbert, AZ";
export const TRAINING_LOCATION_FIELD = "Field 5 (sometimes Field 4)";
const TRAINING_LOCATION_QUERY = "Discovery District Park, Gilbert, AZ";
export const TRAINING_MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  TRAINING_LOCATION_QUERY
)}&output=embed`;
export const TRAINING_MAP_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  TRAINING_LOCATION_QUERY
)}`;

export const PLAYER_DASHBOARD_URL =
  process.env.NEXT_PUBLIC_PLAYER_DASHBOARD_URL ||
  "https://app.davidssoccertraining.com";

export const defaultTextTemplate =
  "Hi David, my player is __ years old. Main goal is __. Best days are __. We’re in __ (Gilbert/Mesa).";

export const telHref = `tel:${COACH_PHONE_E164}`;

export const buildSmsHref = (message: string) =>
  `sms:${COACH_PHONE_E164}?body=${encodeURIComponent(message)}`;

export const buildWaHref = (message: string) =>
  `https://wa.me/${COACH_PHONE_WA}?text=${encodeURIComponent(message)}`;

export type ContactFormData = {
  parentName: string;
  email: string;
  phone: string;
  playerAge: string;
  mainGoal: string;
  bestDaysTimes: string;
  area: string;
  sessionType: string;
  notes: string;
};

// Build the prefilled "Hi David..." message from form fields, with fallbacks.
export const buildPrefilledMessage = (fields: {
  playerAge?: string;
  mainGoal?: string;
  bestDaysTimes?: string;
  area?: string;
}) => {
  const age = fields.playerAge?.trim() || "__";
  const goal = fields.mainGoal?.trim() || "__";
  const days = fields.bestDaysTimes?.trim() || "__";
  const area = fields.area?.trim() || "__";
  return `Hi David, my player is ${age} years old. Main goal is ${goal}. Best days are ${days}. We’re in ${area} (Gilbert/Mesa).`;
};
