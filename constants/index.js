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
      img: '/imgs/facial.png',
      alt: 'Corrective Facial Image',
    },
    img: '/imgs/hero-pattern-5',
    alt: 'Corrective facial treatment',
    subtitle: 'Customized Treatment',
    title: 'Classic Facial Cleansing',
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
      img: '/imgs/treat.png',
      alt: 'Chemical Peel Image',
    },
    img: '/imgs/hero-pattern-5',
    alt: 'Chemical peel facial treatment with elegant background',
    subtitle: 'Skin Resurfacing',
    title: 'Diamond Glow Facial',
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
      img: '/imgs/results.png',
      alt: 'LED Therapy Image',
    },
    img: '/imgs/hero-pattern-5',
    alt: 'Advanced LED therapy treatment',
    subtitle: 'Light-Based Healing',
    title: 'Photodynamic Therapy',
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
      img: '/imgs/products.png',
      alt: 'Bespoke Treatment Image',
    },
    img: '/imgs/hero-pattern-5',
    alt: 'Bespoke aesthetic treatment',
    subtitle: 'Tailored Excellence',
    title: 'Korean Luxury Facial',
    text: 'Our Bespoke Aesthetic Treatments represent the pinnacle of personalized skincare. These comprehensive sessions begin with in-depth consultation and analysis to create a custom protocol addressing your unique skin concerns and goals. \nCombining elements from multiple modalities—including advanced cleansing techniques, specialized masks, targeted serums, and innovative technologies—these treatments deliver exceptional results. As a specialist with extensive training and experience, I continuously update my techniques to incorporate the latest advancements in aesthetic medicine, ensuring you receive world-class care designed specifically for your skin\'s needs.',
    tags: [
      'Custom Protocols',
      'Multi-Modality',
      'Expert Analysis',
      'Premium Experience',
    ]
  },
  {
    icon: {
      img: '/imgs/shop.png',
      alt: 'IV Vitamin Therapy Image',
    },
    img: '/imgs/hero-pattern-5',
    alt: 'Luxury IV vitamin therapy treatment',
    subtitle: 'Wellness Infusions',
    title: 'Luxury IV & IM Vitamin Therapy',
    text: 'Elevate your wellness with personalized vitamin infusions designed to restore energy, boost immunity, and enhance beauty — all in a serene, medically supervised setting. \nOur Signature Offerings include Hydration & Energy Drips, Immunity & Recovery Blends, Beauty & Anti-Aging Injections, and Weight Support & Detox Shots. Each treatment is expertly curated, clinically administered, and exclusively designed for your unique needs.As a Board certified Nurse Practitioner in Family Medicine, I ensure safe, effective delivery of premium vitamin therapies that revitalize from within.',
    tags: [
      'Hydration & Energy',
      'Immunity Boost',
      'Beauty Enhancement',
      'Medical-Grade Vitamins',
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
    date: 'April 15, 2025',
    imgUrl: '/imgs/facial.png',
    title: 'The Benefits of Regular Facials',
    subtitle: 'Why your skin needs professional care',
    sections: [
      {
        heading: '',
        content: 'Regular facial treatments are essential for maintaining healthy, radiant skin. Professional facials offer deep cleansing, exfoliation, and nourishment that home care alone cannot provide. In this article, we explore the many benefits of incorporating regular facial treatments into your skincare routine.'
      },
      {
        heading: '1. Deep Cleansing',
        content: 'Even with a thorough home cleansing routine, your skin accumulates pollutants, excess oils, and debris that can clog pores. Professional facials provide a deeper level of cleansing that removes these impurities, preventing breakouts and promoting clearer skin.'
      },
      {
        heading: '2. Professional Exfoliation',
        content: 'Professional-grade exfoliation removes dead skin cells more effectively than at-home products, revealing fresher, brighter skin beneath. This process also improves product penetration, allowing your skincare investments to work more efficiently.'
      },
      {
        heading: '3. Expert Analysis',
        content: 'A skilled aesthetician can analyze your skin condition and identify concerns you might not notice. This personalized assessment leads to targeted treatments that address your unique needs and skin goals.'
      }
    ]
  },
  {
    id: 'blog-2',
    date: 'March 30, 2025',
    imgUrl: '/imgs/treat.png',
    title: 'Understanding Chemical Peels',
    subtitle: 'A guide to skin resurfacing treatments',
    sections: [
      {
        heading: '',
        content: 'Chemical peels are powerful skin resurfacing treatments that can transform your complexion. From addressing fine lines to improving texture, these treatments offer numerous benefits. This guide explains the different types of peels and how they can enhance your skin\'s appearance.'
      },
      {
        heading: '1. Types of Chemical Peels',
        content: 'Chemical peels come in various strengths and formulations. Superficial peels gently exfoliate the outer layer of skin, medium peels reach the middle layers to address moderate concerns, and deep peels penetrate to the deeper dermal layers for more significant transformation.'
      },
      {
        heading: '2. Addressing Multiple Concerns',
        content: 'One of the greatest advantages of chemical peels is their ability to improve multiple skin concerns simultaneously, including fine lines, uneven texture, hyperpigmentation, and mild scarring.'
      },
      {
        heading: '3. The Recovery Process',
        content: 'Understanding the recovery process is essential when considering a chemical peel. While superficial peels require minimal downtime, deeper treatments may necessitate several days of healing. Your skin care professional will guide you through proper post-peel care to ensure optimal results.'
      }
    ]
  }
];

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
    href: 'https://www.facebook.com/profile.php?id=61559966333210',
  },
  {
    name: 'linkedin',
    icon: FaLinkedinIn,
    href: 'https://www.linkedin.com/in/rhij-babatido-arnp-fnp-c-fnp-bc-ccm-4a2450209/',
  },
  {
    name: 'email',
    icon: MdEmail,
    href: 'mailto:rhijaesthetics@gmail.com'
  }
];

export const contact = [
  {
    name: 'location',
    icon: TiLocation,
    content: 'Rhij Aesthetics and Skin Care,Cedar Rapids, Iowa ',
    url: 'https://www.google.com/maps/place/Cedar+Rapids,+IA,+USA/@41.9692625,-91.8290466,11z/data=!3m1!4b1!4m6!3m5!1s0x87e45f7aa02f4251:0x55ee60432ce6ddc0!8m2!3d41.9778795!4d-91.6656232!16zL20vMHQwbjU?entry=ttu&g_ep=EgoyMDI1MDUwNS4wIKXMDSoASAFQAw%3D%3D'
  },
  {
    name: 'email',
    icon: MdEmail,
    content: 'rhijaesthetics@gmail.com',
    url: 'mailto:rhijaesthetics@gmail.com'
  },
  {
    name: 'phone',
    icon: FaPhoneAlt,
    content: ' 319-305-8181',
    url: 'tel: 319-305-8181'
  }
];

export const disclaimer = "Disclaimer: Our services and products have not been evaluated by the FDA and are not intended to diagnose, treat, cure, or prevent any disease. Information provided is for educational purposes only and not medical advice. Please consult your physician before starting any treatment. All therapies are formulated for healthy adults by Rhij Aesthetics, LLC and any therapy designations are for marketing purposes only.";
