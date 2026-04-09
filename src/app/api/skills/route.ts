import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongoose";
import Skill from "@/models/Skill";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await connectToDatabase();
    const skills = await Skill.find({});
    return NextResponse.json({ success: true, data: skills });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to fetch skills" }, { status: 500 });
  }
}
