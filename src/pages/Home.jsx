import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Camera, Award, Users, Clock } from "lucide-react";
import HomeExtras from "../components/HomeExtra";

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // External image URLs
  const heroImages = [
    {
      src: "https://static.vecteezy.com/system/resources/thumbnails/046/964/644/small/closeup-shot-of-vintage-dslr-camera-retro-technology-background-travel-gear-copy-space-area-photo.jpg",
      text: "Authentic moments captured with care",
    },
    
    {
      src: "https://viscorner.com/_next/image?url=https%3A%2F%2Fimages.viscorner.com%2Fcms%2Fphotography_on_Vis_Corner_711779f72c.jpg&w=3840&q=75",
      text: "People and connection in every frame",
    },
    {
      src: "https://aetherdigital.com/wp-content/uploads/2021/05/How-to-Get-a-Blurred-Background-With-a-DSLR-Camera.jpg",
      text: "Telling stories through intentional imagery",
    },
  ];

  // Images for the horizontal scroller
  const scrollerImages = [
   
     "https://images.unsplash.com/photo-1516802273409-68333ad7749c?w=600",
    "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?w=600",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600",
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600",
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
    "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600",
    "https://images.unsplash.com/photo-1506748200771-43c1c5686de5?w=600",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: Camera, number: "500+", label: "Events Documented" },
    { icon: Award, number: "50+", label: "Projects Completed" },
    { icon: Users, number: "1000+", label: "Moments Captured" },
    { icon: Clock, number: "3+", label: "Years Experience" },
  ];

  const features = [
    {
      title: "Event Photography",
      description:
        "Live gatherings, performances, and key moments captured with sensitivity and respect",
    },
    {
      title: "Documentary Coverage",
      description:
        "Conferences, seminars, and special programs documented with professional, storytelling-driven photography",
    },
    {
      title: "Media Team Leadership",
      description:
        "Experienced in leading photography teams and coordinating visual storytelling for organizations",
    },
  ];

  return (
    <section id="home" className="relative min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Slideshow */}
        {heroImages.map((image, idx) => (
          <motion.div
            key={idx}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${image.src})`,
              zIndex: idx === currentImageIndex ? 1 : 0,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: idx === currentImageIndex ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 flex items-center justify-center px-6">
              <motion.p
                className="text-white text-center text-xl md:text-2xl lg:text-3xl font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: idx === currentImageIndex ? 1 : 0, y: idx === currentImageIndex ? 0 : 20 }}
                transition={{ duration: 1 }}
              >
                {image.text}
              </motion.p>
            </div>
          </motion.div>
        ))}

        {/* Hero Content */}
        <motion.div
          className="relative z-10 text-center px-6 max-w-5xl mx-auto space-y-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h2
            className=" mt-30 text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }} > Capturing <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-300 to-neutral-500"> The Moments</span>
          </h2>

          <motion.p
            className="mb-4 mt-25 text-lg text-neutral-400 uppercase tracking-widest"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            AHJBM Photography
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
          >
            <a
              href="#portfolio"
              className="px-8 py-4 bg-white text-black uppercase tracking-widest text-sm font-semibold hover:bg-neutral-200 transition-all duration-300 transform hover:scale-105"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              View Portfolio
            </a>
                  <a
          href="https://wa.me/+212624766818"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-transparent border-2 border-white text-white uppercase tracking-widest text-sm font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Book a Session
        </a>
          </motion.div>

          <motion.div
            className="pt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            target="_blank"
            transition={{ duration: 1.2, delay: 0.8 }}
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full mx-auto relative">
              <motion.div
                className="w-1.5 h-3 bg-white rounded-full absolute top-2 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Horizontal Image Scroller */}
      <div className="py-12 md:py-16 bg-neutral-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8 md:mb-12">
            {/* <h3
              className="text-2xl md:text-3xl font-bold text-white mb-2"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Featured Work
            </h3> */}
            <div className="w-16 h-1 bg-white mx-auto"></div>
          </div>
        </div>

        {/* Scrolling Container */}
        <div className="relative overflow-hidden">
          {/* Duplicate images for seamless infinite scroll */}
          <div className="flex animate-scroll">
            {[...scrollerImages, ...scrollerImages].map((src, idx) => (
              <div key={idx} className="flex-shrink-0 w-[300px] md:w-[400px] mx-4">
                <div className="relative group overflow-hidden rounded-lg shadow-2xl">
                  <img
                    src={src}
                    alt={`Portfolio ${idx + 1}`}
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-semibold text-lg">Portfolio Piece</p>
                    </div>
                  </div>
                  <div className="absolute inset-1 border-2 border-white/20"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Pause on hover using CSS */}
          <style jsx>{`
            @keyframes scroll {
              0% {
                transform: translateY(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-scroll {
              animation: scroll 6s linear infinite;
            }
            .animate-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-neutral-950 border-y border-neutral-900 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                className="text-center space-y-3 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-neutral-900 border border-neutral-800 group-hover:border-white transition-all duration-300 transform group-hover:scale-110">
                    <stat.icon
                      className="text-neutral-400 group-hover:text-white transition-colors duration-300"
                      size={28}
                    />
                  </div>
                </div>
                <p className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {stat.number}
                </p>
                <p className="text-neutral-500 text-sm uppercase tracking-widest" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                className="bg-neutral-950 border border-neutral-900 p-8 hover:border-neutral-700 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <div className="space-y-4">
                  <div className="w-12 h-1 bg-white group-hover:w-24 transition-all duration-300"></div>
                  <h3 className="text-2xl font-semibold text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {feature.title}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <HomeExtras />
    </section>
  );
};

export default Home;