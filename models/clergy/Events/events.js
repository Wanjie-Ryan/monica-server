const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({

    title:{

        type:String,
        required:[true, 'Provide the name of the Event']
    },

    image:{

        type:String,
        required:[true, 'Provide the image of the Event']

    },

    ActualDate:{
        type:Date,
        required:[true, 'Provide the Actual Date for the Event']
    },

    DeadlineDate:{

        type:Date,
        required:[true, 'Provide the Deadline Date for the Event']
    },

    description:{

        type:String,
        required:[true, 'Provide a brief description of the Event'],
        maxlength:50

    }



})



module.exports = mongoose.model('Events', eventSchema)