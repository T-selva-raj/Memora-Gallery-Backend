const { SendResponse } = require("../generalFunctions");


const signUpUser = async (req, res) => {
    try {
        SendResponse(res,{ name: " selva" }, "vanakkam da mapla", 422);
    }
    catch (e) {
        res.json({ success: false });
    }
}
module.exports.signUpUser = signUpUser;