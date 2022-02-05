import nodemailer from "nodemailer";

export default async (req: any, res: any) => {
  const { subject, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: "SendPulse",
    auth: {
      user: "rajfta@gmail.com",
      pass: "Dead7Field",
    },
  });

  try {
    const emailRes = await transporter.sendMail({
      from: email,
      to: "rajfta@gmail.com",
      // TODO: change
      // to: "dewa@dewa.hu",
      subject: `Honlapon érdeklődés üzenet - ${subject}`,
      html: `<p>Honlapról érkező üzenet</p><br>
      <p>${message}</p><br>

      `,
    });

    console.log("Message Sent");
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
};
