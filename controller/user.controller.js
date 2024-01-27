const { SendResponse } = require("../generalFunctions");
const UserService = require('../service/user.service');
const UploadService = require('../service/upload.service');
const ImageService = require('../service/images.service');
require('../config/message').MESSAGE;


const signUpUser = async (req, res) => {
    try {
        let user = await UserService.signUpUser(req?.body);
        if(user) return SendResponse(res,user, 200);
    }
    catch (e) {
        return SendResponse(res, e, 422);
    }
}


const signInUser = async (req, res) => {
    try {
        let user = await UserService.signInUser(req?.body);
        if (user) return SendResponse(res, user, 200);
    } catch (e) { return SendResponse(res, e, 422) };
}


const getUserProfile = async (req, res) => {
    try {
        let userProfile = await UserService.getUserProfile(req?.user?.id);
        if (userProfile) return SendResponse(res, userProfile, 200);
        else throw new Error('user not found !');
    }catch(e){return SendResponse(res,e,422)}
}


const updateProfile = async (req, res) => {
    try {
        let updateProfile = await UserService.updateProfile(req?.body, req?.params?.id);
        if (updateProfile) return SendResponse(res, updateProfile, 200);
        else throw new Error('Error While Updating !');
        
    }catch(e){return SendResponse(res,e,422)}
}

// const updateProfileImage = async (req, res) => {
//     try {
//         let uploadImage = await UploadService.uploadFile(req.file, req.query.parantId);
//         let data = await UserService.updateProfile({
//             profilePicture: uploadImage?.data?.id
//         },req.params.id);
//         if (uploadImage && data) return SendResponse(res, data, 200);
//         else throw new Error('Error While Updating !');

//     } catch (e) { return SendResponse(res,e, 422) }
// }



// const uploadImage = async (req, res) => {
//     try {
//         let uploadImage,imageArray=[];
//         req.query.parantId = "1B48HbXVUHDaLhuiBRXjAm3mtxaFRWi1B";
//         req.params.id = 9;
//         for await (let image of req.files) {
//             uploadImage = await UploadService.uploadFile(image, req.query.parantId);
//             imageArray.push({id:uploadImage?.data?.id,albumId:null});
//         }
//         // let uploadImage = await UploadService.uploadFile(req?.file,req.query.parantId);
//         let data = await ImageService.createUserImage(imageArray,req.params.id);
//         if (imageArray.length && data) return SendResponse(res, imageArray, 200);
//         else throw new Error('Error While Updating !');

//     } catch (e) { return SendResponse(res, e , 422) }
// }

const checkDuplicate = async (req, res) => {
    try {
        let info = await UserService.checkDuplicate(req.body);
        return SendResponse(res, info, 200);
        
    } catch (e) { return SendResponse(res,e, 422) }
}


module.exports = {
    updateProfile, getUserProfile, signInUser, signUpUser,
    checkDuplicate
}