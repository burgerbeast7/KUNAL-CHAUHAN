import mongoose, { Schema, Document } from 'mongoose';

export interface IExperience extends Document {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

const ExperienceSchema: Schema = new Schema({
  company: { type: String, required: true },
  role: { type: String, required: true },
  period: { type: String, required: true },
  description: { type: String, required: true },
  achievements: { type: [String], required: true },
}, { timestamps: true });

export default mongoose.models.Experience || mongoose.model<IExperience>('Experience', ExperienceSchema);
