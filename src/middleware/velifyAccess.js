
import errorRisponse from "../utils/errorRisponse";
import jwt from "jsonwebtoken";

const VerifyAccess = (passRole)=>{

  return (req,res,next)=>{
    const token = req.headers["auth-token"]
    console.log(token)
  }

}
export default VerifyAccess

// const VerifyAccess = (passRole) => {
//   return (req, res, next) => {
//     //set token in header
//     const token = req.headers["auth-token"];
//     if (!token) {
//       return errorRisponse(res, 401, `No token provided`);
//     } else {
//       try {
//         const verifyToken = jwt.verify(token, process.env.SECRET_KEY, {
//           expiresIn: "1d",
//         });

//         req.user = verifyToken.user;

//         if (passRole !== verifyToken.user.role) {
//           return errorRisponse(res, 401, `You don't have access`);
//         } else {
//           return next();
//         }
//       } catch (error) {
//         if ((error.name = "JsonWebTokenError"))
//           return errorRisponse(res, 401, "Invalid Token or Expired Token");
//       }
//     }
//   };
// };
// export default VerifyAccess;