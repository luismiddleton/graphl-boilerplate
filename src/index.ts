import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import session from 'express-session'
import morgan from 'morgan'
import helmet from 'helmet'
import { typeDefs } from './typedefs'
import resolvers from './resolvers'
import {
    MONGO_CONNECTION_URL,
    ENGINE_API_KEY,
    PORT,
    COOKIE_SECRET,
    COOKIE_MAX_AGE,
    IS_PRODUCTION,
} from './globals.config'
import { connect } from 'mongoose'
import User from './models/users'

const startServer = async () => {
    const app = express()

    app.use(helmet())
    app.use(morgan('combined'))
    
    app.use(
        session({
            secret: COOKIE_SECRET,
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

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        engine: ENGINE_API_KEY ? { apiKey: ENGINE_API_KEY } : false,
        context: { User },
    })

    server.applyMiddleware({ app })

    return app.listen(PORT)
}

startServer()
    .then(() => {
        console.log(`🚀  Server ready at http://localhost:${PORT}/graphql`)
    })
    .catch(e => console.error(e))
