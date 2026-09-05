import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { createMiniGroupInterest } from "@/app/lib/db/queries";
import { sendSms } from "@/app/lib/notify/sms";
import {
  MINI_GROUP_PRICE,
  getSlotLabel,
  normalizeSlotIds,
} from "@/app/lib/miniGroups";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function clean(value: unknown, maxLength = 200) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: NextRequest) {
  let parentName = "";
  let email = "";
  let phone = "";
  let playerName = "";
  let preferredTimes: string[] = [];

  try {
    const payload = await request.json();
    parentName = clean(payload.parentName, 120);
    email = clean(payload.email, 200);
    phone = clean(payload.phone, 40);
    playerName = clean(payload.playerName, 120);
    preferredTimes = normalizeSlotIds(payload.preferredTimes);
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (!parentName || !email || !phone || !playerName) {
    return NextResponse.json(
      { error: "Please fill out every field." },
      { status: 400 }
    );
  }

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  // The database write is what makes a signup real. Email and SMS are alerts on
  // top of it, so a mail or Twilio outage must not cost us the lead.
  try {
    await createMiniGroupInterest({
      parentName,
      email,
      phone,
      playerName,
      preferredTimes,
    });
  } catch (error) {
    console.error("Failed to save mini group interest:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please text us instead." },
      { status: 500 }
    );
  }

  const timesLabel = preferredTimes.length
    ? preferredTimes.map(getSlotLabel).join(", ")
    : "No preference given - place them wherever fits";

  await Promise.allSettled([
    sendInterestEmail({
      parentName,
      email,
      phone,
      playerName,
      timesLabel,
    }),
    sendSms(
      `New mini group signup\n${playerName} (player)\n${parentName} - ${phone}\n${email}\nTimes: ${timesLabel}`
    ),
  ]);

  return NextResponse.json({ message: "Interest received" }, { status: 200 });
}

async function sendInterestEmail(input: {
  parentName: string;
  email: string;
  phone: string;
  playerName: string;
  timesLabel: string;
}) {
  if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
    console.warn("Gmail is not configured; skipping interest email.");
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const rows: [string, string][] = [
    ["Player", input.playerName],
    ["Parent", input.parentName],
    ["Phone", input.phone],
    ["Email", input.email],
    ["Times that work", input.timesLabel],
  ];

  await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: process.env.RECIPIENT_EMAIL || process.env.GMAIL_USER,
    replyTo: input.email,
    subject: `Mini Group Interest - ${input.playerName} (${input.parentName})`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 2px solid #059669; border-radius: 10px;">
        <h2 style="color: #059669; border-bottom: 2px solid #059669; padding-bottom: 10px;">New Mini Group Interest</h2>
        ${rows
          .map(
            ([label, value]) =>
              `<p style="margin: 10px 0;"><strong style="color: #047857;">${label}:</strong> ${escapeHtml(
                value
              )}</p>`
          )
          .join("")}
        <div style="margin: 20px 0; padding: 15px; background-color: #f0fdf4; border-left: 4px solid #059669; border-radius: 5px;">
          <p style="margin: 0;">Sessions are $${MINI_GROUP_PRICE} per player at Gilbert Regional Park. Text them back to confirm which group they are joining.</p>
        </div>
      </div>
    `,
    text: rows
      .map(([label, value]) => `${label}: ${value}`)
      .join("\n")
      .concat(
        `\n\n$${MINI_GROUP_PRICE} per player at Gilbert Regional Park. Text them back to confirm placement.`
      ),
  });
}
