
import mongoose from "mongoose";


const messageSchemas=new mongoose.Schema({

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