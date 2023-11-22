const { SendResponse } = require("../generalFunctions");
const UserService = require('../service/user.service');
require('../config/message').MESSAGE;
const signUpUser = async (req, res) => {
    try {
        let user = await UserService.signUpUser(req?.body);
        if(user) return SendResponse(res,user,MESSAGE.SIGNUP_SUCCESS, 200);
    }
    catch (e) {
        return SendResponse(res, null, { detail: MESSAGE.SIGNUP_FAILED, reason: e.message }, 422);
    }
}
module.exports.signUpUser = signUpUser;

const signInUser = async (req, res) => {
    try {
        let user = await UserService.signInUser(req?.body);
        if (user) return SendResponse(res, user, MESSAGE.SIGNIN_SUCCESS, 200);
    } catch (e) { return SendResponse(res, null, { detail:MESSAGE.SIGNIN_FAILED,reason:e.message}, 422) };
}
module.exports.signInUser = signInUser;