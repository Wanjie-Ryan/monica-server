const mongoose = require('mongoose')
const bcrypt = require("bcryptjs");



const clergySchema = new mongoose.Schema({

    name:{

        type:String,
        required:[true, 'Name is required'],

    },

    image:{

        type:String
    },
    


},{timestamps:true})



// clergySchema.pre("save", async function (next) {

//     try {

//       const salt = await bcrypt.genSalt(10);
//       this.Password = await bcrypt.hash(this.Password, salt);
//       next();

//     } catch (err) {
//       next(err);
//     }

//   });
  
//   clergySchema.methods.checkpwd = async function (candidatePassword) {

//     try {

//       const isMatch = await bcrypt.compare(candidatePassword, this.Password);
//       return isMatch;

//     } catch (err) {
//       throw err;
//     }
//   };




module.exports = mongoose.model('Clergy', clergySchema)