
import express from "express"
import CommentController from "../controller/CommentContrller"
import VerifyAccess from "../middleware/VelifyAccess"


const router=express.Router()
router.post("/:id",VerifyAccess("user"),CommentController.postcomment)
router.get("/",CommentController.getcomment)
router.delete("/",VerifyAccess("admin"),CommentController.deletecomment)
router.delete("/:id",CommentController.deleteOnecomment)
export default router