const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const registerationSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    bloodGrp: {
      type: String,
      required: true,
    },
    addressLineOne: {
      type: String,
      required: true,
    },
    addressLineTwo: {
      type: String,
      required: true,
    },
    lastDonated: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const registerModel = mongoose.model("registerUsers", registerationSchema);
module.exports = registerModel;
