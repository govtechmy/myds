import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbxHR0hg88aqce9lNG3MxZH2qMbHgCkzqz6Jfontk9T12lp-SotcS4pbAc_Z0z9rJmaHZw/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("API Proxy Error:", err);
    return NextResponse.json(
      { status: "error", message: "Internal server error" },
      { status: 500 }
    );
  }
}
