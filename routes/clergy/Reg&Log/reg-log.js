const express = require('express')
const router = express.Router()
const {Register, Login,  verifyToken, UpdateProfile} = require('../../../controllers/clergy/Reg&Log/reg-log')
const authMiddleware = require("../../../middleware/auth");




router.route('/register').post(Register)
router.route('/login').post(Login)
router.route('/update/:id').patch(authMiddleware,UpdateProfile)
router.route('/verify').get(verifyToken)


module.exports = router