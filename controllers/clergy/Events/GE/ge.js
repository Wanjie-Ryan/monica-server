const Events = require('../../../../models/clergy/Events/events')
const {StatusCodes} = require('http-status-codes')


const CreateEvents = async(req,res)=>{

    try{

        const {title, image, ActualDate, DeadlineDate, description} = req.body

        if(!title || !image || !ActualDate || !DeadlineDate || !description){

            return res.status(StatusCodes.BAD_REQUEST).json({msg:'Fill all the fields'})
        }

        const genEvents = await Events.create(req.body)
        return res.status(StatusCodes.OK).json({msg:'General Events was created', genEvents})

    }

    catch(err){

        res.status(StatusCodes.INTERNAL_SERVER_ERROR),json({msg:'There seems to be an error, please try again!'})
    }
}

const GetAllEvents = (req,res)=>{

    res.send('hey')
}

const GetSingleEvents = (req,res)=>{

    res.send('hey')
}

const UpdateEvents = (req,res)=>{

    res.send('hey')
}

const DeleteEvents = (req,res)=>{

    res.send('hey')
}

module.exports = {CreateEvents, GetAllEvents, GetSingleEvents, UpdateEvents, DeleteEvents}