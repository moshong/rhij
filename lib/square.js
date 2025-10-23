// Square integration helper functions

// Square credentials from environment variables
const SQUARE_APP_ID = process.env.NEXT_PUBLIC_SQUARE_APP_ID || 'sandbox-sq0idb-YOUR_SQUARE_APP_ID';
const SQUARE_LOCATION_ID = process.env.NEXT_PUBLIC_SQUARE_LOCATION_ID || 'YOUR_SQUARE_LOCATION_ID';

// Load Square Web Payments SDK
export const loadSquareSdk = () => {
  return new Promise((resolve, reject) => {
    if (window.Square) {
      resolve(window.Square);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://sandbox.web.squarecdn.com/v1/square.js';
    // Use this in production: https://web.squarecdn.com/v1/square.js
    script.onload = () => resolve(window.Square);
    script.onerror = () => reject(new Error('Failed to load Square SDK'));
    document.body.appendChild(script);
  });
};

// Convert cart items to Square line items
export const cartItemsToSquareItems = (items) => {
  return items.map(item => ({
    name: item.title,
    quantity: String(item.quantity),
    basePriceMoney: {
      amount: Math.round(item.price * 100), // Convert to cents
      currency: 'USD'
    }
  }));
};

// Initialize Square payment form
export const initializeSquarePayment = async (elementId = 'square-payment-form') => {
  try {
    await loadSquareSdk();
    
    const payments = await window.Square.payments(SQUARE_APP_ID, SQUARE_LOCATION_ID);
    
    const card = await payments.card();
    await card.attach(`#${elementId}`);
    
    return {
      payments,
      card
    };
  } catch (error) {
    console.error('Failed to initialize Square payment:', error);
    throw error;
  }
};

// Process payment with Square
export const processSquarePayment = async (paymentInstance, amount, cartItems) => {
  try {
    const tokenResult = await paymentInstance.card.tokenize();
    if (tokenResult.status === 'OK') {
      // Send the payment token to our API endpoint
      const response = await fetch('/api/square-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sourceId: tokenResult.token,
          amount,
          cartItems,
          currency: 'USD'
        })
      });
      
      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.message || 'Payment processing failed');
      }
      
      return result;
    } else {
      throw new Error(tokenResult.errors[0].message);
    }
  } catch (error) {
    console.error('Payment processing failed:', error);
    throw error;
  }
};
