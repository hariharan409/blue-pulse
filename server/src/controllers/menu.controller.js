const { sendResponse } = require("@/utils/api.response");
const menuService = require("@/services/menu.service");

exports.getSideBarMenu = async(request,response) => {
    try {
        await menuService.getSideBarMenu();
        sendResponse(response,200,true,"success","i am the data");
    } catch (error) {
        sendResponse(response,500,false,error.message || error,null);
    }
}