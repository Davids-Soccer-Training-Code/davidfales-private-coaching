#!/usr/bin/env node

// Creates the `stories` table from migrations/001_create_stories.sql.
// Usage: node scripts/create-stories-table.js
const { Pool } = require("pg");
const fs = require("fs");
const path = require("path");

require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

async function main() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set");
  }

  const sqlPath = path.join(__dirname, "..", "migrations", "001_create_stories.sql");
  const sql = fs.readFileSync(sqlPath, "utf8");

  console.log("Running migration: 001_create_stories.sql ...");
  await pool.query(sql);
  console.log("✅ stories table is ready.");

  await pool.end();
}

main().catch((err) => {
  console.error("❌ Migration failed:", err.message);
  process.exit(1);
});
