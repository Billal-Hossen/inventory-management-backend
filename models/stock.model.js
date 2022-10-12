const { Schema, model } = require("mongoose")
const validator = require("validator");
const { ObjectId } = Schema.Types;
//Product schema

const stockSchema = Schema({
  name: {
    type: String,
    required: [true, "stock name is required"],
    minLength: [3, "stock name at least 2 charater."],
    maxLength: [100, "stock name is too long."],
    unique: true,
    trim: true
  },
  description: {
    type: String,
    required: [true, "stock description is required."],

  },
  price: {
    type: Number,
    required: true,
    min: [0, "price can't be negative"]

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

  unit: {
    type: String,
    required: true,
    enum: {
      values: ['kg', 'litter', 'psc', 'bag'],
      message: "Unit must be kg/litter/psc/bag"
    }
  },
  imageUrls: [{
    type: String,
    required: true,
    validate: {
      validator: (value) => {
        if (!Array.isArray(value)) {
          return false;
        }
        let isValid = true;
        value.forEach(url => {
          if (!validator.isURL(url)) {
            isValid = false;
          }

        })
        return isValid;
      },
      message: "Please provide valid image urls."
    }
  }],
  productId: {
    type: ObjectId,
    ref: "Product"
  },
  category: {
    type: String,
    required: true
  },
  brand: {
    name: {
      type: String,
      required: true
    },
    id: {
      type: ObjectId,
      ref: "Brand",
      requirted: true
    }
  },
  store: {
    name: {
      type: String,
      trim: true,
      required: [true, "Please provide a store name."],
      enum: {
        values: ["dhaka", "chittagong", "khulna", "barishal", "sylhet", "mymshing"],
        message: "{VALUE} is not a valid name."
      }

    },
    id: {
      type: ObjectId,
      ref: "Store",
      requirted: true
    }
  },
  suppliedBy: {
    name: {
      type: String,
      trime: true,
      required: [true, "Please enter the supplier name."]
    },
    id: {
      type: ObjectId,
      ref: "Supplier",
      requirted: true
    }
  },






}, { timestamps: true })

// Modle
const Stock = model("Stock", productSchema)

module.exports = Stock;