import { contact } from '../../constants';
import Picture from '../Picture';

const ContactDetails = () => (
  <div className="px-4 sm:px-8 py-12 sm:py-20 md:p-20 leading-8 w-full lg:w-1/2 text-white flex flex-col relative">
    <Picture
      webp="/imgs/contact-bg.webp"
      src="/imgs/contact-bg.jpg"
      alt="Contact background"
      className="absolute inset-0 w-full h-full object-cover brightness-75"
    />
    <div className="z-10">
      <h3 className="font-sans text-[28px] sm:text-[36px] text-white pb-6 border-b-[1px] border-white/70">
        Contact Us
      </h3>
      <div className="flex flex-col justify-center gap-8 mt-8 lg:mt-[100px]">
        {contact.map(({ name, icon, content, url }) => {
          const ContactIcon = icon;

          return (
            <a key={name} href={url} aria-label={name} className="cursor-pointer group">              <div className="flex flex-row items-center">
                <div className="border-[1px] border-palette-1 bg-white dark:bg-dark-surface rounded-full p-2 mr-4 group-hover:border-white group-hover:bg-palette-1 transition duration-300 group">
                  <ContactIcon size={30} className="text-palette-1 group-hover:text-white dark:group-hover:text-dark-text text-center w-[30px]" />
                </div>
                <p className="text-[14px] mobile:text-[16px] sm:text-lg small-mobile:w-[70vw] sm:w-full break-words">{content}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  </div>
);

export default ContactDetails;
