
import jwt, { JsonWebTokenError, verify } from "jsonwebtoken";
import errorRisponse from "../utils/errorRisponse";
import { header } from "express-validator";

const verifyAccess=(passRole)=>{
    return (req,res,next)=>{

    const token=req.headers["auth-token"]
     if(!token){
        return errorRisponse(res,401,`no token provided`)
     }
     else{
        try{
            const verifyToken=jwt.verify(token,process.env.SCRET_KEY,{expiresIn:"1d"})

            req.user=verifyToken.user
            if(passRole!==verifyToken.user.role){
                return errorRisponse(res,401,`can not have access`)
            }
            return next()
        }
        catch(error){
            if(error.name==JsonWebTokenError){
                return errorRisponse(res,401,`invalid token`)
            }
        }
     }
}}

export default verifyAccess