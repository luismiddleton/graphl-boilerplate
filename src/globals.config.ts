import * as uuid from 'uuid'
import { config } from 'dotenv'
import { MAX_AGE } from './globals/constants';

// set config to proces.env
config()

// variables of types
export const SALT_ROUNDS: number = 10
export const JWT_SECRET: string = uuid.v4()
export const SESSION_SECRET: string = uuid.v1()
export const SESSION_NAME: string = 'qid'
export const COOKIE_MAX_AGE: number = MAX_AGE

// .env variables
export const MONGO_CONNECTION_URL = process.env.MONGO_CONNECTION_URL
export const ENGINE_API_KEY = process.env.ENGINE_API_KEY
export const NODE_ENV = process.env.NODE_ENV
export const PORT: number = 4000 || parseInt(`${process.env.PORT}`)

export const IS_PRODUCTION: boolean = NODE_ENV === 'production'
export const IS_TEST: boolean = NODE_ENV === 'test'