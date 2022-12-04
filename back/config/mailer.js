const nodemailer = require("nodemailer");

const transporter = () => {
  const transport = nodemailer.createTransport({
    host: "localhost",
    port: 3001,
    auth: {
      user: "",
      pass: "",
    },
  });
  return transport
};


