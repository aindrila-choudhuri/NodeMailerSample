const nodemailer = require("nodemailer");
require("dotenv").config();

//Step 1
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.USERNAME,
        pass: process.env.PASSWORD
    }
})

//Step 2
const mailOptions = {
    from: process.env.USERNAME,
    to: "choudhuri.aindrila.work@gmail.com",
    subject: "Email sending test",
    text: "It's working"
}

//Step 3 - in case of sending email from GMAIL we need to set the less secure option in gmail
//or else gmail doesn't accept plain text as password
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        console.log("Error occurred : ", err);
    } else {
        console.log("Successfully sent email");
    }
})