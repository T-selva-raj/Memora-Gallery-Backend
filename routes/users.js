var express = require('express');
var router = express.Router();
var multer = require('multer');
const userController = require('../controller/user.controller');
const FB = require('../controller/firebase.controller');
const passport = require('passport');
require('../middleware/passport')(passport);

// Set up multer storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/signup', userController.signUpUser);
router.post('/signin', userController.signInUser);
router.get('/profile', passport.authenticate('jwt', { session: false }), userController.getUserProfile);
router.put('/profile/:id', passport.authenticate('jwt', { session: false }), userController.updateProfile);
router.get('/checkduplicate', userController.checkDuplicate);
router.put('/profilepicture/:id',upload.single('file'), userController.updateProfileImage);
router.get('/ping', passport.authenticate('jwt', { session: false }), function (req, res) {
  if (req.user) {
    res.send(req.user);
  }
});

router.post('/check',passport.authenticate('jwt',{session:false}), upload.array('file', 5), FB.uploadFileTOfireBase);
module.exports = router;



