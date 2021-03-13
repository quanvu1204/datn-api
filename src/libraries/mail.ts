import nodemailer from 'nodemailer';
import path from 'path';
import EmailTemplate from 'email-templates';
import config from '../../config/env';

interface IMailServer {
    mailServer: string;
    mailPort: string;
    mailAuthUserName: string;
    mailAuthPassword: string;
    senderEmail: string;
    senderName: string;
}

interface IMail {
    from?: string;
    to: string;
    subject: string;
    template: string;
    data: any;
}

interface IMailTemplate {
    from: string;
    to: string;
    subject: string;
    html: string;
    text?: string;
}

const emailTemplateDir = path.resolve('src/templates/emails');

class Mail {
    private smtpTransport: any;
    private mailServerInfo: IMailServer;

    constructor(mailInfo: IMailServer) {
        this.mailServerInfo = mailInfo;
        this.initializeMailService(mailInfo);
    }

    private initializeMailService(mailInfo: IMailServer) {
        const smtpTransport = nodemailer.createTransport({
            host: mailInfo.mailServer,
            port: parseInt(mailInfo.mailPort),
            secure: true,
            auth: {
                user: mailInfo.mailAuthUserName,
                pass: mailInfo.mailAuthPassword,
            },
        });
        this.smtpTransport = smtpTransport;
    }

    public async requestSendMail(mail: IMail): Promise<string> {
        if (!mail.from) {
            mail.from = `${this.mailServerInfo.senderName} <${this.mailServerInfo.senderEmail}>`;
        }
        const template = new EmailTemplate();
        const results = await template.render(
            path.join(emailTemplateDir, mail.template),
            mail.data
        );
        const sendStatus = await this.send({
            from: mail.from,
            to: mail.to,
            subject: mail.subject,
            html: results,
        });
        return sendStatus;
    }

    private send(mail: IMailTemplate): Promise<string> {
        return new Promise((resolve, reject) => {
            this.smtpTransport.sendMail(mail, function (error: Error, info) {
                if (error) {
                    console.log(error);
                }
                resolve('Message sent: ' + info.response);
            });
        });
    }
}

export default new Mail({
    mailServer: config.mailServer,
    mailPort: config.mailPort,
    mailAuthUserName: config.mailAuthUserName,
    mailAuthPassword: config.mailAuthPassword,
    senderEmail: config.senderEmail,
    senderName: config.senderName,
});
