const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const residenceSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  middleName: String,
  phoneNumber: { type: Number, required: true },
  email: { type: String, required: true },
  specialities: { type: String, required: true },
});

const residence = mongoose.model("residence", residenceSchema);

module.exports = residence;
