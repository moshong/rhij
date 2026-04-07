'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles';
import { TypingText, TitleText } from '../components';
import { staggerContainer, fadeIn, zoomIn } from '../utils/motion';
import RSVPModal from '../components/RSVPModal';

const NewsUpdates = () => {
  const [showRSVP, setShowRSVP] = useState(false);

  return (
    <section className={`px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10 bg-palette-5 dark:bg-dark-bg`} id='news'>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`max-w-6xl mx-auto flex flex-col`}
      >
      <TypingText title='| Latest News' textStyles='text-center' />
      <TitleText title='News & Updates' textStyles='text-center' />
      
      {/* Two Years in Bloom Event Card */}
      <motion.div
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-8 sm:mt-12 md:mt-16 bg-white dark:bg-dark-surface rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto border-2 border-pink-200 dark:border-pink-800"
      >
        <div className="flex flex-col md:flex-row">
          {/* Event Image */}
          <div className="w-full md:w-2/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-rose-500 dark:bg-rose-600 text-white z-10 py-2 px-4 rounded-bl-lg font-bold text-xs sm:text-sm">
              April 11, 2026
            </div>
            <div className="w-full h-48 sm:h-56 md:h-full min-h-[240px] relative">
              <Image
                src="/imgs/2nd_anniv.jpg"
                alt="Two Years in Bloom – Rhij Aesthetics Anniversary Soirée"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>

          {/* Event Details */}
          <div className="w-full md:w-3/5 p-4 sm:p-6 md:p-8">
            <div className="inline-block bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-300 text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
              Upcoming Event
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 font-heading text-rose-500 dark:text-rose-400">
              🌸 TWO YEARS IN BLOOM 🌸
            </h3>
            <p className="text-sm sm:text-base font-semibold text-amber-700 dark:text-amber-400 mb-3">
              Celebrating 2 Years of Rhij Aesthetics — Anniversary Soirée
            </p>

            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
              An afternoon of beauty, blooms, and community. Join us as we celebrate two incredible years and toast to all the glow that's to come!
            </p>

            <div className="bg-rose-50 dark:bg-rose-900/20 p-3 sm:p-4 rounded-lg mb-3 sm:mb-4">
              <h4 className="font-bold text-rose-500 dark:text-rose-400 mb-2 text-sm sm:text-base">✨ What to Expect:</h4>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start"><span className="mr-2">🍹</span><span>Cocktails</span></li>
                <li className="flex items-start"><span className="mr-2">🥂</span><span>Light Bites</span></li>
                <li className="flex items-start"><span className="mr-2">🎁</span><span>Giveaways</span></li>
                <li className="flex items-start"><span className="mr-2">🎉</span><span>Celebration</span></li>
              </ul>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 p-3 sm:p-4 rounded-lg mb-4 sm:mb-5">
              <h4 className="font-bold text-amber-700 dark:text-amber-400 mb-2 text-sm sm:text-base">📅 Event Details:</h4>
              <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                <strong>When:</strong> Saturday, April 11, 2026 | 2–5 PM CST<br/>
                <strong>Where:</strong> Cedar Rapids, Iowa<br/>
                <span className="italic text-xs">More details to follow.</span>
              </p>
            </div>

            <div className="text-center mb-3 sm:mb-4">
              <button
                onClick={() => setShowRSVP(true)}
                className="inline-block bg-rose-500 hover:bg-rose-600 dark:bg-rose-600 dark:hover:bg-rose-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base"
              >
                RSVP Now
              </button>
            </div>

            <p className="text-rose-400 dark:text-rose-400 text-xs sm:text-sm font-medium">
              #TwoYearsInBloom #RhijAesthetics #AnniversarySoiree #CedarRapidsIowa
            </p>
          </div>
        </div>
      </motion.div>

      {/* The Glow Edit Event Card */}
      <motion.div
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-8 sm:mt-12 md:mt-16 bg-white dark:bg-dark-surface rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto"
      >
        <div className="flex flex-col md:flex-row">
          {/* Event Image */}
          <div className="w-full md:w-2/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-palette-2 dark:bg-dark-primary text-white z-10 py-2 px-4 rounded-bl-lg font-bold text-xs sm:text-sm">
              November 8, 2025
            </div>
            <div className="w-full h-48 sm:h-56 md:h-full min-h-[200px] relative">
              <Image 
                src="/Logos/glowedit_event.jpg" 
                alt="The Glow Edit Open House" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
          
          {/* Event Details */}
          <div className="w-full md:w-3/5 p-4 sm:p-6 md:p-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 font-heading text-palette-2 dark:text-dark-primary">
              ✨ THE GLOW EDIT ✨ Open House
            </h3>
            
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
              Join us for a one-of-a-kind open house in collaboration with LV Photography and Muriel Miller Designs & Gatherings! A beautiful afternoon filled with glow, style, and creativity.
            </p>
            
            <div className="bg-palette-5/20 dark:bg-dark-primary/10 p-3 sm:p-4 rounded-lg mb-3 sm:mb-4">
              <h4 className="font-bold text-palette-2 dark:text-dark-primary mb-2 text-sm sm:text-base">What to Expect:</h4>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">💝</span>
                  <span>FREE The Glow Edit goody bag for the first 30 guests</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🎁</span>
                  <span>Exclusive raffle and giveaways</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">💆‍♀️</span>
                  <span>Discounted services & treatments during the event</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🌷</span>
                  <span>Fresh flowers for sale — the perfect touch to take home</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🍬</span>
                  <span>Treat Bar — enjoy something sweet while you mingle and glow</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">💡</span>
                  <span>Complimentary Skin Analysis if you book a styled photo session</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-palette-2/10 dark:bg-dark-primary/10 p-3 sm:p-4 rounded-lg mb-3 sm:mb-4">
              <h4 className="font-bold text-palette-2 dark:text-dark-primary mb-2 text-sm sm:text-base">📅 Event Details:</h4>
              <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                <strong>When:</strong> Saturday, November 8, 2025 | 1–5 PM<br/>
                <strong>Where:</strong> Rhij Aesthetics, Cedar Rapids, IA<br/>
                <span className="text-xs">1921 51st St Suite 4 Cedar Rapids, Iowa 52402</span>
              </p>
            </div>
            
            <div className="text-center mb-3 sm:mb-4">
              <button 
                onClick={() => setShowRSVP(true)}
                className="inline-block bg-palette-2 hover:bg-palette-1 dark:bg-dark-primary dark:hover:bg-dark-secondary text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base"
              >
                RSVP Now
              </button>
            </div>
            
            <p className="text-palette-2 dark:text-dark-primary text-xs sm:text-sm font-medium">
              #TheGlowEdit #RhijAesthetics #CedarRapidsEvent
            </p>
            
            {/* Partner Logos */}
            <div className="mt-4 sm:mt-6">
              <h4 className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3 sm:mb-4">
                In collaboration with
              </h4>
              
              <div className="flex items-center space-x-4 sm:space-x-6">
                <motion.div 
                  variants={zoomIn(0.3, 0.7)}
                  className="w-16 h-16 sm:w-20 sm:h-20 relative"
                >
                  <Image 
                    src="/Logos/lv.jpg" 
                    alt="LV Photography" 
                    width={80} 
                    height={80}
                    className="object-contain"
                  />
                </motion.div>
                
                <motion.div 
                  variants={zoomIn(0.5, 0.7)}
                  className="w-16 h-16 sm:w-20 sm:h-20 relative"
                >
                  <Image 
                    src="/Logos/muriel.jpg" 
                    alt="Muriel Miller Designs & Gatherings" 
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
      
      {/* New Product Alert Card */}
      <motion.div
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-8 sm:mt-12 md:mt-16 bg-white dark:bg-dark-surface rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto"
      >
        <div className="flex flex-col md:flex-row">
          {/* Product Image */}
          <div className="w-full md:w-2/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-palette-2 dark:bg-dark-primary text-white z-10 py-2 px-4 rounded-bl-lg font-bold text-xs sm:text-sm">
              July 15, 2025
            </div>
            <div className="w-full h-48 sm:h-56 md:h-full min-h-[200px] relative">
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
          <div className="w-full md:w-3/5 p-4 sm:p-6 md:p-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 font-heading text-palette-2 dark:text-dark-primary">
              🧴✨ NEW PRODUCT ALERT ✨🧴
            </h3>
            
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
              We're beyond excited to officially announce that… Rhij Aesthetics LLC now has our very own skincare line! 💕🌿
            </p>
            
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
              Formulated with intention. Backed by science. Created with your glow in mind.
              From our treatment room to your daily routine — we're bringing you clean, effective, and results-driven skincare made to elevate your self-care.
            </p>
            
            <div className="bg-palette-5/20 dark:bg-dark-primary/10 p-3 sm:p-4 rounded-lg mb-3 sm:mb-4">
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
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
            
            <p className="text-palette-2 dark:text-dark-primary text-xs sm:text-sm font-medium">
              #RhijGlow #RhijSkincare #NewProductDrop #FilipinaOwnedBeauty #MadeInUSA
            </p>
          </div>
        </div>
      </motion.div>
      
      {/* Soft Launch Event Card */}
      <motion.div
        variants={fadeIn('up', 'tween', 0.4, 1)}
        className="mt-8 sm:mt-12 md:mt-16 bg-white dark:bg-dark-surface rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto"
      >
        <div className="flex flex-col md:flex-row">
          {/* Event Image */}
          <div className="w-full md:w-2/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-palette-2 dark:bg-dark-primary text-white z-10 py-2 px-4 rounded-bl-lg font-bold text-xs sm:text-sm">
              July 6, 2025
            </div>
            <div className="w-full h-48 sm:h-56 md:h-full min-h-[200px] relative">
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
          <div className="w-full md:w-3/5 p-4 sm:p-6 md:p-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 font-heading text-palette-2 dark:text-dark-primary">
              Soft Launch – Private Event Only 🎀
            </h3>
            
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
              Rhij Aesthetics is celebrating its soft launch with an exclusive invite-only event on July 6 — featuring sweet collaborations with Munchi Mochi Donuts and Chocolates de Chaveleta.
            </p>
            
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
              ✨ VIP treatments, elevated self-care, and handcrafted local treats await our special guests.
            </p>
            
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-bold mb-4 sm:mb-6">
              Private event by invitation only.
            </p>
            
            <p className="text-xs sm:text-sm text-palette-2 dark:text-dark-primary font-medium">
              #RhijAesthetics #PrivateSoftLaunch #SupportLocal
            </p>
            
            {/* Partner Logos */}
            <div className="mt-4 sm:mt-6">
              <h4 className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3 sm:mb-4">
                In collaboration with
              </h4>
              
              <div className="flex items-center space-x-4 sm:space-x-6">
                <motion.div 
                  variants={zoomIn(0.3, 0.7)}
                  className="w-16 h-16 sm:w-20 sm:h-20 relative"
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
                  className="w-16 h-16 sm:w-20 sm:h-20 relative"
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

    {/* RSVP Modal */}
    <RSVPModal 
      isOpen={showRSVP}
      onClose={() => setShowRSVP(false)}
      eventTitle="The Glow Edit Open House"
    />
  </section>
);
};

export default NewsUpdates;
