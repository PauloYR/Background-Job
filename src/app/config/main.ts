import SMTPConnection from "nodemailer/lib/smtp-connection";


export const config : SMTPConnection.Options = {
    host: process.env.MAIL_HOST,    
    port: parseInt(process.env.MAIL_PORT || ''),        
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD
    }
    
  };