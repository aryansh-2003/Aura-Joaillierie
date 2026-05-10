import React from 'react';
import { motion } from 'framer-motion';
import treasureChestPromo from '../assets/treasure_chest_promo.png';
import everydayGold from '../assets/everyday_gold.png';
import silverDiamonds from '../assets/silver_diamonds.png';

export default function TreasureChestPromo() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-8 md:py-12 bg-white dark:bg-[#050505]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {/* Left Side: Treasure Chest Promo */}
        <motion.div 
          className="relative rounded-[2rem] overflow-hidden bg-[#3b0a45] text-white flex flex-col justify-center items-center text-center h-[450px] lg:h-[550px] shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={treasureChestPromo} alt="Treasure Chest" className="absolute inset-0 w-full h-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2a0631]/80 via-[#3b0a45]/40 to-transparent pointer-events-none" />
          
          <div className="relative z-10 p-8 flex flex-col items-center mt-20">
            <div className="flex items-center gap-2 mb-4 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
              <span className="text-[#f5c35b] text-lg">✨</span>
              <h2 className="text-xs tracking-[0.25em] uppercase font-semibold text-white/90">Aura Joaillerie</h2>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#fdfbf7] to-[#e6d5e8]">
              TREASURE<br/>CHEST
            </h1>
            <p className="text-xl md:text-2xl mb-3 font-medium text-[#fdfbf7]">9=10 Monthly Saving Scheme</p>
            <p className="text-base text-[#e6d5e8] opacity-90 max-w-[80%] mx-auto font-light">Pay 9 installments & get the 10th FREE!</p>
          </div>
        </motion.div>

        {/* Right Side: Stacked Promos */}
        <div className="flex flex-col gap-4 md:gap-6 h-[900px] lg:h-[550px]">
          {/* Top: 9KT Gold */}
          <motion.div 
            className="relative flex-1 rounded-[2rem] overflow-hidden bg-[#fbf5ee] shadow-md group"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <img src={everydayGold} alt="9KT Gold" className="absolute right-0 inset-y-0 w-2/3 md:w-3/5 h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#fbf5ee] via-[#fbf5ee]/90 to-transparent pointer-events-none" />
            <div className="relative z-10 p-8 md:p-10 flex flex-col justify-center items-start w-[70%] h-full">
              <h3 className="text-4xl md:text-5xl font-serif text-[#3a3530] mb-3">9KT Gold</h3>
              <p className="text-[#686058] mb-6 text-sm md:text-base leading-relaxed">
                Because <span className="italic font-serif">everyday</span><br/>moments deserve gold
              </p>
              <button className="bg-[#3a3530] text-[#fbf5ee] text-xs px-5 py-3 font-bold tracking-[0.15em] rounded hover:bg-black transition-colors shadow-sm">
                STARTING AT ₹5000
              </button>
            </div>
          </motion.div>

          {/* Bottom: Silver Diamonds */}
          <motion.div 
            className="relative flex-1 rounded-[2rem] overflow-hidden bg-[#e0f0ec] shadow-md group"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <img src={silverDiamonds} alt="Diamonds in Silver" className="absolute right-0 inset-y-0 w-2/3 md:w-3/5 h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#e0f0ec] via-[#e0f0ec]/90 to-transparent pointer-events-none" />
            <div className="relative z-10 p-8 md:p-10 flex flex-col justify-end items-start w-[75%] h-full pb-10">
              <p className="text-[#4a6b63] mb-2 text-sm font-medium tracking-wide uppercase">Guess who's shining now?</p>
              <h3 className="text-3xl md:text-4xl font-serif text-[#2c403b] mb-6 leading-tight">
                Diamonds in <br/><span className="italic font-light">silver</span>
              </h3>
              <button className="bg-[#2c403b] text-[#e0f0ec] text-xs px-6 py-3 font-bold tracking-[0.15em] rounded hover:bg-[#1a2623] transition-colors shadow-sm">
                SHOP NOW
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
