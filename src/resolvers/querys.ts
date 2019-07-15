import { QueryResolvers } from '../types/resolvers-types'
import { isLoggedIn } from "../utils/auth";

export const Query: QueryResolvers = {
    user: async (_, { id }, { User }) => {
        try {
            return await User.findById(id)
        } catch (error) {
            throw new Error(error)
        }
    },
    users: async (_, __, { User }) => {
        return await User.find()
    },
    currentUser: async (_, __, { User, req } ) => {
        const { session } = await req
    
        await isLoggedIn(session.user)
    
        try {
            return await User.findById(session.user.id)
        } catch (error) {
            throw new Error(error)
        }
    }
}

export default Query
