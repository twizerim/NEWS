
import express  from "express";
import usercontroller from "../controller/usercontroller";
import DtataChequer from "../middleware/datachequer"
import validator from "../middleware/validater"
import VerifyAccess from "../middleware/VelifyAccess";



const router=express.Router()
router.post("/user",
DtataChequer.userRegisterIsEmpty,
DtataChequer.emailExist,
validator.userAccountRule(),
validator.inputvalidator,
usercontroller.createuser)
router.get("/",VerifyAccess("admin"),usercontroller.getalluser)
router.delete("/user",VerifyAccess("admin"),usercontroller.deleteAllUsers)
router.get("/:id",VerifyAccess("admin"),usercontroller.getOneUser)
router.delete("/:id",VerifyAccess("admin"),usercontroller.deleteOneUser)
router.patch("/:id",VerifyAccess("admin"),usercontroller.updateUser)
router.post("/login",usercontroller.Login)

export default router
