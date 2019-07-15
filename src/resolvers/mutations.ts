import { MutationResolvers } from '../types/resolvers-types'
import { createHash, isPassword } from '../utils/hash'
import { SESSION_NAME } from '../globals.config'
import { AuthenticationError, UserInputError } from 'apollo-server-core'
import {
    pubsub,
    USER_DELETED,
    USER_ADDED,
    USER_LOGGED_IN,
    USER_LOGGED_OUT,
    USER_UPDATED,
} from '../globals/constants'

const Mutation: MutationResolvers = {
    deleteUser: async (_, { id }, { User }) => {
        try {
            const result = await User.findByIdAndDelete(id)
            pubsub.publish(USER_DELETED, { userDeleted: id })
            return result
        } catch (error) {
            throw new Error(error)
        }
    },
    createUser: async (_, args, { User }) => {
        const hash = await createHash(args.password)

        try {
            const newUser = await new User({ ...args, password: hash })
            pubsub.publish(USER_ADDED, { userAdded: args })
            return newUser.save()
        } catch (error) {
            throw new Error(error)
        }
    },
    loginUser: async (_, args, { User, req }) => {
        const userInfo = await User.findOne({ email: args.email })

        if (!userInfo) {
            throw new UserInputError(`Cannot find email for ${args.email}`)
        }

        const match = await isPassword(args.password, userInfo.password)

        if (!match) {
            throw new AuthenticationError('Incorrect Username or Password')
        }

        req.session.user = {
            id: userInfo.id,
            username: userInfo.username,
            role: userInfo.role,
        }

        pubsub.publish(USER_LOGGED_IN, { userLoggedIn: userInfo })

        return {
            loggedIn: true,
        }
    },
    logoutUser: async (_, __, { req, res }) => {
        const user = req.session.user
        try {
            req.session.destroy(() => {
                return pubsub.publish(USER_LOGGED_OUT, { userLoggedOut: user })
            })
            res.clearCookie(SESSION_NAME)
        } catch (error) {
            console.log(error)
        }

        return 'You have successfully logged out'
    },
    updateUser: async (_, { id, ...rest }, { User }) => {
        const userInfo = await User.findByIdAndUpdate(id, { ...rest })
        if (!userInfo) {
            throw new UserInputError('Could not update user')
        } else {
            await pubsub.publish(USER_UPDATED, { userUpdated: { id, ...rest } })
            return {
                updated: true,
            }
        }
    },
    changePassword: async (_, args, { User }) => {
        const userInfo = await User.findOne({ email: args.email })

        if (!userInfo) {
            throw new UserInputError(`Cannot find email for ${args.email}`)
        }

        const match = await isPassword(args.currentPassword, userInfo.password)

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
}

export default Mutation
