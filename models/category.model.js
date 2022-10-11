const { Schema, model } = require("mongoose");
const validator = require("validator");
const { ObjectId } = Schema.Types;
const categorySchema = Schema({
  name: {
    type: String,
    required: [true, "Please provide categoy name"],
    unique: true,
    trim: true,
    lowercase: true
  },
  description: String,
  imageUrl: {
    type: String,
    validate: [validator.isURL, "Please provide valid url"]
  }
}, { timestamps: true })

const Category = model("Category", categorySchema);
module.exports = Category;