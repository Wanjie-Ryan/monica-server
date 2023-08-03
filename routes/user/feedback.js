const express = require('express')
const router = express.Router()
const {PostFeedback} = require('../../controllers/user/feedback')


router.route('/feedback').post(PostFeedback)



module.exports = router