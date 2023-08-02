
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

        if(!email || !password){

            return res.status(StatusCodes.BAD_REQUEST).json({msg:'Provide all the Details required'})

        }

        const clergyEmail = await AuthModel.findOne({email})

        if(!clergyEmail){

            return res.status(StatusCodes.NOT_FOUND).json({msg:'The Email you provided cannot be found'})
        }


        const correctPassword = await clergyEmail.checkpwd(password);

        if (!correctPassword) {
          return res
            .status(StatusCodes.UNAUTHORIZED)
            .json({ msg: "Incorrect password" });
        }

        const clergyLogin = clergyEmail.toObject()
        delete clergyLogin.password
        
        const token = jwt.sign({clergyId:clergyEmail._id}, process.env.clergy_key, {expiresIn:'1d'})

        return res.status(StatusCodes.OK).json({msg:`Login Successful`, clergyLogin, token})



    }

    catch(err){

        console.log(err)

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:'Something went wrong, please try again later'})


    }
}


module.exports = {Register, Login}