const nodemailer = require("nodemailer");
const config=require('../config/config').get(process.env.NODE_ENV);

const user = config.user;
const pass = config.pass;

const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: user,
    pass: pass,
  },
});

module.exports.sendConfirmationEmail = (firstname, email, token) => {
    console.log("Check");
    transport.sendMail({
      from: user,
      to: email,
      subject: "Please confirm your account",
      html: `<h1>Email Confirmation</h1>
          <h2>Hello ${firstname}</h2>
          <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
          <a href=http://localhost:3000/api/?${token}> Click here</a>
          </div>`,
    }).catch(err => console.log(err));
    console.log(token);
  };