var express = require('express');
var router = express.Router();
const userController = require('../controller/user.controller');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/signup', userController.signUpUser);

module.exports = router;


