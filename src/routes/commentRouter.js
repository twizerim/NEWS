
import express from "express"
import CommentController from "../controller/CommentContrller"
import verifyAccess from "../middleware/velifyAccess"


const router=express.Router()
router.post("/:id",verifyAccess("user"),CommentController.postcomment)
router.get("/",CommentController.getcomment)
router.delete("/",verifyAccess("admin"),CommentController.deletecomment)
router.delete("/:id",CommentController.deleteOnecomment)
export default router