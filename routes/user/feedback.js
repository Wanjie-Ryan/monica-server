const express = require('express')
const router = express.Router()
const {PostFeedback,Allfeedbacks} = require('../../controllers/user/feedback')
const authMiddleware = require("../../middleware/auth");


router.route('/feedback').post(PostFeedback)
router.route('/allfeedbacks').get(authMiddleware,Allfeedbacks)


module.exports = router