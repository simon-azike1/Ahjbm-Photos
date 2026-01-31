import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Award } from 'lucide-react';

const EventPhotos = () => {
  const events = [
    {
      id: 1,
      title: "Annual Leadership Conference 2024",
      type: "conference",
      date: "March 2024",
      description: "Three-day conference featuring speakers, workshops, and networking sessions",
      images: 6,
      featured: true,
      coverImage: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      title: "Team Building Retreat",
      type: "retreat",
      date: "June 2024",
      description: "Weekend retreat focused on team development and community building",
      images: 8,
      featured: false,
      coverImage: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "Professional Development Summit",
      type: "seminar",
      date: "September 2024",
      description: "Empowering professionals through expert-led training and workshops",
      images: 5,
      featured: true,
      coverImage: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop"
    },
    {
      id: 4,
      title: "Community Outreach Initiative",
      type: "community",
      date: "October 2024",
      description: "Serving the community through meaningful engagement and action",
      images: 10,
      featured: false,
      coverImage: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop"
    },
    {
      id: 5,
      title: "Holiday Celebration Gala",
      type: "special",
      date: "December 2024",
      description: "Festive celebration featuring performances, speeches, and community fellowship",
      images: 12,
      featured: true,
      coverImage: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&h=600&fit=crop"
    },
    {
      id: 6,
      title: "Women's Leadership Conference",
      type: "conference",
      date: "February 2025",
      description: "Inspiring and equipping women in professional growth and leadership",
      images: 7,
      featured: false,
      coverImage: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop"
    }
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="events" className="py-24 bg-black">
      <div className="mt-24 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            className="text-5xl lg:text-6xl font-bold text-white tracking-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Event Photography
          </motion.h2>
          <motion.p 
            className="text-neutral-400 text-lg max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Professional coverage of conferences, seminars, and special events. 
            Blending documentary-style storytelling with clean, professional compositions.
          </motion.p>
        </div>

        {/* Stats Bar */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="text-center space-y-2"
            variants={statsVariants}
            custom={0}
          >
            <div className="flex justify-center mb-3">
              <Calendar className="text-neutral-400" size={32} />
            </div>
            <p className="text-4xl font-bold text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>50+</p>
            <p className="text-neutral-500 text-sm uppercase tracking-widest" style={{ fontFamily: "'Montserrat', sans-serif" }}>Events Covered</p>
          </motion.div>
          <motion.div
            className="text-center space-y-2"
            variants={statsVariants}
            custom={1}
          >
            <div className="flex justify-center mb-3">
              <Users className="text-neutral-400" size={32} />
            </div>
            <p className="text-4xl font-bold text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>1000+</p>
            <p className="text-neutral-500 text-sm uppercase tracking-widest" style={{ fontFamily: "'Montserrat', sans-serif" }}>Attendees Captured</p>
          </motion.div>
          <motion.div
            className="text-center space-y-2"
            variants={statsVariants}
            custom={2}
          >
            <div className="flex justify-center mb-3">
              <Award className="text-neutral-400" size={32} />
            </div>
            <p className="text-4xl font-bold text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>100%</p>
            <p className="text-neutral-500 text-sm uppercase tracking-widest" style={{ fontFamily: "'Montserrat', sans-serif" }}>Client Satisfaction</p>
          </motion.div>
        </motion.div>

        {/* Events Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {events.map((event, idx) => (
            <motion.div
              key={event.id}
              className="group relative bg-neutral-900 overflow-hidden hover:shadow-2xl transition-all duration-500"
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                boxShadow: "0 25px 50px -12px rgba(255, 255, 255, 0.15)",
                transition: { duration: 0.3 }
              }}
            >
              {/* Featured Badge */}
              {event.featured && (
                <motion.div 
                  className="absolute top-4 right-4 z-10 bg-white text-black px-3 py-1 text-xs uppercase tracking-widest font-semibold"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Featured
                </motion.div>
              )}

              {/* Image with Overlay */}
              <div className="aspect-[4/3] relative overflow-hidden">
                {/* Actual Image */}
                <img 
                  src={event.coverImage} 
                  alt={event.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                {/* Hover Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-black/70 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-white text-sm uppercase tracking-widest">View Gallery</span>
                </motion.div>
              </div>

              {/* Event Info */}
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span 
                    className="text-xs uppercase tracking-widest text-neutral-500"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {event.date}
                  </span>
                  <span className="text-xs text-neutral-600">{event.images} Photos</span>
                </div>
                <motion.h3 
                  className="text-xl font-semibold text-white transition-colors"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  whileHover={{ color: "rgb(212, 212, 212)" }}
                  transition={{ duration: 0.3 }}
                >
                  {event.title}
                </motion.h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {event.description}
                </p>
                <motion.button 
                  className="text-white text-sm uppercase tracking-widest transition-colors flex items-center gap-2 mt-4 group/btn"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span style={{ fontFamily: "'Montserrat', sans-serif" }}>View Gallery</span>
                  <span>→</span>
                </motion.button>
              </div>

              {/* Bottom Border Animation */}
              <motion.div 
                className="h-1 bg-white origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-20 text-center space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h3 
            className="text-3xl font-semibold text-white"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Need Event Coverage?
          </motion.h3>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            From intimate gatherings to large conferences, I bring professional, 
            documentary-style coverage that tells the complete story of your event.
          </p>
          <motion.a 
            href="https://wa.me/+212624766818"
            className="inline-block px-8 py-4 bg-white text-black uppercase tracking-widest text-sm font-semibold hover:bg-neutral-200 transition-colors duration-300"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Book Your Event
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default EventPhotos;