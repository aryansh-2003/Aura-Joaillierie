import React from 'react';
import { motion } from 'framer-motion';
import butterflyJewelry from '../assets/butterfly_jewelry.png';
import leherJewelry from '../assets/leher_jewelry.png';
import anantaJewelry from '../assets/ananta_jewelry.png';
import swirlJewelry from '../assets/swirl_jewelry.png';

const collections = [
  {
    title: "BUTTERFLY",
    subtitle: "The Spirit of You",
    image: butterflyJewelry,
    titleFont: "font-serif uppercase tracking-widest text-2xl md:text-3xl text-[#3d1a4d]",
    subtitleFont: "font-sans text-xs md:text-sm text-[#3d1a4d] opacity-90 mt-1 font-medium"
  },
  {
    title: "Leher",
    subtitle: "The dance of waves",
    image: leherJewelry,
    titleFont: "font-serif italic text-4xl md:text-5xl text-[#185e70]",
    subtitleFont: "font-sans text-xs md:text-sm text-[#185e70] opacity-90 mt-1 font-medium"
  },
  {
    title: "ananta",
    subtitle: "22KT jewellery lit with diamonds",
    image: anantaJewelry,
    titleFont: "font-serif lowercase text-4xl md:text-5xl text-[#f3ebf5]",
    subtitleFont: "font-sans text-[10px] md:text-xs text-[#f3ebf5] opacity-90 mt-1 tracking-wider"
  },
  {
    title: "SWIRL",
    subtitle: "Rhythm of Movement",
    image: swirlJewelry,
    titleFont: "font-serif uppercase tracking-wider text-3xl md:text-4xl text-[#2a3c52]",
    subtitleFont: "font-sans text-[10px] md:text-xs text-[#2a3c52] opacity-90 mt-1 tracking-wider"
  }
];

export default function CaratlaneCollections() {
  return (
    <section className="w-full bg-[#fcfafc] dark:bg-[#0a0a0c] py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-[#4b1f68] dark:text-[#d7bbf0] mb-3">
            Aura Collections
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-sans text-sm md:text-base max-w-2xl mx-auto">
            Discover our masterfully crafted pieces, where every curve tells a story.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {collections.map((col, idx) => (
            <motion.div
              key={idx}
              className="relative rounded-3xl overflow-hidden shadow-lg group cursor-pointer aspect-[4/5]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
            >
              <img 
                src={col.image} 
                alt={col.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80 pointer-events-none" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 text-center flex flex-col items-center justify-end transform transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className={`${col.titleFont} drop-shadow-sm transition-all duration-500`}>{col.title}</h3>
                <p className={`${col.subtitleFont} drop-shadow-sm`}>{col.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-14 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className="bg-[#4b1f68] text-white px-10 py-4 rounded font-sans text-xs font-bold tracking-[0.2em] hover:bg-[#3d1a4d] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            VIEW ALL COLLECTIONS
          </button>
        </motion.div>
      </div>
    </section>
  );
}
