// Airtable-based RSVP system - Perfect for deployment!
// 1. Create a free Airtable account
// 2. Create a base with table "RSVP_Submissions" 
// 3. Add these environment variables to your deployment:
//    - AIRTABLE_API_KEY=your_api_key
//    - AIRTABLE_BASE_ID=your_base_id

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

    // Check for environment variables
    if (!process.env.AIRTABLE_API_KEY || !process.env.AIRTABLE_BASE_ID) {
      console.log('⚠️ Airtable credentials not configured. Submission logged to console only.');
      console.log('🎉 RSVP SUBMISSION:', { name, email, city, phone, eventTitle });
      
      return res.status(200).json({
        success: true,
        message: 'RSVP submitted successfully!',
        data: { confirmationId: `RSVP-${Date.now()}` }
      });
    }

    // Save to Airtable
    const airtableUrl = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/RSVP_Submissions`;
    
    const airtableData = {
      fields: {
        Name: name,
        Email: email,
        City: city,
        Phone: phone,
        Event: eventTitle,
        'Submitted At': new Date().toISOString(),
        'Formatted Date': new Date().toLocaleString(),
        'User Agent': req.headers['user-agent'] || 'Unknown'
      }
    };

    const airtableResponse = await fetch(airtableUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(airtableData)
    });

    if (!airtableResponse.ok) {
      throw new Error('Failed to save to Airtable');
    }

    const airtableResult = await airtableResponse.json();
    
    console.log('✅ RSVP saved to Airtable:', airtableResult.id);
    console.log('🎉 NEW RSVP:', { name, email, city, phone, eventTitle });

    return res.status(200).json({
      success: true,
      message: 'RSVP submitted successfully!',
      data: {
        confirmationId: `RSVP-${Date.now()}`,
        airtableId: airtableResult.id,
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