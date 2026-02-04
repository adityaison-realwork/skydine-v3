import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RESTAURANT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-obsidian border-t border-gold/10 pt-32 pb-12 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center text-center">
        
        <div className="mb-20">
          <Link to="/" className="group inline-block">
            <h2 className="font-display text-6xl md:text-9xl text-ivory tracking-tight group-hover:text-gold transition-colors duration-700">SKY DINE</h2>
            <div className="h-[1px] w-0 bg-gold mx-auto group-hover:w-full transition-all duration-700 mt-4"></div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-32 w-full mb-24">
          <div className="flex flex-col items-center">
            <span className="font-script text-3xl text-gold mb-6">Location</span>
            <p className="font-body text-sm text-subtle leading-loose max-w-xs uppercase tracking-widest">
              {RESTAURANT_INFO.address}
            </p>
          </div>

          <div className="flex flex-col items-center border-t md:border-t-0 md:border-l md:border-r border-white/5 py-8 md:py-0">
             <span className="font-script text-3xl text-gold mb-6">Contact</span>
             <div className="space-y-2">
              {RESTAURANT_INFO.phone.map((ph, i) => (
                <p key={i} className="font-display text-xl text-ivory">{ph}</p>
              ))}
            </div>
            <p className="font-body text-xs text-subtle mt-4 uppercase tracking-[0.2em]">{RESTAURANT_INFO.hours}</p>
          </div>

          <div className="flex flex-col items-center">
             <span className="font-script text-3xl text-gold mb-6">Follow</span>
             <div className="flex gap-8">
               <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-ivory hover:border-gold hover:text-gold transition-all duration-500">
                 <Instagram className="w-5 h-5" />
               </a>
               <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-ivory hover:border-gold hover:text-gold transition-all duration-500">
                 <Facebook className="w-5 h-5" />
               </a>
             </div>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
          <p className="font-body text-[10px] text-subtle uppercase tracking-[0.2em]">© 2024 Sky Dine Experience.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link to="/about" className="font-body text-[10px] text-subtle hover:text-gold uppercase tracking-[0.2em] transition-colors">Story</Link>
            <Link to="/menu" className="font-body text-[10px] text-subtle hover:text-gold uppercase tracking-[0.2em] transition-colors">Cuisine</Link>
            <Link to="/contact" className="font-body text-[10px] text-subtle hover:text-gold uppercase tracking-[0.2em] transition-colors">Reserve</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;