// Twilio's Messages endpoint is a single form POST with basic auth, so we call
// it directly instead of pulling in the SDK.

const TWILIO_API = "https://api.twilio.com/2010-04-01/Accounts";

export type SmsResult =
  | { sent: true }
  | { sent: false; reason: "not-configured" | "failed" };

/**
 * Sends an SMS alert. Returns rather than throws: notification failures must
 * never lose a signup that was already written to the database.
 */
export async function sendSms(body: string): Promise<SmsResult> {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_FROM_NUMBER;
  const to = process.env.TWILIO_ALERT_TO_NUMBER;

  if (!accountSid || !authToken || !from || !to) {
    console.warn("Twilio is not configured; skipping SMS alert.");
    return { sent: false, reason: "not-configured" };
  }

  try {
    const response = await fetch(`${TWILIO_API}/${accountSid}/Messages.json`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${accountSid}:${authToken}`
        ).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ From: from, To: to, Body: body }),
    });

    if (!response.ok) {
      console.error(
        "Twilio rejected the message:",
        response.status,
        await response.text()
      );
      return { sent: false, reason: "failed" };
    }

    return { sent: true };
  } catch (error) {
    console.error("Failed to send SMS alert:", error);
    return { sent: false, reason: "failed" };
  }
}
