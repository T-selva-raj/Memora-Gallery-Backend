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

//  user controller
router.post('/signup', userController.signUpUser);
router.post('/signin', userController.signInUser);
router.get('/profile', passport.authenticate('jwt', { session: false }), userController.getUserProfile);
router.put('/profile/:id', passport.authenticate('jwt', { session: false }), userController.updateProfile);
router.post('/checkduplicate', userController.checkDuplicate);
router.get('/ping', passport.authenticate('jwt', { session: false }), function (req, res) {
  if (req.user) {
    res.send(req.user);
  }
});

// FireBase controller
router.put('/profilepicture/:id', upload.single('file'), passport.authenticate('jwt', { session: false }), FB.uploadProfile);
router.post('/check',upload.array('file',5),passport.authenticate('jwt',{session:false}) ,FB.uploadFileTOfireBase);



module.exports = router;



