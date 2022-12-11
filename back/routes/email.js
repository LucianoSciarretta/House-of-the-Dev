const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

router.post("/", (req, res) => {
  console.log("INFO", req.body);
  const { name, email, phone, message } = req.body;

  contentHtml = `
        <h1>User Information</h1>
        <ul>
        <li>Name: ${name}</li>
        <li>Email: ${email}</li>
        <li>Phone: ${phone}</li>
        </ul>
        <p>Message: ${message}</p>
    
    `;

  nodemailer.createTestAccount((err, account) => {
    if (err) {
      console.error("Failed to create a testing account. " + err.message);
      return process.exit(1);
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "torrance76@ethereal.email",
        pass: "fZ3W37VBWZ4agrwehf",
      },
    });

    const mailOptions = {
      from: "torrance76@ethereal.email",
      to: "clsciarretta@hotmail.com",
      subject: "Enviado desde nodemailer",
      html: contentHtml,
      dsn: {
        id: "some random message specific id",

        notify: ["failure", "delay"],
      },
      // html: contentHtml,
      // console.log("Email enviado");
    };

    transporter.sendMail(mailOptions, (error) => {
      // .then(res => res.status(200).send("Mensaje Recibido"))
      //   .catch((error) => console.log(error))
      if (error) {
        return res.status(500).send(error.message);
      } else {
        console.log("Email enviado");
        return res.status(200).json(req.body);
      }
    });

    res.status(200).send("Mensaje Recibido");
  });
});
module.exports = router;
