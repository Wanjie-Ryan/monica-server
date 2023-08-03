const express = require('express')
const router = express.Router()
const {CreateLadiesEvents, GetAllEventsLadies, GetSingleLadiesEvents, UpdateLadiesEvents, DeleteLadiesEvents,SearchLadiesEvents} = require('../../../../controllers/clergy/Events/TE/te')
const {verifyToken} = require('../../../../controllers/clergy/Reg&Log/reg-log')


router.route('/createevent').post(CreateLadiesEvents)
router.route('/allevents').get(GetAllEventsLadies)
router.route('/singleevent/:id').get(GetSingleLadiesEvents)
router.route('/updateevent/:id').patch(UpdateLadiesEvents)
router.route('/deleteevent/:id').delete(DeleteLadiesEvents)
router.route('/searchevent').get(SearchLadiesEvents)

module.exports = router


