import { PubSub } from "apollo-server-express"

// numbers
export const DAY: number = 24 * 60 * 60 * 1000
export const WEEK: number = 7
export const MAX_AGE: number = DAY * WEEK

// strings
export const USER_ADDED: string = 'USER ADDED'
export const USER_DELETED: string = 'USER DELETED'
export const USER_UPDATED: string = 'USER UPDATED'
export const USER_LOGGED_IN: string = 'USER LOGGED IN'
export const USER_LOGGED_OUT: string = 'USER LOGGED OUT'


// instances
export const pubsub = new PubSub()