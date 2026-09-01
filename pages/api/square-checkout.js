import crypto from 'crypto';
import { merchandiseItems } from '../../constants';

// Square Payment Links API endpoint (sandbox vs production selected via env var)
const SQUARE_API_BASE =
  process.env.SQUARE_ENVIRONMENT === 'production'
    ? 'https://connect.squareup.com'
    : 'https://connect.squareupsandbox.com';

const MAX_QUANTITY_PER_ITEM = 20;
const MAX_LINE_ITEMS = 25;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const accessToken = process.env.SQUARE_ACCESS_TOKEN;
  const locationId = process.env.SQUARE_LOCATION_ID;

  if (!accessToken || !locationId) {
    console.error('Square checkout misconfigured: missing SQUARE_ACCESS_TOKEN or SQUARE_LOCATION_ID');
    return res.status(500).json({ success: false, message: 'Checkout is not configured yet. Please try again later.' });
  }

  try {
    const { cartItems } = req.body || {};

    if (!Array.isArray(cartItems) || cartItems.length === 0) {
      return res.status(400).json({ success: false, message: 'Your cart is empty.' });
    }

    if (cartItems.length > MAX_LINE_ITEMS) {
      return res.status(400).json({ success: false, message: 'Too many different items in cart.' });
    }

    // IMPORTANT: never trust price/title from the client. Look up each item
    // server-side from the canonical product catalog so a tampered request
    // can't change what gets charged.
    const lineItems = [];

    for (const cartItem of cartItems) {
      const { id, quantity } = cartItem || {};

      if (typeof id !== 'string' || !id) {
        return res.status(400).json({ success: false, message: 'Invalid item in cart.' });
      }

      const qty = Number(quantity);
      if (!Number.isInteger(qty) || qty < 1 || qty > MAX_QUANTITY_PER_ITEM) {
        return res.status(400).json({ success: false, message: 'Invalid quantity in cart.' });
      }

      const product = merchandiseItems.find((item) => item.id === id);
      if (!product) {
        return res.status(400).json({ success: false, message: 'One or more items are no longer available.' });
      }

      lineItems.push({
        name: product.title,
        quantity: String(qty),
        base_price_money: {
          amount: Math.round(product.price * 100),
          currency: 'USD',
        },
      });
    }

    const response = await fetch(`${SQUARE_API_BASE}/v2/online-checkout/payment-links`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
        'Square-Version': '2024-06-04',
      },
      body: JSON.stringify({
        idempotency_key: crypto.randomUUID(),
        order: {
          location_id: locationId,
          line_items: lineItems,
        },
        checkout_options: {
          redirect_url: process.env.SQUARE_REDIRECT_URL || undefined,
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Square API error:', data.errors || data);
      return res.status(502).json({ success: false, message: 'Unable to start checkout. Please try again.' });
    }

    return res.status(200).json({ success: true, checkoutUrl: data.payment_link.url });
  } catch (error) {
    console.error('Square checkout error:', error);
    return res.status(500).json({ success: false, message: 'Something went wrong. Please try again.' });
  }
}
