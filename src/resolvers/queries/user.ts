const user = async (_, { id }, { User }) => {
    try {
        return await User.findById(id)
    } catch (error) {
        throw new Error(error)
    }
}

export default user
