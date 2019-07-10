import mongoose, { Schema } from 'mongoose'

const schema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, unique: true },
    username: { type: String, unique: true },
    password: { type: String },
})

export const User = mongoose.model('user', schema)
