import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

import reviewerAlexander from '../assets/reviewer_alexander.png';
import reviewerSarah from '../assets/reviewer_sarah.png';
import reviewerMarcus from '../assets/reviewer_marcus.png';

const REVIEWS = [
  { 
    name: "Alexander W.", 
    role: "Creative Director", 
    image: reviewerAlexander,
    color: "from-purple-500/10 to-transparent",
    text: "The craftsmanship is unparalleled. It's not just jewelry; it's wearable art. The attention to detail in the setting alone justifies the piece." 
  },
  { 
    name: "Sarah J.", 
    role: "Fashion Editor", 
    image: reviewerSarah,
    color: "from-orange-500/10 to-transparent",
    text: "Aura Joaillerie has completely redefined the modern heirloom. Substantial, yet impeccably delicate. A staple for the avant-garde." 
  },
  { 
    name: "Marcus T.", 
    role: "Architect", 
    image: reviewerMarcus,
    color: "from-emerald-500/10 to-transparent",
    text: "I appreciate the geometry and the gemstone selection. The diamond halo is a masterstroke in high jewelry design." 
  }
];

const TiltCard = ({ review, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative p-8 rounded-3xl bg-gradient-to-br ${review.color} border border-white/[0.08] backdrop-blur-xl cursor-crosshair group will-change-transform shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-white/20 transition-colors duration-500`}
    >
      <div style={{ transform: "translateZ(40px)" }} className="flex flex-col h-full justify-between">
        <div>
          <svg className="w-8 h-8 text-white/20 mb-6 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-gray-200 font-light leading-relaxed mb-8 text-lg drop-shadow-sm">
            "{review.text}"
          </p>
        </div>
        
        <div className="flex items-center gap-4 mt-auto border-t border-white/10 pt-6">
          <img 
            src={review.image} 
            alt={review.name} 
            className="w-14 h-14 rounded-full object-cover border-2 border-white/20 shadow-lg group-hover:scale-110 transition-transform duration-500" 
          />
          <div className="flex flex-col">
            <span className="text-white font-serif text-xl tracking-wide">{review.name}</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 mt-1">{review.role}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Reviews() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#050505] min-h-screen flex flex-col justify-center items-center relative z-10 overflow-hidden">
      {/* Colorful Background Orbs */}
      <div className="absolute top-0 left-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-teal-600/20 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      <div className="absolute top-[40%] left-[40%] w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center mb-20 z-10"
      >
        <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 drop-shadow-lg">Clientele</h2>
        <div className="w-16 h-[1px] bg-white/40 mx-auto" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto w-full z-10" style={{ perspective: '1200px' }}>
        {REVIEWS.map((review, i) => (
          <TiltCard key={i} review={review} index={i} />
        ))}
      </div>
    </section>
  );
}
