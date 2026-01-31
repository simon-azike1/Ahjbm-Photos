import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * ScrollToTop Button Component
 * 
 * Props:
 * - variant: 'blue' | 'white' | 'black' (default: 'blue')
 * - showAfter: number of pixels to scroll before showing (default: 300)
 * - position: 'bottom-right' | 'bottom-left' (default: 'bottom-right')
 */

const ScrollToTop = ({ 
  variant = 'blue', 
  showAfter = 300,
  position = 'bottom-right' 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > showAfter) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, [showAfter]);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Variant styles
  const variants = {
    blue: 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/50',
    white: 'bg-white hover:bg-neutral-100 text-black shadow-white/20',
    black: 'bg-black hover:bg-neutral-900 text-white shadow-black/50'
  };

  // Position styles
  const positions = {
    'bottom-right': 'bottom-8 right-8',
    'bottom-left': 'bottom-8 left-8'
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className={`fixed ${positions[position]} z-50 ${variants[variant]} rounded-full p-4 shadow-2xl transition-all duration-300 group`}
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          whileHover={{ scale: 1.1, y: -4 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            duration: 0.3,
            ease: "easeOut"
          }}
          aria-label="Scroll to top"
        >
          <ArrowUp 
            size={24} 
            className="transform group-hover:-translate-y-1 transition-transform duration-300" 
          />
          
          {/* Optional ripple effect on hover */}
          <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;