import { ApolloServer } from 'apollo-server'
import { typeDefs } from './typedefs'
import { resolvers } from './resolvers'
import { MONGO_CONNECTION_URL, ENGINE_API_KEY } from './globals.config'
import mongoose from 'mongoose'
import { User } from './models/users'

const startServer = async () => {
    await mongoose.connect(`${MONGO_CONNECTION_URL}`, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        engine: ENGINE_API_KEY ? { apiKey: ENGINE_API_KEY } : false,
        context: { User },
    })

    return await server.listen()
}

startServer()
    .then(({ url }) => {
        console.log(`🚀  Server ready at ${url}`)
    })
    .catch(e => console.error(e))
