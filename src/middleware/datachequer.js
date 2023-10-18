
import express from "express"
import successRisponse from "../utils/succesRisponse"
import User from "../modle/User"
import erroRisponse from "../utils/errorRisponse"


class DtataChequer{

    static userRegisterIsEmpty=(req,res,next)=>{
        const {firstName,lastName,email,password}=req.body

        if(firstName==""){
            return erroRisponse(res,401,`please provide your firstName`)
        }
        else if(lastName==""){
            return erroRisponse(res,401,`please provide yuor lastName`)
        }
        else if(email==""){
            return erroRisponse(res,401,`please provide yuor email`)
        }
        else if(password==""){  
            return erroRisponse(res,401,`please provide yuor password`)
        }
        else{
            return next()
        }
    }

    static async emailExist(req,res,next){
        const email=req.body.email;
        const user = await User.findOne({email})
        if(user){
            return erroRisponse(res,401,`user allready exist`)
        }
        else{
            return next()
        }
    }

}
export default DtataChequer