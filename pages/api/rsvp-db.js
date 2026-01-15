// Database-based RSVP API endpoint
// This version works with deployment platforms

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

    // Log submission
    console.log('🎉 NEW RSVP SUBMISSION 🎉');
    console.log('Event:', eventTitle);
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('City:', city);
    console.log('Phone:', phone);

    // TODO: Replace this with your database integration
    // Examples:
    
    // For Airtable:
    // const airtableResponse = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`, {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ fields: rsvpData })
    // });

    // For Google Sheets:
    // const sheetsResponse = await fetch(`${GOOGLE_SHEETS_API_URL}`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(rsvpData)
    // });

    // For MongoDB:
    // const { MongoClient } = require('mongodb');
    // const client = new MongoClient(process.env.MONGODB_URI);
    // await client.connect();
    // const db = client.db('rsvp_database');
    // const collection = db.collection('submissions');
    // await collection.insertOne(rsvpData);
    // await client.close();

    // For now, send email notification as backup
    // You can integrate with email services like SendGrid, Nodemailer, etc.
    
    return res.status(200).json({
      success: true,
      message: 'RSVP submitted successfully!',
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