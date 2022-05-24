const express = require('express');



const { registerUser, getUser } = require('../controllers/authController');

const router = express.Router();

router.route('/register/user').post(registerUser);
router.route('/getUser').get(getUser);


module.exports = router;