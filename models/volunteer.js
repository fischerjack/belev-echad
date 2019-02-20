const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const volunteerSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  message: String
});

const Volunteer = mongoose.model('Volunteer', volunteerSchema);

module.exports = Volunteer;