
import express from "express"
import categoryController from "../controller/categoryControler"


const router = express.Router()
router.post("/",categoryController.postcategory)
router.get("/get",categoryController.getAllcategory)
export default router