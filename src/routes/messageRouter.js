
import express from "express"
import messageController from "../controller/messageController"


const router=express.Router()
router.post("/message",messageController.sendmessage)
export default router