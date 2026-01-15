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

        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className='flex flex-col items-center gap-6 mt-8'
        >
          <div className='bg-gradient-to-r from-palette-1 via-palette-2 to-palette-1 p-1 rounded-xl shadow-2xl max-w-4xl w-full'>
            <div className='bg-white dark:bg-dark-bg p-8 lg:p-12 rounded-xl'>
              <h3 className='text-2xl lg:text-3xl font-bold text-palette-1 mb-4'>
                Top 3 Medical Spa in Cedar Rapids 2025
              </h3>
              
              
              <div className='flex flex-col lg:flex-row gap-6 items-center justify-center mt-8'>
                <motion.div
                  variants={fadeIn('right', 'tween', 0.4, 1)}
                  className='relative group'
                >
                  <div className='absolute inset-0 bg-palette-1 opacity-20 group-hover:opacity-30 rounded-lg transition-opacity duration-300'></div>
                  <img 
                    src='/Logos/award.JPG' 
                    alt='Rhij Aesthetics Top Business Award'
                    className='h-[250px] lg:h-[300px] w-auto object-contain rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'
                  />
                </motion.div>
                
                <motion.div
                  variants={fadeIn('left', 'tween', 0.4, 1)}
                  className='relative group'
                >
                  <div className='absolute inset-0 bg-palette-2 opacity-20 group-hover:opacity-30 rounded-lg transition-opacity duration-300'></div>
                  <img 
                    src='/Logos/award2.PNG' 
                    alt='Rhij Aesthetics Excellence Award'
                    className='h-[250px] lg:h-[300px] w-auto object-contain rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'
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
