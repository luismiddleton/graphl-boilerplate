import dotenv from 'dotenv'
dotenv.config()

export const { PORT = 4000, MONGO_CONNECTION_URL } = process.env

export const SALT_ROUNDS = 10
