
import mongoose from "mongoose";


const messageSchemas=new mongoose.Schema({

    names:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },

    message:{
        type:String,
        required:true
    },
    sendAt:{
        type:Date,
        default:new Date(Date.now())
    }

})
const Message=mongoose.model("Message",messageSchemas)
export default Message