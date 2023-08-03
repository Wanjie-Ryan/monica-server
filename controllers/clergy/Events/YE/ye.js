const Events = require('../../../../models/clergy/Events/ye')
const {StatusCodes} = require('http-status-codes')


const CreateLadiesEvents = async(req,res)=>{

    try{

        const {title, image, ActualDate, DeadlineDate, description} = req.body

        if(!title || !image || !ActualDate || !DeadlineDate || !description){

            return res.status(StatusCodes.BAD_REQUEST).json({msg:'Fill all the fields'})
        }

        const ladiesEvents = await Events.create(req.body)
        return res.status(StatusCodes.OK).json({msg:'Youths Events was created', ladiesEvents})

    }

    catch(err){

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:'There seems to be an error, please try again!'})
    }
}

const GetAllEventsLadies = async(req,res)=>{

    try{

        const AllladiesEvents = await Events.find({})

        if(!AllladiesEvents){

            return res.status(StatusCodes.NOT_FOUND).json({msg:'No Teens Events were fetched'})
        }

        return res.status(StatusCodes.OK).json({msg:"The Teens Events are the following:", AllladiesEvents})

    }

    catch(err){

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:'There seems to be an error, please try again!'})

    }
}

const GetSingleLadiesEvents = async(req,res)=>{

    try{

        const {id:eventId} = req.params

        const singleladiesEvent = await Events.findOne({_id:eventId})

        if(!singleladiesEvent){

            return res.status(StatusCodes.NOT_FOUND).json({msg:`Teens Event with the ID of:${eventId} has not been found`})
        }

        return res.status(StatusCodes.OK).json({msg:'The single Teens Event is:', singleladiesEvent})


    }

    catch(err){

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:'There seems to be an error, please try again!'})


    }

}

const UpdateLadiesEvents = async(req,res)=>{

    try{

        const {title, image, description} = req.body
        const {id:eventId} = req.params

        const updateladiesEvent = await Events.findOneAndUpdate({_id:eventId}, req.body, {

            new:true,
            runValidators:true
        })

        if(!updateladiesEvent){

            return res.status(StatusCodes.NOT_FOUND).json({msg:`Teens Event with the ID of:${eventId} has not been found`})
        }

        return res.status(StatusCodes.OK).json({msg:`The Teens Event with id of ${eventId} has been updated successfully:`, updateladiesEvent})


    }

    catch(err){

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:'There seems to be an error, please try again!'})


    }
}

const DeleteLadiesEvents = async(req,res)=>{

    try{

        const {id:eventId} = req.params

        const deleteladiesEvent = await Events.findOneAndDelete({_id:eventId})

        if(!deleteladiesEvent){

            return res.status(StatusCodes.NOT_FOUND).json({msg:`Teens Event with the ID of:${eventId} has not been found`})
        }

        return res.status(StatusCodes.OK).json({msg:`Teens Event with the id of ${eventId} has been deleted successfully`})


    }

    catch(err){

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:'There seems to be an error, please try again!'})


    }
    
}

const SearchLadiesEvents = async(req, res)=>{

    try{


        const {searchTerm} = req.query

        if(!searchTerm){

            return res.status(StatusCodes.BAD_REQUEST).json({msg:'Please provide a search term'})
        }

        //using regular expression to perform a case-insensitive search

        const regex = new RegExp(searchTerm, 'i')

        const foundladiesEvents =  await Events.find({title:regex})

        if(foundladiesEvents.length === 0){

            return res.status(StatusCodes.NOT_FOUND).json({msg:'The specified Teens event was not found'})
        }

        return res.status(StatusCodes.OK).json({msg:'Teens Event Found is:', foundladiesEvents})

    }

    catch(err){

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:'There seems to be an error, please try again!'})


    }




}

module.exports = {CreateLadiesEvents, GetAllEventsLadies, GetSingleLadiesEvents, UpdateLadiesEvents, DeleteLadiesEvents,SearchLadiesEvents}