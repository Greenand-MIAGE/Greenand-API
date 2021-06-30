import mongoose from "mongoose";

export interface SkillDocument extends mongoose.Document {
  label: string;
}

const SkillSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
});

const Skill = mongoose.model<SkillDocument>(`Skill`, SkillSchema);

export default Skill;
