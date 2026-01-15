# 📊 RSVP System with Google Sheets - Complete Setup Guide

## 🎯 **Why Google Sheets?**
✅ **Free and familiar** - Everyone knows how to use Google Sheets  
✅ **No account limits** - Use your existing Google account  
✅ **Visual data management** - See submissions in real-time  
✅ **Easy sharing** - Share with team members  
✅ **Export capabilities** - Download as Excel, PDF, etc.  
✅ **Simple setup** - Just a few steps!  

## 🛠️ **Step-by-Step Setup**

### Step 1: Create Google Apps Script
1. Go to [script.google.com](https://script.google.com)
2. Click "New Project"
3. Replace the default code with the contents of `google-apps-script/rsvp-handler.js`
4. Save the project (Ctrl+S) and name it "RSVP Handler"

### Step 2: Deploy as Web App
1. In Google Apps Script, click "Deploy" → "New deployment"
2. Choose type: "Web app"
3. Description: "RSVP Submission Handler"
4. Execute as: "Me"
5. Who has access: "Anyone"
6. Click "Deploy"
7. **Copy the Web App URL** - you'll need this!

### Step 3: Create Google Sheet
1. The script will automatically create a sheet when first used, OR
2. Manually create a new Google Sheet named "RSVP Submissions - The Glow Edit"
3. Add these column headers in row 1:
   - A1: Timestamp
   - B1: Formatted Date  
   - C1: Name
   - D1: Email
   - E1: City
   - F1: Phone
   - G1: Event
   - H1: User Agent

### Step 4: Get CSV Export URL
1. In your Google Sheet, click "File" → "Share" → "Publish to web"
2. Choose "Entire Document" and "Comma-separated values (.csv)"
3. Click "Publish"
4. **Copy the CSV URL** - you'll need this too!

### Step 5: Add Environment Variables
Add these to your deployment platform (Vercel, Netlify, etc.):

```
GOOGLE_SHEETS_URL=your_web_app_url_here
GOOGLE_SHEETS_CSV_URL=your_csv_export_url_here
```

**For Vercel:**
- Project Settings → Environment Variables → Add both URLs

**For Netlify:**
- Site Settings → Environment Variables → Add both URLs

### Step 6: Deploy & Test
1. Deploy your updated code
2. Visit `/rsvp-test` to test the connection
3. Submit a test RSVP
4. Check your Google Sheet - data should appear!
5. Visit `/rsvp-admin` - submissions should show up!

## 📝 **Environment Variables Examples**

```bash
# Web App URL (from Google Apps Script deployment)
GOOGLE_SHEETS_URL=https://script.google.com/macros/s/AKfycby.../exec

# CSV Export URL (from Google Sheets publish to web)
GOOGLE_SHEETS_CSV_URL=https://docs.google.com/spreadsheets/d/1ABC.../export?format=csv
```

## 🔧 **How It Works**

### Submission Flow:
1. User fills RSVP form on your website
2. Form data sent to `/api/rsvp-sheets`
3. API sends data to Google Apps Script
4. Script adds row to Google Sheet
5. Success confirmation sent back to user

### Admin Panel Flow:
1. Admin visits `/rsvp-admin`
2. Page calls `/api/rsvp-list-sheets`
3. API fetches CSV data from Google Sheets
4. Data parsed and displayed in table

## 🎉 **Benefits**

✅ **Real-time updates** - See new RSVPs instantly  
✅ **No database needed** - Google Sheets IS your database  
✅ **Familiar interface** - Everyone knows how to use sheets  
✅ **Easy backup** - Download/export anytime  
✅ **Collaboration** - Share with team members  
✅ **Mobile friendly** - Google Sheets mobile app  
✅ **Free forever** - No subscription needed  

## 🚨 **Troubleshooting**

### If submissions don't appear:
1. Check Google Apps Script logs for errors
2. Verify Web App permissions are set to "Anyone"
3. Test the Web App URL directly in browser
4. Check environment variables are set correctly

### If admin panel is empty:
1. Verify CSV export URL is public
2. Check sheet has correct column headers
3. Test CSV URL directly in browser (should download file)

### Common Issues:
- **"Access denied"** → Check Web App permissions
- **"Sheet not found"** → Ensure sheet exists and is accessible
- **"Parse error"** → Check CSV format and column order

## 💡 **Pro Tips**

1. **Format your sheet**: Use colors, borders for better readability
2. **Create filters**: Add filter views for different event dates
3. **Use formulas**: Count RSVPs, calculate attendance, etc.
4. **Set notifications**: Google Sheets can email you on changes
5. **Mobile access**: Use Google Sheets app to check RSVPs on-the-go

## 🔄 **Backup Plan**
If Google Sheets fails, the system automatically falls back to email notifications via the contact form, so you never lose a submission!

Your RSVP system with Google Sheets is now ready! 📊✨