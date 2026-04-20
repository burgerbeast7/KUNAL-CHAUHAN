import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongoose";
import Skill from "@/models/Skill";

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await connectToDatabase();
    const body = await req.json();

    const skill = await Skill.findByIdAndUpdate(id, body, { new: true });
    
    if (!skill) {
      return NextResponse.json({ success: false, error: "Skill not found" }, { status: 404 });
    }
    
    return NextResponse.json({ success: true, data: skill });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to update skill" }, { status: 500 });
  }
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await connectToDatabase();
    const skill = await Skill.findByIdAndDelete(id);
    
    if (!skill) {
      return NextResponse.json({ success: false, error: "Skill not found" }, { status: 404 });
    }
    
    return NextResponse.json({ success: true, data: {} });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to delete skill" }, { status: 500 });
  }
}
