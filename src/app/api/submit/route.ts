import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const googleScriptUrl = process.env.NEXT_PUBLIC_API_GOOGLE_TABLE;

    if (!googleScriptUrl) {
      console.error("API URL is not defined in environment variables");
      return;
    }

    const body = await req.json();
    console.log("Received data:", body);

    if (!body.firstName || !body.lastName || !body.email || !body.phone) {
      console.error("Missing required fields");
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const response = await fetch(googleScriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    console.log("Google Script Response:", response.status);

    if (!response.ok) {
      console.error("Google Script Error:", await response.text());
      return NextResponse.json({ error: "Google Script failed" }, { status: 500 });
    }

    const result = await response.json();
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json({ error: "Failed to submit form" }, { status: 500 });
  }
}
