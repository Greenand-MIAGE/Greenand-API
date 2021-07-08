import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

export interface CategoryDocument extends mongoose.Document {
  id: string;
  label: string;
}

const CategorySchema = new mongoose.Schema({
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

const Category = mongoose.model<CategoryDocument>(`Category`, CategorySchema);

export default Category;
