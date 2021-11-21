const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    parentCategory: { type: String, require: true },
    subCategory: { type: String, require: true },
    description: { type: String, required: true },
    image: { type: Array, required: true },
    size: { type: Array },
    color: { type: Array },
    elevator: { type: Boolean, default: false },
    innerSole: { type: Array },
    outerHeel: { type: Array },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
