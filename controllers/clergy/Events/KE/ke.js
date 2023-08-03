const Events = require('../../../../models/clergy/Events/ke')
const {StatusCodes} = require('http-status-codes')


const CreateKidsEvents = async(req,res)=>{

    try{

        const {title, image, ActualDate, DeadlineDate, description} = req.body

        if(!title || !image || !ActualDate || !DeadlineDate || !description){

            return res.status(StatusCodes.BAD_REQUEST).json({msg:'Fill all the fields'})
        }

        const kidsEvents = await Events.create(req.body)
        return res.status(StatusCodes.OK).json({msg:'Kids Events was created', kidsEvents})

    }

    catch(err){

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:'There seems to be an error, please try again!'})
    }
}

const GetAllEventsKids = async(req,res)=>{

    try{

        const AllKidsEvents = await Events.find({})

        if(!AllKidsEvents){

            return res.status(StatusCodes.NOT_FOUND).json({msg:'No Kids Events were fetched'})
        }

        return res.status(StatusCodes.OK).json({msg:"The Kids Events are the following:", AllKidsEvents})

    }

    catch(err){

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:'There seems to be an error, please try again!'})

    }
}

const GetSingleKidsEvents = async(req,res)=>{

    try{

        const {id:eventId} = req.params

        const singleKidsEvent = await Events.findOne({_id:eventId})

        if(!singleKidsEvent){

            return res.status(StatusCodes.NOT_FOUND).json({msg:`Kids Event with the ID of:${eventId} has not been found`})
        }

        return res.status(StatusCodes.OK).json({msg:'The single Kids Event is:', singleKidsEvent})


    }

    catch(err){

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:'There seems to be an error, please try again!'})


    }

}

const UpdateKidsEvents = async(req,res)=>{

    try{

        const {title, image, description} = req.body
        const {id:eventId} = req.params

        const updateKidsEvent = await Events.findOneAndUpdate({_id:eventId}, req.body, {

            new:true,
            runValidators:true
        })

        if(!updateKidsEvent){

            return res.status(StatusCodes.NOT_FOUND).json({msg:`Kids Event with the ID of:${eventId} has not been found`})
        }

        return res.status(StatusCodes.OK).json({msg:`The Kids Event with id of ${eventId} has been updated successfully:`, updateKidsEvent})


    }

    catch(err){

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:'There seems to be an error, please try again!'})


    }
}

const DeleteKidsEvents = async(req,res)=>{

    try{

        const {id:eventId} = req.params

        const deleteKidsEvent = await Events.findOneAndDelete({_id:eventId})

        if(!deleteKidsEvent){

            return res.status(StatusCodes.NOT_FOUND).json({msg:`Kids Event with the ID of:${eventId} has not been found`})
        }

        return res.status(StatusCodes.OK).json({msg:`Kids Event with the id of ${eventId} has been deleted successfully`})


    }

    catch(err){

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:'There seems to be an error, please try again!'})


    }
    
}

const SearchKidsEvents = async(req, res)=>{

    try{


        const {searchTerm} = req.query

        if(!searchTerm){

            return res.status(StatusCodes.BAD_REQUEST).json({msg:'Please provide a search term'})
        }

        //using regular expression to perform a case-insensitive search

        const regex = new RegExp(searchTerm, 'i')

        const foundKidsEvents =  await Events.find({title:regex})

        if(foundKidsEvents.length === 0){

            return res.status(StatusCodes.NOT_FOUND).json({msg:'The specified Kids event was not found'})
        }

        return res.status(StatusCodes.OK).json({msg:'Kids Event Found is:', foundKidsEvents})

    }

    catch(err){

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:'There seems to be an error, please try again!'})


    }




}

module.exports = {CreateKidsEvents, GetAllEventsKids, GetSingleKidsEvents, UpdateKidsEvents, DeleteKidsEvents,SearchKidsEvents}