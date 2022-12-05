const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

router.post("/", (req, res) => {
  console.log("INFO", req.body);
  const { name, email, phone, message } = req.body;

 var  contentHtml = `
        <h1>User Information</h1>
        <ul>
        <li>Name: ${name}</li>
        <li>Email: ${email}</li>
        <li>Phone: ${phone}</li>
        </ul>
        <p>Message: ${message}</p>
    
    `;

    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
          user: 'dominic.wyman10@ethereal.email',
          pass: 'zEbkJpBXFW5MuxnKSj'
      }
  });

  const mailOptions = {
    from: "Remitente",
    to: "lucianosciarretta27641512@gmail.com",
    subject: "Enviado desde nodemailer",
    html: contentHtml

  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).send(error.message);
    } else {
      console.log("Email enviado");
      res.status(200).json(req.body);
    }
  });

  res.status(200).send("Mensaje Recibido");
});

module.exports = router;
