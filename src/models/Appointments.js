const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
  serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
  date: { type: Date, required: true },
  status: { type: String, required: true, enum: ['pending', 'confirmed', 'canceled'] },
  notes: { type: String }
});

module.exports = mongoose.model('Appointment', AppointmentSchema);
