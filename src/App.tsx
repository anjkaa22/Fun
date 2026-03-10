/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Coffee, 
  MapPin, 
  Clock, 
  Phone, 
  Instagram, 
  Facebook, 
  Menu as MenuIcon, 
  X, 
  Star, 
  ChevronRight,
  Wind,
  Gamepad2,
  Users,
  MessageCircle,
  Sparkles,
  PartyPopper,
  IceCream,
  Pizza,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface MenuItem {
  name: string;
  price: number;
  description?: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
  icon: React.ReactNode;
  color: string;
}

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Kids Area', href: '#kids' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-lg py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-serif font-bold tracking-tight flex items-center gap-2">
          <span className="text-cafe-dark">Fun</span>
          <span className="text-cafe-accent italic">Square</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-semibold text-cafe-dark/70 hover:text-cafe-accent transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-cafe-dark" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-white border-t border-cafe-dark/5 md:hidden shadow-xl"
          >
            <div className="flex flex-col p-8 space-y-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-serif font-bold text-cafe-dark"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ title, subtitle, centered = true }: { title: string; subtitle?: string; centered?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-6xl font-serif font-bold mb-6 text-cafe-dark"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-cafe-dark/50 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export default function App() {
  const menuData: MenuCategory[] = [
    {
      title: "Coffee",
      icon: <Coffee size={20} />,
      color: "bg-cafe-fun-yellow",
      items: [
        { name: "Espresso", price: 45, description: "Rich and intense single shot" },
        { name: "Cappuccino", price: 75, description: "Espresso with steamed milk and foam" },
        { name: "Latte Macchiato", price: 85, description: "Layered milk and espresso" },
        { name: "Turkish Coffee", price: 50, description: "Traditional strong brew" },
      ]
    },
    {
      title: "Cold Drinks",
      icon: <Wind size={20} />,
      color: "bg-cafe-fun-blue",
      items: [
        { name: "Iced Spanish Latte", price: 95, description: "Sweet and creamy iced coffee" },
        { name: "Fresh Mojito", price: 80, description: "Mint, lime, and soda" },
        { name: "Chocolate Milkshake", price: 90, description: "Rich Belgian chocolate blend" },
        { name: "Smoothie Berry", price: 85, description: "Mixed forest berries" },
      ]
    },
    {
      title: "Desserts",
      icon: <IceCream size={20} />,
      color: "bg-cafe-fun-pink",
      items: [
        { name: "Molten Cake", price: 120, description: "Warm chocolate lava cake" },
        { name: "Waffle Nutella", price: 110, description: "Crispy waffle with hazelnut spread" },
        { name: "Cheesecake", price: 105, description: "New York style with berry topping" },
      ]
    },
    {
      title: "Snacks",
      icon: <Pizza size={20} />,
      color: "bg-cafe-warm",
      items: [
        { name: "Club Sandwich", price: 180, description: "Chicken, eggs, and fresh veggies" },
        { name: "Cheese Fries", price: 95, description: "Crispy fries with melted cheddar" },
        { name: "Chicken Strips", price: 160, description: "Golden fried with honey mustard" },
      ]
    }
  ];

  return (
    <div className="min-h-screen selection:bg-cafe-accent selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1920" 
            alt="Café Rooftop" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-cafe-dark/40 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 text-white tracking-tight">
              Fun Square <span className="italic font-normal text-cafe-accent">Café</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
              Experience the perfect blend of coffee, rooftop vibes, and family fun in Kafr El Dawwar.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="#menu" 
                className="cafe-button bg-cafe-accent text-white w-full sm:w-auto shadow-lg shadow-cafe-accent/20"
              >
                Explore Menu
              </a>
              <a 
                href="#kids" 
                className="cafe-button bg-white text-cafe-dark w-full sm:w-auto shadow-lg"
              >
                Kids Play Zone
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="cafe-card overflow-hidden aspect-[4/5] md:aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800" 
                  alt="Café Interior" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 hidden md:block">
                <div className="cafe-card bg-cafe-warm p-10 border-none">
                  <p className="text-5xl font-serif font-bold text-cafe-dark mb-1">3.4</p>
                  <p className="text-sm font-bold uppercase tracking-widest opacity-60">Star Rating</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cafe-accent/10 rounded-full text-cafe-accent text-sm font-bold mb-8">
                <Sparkles size={16} />
                OUR STORY
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight text-cafe-dark">
                A Place for Every Season and Every Smile.
              </h2>
              <p className="text-lg text-cafe-dark/60 mb-10 leading-relaxed">
                Fun Square isn't just a café; it's a destination. We've created a space that adapts to your mood. 
                Enjoy the breezy summer nights on our open-air rooftop, or find comfort in our glass-covered 
                indoor seating during the winter. It's the perfect spot for friends, families, and coffee lovers.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-cafe-fun-blue/20 rounded-2xl flex items-center justify-center text-cafe-accent shrink-0">
                    <Wind size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Rooftop Vibe</h4>
                    <p className="text-sm text-cafe-dark/50">Breezy and open summer experience.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-cafe-fun-pink/20 rounded-2xl flex items-center justify-center text-cafe-accent shrink-0">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Family Friendly</h4>
                    <p className="text-sm text-cafe-dark/50">Designed for all ages to enjoy.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="section-padding bg-cafe-warm/20">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Our Menu" 
            subtitle="Carefully crafted drinks and snacks to brighten your day."
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            {menuData.map((category, idx) => (
              <motion.div 
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="cafe-card p-10 bg-white"
              >
                <div className="flex items-center gap-4 mb-10">
                  <div className={`w-12 h-12 ${category.color} rounded-2xl flex items-center justify-center text-cafe-dark`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-cafe-dark">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-8">
                  {category.items.map((item) => (
                    <div key={item.name} className="group cursor-pointer">
                      <div className="flex justify-between items-end mb-2">
                        <h4 className="text-lg font-bold group-hover:text-cafe-accent transition-colors">{item.name}</h4>
                        <div className="flex-1 border-b border-cafe-dark/5 mx-4 mb-1.5"></div>
                        <span className="font-bold text-cafe-dark">E£{item.price}</span>
                      </div>
                      {item.description && <p className="text-sm text-cafe-dark/40">{item.description}</p>}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Kids Area Section */}
      <section id="kids" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="cafe-card bg-cafe-dark p-12 md:p-24 relative overflow-hidden border-none text-white shadow-2xl shadow-cafe-accent/20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cafe-accent/20 rounded-full -mr-48 -mt-48 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cafe-fun-blue/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
            
            <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 px-6 py-2 bg-cafe-accent/20 rounded-full text-cafe-accent text-sm font-bold mb-8 border border-cafe-accent/30">
                  <Gamepad2 size={20} />
                  KIDS ADVENTURE ZONE
                </div>
                <h2 className="text-4xl md:text-7xl font-serif font-bold mb-8 leading-tight">
                  Where Kids Can <br />
                  <span className="text-cafe-accent italic font-normal">Be Kids.</span>
                </h2>
                <p className="text-xl text-white/70 mb-12 leading-relaxed max-w-lg">
                  Our dedicated play area is safe, colorful, and full of excitement. 
                  With our timed entertainment system, your little ones will be 
                  happily engaged while you relax.
                </p>
                <div className="grid sm:grid-cols-2 gap-8">
                  {[
                    { text: "Supervised Play Area", icon: <Sparkles size={18} /> },
                    { text: "Timed Play System", icon: <Clock size={18} /> },
                    { text: "Safe Environment", icon: <Users size={18} /> },
                    { text: "Family Friendly", icon: <PartyPopper size={18} /> }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-cafe-accent shrink-0">
                        {item.icon}
                      </div>
                      <span className="font-bold text-white/90">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                className="cafe-card bg-white p-4 overflow-hidden aspect-video shadow-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&q=80&w=800" 
                  alt="Kids Play Area" 
                  className="w-full h-full object-cover rounded-[1.5rem]"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section-padding bg-cafe-fun-yellow/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Café Vibe" 
            subtitle="A glimpse into the atmosphere at Fun Square."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600"
            ].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="cafe-card bg-white overflow-hidden h-80 group"
              >
                <img 
                  src={src} 
                  alt={`Gallery ${i}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Guest Reviews" />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "مكان اوبن اير وروف تحفه في الصيف، القعدة هناك مريحة جداً والخدمة ممتازة.",
                author: "Ahmed Ali",
                rating: 5
              },
              {
                text: "The coffee is great and the kids play area is a lifesaver for parents. Highly recommended!",
                author: "Sarah M.",
                rating: 4
              },
              {
                text: "Nice atmosphere for a casual hangout. The rooftop view is lovely during sunset.",
                author: "Mohamed H.",
                rating: 4
              }
            ].map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="cafe-card p-12 bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-6 text-cafe-accent">
                    {[...Array(5)].map((_, star) => (
                      <Star key={star} size={18} fill={star < review.rating ? "currentColor" : "none"} />
                    ))}
                  </div>
                  <p className="text-xl font-serif italic mb-10 leading-relaxed text-cafe-dark/80">"{review.text}"</p>
                </div>
                <p className="font-bold text-cafe-dark tracking-wide">— {review.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-cafe-dark text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-12 leading-tight">Visit Us Today.</h2>
              <div className="space-y-10 mb-16">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-cafe-accent shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Location</h4>
                    <p className="text-white/50">44VF+CJF, Kafr El Dawwar, Beheira Governorate, Egypt</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-cafe-accent shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Opening Hours</h4>
                    <p className="text-white/50">Daily: 10:00 AM – 2:00 AM</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-cafe-accent shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Contact</h4>
                    <p className="text-white/50">+20 123 456 7890</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-6">
                <a 
                  href="https://wa.me/201234567890" 
                  className="cafe-button bg-cafe-accent text-white flex items-center gap-3"
                >
                  <MessageCircle size={20} />
                  WhatsApp Us
                </a>
                <div className="flex gap-4">
                  <a href="#" className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all">
                    <Facebook size={24} />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="cafe-card bg-white/5 border-none h-[500px] flex items-center justify-center flex-col p-12 text-center"
            >
              <div className="w-20 h-20 bg-cafe-accent/20 rounded-3xl flex items-center justify-center mb-8">
                <MapPin size={40} className="text-cafe-accent" />
              </div>
              <h3 className="text-3xl font-serif font-bold mb-4">Find Your Way</h3>
              <p className="text-white/40 mb-10 max-w-sm">
                We're located in the heart of Kafr El Dawwar. Click below to open directions in Google Maps.
              </p>
              <a 
                href="https://www.google.com/maps/search/44VF%2BCJF,+Kafr+El+Dawwar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cafe-button bg-white text-cafe-dark inline-flex items-center gap-2"
              >
                Open Google Maps <ArrowRight size={18} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-cafe-bg text-cafe-dark/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <h3 className="text-2xl font-serif font-bold text-cafe-dark mb-2">Fun Square</h3>
            <p className="text-sm">© 2026 Fun Square Café. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-10 text-sm font-bold tracking-widest uppercase">
            <a href="#home" className="hover:text-cafe-accent transition-colors">Home</a>
            <a href="#about" className="hover:text-cafe-accent transition-colors">About</a>
            <a href="#menu" className="hover:text-cafe-accent transition-colors">Menu</a>
            <a href="#contact" className="hover:text-cafe-accent transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
