import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { staggerContainer, fadeIn } from '../utils/motion'
import styles from '../styles';
import { TypingText, TitleText } from "../components";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';

// Add custom scrollbar styles via CSS-in-JS
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
`;

const TestimonialCard = ({ name, role, testimonial, profileImage, isActive }) => (  <motion.div
    initial={{ opacity: 0 }}
    animate={{ 
      opacity: 1,
      scale: isActive ? 1 : [0.95, 0.92],
      borderWidth: isActive ? '2px' : '1px'
    }}
    transition={{ duration: 0.5 }}
    className={`bg-white dark:bg-dark-surface rounded-lg shadow-lg p-6 md:p-8 mx-2 sm:mx-4 my-4 flex flex-col transform cursor-pointer
      h-[450px] sm:h-[400px] md:h-[380px] lg:h-[400px] overflow-hidden
      ${isActive 
        ? 'z-10 shadow-xl border-2 border-palette-1 dark:border-dark-primary' 
        : 'border border-gray-200 dark:border-gray-800'}`}
  >
    <div className="flex items-center mb-4">
      {profileImage ? (
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-palette-1 dark:border-dark-primary">
          <img 
            src={profileImage} 
            alt={`${name}'s profile`} 
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="w-16 h-16 rounded-full bg-palette-2 flex items-center justify-center text-white font-bold text-xl border-2 border-palette-1 dark:border-dark-primary">
          {name.charAt(0)}
        </div>
      )}
      <div className="ml-4">
        <h4 className="font-bold text-lg dark:text-white font-heading">{name}</h4>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{role}</p>
      </div>
    </div>
    <div className="mb-4 text-palette-1 dark:text-dark-primary">
      <FaQuoteLeft className="w-8 h-8" />
    </div>
    <div className="flex-grow overflow-y-auto my-2 pr-1 custom-scrollbar">
      <p className="text-gray-700 dark:text-white text-base md:text-lg">{testimonial}</p>
    </div>
    <div className="flex mt-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  </motion.div>
);

const testimonials = [
  {
    name: "Viktoria Angela",
    role: "Regular Client",
    testimonial: "If you need some self-love and skin care treatment, Rhij Aesthetics should be your go to! Rhij is gentle with your skin. I definitely feel relaxed after my session . 100% recommend 💯💯💯.",
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
  const [visibleItems, setVisibleItems] = useState(getVisibleItemCount());
  
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
          className="w-full max-w-[1400px] px-4 relative cursor-grab active:cursor-grabbing"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onDragStart={(e) => e.preventDefault()} /* Prevent default drag behavior */
          ref={carouselRef}
        >
          {/* Navigation buttons */}
          <button 
            className="absolute z-20 left-1 sm:left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-dark-surface text-palette-2 dark:text-dark-primary p-2 md:p-3 rounded-full shadow-lg hover:bg-palette-5 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-palette-1"
            onClick={goToPrev}
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
          </button>
          
          <button 
            className="absolute z-20 right-1 sm:right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-dark-surface text-palette-2 dark:text-dark-primary p-2 md:p-3 rounded-full shadow-lg hover:bg-palette-5 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-palette-1"
            onClick={goToNext}
            aria-label="Next testimonial"
          >
            <FaChevronRight className="w-4 h-4 md:w-6 md:h-6" />
          </button>
            {/* Carousel slides */}          <div className="overflow-hidden py-4">            <div 
              className={`flex items-stretch ${!isSwiping ? 'transition-transform duration-500 ease-out' : ''}`}
              style={{ 
                transform: `translateX(calc(-${currentIndex * 100}% + ${swipeDistance}px))`,
                touchAction: 'pan-y' /* Allow vertical scrolling but capture horizontal */
              }}
            >
              {testimonials.map((testimonial, index) => (                <div 
                  key={`testimonial-${index}`} 
                  className={`px-2 sm:px-4 min-w-full transition-all duration-500 flex-shrink-0`}
                  onClick={() => goToSlide(index)}
                >
                  <div className="h-full flex items-stretch">
                    <TestimonialCard 
                      {...testimonial} 
                      isActive={index === currentIndex}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
            {/* Dot indicators and swipe hint */}
          <div className="flex flex-col items-center mt-4 md:mt-8">
            <div className="flex justify-center">
              {testimonials.map((_, index) => (
                <button
                  key={`dot-${index}`}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 md:w-4 md:h-4 mx-1 rounded-full transition-all duration-200 focus:outline-none
                    ${index === currentIndex 
                      ? 'bg-palette-2 dark:bg-dark-primary scale-125' 
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-palette-3 dark:hover:bg-dark-secondary'}`}
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