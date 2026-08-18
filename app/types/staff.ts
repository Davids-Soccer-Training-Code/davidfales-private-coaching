export type StaffBookingLocation = {
  city: string;
  address: string;
  preferred: boolean;
};

export type StaffMember = {
  id: number;
  name: string;
  slug: string;
  role: string | null;
  booking_role: string | null;
  bio: string | null;
  player_ages: string | null;
  photo_url: string | null;
  is_owner: boolean;
  booking_locations: StaffBookingLocation[];
};
