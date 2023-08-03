const express = require('express')
const router = express.Router()
const {PostFeedback,Allfeedbacks} = require('../../controllers/user/feedback')


router.route('/feedback').post(PostFeedback)
router.route('/allfeedbacks').get(Allfeedbacks)


module.exports = router