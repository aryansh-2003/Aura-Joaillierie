import React from 'react';

export default function ContactSection() {
  return (
    <section className="w-full bg-[#fdfbf7] dark:bg-[#050505] border-t border-black/10 dark:border-white/10 py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-black dark:text-white">Visit Our Boutique</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-sm leading-relaxed">
            Experience the brilliance in person. Schedule a private consultation with our master jewelers to discover your perfect piece.
          </p>
          <div className="space-y-4 text-xs tracking-widest uppercase text-gray-800 dark:text-gray-300">
            <p className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">+1 (800) AURA-GEM</p>
            <p className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">concierge@aurajoaillerie.com</p>
            <p>5th Avenue, New York, NY</p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="relative group">
              <input 
                type="text" 
                placeholder="YOUR NAME" 
                className="w-full bg-transparent border-b border-black/20 dark:border-white/20 py-3 text-xs tracking-widest uppercase text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white transition-colors"
              />
            </div>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-transparent border-b border-black/20 dark:border-white/20 py-3 text-xs tracking-widest uppercase text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white transition-colors"
              />
            </div>
            <div className="relative group">
              <textarea 
                placeholder="MESSAGE" 
                rows="3"
                className="w-full bg-transparent border-b border-black/20 dark:border-white/20 py-3 text-xs tracking-widest uppercase text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white transition-colors resize-none"
              />
            </div>
            <button 
              type="button" 
              className="mt-6 px-10 py-4 bg-black text-white dark:bg-white dark:text-black text-xs tracking-[0.2em] uppercase hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors w-full md:w-auto"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
