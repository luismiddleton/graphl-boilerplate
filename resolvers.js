import bcrypt from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { AuthenticationError, UserInputError } from 'apollo-server'
import { JWT_SECRET } from './globals.config'
import { isPassword, createHash } from './utils/hash'
import { createToken } from './utils/jwt'

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
        updateUser: async (_, { id, ...rest }, { User }) => {
            const userInfo = await User.findByIdAndUpdate(id, { ...rest })
            if (!userInfo) {
                throw new UserInputError('Could not update user')
            } else {
                return {
                    updated: true,
                }
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

            if (!userInfo) {
                throw new UserInputError(`Cannot find email for ${email}`)
            }

            const match = await isPassword(password, userInfo.password)

            if (!match) {
                throw new AuthenticationError('Incorrect Username or Password')
            }

            const token = createToken({
                uid: userInfo.id,
                username: userInfo.username,
                role: userInfo.role,
            })

            return {
                loggedIn: true,
                token,
            }
        },
        changePassword: async (_, args, { User }) => {
            const userInfo = await User.findOne({ email: args.email })

            if (!userInfo) {
                throw new UserInputError(`Cannot find email for ${args.email}`)
            }

            const match = await isPassword(
                args.currentPassword,
                userInfo.password
            )

            if (!match) {
                throw new UserInputError('Input password is incorrect')
            }

            const getNewPassword = await createHash(args.newPassword)
            await User.findByIdAndUpdate(userInfo.id, {
                password: getNewPassword,
            })
            return {
                changedPassword: true,
            }
        },
    },
}
