'use client';

import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-scroll';
import { GrClose } from 'react-icons/gr';
import { FaPhoneAlt } from 'react-icons/fa';
import { navbar, socials } from '../../constants';
import styles from '../../styles';

const SideBar = ({ active, handleClick }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <div className="z-50">
      <div
        style={{ transform: active ? 'translateX(0)' : 'translateX(100%)' }}
        className="transition duration-[.6s] ease-in-out p-8 gap-8 flex flex-col fixed top-0 right-0 bg-white w-3/4 sm:w-[350px] h-screen shadow-2xl opacity-100 z-50 overflow-y-auto flex-grow"
      >
        <div className="w-full flex justify-end">
          <button type="button" aria-label="Close menu" onClick={() => handleClick()}>
            <GrClose className="relative left-[2px] -top-[3px] w-[30px] h-[30px] cursor-pointer" />
          </button>
        </div>
        <div className="flex justify-center">
          <Link
            activeClass="active"
            to="home"
            spy
            smooth
            offset={-150}
            duration={300}
            href="/#home"
          >
            <div className="flex items-center py-4">
              <span className="text-palette-1 text-2xl font-light tracking-widest">RHIJ</span>
              <span className="text-palette-2 text-2xl font-extralight tracking-wider ml-1">AESTHETICS</span>
              <div className="h-4 w-4 rounded-full bg-palette-2/70 ml-2" />
            </div>
          </Link>
        </div>
        <nav>
          <ul className="flex flex-col">
            {navbar.map(({ name, path }) => (
              <li key={name} className="text-[12px] sm:text-[14px] font-bold">
                <Link
                  onClick={() => handleClick()}
                  activeClass="active"
                  to={path}
                  spy
                  smooth
                  offset={path === 'testimonials' && !isDesktop ? 600 : isDesktop ? 0 : -90}
                  duration={300}
                  key={name}
                  href={`/#${path}`}
                  className="relative text-left block w-full short:py-4 py-6 pr-full transition duration-300 cursor-pointer font-bold text-[15px] xl:text-[18px] font-sans group hover:text-black border-b-1 border-black-100"
                >
                  {name}
                  <div className="absolute bottom-7 left-0 w-0 h-[2px] bg-palette-2 transition-all duration-300 group-hover:w-[60px]" />
                </Link>
                {/* <div className="relative top-[15px] h-[1px] w-full bg-black opacity-10" /> */}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-row gap-6 justify-center items-center">
          <FaPhoneAlt className="w-[30px] h-[30px] text-palette-1" />
          <div>
            <h4>Book Now</h4>
            <a 
              href="https://book.carepatron.com/Rhij-Aesthetics-and-Skin-Care/Rhij?p=PKRmBx5QS4CLC2nWnCR2Jg&s=Q7znKVgM"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold hover:text-palette-2 transition duration-300"
            >
              Click Here
            </a>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          {socials.map(({ name, icon, href }) => {
            const SocialIcon = icon;

            return (
              <a href={href} key={name} aria-label={name}>
                <div className={`${styles.flexCenter} w-[50px] h-[50px] rounded-full bg-palette-1 border-[1px] border-palette-1 hover:border-palette-1 cursor-pointer hover:bg-white transition duration-300 group`}>
                  <SocialIcon size={20} className="text-white group-hover:text-palette-1" />
                </div>
              </a>
            );
          })}
        </div>

      </div>

      <button type="button" aria-label="Menu" onClick={() => handleClick()}>
        <img
          src="/icons/menu.svg"
          alt="menu"
          className="2xl:hidden w-[30px] h-[30px] object-contain cursor-pointer"
        />
      </button>

    </div>
  );
};

export default SideBar;
