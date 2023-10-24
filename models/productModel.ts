import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "CategoryModel",
    },
    images: [String],
    quantity: {
      type: Number,
    },
  },
  { timestamps: true }
);

const ProductModel =
  mongoose.models?.ProductModel ||
  mongoose.model("ProductModel", productSchema);

export { ProductModel };
