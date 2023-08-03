const mongoose = require('mongoose')


const feedbackSchema = new mongoose.Schema({

    name:{

        type:String,
        required:[true, 'Provide the name']
    }, 

    email:{

        type:String,
        required:[true, 'Provide the email']
    },

    message:{

        type:String,
        required:[true, 'Provide the message']
    }

},{timestamps:true})


module.exports = mongoose.model('feedbacks', feedbackSchema)



