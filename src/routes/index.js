import express from "express"
import userrouter from "./userrouter"
import newsRouter from "./newsRouter"
import commentRouter from "./commentRouter"
import messageRouter from "./messageRouter"

const router=express.Router()

router.use("/user",userrouter)
router.use("/news",newsRouter)
router.use("/comment",commentRouter)
router.use("/message",messageRouter)

export default router

