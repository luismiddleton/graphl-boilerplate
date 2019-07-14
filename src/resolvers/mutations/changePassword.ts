import { UserInputError } from 'apollo-server-core'
import { createHash, isPassword } from '../../utils/hash'

const changePassword = async (_, args, { User }) => {
    const userInfo = await User.findOne({ email: args.email })

    if (!userInfo) {
        throw new UserInputError(`Cannot find email for ${args.email}`)
    }

    const match = await isPassword(args.currentPassword, userInfo.password)

    if (!match) {
        throw new UserInputError('Input password is incorrect')
    }

    const getNewPassword = await createHash(args.newPassword)
    await User.findByIdAndUpdate(userInfo.id, {
        password: getNewPassword,
    })
    return {
        changedPassword: true,
    }
}

export default changePassword
