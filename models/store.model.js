const { Schema, Model, model } = require("mongoose");
const validator = require("validator");
const { ObjectId } = Schema.Types;

const storeSchema = Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please provide a store name."],
    lowercase: true,
    enum: {
      values: ["dhaka", "chittagong", "khulna", "barishal", "sylhet", "mymshing"],
      message: "{VALUE} is not a valid name."
    }

  },
  description: String,
  status: [
    {
      type: String,
      enum: ["active", "inactive"],
      default: "active"
    }
  ],
  manager: {
    name: String,
    contactNumber: String,
    id: {
      type: ObjectId,
      ref: "User"
    }
  }
}, { timestraps: true })


const Store = model("Store", storeSchema);
module.exports = Store;