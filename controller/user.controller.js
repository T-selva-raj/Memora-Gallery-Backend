const { SendResponse } = require("../generalFunctions");
const UserService = require('../service/user.service');

const signUpUser = async (req, res) => {
    try {
        let user = await UserService.signUpUser(req?.body);
        if(user) return SendResponse(res,user,"Registered successfully !", 200);
    }
    catch (e) {
       return SendResponse(res,null,e.message,422)
    }
}
module.exports.signUpUser = signUpUser;