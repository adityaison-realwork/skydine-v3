import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { RESTAURANT_INFO } from '../constants';

const Home: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="bg-obsidian"
    >
      
      {/* 1. Hero: The Smoky Experience */}
      <section className="relative min-h-screen w-full overflow-hidden flex flex-col md:flex-row">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/95 to-transparent z-10 md:w-2/3"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 z-0"></div>

        {/* Content Side (Left) */}
        <div className="relative z-20 w-full md:w-1/2 flex flex-col justify-center px-6 md:px-24 pt-32 md:pt-0">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-8">
               <div className="w-12 h-[1px] bg-gold"></div>
               <span className="font-body text-gold text-[10px] tracking-[0.4em] uppercase">Rooftop Sanctuary</span>
            </div>
            
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-ivory leading-[0.85] mb-8">
              TASTE <br/>
              <span className="text-transparent text-outline">THE</span> <br/>
              AETHER
            </h1>
            
            <p className="font-body text-subtle text-sm tracking-widest uppercase max-w-md leading-loose mb-12 border-l-2 border-white/5 pl-6">
              Vadodara's crown jewel. Where culinary artistry rises like smoke to meet the stars.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
               <Link to="/menu" className="group relative px-8 py-4 bg-ivory text-obsidian font-body text-xs uppercase tracking-[0.3em] hover:bg-gold transition-colors duration-500 overflow-hidden">
                 <span className="relative z-10 flex items-center gap-3">
                   The Menu <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                 </span>
               </Link>
               <Link to="/contact" className="px-8 py-4 border border-white/20 text-ivory font-body text-xs uppercase tracking-[0.3em] hover:border-gold hover:text-gold transition-colors duration-500 text-center">
                 Reservations
               </Link>
            </div>
          </motion.div>
        </div>

        {/* Visual Side (Right) - Smoky Image */}
        <div className="absolute top-0 right-0 w-full md:w-3/5 h-full z-0">
           {/* The Image */}
           <img 
             src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2000" 
             alt="Smoked Cocktail Luxury" 
             className="w-full h-full object-cover object-center brightness-75"
           />
           
           {/* Smoke Animation Overlay */}
           <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-[40px] animate-smoke"></div>
           <div className="absolute bottom-10 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-[30px] animate-smoke" style={{ animationDelay: '1s' }}></div>
           <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gold/10 rounded-full blur-[50px] animate-smoke" style={{ animationDelay: '2.5s' }}></div>

           {/* Gradient Overlay for blending */}
           <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80"></div>
           <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-transparent to-transparent"></div>
        </div>

        {/* Floating Badge */}
        <motion.div 
           initial={{ opacity: 0, scale: 0 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 1, duration: 1 }}
           className="absolute bottom-12 right-6 md:right-12 z-20 w-32 h-32 hidden md:flex items-center justify-center"
        >
           <div className="absolute inset-0 border border-gold/30 rounded-full animate-slow-spin"></div>
           <div className="absolute inset-2 border border-dashed border-white/10 rounded-full animate-slow-spin" style={{ animationDirection: 'reverse' }}></div>
           <div className="text-center">
              <span className="block font-display text-2xl text-gold">6th</span>
              <span className="block font-body text-[8px] uppercase tracking-widest text-ivory">Floor</span>
           </div>
        </motion.div>
      </section>

      {/* 2. Introduction: Asymmetric Layout */}
      <section className="py-32 px-6 lg:px-24 relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
           <div className="md:w-1/2 relative">
              <motion.div style={{ y: y1 }} className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?q=80&w=2070" 
                  alt="Rooftop Ambience" 
                  className="w-full aspect-[3/4] object-cover grayscale brightness-75 contrast-125 border-r border-gold/20"
                />
              </motion.div>
              <div className="absolute -bottom-10 -left-10 w-full h-full border border-gold/20 z-0 hidden md:block"></div>
           </div>
           
           <div className="md:w-1/2 md:pl-12">
              <span className="font-script text-3xl text-gold block mb-4">Architecture</span>
              <h2 className="font-display text-4xl md:text-6xl text-ivory mb-8 leading-tight">
                Sculpted by <br/> <span className="text-gold">Light & Sky</span>
              </h2>
              <p className="font-body text-subtle text-lg leading-relaxed mb-8">
                Perched on the 6th floor of Florence Excellence, Sky Dine is not merely a restaurant; it is an observation deck for the senses. Our signature glass dome offers a shelter of clarity, allowing you to dine amongst the stars regardless of the season.
              </p>
              <Link to="/about" className="hover-underline-animation text-sm uppercase tracking-[0.3em] pb-2">
                Discover The Story
              </Link>
           </div>
        </div>
      </section>

      {/* 3. Menu Preview: Dark Cards */}
      <section className="py-32 bg-charcoal relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-20 flex justify-between items-end">
           <div>
             <span className="font-script text-3xl text-gold">The Palette</span>
             <h2 className="font-display text-5xl text-ivory mt-2">Curated Selections</h2>
           </div>
           <Link to="/menu" className="hidden md:block font-body text-xs text-subtle hover:text-gold uppercase tracking-[0.2em] transition-colors">
             View Full Menu
           </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-8 px-6 lg:px-12 pb-12 overflow-x-auto scrollbar-hide">
           {[
             { title: "North Indian", img: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=2070", desc: "Aromatic spices & clay oven mastery." },
             { title: "Pan-Asian", img: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1925", desc: "Delicate balance of sweet, sour & umami." },
             { title: "Continental", img: "https://images.unsplash.com/photo-1621800043295-a73fe2f76e2c?q=80&w=2072", desc: "Modern European flavors plated to perfection." }
           ].map((item, idx) => (
             <div key={idx} className="min-w-[300px] md:min-w-[400px] group cursor-pointer relative">
                <div className="aspect-[4/5] overflow-hidden mb-6 relative">
                   <div className="absolute inset-0 bg-obsidian/20 group-hover:bg-transparent transition-colors z-10"></div>
                   <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-all duration-[1.5s] ease-out" />
                </div>
                <div className="border-t border-white/10 pt-6 flex justify-between items-start">
                   <div>
                     <span className="font-body text-[10px] text-gold uppercase tracking-[0.2em] mb-2 block">0{idx + 1}</span>
                     <h3 className="font-display text-3xl text-ivory mb-2">{item.title}</h3>
                     <p className="font-body text-subtle text-xs tracking-wide">{item.desc}</p>
                   </div>
                   <ArrowRight className="w-5 h-5 text-gold -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* 4. Featured Review */}
      <section className="py-32 px-6 bg-obsidian border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-5"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-8">
             {[...Array(5)].map((_, i) => (
               <Star key={i} className="w-5 h-5 fill-gold text-gold" />
             ))}
          </div>
          <blockquote className="font-display text-4xl md:text-5xl text-ivory leading-tight mb-10">
            "Exceptional experience from start to finish. The restaurant's ambiance was incredible... It truly felt like a special occasion."
          </blockquote>
          <cite className="font-body text-sm text-gold uppercase tracking-[0.2em] not-italic block mb-12">
            — Recent Guest
          </cite>
          
          <Link to="/reviews" className="inline-block px-10 py-4 border border-white/10 text-ivory font-body text-xs uppercase tracking-[0.3em] hover:bg-gold hover:text-obsidian hover:border-gold transition-all duration-500">
            Read More Stories
          </Link>
        </div>
      </section>

      {/* 5. Quick Contact Section & Map */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            {/* Text & Details */}
            <div>
               <span className="font-script text-3xl text-gold mb-4 block">Visit Us</span>
               <h2 className="font-display text-5xl text-ivory mb-8">Find Your Table</h2>
               <div className="space-y-6 text-subtle font-body text-sm leading-loose mb-10">
                  <div>
                    <strong className="block text-ivory uppercase tracking-widest text-xs mb-2">Location</strong>
                    <p className="max-w-md">{RESTAURANT_INFO.address}</p>
                  </div>
                  <div>
                    <strong className="block text-ivory uppercase tracking-widest text-xs mb-2">Hours</strong>
                    <p>{RESTAURANT_INFO.hours}</p>
                  </div>
                  <div>
                    <strong className="block text-ivory uppercase tracking-widest text-xs mb-2">Contact</strong>
                    <p className="text-gold">{RESTAURANT_INFO.phone.join(" / ")}</p>
                  </div>
               </div>

               <Link to="/contact" className="inline-block px-8 py-4 border border-white/20 text-ivory font-body text-xs uppercase tracking-[0.3em] hover:bg-gold hover:text-obsidian hover:border-gold transition-all duration-500">
                 Book A Table
               </Link>
            </div>

            {/* Embedded Map */}
            <div className="w-full h-[400px] relative border border-white/10 grayscale invert contrast-125 overflow-hidden group">
               <iframe 
                src={RESTAURANT_INFO.mapEmbedUrl} 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                title="Sky Dine Location"
                className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-700"
              ></iframe>
               <div className="absolute inset-0 bg-obsidian/10 pointer-events-none"></div>
            </div>

        </div>
      </section>

      {/* 6. Respectful Invitation */}
      <section className="py-32 bg-obsidian text-center px-6">
        <div className="max-w-3xl mx-auto">
           <span className="font-script text-4xl text-gold mb-6 block">An Invitation</span>
           <p className="font-display text-3xl md:text-5xl text-ivory leading-snug">
             We await the pleasure of your company above the city lights. Come, let us serve you the sky.
           </p>
        </div>
      </section>

    </motion.div>
  );
};

export default Home;