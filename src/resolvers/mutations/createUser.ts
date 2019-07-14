import { createHash } from '../../utils/hash'

const createUser = async (_, args, { User }) => {
    const hash = await createHash(args.password)

    try {
        const newUser = await new User({ ...args, password: hash })
        return newUser.save()
    } catch (error) {
        throw new Error(error)
    }
}

export default createUser
