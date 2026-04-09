import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongoose";
import Profile from "@/models/Profile";

export async function GET() {
  try {
    await connectToDatabase();
    let profile = await Profile.findOne({});
    return NextResponse.json({ success: true, data: profile });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to fetch profile" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const body = await req.json();
    
    let profile = await Profile.findOne({});
    if (profile) {
      profile = await Profile.findByIdAndUpdate(profile._id, body, { new: true });
    } else {
      profile = await Profile.create(body);
    }
    
    return NextResponse.json({ success: true, data: profile });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to update profile" }, { status: 500 });
  }
}
