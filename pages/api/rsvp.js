import fs from 'fs';
import path from 'path';

// Simple RSVP API endpoint that saves data to a file
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

    // Create RSVP data object
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

    // Log to console (you can see this in your terminal)
    console.log('🎉 NEW RSVP SUBMISSION 🎉');
    console.log('============================');
    console.log('Event:', eventTitle);
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('City:', city);
    console.log('Phone:', phone);
    console.log('Submitted:', new Date().toLocaleString());
    console.log('============================');

    // Save to a file for easy access
    try {
      const rsvpFilePath = path.join(process.cwd(), 'rsvp-submissions.json');
      let existingData = [];
      
      // Read existing RSVP data if file exists
      if (fs.existsSync(rsvpFilePath)) {
        const fileContent = fs.readFileSync(rsvpFilePath, 'utf8');
        existingData = JSON.parse(fileContent);
      }
      
      // Add new submission
      existingData.push(rsvpData);
      
      // Write back to file
      fs.writeFileSync(rsvpFilePath, JSON.stringify(existingData, null, 2));
      
      console.log(`✅ RSVP saved to file: ${rsvpFilePath}`);
    } catch (fileError) {
      console.error('Error saving RSVP to file:', fileError);
    }

    // Return success response
    return res.status(200).json({
      success: true,
      message: 'RSVP submitted successfully! Your information has been saved.',
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
      message: 'Failed to process RSVP. Please try again or contact us directly.'
    });
  }
}