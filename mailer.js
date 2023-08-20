import nodemailer from 'nodemailer';
import config from './config.js'


export async function sendWelcomeMessage(email, wiadomosc){
    //wyslanie maila

    let transporter = nodemailer.createTransport({
        service: "Outlook365",
        host: "smtp.office365.com",
        port: "587",
        tls: {
          ciphers: "SSLv3",
          rejectUnauthorized: false,
        },
        auth: {
          user: config.EMAIL,
          pass: config.PASS,
        },
      });

    await transporter.sendMail({
        from: `NazwaUser <${config.EMAIL}>`,
        to: email,
        subject: 'Witaj na mailingu',
        text: 'Wiadomosc email. Wartosc tekstu: sam tekst. ',
        html: 'Wiadomosc email. Wartosc tekstu: html+text.'
    })

}
