import { compare, hash } from 'bcrypt'

const SALT_ROUNDS = 10

export async function createHash(arg) {
    return await hash(arg, SALT_ROUNDS)
}

export async function isPassword(input, arg) {
    return await compare(input, arg)
}
