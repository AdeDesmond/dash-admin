import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const CategoryModel =
  mongoose.models.Category || mongoose.model("Category", categorySchema);

export { CategoryModel };
