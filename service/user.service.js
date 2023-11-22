const UserDetails = require('../models').userDetails;



const signUpUser = async (userData) => {
    try {
        let user = await UserDetails.create({
            userName: userData?.userName,
            email: userData?.email,
            password: userData?.password
        });
        if (user) {
            let token = await user.getJWT();
            user.dataValues['JWT_Token'] = token ? token : null;
        }
        return user;
    } catch (e) {
        throw new Error(e.message);
    }
}
module.exports.signUpUser = signUpUser;