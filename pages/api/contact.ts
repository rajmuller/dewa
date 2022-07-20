import nodemailer from "nodemailer";

export default async (req: any, res: any) => {
  const { subject, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    host: "mail.dewa.hu",
    port: 465,
    secure: true,
    auth: {
      user: "b.patrick@dewa.hu",
      pass: "z6t5r4e3w2q1",
    },
  });

  try {
    await transporter.sendMail({
      from: "dewa@dewa.hu",
      to: "dewa@dewa.hu",
      subject: `Honlapon érdeklődés targy: ${subject} | feladó: ${email}`,
      html: `<p>Honlapról érkező üzenet</p><br>
      <p>${message}</p><br>

      `,
    });

    // eslint-disable-next-line no-console
    console.log("Message Sent");
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }

  res.status(200).json(req.body);
};
