import dotenv from 'dotenv'
import uuidv1 from 'uuid/v1'
dotenv.config()

export const {
    PORT = 4000,
    MONGO_CONNECTION_URL,
    ENGINE_API_KEY,
    JWT_SECRET = uuidv1(),
} = process.env
