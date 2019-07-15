import { AuthenticationError } from 'apollo-server-core'

export const isLoggedIn = async (user: object) => {
    if (!user || !user === undefined || user === null) throw new AuthenticationError('You are not logged in')
}

export const isAdmin = async (user: { role: string }) => {
    if (user.role !== 'ADMIN') throw new AuthenticationError('You have insufficient permissions to perform this action')
}