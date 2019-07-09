import bcrypt from 'bcrypt'
import { sign } from "jsonwebtoken"
import { AuthenticationError } from 'apollo-server';



export const resolvers = {
    Query: {
        users: async (_, __, { User }) => {
            return await User.find()
        },
        user: async (_, { id }, { User }) => {
            try {
                return await User.findOne({ id })
            } catch (error) {
                throw new Error(error)
            }
        },
    },
    Mutation: {
        createUser: async (_, { password, ...rest }, { User }) => {
            const hash = await bcrypt.hash(password, 10)

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
            const isPassword = await bcrypt.compare(password, userInfo.password)

            if (isPassword){
                const token = await sign({ uid: userInfo.id, username: userInfo.username}, 'somecoolsecret', { expiresIn: '1d'} )
                return {
                    loggedIn: true,
                    token
                }
            } else {
                throw new AuthenticationError('Incorrect password')
            }
        }
    },
}
