
import Category from "../modle/categorys"
import errorRisponse from "../utils/errorRisponse"
import successRisponse from "../utils/succesRisponse"

class categoryController{
    static async postcategory(req,res){
        const category = await Category.create(req.body)
        if(!category){
            return errorRisponse(res,401,`no category created`)
        }else{
            return successRisponse(res,201,`success created`,category)
        }
    }

    static async getAllcategory(req,res){
        const category = await Category.find()
        if(!category){
            return errorRisponse(res,401,`no category found`)
        }else{
            return successRisponse(res,201,`all ${category.length}`,category)
            
        }
    }
}
export default categoryController