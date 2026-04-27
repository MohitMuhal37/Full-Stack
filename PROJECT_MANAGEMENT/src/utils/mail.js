import Mailgen from "mailgen";
import nodemailer from "nodemailer";

const sendEmail = async (option) => {
    const mailGenerator = new Mailgen({
        theme: "default",
        product: {
            name: "Task Manager",
            link : "https://taskmanagelink.com"
        }
    })

    const emailTextual =  mailGenerator.generatePlaintext(option.mailgenContent);

    const emailHtml =  mailGenerator.generate(option.mailgenContent);

   const transporter = nodemailer.createTransport({
        host:process.env.MAIL_TRAP_SMPT_HOST,
        port : MAIL_TRAP_SMPT_PORT,
        auth : {
            MAIL_TRAP_SMPT_USER,
            MAIL_TRAP_SMPT_PASS
        }
    })

    const mail = {
        from : "mail.taskmanager@example.com",
        to:option.email,
        subject : option.subject,
        text:emailTextual,
        html:emailHtml
    }

    try{
        await transporter.sendMail(mail)
    }catch(error){
        console.error("Email Service is failed, make sure you have provide Mailtrap Credential");
        
    };
    console.error("Error", error);
    
}

const emailVerification = (username, verificationUrl) => {
    return {
        body : {
            name : username,
            intro : "Welcome to our app We are Excited to have you on board",
            action : {
                instructions : "To verify email please click ont he following button",
                button : {
                    color : "#1aae5a",
                    text : "Verify your email",
                    link : verificationUrl
                }
            },
            outro : "Need help or questions Just reply to this mail we would love to help"
        }
    }
}


const forgotPasswordMail = (username, passwordResetUrl) => {
    return {
        body : {
            name : username,
            intro : "We got a request to reset the password of Your account",
            action : {
                instructions : "To reset your password please click on link or given button",
                button : {
                    color : "#22BC66",
                    text : "Reset password",
                    link : passwordResetUrl
                }
            },
            outro : "Need help or questions Just reply to this mail we would love to help"
        }
    }
}

export {forgotPasswordMail, emailVerification, sendEmail};