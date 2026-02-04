import React from 'react';
import { motion } from 'framer-motion';

const Gallery: React.FC = () => {
  const images = Array.from({ length: 9 }).map((_, i) => ({
    url: `https://picsum.photos/seed/skydine_lux_${i}/800/1000`,
    caption: `Visual Narrative 0${i + 1}`
  }));

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen bg-obsidian pt-40 pb-20 px-6"
    >
      <div className="max-w-7xl mx-auto mb-24 text-center">
         <h1 className="font-display text-6xl md:text-8xl text-ivory mb-6">Visuals</h1>
         <p className="font-body text-xs text-gold uppercase tracking-[0.4em]">Captured Moments</p>
      </div>

      <div className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {images.map((img, idx) => (
          <div key={idx} className="break-inside-avoid relative group cursor-pointer overflow-hidden">
             <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mix-blend-overlay"></div>
             <img 
               src={img.url} 
               alt="Gallery" 
               className="w-full h-auto object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.2s] ease-out"
             />
             <div className="absolute bottom-0 left-0 w-full p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 bg-gradient-to-t from-obsidian to-transparent">
                <span className="font-body text-[10px] text-gold uppercase tracking-[0.2em]">{img.caption}</span>
             </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Gallery;