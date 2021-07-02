import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export interface SkillDocument extends mongoose.Document {
  id: string;
  label: string;
}

const SkillSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    default: () => uuidv4(),
  },
  label: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
});

const Skill = mongoose.model<SkillDocument>(`Skill`, SkillSchema);

export default Skill;
