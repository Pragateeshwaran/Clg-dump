const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nithishm47@gmail.com', 
        pass: ''   
    }
});

const mailOptions = {
    from: 'nithishm47@gmail.com',
    to: 'santhoshgopinath10@gmail.com',
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
