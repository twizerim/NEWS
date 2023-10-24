
import Message from "../modle/massage"
import errorRisponse from "../utils/errorRisponse"
import successRisponse from "../utils/succesRisponse"


class messageController{
    static async sendmessage(req,res){

        try {
            const massage=await Message.create(req.body)

            return successRisponse(res,201,`message allready sent`,massage)
        } catch (error) {
            return errorRisponse(res,500,` error is :${error}`)
        }


    }
    static async getmessage(req,res){
        const message = await Message.find()
        if(!message){
            return errorRisponse(res,401,`no message found`)
        }else{
            return successRisponse(res,201,`all ${message.length} retrived`,message)
        }
    }

    static async deleteallmessage(req,res){
        const message = await Message.deleteMany()
        if(!message){
            return errorRisponse(res,401,`no message found`)
        }else{
            return successRisponse(res,201,`all ${message.length} deleted`,message)
        }
    }
}
export default messageController