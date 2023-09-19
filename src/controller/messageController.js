
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
}
export default messageController