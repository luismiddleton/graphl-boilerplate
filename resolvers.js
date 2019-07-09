import bcrypt from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { AuthenticationError } from 'apollo-server'
import { JWT_SECRET } from './globals.config'
import { isPassword, createHash } from './utils/hash';
import { createToken } from './utils/jwt';

export const resolvers = {
    Query: {
        users: async (_, __, { User }) => {
            return await User.find()
        },
        user: async (_, { id }, { User }) => {
            try {
                return await User.findById(id)
            } catch (error) {
                throw new Error(error)
            }
        },
    },
    Mutation: {
        createUser: async (_, { password, ...rest }, { User }) => {
            const hash = await createHash(password)

            try {
                const newUser = await new User({ ...rest, password: hash })
                return newUser.save()
            } catch (error) {
                throw new Error(error)
            }
        },
        deleteUser: async (_, { id }, { User }) => {
            try {
                return await User.findByIdAndDelete(id)
            } catch (error) {
                throw new Error(error)
            }
        },
        loginUser: async (_, { email, password }, { User }) => {
            const userInfo = await User.findOne({ email })
            const match = await isPassword(password, userInfo.password)

            if (match) {
                const token = createToken({ uid: userInfo.id, username: userInfo.username })
                return {
                    loggedIn: true,
                    token
                }
            } else {
                throw new AuthenticationError('Incorrect Username or Password')
            }
        },
    },
}
