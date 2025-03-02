import { Schema, model } from 'mongoose';

const ServiceSchema = new Schema({
  companyId: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: Number, required: true }, // minutes
  image: { type: String }
});

export default model('Service', ServiceSchema);
