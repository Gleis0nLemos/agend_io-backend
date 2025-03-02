import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    role: { type: String, required: true, enum: ['client', 'company'] },
    profilePic: { type: String }, // URL to the user's profile picture
    created_at: { type: Date, default: Date.now }
});

export default model('User', UserSchema);