'use client';

import { Header, Footer, Preloader } from '../components';
import { Hero, About, NewsUpdates, Services, Explore, WhyChooseUs, Blog, Reviews, FollowUs, Testimonials, Merchandise } from '../sections';
import { useState, useRef, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import dynamic from 'next/dynamic';

// Dynamically import BackToTop with SSR disabled
const BackToTop = dynamic(() => import('../components/BackToTop'), { ssr: false });

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
    <div className="bg-palette-5 dark:bg-dark-bg w-full">
      {/* Preloader */}
      <Preloader />
      
      <div className={`${overlay && 'fixed inset-0 z-20 bg-[rgba(0,0,0,0.3)] backdrop-blur-[2px]'} transition duration-500`} />
     
      <div className="text-gray-500 dark:text-dark-text font-sans" ref={pageRef}>        <Header setOverlay={() => setOverlay(!overlay)}/>
        <Hero />
        <About />
        <NewsUpdates />
        <Services />
        <WhyChooseUs /> 
        <Explore />
        <Merchandise />
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
