import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { ClientDocument } from './client.model';

export interface LandDocument extends mongoose.Document {
  id: string;
  address: string;
  commune: String;
  postalCode: Number;
  surface: Number;
  client: ClientDocument[`_id`];
}

const LandSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    default: () => uuidv4(),
  },
  address: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  commune: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  postalCode: {
    type: Number,
    required: true,
    lowercase: true,
    trim: true,
  },
  surface: {
    type: Number,
    required: true,
    lowercase: true,
    trim: true,
  },
  client: { type: mongoose.Schema.Types.ObjectId, ref: `Client`, required: true}
});

const Land = mongoose.model<LandDocument>(`Land`, LandSchema);

export default Land;
