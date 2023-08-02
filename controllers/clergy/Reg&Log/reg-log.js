
const AuthModel = require('../../../models/clergy/Register/register')
const {StatusCodes} = require('http-status-codes')
const jwt = require('jsonwebtoken')


const Register = async(req, res)=>{

    try{

        const {name, image,email, tel, password} = req.body

        if(!name || !image || !email || !tel || !password){

            return res.status(StatusCodes.BAD_REQUEST).json({msg:'Please fill in all fields'})
        }

        const newClergy = new AuthModel(req.body);

        const validationError = newClergy.validateSync();

        if (validationError) {

            const errorMessages = Object.values(validationError.errors).map((error) => error.message);
            return res.status(StatusCodes.BAD_REQUEST).json({ errors: errorMessages });

        }

    
        const createdClergy = await newClergy.save();

        const sentCreatedClergy = createdClergy.toObject()
        delete sentCreatedClergy.password

        return res.status(StatusCodes.CREATED).json({ msg: 'Clergy Registered Successfully', sentCreatedClergy})


    }

    catch(err){

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:'Something went wrong, please try again later'})
        
    }
}


const Login = async(req, res)=>{

    try{

        const {email, password} = req.body
        


    }

    catch(err){


    }
}


module.exports = {Register, Login}