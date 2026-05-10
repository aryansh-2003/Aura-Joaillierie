import React, { useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ShowcaseSection from '../components/ShowcaseSection';
import CollectionGrid from '../components/CollectionGrid';
import WelcomeOffer from '../components/WelcomeOffer';
import Reviews from '../components/Reviews';
import ContactSection from '../components/ContactSection';
import TreasureChestPromo from '../components/TreasureChestPromo';
import CaratlaneCollections from '../components/CaratlaneCollections';
import ShayaPromo from '../components/ShayaPromo';
import heroVideo from '../assets/heroVideo.mp4';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#fdfbf7] dark:bg-[#050505] text-gray-900 dark:text-gray-100 font-sans antialiased selection:bg-white selection:text-black w-full overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80 z-10 pointer-events-none" />
        
        {/* Animated Background Video */}
        <motion.div 
          className="absolute inset-0 overflow-hidden pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        >
          <video 
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 opacity-100"
          />
        </motion.div>
        
        <div className="relative z-20 text-center flex flex-col items-center">
          <motion.h1 
            className="text-7xl md:text-9xl font-serif tracking-tighter uppercase mb-4 text-white drop-shadow-lg"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Aura <span className="italic font-light opacity-90">Joaillerie</span>
          </motion.h1>
          <motion.p 
            className="text-sm md:text-lg tracking-[0.3em] uppercase text-gray-200 drop-shadow-md"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          >
            The Pinnacle of Fine Jewelry
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
            className="mt-12"
          >
            <div 
              onClick={() => navigate('/collection')}
              className="inline-block px-10 py-4 border border-white text-white text-xs tracking-[0.25em] uppercase hover:bg-white hover:text-black transition-colors duration-500 backdrop-blur-sm bg-black/20 cursor-pointer pointer-events-auto"
            >
              Discover The Collection
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 z-20 flex flex-col items-center gap-2 opacity-60 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <span className="text-xs tracking-widest uppercase text-white">Scroll to Explore</span>
          <div className="w-[1px] h-12 bg-white/40 overflow-hidden relative">
            <div className="w-full h-full bg-white origin-top animate-[slideDown_1.5s_ease-in-out_infinite]" />
          </div>
        </motion.div>
      </section>

      {/* 2. Signature Showcase (Pinned Scroll Sequence) */}
      <ShowcaseSection />

      {/* Promotional & Collection Sections based on User Reference */}
      <TreasureChestPromo />
      <CaratlaneCollections />
      <ShayaPromo />

      {/* 3. The Collection Grid (CSS 3D Perspective) */}
      <CollectionGrid />

      {/* 4. Welcome Offer Banner */}
      <WelcomeOffer />

      {/* 5. User Reviews (Framer Motion Stagger + Tilt) */}
      <Reviews />

      {/* 6. Contact Section */}
      <ContactSection />

    </div>
  );
}
