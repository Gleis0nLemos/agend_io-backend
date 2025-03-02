import { Schema, model } from 'mongoose';

const AppointmentSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  companyId: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
  serviceId: { type: Schema.Types.ObjectId, ref: 'Service', required: true },
  date: { type: Date, required: true },
  status: { type: String, required: true, enum: ['pending', 'confirmed', 'canceled'] },
  notes: { type: String }
});

export default model('Appointment', AppointmentSchema);
