
import express  from "express";
import usercontroller from "../controller/usercontroller";
import DtataChequer from "../middleware/datachequer"
import validator from "../middleware/validater"
import verifyAccess from "../middleware/velifyAccess";



const router=express.Router()
router.post("/user",
DtataChequer.userRegisterIsEmpty,
DtataChequer.emailExist,
validator.userAccountRule(),
validator.inputvalidator,
usercontroller.createuser)
router.get("/",verifyAccess("admin"),usercontroller.getalluser)
router.delete("/user",verifyAccess("admin"),usercontroller.deleteAllUsers)
router.get("/:id",verifyAccess("admin"),usercontroller.getOneUser)
router.delete("/:id",verifyAccess("admin"),usercontroller.deleteOneUser)
router.patch("/:id",verifyAccess("admin"),usercontroller.updateUser)
router.post("/login",usercontroller.Login)

export default router
