const { SendResponse } = require("../generalFunctions");
const UserService = require('../service/user.service');
const UploadService = require('../service/upload.service');
const ImageService = require('../service/images.service');
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


const signInUser = async (req, res) => {
    try {
        let user = await UserService.signInUser(req?.body);
        if (user) return SendResponse(res, user, MESSAGE.SIGNIN_SUCCESS, 200);
    } catch (e) { return SendResponse(res, null, { detail:MESSAGE.SIGNIN_FAILED,reason:e.message}, 422) };
}


const getUserProfile = async (req, res) => {
    try {
        let userProfile = await UserService.getUserProfile(req?.user?.id);
        if (userProfile) return SendResponse(res, userProfile, MESSAGE.GET_USER_PROFILE_SUCCESS, 200);
        else throw new Error('user not found !');
    }catch(e){return SendResponse(res,null,{detail:MESSAGE.GET_USER_PROFILE_FAILED,reason:e.message},422)}
}


const updateProfile = async (req, res) => {
    try {
        let updateProfile = await UserService.updateProfile(req?.body, req?.params?.id);
        if (updateProfile) return SendResponse(res, updateProfile, MESSAGE.UPDATE_USER_PROFILE_SUCCESS, 200);
        else throw new Error('Error While Updating !');
        
    }catch(e){return SendResponse(res,null,{detail:MESSAGE.UPDATE_USER_PROFILE_FAILED,reason:e.message},422)}
}
const uploadImage = async (req, res) => {
    try {
        let uploadImage,imageArray=[];
        req.query.parantId = "1B48HbXVUHDaLhuiBRXjAm3mtxaFRWi1B";
        req.params.id = 9;
        for await (let image of req.files) {
            uploadImage = await UploadService.uploadFile(image, req.query.parantId);
            imageArray.push({id:uploadImage?.data?.id,albumId:null});
        }
        // let uploadImage = await UploadService.uploadFile(req?.file,req.query.parantId);
        let data = await ImageService.createUserImage(imageArray,req.params.id);
        if (imageArray.length&&data) return SendResponse(res, imageArray, MESSAGE.UPDATE_USER_PROFILE_SUCCESS, 200);
        else throw new Error('Error While Updating !');

    } catch (e) { return SendResponse(res, null, { detail: MESSAGE.UPDATE_USER_PROFILE_FAILED, reason: e.message }, 422) }
}
module.exports = {
    updateProfile, getUserProfile, signInUser, signUpUser, uploadImage
}