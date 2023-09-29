
import nodemailer from "nodemailer"

const sendEmail=async(allUserInfo,newsData)=>{

    let transporter=nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:465,
        secure:true,
        auth:{
            user:process.env.Email,
            pass:process.env.PASSWORD,
        }
    });

    let maiOptions={
        from:process.env.Email,
        to:allUserInfo.email,
        subject:`${allUserInfo.firstName} new post has been posted`,
        html: `<p>Dear, <b>${allUserInfo.firstName} ${allUserInfo.lastName}</b></p><br/><br/> 
    <p>new post <b>${newsData.newsmaintytle}</b> has been added</p><br/><br/>
    <p>click the link <a href="http:akazuba.com">Akazuba</a></p>`,
    }
    transporter.sendMail(maiOptions,function(err,info){
        if(err){
            console.error(err)
        }else{
            console.info(info)
        }
    })
}

export default sendEmail