// Google Sheets RSVP List API - Fetch submissions from Google Sheets

export default async function handler(req, res) {
  try {
    // Google Sheets CSV export URL (you'll get this from your spreadsheet)
    const GOOGLE_SHEETS_CSV_URL = process.env.GOOGLE_SHEETS_CSV_URL;
    
    if (!GOOGLE_SHEETS_CSV_URL) {
      return res.status(200).json({ 
        success: false,
        message: 'Google Sheets CSV URL not configured. Please check your environment variables.',
        count: 0,
        submissions: [] 
      });
    }

    // Fetch CSV data from Google Sheets
    const response = await fetch(GOOGLE_SHEETS_CSV_URL);
    
    if (!response.ok) {
      throw new Error(`Google Sheets fetch error: ${response.status}`);
    }

    const csvText = await response.text();
    
    // Parse CSV data
    const lines = csvText.split('\n').filter(line => line.trim());
    
    if (lines.length <= 1) {
      return res.status(200).json({
        success: true,
        count: 0,
        submissions: []
      });
    }

    // Skip header row and process data
    const submissions = lines.slice(1).map(line => {
      // Simple CSV parser (handles basic cases)
      const columns = line.split(',').map(col => col.replace(/"/g, '').trim());
      
      return {
        submittedAt: columns[0] || '',
        formattedDate: columns[1] || '',
        name: columns[2] || '',
        email: columns[3] || '',
        city: columns[4] || '',
        phone: columns[5] || '',
        eventTitle: columns[6] || '',
        userAgent: columns[7] || ''
      };
    }).filter(submission => submission.name && submission.email); // Filter out empty rows
    
    // Sort by most recent first
    submissions.sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt));
    
    return res.status(200).json({
      success: true,
      count: submissions.length,
      submissions: submissions
    });
    
  } catch (error) {
    console.error('Error fetching RSVP submissions from Google Sheets:', error);
    return res.status(500).json({
      success: false,
      message: 'Error fetching RSVP submissions from Google Sheets'
    });
  }
}