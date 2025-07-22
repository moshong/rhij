import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

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
    name: 'News',
    path: 'news',
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
    name: 'Merchandise',
    path: 'merchandise',
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
    text: 'A deep-cleansing treatment that purifies, exfoliates, and refreshes the skin. Includes double cleansing, gentle exfoliation, extractions, and a customized mask for a clear, healthy glow.\n Ideal for all skin types and great for routine skin maintenance.',
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
    text: 'Reveal smoother, brighter, and more youthful skin with our Diamond Glow Facial — a dual-action treatment combining diamond-tip microdermabrasion for deep exfoliation and ultrasonic infusion to deliver peptide-rich serums deep into the skin. \nThis treatment boosts cell turnover, stimulates collagen, and improves skin texture, leaving your skin refined, firm, and radiant.',
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
    text: 'Unlock the secret to radiant, glass-like skin.\n Indulge in the ultimate skin renewal experience with our Korean Luxury Facial — our renowned treatment inspired by the elegance of K-beauty. This facial combines advanced technologies like photodynamic therapy, cryofacial, dermabrasion, and ultrasonic infusion with peptide-rich serums to deeply rejuvenate and restore your skin. \n Perfect for all skin types, this treatment enhances collagen production, refines texture, reduces fine lines and pores, and leaves your skin visibly lifted, radiant, and balanced.',
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
  },  {
    name: 'linkedin',
    icon: FaLinkedinIn,
    href: 'https://www.linkedin.com/in/rhij-babatido-arnp-fnp-c-fnp-bc-ccm-4a2450209/',
  },
  {
    name: 'email',
    icon: FaEnvelope,
    href: 'mailto:rhijaesthetics@gmail.com'
  }
];

export const contact = [
  {
    name: 'location',
    icon: FaMapMarkerAlt,
    content: '1921 51st St NE Suite 4, Cedar Rapids, IA 52402, United States',
    url: 'https://www.google.com/maps/dir//1921+51st+St+NE+Suite+4,+Cedar+Rapids,+IA+52402,+United+States/@42.0291101,-91.7479493,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x87e4f1ffb74c59c5:0x4be463182e5d0dfe!2m2!1d-91.6655485!2d42.0291396?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D'
  },
  {
    name: 'email',
    icon: FaEnvelope,
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

export const merchandiseItems = [
  {
    id: 'merch-1',
    title: 'Premium Embroidered Cap',
    subtitle: 'Adjustable, 100% Cotton',
    imgUrl: '/Logos/rhij1.jpeg',
    price: 25.00,
    category: 'Apparel',
    colors: ['#D0CAB2', '#92657A', '86785F'],
    description:  'Stay effortlessly chic with our signature aesthetic clinic cap — where beauty meets comfort. Perfect for post-treatment glow or everyday elegance.',
  },
   {
    id: 'merch-2',
    title: 'Premium Embroidered Cap',
    subtitle: 'Adjustable, 100% Cotton',
    imgUrl: '/Logos/rhij2.jpeg',
    price: 25.00,
    category: 'Apparel',
    colors: ['#D0CAB2', '#92657A', '86785F'],
    description: 'Show your love for nature with our premium adjustable cap featuring the By The Sea Landscaping logo. Made from 100% breathable cotton, perfect for sunny days in the garden.',
  },
   {
    id: 'merch-3',
    title: 'Premium Logo Cap',
    subtitle: 'Adjustable, 100% Cotton',
    imgUrl: '/Logos/rhij3.jpeg',
    price: 25.00,
    category: 'Apparel',
    colors: ['#D0CAB2', '#92657A', '86785F'],
    description: 'Bold and stylish, our DTF-printed cap adds a modern edge to your beauty routine — perfect for everyday confidence and flair.',
  },
  {
    id: 'skincare-1',
    title: 'Rhij Aesthetics Plumping Peptide Lip Gloss',
    subtitle: 'with Peppermint, Vitamin E & Blackberry',
    imgUrl: '/Logos/lip.jpeg',
    price: 18.00,
    category: 'Skincare',
    description: 'Get fuller, softer lips with a high-shine gloss that does more than just look pretty. Infused with peptides to support natural collagen, peppermint oil for a refreshing tingle and instant plump, vitamin E to nourish, and blackberry extract for antioxidant protection. Wear it alone or over your favorite lip color for a juicy finish. 💄 Plumps & hydrates 🍃 Fresh peppermint tingle 🍇 Antioxidant-rich shine with a hint of berry',
  },
  {
    id: 'skincare-2',
    title: 'Rhij Aesthetics Brightening Face Serum',
    subtitle: 'with Green Tea, Lemon Balm, Resveratrol & Alpha Arbutin',
    imgUrl: '/Logos/face.jpg',
    price: 28.00,
    category: 'Skincare',
    description: 'Reveal your skin’s natural radiance with this antioxidant-rich brightening serum. Powered by green tea and lemon balm to calm and protect, resveratrol to fight environmental stressors, and alpha arbutin to target dark spots and even out skin tone. Lightweight, fast-absorbing, and gentle enough for daily use. 🍋 Fades dark spots & hyperpigmentation 🌿 Calms redness and inflammation ✨ Boosts glow and clarity without irritation',
  },
  {
    id: 'skincare-3',
    title: 'Rhij Aesthetics Advanced Eye Serum',
    subtitle: 'with Vitamin K, Peptides & Fruit Extracts',
    imgUrl: '/Logos/eyeserum.jpeg',
    price: 28.00,
    category: 'Skincare',
    description: 'A targeted treatment designed to visibly reduce dark circles, puffiness, and fine lines around the delicate eye area. Formulated with Vitamin K to brighten and improve circulation, skin-loving peptides to support firmness, and a blend of antioxidant-rich fruit extracts to nourish and protect. 🍇 Brightens tired eyes 💪 Firms & smooths fine lines 🌿 Gentle yet powerful for daily use',
  },
  {
    id: 'skincare-4',
    title: 'Rhij Aesthetics Hydrating Face Moisturizer',
    subtitle: 'with Aloe, Chamomile & Hyaluronic Acid',
    imgUrl: '/Logos/moisturizer.jpeg',
    price: 35.00,
    category: 'Skincare',
    description: "A lightweight, non-greasy moisturizer that delivers deep hydration and lasting comfort. Powered by hyaluronic acid to lock in moisture, aloe vera to soothe and cool, and chamomile extract to calm sensitive or irritated skin. Leaves your skin feeling soft, smooth, and balanced—never heavy or sticky. \n🌿 Calms & hydrates stressed skin \n💧 Boosts moisture retention \n✨ Ideal for all skin types, especially sensitive or dry",
  },
  {
    id: 'skincare-5',
    title: 'Rhij Aesthetics Cucumber Daily Cleanser',
    subtitle: 'with Niacinamide & White Willow Bark',
    imgUrl: '/Logos/cucumber.jpeg',
    price: 28.00,
    category: 'Skincare',
    description: ' refreshing, gentle foaming cleanser that calms, clears, and balances. Infused with cucumber extract for soothing hydration, niacinamide to brighten and refine pores, and white willow bark (a natural source of salicylic acid) to gently exfoliate and clarify. Perfect for daily use and all skin types—especially oily, combination, or breakout-prone skin.  \n🧼 Cleanse without stripping 🌱 Calm redness & irritation \n ✨ Reveal clearer, brighter skin',
  }
];

// Add merchandise categories
export const merchandiseCategories = [
  { name: 'All', value: 'all' },
  { name: 'Apparel', value: 'Apparel' },
  { name: 'Skincare', value: 'Skincare' }
];
