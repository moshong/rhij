'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaUser, FaEnvelope, FaMapMarkerAlt, FaPhone, FaCalendarAlt } from 'react-icons/fa';

const RSVPModal = ({ isOpen, onClose, eventTitle = "The Glow Edit Open House" }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Try the RSVP API first
      let response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          eventTitle
        }),
      });

      let result;
      
      if (response.ok) {
        result = await response.json();
        
        if (!result.success) {
          throw new Error(result.message || 'Failed to submit RSVP');
        }
      } else {
        // If RSVP API fails, use the contact form API as backup
        console.log('RSVP API failed, using contact form as backup');
        
        const rsvpMessage = `
🎉 RSVP SUBMISSION FOR ${eventTitle.toUpperCase()} 🎉

Name: ${formData.name}
Email: ${formData.email}
City: ${formData.city}
Phone: ${formData.phone}
Event: ${eventTitle}
Date: November 8, 2025 | 1–5 PM
Location: Rhij Aesthetics, Cedar Rapids, IA

Submitted: ${new Date().toLocaleString()}

This is an RSVP submission for The Glow Edit event. Please contact the guest to confirm their attendance.
        `;

        response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            suburb: formData.city,
            phone: formData.phone,
            message: rsvpMessage
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to submit RSVP. Please try again.');
        }

        result = { success: true, message: 'RSVP submitted successfully via contact form!' };
      }

      setSubmitSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setFormData({ name: '', email: '', city: '', phone: '' });
        setSubmitSuccess(false);
        onClose();
      }, 3000);
      
    } catch (error) {
      console.error('RSVP submission error:', error);
      setSubmitError(error.message || 'Failed to submit RSVP. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.email && formData.city && formData.phone;

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className="bg-white dark:bg-dark-surface rounded-2xl max-w-md w-full overflow-hidden shadow-2xl"
          initial={{ y: 50, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 50, opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-palette-2 to-palette-1 dark:from-dark-primary dark:to-dark-secondary">
            <div>
              <h2 className="text-xl font-bold text-white">
                RSVP for {eventTitle}
              </h2>
              <p className="text-white/90 text-sm mt-1">
                <FaCalendarAlt className="inline mr-1" />
                November 8, 2025 | 1–5 PM
              </p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/20 transition-colors text-white"
            >
              <FaTimes />
            </button>
          </div>

          <div className="p-6">
            {submitSuccess ? (
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  RSVP Confirmed! ✨
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Thank you for RSVPing to The Glow Edit! Your information has been sent to moshong14@gmail.com and you will receive confirmation details soon.
                </p>
                <p className="text-sm text-palette-2 dark:text-dark-primary font-medium">
                  Event: November 8, 2025 | 1–5 PM at Rhij Aesthetics
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <FaUser className="inline mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-palette-2 dark:focus:ring-dark-primary focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <FaEnvelope className="inline mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-palette-2 dark:focus:ring-dark-primary focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <FaMapMarkerAlt className="inline mr-2" />
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-palette-2 dark:focus:ring-dark-primary focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors"
                    placeholder="Enter your city"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <FaPhone className="inline mr-2" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-palette-2 dark:focus:ring-dark-primary focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>

                {submitError && (
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900/30 rounded-lg p-3 text-red-600 dark:text-red-400 text-sm">
                    {submitError}
                  </div>
                )}

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    className="w-full bg-gradient-to-r from-palette-2 to-palette-1 dark:from-dark-primary dark:to-dark-secondary text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 disabled:bg-gray-400 dark:disabled:bg-gray-700 disabled:cursor-not-allowed hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Submitting RSVP...
                      </span>
                    ) : (
                      'Confirm RSVP ✨'
                    )}
                  </button>
                </div>

                <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
                  * All fields are required. We respect your privacy and won't share your information.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default RSVPModal;