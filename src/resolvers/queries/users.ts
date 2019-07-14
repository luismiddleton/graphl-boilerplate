const users = async (_, __, { User }) => {
    return await User.find()
}

export default users
