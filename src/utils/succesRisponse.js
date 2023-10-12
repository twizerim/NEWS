const successRisponse=(res,status,messg,datas)=>{
    return res.status(status).json({
        message:messg,
        data:datas
    })
}

export default successRisponse