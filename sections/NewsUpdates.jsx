'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles';
import { TypingText, TitleText } from '../components';
import { staggerContainer, fadeIn, zoomIn } from '../utils/motion';

const NewsUpdates = () => (
  <section className={`${styles.paddings} relative z-10 bg-palette-5 dark:bg-dark-bg`} id='news'>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title='| Latest News' textStyles='text-center' />
      <TitleText title='News & Updates' textStyles='text-center' />
      
      {/* New Product Alert Card */}
      <motion.div
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[50px] md:mt-[70px] bg-white dark:bg-dark-surface rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto"
      >
        <div className="flex flex-col md:flex-row">
          {/* Product Image */}
          <div className="w-full md:w-2/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-palette-2 dark:bg-dark-primary text-white z-10 py-2 px-4 rounded-bl-lg font-bold">
              July 15, 2025
            </div>
            <div className="w-full h-64 md:h-full relative">
              <Image 
                src="/Logos/newproductalert.jpeg" 
                alt="New Skincare Line" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
          
          {/* Product Details */}
          <div className="w-full md:w-3/5 p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 font-heading text-palette-2 dark:text-dark-primary">
              🧴✨ NEW PRODUCT ALERT ✨🧴
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We're beyond excited to officially announce that… Rhij Aesthetics LLC now has our very own skincare line! 💕🌿
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Formulated with intention. Backed by science. Created with your glow in mind.
              From our treatment room to your daily routine — we're bringing you clean, effective, and results-driven skincare made to elevate your self-care.
            </p>
            
            <div className="bg-palette-5/20 dark:bg-dark-primary/10 p-4 rounded-lg mb-4">
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">🇺🇸</span>
                  <span>Proudly Made in the USA</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🔬</span>
                  <span>Backed by a U.S.-based research and development + quality assurance lab with over 50 years of experience</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🧪</span>
                  <span>Paraben-free | Cruelty-free | Dermatologist-approved | All Vegan</span>
                </li>
              </ul>
            </div>
            
            <p className="text-palette-2 dark:text-dark-primary text-sm font-medium">
              #RhijGlow #RhijSkincare #NewProductDrop #FilipinaOwnedBeauty #MadeInUSA
            </p>
          </div>
        </div>
      </motion.div>
      
      {/* Soft Launch Event Card */}
      <motion.div
        variants={fadeIn('up', 'tween', 0.4, 1)}
        className="mt-[30px] md:mt-[50px] bg-white dark:bg-dark-surface rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto"
      >
        <div className="flex flex-col md:flex-row">
          {/* Event Image */}
          <div className="w-full md:w-2/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-palette-2 dark:bg-dark-primary text-white z-10 py-2 px-4 rounded-bl-lg font-bold">
              July 6, 2025
            </div>
            <div className="w-full h-64 md:h-full relative">
              <Image 
                src="/Logos/rhijopenning.jpeg" 
                alt="Soft Launch Event" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
          
          {/* Event Details */}
          <div className="w-full md:w-3/5 p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 font-heading text-palette-2 dark:text-dark-primary">
              Soft Launch – Private Event Only 🎀
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Rhij Aesthetics is celebrating its soft launch with an exclusive invite-only event on July 6 — featuring sweet collaborations with Munchi Mochi Donuts and Chocolates de Chaveleta.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              ✨ VIP treatments, elevated self-care, and handcrafted local treats await our special guests.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 font-bold mb-6">
              Private event by invitation only.
            </p>
            
            <p className="text-palette-2 dark:text-dark-primary text-sm font-medium">
              #RhijAesthetics #PrivateSoftLaunch #SupportLocal
            </p>
            
            {/* Partner Logos */}
            <div className="mt-6">
              <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
                In collaboration with
              </h4>
              
              <div className="flex items-center space-x-6">
                <motion.div 
                  variants={zoomIn(0.3, 0.7)}
                  className="w-20 h-20 relative"
                >
                  <Image 
                    src="/Logos/munchi_logo.jpeg" 
                    alt="Munchi Mochi Donuts" 
                    width={80} 
                    height={80}
                    className="object-contain"
                  />
                </motion.div>
                
                <motion.div 
                  variants={zoomIn(0.5, 0.7)}
                  className="w-20 h-20 relative"
                >
                  <Image 
                    src="/Logos/chaveleta_logo.jpeg" 
                    alt="Chocolates de Chaveleta" 
                    width={80} 
                    height={80}
                    className="object-contain"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default NewsUpdates;
