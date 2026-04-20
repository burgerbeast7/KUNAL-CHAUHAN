import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongoose";
import Experience from "@/models/Experience";

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await connectToDatabase();
    const body = await req.json();

    if (typeof body.achievements === 'string') {
      body.achievements = body.achievements.split('\n').map((a: string) => a.trim()).filter(Boolean);
    }

    const experience = await Experience.findByIdAndUpdate(id, body, { new: true });
    
    if (!experience) {
      return NextResponse.json({ success: false, error: "Experience not found" }, { status: 404 });
    }
    
    return NextResponse.json({ success: true, data: experience });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to update experience" }, { status: 500 });
  }
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await connectToDatabase();
    const experience = await Experience.findByIdAndDelete(id);
    
    if (!experience) {
      return NextResponse.json({ success: false, error: "Experience not found" }, { status: 404 });
    }
    
    return NextResponse.json({ success: true, data: {} });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to delete experience" }, { status: 500 });
  }
}
