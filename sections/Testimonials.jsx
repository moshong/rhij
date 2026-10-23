import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { staggerContainer, fadeIn } from '../utils/motion'
import styles from '../styles';
import { TypingText, TitleText } from "../components";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';

// Add custom scrollbar and text formatting styles via CSS-in-JS
const customScrollbarStyles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 4px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #E7879B;
    border-radius: 10px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #FF9A8B;
  }
  
  .dark .custom-scrollbar::-webkit-scrollbar-track {
    background: #2a2a2a;
  }
  
  .dark .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #D384A1;
  }
  
  .dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #E498A7;
  }
  /* Text formatting for testimonials */
  .testimonial-text {
    hyphens: auto;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
    white-space: normal;
    text-align: justify;
    line-height: 1.6;
    max-width: 100%;
    margin: 0 auto;
  }
    /* Mobile text optimization */
  @media (max-width: 640px) {
    .testimonial-text {
      font-size: 0.9rem;
      letter-spacing: -0.01em;
      padding: 0;
      line-height: 1.5;
      width: 100%;
      text-align: justify;
    }
    
    /* Adjust spacing between lines */
    .testimonial-text br {
      display: block;
      content: "";
      margin-bottom: 0.25em;
    }
    
    /* Center-align container on mobile but keep text justified */
    .testimonial-text-container {
      display: flex;
      justify-content: center;
      padding: 0 0.5rem;
    }
  }

  /* Extra styles for testimonial cards to optimize space on mobile */
  @media (max-width: 480px) {
    .testimonial-card {
      padding: 0.75rem !important;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .testimonial-header {
      margin-bottom: 0.5rem !important;
      justify-content: center;
    }
    
    .testimonial-avatar {
      width: 3rem !important;
      height: 3rem !important;
    }
    
    .testimonial-name {
      font-size: 1rem !important;
      text-align: center;
    }
    
    .testimonial-role {
      font-size: 0.75rem !important;
      text-align: center;
    }
    
    .testimonial-quote {
      margin-bottom: 0.5rem !important;
      text-align: center;
      width: 100%;
      display: flex;
      justify-content: center;
    }
    
    .testimonial-quote-icon {
      width: 1.5rem !important;
      height: 1.5rem !important;
    }
    
    .testimonial-text-container {
      margin: 0.25rem 0 !important;
      padding: 0 0.75rem;
      text-align: center;
    }
    
    .star-rating {
      justify-content: center;
    }
  }
`;

// Format testimonial text for better readability and mobile-friendly display
const formatTestimonial = (text) => {
  // Clean up the text first
  const cleanText = text
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();
  
  // Process the text with added line breaks
  const processedText = cleanText
    // Add a space after punctuation if missing
    .replace(/([.!?])([A-Z])/g, '$1 $2')
    // Add a space after emoji sequences if missing
    .replace(/([\u{1F300}-\u{1F6FF}|[\u{2600}-\u{26FF}])/gu, '$1 ');
    
  // For mobile-friendly layout, we'll create natural breaks
  // at punctuation and sentence boundaries rather than fixed character counts
  return processedText
    // Add line breaks after punctuation followed by space
    .replace(/([.!?]) /g, '$1\n')
    // Add line breaks for commas in longer segments
    .replace(/(.{20,}?), /g, '$1,\n')
    // Add line breaks for natural pauses in very long sentences
    .replace(/(.{35,}?) (and|but|or|as|if|for|with) /g, '$1\n$2 ');
};

const TestimonialCard = ({ name, role, testimonial, profileImage, isActive }) => (
  <div
    className={`flex flex-col h-[400px] sm:h-[380px] lg:h-[360px] w-full rounded-sm p-7 sm:p-9 transition-all duration-700
      ${isActive
        ? 'bg-white dark:bg-dark-surface shadow-[0_20px_50px_-20px_rgba(43,34,32,0.25)]'
        : 'bg-white/60 dark:bg-dark-surface/60'}`}
  >
    <div className="flex items-center gap-4">
      {profileImage ? (
        <img
          src={profileImage}
          alt={`${name}'s profile`}
          className="w-12 h-12 rounded-full object-cover"
        />
      ) : (
        <div className="w-12 h-12 rounded-full bg-palette-3/60 flex items-center justify-center text-[#2B2220] font-cormorant font-semibold text-xl">
          {name.charAt(0)}
        </div>
      )}
      <div className="flex flex-col min-w-0">
        <h4 className="font-cormorant text-[22px] font-semibold leading-tight text-[#2B2220] dark:text-white truncate">{name}</h4>
        {role && <p className="text-[12px] uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400 truncate">{role}</p>}
      </div>
      <div className="ml-auto flex gap-[2px] text-palette-2 dark:text-dark-primary" aria-label="5 out of 5 stars">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </div>

    <span aria-hidden="true" className="font-cormorant text-[64px] leading-[0.7] mt-6 text-palette-1 dark:text-dark-primary select-none">&ldquo;</span>

    <div className="flex-grow overflow-y-auto mt-3 pr-3 custom-scrollbar">
      <p className="text-[15px] sm:text-[16px] leading-[1.8] text-gray-700 dark:text-gray-200">
        {testimonial.replace(/s+/g, ' ').trim()}
      </p>
    </div>
  </div>
);

const testimonials = [  {
    name: "Viktoria Angela",
    role: "Regular Client",
    testimonial: "If you need some self-love and skin care treatment, Rhij Aesthetics should be your go to! Rhij is gentle with your skin. I definitely feel relaxed after my session. 100% recommend 💯💯💯.",
    profileImage: "/imgs/testimonials/client1.jpg"
  },
  {
    name: "Muriel Miller",
    role: "First-time Client",
    testimonial: "Rhij is the best and only aesthetician I trust with my skin. She's very knowledgeable in her craft! Her Korean and Diamond Glow treatments are a must-try, leaving my skin dewy and healthy-looking! I felt very relaxed and rejuvenated during the entire experience.",
    profileImage: "/imgs/testimonials/client2.jpg"
  },
  {
    name: "Livia Mettler ",
    role: "Monthly Member",
    testimonial: "I felt extremely rejuvenated and refreshed getting a diamond facial!! Cannot wait to come back!!",
    profileImage: "/imgs/testimonials/client3.jpg"
  },
  {
    name: "Dianne Urot",
    role: "Special Occasion Client",
    testimonial: "I tried the Korean Facial Glow facial last weekend and it was the best thing! Rhij was very thorough with the steps, guiding me and educating on what will happen which I appreciate. She is also very gentle which makes the facial very calming and relaxing 💕",
    profileImage: "/imgs/testimonials/client4.jpg"
  },
  {
    name: "Pat Cupay ",
    role: "Loyal Client",
    testimonial: "Professional and knowledgeable about services and products! Any questions or concerns you have will be acknowledged and answered to your satisfaction. I got the Diamond Glow Facial with Jelly Mask and LED Light and was satisfied with the process and the result and could feel the difference with my skin. I would definitely come back again and 100% recommend Rhij Aesthetics LLC! 🙌🏼",
    profileImage: "/imgs/testimonials/client5.jpg"
  },
    {
    name: "Brooke Beltran",
    role: "Stylist",
    testimonial: "Highly recommend!  🙌 So I did the ultrasonic  with cryofacial with LED lights and mask  😌 It was such a relaxing and enjoyable experience, with the cold temperature providing a refreshing and calming sensation. Instant fresh after!  💓💓💓",
    profileImage: "/imgs/testimonials/client6.jpg"
  },
    {
    name: "Rine Belle",
    role: "Loyal Client",
    testimonial: "Rhij is very accommodating and a competent clinician. She has been taking care of my skin for years now. She has well defined skills and knowledge with your skin care. Her products are high class standards. Visit her place and you’ll get the best skin care outcome! As I aged, I make sure that she evaluates and provides me the service that is patient centered and appropriate for my skin. Visit her soon!",
    profileImage: "/imgs/testimonials/client7.jpg"
  },
      {
    name: "Apple Palma",
    role: "Medtech",
    testimonial: "I recently had the Salmon DNA facial treatment at Rhij Aesthetics LLC, and it was such a great experience! The owner was very accommodating, making me feel comfortable and well taken care of from the moment I arrived. The service itself was excellent — after the treatment, my face felt noticeably lighter, smoother, and refreshed. I’m already looking forward to my next session and can’t wait to try out more of their services. Highly recommended for anyone looking to pamper their skin and feel rejuvenated! 💆‍♀️✨",
    profileImage: "/imgs/testimonials/client8.jpg"
  }
];

const DESKTOP_CARD = 560;
const DESKTOP_GAP = 32;

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);
  const carouselRef = useRef(null);
  
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  const goToSlide = (index) => {
    setCurrentIndex(index);
    // Pause autoplay temporarily when user interacts
    setAutoplayEnabled(false);
    setTimeout(() => setAutoplayEnabled(true), 5000);
  };
    // Variables for improved swipe handling
  const [isSwiping, setIsSwiping] = useState(false);
  const [swipeDistance, setSwipeDistance] = useState(0);
  
  // Handle touch events for mobile swiping with visual feedback
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsSwiping(true);
    setSwipeDistance(0);
    // Pause autoplay when user starts interacting
    setAutoplayEnabled(false);
  };
  
  const handleTouchMove = (e) => {
    if (!isSwiping) return;
    
    const currentTouch = e.targetTouches[0].clientX;
    setTouchEnd(currentTouch);
    
    // Calculate and set the distance for visual feedback
    const distance = currentTouch - touchStart;
    setSwipeDistance(distance);
    
    // Prevent default to avoid page scrolling while swiping
    if (Math.abs(distance) > 10) {
      e.preventDefault();
    }
  };
  
  const handleTouchEnd = () => {
    if (!isSwiping) return;
    
    // Determine if swipe was significant enough
    const swipeThreshold = 50; // Lower threshold for better responsiveness
    const quickSwipe = Date.now() - touchStart < 250; // Detect quick swipes
    
    if (touchStart - touchEnd > swipeThreshold || (quickSwipe && touchStart - touchEnd > 20)) {
      // Swipe left - go to next
      goToNext();
    } else if (touchEnd - touchStart > swipeThreshold || (quickSwipe && touchEnd - touchStart > 20)) {
      // Swipe right - go to previous
      goToPrev();
    }
    
    // Reset swipe state
    setIsSwiping(false);
    setSwipeDistance(0);
    setTouchStart(0);
    setTouchEnd(0);
    
    // Re-enable autoplay after a delay
    setTimeout(() => setAutoplayEnabled(true), 5000);
  };
  
  // Handle mouse drag for desktop (optional enhancement)
  const handleMouseDown = (e) => {
    setTouchStart(e.clientX);
    setIsSwiping(true);
    setSwipeDistance(0);
    setAutoplayEnabled(false);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };
  
  const handleMouseMove = (e) => {
    if (!isSwiping) return;
    const currentPosition = e.clientX;
    setTouchEnd(currentPosition);
    const distance = currentPosition - touchStart;
    setSwipeDistance(distance);
  };
  
  const handleMouseUp = () => {
    if (!isSwiping) return;
    
    const swipeThreshold = 50;
    if (touchStart - touchEnd > swipeThreshold) {
      goToNext();
    } else if (touchEnd - touchStart > swipeThreshold) {
      goToPrev();
    }
    
    setIsSwiping(false);
    setSwipeDistance(0);
    setTouchStart(0);
    setTouchEnd(0);
    setTimeout(() => setAutoplayEnabled(true), 5000);
    
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };
  
  // Clean up event listeners
  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);
  
  // Autoplay functionality
  useEffect(() => {
    let interval;
    if (autoplayEnabled) {
      interval = setInterval(() => {
        goToNext();
      }, 7000); // Change slide every 7 seconds
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [currentIndex, autoplayEnabled]);
    // Calculate number of visible items based on screen size
  const getVisibleItemCount = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) {
        return 3; // Show 3 items on large screens
      } else if (window.innerWidth >= 768) {
        return 2; // Show 2 items on medium screens
      }
    }
    return 1; // Default to 1 item on small screens
  };
  
  // Track screen size for responsive behavior
  const [visibleItems, setVisibleItems] = useState(1);
  
  useEffect(() => {
    const handleResize = () => {
      setVisibleItems(getVisibleItemCount());
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener for window resize
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }
    
    // Clean up
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);
  const isDesktop = visibleItems === 3;
  // Inject custom scrollbar styles
  useEffect(() => {
    // Check if the style element already exists
    const existingStyle = document.getElementById('testimonial-scrollbar-styles');
    if (!existingStyle) {
      const styleElement = document.createElement('style');
      styleElement.id = 'testimonial-scrollbar-styles';
      styleElement.innerHTML = customScrollbarStyles;
      document.head.appendChild(styleElement);
      
      // Clean up
      return () => {
        const styleToRemove = document.getElementById('testimonial-scrollbar-styles');
        if (styleToRemove) {
          document.head.removeChild(styleToRemove);
        }
      };
    }
  }, []);

  return (
    <section className='flex flex-col items-center bg-palette-4 dark:bg-dark-bg pt-[70px] md:pt-[100px] pb-[50px] md:pb-[100px]' id='testimonials'>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`mx-auto flex flex-col items-center w-full`}
      >
        <TypingText title='| Client Stories' textStyles='text-center' />
        <TitleText title={<>What Our Clients Say</>} textStyles='text-center mb-[30px] md:mb-[50px]' />

        {/* Carousel container */}
        <div
          className="w-full max-w-[1400px] px-2 sm:px-3 md:px-4 lg:px-0 relative cursor-grab active:cursor-grabbing"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onDragStart={(e) => e.preventDefault()}
          ref={carouselRef}
        >
          {/* Navigation buttons */}
          <button 
            className="absolute z-20 left-1 sm:left-4 lg:left-[calc(50%-420px)] top-1/2 -translate-y-1/2 bg-white dark:bg-dark-surface text-[#2B2220] dark:text-dark-primary w-11 h-11 flex items-center justify-center rounded-full shadow-md hover:bg-palette-2 hover:text-white transition duration-300 focus:outline-none"
            onClick={goToPrev}
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="w-3.5 h-3.5" />
          </button>
          
          <button 
            className="absolute z-20 right-1 sm:right-4 lg:right-[calc(50%-420px)] top-1/2 -translate-y-1/2 bg-white dark:bg-dark-surface text-[#2B2220] dark:text-dark-primary w-11 h-11 flex items-center justify-center rounded-full shadow-md hover:bg-palette-2 hover:text-white transition duration-300 focus:outline-none"
            onClick={goToNext}
            aria-label="Next testimonial"
          >
            <FaChevronRight className="w-3.5 h-3.5" />
          </button>

          {/* Carousel slides */}
          <div className="overflow-hidden lg:[mask-image:linear-gradient(to_right,transparent,black_14%,black_86%,transparent)] py-4">
            <div
              className={`flex items-stretch ${!isSwiping ? 'transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]' : ''}`}
              style={{
                transform: isDesktop
                  ? `translateX(calc(50% - ${DESKTOP_CARD / 2}px - ${currentIndex * (DESKTOP_CARD + DESKTOP_GAP)}px + ${swipeDistance}px))`
                  : `translateX(calc(-${currentIndex * 100}% + ${swipeDistance}px))`,
                touchAction: 'pan-y',
              }}
            >
              {testimonials.map((testimonial, index) => {
                const distance = Math.abs(index - currentIndex);
                return (
                  <div
                    key={`testimonial-${index}`}
                    className="min-w-full lg:min-w-0 lg:flex-none px-1 sm:px-3 lg:px-0 transition-all duration-700"
                    style={isDesktop ? {
                      width: DESKTOP_CARD,
                      marginRight: DESKTOP_GAP,
                      opacity: distance === 0 ? 1 : distance === 1 ? 0.55 : 0.25,
                      transform: distance === 0 ? 'scale(1)' : 'scale(0.94)',
                    } : undefined}
                    onClick={() => goToSlide(index)}
                  >
                    <TestimonialCard {...testimonial} isActive={index === currentIndex} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dot indicators and swipe hint */}
          <div className="flex flex-col items-center mt-4 md:mt-8">
            <div className="flex justify-center">
              {testimonials.map((_, index) => (
                <button
                  key={`dot-${index}`}
                  onClick={() => goToSlide(index)}
                  className={`h-[6px] mx-1 rounded-full transition-all duration-500 focus:outline-none ${index === currentIndex ? 'w-8 bg-palette-2 dark:bg-dark-primary' : 'w-[6px] bg-[#2B2220]/20 dark:bg-gray-600 hover:bg-palette-3'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Mobile swipe indicator */}
            <div className="md:hidden mt-4 flex items-center text-palette-2 dark:text-dark-primary text-sm">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="flex items-center gap-2"
              >
                <FaChevronLeft size={12} />
                <span>Swipe to navigate</span>
                <FaChevronRight size={12} />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;