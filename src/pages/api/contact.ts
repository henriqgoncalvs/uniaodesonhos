import sgMail from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';

import messageBuilder from 'lib/utils/messageBuilder';

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { nome, email, phone, howFind, dreamerLevel, motivations } = req.body;
  const msg = {
    to: 'marcella.uniaodesonhos@gmail.com',
    from: 'marcella.uniaodesonhos@gmail.com',
    subject: `Quero sonhar`,
    name: nome,
    text: messageBuilder({ email, phone, howFind, dreamerLevel, motivations }),
  };

  try {
    await sgMail.send(msg);
    res.json({ message: `Email has been sent` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error sending email' });
  }
};
