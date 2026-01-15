// Google Apps Script for RSVP Submissions
// Copy this code to Google Apps Script (script.google.com)

function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet (or create one)
    let sheet;
    try {
      // Try to get existing sheet
      sheet = SpreadsheetApp.getActiveSheet();
    } catch (error) {
      // Create new spreadsheet if none exists
      const spreadsheet = SpreadsheetApp.create('RSVP Submissions - The Glow Edit');
      sheet = spreadsheet.getActiveSheet();
      
      // Add headers
      sheet.getRange(1, 1, 1, 8).setValues([
        ['Timestamp', 'Formatted Date', 'Name', 'Email', 'City', 'Phone', 'Event', 'User Agent']
      ]);
      
      // Format headers
      sheet.getRange(1, 1, 1, 8).setFontWeight('bold');
      sheet.getRange(1, 1, 1, 8).setBackground('#4285f4');
      sheet.getRange(1, 1, 1, 8).setFontColor('white');
    }
    
    // If this is the first run and sheet is empty, add headers
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 8).setValues([
        ['Timestamp', 'Formatted Date', 'Name', 'Email', 'City', 'Phone', 'Event', 'User Agent']
      ]);
      
      // Format headers
      sheet.getRange(1, 1, 1, 8).setFontWeight('bold');
      sheet.getRange(1, 1, 1, 8).setBackground('#4285f4');
      sheet.getRange(1, 1, 1, 8).setFontColor('white');
    }
    
    // Add the new row of data
    const newRow = sheet.getLastRow() + 1;
    sheet.getRange(newRow, 1, 1, 8).setValues([data.data]);
    
    // Auto-resize columns for better readability
    sheet.autoResizeColumns(1, 8);
    
    // Return success response
    return ContentService
      .createTextOutput('RSVP saved successfully')
      .setMimeType(ContentService.MimeType.TEXT);
      
  } catch (error) {
    console.error('Error processing RSVP:', error);
    return ContentService
      .createTextOutput('Error: ' + error.toString())
      .setMimeType(ContentService.MimeType.TEXT);
  }
}

// Test function to verify everything works
function testFunction() {
  const testData = {
    data: [
      new Date().toISOString(),
      new Date().toLocaleString(),
      'Test User',
      'test@example.com',
      'Test City',
      '555-0123',
      'The Glow Edit Open House',
      'Test User Agent'
    ]
  };
  
  const testEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(testEvent);
  console.log('Test result:', result.getContent());
}