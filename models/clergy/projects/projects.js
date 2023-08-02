const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({

    title:{

        type:String,
        required:[true, 'Provide the name of the Project']
    },

    image:{

        type:String,
        required:[true, 'Provide the image of the Project']

    },

    description:{

        type:String,
        required:[true, 'Provide a brief description of the Project'],
        maxlength:50

    }



})



module.exports = mongoose.model('Project', projectSchema)