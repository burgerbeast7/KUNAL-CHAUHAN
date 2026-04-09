import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongoose";
import Experience from "@/models/Experience";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await connectToDatabase();
    const experience = await Experience.find({}).sort({ period: -1 });
    return NextResponse.json({ success: true, data: experience });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to fetch experience" }, { status: 500 });
  }
}
