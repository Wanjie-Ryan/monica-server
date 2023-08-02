const projectsModel = require('../../../models/clergy/projects/projects')
const {StatusCodes} = require('http-status-codes')



const CreateProject = async(req,res)=>{


    try{

        const {title, image, description} = req.body

        if(!title || !image || !description){

            return res.status(StatusCodes.BAD_REQUEST).json({msg:'Provide all the details'})
        }

        const ProjectCreated = await projectsModel.create(req.body)

        return res.status(StatusCodees.OK).json({msg:'Project Successfully created', ProjectCreated})





    }

    catch(err){


    }
}


const UpdateProject = (req,res)=>{

    res.send('hfk')
}

const DeleteProject = (req,res)=>{

    res.send('hfksv')
}

module.exports = {CreateProject, UpdateProject, DeleteProject}