import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import cors from 'cors';
import { EmailTemplate } from '../../components/EmailTemplate/EmailTemplate';

const email = process.env.MAIL_ADRESS;
const resend = new Resend(process.env.RESEND_KEY);

const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept']
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await new Promise<void>((resolve, reject) => {
      // eslint-disable-next-line consistent-return
      cors(corsOptions)(req, res, err => {
        if (err) return reject(err);
        resolve();
      });
    });
    const { name, SendMail, content } = req.body;

    if (!name.trim() || !SendMail.trim() || !content.trim()) {
      return res.status(403).send('');
    }

    const data = await resend.sendEmail({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Email do seu Portfolio',
      react: EmailTemplate({ name, content, sender: SendMail }),
      reply_to: SendMail
    });

    return res.json({
      error: false,
      message: data
    });
  } catch (error) {
    return res.json({
      error: true,
      message: error.message
    });
  }
};
