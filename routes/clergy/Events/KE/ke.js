const express = require('express')
const router = express.Router()
const {CreateKidsEvents, GetAllEventsKids, GetSingleKidsEvents, UpdateKidsEvents, DeleteKidsEvents,SearchKidsEvents} = require('../../../../controllers/clergy/Events/KE/ke')
const {verifyToken} = require('../../../../controllers/clergy/Reg&Log/reg-log')


router.route('/createevent').post(CreateKidsEvents)
router.route('/allevents').get(GetAllEventsKids)
router.route('/singleevent/:id').get(GetSingleKidsEvents)
router.route('/updateevent/:id').patch(UpdateKidsEvents)
router.route('/deleteevent/:id').delete(DeleteKidsEvents)
router.route('/searchevent').get(SearchKidsEvents)

module.exports = router


