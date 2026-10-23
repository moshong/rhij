'use client';

import { motion } from 'framer-motion';
import { TypingText, TitleText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { useMediaQuery } from 'react-responsive';

const Awards = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <section className={`${styles.paddings} relative z-10`} id='awards'>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.1 }}
        className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}
      >
        <motion.div
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className='flex flex-col items-center text-center'
        >
          <TypingText title='| Recognition' textStyles='text-center' />
          <TitleText title={<>Award-Winning Excellence</>} />
        </motion.div>

        {/* CommunityVotes 2026 Awards — Bronze & Silver, latest, shown first */}
        <motion.div
          variants={fadeIn('up', 'tween', 0.25, 1)}
          className='flex flex-col items-center gap-6 mt-8'
        >
          <div className='border border-[#2B2220]/15 dark:border-white/15 rounded-sm max-w-4xl w-full'>
            <div className='bg-white dark:bg-dark-bg p-8 lg:p-12'>
              <h3 className='font-playfair text-2xl lg:text-3xl font-medium text-[#2B2220] dark:text-white mb-2'>
                CommunityVotes 2026 Winner
              </h3>
              <p className='text-gray-600 dark:text-gray-400 mb-6 text-sm sm:text-base'>
                Rhij Aesthetics won <strong>Bronze</strong> for Beauty and Health Spa, and <strong>Silver</strong> for Medical Aesthetics in the 2026 CommunityVotes awards. Thank you for your continued support!
              </p>

              <div className='flex flex-wrap items-center justify-center gap-6 mt-6'>
                <motion.div variants={fadeIn('right', 'tween', 0.4, 1)} className='relative group'>
                  <iframe
                    width='200'
                    height='200'
                    frameBorder='0'
                    style={{ border: 0 }}
                    scrolling='no'
                    allowtransparency='true'
                    title='CommunityVotes Bronze Award – Beauty and Health Spa'
                    src='https://communityvotes.com/plugins/winners-badge/criff/8vkdk6x9g2f6x7p7q6'
                  />
                </motion.div>
                <motion.div variants={fadeIn('left', 'tween', 0.4, 1)} className='relative group'>
                  <iframe
                    width='200'
                    height='200'
                    frameBorder='0'
                    style={{ border: 0 }}
                    scrolling='no'
                    allowtransparency='true'
                    title='CommunityVotes Silver Award – Medical Aesthetics'
                    src='https://communityvotes.com/plugins/winners-badge/criff/8vkdk6q7gmt7f27d7p'
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Top 1 Business Rate March 2026 — latest, shown first */}
        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className='flex flex-col items-center gap-6 mt-8'
        >
          <div className='border border-[#2B2220]/15 dark:border-white/15 rounded-sm max-w-4xl w-full'>
            <div className='bg-white dark:bg-dark-bg p-8 lg:p-12'>
              <h3 className='font-playfair text-2xl lg:text-3xl font-medium text-[#2B2220] dark:text-white mb-2'>
                #1 Medical Spa in Cedar Rapids — March 2026
              </h3>
              <p className='text-gray-600 dark:text-gray-400 mb-6 text-sm sm:text-base'>
                Rhij Aesthetics ranked <strong>#1 Medical Spa in Cedar Rapids</strong> for March 2026. Thank you to every client who shared their experience and trusted us with their glow!
              </p>

              <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6'>
                <motion.div variants={fadeIn('up', 'tween', 0.4, 1)} className='relative group'>
                  <img
                    src='/Logos/award%203.webp'
                    alt='Top 1 Business Rate March 2026 – Award 3'
                    className='w-full h-auto object-contain rounded-sm'
                  />
                </motion.div>
                <motion.div variants={fadeIn('up', 'tween', 0.5, 1)} className='relative group'>
                  <img
                    src='/Logos/award4.webp'
                    alt='Top 1 Business Rate March 2026 – Award 4'
                    className='w-full h-auto object-contain rounded-sm'
                  />
                </motion.div>
                <motion.div variants={fadeIn('up', 'tween', 0.6, 1)} className='relative group'>
                  <img
                    src='/Logos/award5.png'
                    alt='Top 1 Business Rate March 2026 – Award 5'
                    className='w-full h-auto object-contain rounded-sm'
                  />
                </motion.div>
                <motion.div variants={fadeIn('up', 'tween', 0.7, 1)} className='relative group'>
                  <img
                    src='/Logos/award6.jpeg'
                    alt='Top 1 Business Rate March 2026 – Award 6'
                    className='w-full h-auto object-contain rounded-sm'
                  />
                </motion.div>
              </div>

              <p className='text-center mt-8 text-gray-600 dark:text-gray-400 italic'>
                Ranked <strong>#1</strong> Medical Spa in Cedar Rapids for March 2026! Another milestone made possible by your incredible support and reviews.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Top 3 Medical Spa 2025 */}
        <motion.div
          variants={fadeIn('up', 'tween', 0.4, 1)}
          className='flex flex-col items-center gap-6 mt-4'
        >
          <div className='border border-[#2B2220]/15 dark:border-white/15 rounded-sm max-w-4xl w-full'>
            <div className='bg-white dark:bg-dark-bg p-8 lg:p-12'>
              <h3 className='font-playfair text-2xl lg:text-3xl font-medium text-[#2B2220] dark:text-white mb-4'>
                Top 3 Medical Spa in Cedar Rapids 2025
              </h3>

              <div className='flex flex-col lg:flex-row gap-6 items-center justify-center mt-8'>
                <motion.div
                  variants={fadeIn('right', 'tween', 0.4, 1)}
                  className='relative group'
                >
                  <img 
                    src='/Logos/award.JPG' 
                    alt='Rhij Aesthetics Top Business Award'
                    className='h-[250px] lg:h-[300px] w-auto object-contain rounded-sm'
                  />
                </motion.div>
                
                <motion.div
                  variants={fadeIn('left', 'tween', 0.4, 1)}
                  className='relative group'
                >
                  <img 
                    src='/Logos/award2.PNG' 
                    alt='Rhij Aesthetics Excellence Award'
                    className='h-[250px] lg:h-[300px] w-auto object-contain rounded-sm'
                  />
                </motion.div>
              </div>

              <p className='text-center mt-8 text-gray-600 dark:text-gray-400 italic'>
                We are honored to be named 𝐓𝐨𝐩 𝟑 𝐌𝐞𝐝ical 𝐒𝐩𝐚 𝐢𝐧 𝐂𝐞𝐝𝐚𝐫 𝐑𝐚𝐩𝐢𝐝𝐬 in 2025, made possible by your verified Google reviews.
Thank you for choosing us, trusting us, and glowing with us.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.img
          variants={fadeIn('up', 'tween', 0.3, 1)}
          src='/icons/arrow-down.svg'
          alt='arrow-down'
          className='hidden lg:flex w-[18px] h-[28px] object-contain mt-[50px] mx-auto'
        />
      </motion.div>
    </section>
  );
};

export default Awards;
