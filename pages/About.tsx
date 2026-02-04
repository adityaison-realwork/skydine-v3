import React from 'react';
import { motion } from 'framer-motion';
import { RESTAURANT_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen bg-obsidian pt-32"
    >
      {/* 1. Massive Intro */}
      <div className="h-[80vh] flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
           <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        </div>
        <span className="font-body text-xs text-gold uppercase tracking-[0.5em] mb-8 relative z-10">Our Philosophy</span>
        <h1 className="font-display text-5xl md:text-8xl lg:text-9xl text-ivory relative z-10 leading-[0.9]">
          ELEVATING <br/> <span className="font-script text-gold opacity-80 text-7xl md:text-9xl">perspective</span>
        </h1>
      </div>

      {/* 2. Split Story */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <div className="relative">
           <img 
             src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070" 
             alt="Fine Dining Detail" 
             className="w-full aspect-[4/5] object-cover grayscale brightness-75 border border-gold/10 p-2"
           />
           <div className="absolute -top-12 -left-12 font-display text-9xl text-white/5 z-0">EST.</div>
        </div>
        
        <div>
           <h3 className="font-display text-4xl text-ivory mb-12">A Symphony of <br/> Flavor & View</h3>
           <div className="space-y-8 font-body text-subtle text-lg leading-loose font-light text-justify">
             <p>
               <span className="text-gold uppercase tracking-widest text-xs font-bold mr-2">The Origin</span>
               Sky Dine was born from a singular vision: to offer Vadodara a dining experience that transcends the ordinary. Located on the 6th floor, we are a sanctuary suspended above the cacophony of the everyday.
             </p>
             <p>
               Our culinary philosophy respects tradition while embracing innovation. From the clay ovens of the North to the woks of the East, every dish is a testament to our chefs' dedication to the craft.
             </p>
             <p>
               But the food is only half the story. The atmosphere, dominated by our signature glass dome and the open sky, completes the experience.
             </p>
           </div>
        </div>
      </div>

      {/* 3. Numbers */}
      <div className="bg-charcoal py-32 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
           {[
             { val: "150+", label: "Seats" },
             { val: "06", label: "Floor" },
             { val: "04", label: "Cuisines" },
             { val: "4.8", label: "Rating" }
           ].map((stat, idx) => (
             <div key={idx} className="group">
               <span className="font-display text-6xl md:text-8xl text-ivory group-hover:text-gold transition-colors duration-500">{stat.val}</span>
               <span className="block font-body text-xs text-subtle uppercase tracking-[0.3em] mt-4">{stat.label}</span>
             </div>
           ))}
        </div>
      </div>

    </motion.div>
  );
};

export default About;