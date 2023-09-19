
import {check,validationResult} from "express-validator"
import errorRisponse from "../utils/errorRisponse"


class validator{
    static inputvalidator(req,res,next){
        const error=validationResult(req)

        if(!error==error.isEmpty()){
            error.errors.map((err)=>{
                return errorRisponse(res,401,err.msg)
            })
        }else{
            return next()
        }
    }

    static userAccountRule(){
        
        return[
            check("firstName","please write your firstName correctly").trim().isAlpha(),
            check("lastName","please write your lastName correctly").trim().isAlpha(),
            check("email","please write your email correctly").trim().isEmail(),
            check("password","please write your stronger password").trim().isStrongPassword()
        ]
    }
}
export default validator