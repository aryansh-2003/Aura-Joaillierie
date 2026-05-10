import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { ALL_PRODUCTS } from './CollectionPage';

export default function ProductDetailPage() {
  const { id } = useParams();
  
  const product = ALL_PRODUCTS.find(p => p.id === parseInt(id));

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fdfbf7] dark:bg-[#050505]">
        <p className="text-xl text-black dark:text-white font-serif">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fdfbf7] dark:bg-[#050505] text-gray-900 dark:text-gray-100 selection:bg-black dark:bg-white selection:text-white dark:text-black">
      <div className="flex flex-col lg:flex-row min-h-screen">
        
        {/* Left: Sticky Image Gallery */}
        <div className="w-full lg:w-1/2 lg:sticky top-0 lg:h-screen flex items-center justify-center bg-[#f4f0e6] dark:bg-zinc-900 overflow-hidden relative">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={product.img} 
            alt={product.title}
            style={{ filter: product.customFilter }}
            className="w-3/4 h-3/4 object-contain drop-shadow-2xl"
          />
          {/* Subtle gradient to blend edges */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/40 to-transparent lg:bg-gradient-to-r" />
        </div>

        {/* Right: Product Details Scrollable */}
        <div className="w-full lg:w-1/2 px-8 py-24 md:px-16 lg:py-48 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="max-w-lg mx-auto w-full"
          >
            <p className="text-xs tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400 mb-6">{product.category}</p>
            <h1 className="text-5xl md:text-6xl font-serif text-black dark:text-white mb-6">{product.title}</h1>
            <p className="text-2xl font-light mb-10">{product.price}</p>
            
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-12 text-sm md:text-base">
              Crafted with exquisite attention to detail, this stunning {product.title} from our {product.category} collection is a study in absolute brilliance. Each piece is forged by master artisans in our Paris atelier, requiring over 120 hours of precise labor to achieve its signature luminous finish.
            </p>

            <div className="mb-12">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs uppercase tracking-widest text-gray-300">Material</span>
                <span className="text-xs text-gray-500 dark:text-gray-400 underline cursor-pointer">Material Guide</span>
              </div>
              <div className="flex gap-4">
                {['WG', 'YG', 'RG', 'PT'].map(mat => (
                  <button key={mat} className="w-14 h-14 rounded-full border border-gray-300 dark:border-gray-800 flex items-center justify-center text-sm transition-all hover:bg-black dark:bg-white hover:text-white dark:text-black hover:border-white font-medium focus:bg-black dark:bg-white focus:text-white dark:text-black focus:border-white">
                    {mat}
                  </button>
                ))}
              </div>
            </div>

            <button className="w-full py-5 bg-black dark:bg-white text-white dark:text-black text-sm uppercase tracking-[0.2em] font-medium hover:bg-gray-200 transition-colors duration-300 mb-8">
              Add to Cart
            </button>

            <div className="border-t border-black/10 dark:border-white/10 pt-8">
              <details className="group mb-4">
                <summary className="flex justify-between items-center font-serif text-lg cursor-pointer list-none text-black dark:text-white/80 hover:text-black dark:text-white transition-colors">
                  Details & Care
                  <span className="transition group-open:rotate-180">+</span>
                </summary>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-4 leading-relaxed font-light">
                  Store in the provided suede-lined mahogany box. Avoid direct contact with perfumes and lotions. Complimentary ultrasonic cleaning available annually at any of our boutiques.
                </div>
              </details>
              <div className="w-full h-[1px] bg-black/5 dark:bg-white/10 my-4" />
              <details className="group">
                <summary className="flex justify-between items-center font-serif text-lg cursor-pointer list-none text-black dark:text-white/80 hover:text-black dark:text-white transition-colors">
                  Delivery & Returns
                  <span className="transition group-open:rotate-180">+</span>
                </summary>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-4 leading-relaxed font-light">
                  Secure, insured global delivery via private courier. Returns accepted within 14 days of receipt in original, unworn condition.
                </div>
              </details>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
