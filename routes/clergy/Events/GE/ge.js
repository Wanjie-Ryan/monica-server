const express = require('express')
const router = express.Router()
const {CreateEvents, GetAllEvents, GetSingleEvents, UpdateEvents, DeleteEvents,SearchEvents} = require('../../../../controllers/clergy/Events/GE/ge')
const authMiddleware = require("../../../../middleware/auth");



router.route('/createevent').post(authMiddleware,CreateEvents)
router.route('/allevents').get(GetAllEvents)
router.route('/singleevent/:id').get(GetSingleEvents)
router.route('/updateevent/:id').patch(UpdateEvents)
router.route('/deleteevent/:id').delete(DeleteEvents)
router.route('/searchevent').get(SearchEvents)

module.exports = router


