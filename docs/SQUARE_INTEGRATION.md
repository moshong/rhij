# Square Payment Integration

This document provides detailed information about setting up and configuring the Square payment integration for the Rhij Aesthetics e-commerce functionality.

## Prerequisites

Before you can use the Square payment integration, you'll need:

1. A Square account (either a sandbox account for testing or a production account)
2. Square Developer dashboard access to create applications
3. Square location ID for your business
4. Square access token with payment processing permissions

## Setup Instructions

### 1. Create a Square Developer Account and Application

1. Go to the [Square Developer Dashboard](https://developer.squareup.com/apps)
2. Sign in with your Square account or create a new one
3. Click "Create New Application"
4. Fill in the application details (name, description, etc.)
5. Note the Application ID and Location ID for later use

### 2. Configure Environment Variables

1. Copy the `.env.local.example` file to `.env.local`
2. Fill in the following environment variables:

```
NEXT_PUBLIC_SQUARE_APP_ID=your_square_app_id
NEXT_PUBLIC_SQUARE_LOCATION_ID=your_square_location_id
SQUARE_ACCESS_TOKEN=your_square_access_token
```

- For testing, use the sandbox credentials
- For production, use the production credentials and set `NODE_ENV=production`

### 3. Install Required Dependencies

The project already includes the necessary code for Square integration, but if you're setting up a new project, you'll need to install:

```bash
npm install square
```

### 4. Square Integration Components

The Square integration consists of several key components:

- `lib/square.js`: Helper functions for loading the Square SDK, initializing the payment form, and processing payments
- `components/SquarePaymentModal.jsx`: React component for displaying the Square payment form
- `pages/api/square-payment.js`: API endpoint for processing payments on the server

### 5. Testing Payments

For testing in sandbox mode, you can use the following test credit card:
- Card Number: 4111 1111 1111 1111
- Expiration Date: Any future date
- CVV: Any 3-digit number
- ZIP Code: Any 5-digit number

### 6. Going Live

When ready to accept real payments:

1. Update your `.env.local` file with production credentials
2. Set `NODE_ENV=production`
3. Update the Square SDK URL in `lib/square.js` from sandbox to production
4. Test thoroughly with a small real transaction before full deployment

## Troubleshooting

Common issues and solutions:

- **Payment form not loading**: Ensure your Square App ID and Location ID are correct
- **Payment processing errors**: Check the Square Developer Dashboard for error logs
- **CORS issues**: Make sure your domain is allowlisted in your Square application settings

For additional help, refer to the [Square Web Payments SDK Documentation](https://developer.squareup.com/docs/web-payments/overview).
