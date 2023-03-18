import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import * as sendgridTrasnport from 'nodemailer-sendgrid-transport';

const email = process.env.MAIL_ADRESS;

const transport = nodemailer.createTransport(
  sendgridTrasnport({
    auth: {
      api_key: process.env.SEND_GRID_API_KEY
    }
  })
);
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { name, SendMail, content } = req.body;

    if (!name.trim() || !SendMail.trim() || !content.trim()) {
      return res.status(403).send('');
    }

    const message = {
      from: email,
      to: 'matheusvictorhenrique@gamil.com',
      subject: `Nova menssage ${name}`,
      html: `<p><b>Email:</b> ${SendMail}<br /> <b>Menssagem: </b> ${content}</p>`,
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
