import nodemailer from 'nodemailer';

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

// Validate environment variables are set
if (!email || !pass) {
    console.warn('WARNING: Email credentials are not properly configured. Contact form will not work.');
}

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: email,
        pass, 
    },
});

export const mailOptions = {
    from: email,
    to: email,
}
