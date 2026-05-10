import React, { useRef, useState, useEffect } from 'react';

const GRID_ITEMS = [
  "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=800&auto=format&fit=crop",
];

export default function CollectionGrid() {
  const containerRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      
      const { innerWidth, innerHeight } = window;
      const x = e.clientX;
      const y = e.clientY;

      const rotateX = ((y / innerHeight) - 0.5) * -10; 
      const rotateY = ((x / innerWidth) - 0.5) * 10;

      setRotation({ x: rotateX, y: rotateY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="py-32 px-6 md:px-12 bg-[#f0ebe1] dark:bg-[#090909] min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-6xl font-serif text-black dark:text-white mb-4">The Archive</h2>
        <p className="text-gray-500 dark:text-gray-400 tracking-widest uppercase text-sm">Explore the full lineage</p>
      </div>

      <div 
        ref={containerRef}
        className="w-full max-w-7xl mx-auto"
        style={{ perspective: '1200px' }}
      >
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-transform duration-700 ease-out will-change-transform"
          style={{ 
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transformStyle: 'preserve-3d'
          }}
        >
          {GRID_ITEMS.map((src, i) => (
            <div 
              key={i} 
              className="group relative aspect-[3/4] overflow-hidden bg-[#f4f0e6] dark:bg-zinc-900 border border-black/5 dark:border-white/5 cursor-pointer"
              style={{ transform: `translateZ(${Math.random() * 50 + 20}px)` }} 
            >
              <img 
                src={src} 
                alt={`Collection item ${i}`}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-700"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white font-serif text-xl">Model 00{i + 1}</p>
                <p className="text-gray-600 dark:text-gray-400 text-xs tracking-widest uppercase mt-1">View Details</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
