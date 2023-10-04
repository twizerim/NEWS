import News from "../modle/News";
import errorRisponse from "../utils/errorRisponse";
import successRisponse from "../utils/succesRisponse";
import sendEmail from "../utils/email";
import User from "../modle/User"
import Category from "../modle/categorys";

class NewsController {
  static async createnews(req, res) {

    const categoryId=req.body.categorys
    const category= await Category.findById({_id:categoryId})
   
    if(!category){
      return errorRisponse(res,401,`no category found`)
    }
      const news = await News.create(req.body);
    try {

      if(!news){
        return errorRisponse(res,401,`no news created`)
      }else{

        const users=await User.find()
        users.map((user)=>{
        sendEmail(user,news)
        })
        return successRisponse(res, 201, `successfuly posted`, news);
      }
    } catch (error) {
      return errorRisponse(res, 500, `not post ${error}`);
    }
  }

  static async searchCategory(req,res){

    const searchcategoryNews =req.query.category
    if(!searchcategoryNews){
      return errorRisponse(res,401,`no data provided in params`)
    }else{
      const news=await News.find()
      const result=news.filter((good)=>{
        return good.categorys.categoryName.toUpperCase().includes(searchcategoryNews.toUpperCase())
      })

      if(result.length==0){
        return errorRisponse(res,401,`no news found`)
      }else{
        return successRisponse(res,200,`${result.length} news foun ${searchcategoryNews}`,result)
      }
    }
  }

  static async getAllnews(req, res) {
   const news=await News.find()

    try {
      if (!news) {
        return errorRisponse(res, 401, `no news found`);
      } else {
        return successRisponse(res, 200, `success ${news.length} news retrived`, news);
      }
    } catch (error) {
      return errorRisponse(res, 500, `error is :${error}`);
    }
  }

  static async updatenews(req,res){
    const id=req.params.id
    const news=await News.findByIdAndUpdate(id,req.body,{new:true})
    if(!news){
        return errorRisponse(res,401,`no news to upudate on this id :${id}`)
    }else{
        return successRisponse(res,200,`successfuly updated`,news)
    }
  }

  static async deleteOnenews(req,res){
    const id=req.params.id
    const news=await News.findByIdAndDelete(id)
    if(!news){
        return errorRisponse(res,401,`no news to delete on this id :${id}`)
    }else{
        return successRisponse(res,200,`successfuly delete`,news)
    }
  }
  
  static async getOneNews(req,res){
    const id=req.params.id
    const news = await News.findById(id)
    if(!news){
      return errorRisponse(res,401,`no news for this id found`)
    }else{
      return successRisponse(res,201,`the news for this id:${id}retrived`,news)
    }
  }

  static async deleteAll(req,res){
    const news = await News.deleteMany()
      if(!news){
        return errorRisponse(res,401,`no news found to delete`)
      }else{
        return successRisponse(res,201,`all ${news.length} deleted`)
      }
    
  }

  static async likes(req,res){
    const newsId=req.params.id
    const news=await News.findById({_id:newsId})
    if(!news){
      return errorRisponse(res,401,`no news foun`)
    }else {
      const userId=req.user._id
      if(news.likes.includes(userId)){
        return errorRisponse(res,401,`you allready liked news`)
      }
      else{
        if(news.dislikes.includes(userId)){
          news.dislikes.pull(userId)
        }else{
          news.likes.push(userId)
          news.save()
          return successRisponse(res,200,`like from ${req.user.firstName}`)
        }
      }
    }
  }
  static async dislikes(req,res){
    const newsId=req.params.id
    const news=await News.findById({_id:newsId})
    if(!news){
      return errorRisponse(res,401,`no news foun`)
    }else {
      const userId=req.user._id
      if(news.dislikes.includes(userId)){
        return errorRisponse(res,401,`you allready kiled news`)
      }
      else{
        if(news.likes.includes(userId)){
          news.likes.pull(userId)
        }else{
          news.dislikes.push(userId)
          news.save()
          return successRisponse(res,200,`like from ${req.user.firstName}`)
        }
      }
    }
  }

  
}
export default NewsController
