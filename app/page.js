'use client';

import { Header, Footer, BackToTop, Preloader } from '../components';
import { Hero, About, Services, Explore, WhyChooseUs, Blog, Reviews, FollowUs, Testimonials } from '../sections';
import { useState, useRef, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';

const Page = () => {
  const pageRef = useRef();
  const [overlay, setOverlay] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Allow the preloader to show for a minimum time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-palette-5 w-full">
      {/* Preloader */}
      <Preloader />
      
      <div className={`${overlay && 'fixed inset-0 z-20 bg-[rgba(0,0,0,0.3)] backdrop-blur-[2px]'} transition duration-500`} />
     
      <div className="text-gray-500 font-sans" ref={pageRef}>
        <Header setOverlay={() => setOverlay(!overlay)}/>
        <Hero />
        <About /> 
        <Services />
        <WhyChooseUs /> 
        <Explore />
        {/* <Blog /> */}
        {/* <Reviews /> */}
        <Testimonials />
        {/* <FollowUs /> */}
        <BackToTop pageRef={pageRef} />
        <Footer />
        <Analytics />
      </div>
    </div>
  )
};

export default Page;
