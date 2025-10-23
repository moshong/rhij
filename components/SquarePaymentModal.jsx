'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { initializeSquarePayment, processSquarePayment } from '../lib/square';

const SquarePaymentModal = ({ isOpen, onClose, cartItems, totalPrice }) => {
  const [loading, setLoading] = useState(true);
  const [paymentInProgress, setPaymentInProgress] = useState(false);
  const [error, setError] = useState(null);
  const [paymentInstance, setPaymentInstance] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    if (isOpen) {
      const initPayment = async () => {
        try {
          setLoading(true);
          setError(null);
          const instance = await initializeSquarePayment('square-payment-form');
          setPaymentInstance(instance);
        } catch (err) {
          setError('Could not load payment system. Please try again later.');
          console.error('Square initialization error:', err);
        } finally {
          setLoading(false);
        }
      };

      initPayment();
    } else {
      // Reset state when modal is closed
      setPaymentSuccess(false);
      setOrderId(null);
    }
  }, [isOpen]);

  const handlePayment = async () => {
    try {
      setPaymentInProgress(true);
      setError(null);

      if (!paymentInstance) {
        throw new Error('Payment system not initialized');
      }

      const response = await processSquarePayment(paymentInstance, totalPrice, cartItems);
      
      if (response.success) {
        setPaymentSuccess(true);
        setOrderId(response.orderId);
      } else {
        throw new Error(response.message || 'Payment failed');
      }
    } catch (err) {
      setError(err.message || 'Payment processing failed. Please try again.');
    } finally {
      setPaymentInProgress(false);
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="bg-white dark:bg-dark-surface rounded-2xl max-w-lg w-full overflow-hidden"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">
            {paymentSuccess ? 'Payment Successful!' : 'Secure Checkout'}
          </h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <FaTimes />
          </button>
        </div>

        <div className="p-6">
          {paymentSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Payment Complete!</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Your order #{orderId} has been placed successfully.
              </p>
              <button
                onClick={onClose}
                className="w-full bg-palette-2 hover:bg-palette-1 dark:bg-dark-primary dark:hover:bg-dark-secondary text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <div className="flex justify-between text-base font-medium text-gray-800 dark:text-white mb-2">
                  <p>Order Total</p>
                  <p>${totalPrice.toFixed(2)}</p>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Please enter your payment details to complete your purchase.
                </p>
              </div>

              {error && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900/30 rounded-lg p-4 mb-6 text-red-600 dark:text-red-400 text-sm">
                  {error}
                </div>
              )}

              {loading ? (
                <div className="flex items-center justify-center py-8">
                  <div className="w-8 h-8 border-4 border-gray-200 dark:border-gray-700 border-t-palette-2 dark:border-t-dark-primary rounded-full animate-spin"></div>
                  <span className="ml-2 text-gray-600 dark:text-gray-300">Loading payment system...</span>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Card Information
                    </label>
                    <div id="square-payment-form" className="border border-gray-300 dark:border-gray-600 rounded-md p-3 h-12"></div>
                  </div>

                  <button
                    onClick={handlePayment}
                    disabled={loading || paymentInProgress}
                    className="w-full bg-palette-2 hover:bg-palette-1 dark:bg-dark-primary dark:hover:bg-dark-secondary text-white px-6 py-3 rounded-lg font-medium transition-colors disabled:bg-gray-400 dark:disabled:bg-gray-700 disabled:cursor-not-allowed"
                  >
                    {paymentInProgress ? (
                      <span className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Processing...
                      </span>
                    ) : (
                      `Pay $${totalPrice.toFixed(2)}`
                    )}
                  </button>

                  <div className="mt-4 flex items-center justify-center space-x-2">
                    <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="text-gray-500">
                      <path d="M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2 2 8.268 2 16s6.268 14 14 14z" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <path d="M11 14l3 3 7-7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
                    </svg>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Secure payment processing by Square</p>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SquarePaymentModal;
