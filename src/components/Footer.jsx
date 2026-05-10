import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="w-full bg-[#111] text-white dark:bg-[#0a0a0a] py-16 px-6 md:px-12 border-t border-black/10 dark:border-white/5 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <div onClick={() => navigate('/')} className="cursor-pointer inline-block">
            <h2 className="text-3xl font-serif mb-6 tracking-wide">Aura <span className="italic font-light">Joaillerie</span></h2>
          </div>
          <p className="text-gray-400 text-sm max-w-sm leading-relaxed mb-6">
            The pinnacle of fine jewelry. Discover exceptional craftsmanship, breathtaking designs, and timeless elegance curated for the modern connoisseur.
          </p>
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-[0.2em] mb-6 text-gray-500">Explore</h3>
          <ul className="space-y-4 text-sm text-gray-300">
            <li><div onClick={() => navigate('/collection')} className="cursor-pointer hover:text-white transition-colors inline-block">High Jewelry</div></li>
            <li><div onClick={() => navigate('/collection')} className="cursor-pointer hover:text-white transition-colors inline-block">Bridal Collection</div></li>
            <li><div onClick={() => navigate('/collection')} className="cursor-pointer hover:text-white transition-colors inline-block">Timepieces</div></li>
            <li><div onClick={() => navigate('/collection')} className="cursor-pointer hover:text-white transition-colors inline-block">Gifting</div></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-[0.2em] mb-6 text-gray-500">The Maison</h3>
          <ul className="space-y-4 text-sm text-gray-300">
            <li><button className="hover:text-white transition-colors cursor-pointer">Our Heritage</button></li>
            <li><button className="hover:text-white transition-colors cursor-pointer">Boutiques</button></li>
            <li><button className="hover:text-white transition-colors cursor-pointer">Sustainability</button></li>
            <li><button className="hover:text-white transition-colors cursor-pointer">Client Services</button></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs text-gray-500 tracking-wider">
          &copy; {new Date().getFullYear()} AURA JOAILLERIE. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-6 text-xs text-gray-500 tracking-wider uppercase">
          <button className="hover:text-white transition-colors">Instagram</button>
          <button className="hover:text-white transition-colors">Pinterest</button>
          <button className="hover:text-white transition-colors">Journal</button>
        </div>
      </div>
    </footer>
  );
}
