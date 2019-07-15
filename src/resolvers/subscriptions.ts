import {
    USER_ADDED,
    USER_DELETED,
    USER_UPDATED,
    USER_LOGGED_IN,
    USER_LOGGED_OUT,
    pubsub,
} from '../globals/constants'
import { SubscriptionResolvers } from '../types/resolvers-types'

const Subscription: SubscriptionResolvers = {
    userAdded: {
        subscribe: () => pubsub.asyncIterator([USER_ADDED]),
    },
    userDeleted: {
        subscribe: () => pubsub.asyncIterator([USER_DELETED]),
    },
    userUpdated: {
        subscribe: () => pubsub.asyncIterator([USER_UPDATED]),
    },
    userLoggedIn: {
        subscribe: () => pubsub.asyncIterator([USER_LOGGED_IN]),
    },
    userLoggedOut: {
        subscribe: () => pubsub.asyncIterator([USER_LOGGED_OUT]),
    },
}

export default Subscription
