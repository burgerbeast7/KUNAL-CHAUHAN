import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongoose";
import Experience from "@/models/Experience";

export async function GET() {
  try {
    await connectToDatabase();
    const experiences = await Experience.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: experiences });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to fetch experiences" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const body = await req.json();
    
    if (typeof body.achievements === 'string') {
      body.achievements = body.achievements.split('\n').map((a: string) => a.trim()).filter(Boolean);
    }

    const experience = await Experience.create(body);
    return NextResponse.json({ success: true, data: experience }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to create experience" }, { status: 500 });
  }
}
