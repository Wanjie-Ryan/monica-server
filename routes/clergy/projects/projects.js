const express = require('express')
const router = express.Router()
const {CreateProject, GetAllProjects,UpdateProject, DeleteProject} = require('../../../controllers/clergy/projects/projects')
const authMiddleware = require('../../../middleware/auth')


router.route('/createproject').post(authMiddleware,CreateProject)
router.route('/getAllprojects').get(GetAllProjects)
router.route('/updateproject/:id').patch(UpdateProject)
router.route('/deleteproject/:id').delete(DeleteProject)



module.exports =router