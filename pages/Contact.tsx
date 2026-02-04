import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RESTAURANT_INFO, SOCIAL_LINKS } from '../constants';
import { Phone, MapPin, Send, MessageCircle, Navigation, ExternalLink, ArrowUpRight, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.message) {
      alert("Please provide at least your name and a message.");
      return;
    }

    const phoneNumber = "917228885060"; // Owner's number
    const text = `*New Inquiry from Website*%0A%0A*Name:* ${formState.name}%0A*Phone:* ${formState.phone}%0A*Email:* ${formState.email}%0A*Message:* ${formState.message}`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  const handleGetDirections = () => {
    const destination = encodeURIComponent(`${RESTAURANT_INFO.name}, ${RESTAURANT_INFO.address}`);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${destination}`, '_blank');
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen bg-obsidian pt-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
           <span className="font-script text-3xl md:text-4xl text-gold mb-2 block">Inquiry</span>
           <h1 className="font-display text-5xl md:text-8xl text-ivory">CONTACT</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left Column: Contact Details & Actions */}
          <div className="flex flex-col gap-12">
             
             {/* 1. Written Details (Restored) */}
             <div className="space-y-8 border-b border-white/10 pb-12">
                <div className="group">
                   <span className="flex items-center gap-3 font-body text-[10px] text-gold uppercase tracking-[0.2em] mb-3 group-hover:text-white transition-colors">
                     <MapPin className="w-4 h-4" /> Address
                   </span>
                   <p className="font-display text-xl md:text-2xl text-ivory leading-relaxed">
                     {RESTAURANT_INFO.address}
                   </p>
                </div>
                
                <div className="group">
                   <span className="flex items-center gap-3 font-body text-[10px] text-gold uppercase tracking-[0.2em] mb-3 group-hover:text-white transition-colors">
                     <Phone className="w-4 h-4" /> Phone
                   </span>
                   <div className="flex flex-col gap-2">
                     {RESTAURANT_INFO.phone.map((ph, i) => (
                        <a key={i} href={`tel:${ph.replace(/\s/g, '')}`} className="font-display text-2xl text-ivory hover:text-gold transition-colors w-fit">
                          {ph}
                        </a>
                     ))}
                   </div>
                </div>

                <div className="group">
                   <span className="flex items-center gap-3 font-body text-[10px] text-gold uppercase tracking-[0.2em] mb-3 group-hover:text-white transition-colors">
                     <Clock className="w-4 h-4" /> Timings
                   </span>
                   <p className="font-display text-xl text-ivory">{RESTAURANT_INFO.hours}</p>
                </div>
             </div>

             {/* 2. Direct Action Buttons */}
             <div className="space-y-4">
                <div className="mb-6">
                   <h3 className="font-display text-2xl text-ivory mb-2">The Concierge</h3>
                   <p className="font-body text-xs text-subtle uppercase tracking-widest">Digital Assistance</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href={`tel:${RESTAURANT_INFO.phone[0].replace(/\s/g, '')}`} className="flex items-center gap-4 p-6 border border-white/10 hover:border-gold hover:bg-white/[0.02] transition-all duration-300">
                     <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-ivory">
                        <Phone className="w-4 h-4" />
                     </div>
                     <div>
                        <span className="block font-display text-lg text-ivory">Call Now</span>
                        <span className="block font-body text-[8px] text-subtle uppercase tracking-widest">Voice Support</span>
                     </div>
                  </a>

                  <button onClick={handleWhatsAppSubmit} className="flex items-center gap-4 p-6 border border-white/10 hover:border-[#25D366] hover:bg-white/[0.02] transition-all duration-300">
                     <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-ivory">
                        <MessageCircle className="w-4 h-4" />
                     </div>
                     <div>
                        <span className="block font-display text-lg text-ivory">WhatsApp</span>
                        <span className="block font-body text-[8px] text-subtle uppercase tracking-widest">Chat Butler</span>
                     </div>
                  </button>

                  <button onClick={handleGetDirections} className="md:col-span-2 flex items-center justify-between gap-4 p-6 border border-white/10 hover:border-blue-500 hover:bg-white/[0.02] transition-all duration-300 group">
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-ivory">
                           <Navigation className="w-4 h-4" />
                        </div>
                        <div>
                           <span className="block font-display text-lg text-ivory">Navigate</span>
                           <span className="block font-body text-[8px] text-subtle uppercase tracking-widest">Get Directions</span>
                        </div>
                     </div>
                     <ArrowUpRight className="w-5 h-5 text-subtle group-hover:text-blue-500 transition-colors" />
                  </button>
                </div>
             </div>

             {/* 3. External Platforms */}
             <div>
                <span className="font-body text-[10px] text-gold uppercase tracking-[0.2em] block mb-6">Reservations & Reviews</span>
                <div className="flex flex-wrap gap-4">
                   {SOCIAL_LINKS.filter(link => ['Justdial', 'EazyDiner', 'Swiggy', 'Dineout'].includes(link.name)).map((link, idx) => (
                      <a 
                        key={idx} 
                        href={link.url} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center gap-3 px-5 py-3 border border-white/5 bg-charcoal hover:border-gold/30 hover:text-gold transition-all"
                      >
                         <ExternalLink className="w-3 h-3" />
                         <span className="font-display text-sm text-ivory">{link.name}</span>
                      </a>
                   ))}
                </div>
             </div>

          </div>

          {/* Right Column: Correspondence Form */}
          <div>
            <div className="bg-charcoal/50 p-8 md:p-12 border border-white/5 relative overflow-hidden h-full">
               <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-[50px] pointer-events-none"></div>
               
               <div className="mb-10">
                  <h3 className="font-display text-3xl md:text-4xl text-ivory mb-4">Message Us</h3>
                  <p className="font-body text-sm text-subtle leading-relaxed">
                     Fill out the form below to send a direct request to our management via WhatsApp.
                  </p>
               </div>

               <form onSubmit={handleWhatsAppSubmit} className="space-y-10">
                  <div className="relative">
                     <input 
                       type="text" 
                       name="name" 
                       id="name"
                       value={formState.name} 
                       onChange={handleInputChange} 
                       className="block w-full bg-transparent border-b border-white/10 py-4 text-ivory font-display text-xl focus:outline-none focus:border-gold transition-colors peer placeholder-transparent"
                       placeholder="Name"
                       required
                     />
                     <label htmlFor="name" className="absolute left-0 -top-3.5 text-[10px] uppercase tracking-widest text-gold transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-subtle peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-gold">
                        Your Name *
                     </label>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                     <div className="relative">
                        <input 
                          type="tel" 
                          name="phone"
                          id="phone" 
                          value={formState.phone} 
                          onChange={handleInputChange} 
                          className="block w-full bg-transparent border-b border-white/10 py-4 text-ivory font-display text-xl focus:outline-none focus:border-gold transition-colors peer placeholder-transparent"
                          placeholder="Phone"
                        />
                        <label htmlFor="phone" className="absolute left-0 -top-3.5 text-[10px] uppercase tracking-widest text-gold transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-subtle peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-gold">
                           Phone Number
                        </label>
                     </div>
                     <div className="relative">
                        <input 
                          type="email" 
                          name="email"
                          id="email" 
                          value={formState.email} 
                          onChange={handleInputChange} 
                          className="block w-full bg-transparent border-b border-white/10 py-4 text-ivory font-display text-xl focus:outline-none focus:border-gold transition-colors peer placeholder-transparent"
                          placeholder="Email"
                        />
                        <label htmlFor="email" className="absolute left-0 -top-3.5 text-[10px] uppercase tracking-widest text-gold transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-subtle peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-gold">
                           Email Address
                        </label>
                     </div>
                  </div>

                  <div className="relative mt-4">
                     <textarea 
                       name="message" 
                       id="message"
                       value={formState.message} 
                       onChange={handleInputChange} 
                       rows={5}
                       className="block w-full bg-transparent border-b border-white/10 py-4 text-ivory font-display text-xl focus:outline-none focus:border-gold transition-colors peer placeholder-transparent resize-none"
                       placeholder="Message"
                       required
                     ></textarea>
                     <label htmlFor="message" className="absolute left-0 -top-3.5 text-[10px] uppercase tracking-widest text-gold transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-subtle peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-gold">
                        Your Message *
                     </label>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-gold text-obsidian font-body text-xs uppercase tracking-[0.3em] py-6 hover:bg-white transition-colors duration-500 flex items-center justify-center gap-4 mt-8"
                  >
                     Send Request <Send className="w-4 h-4" />
                  </button>
               </form>
            </div>
          </div>

        </div>
      </div>

      {/* Map Section */}
      <div className="h-[400px] w-full relative grayscale invert contrast-125 border-t border-white/10">
         <iframe 
          src={RESTAURANT_INFO.mapEmbedUrl} 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          title="Sky Dine Location"
        ></iframe>
        <div className="absolute inset-0 bg-obsidian/10 pointer-events-none"></div>
      </div>

    </motion.div>
  );
};

export default Contact;