import http from 'http'
import { ApolloServer, makeExecutableSchema } from 'apollo-server-express'
import express from 'express'
import session from 'express-session'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'

// import { execute, subscribe } from 'graphql'
// import { createServer } from 'http'
// import { SubscriptionServer } from 'subscriptions-transport-ws'
import { typeDefs } from './typedefs'
import resolvers from './resolvers'
import {
    MONGO_CONNECTION_URL,
    ENGINE_API_KEY,
    PORT,
    SESSION_SECRET,
    COOKIE_MAX_AGE,
    IS_PRODUCTION,
    SESSION_NAME,
} from './globals.config'
import { connect } from 'mongoose'
import User from './models/users'

const startServer = async () => {
    const app = express()

    app.use(helmet())
    app.use(cors())
    app.use(morgan('dev'))

    app.use(
        session({
            name: SESSION_NAME,
            secret: SESSION_SECRET,
            resave: false,
            saveUninitialized: false,
            cookie: {
                secure: IS_PRODUCTION,
                maxAge: COOKIE_MAX_AGE,
            },
        })
    )

    await connect(
        `${MONGO_CONNECTION_URL}`,
        {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
        }
    )

    const schema = makeExecutableSchema({ typeDefs, resolvers })

    const server = new ApolloServer({
        schema,
        engine: ENGINE_API_KEY ? { apiKey: ENGINE_API_KEY } : false,
        context: ({ req, res }) => ({
            User,
            req,
            res,
        }),
    })

    server.applyMiddleware({ app })

    const httpServer = http.createServer(app);
    server.installSubscriptionHandlers(httpServer);

    return httpServer.listen(PORT)
}

startServer()
    .then(() => {
        console.log(`🚀  Server ready at http://localhost:${PORT}/graphql`)
    })
    .catch(e => console.error(e))
