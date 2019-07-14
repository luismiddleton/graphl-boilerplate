import { UserInputError } from 'apollo-server-core'

const updateUser = async (_, { id, ...rest }, { User }) => {
    const userInfo = await User.findByIdAndUpdate(id, { ...rest })
    if (!userInfo) {
        throw new UserInputError('Could not update user')
    } else {
        return {
            updated: true,
        }
    }
}

export default updateUser
