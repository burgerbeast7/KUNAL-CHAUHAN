import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongoose";
import Skill from "@/models/Skill";
import Experience from "@/models/Experience";
import Project from "@/models/Project";
import Profile from "@/models/Profile";
import { SKILLS, EXPERIENCES, PROJECTS, USER_INFO } from "@/lib/data";

export async function POST() {
  try {
    await connectToDatabase();

    // Sync Skills
    for (const skill of SKILLS) {
      await Skill.findOneAndUpdate({ name: skill.name }, skill, { upsert: true });
    }

    // Sync Experiences
    for (const exp of EXPERIENCES) {
      await Experience.findOneAndUpdate({ company: exp.company, role: exp.role }, exp, { upsert: true });
    }

    // Sync Projects
    for (const project of PROJECTS) {
      await Project.findOneAndUpdate({ title: project.title }, project, { upsert: true });
    }

    // Sync Profile
    await Profile.findOneAndUpdate({}, {
      ...USER_INFO,
      profileImage: "/images/profile-headshot.jpeg",
      aboutImage: "/images/profile-cinematic.jpeg"
    }, { upsert: true });

    return NextResponse.json({ success: true, message: "Database perfectly synchronized with existing data" });
  } catch (error) {
    console.error("Seed error:", error);
    return NextResponse.json({ success: false, error: "Synchronization failed" }, { status: 500 });
  }
}
