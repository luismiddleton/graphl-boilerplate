import { Model } from 'mongoose'
import { Response } from 'express'

export interface ApolloContext {
    User: Model<any>,
    req: Request,
    res: Response
}

type Request = {
    session: Express.Session
}

