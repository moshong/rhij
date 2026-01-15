# RSVP System Deployment Fix

## Problem
The current RSVP system uses file-based storage (`rsvp-submissions.json`) which doesn't work on deployment platforms because:
- Most hosting platforms have read-only file systems
- Serverless functions don't persist file changes
- Files reset on each deployment

## Solutions

### Option 1: Airtable Integration (RECOMMENDED)
**Easy setup, free tier available, works great for small businesses**

#### Setup Steps:
1. Create a free Airtable account at https://airtable.com
2. Create a new base called "RSVP System"
3. Create a table called "RSVP_Submissions" with these fields:
   - Name (Single line text)
   - Email (Email)
   - City (Single line text)
   - Phone (Phone number)
   - Event (Single line text)
   - Submitted At (Date and time)
   - Formatted Date (Single line text)
   - User Agent (Single line text)

4. Get your API credentials:
   - Go to https://airtable.com/account
   - Generate a personal access token
   - Copy your Base ID from the API documentation

5. Add environment variables to your deployment:
   ```
   AIRTABLE_API_KEY=your_personal_access_token
   AIRTABLE_BASE_ID=your_base_id
   ```

6. Update your RSVP form to use the new API:
   - Change `/api/rsvp` to `/api/rsvp-airtable`
   - Update admin page to use `/api/rsvp-list-airtable`

### Option 2: Email Notifications
**Quick fix that works immediately**

Use the `/api/rsvp-email` endpoint and configure email service:
- SendGrid (recommended for production)
- EmailJS (easiest for beginners)
- Resend (modern alternative)

### Option 3: Database Integration
**Best for larger applications**

Integrate with:
- MongoDB Atlas (free tier)
- Supabase (PostgreSQL, free tier)
- PlanetScale (MySQL, free tier)
- Vercel Postgres (if using Vercel)

## Quick Fix Implementation

### Step 1: Replace RSVP API endpoint
Update `components/RSVPModal.jsx` to use Airtable:

```javascript
// In RSVPModal.jsx, change the fetch URL:
const response = await fetch('/api/rsvp-airtable', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

### Step 2: Update Admin Page
Update `app/rsvp-admin/page.js` to use Airtable:

```javascript
// In page.js, change the fetch URL:
const response = await fetch('/api/rsvp-list-airtable');
```

### Step 3: Set Environment Variables
In your deployment platform (Vercel, Netlify, etc.):
- Add `AIRTABLE_API_KEY`
- Add `AIRTABLE_BASE_ID`

## Testing
1. Deploy with environment variables
2. Submit a test RSVP
3. Check your Airtable base
4. Verify admin page shows submissions

## Deployment Platforms
- **Vercel**: Add env vars in Project Settings → Environment Variables
- **Netlify**: Add env vars in Site Settings → Environment Variables
- **Heroku**: Use `heroku config:set AIRTABLE_API_KEY=xxx`

## Benefits of Airtable Solution
✅ Works on all deployment platforms
✅ Visual interface for managing submissions
✅ Export capabilities (CSV, etc.)
✅ Real-time collaboration
✅ API access for integration
✅ Free tier sufficient for most small businesses
✅ No database setup required