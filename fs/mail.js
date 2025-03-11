const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'geniuspekka1808_bai26@mepcoeng.ac.in', 
        pass: ''   
    }
});

const mailOptions = {
    from: 'geniuspekka1808_bai26@mepcoeng.ac.in',
    to: 'nithishm811@gmail.com',
    subject: 'Test Email using Nodemailer',
    text: 'Hello Nithish, this is a test email sent using Nodemailer!'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Error occurred:', error.message);
    } else {
        console.log('Email sent successfully!');
        console.log('Message ID:', info.messageId);
    }
});
