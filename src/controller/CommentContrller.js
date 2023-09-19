
import Comment from "../modle/Comment";
import News from "../modle/News";
import errorRisponse from "../utils/errorRisponse";
import successRisponse from "../utils/succesRisponse";


class CommentController{

    static async postcomment(req,res){
        try {
            const blogIdParams=req.params.id
            req.body.user=req.user._id
        const comment=await Comment.create(req.body)

        const news = await News.findByIdAndUpdate({_id: blogIdParams},{$push: {comments:comment}},{ new: true })
         if(!news){
            return errorRisponse(res,401,`no blog found here`)
         }
         else{
            return successRisponse(res,200,`success comment posted`,news)
         }
        } catch (error) {
            return errorRisponse(res,500, `error is :${error}`)
        }
       
    }

    static async getcomment(req,res){
        const comment=await Comment.find()
        if(!comment){
            return errorRisponse(res,401,`no comment found`)
        }else{
            return successRisponse(res,200,`success comment retrived`,comment)
        }
    }

    static async deletecomment(req,res){
        const comment=await Comment.deleteMany()
        if(!comment){
            return errorRisponse(res,401,`comment aleady deleted`)
        }else{
            return successRisponse(res,201,`success all comment deleted`)
        }
    }

    static async deleteOnecomment(req,res){
        const id=req.params.id
        const comment=await Comment.findByIdAndDelete(id)
        if(!comment){
            return errorRisponse(res,401,`comment aleady deleted`)
        }else{
            return successRisponse(res,201,`success all comment on id:${id}  deleted`)
        }
    }
}
export default CommentController