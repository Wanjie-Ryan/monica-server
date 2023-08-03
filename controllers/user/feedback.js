const Feedback = require('../../models/user/feedbacks/feedback')
const {StatusCodes} = require('http-status-codes')




const PostFeedback = async(req,res)=>{

    try{

        const createfeedback = await Feedback.create({...req.body})

        if(!createfeedback){

            return res.status(StatusCodes.BAD_REQUEST).json({msg:'Fill in all the details'})
        }

        return res.status(StatusCodes.OK).json({msg:'Your feedback has been saved successfully', createfeedback})

    }

    catch(err){

        res.status(StatusCodes.INERNAL-SERVER_ERROR).json({msg:'There seems to be an error, try again'})
    }
}


const Allfeedbacks = async(req,res)=>{


    try{

        const getFeedbacks = await Feedback.find({})

        if(!getFeedbacks){

            return res.status(StatusCodes.NOT_FOUND).json({msg:'No user feedbacks were found'})
        }

        return res.status(StatusCodes.OK).json({msg:'Feedbacks were fetched successfully', getFeedbacks})

    }

    catch(err){

        res.status(StatusCodes.INERNAL-SERVER_ERROR).json({msg:'There seems to be an error, try again'})


    }


}


module.exports = {PostFeedback,Allfeedbacks}