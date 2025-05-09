import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';
import { TypingText, TitleText, QuoteCard, Picture } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion'

const About = () => {
  const isMobile = useMediaQuery({ maxWidth: 480 })
  const isDesktop = useMediaQuery({ maxWidth: 1024 })

  return (
    <section className={`p-0 lg:p-[100px] relative z-10 min-h-[1100px] flex flex-col justify-end lg:justify-center`} id='about'>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.1 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col gap-12`}
      >
        <div className='flex flex-col-reverse lg:items-center lg:flex-row gap-8 lg:gap-[100px] xl:gap-40 mt-[50px] w-fit h-fit'>
          <motion.div
            variants={isDesktop ? fadeIn('up', 'tween', 0.1, 1) : fadeIn('right', 'tween', 0.1, 1)}
            className='relative z-50 h-[600px] xl:h-[700px] 2xl:h-[800px]'
          >
            <Picture
              webp="/imgs/about-sc.png"
              src="/imgs/about-sc.png"
              alt="About section screenshot"
              className="relative w-full lg:max-w-[400px] xl:max-w-[500px] min-h-[600px] h-full object-cover object-cover z-40 lg:rounded-lg shadow-xl"
            />
            <QuoteCard
              text="Dedicated to enhancing your natural beauty with personalized care and premium treatments."
              styles="lg:hidden"
            />
            <div className='hidden lg:block'>
              <div className='absolute -top-[50px] -left-[50px] h-full w-full bg-palette-1 shadow-2xl z-0' />
              <div className='absolute -bottom-4 -right-4 h-full w-full bg-palette-5 z-20' />
              <div className='absolute -bottom-[50px] -right-[50px] h-full w-full border-4 border-palette-1 z-10' />
            </div>
          </motion.div>

          <motion.div
            variants={isDesktop ? fadeIn('up', 'tween', 0.1, 1) : fadeIn('left', 'tween', 0.1, 1)}
            className='px-6 sm:px-16 lg:px-0 sm:py-12 flex flex-col justify-center items-start gap-12 flex-1'
          >
            <motion.div
              variants={isMobile ? fadeIn('up', 'tween', 0.2, 1) : fadeIn('left', 'tween', 0.2, 1)}
              className='flex flex-col items-start'
            >
              <TypingText title='| About Us' textStyles='text-center' />
              <TitleText title={<>Who We Are</>} />
            </motion.div>

            <div className='flex flex-col gap-8'>
              <p className={`font-normal text-[16px] leading-7`}>
                Welcome to <span className=''>Rhij Aesthetics</span>
              </p>

              <p className={`font-normal text-[16px] leading-7`}>
                At Rhij Aesthetics, we combine advanced medical training with a personalized approach to wellness and aesthetics. Founded and led by a board-certified Family Nurse Practitioner, our clinic offers medically supervised IV vitamin therapy, intramuscular wellness injections, and aesthetic services such as Korean luxury facials, Diamond glow facial, underarm diamond peel and more.
              </p>

              <p className={`font-normal text-[16px] leading-7`}>
                Every treatment is grounded in evidence-based practice and designed to support your overall health, energy levels, and confidence—from the inside out. We prioritize patient safety, clinical integrity, and personalized care—ensuring that each client receives the highest standard of treatment in a professional and comfortable setting.
              </p>

              <p className={`font-normal text-[16px] leading-7`}>
                Whether you're seeking a regular beauty regimen or preparing for a special occasion, we are here to help you look and feel your best. Book your appointment today and experience the <span className='font-extrabold'>Rhij difference</span> - where your beauty is our priority!
              </p>
            </div>

            {/* <button className={`${styles.heroBtn} bg-palette-1 hover:border-palette-1`}>Learn More</button> */}

          </motion.div>
        </div>

        <motion.img
          variants={fadeIn('up', 'tween', 0.3, 1)}
          src='/icons/arrow-down.svg'
          alt='arrow-down'
          className='hidden lg:flex w-[18px] h-[28px] object-contain mt-[50px]'
        />
      </motion.div>
    </section>
  );
};

export default About;
