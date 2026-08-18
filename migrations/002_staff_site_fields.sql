-- Marketing site "Meet the Staff" support.
-- 1. photo_url so coach headshots can be swapped in without a deploy.
-- 2. Training moved from Discovery District Park to Gilbert Regional Park.

ALTER TABLE crm_staff ADD COLUMN IF NOT EXISTS photo_url TEXT;

UPDATE crm_staff
SET preferred_location = REPLACE(
      preferred_location,
      'Discovery District Park, 2214 E Pecos Rd, Gilbert, AZ 85297',
      'Gilbert Regional Park, 3005 E Queen Creek Rd, Gilbert, AZ 85298'
    )
WHERE preferred_location LIKE '%Discovery District Park%';

UPDATE crm_staff
SET booking_locations = REPLACE(
      booking_locations::text,
      'Discovery District Park, 2214 E Pecos Rd, Gilbert, AZ 85297',
      'Gilbert Regional Park, 3005 E Queen Creek Rd, Gilbert, AZ 85298'
    )::jsonb
WHERE booking_locations::text LIKE '%Discovery District Park%';
