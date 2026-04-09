import mongoose, { Schema, Document } from 'mongoose';

export interface IProfile extends Document {
  name: string;
  title1: string;
  title2: string;
  title3: string;
  subtitle: string;
  tagline: string;
  about: string;
  email: string;
  github: string;
  linkedin: string;
  instagram: string;
  location: string;
  resumeUrl: string;
  profileImage: string;
  aboutImage: string;
}

const ProfileSchema: Schema = new Schema({
  name: { type: String, required: true },
  title1: { type: String, required: true },
  title2: { type: String, required: true },
  title3: { type: String, required: true },
  subtitle: { type: String, required: true },
  tagline: { type: String, required: true },
  about: { type: String, required: true },
  email: { type: String, required: true },
  github: { type: String, required: true },
  linkedin: { type: String, required: true },
  instagram: { type: String, required: true },
  location: { type: String, required: true },
  resumeUrl: { type: String, required: true },
  profileImage: { type: String, required: true, default: "/images/profile-headshot.jpeg" },
  aboutImage: { type: String, required: true, default: "/images/profile-cinematic.jpeg" },
}, { timestamps: true });

export default mongoose.models.Profile || mongoose.model<IProfile>('Profile', ProfileSchema);
