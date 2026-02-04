import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu as MenuIcon, X, ArrowRight } from 'lucide-react';
import { RESTAURANT_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', path: '/', sub: 'The Beginning', img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2000' },
    { name: 'Cuisine', path: '/menu', sub: 'Culinary Art', img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974' },
    { name: 'Story', path: '/about', sub: 'Our Philosophy', img: 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=2080' },
    { name: 'Gallery', path: '/gallery', sub: 'Atmosphere', img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070' },
    { name: 'Reviews', path: '/reviews', sub: 'Testimonials', img: 'https://images.unsplash.com/photo-1516594798947-e65505dbb29d?q=80&w=2070' },
    { name: 'Contact', path: '/contact', sub: 'Reservations', img: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] px-6 md:px-12 py-6 flex justify-between items-center mix-blend-difference text-ivory`}
      >
        <Link to="/" className="z-50 group">
          <div className="flex flex-col">
            <span className="font-display font-bold text-2xl tracking-[0.2em] group-hover:text-gold transition-colors duration-500">SKY DINE</span>
            <span className="font-body text-[8px] uppercase tracking-[0.4em] opacity-60">Est. 2024</span>
          </div>
        </Link>

        <button 
          onClick={() => setIsOpen(true)}
          className="z-50 flex items-center gap-3 group"
        >
          <span className="hidden md:block font-body text-[10px] uppercase tracking-[0.3em] group-hover:text-gold transition-colors duration-300">Vault</span>
          <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all duration-500">
             <div className="flex flex-col gap-1.5 items-end">
                <div className="w-5 h-[1px] bg-white group-hover:bg-gold transition-colors"></div>
                <div className="w-3 h-[1px] bg-white group-hover:bg-gold transition-colors group-hover:w-5 duration-300"></div>
             </div>
          </div>
        </button>
      </header>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="fixed inset-0 z-[60] bg-obsidian flex items-stretch"
          >
            {/* Texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] opacity-10 pointer-events-none"></div>
            
            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 md:top-12 md:right-12 text-ivory hover:text-gold transition-colors z-50 flex items-center gap-2 group"
            >
              <span className="font-body text-[10px] uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity duration-300">Close</span>
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-gold transition-all duration-500 bg-obsidian">
                <X className="w-4 h-4" />
              </div>
            </button>

            {/* Left: Navigation List */}
            <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-6 md:px-24 relative z-20">
              <div className="space-y-4 md:space-y-6">
                 {links.map((link, idx) => (
                   <motion.div
                     key={link.path}
                     initial={{ x: -50, opacity: 0 }}
                     animate={{ x: 0, opacity: 1 }}
                     transition={{ delay: 0.1 + idx * 0.05, duration: 0.8 }}
                     onMouseEnter={() => setHoveredLink(idx)}
                     onMouseLeave={() => setHoveredLink(null)}
                   >
                     <Link 
                       to={link.path}
                       onClick={() => setIsOpen(false)}
                       className="group flex items-center justify-between py-2 border-b border-white/5 hover:border-gold/30 transition-colors duration-500"
                     >
                       <div className="flex items-baseline gap-6">
                         <span className="font-body text-[10px] text-gold/50 uppercase tracking-widest w-6">0{idx + 1}</span>
                         <span className="font-display text-4xl md:text-6xl text-ivory group-hover:text-gold group-hover:pl-4 transition-all duration-500">
                           {link.name}
                         </span>
                       </div>
                       <ArrowRight className="w-5 h-5 text-gold opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500" />
                     </Link>
                   </motion.div>
                 ))}
               </div>
               
               {/* Quick Contact Footer */}
               <motion.div 
                 initial={{ opacity: 0 }} 
                 animate={{ opacity: 1 }} 
                 transition={{ delay: 0.8 }}
                 className="mt-12 pt-8 border-t border-white/5 flex flex-wrap gap-8"
               >
                 <div>
                    <span className="block font-body text-[10px] text-subtle uppercase tracking-widest mb-1">Reserve</span>
                    <span className="font-display text-lg text-ivory">{RESTAURANT_INFO.phone[0]}</span>
                 </div>
                 <div>
                    <span className="block font-body text-[10px] text-subtle uppercase tracking-widest mb-1">Find</span>
                    <span className="font-display text-lg text-ivory">Vadodara, GJ</span>
                 </div>
               </motion.div>
            </div>

            {/* Right: Dynamic Visual Preview (Desktop) */}
            <div className="hidden md:block w-1/2 h-full relative overflow-hidden bg-charcoal border-l border-white/5">
               <AnimatePresence mode="wait">
                 {hoveredLink !== null ? (
                   <motion.div
                     key={links[hoveredLink].img}
                     initial={{ opacity: 0, scale: 1.1 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0 }}
                     transition={{ duration: 0.6 }}
                     className="absolute inset-0"
                   >
                     <div className="absolute inset-0 bg-obsidian/20 z-10"></div>
                     <img 
                       src={links[hoveredLink].img} 
                       alt="Preview" 
                       className="w-full h-full object-cover"
                     />
                     <div className="absolute bottom-12 left-12 z-20">
                        <span className="font-script text-5xl text-gold">{links[hoveredLink].sub}</span>
                     </div>
                   </motion.div>
                 ) : (
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center opacity-20">
                        <span className="font-display text-9xl text-ivory block">SKY</span>
                        <span className="font-display text-9xl text-ivory block">DINE</span>
                      </div>
                   </div>
                 )}
               </AnimatePresence>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;