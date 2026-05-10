import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Removed the Pollinations API generator since it was being blocked on the user's network.

// Generate 25 products (5 for each category)
const CATEGORIES = ["All", "Rings", "Necklaces", "Bracelets", "Earrings", "Premium Collections"];

export const ALL_PRODUCTS = [];
let idCounter = 1;

// Product data array of objects containing URL and details as requested
// Product data array of objects containing URL and details as requested
// Using local high-quality AI assets to guarantee correct context and loading
const CATEGORY_DATA = {
  "Rings": [
    { title: "The Eternity Band", price: "$12,500", img: "/ring.png" },
    { title: "Rose Gold Solitaire", price: "$15,200", img: "/ring.png" },
    { title: "Diamond Halo Ring", price: "$9,800", img: "/ring.png" },
    { title: "Sapphire Signet", price: "$6,400", img: "/ring.png" },
    { title: "Platinum Promise", price: "$11,000", img: "/ring.png" },
    { title: "Vintage Marquise Ring", price: "$14,500", img: "/ring.png" },
    { title: "Emerald Cut Engagement", price: "$18,000", img: "/ring.png" },
    { title: "Ruby Cluster Ring", price: "$8,900", img: "/ring.png" },
    { title: "Art Deco Geometric Ring", price: "$7,200", img: "/ring.png" },
    { title: "Yellow Diamond Solitaire", price: "$22,000", img: "/ring.png" }
  ],
  "Necklaces": [
    { title: "Sapphire Cascade", price: "$44,000", img: "/necklace.png" },
    { title: "Celestial Choker", price: "$32,000", img: "/necklace.png" },
    { title: "Diamond Tennis Necklace", price: "$28,500", img: "/necklace.png" },
    { title: "Pearl & Diamond Pendant", price: "$14,000", img: "/necklace.png" },
    { title: "Emerald Drop Necklace", price: "$55,000", img: "/necklace.png" },
    { title: "Opal Moon Pendant", price: "$11,200", img: "/necklace.png" },
    { title: "Gold Lariat Necklace", price: "$9,500", img: "/necklace.png" },
    { title: "Aquamarine Y-Necklace", price: "$16,800", img: "/necklace.png" },
    { title: "Vintage Ruby Cameo", price: "$24,000", img: "/necklace.png" },
    { title: "Diamond Station Necklace", price: "$19,500", img: "/necklace.png" }
  ],
  "Bracelets": [
    { title: "Obsidian Cuff", price: "$8,500", img: "/bracelet.png" },
    { title: "Diamond Tennis Bracelet", price: "$18,000", img: "/bracelet.png" },
    { title: "Gold Chain Link", price: "$5,200", img: "/bracelet.png" },
    { title: "Rose Gold Bangle", price: "$7,100", img: "/bracelet.png" },
    { title: "Platinum Twist Bracelet", price: "$9,500", img: "/bracelet.png" },
    { title: "Sapphire Line Bracelet", price: "$21,000", img: "/bracelet.png" },
    { title: "Emerald Byzantine Cuff", price: "$14,200", img: "/bracelet.png" },
    { title: "Pearl Strand Bracelet", price: "$6,800", img: "/bracelet.png" },
    { title: "Diamond Interlock Bangle", price: "$15,500", img: "/bracelet.png" },
    { title: "Ruby Slider Bracelet", price: "$11,000", img: "/bracelet.png" }
  ],
  "Earrings": [
    { title: "Crimson Drops", price: "$21,000", img: "/earrings.png" },
    { title: "Diamond Studs", price: "$12,000", img: "/earrings.png" },
    { title: "Pearl Drop Earrings", price: "$8,800", img: "/earrings.png" },
    { title: "Sapphire Chandeliers", price: "$34,000", img: "/earrings.png" },
    { title: "Emerald Huggies", price: "$6,500", img: "/earrings.png" },
    { title: "Rose Gold Hoops", price: "$4,200", img: "/earrings.png" },
    { title: "Vintage Onyx Drops", price: "$7,900", img: "/earrings.png" },
    { title: "Diamond Cluster Studs", price: "$16,500", img: "/earrings.png" },
    { title: "Aquamarine Teardrops", price: "$18,000", img: "/earrings.png" },
    { title: "Platinum Kite Earrings", price: "$11,400", img: "/earrings.png" }
  ],
  "Premium Collections": [
    { title: "The Royal Suite", price: "$250,000", img: "/necklace.png" },
    { title: "Aura Masterpiece", price: "$180,000", img: "/ring.png" },
    { title: "Imperial Diamond Set", price: "$320,000", img: "/earrings.png" },
    { title: "Midnight Sapphire Collection", price: "$145,000", img: "/necklace.png" },
    { title: "Heritage Ruby Suite", price: "$210,000", img: "/ring.png" },
    { title: "The Sovereign Set", price: "$400,000", img: "/bracelet.png" },
    { title: "Empress Emerald Parure", price: "$275,000", img: "/necklace.png" },
    { title: "Celestial Diamond Suite", price: "$350,000", img: "/earrings.png" },
    { title: "Golden Era Masterpiece", price: "$195,000", img: "/ring.png" },
    { title: "Oceanic Pearl Collection", price: "$120,000", img: "/bracelet.png" }
  ]
};

Object.keys(CATEGORY_DATA).forEach((category) => {
  CATEGORY_DATA[category].forEach((item, itemIdx) => {
    ALL_PRODUCTS.push({
      id: idCounter++,
      title: item.title,
      price: item.price,
      category: category,
      img: item.img,
      // Create a unique deterministic CSS filter for each item to add visual variety
      // to the local base images (e.g. changing stone colors and brightness slightly)
      customFilter: `hue-rotate(${itemIdx * 35}deg) brightness(${90 + (itemIdx % 3) * 10}%) saturate(${100 + (itemIdx % 2) * 20}%)`
    });
  });
});

export default function CollectionPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();

  const filteredProducts = activeCategory === "All"
    ? ALL_PRODUCTS
    : ALL_PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#fdfbf7] dark:bg-[#050505] text-gray-900 dark:text-gray-100 pt-32 px-6 md:px-12 pb-24 selection:bg-white selection:text-black">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        <header className="mb-16 flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 text-black dark:text-white">The Collection</h1>
          <p className="text-sm tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400 max-w-lg leading-loose">
            A curated selection of our finest high-jewelry pieces. Discover the pinnacle of modern craftsmanship.
          </p>
        </header>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-6 mb-16 border-b border-black/10 dark:border-white/10 pb-8">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-xs uppercase tracking-[0.15em] transition-all duration-300 ${activeCategory === category
                  ? "text-black dark:text-white border-b border-white pb-1"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-300"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex justify-between items-center mb-12">
          <div className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">{filteredProducts.length} Pieces</div>
          <div className="flex gap-6 text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
            <button className="hover:text-black dark:text-white transition-colors">Sort By</button>
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          <AnimatePresence>
            {filteredProducts.map((product) => {
              return (
                <motion.div
                  onClick={() => navigate(`/product/${product.id}`)}
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="group block cursor-pointer"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#f4f0e6] dark:bg-zinc-900 mb-6 flex items-center justify-center">
                    <img
                      src={product.img}
                      alt={product.title}
                      style={{ filter: product.customFilter }}
                      className="w-[85%] h-[85%] object-contain transition-transform duration-1000 group-hover:scale-105 drop-shadow-xl"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-serif text-black dark:text-white mb-2">{product.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{product.price}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </motion.div>
    </div>
  );
}
