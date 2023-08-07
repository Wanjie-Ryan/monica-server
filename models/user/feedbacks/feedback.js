const mongoose = require("mongoose");
const validator = require("validator");

const feedbackSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Provide the name"],
    },

    email: {
      type: String,
      required: [true, "Provide the email"],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide a valid email",
      ],

      validate: [validator.isEmail, "Please provide a valid email"],
    },

    message: {
      type: String,
      required: [true, "Provide the message"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("feedbacks", feedbackSchema);
