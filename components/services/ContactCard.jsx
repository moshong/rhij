import styles from '../../styles';

const ContactCard = () => (
  <div className={`${styles.flexCenter} px-8 w-[90%] mx-auto sm:w-[350px] md:w-[380px] lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-full lg:translate-x-1/2 h-fit py-8 bg-palette-2 rounded-sm text-white flex flex-col gap-5 text-center shadow-2xl z-5 transition duration-500`}>
    <h3 className="font-playfair text-[26px] sm:text-[30px]">Ready To Get Started?</h3>
    <p className="text-[16px]">Every treatment begins with a personal consultation. Reach out and we will find the right plan for you.</p>
    <a href="mailto:rhijaesthetics@gmail.com">
      <button type="button" className="font-bold border-[1px] border-white px-6 py-3 rounded-full text-[13px] tracking-[0.15em] hover:bg-white hover:text-palette-2 active:scale-95 transition duration-300">CONTACT US</button>
    </a>
  </div>
);

export default ContactCard;
