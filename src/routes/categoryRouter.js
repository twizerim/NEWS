
import express from "express"
import categoryController from "../controller/categoryControler"
import VerifyAccess from "../middleware/VelifyAccess"


const router = express.Router()
router.post("/",VerifyAccess("admin"),categoryController.postcategory)
router.get("/get",categoryController.getAllcategory)
export default router