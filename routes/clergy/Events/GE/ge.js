const express = require('express')
const router = express.Router()
const {CreateEvents, GetAllEvents, GetSingleEvents, UpdateEvents, DeleteEvents,SearchEvents} = require('../../../../controllers/clergy/Events/GE/ge')
const {verifyToken} = require('../../../../controllers/clergy/Reg&Log/reg-log')


router.route('/createevent').post(CreateEvents)
router.route('/allevents').get(GetAllEvents)
router.route('/singleevent/:id').get(GetSingleEvents)
router.route('/updateevent/:id').patch(UpdateEvents)
router.route('/deleteevent/:id').delete(DeleteEvents)
router.route('/searchevent').get(SearchEvents)

module.exports = router


