
import express from "express"
import messageController from "../controller/messageController"
import verifyAccess from "../middleware/velifyAccess"


const router=express.Router()
router.post("/message",messageController.sendmessage)
router.get("/message",verifyAccess("admin"),messageController.getmessage)
export default router