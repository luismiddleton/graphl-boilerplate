import { compare, hash } from 'bcrypt'
import { SALT_ROUNDS } from '../globals.config'

export async function createHash(arg: string): Promise<string> {
    return await hash(arg, SALT_ROUNDS)
}

export async function isPassword(input: string, arg: string): Promise<boolean> {
    return await compare(input, arg)
}
