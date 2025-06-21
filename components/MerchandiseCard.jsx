import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const MerchandiseCard = ({ item, index, handleClick }) => {
  const { title, subtitle, imgUrl, price, category, colors } = item;
  
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.3, 0.75)}
      className="flex flex-col min-w-[250px] md:min-w-[270px] lg:min-w-[300px] w-full sm:w-[250px] md:w-[270px] lg:w-[300px] h-[440px] md:h-[480px] bg-white dark:bg-dark-surface rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer"
      onClick={() => handleClick(item)}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <div className="relative w-full h-[65%] overflow-hidden">
        <img 
          src={imgUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
        />
        <div className="absolute top-4 right-4 bg-palette-1 dark:bg-dark-primary text-white px-3 py-1 rounded-full font-bold text-sm">
          ${price.toFixed(2)}
        </div>
        <div className="absolute top-4 left-4 bg-white dark:bg-dark-surface text-palette-2 dark:text-dark-primary px-3 py-1 rounded-full font-medium text-xs uppercase">
          {category}
        </div>
      </div>
      
      <div className="flex flex-col justify-between p-5 h-[35%]">
        <div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-white font-heading">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{subtitle}</p>
        </div>
        
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center">
            {colors && colors.map((color, i) => (
              <div 
                key={i} 
                className="w-4 h-4 rounded-full border border-gray-300 mr-1"
                style={{ backgroundColor: color }}
                title={`Color option ${i+1}`}
              />
            ))}
          </div>
          <button className="bg-palette-2 hover:bg-palette-1 dark:bg-dark-primary dark:hover:bg-dark-secondary text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default MerchandiseCard;
