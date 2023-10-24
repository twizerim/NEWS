
import express from "express"
import messageController from "../controller/messageController"
import VerifyAccess from "../middleware/VelifyAccess"


const router=express.Router()
router.post("/message",messageController.sendmessage)
router.get("/message",VerifyAccess("admin"),messageController.getmessage)
export default router