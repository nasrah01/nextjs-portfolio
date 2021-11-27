import nodemailer from 'nodemailer'
export default async (req, res) => {
  const {name, email, message} = req.body;
  res.status(200).json(req.body);

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  })

  try {
    const mail = await transporter.sendMail({
      from: email,
      to: 'nasrahflyaway@gmail.com',
      subject: `Contact form submission from ${name}`,
      html: `<p><strong>Name: </strong>${name}</p> <br>
      <p><strong>Email: </strong>${email}</p><br>
      <p><strong>Message: </strong>${message}</p>`,
    });
    console.log('message')
  } catch (err) {
    console.log(err);
  }
};
