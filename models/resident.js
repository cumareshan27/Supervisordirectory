const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const residentSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  middleName: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  email: { type: String, required: true },
  address: {
    addressline1: { type: String, required: true },
    addressline2: { type: String, required: false },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipcode: { type: String, required: true },
  },
});

const Resident = mongoose.model('Resident', residentSchema);

module.exports = Resident;
