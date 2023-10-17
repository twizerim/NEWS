
import express from "express"
import categoryController from "../controller/categoryControler"
import verifyAccess from "../middleware/velifyAccess"
verifyAccess


const router = express.Router()
router.post("/",verifyAccess("admin"),categoryController.postcategory)
router.get("/get",categoryController.getAllcategory)
export default router