import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { ClientDocument } from './client.model';
import { LandDocument } from './land.model';
export interface ActivityDocument extends mongoose.Document {
  id: string;
  label: string;
  clientMax: Number;
  description: string;
  client: ClientDocument[`_id`];
  land: LandDocument[`_id`];
}

const ActivitySchema = new mongoose.Schema(
  {
    id: {
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
    client: { type: mongoose.Schema.Types.ObjectId, ref: `Client`, required: true},
    land: { type: mongoose.Schema.Types.ObjectId, ref: `Land`, required: true},
  },
  {
    timestamps: true,
  }
);

const Activity = mongoose.model<ActivityDocument>(`Activity`, ActivitySchema);

export default Activity;
