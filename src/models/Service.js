const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: Number, required: true }, // minutes
  image: { type: String }
});

module.exports = mongoose.model('Service', ServiceSchema);
