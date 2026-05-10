import React from 'react';
import { motion } from 'framer-motion';

export default function WelcomeOffer() {
  return (
    <section className="relative w-full h-[80vh] md:h-screen flex items-end lg:items-center overflow-hidden bg-black dark:bg-white">
      {/* Background Image - Grayscale portrait of model with jewelry */}
      <motion.div 
        initial={{ scale: 1.05 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute inset-0 bg-[url('https://images.pexels.com/photos/20647557/pexels-photo-20647557.jpeg')] bg-cover bg-center grayscale contrast-125 opacity-90"
      />
      
      {/* Optional faint gradient to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/30 to-transparent lg:bg-gradient-to-r lg:from-white/90 lg:via-white/40 lg:to-transparent" />

      {/* Content Container positioned bottom-left or center-left */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="relative z-10 p-8 md:p-16 lg:p-24 lg:pl-32 max-w-2xl text-white dark:text-black"
      >
        <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight text-gray-900">
          The Welcome Privilege
        </h2>
        <p className="text-base md:text-lg text-gray-800 font-light mb-10 max-w-md leading-relaxed">
          Begin your collection with 15% off your first purchase
        </p>
        <button className="text-sm tracking-widest uppercase font-medium border-b border-black pb-1 hover:text-gray-500 dark:text-gray-400 hover:border-gray-500 transition-colors">
          Unlock Offer
        </button>
      </motion.div>
    </section>
  );
}
