import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS, OFFERS } from '../constants';
import { ExternalLink } from 'lucide-react';

const OrderOnline: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen bg-obsidian pt-40 pb-20 px-6"
    >
      <div className="text-center mb-24">
        <h1 className="font-display text-6xl md:text-8xl text-ivory">At Home</h1>
        <p className="font-body text-xs text-gold uppercase tracking-[0.4em] mt-6">Luxury Delivered</p>
      </div>

      <div className="max-w-6xl mx-auto">
         {/* Platforms */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
            {SOCIAL_LINKS.map((link, idx) => (
               <a 
                 key={idx} 
                 href={link.url} 
                 target="_blank" 
                 rel="noreferrer"
                 className="block border border-white/10 p-12 text-center group hover:border-gold hover:bg-white/[0.02] transition-all duration-500"
               >
                  <span className="font-display text-3xl text-ivory mb-8 block group-hover:text-gold transition-colors">{link.name}</span>
                  <div className="flex justify-center items-center gap-3 opacity-50 group-hover:opacity-100 transition-opacity">
                     <span className="font-body text-[10px] uppercase tracking-[0.2em] text-ivory">Launch</span>
                     <ExternalLink className="w-3 h-3 text-ivory" />
                  </div>
               </a>
            ))}
         </div>

         {/* Offers */}
         <div className="border-t border-white/5 pt-20">
            <h2 className="font-display text-4xl text-ivory text-center mb-16">Privileges</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               {OFFERS.map((offer, idx) => (
                  <div key={idx} className="flex gap-8 items-start">
                     <span className="font-display text-5xl text-white/5">0{idx + 1}</span>
                     <div>
                        <h4 className="font-body text-sm text-gold uppercase tracking-[0.2em] mb-2">{offer.title}</h4>
                        <p className="font-body text-xl text-ivory font-light mb-2">{offer.details}</p>
                        <p className="font-body text-xs text-subtle uppercase tracking-wider">{offer.conditions}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>

    </motion.div>
  );
};

export default OrderOnline;