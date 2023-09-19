const successRisponse=(res,status,messg,datas)=>{
    res.status(status).json({
        message:messg,
        data:datas
    })
}

export default successRisponse