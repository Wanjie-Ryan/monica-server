const projectsModel = require("../../../models/clergy/projects/projects");
const { StatusCodes } = require("http-status-codes");

const CreateProject = async (req, res) => {
  try {
    const { title, image, description } = req.body;

    if (!title || !image ) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "Provide all the details" });
    }

    const ProjectCreated = await projectsModel.create(req.body);

    return res
      .status(StatusCodes.OK)
      .json({ msg: "Project Successfully created", ProjectCreated });
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Something unexpected happened, try again!" });
  }
};

const GetAllProjects  = async(req,res)=>{

  try{

    const AllProjects = await projectsModel.find({})

    if(AllProjects.length === 0){

      return res.status('No projects have been found')
    }

    return res.status(StatusCodes.OK).json({msg:`The projects fetched are:`, AllProjects})


  }

  catch(err){

    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Something unexpected happened, try again!" });


  }
}

const UpdateProject = async (req, res) => {
  try {
    const { title, image, description } = req.body;

    const { id: projectId } = req.params;

    const projectUpdated = await projectsModel.findOneAndUpdate(
      { _id: projectId },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!projectUpdated) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ msg: `Project with id ${projectId} not found` });
    }

    return res
      .status(StatusCodes.OK)
      .json({
        msg: `Project of id:${projectId} updated succesfully`,
        projectUpdated,
      });
  } catch (err) {
    // console.log(err)
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Something unexpected happened, try again!" });
  }
};

const DeleteProject = async (req, res) => {
  try {
    const { id: projectId } = req.params;

    const deletedProject = await projectsModel.findOneAndDelete({
      _id: projectId,
    });

    if (!deletedProject) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ msg: `Project with the id of:${projectId} was not found` });
    }

    return res
      .status(StatusCodes.OK)
      .json({ msg: `Project of id:${projectId} was deleted successfully` });
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Something unexpected happened, try again!" });
  }
};

module.exports = { CreateProject,GetAllProjects, UpdateProject, DeleteProject };
