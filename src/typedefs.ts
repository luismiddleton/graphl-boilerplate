import { gql } from 'apollo-server-express'

export const typeDefs = gql`
    # Comments in GraphQL are defined with the hash (#) symbol.

    type User {
        id: ID!
        firstName: String
        lastName: String
        username: String!
        email: String!
        password: String!
        role: Roles
    }

    type LoginResponse {
        loggedIn: Boolean!
    }

    type ChangePasswordResponse {
        changedPassword: Boolean!
    }

    type updateResponse {
        updated: Boolean!
    }

    enum Roles {
        USER
        ADMIN
    }

    type Subscription {
        userAdded: User!
        userDeleted: User!
        userUpdated: User!
        userLoggedIn: User!
        userLoggedOut: User!
    }

    type Query {
        users: [User]
        user(id: ID!): User
        currentUser: User!
    }

    type Mutation {
        createUser(
            firstName: String!
            lastName: String!
            username: String!
            email: String!
            password: String!
            role: Roles!
        ): User
        deleteUser(id: ID!): User!
        updateUser(
            id: ID!
            firstName: String
            lastName: String
            username: String
            email: String
        ): updateResponse
        loginUser(email: String!, password: String!): LoginResponse
        logoutUser: String
        changePassword(
            email: String!
            currentPassword: String!
            newPassword: String!
        ): ChangePasswordResponse
    }

    schema {
        query: Query
        mutation: Mutation
        subscription: Subscription
    }
`
