import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import mongoose from "mongoose"
import routes from "./routes"
import cors from "cors"


dotenv.config()
const got=express()
got.use(bodyParser.json())
got.use(cors())
got.use("/boy",routes)
const port=process.env.PORT
const db=process.env.DATABASE  

// config our server

got.listen(port,()=>{
    console.log(`port running on ${port}`)
})

mongoose.connect(db).then(()=>{
    console.log('database successfuly connected')
}).catch((err)=>{
    console.log('it is error')
})

export default got
 