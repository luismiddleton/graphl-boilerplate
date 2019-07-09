import { ApolloServer } from 'apollo-server'
import { typeDefs } from './typedefs'
import { resolvers } from './resolvers'
import { MONGO_CONNECTION_URL, APOLLO_ENGINE_KEY } from './globals.config'
import mongoose from 'mongoose'
import { User } from './models/users'

const startServer = async () => {
    await mongoose.connect(`${MONGO_CONNECTION_URL}`, {
        useNewUrlParser: true,
        useCreateIndex: true,
    })

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        engine: APOLLO_ENGINE_KEY ? true : false,
        context: { User },
    })

    server.listen().then(({ url }) => {
        console.log(`🚀  Server ready at ${url}`)
    })
}

startServer()
