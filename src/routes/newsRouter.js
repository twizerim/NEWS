
import express from "express"
import NewsController from "../controller/NewController"
import verifyAccess from "../middleware/velifyAccess"


const router=express.Router()
router.post("/news",verifyAccess("admin"),NewsController.createnews)  
router.get("/news",NewsController.getAllnews)
router.patch("/:id",verifyAccess("admin"),NewsController.updatenews)
router.delete("/:id",NewsController.deleteOnenews)
router.put("/like/:id",verifyAccess("user"),NewsController.likes)
router.put("/dislike/:id",verifyAccess("user"),NewsController.dislikes)
router.delete("/",verifyAccess("admin"),NewsController.deleteAll)
router.get("/search",NewsController.searchCategory)


export default router