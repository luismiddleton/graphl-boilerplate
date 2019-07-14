import * as uuid from 'uuid'
import { config } from 'dotenv'

// set config to proces.env
config()

const DAY: number = 24 * 60 * 60 * 1000
const WEEK: number = 7

// set cookie to 7 days
const MAX_AGE: number = DAY * WEEK

// variables of types
export const SALT_ROUNDS: number = 10
export const JWT_SECRET: string = uuid.v4()
export const COOKIE_SECRET: string = uuid.v1()

export const SESSION_NAME: string = 'qid'
export const COOKIE_MAX_AGE: number = MAX_AGE

// env variables
export const MONGO_CONNECTION_URL = process.env.MONGO_CONNECTION_URL
export const ENGINE_API_KEY = process.env.ENGINE_API_KEY
export const NODE_ENV = process.env.NODE_ENV
export const PORT: number = 4000 || parseInt(`${process.env.PORT}`)

// boolean
export const IS_PRODUCTION: boolean = NODE_ENV === 'production'
