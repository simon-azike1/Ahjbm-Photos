import React from 'react';
import { motion } from 'framer-motion';
import { Shirt, Scissors, Watch, ShoppingBag, Sparkles, Users } from 'lucide-react';

const MensStyling = () => {
  const services = [
    {
      image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&h=600&fit=crop",
      title: "Wardrobe Consultation",
      description: "Personalized wardrobe assessment and curation for your lifestyle, body type, and personal style goals."
    },
    {
      image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&h=600&fit=crop",
      title: "Grooming & Personal Care",
      description: "Expert guidance on hair care, skincare routines, and grooming habits that complement your appearance."
    },
    {
      image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800&h=600&fit=crop",
      title: "Accessory Styling",
      description: "Learn how to select and pair watches, jewelry, belts, shoes, and other accessories perfectly."
    },
    {
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop",
      title: "Personal Shopping",
      description: "Guided shopping experiences with professional stylists who understand your budget and preferences."
    },
    {
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=600&fit=crop",
      title: "Occasion Styling",
      description: "Complete styling solutions for weddings, business events, formal occasions, and special events."
    },
    {
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=600&fit=crop",
      title: "Image & Confidence Coaching",
      description: "Build lasting confidence through authentic personal style that reflects who you truly are."
    }
  ];

  const principles = [
    {
      title: "Fit Above All",
      description: "Well-fitted clothing is the foundation of great style. Learn how clothing should properly sit on your body."
    },
    {
      title: "Quality Over Quantity",
      description: "Invest in timeless, well-made pieces that will serve you for years rather than fast fashion trends."
    },
    {
      title: "Authentic Expression",
      description: "Style should feel like you. We don't create clones—we help you discover and enhance your unique look."
    },
    {
      title: "Practical Versatility",
      description: "Build a wardrobe that works for your real life, from professional settings to casual weekends."
    }
  ];

  return (
    <section id="mens-styling" className="py-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-20">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Men's Styling & Appearance
          </h1>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-neutral-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Transform your personal style with professional guidance. From wardrobe essentials to confident presentation, 
            we help men develop authentic, practical style that works for every area of life.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mb-24">
          <h2 
            className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Our Styling Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                className="bg-neutral-900 border border-neutral-800 overflow-hidden hover:border-neutral-700 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 
                    className="text-xl font-semibold text-white mb-3"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Styling Principles */}
        <div className="bg-neutral-950 border border-neutral-800 p-12 mb-24">
          <h2 
            className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Core Styling Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {principles.map((principle, idx) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <h3 
                  className="text-2xl font-semibold text-white mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {principle.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center bg-gradient-to-br from-neutral-900 to-neutral-950 p-12 border border-neutral-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Ready to Transform Your Style?
          </h2>
          <p className="text-neutral-400 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a complimentary initial consultation to discuss your style goals and discover how we can help.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-10 py-4 bg-white text-black uppercase tracking-widest text-sm font-semibold hover:bg-neutral-200 transition-all duration-300"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Book Your Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MensStyling;