const express = require("express");
const app = express();
const port = process.env.PORT || 3005;
const cors = require("cors");
const helmet = require("helmet");
const xss = require("xss-clean");
const cookie = require("cookie-parser");
const rateLimit = require("express-rate-limit");
require("dotenv").config();
const { StatusCodes } = require("http-status-codes");
const connectionDB = require("./connection/connection.js");

// ROUTES FOR THE CLERGY
const AuthRoute = require("./routes/clergy/Reg&Log/reg-log");
const ProjectsRoute = require("./routes/clergy/projects/projects");
const GERoute = require("./routes/clergy/Events/GE/ge");

// ROUTES FOR THE USER
const FeedbackRoute = require("./routes/user/feedback");

// ROUTES FOR THE ADMIN

app.use(helmet());
app.use(xss());
app.use(cookie());
app.use(express.json());
app.set("trust proxy", 1);
app.use(
  rateLimit({
    windowsMs: 15 * 60 * 100,
    max: 100,
  })
);
app.use(cors());

// ROUTES FOR THE CLERGY

app.use("/api/clergy/auth", AuthRoute);
app.use("/api/clergy/projects", ProjectsRoute);
app.use("/api/clergy/events", GERoute);

// ROUTES FOR THE USER

app.use("/api/user", FeedbackRoute);

// ROUTES FOR THE ADMIN

app.get("/wake-up", (req, res) => {
  res.json({
    responseType: "success",
    message: "Server is awake",
  });
});

const DBConnection = async () => {
  try {
    await connectionDB(process.env.mongo_url);

    app.listen(port, () => {
      console.log(`server is running on port, ${port}`);
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

DBConnection();
