import React from 'react';
import { motion } from 'framer-motion';
import { REVIEWS } from '../constants';
import { Star } from 'lucide-react';

const Reviews: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen bg-obsidian pt-40 pb-20 px-6"
    >
      <div className="text-center mb-32">
        <h1 className="font-display text-6xl md:text-8xl text-ivory">Voices</h1>
        <p className="font-body text-xs text-gold uppercase tracking-[0.4em] mt-6">The Guest Experience</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {REVIEWS.map((review, idx) => (
          <div key={idx} className="border border-white/5 p-10 hover:border-gold/30 hover:bg-white/[0.02] transition-colors duration-500 group flex flex-col justify-between min-h-[400px]">
            <div>
               <div className="flex gap-1 mb-8 opacity-50 group-hover:opacity-100 transition-opacity">
                 {[...Array(5)].map((_, i) => (
                   <Star key={i} className={`w-3 h-3 ${i < review.rating ? 'fill-gold text-gold' : 'text-subtle'}`} />
                 ))}
               </div>
               <p className="font-body text-lg text-ivory/80 leading-relaxed font-light italic">
                 "{review.text}"
               </p>
            </div>
            
            <div className="mt-8 border-t border-white/5 pt-6 flex justify-between items-end">
               <div>
                 <span className="font-display text-xl text-ivory block">{review.name}</span>
                 <span className="font-body text-[10px] text-gold uppercase tracking-widest">Verified</span>
               </div>
               <span className="font-display text-4xl text-white/5 group-hover:text-gold/20">“</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Reviews;