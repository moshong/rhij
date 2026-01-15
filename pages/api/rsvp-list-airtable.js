// Airtable-based RSVP list API
export default async function handler(req, res) {
  try {
    // Check for environment variables
    if (!process.env.AIRTABLE_API_KEY || !process.env.AIRTABLE_BASE_ID) {
      return res.status(200).json({ 
        success: false,
        message: 'Airtable credentials not configured. Please check your environment variables.',
        count: 0,
        submissions: [] 
      });
    }

    const airtableUrl = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/RSVP_Submissions?sort[0][field]=Submitted At&sort[0][direction]=desc`;
    
    const airtableResponse = await fetch(airtableUrl, {
      headers: {
        'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`,
      }
    });

    if (!airtableResponse.ok) {
      throw new Error('Failed to fetch from Airtable');
    }

    const airtableData = await airtableResponse.json();
    
    // Transform Airtable records to match expected format
    const submissions = airtableData.records.map(record => ({
      name: record.fields.Name || '',
      email: record.fields.Email || '',
      city: record.fields.City || '',
      phone: record.fields.Phone || '',
      eventTitle: record.fields.Event || '',
      submittedAt: record.fields['Submitted At'] || '',
      formattedDate: record.fields['Formatted Date'] || '',
      userAgent: record.fields['User Agent'] || '',
      airtableId: record.id
    }));
    
    return res.status(200).json({
      success: true,
      count: submissions.length,
      submissions: submissions
    });
    
  } catch (error) {
    console.error('Error fetching RSVP submissions from Airtable:', error);
    return res.status(500).json({
      success: false,
      message: 'Error fetching RSVP submissions'
    });
  }
}