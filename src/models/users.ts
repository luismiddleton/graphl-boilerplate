import { Schema, model } from 'mongoose'

const schema = new Schema({
    email: { type: String, unique: true },
    firstName: { type: String },
    lastName: { type: String },
    password: { type: String },
    username: { type: String, unique: true },
})

const User = model('user', schema)
export default User
