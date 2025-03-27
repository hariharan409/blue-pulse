const { sendResponse } = require("@/utils/api.response");
const userService = require("@/services/user.service");



exports.userLogin = async(request,response) => {
    try {
        console.log(request.user);
        const response = await userService.userLogin();
        sendResponse(response,200,true,"user login api",response);
    } catch (error) {
        sendResponse(response,500,false,error.message || error,null);
    }
}