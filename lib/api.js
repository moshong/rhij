/**
 * Send contact form data to the backend API
 * @param {Object} data - Form data containing name, email, suburb, phone, and message
 * @returns {Promise} - JSON response from the API
 */
export const sendContactForm = async (data) => {
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    const responseData = await res.json();

    if (!res.ok) {
      // Handle specific status codes with custom messages
      if (res.status === 429) {
        throw new Error('Too many requests, please try again later');
      } else if (res.status === 400 && responseData.message) {
        throw new Error(responseData.message);
      } else {
        throw new Error('Failed to send message');
      }
    }

    return responseData;
  } catch (error) {
    console.error('Contact form submission error:', error.message);
    throw error;
  }
};
