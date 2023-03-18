import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
/* import * as sendgridTrasnport from 'nodemailer-sendgrid-transport'; */

const email = process.env.MAIL_ADRESS;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { name, SendMail, content } = req.body;

    if (!name.trim() || !SendMail.trim() || !content.trim()) {
      return res.status(403).send('');
    }

    const transport = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: email,
        pass: process.env.TOKEN_GMAIL
      }
    });

    const message = {
      from: email,
      to: email,
      subject: `Nova menssagem do Portfolio de - ${name}`,
      html: `
      <h1>Chegou um Email do seu portfolio</h1>
      <h2><b>Email do remetente:</b> ${SendMail}</h2>
      <h2><b>Menssagem: </b> ${content}</h2>
      `,
      replyTo: SendMail
    };
    await transport.sendMail(message);

    return res.send('');
  } catch (error) {
    return res.json({
      error: true,
      message: error.message
    });
  }
};
