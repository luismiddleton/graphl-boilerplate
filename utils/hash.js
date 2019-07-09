import { compare, hash } from "bcrypt"

const SALT_ROUNDS = 10

export async function createHash(arg) {
    let data = await hash(arg, SALT_ROUNDS)
    return data
}

export async function isPassword(input, arg) {
    let data = await compare(input, arg);
    return data
}






