const Events = require('../../../../models/clergy/Events/events')
const {StatusCodes} = require('http-status-codes')


const CreateEvents = async(req,res)=>{

    try{

        const {title, image, ActualDate, DeadlineDate, category, description} = req.body

        if(!title || !image || !ActualDate || !DeadlineDate || !category || !description){

            return res.status(StatusCodes.BAD_REQUEST).json({msg:'Fill all the fields'})
        }

        const genEvents = await Events.create(req.body)
        return res.status(StatusCodes.OK).json({msg:'General Events was created', genEvents})

    }

    catch(err){

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:'There seems to be an error, please try again!'})
    }
}

const GetAllEvents = async(req,res)=>{

    try{

        const AllEvents = await Events.find({})

        if(!AllEvents){

            return res.status(StatusCodes.NOT_FOUND).json({msg:'No Events were fetched'})
        }

        return res.status(StatusCodes.OK).json({msg:"The Events are the following:", AllEvents})

    }

    catch(err){

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:'There seems to be an error, please try again!'})

    }
}

const GetSingleEvents = async(req,res)=>{

    try{

        const {id:eventId} = req.params

        const singleEvent = await Events.findOne({_id:eventId})

        if(!singleEvent){

            return res.status(StatusCodes.NOT_FOUND).json({msg:`Event with the ID of:${eventId} has not been found`})
        }

        return res.status(StatusCodes.OK).json({msg:'The single Event is:', singleEvent})


    }

    catch(err){

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:'There seems to be an error, please try again!'})


    }

}

const UpdateEvents = async(req,res)=>{

    try{

        const {title, image, category, description} = req.body
        const {id:eventId} = req.params

        const updateEvent = await Events.findOneAndUpdate({_id:eventId}, req.body, {

            new:true,
            runValidators:true
        })

        if(!updateEvent){

            return res.status(StatusCodes.NOT_FOUND).json({msg:`Event with the ID of:${eventId} has not been found`})
        }

        return res.status(StatusCodes.OK).json({msg:`The Event with id of ${eventId} has been updated successfully:`, updateEvent})


    }

    catch(err){

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:'There seems to be an error, please try again!'})


    }
}

const DeleteEvents = async(req,res)=>{

    try{

        const {id:eventId} = req.params

        const deleteEvent = await Events.findOneAndDelete({_id:eventId})

        if(!deleteEvent){

            return res.status(StatusCodes.NOT_FOUND).json({msg:`Event with the ID of:${eventId} has not been found`})
        }

        return res.status(StatusCodes.OK).json({msg:`Event with the id of ${eventId} has been deleted successfully`})


    }

    catch(err){

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:'There seems to be an error, please try again!'})


    }
    
}

const SearchEvents = async(req, res)=>{

    try{


        const {searchTerm} = req.query

        if(!searchTerm){

            return res.status(StatusCodes.BAD_REQUEST).json({msg:'Please provide a search term'})
        }

        //using regular expression to perform a case-insensitive search

        const regex = new RegExp(searchTerm, 'i')

        const foundEvents =  await Events.find({title:regex})

        if(foundEvents.length === 0){

            return res.status(StatusCodes.NOT_FOUND).json({msg:'The specified event was not found'})
        }

        return res.status(StatusCodes.OK).json({msg:'Event Found is:', foundEvents})

    }

    catch(err){

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:'There seems to be an error, please try again!'})


    }




}

module.exports = {CreateEvents, GetAllEvents, GetSingleEvents, UpdateEvents, DeleteEvents,SearchEvents}