const express = require("express");
const router = express.Router();
const {
  CreateProject,
  GetAllProjects,
  UpdateProject,
  DeleteProject,
  SearchProjects,
} = require("../../../controllers/clergy/projects/projects");
const authMiddleware = require("../../../middleware/auth");

router.route("/createproject").post(authMiddleware, CreateProject);
router.route("/getAllprojects").get(GetAllProjects);
router.route("/updateproject/:id").patch(authMiddleware, UpdateProject);
router.route("/deleteproject/:id").delete(authMiddleware, DeleteProject);
router.route("/searchproject").get(authMiddleware, SearchProjects);

module.exports = router;
