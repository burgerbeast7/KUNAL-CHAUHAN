import mongoose, { Schema, Document } from 'mongoose';

export interface IProject extends Document {
  title: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
  image: string;
}

const ProjectSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tech: { type: [String], required: true },
  link: { type: String, required: true },
  github: { type: String, required: true },
  image: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema);
