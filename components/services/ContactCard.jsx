import styles from '../../styles';

const ContactCard = () => (
  <div className={`${styles.flexCenter} px-8 w-[90%] mx-auto sm:w-[350px] md:w-[380px] lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-full lg:translate-x-1/2 h-fit py-8 bg-palette-2 rounded-md text-white flex flex-col gap-5 text-center shadow-2xl z-5 transition duration-500`}>
    <img
      src="/icons/leaf-icon.svg"
      alt="Leaf Icon"
      className="w-[70px] h-[70px] object-contain"
    />
    <h3 className="text-[22px] sm:text-[28px] font-sans-bold">Ready To Get Started?</h3>
    <p className="text-[16px]">Get in touch today for a free quote and consultation</p>
    <a href="mailto:rhij@rhijaesthetics.com">
      <button type="button" className="font-bold border-[1px] border-white px-6 py-2 rounded-xl hover:bg-white hover:text-palette-2 active:scale-95 transition duration-300">CONTACT US</button>
    </a>
  </div>
);

export default ContactCard;
