import { sign, verify } from 'jsonwebtoken'
import { JWT_SECRET } from '../globals.config'

export const createToken = (payload: object) => {
    return sign(payload, JWT_SECRET, { expiresIn: '2d' })
}

export const verifyToken = (payload: string) => {
    return verify(payload, JWT_SECRET)
}
