
import mongoose from "mongoose";

const newsSchemas=new mongoose.Schema({
    newsmaintytle:{
        type:String,
        required:[true,`please enter newstytle`]
    },
    newstytle:{
        type:String,
        required:[true,`please enter newstytle`]
    },
    newssammary:{
        type:String,
        required:[true,`type news introduction`]
    },
    newsdiscription:{
        type:String,
        requierd:[true,`type your news`]
    },
    newsimage:{
        type:String,
        required:[true,`put there your image news`]
    },
    publishername:{
        type:String,
        required:[true,`please enter publihed name`]
    },
    likes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
            
        },
    ],
    dislikes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
    ],
    comments:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment"
    },
    ],

    publishedDate:{
        type:Date,
            default:new Date(Date.now())
    }

})

newsSchemas.pre(/^find/,function(next){
    this.populate({
        path:"comments",
        select:"comment postedAt"
    })
    next()
})

const News=mongoose.model("News",newsSchemas)
export default News

