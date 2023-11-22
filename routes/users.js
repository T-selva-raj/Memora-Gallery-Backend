var express = require('express');
var router = express.Router();
const userController = require('../controller/user.controller');
const passport = require('passport');
require('../middleware/passport')(passport);
router.get('/', passport.authenticate('jwt', { session: false }), function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/signup', userController.signUpUser);

module.exports = router;



