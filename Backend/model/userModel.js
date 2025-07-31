const mongoose = require ("mongoose")


const userSchema = new mongoose.Schema({
    name :{ type:String ,default:null},
    designation:{type:String,default:null},
    salary:{type:Number,required:true}
},
{ timeStamp :true}
)

const  userModel = mongoose.model("workers",userSchema)

module.exports = userModel