// const drive = require('./drive.service').getDrive;
const bcrypt = require('bcrypt');
const UserDetails = require('../models').userDetails;

/**
 * function is used to sign up the user
 * @param {*} userData 
 * @returns 
 */
const signUpUser = async (userData) => {
    try {
        let user = await UserDetails.findOrCreate({
            where: { email: userData.email }, 
            defaults: {
                userName: userData.userName,
                password: userData.password,
            }
        });
        // if (user&&user[1]) {
        //     let folder = await createUserFolder(user[0]?.dataValues?.userName,user[0]?.dataValues?.email);
        //     await UserDetails.update({ driveFolder: folder }, {
        //         where: { id: user[0]?.dataValues?.id }
        //     });
        // }
        return user;
    } catch (e) {
        throw new Error(e.message);
    }
}
module.exports.signUpUser = signUpUser;

/**
 * function is used to sign in
 * @param {*} userData 
 * @returns 
 */
const signInUser = async (userData) => {
    try {
        let user = await UserDetails.findOne({
            where: {
                email: userData?.email,
                isDeleted:false
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

/**
 * the function is used to get the user profile data
 * @param {*} userId 
 * @returns 
 */
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

/**
 * function is used to update the profile
 * @param {*} data 
 * @param {*} userId 
 * @returns 
 */
const updateProfile = async (data,userId) => {
    try {
        let updateProfile = await UserDetails.update(data, {
            where: { id: userId }
        });
        return updateProfile
        
    }catch(e){throw new Error(e.message) }
}
module.exports.updateProfile = updateProfile;

/**
 * function is used to create the folder in the cloud
 * @param {*} userId 
 * @param {*} email 
 * @returns 
//  */
// const createUserFolder = async (userId,email) => {
//     try {
//         const DRIVE = await drive();
//         const userFolderName = `user_${userId}_${Date.now()}`;
//         const folderMetadata = {
//             name: userFolderName,
//             mimeType: 'application/vnd.google-apps.folder',
//             parents: [CONFIG.folder],
//         };
//         const folder = await DRIVE.files.create({
//             resource: folderMetadata,
//             fields: 'id',
//         });
//         await shareFolder(folder?.data?.id, email);
//         console.log('User folder created successfully. Folder ID:', folder.data.id);
//         return { folderId: folder.data.id, folderName: userFolderName };
//     } catch (error) {
//         console.error('Error creating user folder:', error);
//         throw error;
//     }
// };
/**
 * function is used to grand access to the user.
 * @param {*} folderId 
 * @param {*} userEmail 
 */
// const shareFolder = async (folderId, userEmail) => {
//     const DRIVE = await drive();
//     const permission = {
//         type: 'user',
//         role: 'writer', 
//         emailAddress: userEmail,
//     };
//     DRIVE.permissions.create({
//         fileId: folderId,
//         resource: permission,
//     });

//     console.log(`Folder ${folderId} shared with ${userEmail}`);
// };

/**
 * function is used to check the duplicate entries 
 * @param {*} data 
 * @returns 
 */
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