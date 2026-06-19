#!/usr/bin/env node
/**
 * One-off import of the June 2026 photo batch (from ~/Desktop/images, resized into
 * /tmp/iamegs_upload). Each entry has a hand-written caption. Photos are matched to
 * staged files by a unique substring (`match`) so we never have to type the macOS
 * screenshot filenames (which contain a U+202F narrow no-break space).
 *
 * Uploads to Vercel Blob and appends rows to the `photos` table, continuing the
 * display_order after whatever already exists. New photos are NOT featured (the
 * homepage already shows 3 curated featured photos).
 */

const { put } = require("@vercel/blob");
const { Pool } = require("pg");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

require("dotenv").config();

const STAGING_DIR = "/tmp/iamegs_upload";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

const BASE_KEYWORDS = [
  "private soccer training",
  "soccer coaching",
  "youth soccer",
  "mesa",
  "gilbert",
  "arizona",
];

// Ordered list. `match` = unique substring of the staged filename.
const PHOTOS = [
  // --- Posed photos (highest quality) ---
  {
    match: "IMG_0046",
    title: "All smiles after a 1-on-1 session",
    description: "Wrapping up a private session with one of my younger players.",
    alt: "Coach David Fales kneeling beside a young player by the goal after a private soccer training session in Mesa, Arizona.",
    keywords: ["private session", "youth player"],
  },
  {
    match: "IMG_0071",
    title: "Finished strong on the training field",
    description: "Quick photo after a 1-on-1 session, rebounder set up and ready to go.",
    alt: "Coach David Fales standing with a youth soccer player next to a rebounder net during private training.",
    keywords: ["one on one training", "rebounder"],
  },
  {
    match: "IMG_0149",
    title: "First session in the books",
    description: "Meeting a new player for her first private training session.",
    alt: "Coach David Fales with a young soccer player on the field before a private training session.",
    keywords: ["first session", "new player"],
  },
  {
    match: "IMG_0666",
    title: "Finishing session with an Arsenal player",
    description: "Lined up the balls for a finishing session, great work today.",
    alt: "Coach David Fales with a youth player in an Arsenal jersey resting her foot on a ball during a finishing drill.",
    keywords: ["finishing", "shooting drill"],
  },
  {
    match: "IMG_9620",
    title: "Game day at the tournament",
    description: "Supporting one of my players on game day.",
    alt: "Coach David Fales with a youth soccer player at a tournament complex on game day.",
    keywords: ["tournament", "game day"],
  },
  {
    match: "IMG_9625",
    title: "Cheering on a player at her tournament",
    description: "Stopped by to watch one of my players compete this weekend.",
    alt: "Coach David Fales standing with a young player in her game kit at a tournament.",
    keywords: ["tournament", "match day"],
  },

  // --- Training action stills ---
  {
    match: "1.38.13",
    title: "Dribbling the length of the field",
    description: "Working on driving the ball with speed across the field.",
    alt: "Young player dribbling a soccer ball across a grass field during a private training session.",
    keywords: ["dribbling", "speed dribbling"],
  },
  {
    match: "1.39.40",
    title: "Close control through the poles",
    description: "Tight touches weaving through the slalom poles.",
    alt: "Youth player dribbling through slalom poles during a technical training drill.",
    keywords: ["dribbling", "slalom", "ball control"],
  },
  {
    match: "1.44.48",
    title: "Working the cone weave",
    description: "Side-by-side reps through the cones.",
    alt: "Coach David Fales guiding a player through a cone dribbling drill.",
    keywords: ["cone drill", "footwork"],
  },
  {
    match: "1.45.35",
    title: "Guided dribbling reps",
    description: "Coaching footwork up close during a dribbling drill.",
    alt: "Coach David Fales coaching a young player through dribbling reps on the field.",
    keywords: ["dribbling", "coaching"],
  },
  {
    match: "2.00.55",
    title: "Stretching to reach the ball",
    description: "A big first touch to open up the field.",
    alt: "Young player stretching to reach a soccer ball during a training drill.",
    keywords: ["first touch", "ball control"],
  },
  {
    match: "2.06.35",
    title: "Explosive footwork",
    description: "Quick feet and explosive movement over the ball.",
    alt: "Youth player performing an explosive footwork move over a soccer ball.",
    keywords: ["footwork", "agility"],
  },
  {
    match: "10.02.13",
    title: "Evening passing session",
    description: "Sharpening passing under the evening light.",
    alt: "Coach David Fales running a passing drill with a player during an evening session.",
    keywords: ["passing", "evening session"],
  },
  {
    match: "9.57.41",
    title: "Demonstrating the finish",
    description: "Showing the technique before the player takes their reps.",
    alt: "Coach David Fales demonstrating a shooting technique during a private training session.",
    keywords: ["shooting", "technique", "coaching"],
  },
  {
    match: "9.58.51",
    title: "Dribbling through the discs",
    description: "Controlled dribbling through the discs.",
    alt: "Young player dribbling a ball between training discs during a session.",
    keywords: ["dribbling", "ball control"],
  },
  {
    match: "5.54.19",
    title: "One-touch passing at dusk",
    description: "One-touch passing rhythm to finish the evening.",
    alt: "Coach David Fales playing one-touch passes with a player during an evening training session.",
    keywords: ["passing", "one touch"],
  },
  {
    match: "5.54.49",
    title: "Footwork over the cones",
    description: "Quick footwork through the cones before the touch.",
    alt: "Young player working through a cone footwork drill with Coach David Fales.",
    keywords: ["footwork", "cone drill"],
  },
  {
    match: "5.58.31",
    title: "Lined up for finishing reps",
    description: "A full row of balls ready for a finishing session.",
    alt: "A line of soccer balls set up for a finishing drill during an evening training session.",
    keywords: ["finishing", "shooting drill"],
  },
  {
    match: "5.58.39",
    title: "Soft first touch",
    description: "Settling the ball with a clean first touch.",
    alt: "Youth player controlling a soccer ball with a first touch during training.",
    keywords: ["first touch", "ball control"],
  },
  {
    match: "5.59.52",
    title: "Game-speed 1v1",
    description: "Putting the work into a live, game-speed situation.",
    alt: "Players competing in a small-sided game during a training session with Coach David Fales.",
    keywords: ["1v1", "small sided game", "game speed"],
  },
  {
    match: "6.00.54",
    title: "Speed through the slalom",
    description: "Dribbling with pace through the slalom poles.",
    alt: "Young player dribbling at speed through slalom poles.",
    keywords: ["dribbling", "slalom", "speed"],
  },
  {
    match: "6.01.07",
    title: "Slalom dribbling drill",
    description: "Working the slalom with both feet.",
    alt: "Youth player dribbling through poles during a slalom drill.",
    keywords: ["dribbling", "slalom"],
  },
  {
    match: "6.05.44",
    title: "Attacking the cones",
    description: "Driving at the cones with the ball.",
    alt: "Young player dribbling toward Coach David Fales during a training drill.",
    keywords: ["dribbling", "cone drill"],
  },
  {
    match: "6.07.57",
    title: "Shielding the ball",
    description: "Protecting the ball under pressure.",
    alt: "Young player shielding a soccer ball during an evening training session.",
    keywords: ["shielding", "ball protection"],
  },
  {
    match: "6.08.05",
    title: "Battling 1v1",
    description: "Going shoulder to shoulder in a 1v1 battle.",
    alt: "Two youth players competing in a 1v1 battle during training.",
    keywords: ["1v1", "duel"],
  },
  {
    match: "6.08.29",
    title: "Finishing on the mini-goals",
    description: "Reps on the mini-goals to sharpen finishing.",
    alt: "Young player shooting at mini-goals during a finishing drill.",
    keywords: ["finishing", "shooting"],
  },
  {
    match: "6.08.59",
    title: "Cone-to-cone control",
    description: "Tight control from cone to cone.",
    alt: "Young player dribbling through cones during a ball-control drill.",
    keywords: ["dribbling", "ball control", "cone drill"],
  },
  {
    match: "6.09.15",
    title: "1v1 to the net",
    description: "Taking on the defender to finish at the net.",
    alt: "Young player going 1v1 toward a net during a training game.",
    keywords: ["1v1", "finishing"],
  },
  {
    match: "6.09.31",
    title: "Take 'em on — 1v1",
    description: "The confidence to take a defender on 1v1.",
    alt: "Two youth players in a 1v1 duel during a soccer training session.",
    keywords: ["1v1", "attacking"],
  },
  {
    match: "6.10.08",
    title: "Dribbling race",
    description: "Head-to-head dribbling race for speed.",
    alt: "Two young players racing while dribbling soccer balls during training.",
    keywords: ["dribbling", "speed", "competition"],
  },
  {
    match: "6.10.24",
    title: "Driving the shot",
    description: "Full contact driving the shot toward goal.",
    alt: "Youth player striking a soccer ball during a shooting drill.",
    keywords: ["shooting", "striking"],
  },
  {
    match: "6.10.54",
    title: "Coach demo: cone control",
    description: "Demonstrating close control through the cones.",
    alt: "Coach David Fales demonstrating close ball control through cones.",
    keywords: ["coaching", "ball control", "cone drill"],
  },
  {
    match: "6.12.11",
    title: "Quick feet through the cones",
    description: "Fast feet and tight touches through the cones.",
    alt: "Young player dribbling through cones with quick footwork during training.",
    keywords: ["dribbling", "footwork", "cone drill"],
  },
];

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/--+/g, "-")
    .replace(/^-+|-+$/g, "")
    .trim();
}

async function slugExists(slug) {
  const r = await pool.query("SELECT 1 FROM photos WHERE slug = $1", [slug]);
  return r.rows.length > 0;
}

async function uniqueSlug(base) {
  let slug = base;
  let i = 1;
  while (await slugExists(slug)) slug = `${base}-${i++}`;
  return slug;
}

async function getImageDimensions(filePath) {
  try {
    const { default: sizeOf } = await import("image-size");
    const d = sizeOf(filePath);
    return { width: d.width, height: d.height };
  } catch (e) {
    console.error("  ! could not read dimensions:", e.message);
    return { width: null, height: null };
  }
}

function findStagedFile(match) {
  const files = fs.readdirSync(STAGING_DIR).filter((f) => f.includes(match));
  if (files.length !== 1) {
    throw new Error(
      `expected exactly 1 staged file matching "${match}", found ${files.length}: ${files.join(", ")}`
    );
  }
  return files[0];
}

async function main() {
  if (!fs.existsSync(STAGING_DIR)) {
    console.error(`Staging dir not found: ${STAGING_DIR}`);
    process.exit(1);
  }

  // Sanity: every staged file should have exactly one metadata entry.
  const staged = fs.readdirSync(STAGING_DIR).filter((f) => /\.jpe?g$/i.test(f));
  const unmatched = staged.filter(
    (f) => !PHOTOS.some((p) => f.includes(p.match))
  );
  if (unmatched.length) {
    console.warn(`WARNING: staged files with no metadata (skipped): \n  ${unmatched.join("\n  ")}\n`);
  }

  const ord = await pool.query(
    "SELECT COALESCE(MAX(display_order), -1)::int AS m FROM photos"
  );
  let displayOrder = ord.rows[0].m + 1;
  console.log(`Starting display_order at ${displayOrder}\n`);

  let ok = 0;
  let fail = 0;

  for (const p of PHOTOS) {
    try {
      const fileName = findStagedFile(p.match);
      const filePath = path.join(STAGING_DIR, fileName);
      console.log(`[${ok + fail + 1}/${PHOTOS.length}] ${p.title}`);
      console.log(`  file: ${fileName}`);

      const { width, height } = await getImageDimensions(filePath);
      const fileSize = fs.statSync(filePath).size;
      const buffer = fs.readFileSync(filePath);

      const slug = await uniqueSlug(slugify(p.title));
      const file = new File([buffer], `${slug}.jpg`, { type: "image/jpeg" });

      const blob = await put(`gallery/${slug}.jpg`, file, {
        access: "public",
        token: process.env.BLOB_READ_WRITE_TOKEN,
      });

      const id = crypto.randomUUID();
      const keywords = [...BASE_KEYWORDS, ...(p.keywords || [])];

      await pool.query(
        `INSERT INTO photos (
          id, title, description, slug, image_url, alt_text,
          meta_title, meta_description, keywords,
          photo_date, photographer, location, category,
          width, height, file_size,
          featured, published, display_order
        ) VALUES (
          $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19
        )`,
        [
          id,
          p.title,
          p.description,
          slug,
          blob.url,
          p.alt,
          `${p.title} | David Fales Private Soccer Training`,
          p.description,
          keywords,
          null, // photo_date
          "David Fales",
          "Mesa/Gilbert, Arizona",
          "Private Training Sessions",
          width,
          height,
          fileSize,
          false, // featured
          true, // published
          displayOrder++,
        ]
      );

      console.log(`  ✓ ${slug} (${width}x${height}, ${(fileSize / 1024).toFixed(0)}KB)\n`);
      ok++;
    } catch (e) {
      console.error(`  ✗ ${p.title}: ${e.message}\n`);
      fail++;
    }
  }

  console.log("========================================");
  console.log(`Done. Added ${ok}, failed ${fail}, of ${PHOTOS.length}.`);
  console.log("========================================");
  await pool.end();
}

main().catch((e) => {
  console.error("Fatal:", e);
  process.exit(1);
});
