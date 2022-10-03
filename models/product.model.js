const { Schema, model } = require("mongoose")


//Product schema

const productSchema = Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
    minLength: [3, "Product name at least 2 charater."],
    maxLength: [100, "Product name is too long."],
    unique: true,
    trim: true
  },
  description: {
    type: String,
    required: [true, "Product description is required."],

  },
  price: {
    type: Number,
    required: [true, "Product price must be required"],
    min: [0, "Price can't be negative."]
  },
  unit: {
    type: String,
    required: true,
    enum: {
      values: ['kg', 'litter', 'psc'],
      message: "Unit must be kg/litter/psc"
    }
  },
  quantity: {
    type: Number,
    required: true,
    min: [0, "Quantity can't be negative."],
    validate: {
      validator: (value) => {
        const isInteger = Number.isInteger(value);
        if (isInteger) {
          return true
        }
        else {
          return false
        }

      },
      message: "Quantity must be an integer."
    },

  },
  status: {
    type: String,
    required: true,
    enum: {
      values: ["in-stock", "Out-of-stock", "discontinued"],
      message: "Status can't be {value}"
    }
  },
  // referance
  // supplair: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Supplier"
  // },
  // Embedded Documents
  // categories: [
  //   {
  //     name: {
  //       type: String,
  //       required: true
  //     },
  //     _id: mongoose.Schema.Types.ObjectId,
  //   }
  // ]
}, { timestamps: true })

// Modle
const Product = model("Product", productSchema)

module.exports = Product;