var express = require('express');
var router = express.Router();
const userController = require('../controller/user.controller');
const passport = require('passport');
require('../middleware/passport')(passport);



router.post('/signup', userController.signUpUser);
router.post('/signin', userController.signInUser);
router.get('/ping', passport.authenticate('jwt', { session: false }), function (req, res) {
  res.send('verified user');
});
module.exports = router;



