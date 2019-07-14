import { createToken } from '../../utils/jwt'
import { UserInputError, AuthenticationError } from 'apollo-server-core'
import { isPassword } from '../../utils/hash'

const loginUser = async (_, { email, password }, { User }) => {
    const userInfo = await User.findOne({ email })

    if (!userInfo) {
        throw new UserInputError(`Cannot find email for ${email}`)
    }

    const match = await isPassword(password, userInfo.password)

    if (!match) {
        throw new AuthenticationError('Incorrect Username or Password')
    }

    const token = createToken({
        role: userInfo.role,
        uid: userInfo.id,
        username: userInfo.username,
    })

    return {
        loggedIn: true,
        token,
    }
}

export default loginUser
