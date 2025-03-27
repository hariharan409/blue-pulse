const menuRepository = require("@/repositories/user.repository");

exports.userLogin = async() => {
    try {
        return await menuRepository.userLogin();
    } catch (error) {
        throw new Error(error.message || error);
    }
}