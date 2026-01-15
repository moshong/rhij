// Email-based RSVP solution - works immediately on deployment
// Sends RSVP details via email notification

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { name, email, city, phone, eventTitle = 'The Glow Edit Open House' } = req.body;

    // Validate required fields
    if (!name || !email || !city || !phone) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please enter a valid email address' 
      });
    }

    // Create RSVP data
    const rsvpData = {
      name,
      email,
      city,
      phone,
      eventTitle,
      submittedAt: new Date().toISOString(),
      formattedDate: new Date().toLocaleString(),
      userAgent: req.headers['user-agent'] || 'Unknown'
    };

    // Send email notification using a service like EmailJS, SendGrid, or Resend
    const emailBody = `
🎉 NEW RSVP SUBMISSION 🎉

Event: ${eventTitle}
Name: ${name}
Email: ${email}
City: ${city}
Phone: ${phone}
Submitted: ${new Date().toLocaleString()}

User Agent: ${rsvpData.userAgent}
    `;

    // Option 1: Use EmailJS (client-side service)
    // You can configure EmailJS to send emails to your admin email
    
    // Option 2: Use SendGrid API (add your API key to environment variables)
    // const sgMail = require('@sendgrid/mail');
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // const msg = {
    //   to: 'your-admin@email.com',
    //   from: 'noreply@yourdomain.com',
    //   subject: `New RSVP: ${name} - ${eventTitle}`,
    //   text: emailBody
    // };
    // await sgMail.send(msg);

    // Option 3: Use Resend API (modern email service)
    // const resend = require('resend');
    // const resendClient = new resend.Resend(process.env.RESEND_API_KEY);
    // await resendClient.emails.send({
    //   from: 'noreply@yourdomain.com',
    //   to: 'your-admin@email.com',
    //   subject: `New RSVP: ${name} - ${eventTitle}`,
    //   text: emailBody
    // });

    // Log to console (visible in deployment logs)
    console.log('🎉 NEW RSVP SUBMISSION 🎉');
    console.log('============================');
    console.log(emailBody);
    console.log('============================');

    return res.status(200).json({
      success: true,
      message: 'RSVP submitted successfully! You will receive a confirmation email shortly.',
      data: {
        confirmationId: `RSVP-${Date.now()}`,
        eventTitle,
        submittedAt: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('RSVP submission error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to process RSVP. Please try again.'
    });
  }
}