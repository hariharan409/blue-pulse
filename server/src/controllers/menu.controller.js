const express = require("express");
const { sendResponse } = require("@/utils/apiResponse");
const app = express.Router();

exports.getSideBarMenu = async(request,response) => {
    try {
        sendResponse(response,200,true,"success","i am the data");
    } catch (error) {
        sendResponse(response,500,false,error.message || error,null);
    }
}