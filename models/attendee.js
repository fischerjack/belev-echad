const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const attendeeSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  event: String,
  message: String
});

const Attendee = mongoose.model('Attendee', attendeeSchema);

module.exports = Attendee;