var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'aditya@perpetualny.com',
    pass: 'hkjhjhjjkjhkj'
  }
});

var mailOptions = {
  from: 'aditya@perpetualny.com',
  to: 'aditya@perpetualny.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});