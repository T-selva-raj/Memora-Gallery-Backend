const userDetails = require('../models/userDetails');
const bcrypt = require('bcrypt');
const UserDetails = require('../models').userDetails;



const signUpUser = async (userData) => {
    try {
        let user = await UserDetails.create({
            userName: userData?.userName,
            email: userData?.email,
            password: userData?.password
        });
        return user;
    } catch (e) {
        throw new Error(e.message);
    }
}
module.exports.signUpUser = signUpUser;

const signInUser = async (userData) => {
    try {
        let user = await UserDetails.findOne({
            where: {
                email: userData?.email
            }
        });
        if (user) {
            let matchPassword = await bcrypt.compare(userData?.password, user?.dataValues?.password);
            if (matchPassword && user) {
                let token = await user.getJWT();
                user.dataValues['JWT_Token'] = token ? token : null;
            }
            else throw new Error("Wrong password !");
        }
        else throw new Error("User doesn't exist !");
        return user;
    } catch (e) {
        throw new Error(e.message);
    }
}
module.exports.signInUser = signInUser;