import { gql } from 'apollo-server'

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
        token: String!
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

    type Query {
        users: [User]
        user(id: ID!): User
    }

    type Mutation {
        createUser(
            firstName: String
            lastName: String
            username: String
            email: String
            password: String
            role: String
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
        changePassword(
            email: String!
            currentPassword: String!
            newPassword: String!
        ): ChangePasswordResponse
    }
`
