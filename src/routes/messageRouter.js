
import express from "express"
import messageController from "../controller/messageController"
import VerifyAccess from "../middleware/velifyAccess"


const router=express.Router()
router.post("/message",messageController.sendmessage)
router.get("/message",VerifyAccess("admin"),messageController.getmessage)
router.delete("/message",VerifyAccess("admin"),messageController.deleteallmessage)
export default router