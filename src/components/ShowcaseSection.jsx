import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const PRODUCTS = [
  {
    id: 1,
    title: "The Eternity Band",
    price: "$12,500",
    desc: "Crafted from 18k white gold with a meticulously handset flawless diamond. A study in absolute brilliance.",
    img: "/ring.png", 
  },
  {
    id: 2,
    title: "Sapphire Cascade",
    price: "$44,000",
    desc: "Radiant deep blue sapphires meet traditional craftsmanship. Featuring our signature diamond halo.",
    img: "/necklace.png",
  },
  {
    id: 3,
    title: "Crimson Drops",
    price: "$21,000",
    desc: "Limited run. Sourced from the finest Burmese rubies, set in bespoke 18k rose gold.",
    img: "/earrings.png",
  }
];

export default function ShowcaseSection() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Create a master timeline locked to scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=3000", // Length of the pin (3000px of scrolling)
          scrub: 1,      // 1 second lag for smooth, heavy feel
          pin: true,
          anticipatePin: 1,
        }
      });

      // Sequence the Left/Right choreography
      PRODUCTS.forEach((_, index) => {
        const imageClass = `.prod-img-${index}`;
        const detailClass = `.prod-detail-${index}`;

        // If it's not the first item, fade out/move the previous item first
        if (index !== 0) {
          const prevImgClass = `.prod-img-${index - 1}`;
          const prevDetailClass = `.prod-detail-${index - 1}`;
          
          tl.to([prevImgClass, prevDetailClass], {
            y: -50,
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
          }, `transition-${index}`);
        }

        // Slide the CURRENT item in from the right (100vw to 0)
        tl.fromTo(imageClass, 
          { x: '100vw', opacity: 0 }, 
          { x: '0', opacity: 1, duration: 1.5, ease: "power3.out" }, 
          `transition-${index}+=0.2`
        )
        .fromTo(detailClass, 
          { x: '100vw', opacity: 0 }, 
          { x: '0', opacity: 1, duration: 1.5, ease: "power3.out" }, 
          `transition-${index}+=0.3` // Slight stagger for details
        );

        // Add an empty space in the timeline so the user can actually read/see it before it goes away
        tl.to({}, { duration: 1 });
      });

    }, containerRef);

    return () => ctx.revert(); // Cleanup GSAP on unmount
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-[#fdfbf7] dark:bg-[#050505] overflow-hidden">
      {PRODUCTS.map((product, idx) => (
        <div key={product.id} className="absolute inset-0 flex w-full h-full">
          
          {/* Left Side: Product Image */}
          <div className={`prod-img-${idx} w-1/2 h-full flex items-center justify-center p-12 opacity-0 pointer-events-none`}>
            <div className="relative w-full h-[80%] flex items-center justify-center drop-shadow-[0_20px_50px_rgba(255,255,255,0.05)]">
              <img 
                src={product.img} 
                alt={product.title} 
                className="max-w-full max-h-full object-contain contrast-125"
              />
            </div>
          </div>

          {/* Right Side: Product Details */}
          <div className={`prod-detail-${idx} w-1/2 h-full flex flex-col justify-center px-16 lg:px-24 opacity-0 pointer-events-none`}>
            <div className="max-w-md pointer-events-auto">
              <p className="text-sm tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400 mb-4">0{idx + 1} // Signature Series</p>
              <h2 className="text-5xl lg:text-7xl font-serif mb-6 leading-none text-black dark:text-white">{product.title}</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 font-light leading-relaxed">{product.desc}</p>
              
              <div className="flex gap-4 mb-10">
                {['WG', 'YG', 'RG', 'PT'].map(size => (
                  <button key={size} className="w-12 h-12 rounded-full border border-gray-300 dark:border-gray-800 flex items-center justify-center text-sm transition-colors hover:bg-black dark:bg-white hover:text-white dark:text-black hover:border-black dark:hover:border-white font-medium">
                    {size}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-8">
                <span className="text-3xl font-light">{product.price}</span>
                <button className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black text-sm uppercase tracking-widest font-semibold hover:bg-gray-200 transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

        </div>
      ))}
    </section>
  );
}
