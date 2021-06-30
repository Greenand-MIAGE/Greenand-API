import mongoose from "mongoose";

export interface LandDocument extends mongoose.Document {
  address: string;
  commune: String;
  postalCode: Number;
  surface: Number;
}

const LandSchema = new mongoose.Schema({
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
});

const Land = mongoose.model<LandDocument>(`Land`, LandSchema);

export default Land;
