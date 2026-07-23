import { NextResponse } from "next/server";

const DEFAULT_API_BASE_URL = "https://talent.remoteli.com/api/v1";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let email = "";

  try {
    const formData = await request.formData();
    email = String(formData.get("email") ?? "").trim();
  } catch {
    return NextResponse.json(
      { message: "Invalid request" },
      { status: 400 },
    );
  }

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { message: "A valid email is required" },
      { status: 400 },
    );
  }

  const apiBaseUrl = (
    process.env.PATH54_API_BASE_URL ?? DEFAULT_API_BASE_URL
  ).replace(/\/+$/, "");

  try {
    const response = await fetch(`${apiBaseUrl}/path54-newsletter`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      const message =
        data && typeof data.message === "string"
          ? data.message
          : "Unable to subscribe right now";

      return NextResponse.json({ message }, { status: response.status });
    }

    return NextResponse.json({
      message:
        data && typeof data.message === "string"
          ? data.message
          : "Successful",
    });
  } catch (error) {
    console.error("Newsletter subscription request failed", error);

    return NextResponse.json(
      { message: "Unable to subscribe right now" },
      { status: 502 },
    );
  }
}
