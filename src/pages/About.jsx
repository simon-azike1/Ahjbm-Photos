import React from 'react';
import { motion } from 'framer-motion';
import image from '/Images/Anthony About.jpeg';
import { Camera, Heart, Eye, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "People-First",
      description: "Every image is captured with respect for the people and moments at the heart of your story"
    },
    {
      icon: Eye,
      title: "Emotion-Driven",
      description: "Focusing on genuine emotions and authentic expressions that tell compelling stories"
    },
    {
      icon: Camera,
      title: "Professional Excellence",
      description: "Committed to delivering high-quality, clean, and expressive imagery every time"
    },
    {
      icon: Target,
      title: "Storytelling Focus",
      description: "Preserving meaningful moments and powerful messages through visual narratives"
    }
  ];

  const approach = [
    {
      title: "Documentary Style",
      description: "Capturing authentic moments as they unfold naturally, without intrusion or staging"
    },
    {
      title: "Natural Lighting",
      description: "Working with available light to create expressive and genuine imagery"
    },
    {
      title: "Sensitivity & Respect",
      description: "Approaching every moment with care, awareness, and deep respect for your experience"
    },
    {
      title: "Clean Editing",
      description: "Professional post-processing that enhances without over-manipulation"
    }
  ];

  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left - Image */}
          <motion.div
            className="aspect-[3/4] bg-gradient-to-br from-neutral-800 to-neutral-900 relative overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <img src={image} alt="About Hero" className="rounded-lg" />
            </div>
            {/* Decorative Border */}
            <div className="absolute inset-4 border-2 border-black/20"></div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2
              className="text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Capturing Stories,
              <br />
              Preserving Moments
            </h2>
            <div className="w-20 h-1 bg-white"></div>
            <p className="text-neutral-300 text-lg leading-relaxed">
              We are <span className="text-white font-semibold">AHJBM digital</span>, 
              a photography team dedicated to capturing meaningful moments 
              across events, gatherings, and visual storytelling projects.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              Our work focuses on storytelling—preserving genuine emotions, powerful messages, 
              and impactful experiences through clean and expressive imagery. Each photograph 
              is an opportunity to document human connection and shared moments.
            </p>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3
              className="text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Our Values
            </h3>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              The principles that guide every photograph we take
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={value.title}
                className="text-center space-y-4 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <div className="flex justify-center">
                  <div className="p-4 bg-neutral-900 border-2 border-neutral-800 group-hover:border-white transition-all duration-300 transform group-hover:scale-110">
                    <value.icon
                      className="text-neutral-400 group-hover:text-white transition-colors duration-300"
                      size={32}
                    />
                  </div>
                </div>
                <h4
                  className="text-xl font-semibold text-white"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {value.title}
                </h4>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Photography Approach */}
        <div className="bg-neutral-950 border border-neutral-900 p-12 lg:p-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3
                className="text-4xl font-bold text-white mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Our Photography Style
              </h3>
              <p className="text-neutral-400">
                A thoughtful approach that combines technical skill with artistic vision
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {approach.map((item, idx) => (
                <motion.div
                  key={item.title}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h5 className="text-white font-semibold mb-2">{item.title}</h5>
                    <p className="text-neutral-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Summary */}
        <div className="mt-24 text-center space-y-12">
          <h3
            className="text-4xl font-bold text-white"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Professional Experience
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="bg-neutral-900 p-8 border-l-4 border-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4
                className="text-2xl font-semibold text-white mb-2"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                ANTHONY
              </h4>
              <p className="text-neutral-400 text-sm uppercase tracking-widest mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Lead Photographer – Media
              </p>
              <p className="text-neutral-300 text-sm">
                Leading photography coverage, coordinating visual storytelling, and delivering 
                consistent, high-quality images for live events and special programs.
              </p>
            </motion.div>

            <motion.div
              className="bg-neutral-900 p-8 border-l-4 border-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4
                className="text-2xl font-semibold text-white mb-2"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                AHJBM Digital Family
              </h4>
              <p className="text-neutral-400 text-sm uppercase tracking-widest mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Photography Team 
              </p>
              <p className="text-neutral-300 text-sm">
                Contributing to comprehensive visual storytelling and brand representation 
                across digital platforms for the organization.
              </p>
            </motion.div>
          </div>

          <div className="pt-8">
            <motion.a
              href="contact"
              className="inline-block px-8 py-4 bg-white text-black uppercase tracking-widest text-sm font-semibold hover:bg-neutral-200 transition-colors duration-300"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Let's Work Together
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;