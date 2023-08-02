const express = require('express')
const app = express()
const port = process.env.PORT || 3005
const cors = require('cors')
const helmet = require('helmet')
const xss = require('xss-clean')
const cookie = require('cookie-parser')
const rateLimit = require('express-rate-limit')
require('dotenv').config()
const {StatusCodes} = require('http-status-codes')
const connectionDB = require('./connection/connection.js')


// ROUTES FOR THE CLERGY
const AuthRoute = require('./routes/clergy/Reg&Log/reg-log')





// ROUTES FOR THE USER




// ROUTES FOR THE ADMIN





app.use(helmet())
app.use(xss())
app.use(cookie())
app.use(express.json())
app.set('trust proxy', 1)
app.use(rateLimit({
    windowsMs:15*60*100,
    max:100
}))
app.use(cors())




// ROUTES FOR THE CLERGY

app.use('/api/clergy/auth', AuthRoute)




// ROUTES FOR THE USER




// ROUTES FOR THE ADMIN




















const DBConnection = async() =>{


    try{

        await connectionDB(process.env.mongo_url)

        app.listen(port, ()=>{

            console.log(`server is running on port, ${port}`)
        })



    }

    catch(err){

        console.log(err)
        process.exit(1)


    }
}


DBConnection()
