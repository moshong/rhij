import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-scroll';
import { IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';
import { socials, navbar, services, contact, disclaimer } from '../../constants';
import styles from '../../styles';
import GoogleMap from '../GoogleMap';

const Footer = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <footer className="relative bg-palette-1 bg-hero-pattern z-5 opacity-90">

      <div className="mx-auto flex flex-col gap-8 items-center justify-between">
        <div className="flex flex-row flex-wrap justify-start md:justify-center px-8 py-[50px] lg:py-[100px] gap-[50px] max-w-full md:w-[870px] min-[1650px]:w-full">
          <div className="flex flex-row items-center pb-12 pr-[30px]">
            <Image 
              src="/Logos/logo.png" 
              alt="RHIJ Aesthetics & Wellness Logo" 
              width={180} 
              height={40} 
              className="object-contain"
            />
          </div>

          <div className="flex flex-col gap-8 max-w-full md:max-w-[450px]">
            <h3 className={`${styles.footerHeading}`}>About</h3>
            <p className="font-lato leading-7 text-palette-5 text-[14px] sm:text-[16px]">At Rhij Aesthetics, we're dedicated to enhancing your natural beauty through personalized treatments and premium care. Our beauty studio offers a tranquil escape where you can relax and rejuvenate. With a focus on quality and attention to detail, we're committed to helping you look and feel your absolute best.</p>
            <div className="flex gap-4">
              {socials.map(({ name, icon, href }) => {
                const SocialIcon = icon;

                return (                  <a href={href} key={name} aria-label={name}>
                    <div key={name} className={`${styles.flexCenter} w-[40px] h-[40px] rounded-full bg-white dark:bg-dark-surface border-[1px] border-palette-1 cursor-pointer hover:bg-palette-1 transition duration-300 group`}>
                      <SocialIcon size={20} className="text-palette-1 group-hover:text-white dark:group-hover:text-dark-text" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-8 pr-[50px]">
            <h3 className={`${styles.footerHeading}`}>Explore</h3>
            <nav>
              <ul className="flex flex-col gap-4">
                {navbar.map(({ name, path }) => (
                  <li key={name} className="flex flex-row items-center gap-2">
                    <IoIosArrowForward size={15} className="text-palette-3" />
                    <Link
                      activeClass="active"
                      to={path}
                      spy
                      smooth
                      offset={path === 'testimonials' && !isDesktop ? 600 : isDesktop ? 0 : -90}
                      duration={300}
                      key={name}
                      href={`/#${path}`}
                      className="relative transition duration-300 cursor-pointer text-palette-5 text-[14px] xl:text-[16px] font-sans group"
                    >
                      {name}
                      <div className="absolute -bottom-[3px] left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className={`${styles.footerHeading}`}>Our Services</h3>
            <div className="flex flex-col gap-4">
              {services.map(({ icon, title }) => (
                <div key={title} className="flex flex-row items-center gap-4">
                  <img
                    src={icon.img}
                    alt={icon.alt}
                    className="w-[45px] h-[45px] object-contain text-palette-3"
                  />
                  <Link
                    activeClass="active"
                    to="services"
                    spy
                    smooth
                    offset={-150}
                    duration={300}
                    key={title}
                    href="/#services"
                    className="cursor-pointer text-palette-5 text-[14px] xl:text-[16px] font-sans"
                  >
                    {title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            <h3 className={`${styles.footerHeading}`}>Get In Touch</h3>
            <div className="flex flex-col justify-center gap-4">
              {contact.map(({ name, icon, content, url }) => {
                const ContactIcon = icon;

                return (
                  <a key={name} href={url} className="cursor-pointer group">
                    <div className="flex flex-row items-center gap-4">
                      <div className="border-[1px] border-palette-3 bg-palette-1 rounded-full p-2 group-hover:border-palette-3 group-hover:bg-palette-3 transition duration-300">
                        <ContactIcon size={20} className="text-palette-3 group-hover:text-palette-1 text-center w-[20px]" />
                      </div>
                      <p className="text-palette-5 text-[14px] sm:text-[16px] w-[50vw] small-mobile:w-[60vw] mobile:w-full break-words">{content}</p>
                    </div>
                  </a>
                );
              })}
            </div>
            
            <div className="mt-4 w-full md:max-w-[400px]">
              <h4 className="text-palette-5 font-sans font-medium text-[16px] mb-3">Find Us</h4>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <GoogleMap 
                  location="1921 51st St NE Suite 4, Cedar Rapids, IA 52402" 
                  height="250px" 
                  zoom={16}
                  showMarker={true} 
                />
              </div>
            </div>
          </div>

        </div>

        <div className="h-[1px] w-full bg-palette-3 opacity-50" />

        <p className="text-palette-5 px-8 md:px-12 lg:px-24 py-4 text-[11px] sm:text-[12px] text-center max-w-[1200px] italic opacity-80">
          {disclaimer}
        </p>

        <p className="text-white px-4 pb-8 text-[12px] sm:text-[14px] text-center">
          © Copyright RHIJ Aesthetics & Skin Care | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
