import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongoose";
import Profile from "@/models/Profile";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await connectToDatabase();
    const profile = await Profile.findOne({});
    return NextResponse.json({ success: true, data: profile });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to fetch profile" }, { status: 500 });
  }
}
