import { Client, Environment } from 'square';

// Initialize the Square client
const square = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: process.env.NODE_ENV === 'sandbox' 
    ? Environment.Production 
    : Environment.Sandbox
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { sourceId, amount, cartItems, currency = 'USD' } = req.body;

    if (!sourceId || !amount || !cartItems) {
      return res.status(400).json({ 
        success: false, 
        message: 'Missing required parameters' 
      });
    }

    // Create unique idempotency key for this payment
    const idempotencyKey = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;

    // Format line items for the Square API
    const lineItems = cartItems.map(item => ({
      name: item.title,
      quantity: String(item.quantity),
      basePriceMoney: {
        amount: Math.round(item.price * 100), // Convert to cents
        currency
      }
    }));

    // Create an order first
    const { result: orderResult } = await square.ordersApi.createOrder({
      order: {
        locationId: process.env.SQUARE_LOCATION_ID,
        lineItems,
        state: 'OPEN'
      },
      idempotencyKey
    });

    // Process the payment using the order and source ID
    const { result } = await square.paymentsApi.createPayment({
      sourceId,
      idempotencyKey,
      amountMoney: {
        amount: Math.round(amount * 100), // Convert to cents
        currency
      },
      orderId: orderResult.order.id,
      locationId: process.env.SQUARE_LOCATION_ID,
    });

    // Return success response with payment details
    return res.status(200).json({
      success: true,
      paymentId: result.payment.id,
      orderId: orderResult.order.id,
      status: result.payment.status
    });
    
  } catch (error) {
    console.error('Square payment error:', error);
    
    // Return appropriate error message
    return res.status(500).json({
      success: false,
      message: error.message || 'An error occurred while processing your payment',
      code: error.code || 'UNKNOWN_ERROR'
    });
  }
}
