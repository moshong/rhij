import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText, MerchandiseCard } from '../components';
import { merchandiseItems, merchandiseCategories } from '../constants';
import { FaArrowLeft, FaArrowRight, FaTimes, FaShoppingCart } from 'react-icons/fa';

const Merchandise = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const scrollContainerRef = useRef(null);

  // Filter merchandise items by category
  const filteredItems = activeCategory === 'all' 
    ? merchandiseItems 
    : merchandiseItems.filter(item => item.category === activeCategory);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const closeItemDetails = () => {
    setSelectedItem(null);
  };

  const addToCart = (item, quantity = 1) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      setCartItems(
        cartItems.map(cartItem => 
          cartItem.id === item.id 
            ? { ...cartItem, quantity: cartItem.quantity + quantity } 
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity }]);
    }

    // Show a little animation or notification
    // Close the detail view if open
    setSelectedItem(null);
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 300; // Adjust this value for scroll distance
      
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <section className='relative z-10 bg-palette-5 dark:bg-dark-bg py-16 md:py-20' id='merchandise'>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8`}
      >
        <div className="flex justify-between items-center mb-8">
          <div>
            <TypingText title="| Shop Our Collection" textStyles="text-center md:text-left" />
            <TitleText 
              title={<>Merchandise & Apparel</>} 
              textStyles="text-center md:text-left mb-2"
            />
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl text-justify sm:text-left leading-relaxed">
   🧢 <span className="font-medium">Show Your Support in Style</span> 🧢 Wearing this Rhij Aesthetics cap means more than just fashion — it's a statement of support, a nod to self-care, and a symbol of representation. 💕 Whether you're a glow-getter, a believer in our mission, or simply love the brand — this one's for you. ✨ <span className="font-medium">Only $25 | Limited quantity</span> DM to order or grab one at your next visit!
            </p>
          </div>
          
          <button 
            className="relative hidden md:flex items-center gap-2 bg-palette-2 dark:bg-dark-primary hover:bg-palette-1 dark:hover:bg-dark-secondary text-white px-4 py-2 rounded-lg transition-colors"
            onClick={() => setShowCart(true)}
          >
            <FaShoppingCart />
            <span>Cart</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-palette-2 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">
                {totalItems}
              </span>
            )}
          </button>
        </div>

        {/* Category filters */}
        <div className="flex overflow-x-auto pb-4 hide-scrollbar mb-8">
          <div className="flex gap-2">
            {merchandiseCategories.map((category) => (
              <button
                key={category.value}
                className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
                  activeCategory === category.value
                    ? 'bg-palette-2 dark:bg-dark-primary text-white'
                    : 'bg-white dark:bg-dark-surface text-gray-700 dark:text-gray-200 hover:bg-palette-4 dark:hover:bg-gray-700'
                }`}
                onClick={() => setActiveCategory(category.value)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Merchandise cards with horizontal scroll for mobile */}
        <div className="relative">
          {/* Scroll arrows for desktop */}
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-dark-surface dark:text-white p-3 rounded-full shadow-lg opacity-80 hover:opacity-100 transition-opacity hidden md:block"
            onClick={() => scroll('left')}
          >
            <FaArrowLeft />
          </button>
          
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-dark-surface dark:text-white p-3 rounded-full shadow-lg opacity-80 hover:opacity-100 transition-opacity hidden md:block"
            onClick={() => scroll('right')}
          >
            <FaArrowRight />
          </button>
          
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar"
          >
            {filteredItems.map((item, index) => (
              <div key={`merch-${index}`} className="snap-center">
                <MerchandiseCard
                  item={item}
                  index={index}
                  handleClick={handleItemClick}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile shopping cart button */}
        <div className="fixed bottom-6 right-6 md:hidden z-20">
          <button 
            className="relative flex items-center justify-center bg-palette-2 dark:bg-dark-primary hover:bg-palette-1 dark:hover:bg-dark-secondary text-white p-4 rounded-full shadow-lg"
            onClick={() => setShowCart(true)}
          >
            <FaShoppingCart size={24} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-palette-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                {totalItems}
              </span>
            )}
          </button>
        </div>

        {/* Item details modal */}
        {selectedItem && (
          <motion.div 
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-white dark:bg-dark-surface rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="flex justify-end p-4">
                <button 
                  onClick={closeItemDetails}
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <FaTimes />
                </button>
              </div>
              
              <div className="flex flex-col md:flex-row p-6 gap-8">
                <div className="md:w-1/2">
                  <div className="rounded-xl overflow-hidden">
                    <img 
                      src={selectedItem.imgUrl} 
                      alt={selectedItem.title} 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                
                <div className="md:w-1/2">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white font-heading">{selectedItem.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">{selectedItem.subtitle}</p>
                  
                  <div className="mt-6">
                    <p className="text-3xl font-bold text-palette-2 dark:text-dark-primary">${selectedItem.price.toFixed(2)}</p>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="font-medium text-gray-800 dark:text-white mb-2">Description</h3>
                    <p className="text-gray-600 dark:text-gray-300">{selectedItem.description}</p>
                  </div>
                  
                  {selectedItem.colors && (
                    <div className="mt-6">
                      <h3 className="font-medium text-gray-800 dark:text-white mb-2">Available Colors</h3>
                      <div className="flex gap-2">
                        {selectedItem.colors.map((color, i) => (
                          <div 
                            key={i} 
                            className="w-8 h-8 rounded-full border border-gray-300 cursor-pointer"
                            style={{ backgroundColor: color }}
                            title={`Color option ${i+1}`}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-8">
                    <button 
                      className="w-full bg-palette-2 hover:bg-palette-1 dark:bg-dark-primary dark:hover:bg-dark-secondary text-white px-6 py-3 rounded-lg font-medium transition-colors"
                      onClick={() => addToCart(selectedItem)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Shopping cart slide-in */}
        {showCart && (
          <motion.div 
            className="fixed inset-0 z-50 bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="absolute right-0 top-0 h-full w-full max-w-md bg-white dark:bg-dark-surface shadow-lg overflow-hidden flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-bold text-gray-800 dark:text-white">Your Cart</h2>
                <button 
                  onClick={() => setShowCart(false)}
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <FaTimes />
                </button>
              </div>
              
              <div className="flex-grow overflow-y-auto p-4">
                {cartItems.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <FaShoppingCart className="text-gray-400 text-5xl mb-4" />
                    <p className="text-gray-600 dark:text-gray-300">Your cart is empty</p>
                    <button 
                      className="mt-4 px-4 py-2 bg-palette-3 dark:bg-dark-primary hover:bg-palette-1 dark:hover:bg-dark-secondary text-white rounded-lg transition-colors"
                      onClick={() => setShowCart(false)}
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  <div className="divide-y divide-gray-200 dark:divide-gray-700">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex py-4">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 dark:border-gray-700">
                          <img 
                            src={item.imgUrl}
                            alt={item.title}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        
                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-800 dark:text-white">
                              <h3>{item.title}</h3>
                              <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{item.category}</p>
                          </div>
                          
                          <div className="flex flex-1 items-end justify-between">
                            <div className="flex items-center">
                              <button 
                                className="p-1 bg-gray-100 dark:bg-gray-800 rounded"
                                onClick={() => {
                                  if (item.quantity > 1) {
                                    setCartItems(
                                      cartItems.map(cartItem => 
                                        cartItem.id === item.id 
                                          ? { ...cartItem, quantity: cartItem.quantity - 1 } 
                                          : cartItem
                                      )
                                    );
                                  } else {
                                    removeFromCart(item.id);
                                  }
                                }}
                              >
                                -
                              </button>
                              <span className="mx-2">{item.quantity}</span>
                              <button 
                                className="p-1 bg-gray-100 dark:bg-gray-800 rounded"
                                onClick={() => {
                                  setCartItems(
                                    cartItems.map(cartItem => 
                                      cartItem.id === item.id 
                                        ? { ...cartItem, quantity: cartItem.quantity + 1 } 
                                        : cartItem
                                    )
                                  );
                                }}
                              >
                                +
                              </button>
                            </div>
                            
                            <button
                              type="button"
                              className="text-palette-2 dark:text-dark-primary hover:text-palette-1 dark:hover:text-dark-secondary"
                              onClick={() => removeFromCart(item.id)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {cartItems.length > 0 && (
                <div className="border-t border-gray-200 dark:border-gray-700 p-4 space-y-4">
                  <div className="flex justify-between text-base font-medium text-gray-800 dark:text-white">
                    <p>Subtotal</p>
                    <p>${totalPrice.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between text-base font-medium text-gray-800 dark:text-white">
                    <p>Shipping</p>
                    <p>Calculated at checkout</p>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-gray-800 dark:text-white">
                    <p>Total</p>
                    <p>${totalPrice.toFixed(2)}</p>
                  </div>                  <div className="mt-6">
                    <button
                      className="w-full bg-palette-2 hover:bg-palette-1 dark:bg-dark-primary dark:hover:bg-dark-secondary text-white px-6 py-3 rounded-lg font-medium transition-colors"
                      onClick={() => setShowCart(false)}
                    >
                      Available soon, DM on Facebook to order
                    </button>
                    <p className="text-center text-xs mt-2 text-gray-600 dark:text-gray-400">
                      Online checkout coming soon! Message us on Facebook to place your order.
                    </p>
                  </div>
                  <div className="mt-2 text-center">
                    <button
                      type="button"
                      className="text-palette-2 dark:text-dark-primary hover:text-palette-1 dark:hover:text-dark-secondary text-sm"
                      onClick={() => setShowCart(false)}
                    >
                      Continue Shopping
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default Merchandise;
