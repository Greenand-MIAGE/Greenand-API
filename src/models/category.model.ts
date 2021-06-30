import mongoose from "mongoose";

export interface CategoryDocument extends mongoose.Document {
    label: string;
}

const CategorySchema = new mongoose.Schema({
    label: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    }
});

const Category = mongoose.model<CategoryDocument>(`Category`, CategorySchema);

export default Category;