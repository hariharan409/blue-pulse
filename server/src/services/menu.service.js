const menuRepository = require("@/repositories/menu.repository");

exports.getSideBarMenu = async() => {
    try {
        return await menuRepository.getSideBarMenu();
    } catch (error) {
        throw new Error(error.message || error);
    }
}