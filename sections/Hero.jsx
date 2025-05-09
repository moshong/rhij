import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, textVariant } from '../utils/motion'
import { Picture } from '../components';
import { Link } from 'react-scroll';
import { heroBtns } from '../constants';
import { TypingText } from '../components/CustomTexts';

const Hero = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <section className={`relative sm:pl-16 pl-6 w-full bg-palette-5`} id='home'>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className="2xl:max-w-[1450px] w-full h-screen min-h-[600px] mx-auto flex flex-col justify-end short:justify-center"
      >
        <div className='absolute inset-0 w-full h-screen min-h-[600px]'>
          <picture>
            <source srcSet="/imgs/hero.JPG" type="image/jpeg" />
            <img
              src="/imgs/hero.JPG"
              alt="Beauty salon"
              className="object-cover w-full h-full brightness-[0.65]"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-palette-1/70 to-transparent pointer-events-none"></div>
        </div>

        <div className='flex flex-col items-left justify-end gap-10 pb-[200px] relative z-10 short:gap-6 short:pb-0'>
          <div>
            <motion.h1 variants={textVariant(0.1)} className={styles.heroHeading}>
              Welcome to 
            </motion.h1>
            <TypingText 
              title="Rhij Aesthetics." 
              textStyles={`font-dancing font-bold !text-white !text-[45px] mobile:!text-[55px] md:!text-[75px] xl:!text-[95px] !leading-[120px]`} 
            />
          </div>
          <motion.p variants={textVariant(0.7)} className={styles.heroText}>
            Discover a world of personalized treatment and relaxation.
          </motion.p>
          <motion.div variants={textVariant(1)} className='flex flex-col small-mobile:flex-row gap-2 mobile:gap-6'>
            {heroBtns.map(({name, path, external}, i) => (
              external ? (
                <a 
                  href={path}
                  key={name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className={styles.heroBtn}>{name}</button>
                </a>
              ) : (
                <Link
                  activeClass='active'
                  to={path}
                  spy={true}
                  smooth={true}
                  offset={path === 'testimonials' && !isDesktop ? 600 : isDesktop ? 0 : -90}
                  duration={300}
                  key={name}
                  href={`/#${path}`}
                >
                  <button className={styles.heroBtn}>{name}</button>
                </Link>
              )
            ))}
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
};

export default Hero;
