

const { Schema, Model, model } = require("mongoose");
const validator = require('validator');
const { ObjectId } = Schema.Types

const brandSchema = Schema(
  {
    name: {
      type: String,
      unique: true,
      maxLength: 100,
      required: [true, "Please provide brand name."],
      lowercase: true,
      trim: true
    },
    description: String,
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: [true, "Please provide email."],
      validate: [validator.isEmail, "Please provide a valiad email."]
    },
    website: {
      type: String,
      required: [true, "Please provide your url"],
      validate: [validator.isURL, "Please provide valid url."]
    },
    location: String,
    products: [{
      type: ObjectId,
      ref: "Product"
    }],
    suppliers: [{
      name: String,
      contactNumber: String,
      id: {
        type: ObjectId,
        ref: "Supplier"
      }
    }],
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active'
    }
  }, { timestamps: true }
)

const Brand = model("Brand", brandSchema);
module.exports = Brand;