const express = require('express')
const router = express.Router()
const {Register, Login,  verifyToken, UpdateProfile} = require('../../../controllers/clergy/Reg&Log/reg-log')




router.route('/register').post(Register)
router.route('/login').post(Login)
router.route('/update/:id').patch(UpdateProfile)
router.route('/verify').get(verifyToken)


module.exports = router