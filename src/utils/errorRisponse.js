const errorRisponse=(res,status,messg,datas)=>{
    res.status(status).json({
        message:messg
    })
}
export default errorRisponse