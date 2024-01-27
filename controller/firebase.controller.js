const { SendResponse } = require('../generalFunctions');
const FirebaseService = require('../service/firebase.service');
const uploadFileTOfireBase = async (req, res) => {
    try {
        const files = req?.files;
        if (files?.length == 0) {
            return SendResponse(res, false, 'No file uploaded.', 422);
        }
        const folderName = req?.user?.userName ? req.user.userName.toUpperCase() : "DEFAULT";
        let data = await FirebaseService.uploadImageToFireBase(files, { folderName: folderName });
        if (data) return SendResponse(res, "Images Saved !", 200);
        else return SendResponse(res, "Some images Not saved !", 422);
    } catch (error) {
        console.error(error);
        return SendResponse(res, "Internal Server Error", 422);
    }
}
const uploadProfile = async (req, res) => {
    try {
        const files = req?.file;
        if (files?.length == 0) {
            return SendResponse(res, 'No Image Found.', 422);
        }
        const folderName = req?.user?.userName ? req.user.userName.toUpperCase() + "/PROFILE" : req.user.userName.toUpperCase() ;
        let data = await FirebaseService.uploadImageToFireBase([files], { folderName: folderName });
        if (data) return SendResponse(res, "Profile Saved !", 200);
        else return SendResponse(res, "Profile Not saved !", 422);
    } catch (error) {
        console.error(error);
        return SendResponse(res, "Internal Server Error", 422);
    }
}
module.exports = { uploadFileTOfireBase ,uploadProfile};
// {/* <img src="https://firebasestorage.googleapis.com/v0/b/simple-da-mapla.appspot.com/o/admin%2F1706012884678spartans-4.jpg?alt=media" //> */}