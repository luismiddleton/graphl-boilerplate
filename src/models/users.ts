import { Schema, model } from 'mongoose'

const schema = new Schema({
    email: { type: String, unique: true },
    firstName: { type: String },
    lastName: { type: String },
    password: { type: String, minlength: 6, maxlength: 16 },
    username: { type: String, unique: true },
    role: { type: String }
})

const User = model('user', schema)
export default User
