
import User from "../modle/User";
import bcrypt, { hash } from "bcrypt";
import successRisponse from "../utils/succesRisponse";
import errorRisponse from "../utils/errorRisponse";
import jwt from "jsonwebtoken"

class usercontroller {
  static async createuser(req, res) {
    const {firstName,lastName,email,password,role}=req.body
    try {

      if(req.body.password !== req.body.confirmpassword){
        return errorRisponse(res,403,`password and confirm password miss match`)
      }

      const hashPassword=bcrypt.hashSync(req.body.password,10)

      const user = await User.create({firstName,lastName,email,role,password:hashPassword});
    return successRisponse(res,201,`user successfuly created`,user)

    } catch (error) {
      return errorRisponse(res,500,`error`)
        
      } 
        
  }


  static async Login(req,res){
       const {email,password}=req.body

       const user=await User.findOne({email})

       if(!user){
        return errorRisponse(res,401,`invalid email `)
       }
       else{
        const comperepassword=bcrypt.compareSync(password,user.password)
        if(!comperepassword){
          return errorRisponse(res,401,`invalid  password`)
        }else{

          const token=jwt.sign({user:user},process.env.SCRET_KEY,{expiresIn:"1d"})
          return res.status(200).json({
            token:token,
            data:{
             user:user
            }
          })
        }
       }
  }


  static async getalluser(req,res){
    const users = await User.find()
    if(!users){
      return errorRisponse(res,401,`no user found`)
    }else{
      return successRisponse(res,201,`all ${users.length} user retrived`,users)
    }
  }

  
  static async deleteAllUsers(req, res) {
    const users = await User.deleteMany();
    return successRisponse(res,200,`all users deleted`,users)
   
  }

  static async getOneUser(req,res){
    const id=req.params.id
    const user=await User.findById(id)
    if(!user){
      
      return errorRisponse(res,401,`no user found with that id : ${id}`)
  
    }else{

   return successRisponse(res,200,`user successfuly retrieved`,user)
    }


  }


  static async deleteOneUser(req,res){
    const id=req.params.id
    const user=await User.findByIdAndDelete(id)
    if(!user){
      return errorRisponse(res,401,`no user to delete with that id :${id}`)
    }else{
      return successRisponse(res,200,`successfuly deleted`,user)
    }
  }

  static async updateuser(req,res){
       const id=req.params.id
       const user = await User.findByIdAndUpdate(id,req.body,{new:true})
       if(!user){
        return errorRisponse(res,401,`no user found on this id`)
       }else{
        return successRisponse(res,201,`user successfull updated`,user)
       }
  }

}
export default usercontroller;