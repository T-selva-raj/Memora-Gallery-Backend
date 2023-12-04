const drive = require('./drive.service').getDrive;
const bcrypt = require('bcrypt');
const UserDetails = require('../models').userDetails;



const signUpUser = async (userData) => {
    try {
        let user = await UserDetails.findOrCreate({
            userName: userData?.userName,
            email: userData?.email,
            password: userData?.password
        });
        if (user) {
            let folder = await createUserFolder(user?.dataValues?.userName);
            await UserDetails.update({ driveFolder: folder }, {
                where: { id: user?.dataValues?.id }
            });
        }
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
        delete user?.dataValues?.password;
        delete user?.dataValues?.driveFolder;
        return user;
    } catch (e) {
        throw new Error(e.message);
    }
}
module.exports.signInUser = signInUser;

const getUserProfile = async (userId) => {
    try {
        let userDetails = await UserDetails.findOne({
            where: {
                id: userId
            },
            attributes:{exclude:['password']}
        });
        return userDetails;
        
    } catch (e) {
        throw new Error(e.message);
    }
}
module.exports.getUserProfile = getUserProfile;

const updateProfile = async (data,userId) => {
    try {
        let updateProfile = await UserDetails.update(data, {
            where: { id: userId }
        });
        return updateProfile
        
    }catch(e){throw new Error(e.message) }
}
module.exports.updateProfile = updateProfile;


const createUserFolder = async (userId) => {
    try {
        const DRIVE = await drive();
        const userFolderName = `user_${userId}_${Date.now()}`;
        const folderMetadata = {
            name: userFolderName,
            mimeType: 'application/vnd.google-apps.folder',
            parents: [CONFIG.folder],
        };
        const folder = await DRIVE.files.create({
            resource: folderMetadata,
            fields: 'id',
        });
        console.log('User folder created successfully. Folder ID:', folder.data.id);
        return { folderId: folder.data.id, folderName: userFolderName };
    } catch (error) {
        console.error('Error creating user folder:', error);
        throw error;
    }
};


const checkDuplicate = async (data) => {
    try {
        console.log(data);
        let info = await UserDetails.findAll({
            where: data
        });
        if (info.length) return false;
        else return true;
    }catch(error){throw error}
}
module.exports.checkDuplicate = checkDuplicate;