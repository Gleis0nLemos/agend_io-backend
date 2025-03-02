import { Schema, model } from 'mongoose';

const CompanySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  category: { type: String, enum: ['barbearia', 'salão de beleza', 'clínica médica', 'nutricionista', 'estética'], required: true },
  coverPic: { type: String },
  ownerId: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

export default model('Company', CompanySchema);