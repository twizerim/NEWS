
import express from "express"
import NewsController from "../controller/NewController"
import VerifyAccess from "../middleware/velifyAccess"


const router=express.Router()
router.post("/news",VerifyAccess("admin"),NewsController.createnews)  
router.get("/news",NewsController.getAllnews)
router.patch("/:id",VerifyAccess("admin"),NewsController.updatenews)
router.delete("/:id",NewsController.deleteOnenews)
router.put("/like/:id",VerifyAccess("user"),NewsController.likes)
router.put("/dislike/:id",VerifyAccess("user"),NewsController.dislikes)
router.delete("/",VerifyAccess("admin"),NewsController.deleteAll)
router.get("/search",NewsController.searchCategory)
router.get("/:id",NewsController.getOneNews)


export default router