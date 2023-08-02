const express = require('express')
const router = express.Router()
const {CreateProject, UpdateProject, DeleteProject} = require('../../../controllers/clergy/projects/projects')
const {verifyToken} = require('../../../controllers/clergy/Reg&Log/reg-log')

router.route('/createproject').post(verifyToken,CreateProject)
router.route('/updateproject/:id').patch(verifyToken,UpdateProject)
router.route('/deleteproject/:id').delete(verifyToken,DeleteProject)



module.exports =router