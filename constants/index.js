import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { TiLocation } from 'react-icons/ti';
import { FaPhoneAlt } from 'react-icons/fa'

export const navbar = [
  {
    name: 'Home',
    path: 'home',
  },
  {
    name: 'About',
    path: 'about',
  },
  {
    name: 'Services',
    path: 'services',
  },
  {
    name: 'Gallery',
    path: 'gallery',
  },
  {
    name: 'Testimonials',
    path: 'testimonials',
  },
]

export const heroBtns = [
  {
    name: 'Our Treatments',
    path: 'services',
  },
  {
    name: 'Book Now',
    path: 'https://book.carepatron.com/Rhij-Aesthetics-and-Skin-Care/Rhij?p=PKRmBx5QS4CLC2nWnCR2Jg&s=Q7znKVgM',
    external: true,
  },
]

export const services = [
  {
    icon: {
      img: '/icons/cleansing-facial-icon.svg',
      alt: 'Corrective Facial Icon',
    },
    img: '/imgs/hero-pattern-5',
    alt: 'Corrective facial treatment',
    subtitle: 'Customized Treatment',
    title: 'Corrective Facials',
    text: 'Our Corrective Facials are personalized treatments designed to address your specific skin concerns. Using clinical-grade products and advanced techniques, these transformative facials target issues like acne, hyperpigmentation, aging, and sensitivity. \nAs a Registered Nurse and board-certified Nurse Practitioner, I combine medical expertise with aesthetic knowledge to deliver results-driven treatments. Each facial includes thorough analysis, deep cleansing, exfoliation, targeted treatment, and hydration to restore your skin\'s health and radiance.',
    tags: [
      'Skin Analysis',
      'Clinical-Grade Products',
      'Personalized Care',
      'Results-Driven',
    ]
  },
  {
    icon: {
      img: '/icons/diamond-glow-icon.svg',
      alt: 'Chemical Peel Icon',
    },
    img: '/imgs/chemical-peel',
    alt: 'Chemical peel facial treatment',
    subtitle: 'Skin Resurfacing',
    title: 'Chemical Peels',
    text: 'Our professional Chemical Peels offer controlled exfoliation to reveal fresher, more youthful skin beneath the surface. These treatments are carefully formulated to address multiple concerns including fine lines, uneven texture, sun damage, and acne scarring. \nUsing various strengths and formulations tailored to your skin type and concerns, our chemical peels stimulate cell renewal and collagen production. With my extensive training across the US, Philippines, and Hong Kong, I provide safe, effective treatments with minimal downtime and maximum results for a smoother, brighter complexion.',
    tags: [
      'Exfoliation',
      'Cell Renewal',
      'Texture Improvement',
      'Brightness',
    ]
  },
  {
    icon: {
      img: '/icons/led-therapy-icon.svg',
      alt: 'LED Therapy Icon',
    },
    img: '/imgs/led-treatment',
    alt: 'Advanced LED therapy treatment',
    subtitle: 'Light-Based Healing',
    title: 'Advanced LED Therapy',
    text: 'Our Advanced LED Therapy harnesses the power of specific light wavelengths to stimulate cellular processes and address various skin concerns without downtime. Different colored lights target specific issues: red light stimulates collagen and reduces inflammation, blue light fights acne-causing bacteria, and yellow light improves skin tone and reduces redness. \nThis cutting-edge, non-invasive treatment can be performed as a standalone service or integrated with other facial treatments to enhance results. As your dedicated skin care professional, I customize each session to your specific needs for optimal skin health and visible improvement.',
    tags: [
      'Non-Invasive',
      'Collagen Stimulation',
      'Acne Treatment',
      'Skin Rejuvenation',
    ]
  },
  {
    icon: {
      img: '/icons/korean-facial-icon.svg',
      alt: 'Bespoke Treatment Icon',
    },
    img: '/imgs/bespoke-treatment',
    alt: 'Bespoke aesthetic treatment',
    subtitle: 'Tailored Excellence',
    title: 'Bespoke Aesthetic Treatments',
    text: 'Our Bespoke Aesthetic Treatments represent the pinnacle of personalized skincare. These comprehensive sessions begin with in-depth consultation and analysis to create a custom protocol addressing your unique skin concerns and goals. \nCombining elements from multiple modalities—including advanced cleansing techniques, specialized masks, targeted serums, and innovative technologies—these treatments deliver exceptional results. As a specialist with extensive training and experience, I continuously update my techniques to incorporate the latest advancements in aesthetic medicine, ensuring you receive world-class care designed specifically for your skin\'s needs.',
    tags: [
      'Custom Protocols',
      'Multi-Modality',
      'Expert Analysis',
      'Premium Experience',
    ]
  }
];

export const guarantee = [
  {
    title: 'Medical Expertise',
    text: 'As a Registered Nurse and board-certified Nurse Practitioner with over a decade of experience, I bring clinical knowledge and precision to every aesthetic treatment.',
  },
  {
    title: 'Global Training',
    text: 'My comprehensive training at prestigious institutions across the US, Philippines, and Hong Kong ensures you receive world-class treatments incorporating the latest advancements in aesthetic medicine.',
  },
  {
    title: 'Personalized Care',
    text: 'Every treatment is meticulously tailored to your unique skin type and concerns. I take the time to understand your aesthetic goals and create customized solutions that deliver exceptional results.',
  },
  {
    title: 'Premium Products',
    text: 'I use only the highest quality, medical-grade products that are clinically proven to be effective and safe for all skin types, ensuring optimal results for every client.',
  }
];

export const galleries = [
  {
    id: 'gallery-1',
    imgUrl: '/imgs/facial.png',
    title: 'Facials',
  },
  {
    id: 'gallery-2',
    imgUrl: '/imgs/treat.png',
    title: 'Treatments',
  },
  {
    id: 'gallery-3',
    imgUrl: '/imgs/results.png',
    title: 'Results',
  },
  {
    id: 'gallery-4',
    imgUrl: '/imgs/products.png',
    title: 'Products',
  },
  {
    id: 'gallery-5',
    imgUrl: '/imgs/shop.png',
    title: 'Clinic',
  },
];

export const blog = [
  {
    id: 'blog-1',
    date: 'May 20, 2023',
    imgUrl: '/imgs/vertical-garden.jpg',
    title: 'Making The Most of Small Spaces',
    subtitle: 'Landscaping Ideas for Compact Yards',
    sections: [
      {
        heading: '',
        content: 'Welcome to our comprehensive guide on landscaping ideas for compact yards. If you have a small outdoor space, don\'t fret! With the right design strategies and creative thinking, you can transform your limited yard into a beautiful and functional oasis.In this article, we\'ll share expert tips and inspiring ideas to maximize the potential of small spaces. Whether you\'re dealing with a tiny backyard or a narrow strip of land, these landscaping solutions will help you make the most of what you have.',
      },
      {
        heading: '1. Plan with Purpose',
        content: 'Before diving into any landscaping project, it\'s crucial to plan with purpose.Assess your available space and consider how you want to use it. Do you envision a cozy seating area, a vibrant garden, or a combination of both? Understanding your goals will guide your design decisions and ensure efficient space utilization. Sketch a rough layout and take measurements to visualize how different elements can fit together harmoniously. Remember to consider the scale and proportions of features to maintain a balanced and inviting atmosphere.',
      },
      {
        heading: '2. Create Layers and Levels',
        content: 'One effective way to maximize a small yard is by creating layers and levels. Varying the heights of your landscape elements adds visual interest and gives the illusion of more space. For instance, construct raised beds or planters along the perimeter, filling them with colorful flowers and foliage. Introduce vertical elements such as trellises, pergolas, or hanging baskets to draw the eye upward. These vertical features not only provide additional planting space but also add depth to the overall design. Utilize different flooring materials, like stepping stones or decking, to demarcate distinct zones and create a sense of separation within the yard.',
      },
      {
        heading: '3. Opt for Space-Saving Plant Selections',
        content: `When choosing plants for a small yard, opt for space-saving varieties that won't overwhelm the space. Select compact shrubs, dwarf trees, and petite perennials that maintain their shape and size without sprawling out of control. Consider using ornamental grasses or tall, slender plants to provide vertical interest while occupying minimal ground space. Utilize hanging planters or vertical gardens for trailing or climbing plants to maximize vertical greenery. Additionally, incorporating container gardens allows for mobility and flexibility, letting you easily rearrange or replace plants as desired.`,
      },
      {
        heading: '4. Embrace Vertical Gardening',
        content: `Vertical gardening is a game-changer for small yards. Utilize vertical surfaces like walls, fences, or even balcony railings to create stunning green walls or herb gardens. Install modular vertical garden systems or build custom trellises to support climbing plants. This not only saves valuable ground space but also adds a lush, vibrant backdrop to your outdoor area. Consider using pocket planters or vertical hanging pouches to grow herbs, succulents, or trailing flowers, adding a touch of greenery without sacrificing space. Vertical gardening not only maximizes your planting capacity but also adds a visually appealing focal point to the landscape.`,
      },
      {
        heading: '5. Think Multi-Functional',
        content: `To make the most of a compact yard, think multi-functional when choosing landscape elements. Incorporate furniture that doubles as storage, such as benches with built-in compartments or ottomans with hidden storage space. Use raised beds or seating walls with integrated planters to combine seating and greenery. Designate areas that can serve multiple purposes, such as a patio space that can transform into an outdoor dining area or a play area for children. By maximizing the functionality of each element, you can optimize the use of your limited space.`,
      },
      {
        heading: '',
        content: `With these landscaping ideas for compact yards, you can create a stunning outdoor space regardless of its size. By planning with purpose, utilizing layers and levels, selecting space-saving plants, embracing vertical gardening, and incorporating multi-functional elements, you'll transform your small yard into a beautiful and functional haven. Remember, small spaces can still make a big impact with thoughtful design and creativity. Get inspired, unleash your imagination, and enjoy the process of transforming your limited yard into a personal oasis.`,
      }
    ],
  },
  {
    id: 'blog-2',
    date: 'May 15, 2023',
    imgUrl: '/imgs/sprinkler.jpg',
    title: "Mastering the Basics: Lawn Care 101",
    subtitle: "A Comprehensive Guide to Achieving a Healthy and Vibrant Lawn",
    sections: [
      {
        heading: "",
        content: "Maintaining a lush and vibrant lawn requires proper care and attention. From mowing to watering and fertilizing, understanding the basics of lawn care is essential for achieving a beautiful outdoor space. In this comprehensive guide, we will take you through the fundamental practices of lawn care, providing expert tips and insights to help you achieve a healthy and vibrant lawn that will be the envy of the neighborhood."
      },
      {
        heading: "1. Mowing",
        content: "Mowing your lawn correctly is crucial for its overall health and appearance. Set your mower blades to the appropriate height, typically between 2.5 to 3 inches. Regularly mow the grass, ensuring you never remove more than one-third of the blade's height in a single mowing session. This practice prevents stress on the grass and promotes strong root development."
      },
      {
        heading: "2. Watering",
        content: "Proper watering is essential for the health of your lawn. Water deeply and infrequently, aiming for approximately 1 inch of water per week, including rainfall. Watering deeply encourages the grass roots to grow deeper into the soil, making the lawn more resilient to drought. Watering in the early morning helps minimize water evaporation and allows the grass to dry before evening, reducing the risk of fungal diseases."
      },
      {
        heading: "3. Fertilizing",
        content: "Regular fertilization provides the necessary nutrients for your lawn to thrive. Begin by conducting a soil test to determine the specific nutrient needs of your lawn. Choose a high-quality, slow-release fertilizer that matches those requirements. Apply the fertilizer according to the recommended schedule, typically in early spring and fall. Avoid over-fertilizing, as it can lead to excessive growth and weaken the grass."
      },
      {
        heading: "4. Weed Control",
        content: "Weeds can quickly invade a lawn, competing with grass for resources and spoiling its appearance. Implement an effective weed control strategy, which includes regular mowing, proper watering, and applying pre-emergent herbicides in early spring to prevent weed seeds from germinating. For existing weeds, use selective herbicides that target specific weed types while sparing the grass."
      },
      {
        heading: "5. Aeration",
        content: "Compacted soil can hinder the healthy growth of grass roots. Regularly aerate your lawn, especially in high-traffic areas, to alleviate soil compaction. Core aerators remove small plugs of soil, allowing air, water, and nutrients to penetrate the root zone. This process promotes better nutrient absorption and root development."
      },
      {
        heading: "6. Overseeding",
        content: "Over time, lawns may develop thin or bare patches. Overseeding is the process of spreading grass seed over existing turf to fill in these areas and promote a denser lawn. Before overseeding, prepare the soil by raking and removing debris. Choose a grass seed blend that matches your existing lawn and follow the recommended seeding rates. Water the overseeded areas regularly to keep the soil moist for optimal seed germination."
      },
      {
        heading: "7. Pest and Disease Management",
        content: "Monitor your lawn for signs of pests and diseases, such as brown patches, chewed grass blades, or unusual discoloration. Proper cultural practices, such as regular mowing, watering, and fertilizing, contribute to the overall health of the lawn and make it more resistant to pests and diseases. If necessary, consult with a professional for targeted pest or disease control measures."
      },
      {
        heading: "",
        content: "By mastering the basics of lawn care, you can transform your outdoor space into a healthy and vibrant oasis. Regular mowing, proper watering and fertilizing, effective weed control, aeration, overseeding, and vigilant pest and disease management are the keys to achieving a beautiful lawn. Remember, consistency and patience are essential. With dedication and adherence to these practices, you can enjoy a lush and inviting lawn that becomes the pride of your home."
      },
    ],
  }
]

export const testimonials = [
  {
    name: "Viktoria Angela",
    role: "Regular Client",
    testimonial: "If you need some self-love and skin care treatment, Rhij Aesthetics should be your go to! Rhij is gentle with your skin. I definitely feel relaxed after my session . 100% recommend 💯💯💯."
  },
  {
    name: "Muriel Miller",
    role: "First-time Client",
    testimonial: "Rhij is the best and only aesthetician I trust with my skin. She’s very knowledgeable in her craft! Her Korean and Diamond Glow treatments are a must-try, leaving my skin dewy and healthy-looking! I felt very relaxed and rejuvenated during the entire experience."
  },
  {
    name: "Livia Mettler ",
    role: "Monthly Member",
    testimonial: "I felt extremely rejuvenated and refreshed getting a diamond facial!! Cannot wait to come back!!"
  },
  {
    name: "Dianne Urot",
    role: "Special Occasion Client",
    testimonial: "I tried the Korean Facial Glow facial last weekend and it was the best thing! Rhij was very thorough with the steps, guiding me and educating on what will happen which I appreciate. She is also very gentle which makes the facial very calming and relaxing 💕"
  },
  {
    name: "Pat Cupay ",
    role: "Loyal Client",
    testimonial: "Professional and knowledgeable about services and products! Any questions or concerns you have will be acknowledged and answered to your satisfaction. I got the Diamond Glow Facial with Jelly Mask and LED Light and was satisfied with the process and the result and could feel the difference with my skin. I would definitely come back again and 100% recommend Rhij Aesthetics LLC! 🙌🏼"
  }
];

export const socials = [
  {
    name: 'instagram',
    icon: BsInstagram,
    href: 'https://www.instagram.com/rhij.aesthetics/',
  },
  {
    name: 'facebook',
    icon: FaFacebookF,
    href: 'https://www.facebook.com/rhijaesthetics',
  },
  {
    name: 'linkedin',
    icon: FaLinkedinIn,
    href: '#',
  },
  {
    name: 'email',
    icon: MdEmail,
    href: 'mailto:rhij@rhijaesthetics.com'
  }
];

export const contact = [
  {
    name: 'location',
    icon: TiLocation,
    content: 'Rhij Aesthetics and Skin Care, Suite 105',
    url: 'https://goo.gl/maps/uWJAxEnVrjFuUeSH7'
  },
  {
    name: 'email',
    icon: MdEmail,
    content: 'rhij@rhijaesthetics.com',
    url: 'mailto:rhij@rhijaesthetics.com'
  },
  {
    name: 'phone',
    icon: FaPhoneAlt,
    content: '(555) 123-4567',
    url: 'tel:5551234567'
  }
];
