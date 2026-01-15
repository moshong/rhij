// Google Sheets RSVP API - Simple and effective!
// This saves RSVP submissions directly to Google Sheets

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

    // Prepare data for Google Sheets
    const timestamp = new Date().toISOString();
    const formattedDate = new Date().toLocaleString();
    
    const rowData = [
      timestamp,
      formattedDate,
      name,
      email,
      city,
      phone,
      eventTitle,
      req.headers['user-agent'] || 'Unknown'
    ];

    // Google Sheets Web App URL (you'll get this from Google Apps Script)
    const GOOGLE_SHEETS_URL = process.env.GOOGLE_SHEETS_URL;
    
    if (!GOOGLE_SHEETS_URL) {
      console.log('⚠️ Google Sheets URL not configured. Submission logged to console only.');
      console.log('🎉 RSVP SUBMISSION:', { name, email, city, phone, eventTitle, timestamp });
      
      return res.status(200).json({
        success: true,
        message: 'RSVP submitted successfully! (Logged to console - Google Sheets URL needed)',
        data: { confirmationId: `RSVP-${Date.now()}` }
      });
    }

    // Send data to Google Sheets
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: rowData
      })
    });

    if (!response.ok) {
      throw new Error(`Google Sheets API error: ${response.status}`);
    }

    const result = await response.text();
    
    console.log('✅ RSVP saved to Google Sheets');
    console.log('🎉 NEW RSVP:', { name, email, city, phone, eventTitle, timestamp });

    return res.status(200).json({
      success: true,
      message: 'RSVP submitted successfully! Your information has been saved to our records.',
      data: {
        confirmationId: `RSVP-${Date.now()}`,
        eventTitle,
        submittedAt: timestamp,
        sheetsResult: result
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