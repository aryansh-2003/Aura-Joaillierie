import React from 'react';
import { motion } from 'framer-motion';
import shayaLifestyle from '../assets/shaya_lifestyle.png';
import mothersDayPromo from '../assets/mothers_day_promo.png';
import goldenHourPromo from '../assets/golden_hour_promo.png';

export default function ShayaPromo() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-12 md:py-16 bg-white dark:bg-[#050505]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {/* Left Side: Shaya by Caratlane */}
        <motion.div 
          className="relative rounded-[2rem] overflow-hidden h-[450px] lg:h-[600px] shadow-lg group"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={shayaLifestyle} alt="Shaya by Aura" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/60 pointer-events-none" />
          
          <div className="relative z-10 p-8 md:p-10 flex justify-between items-start h-full flex-col">
            <div className="w-full flex justify-between items-center text-[#fdfbf7]">
              <h2 className="text-4xl md:text-5xl tracking-[0.3em] font-sans font-light drop-shadow-md">S H A Y A</h2>
              <span className="text-xs md:text-sm font-semibold tracking-widest uppercase bg-white/20 backdrop-blur-md px-3 py-1.5 rounded">by Aura</span>
            </div>
            
            <div className="self-end text-right text-[#fdfbf7] pr-2 pb-2">
              <p className="text-xl md:text-2xl font-serif italic mb-2 drop-shadow-md text-[#e6d5e8]">Crafted in</p>
              <h3 className="text-3xl md:text-4xl font-bold font-sans drop-shadow-lg">925 Silver</h3>
              <button className="mt-4 px-6 py-2 border border-white/50 backdrop-blur-sm hover:bg-white hover:text-black transition-colors duration-300 text-xs font-semibold tracking-wider uppercase rounded">
                Explore Shaya
              </button>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Stacked Promos */}
        <div className="flex flex-col gap-4 md:gap-6 h-[900px] lg:h-[600px]">
          {/* Top: Mother's day */}
          <motion.div 
            className="relative flex-1 rounded-[2rem] overflow-hidden bg-[#e6c8c4] shadow-md group"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <img src={mothersDayPromo} alt="Mother's Day" className="absolute right-0 inset-y-0 w-3/5 md:w-1/2 h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#e6c8c4] via-[#e6c8c4]/95 to-transparent pointer-events-none" />
            <div className="relative z-10 p-8 md:p-10 flex flex-col justify-center items-start w-[65%] h-full">
              <p className="text-[#804c48] mb-3 text-xs md:text-sm font-bold tracking-widest uppercase">For the superwoman she's always been</p>
              <h3 className="text-4xl md:text-5xl font-serif text-[#a64052] mb-8 leading-tight">Happy<br/>Mother's Day!</h3>
              <button className="bg-white text-[#a64052] text-xs px-6 py-3 font-bold tracking-[0.15em] rounded hover:bg-[#fdfbf7] hover:shadow-lg transition-all duration-300 shadow-sm">
                SHOP NOW
              </button>
            </div>
          </motion.div>

          {/* Bottom: Golden Hour */}
          <motion.div 
            className="relative flex-1 rounded-[2rem] overflow-hidden bg-[#e08f6c] shadow-md group"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <img src={goldenHourPromo} alt="Golden Hour Styles" className="absolute right-0 inset-y-0 w-3/5 md:w-1/2 h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#e08f6c] via-[#e08f6c]/95 to-transparent pointer-events-none" />
            <div className="relative z-10 p-8 md:p-10 flex flex-col justify-end items-start w-[70%] h-full pb-10">
              <h3 className="text-3xl md:text-4xl font-serif text-white mb-3 drop-shadow-sm">Golden Hour Styles</h3>
              <p className="text-white/90 mb-6 text-sm md:text-base drop-shadow-sm">
                The <span className="italic font-serif">summer</span> your style got prettier!
              </p>
              <button className="bg-[#2a1a14] text-[#fdfbf7] text-xs px-6 py-3 font-bold tracking-[0.15em] rounded hover:bg-black transition-colors shadow-sm">
                SHOP NOW
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
