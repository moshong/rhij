import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  try {
    const rsvpFilePath = path.join(process.cwd(), 'rsvp-submissions.json');
    
    if (!fs.existsSync(rsvpFilePath)) {
      return res.status(200).json({ 
        success: true, 
        message: 'No RSVP submissions yet',
        count: 0,
        submissions: [] 
      });
    }
    
    const fileContent = fs.readFileSync(rsvpFilePath, 'utf8');
    const submissions = JSON.parse(fileContent);
    
    // Sort by most recent first
    submissions.sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt));
    
    return res.status(200).json({
      success: true,
      count: submissions.length,
      submissions: submissions
    });
    
  } catch (error) {
    console.error('Error reading RSVP submissions:', error);
    return res.status(500).json({
      success: false,
      message: 'Error reading RSVP submissions'
    });
  }
}