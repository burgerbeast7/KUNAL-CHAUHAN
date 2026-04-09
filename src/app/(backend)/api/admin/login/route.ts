import { NextRequest, NextResponse } from "next/server";
import { encrypt } from "@/lib/auth";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();

    // In production, ensure ADMIN_PASSWORD is set in `.env.local` or environment variables
    const adminPassword = process.env.ADMIN_PASSWORD || "admin123";

    if (password !== adminPassword) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    // Set the session valid for 24 hours
    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000);
    const session = await encrypt({ admin: true, expires });
    const cookieStore = await cookies();
    cookieStore.set("admin_session", session, { expires, httpOnly: true, secure: process.env.NODE_ENV === "production" });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
