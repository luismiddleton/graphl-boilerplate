import { gql } from 'apollo-server'

export const typeDefs = gql`
    # Comments in GraphQL are defined with the hash (#) symbol.

    type User {
        id: ID!
        firstName: String
        lastName: String
        username: String!
        email: String!
        password: String
    }

    type LoginResponse {
        loggedIn: Boolean!
        token: String!
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
        ): User
        deleteUser(id: ID!): User
        loginUser(email: String!, password: String!): LoginResponse
    }
`
