import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MENU } from '../constants';
import { Search } from 'lucide-react';

const Menu: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter logic: Returns categories that have matching items
  const filteredMenu = useMemo(() => {
    const lowerQuery = searchQuery.toLowerCase();
    
    if (!lowerQuery) return MENU;

    return MENU.map(category => ({
      ...category,
      items: category.items.filter(item => 
        item.name.toLowerCase().includes(lowerQuery) || 
        item.description.toLowerCase().includes(lowerQuery)
      )
    })).filter(category => category.items.length > 0);
  }, [searchQuery]);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen bg-obsidian pt-40 pb-20 px-6 lg:px-24"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end border-b border-gold/30 pb-12 mb-16">
         <div className="w-full md:w-auto">
            <span className="font-script text-4xl text-gold block mb-2">Gastronomy</span>
            <h1 className="font-display text-6xl md:text-8xl text-ivory leading-none">THE INDEX</h1>
         </div>
         
         {/* Search Bar */}
         <div className="w-full md:w-1/3 mt-8 md:mt-0 relative group">
            <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-subtle group-focus-within:text-gold transition-colors" />
            <input 
              type="text" 
              placeholder="Search the menu..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-b border-white/10 pl-10 pr-4 py-3 text-ivory font-body tracking-wider focus:outline-none focus:border-gold transition-colors placeholder-white/20"
            />
         </div>
      </div>

      <div className="space-y-32 min-h-[50vh]">
        <AnimatePresence mode="popLayout">
          {filteredMenu.length > 0 ? (
            filteredMenu.map((category, idx) => (
              <motion.div 
                key={category.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12"
              >
                
                {/* Category Title */}
                <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
                  <span className="font-body text-gold text-xs tracking-widest block mb-4">
                    0{MENU.findIndex(c => c.title === category.title) + 1} — Selection
                  </span>
                  <h2 className="font-display text-4xl md:text-5xl text-ivory">{category.title}</h2>
                </div>

                {/* Items */}
                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                  {category.items.map((item, itemIdx) => (
                    <motion.div 
                      key={item.name}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="group hover:translate-x-2 transition-transform duration-500"
                    >
                      <div className="flex justify-between items-baseline border-b border-white/5 pb-4 mb-4 group-hover:border-gold/50 transition-colors">
                        <h3 className="font-body font-bold text-sm text-ivory tracking-[0.2em] uppercase">{item.name}</h3>
                        <span className="font-display text-xl text-gold">{item.price}</span>
                      </div>
                      <p className="font-body text-subtle text-sm leading-relaxed font-light">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>

              </motion.div>
            ))
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <span className="font-display text-4xl text-white/20 mb-4">No results found</span>
              <p className="font-body text-subtle uppercase tracking-widest text-xs">Try searching for a different dish or flavor.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-32 text-center border-t border-white/5 pt-12">
        <p className="font-body text-[10px] uppercase tracking-[0.3em] text-subtle">
           * Prices subject to change. Government taxes applicable.
        </p>
      </div>
    </motion.div>
  );
};

export default Menu;