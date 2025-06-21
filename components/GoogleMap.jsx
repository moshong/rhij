'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const GoogleMap = ({ location = '1921 51st St NE Suite 4, Cedar Rapids, IA 52402', height = '300px', zoom = 16, showMarker = true }) => {  
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapUrl, setMapUrl] = useState('');
    useEffect(() => {  // Create the Google Maps URL
    const encodedLocation = encodeURIComponent(location);
    
    // Using Street View - these coordinates are for the RHIJ Aesthetics location in Cedar Rapids
    const latLng = "42.0291396,-91.6655485";
    const heading = "165"; // Direction camera is pointing (165 degrees = south-southeast)
    const pitch = "10"; // Slightly upward angle
    const fov = "80"; // Wide field of view
    
    // Try to use a pre-captured Street View panorama
    // This is a panorama ID from Google Street View near this location
    const panoramaId = "CAoSLEFGMVFpcE9oU1VjdUNNTEV1akpZZm1GMHpCM2c0WmJwLTcwdlNlbTdHMkxH";
    
    // Street View embed URL with panorama ID
    const streetViewUrl = `https://www.google.com/maps/embed?pb=!4v1687373368996!6m8!1m7!1s${panoramaId}!2m2!1d${latLng.split(',')[0]}!2d${latLng.split(',')[1]}!3f${heading}!4f${pitch}!5f${fov}`;
    
    // Regular map as fallback
    const regularMapUrl = `https://maps.google.com/maps?q=${encodedLocation}&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`;
    
    // Use Street View URL
    setMapUrl(streetViewUrl);
    
    // If you want a fallback option, you can uncomment this code
    /*
    // Check if Street View is available at this location (would require additional code)
    const isStreetViewAvailable = true; // This would need real verification in production
    setMapUrl(isStreetViewAvailable ? streetViewUrl : regularMapUrl);
    */
    
    // Set loaded after a short delay to ensure animation works
    const timer = setTimeout(() => {
      setMapLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [location, zoom]);
  return (
    <motion.div
      variants={fadeIn('up', 'tween', 0.2, 1)}
      initial="hidden"
      animate={mapLoaded ? "show" : "hidden"}
      className="rounded-lg overflow-hidden shadow-md w-full relative"
      style={{ height }}
    >
      <div className="absolute top-2 right-2 z-10 bg-palette-2 text-white text-xs px-2 py-1 rounded-md opacity-80">
        Street View
      </div>
      
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Street View of RHIJ Aesthetics"
        className="rounded-lg"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
      />
      
      {/* Link to full Google Maps */}
      <a 
        href="https://www.google.com/maps/place/1921+51st+St+NE+Suite+4,+Cedar+Rapids,+IA+52402"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-2 right-2 z-10 bg-white dark:bg-palette-1 text-palette-1 dark:text-white text-xs px-2 py-1 rounded-md opacity-80 hover:opacity-100 transition-opacity"
      >
        View Larger Map
      </a>
    </motion.div>
  );
};

export default GoogleMap;
