const express = require('express')
const router = express.Router()
const {CreateProject, UpdateProject, DeleteProject} = require('../../controllers/clergy/projects/projects')


router.route('/createproject').post(CreateProject)
router.route('/updateproject').patch(UpdateProject)
router.route('/deleteproject').delete(DeleteProject)



module.exports =router