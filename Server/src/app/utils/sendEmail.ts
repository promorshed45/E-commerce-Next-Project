import nodemailer from 'nodemailer';
import config from '../config';


export const sendEmail = async (to: string, html: string) => {

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: config.NODE_ENV === 'production', // Use `true` for port 465, `false` for all other ports
        auth: {
            user: "ctgmorshed45@gmail.com",
            pass: "ecvk zgst hguy kjcc",
        },
    })


 await transporter.sendMail({
        from: '"Morshed Alam👻" <ctgmorshed45@gmail.com>', // sender address
        to, // list of receivers
        subject: "change Forget Password", // Subject line
        text: "Forget your password, don't worry, click following this link & change password !", // plain text body
        html, // html body
    });

}