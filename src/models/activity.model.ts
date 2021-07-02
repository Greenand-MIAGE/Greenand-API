import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
export interface ActivityDocument extends mongoose.Document {
  _id: string;
  label: string;
  clientMax: Number;
  description: string;
}

const ActivitySchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      unique: true,
      default: () => uuidv4(),
    },
    label: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 100,
      unique: false,
      trim: true,
      lowercase: true,
    },
    clientMax: {
      type: Number,
    },
    description: {
      type: String,
      required: true,
      minLength: 20,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Activity = mongoose.model<ActivityDocument>(`Activity`, ActivitySchema);

export default Activity;
