const deleteUser = async (_, { id }, { User }) => {
    try {
        return await User.findByIdAndDelete(id)
    } catch (error) {
        throw new Error(error)
    }
}

export default deleteUser
