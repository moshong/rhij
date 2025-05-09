import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../utils/motion'
import styles from '../styles';
import { TypingText, TitleText } from "../components";

const TestimonialCard = ({ name, role, testimonial, index, profileImage }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.3, 0.75)}
    className="bg-white dark:bg-dark-surface rounded-lg shadow-lg p-6 mx-4 my-4 md:w-[380px] flex flex-col"
  >
    <div className="flex items-center mb-4">
      {profileImage ? (
        <img 
          src={profileImage} 
          alt={`${name}'s profile`} 
          className="w-12 h-12 rounded-full object-cover"
        />
      ) : (
        <div className="w-12 h-12 rounded-full bg-palette-2 flex items-center justify-center text-white font-bold text-xl">
          {name.charAt(0)}
        </div>
      )}
      <div className="ml-4">
        <h4 className="font-bold text-lg dark:text-white">{name}</h4>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{role}</p>
      </div>
    </div>
    <div className="mb-4">
      <svg className="text-palette-1 w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
    </div>
    <p className="text-gray-700 dark:text-white flex-grow">{testimonial}</p>
    <div className="flex mt-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  </motion.div>
);

const testimonials = [
  {
    name: "Viktoria Angela",
    role: "Regular Client",
    testimonial: "If you need some self-love and skin care treatment, Rhij Aesthetics should be your go to! Rhij is gentle with your skin. I definitely feel relaxed after my session . 100% recommend 💯💯💯.",
    profileImage: "/imgs/testimonials/client1.jpg"
  },
  {
    name: "Muriel Miller",
    role: "First-time Client",
    testimonial: "Rhij is the best and only aesthetician I trust with my skin. She's very knowledgeable in her craft! Her Korean and Diamond Glow treatments are a must-try, leaving my skin dewy and healthy-looking! I felt very relaxed and rejuvenated during the entire experience.",
    profileImage: "/imgs/testimonials/client2.jpg"
  },
  {
    name: "Livia Mettler ",
    role: "Monthly Member",
    testimonial: "I felt extremely rejuvenated and refreshed getting a diamond facial!! Cannot wait to come back!!",
    profileImage: "/imgs/testimonials/client3.jpg"
  },
  {
    name: "Dianne Urot",
    role: "Special Occasion Client",
    testimonial: "I tried the Korean Facial Glow facial last weekend and it was the best thing! Rhij was very thorough with the steps, guiding me and educating on what will happen which I appreciate. She is also very gentle which makes the facial very calming and relaxing 💕",
    profileImage: "/imgs/testimonials/client4.jpg"
  },
  {
    name: "Pat Cupay ",
    role: "Loyal Client",
    testimonial: "Professional and knowledgeable about services and products! Any questions or concerns you have will be acknowledged and answered to your satisfaction. I got the Diamond Glow Facial with Jelly Mask and LED Light and was satisfied with the process and the result and could feel the difference with my skin. I would definitely come back again and 100% recommend Rhij Aesthetics LLC! 🙌🏼",
    profileImage: "/imgs/testimonials/client5.jpg"
  }
];

const Testimonials = () => (
    <section className='flex flex-col items-center bg-palette-4 dark:bg-dark-bg pt-[100px] pb-[100px]' id='testimonials'>
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`mx-auto flex flex-col items-center`}
        >
            <TypingText title='| Client Stories' textStyles='text-center' />
            <TitleText title={<>What Our Clients Say</>} textStyles='text-center mb-[50px]' />
            
            <div className="flex flex-wrap justify-center max-w-[1200px] px-4">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard 
                  key={testimonial.name}
                  {...testimonial}
                  index={index}
                />
              ))}
            </div>
        </motion.div>
    </section>
);

export default Testimonials;