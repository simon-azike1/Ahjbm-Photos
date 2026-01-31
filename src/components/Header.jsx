import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Main navigation links (visible in navbar)
  const mainNavLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' }
  ];

  // Dropdown links (hidden under "More")
  const dropdownLinks = [
    { name: 'Projects', href: '/projects' },
    { name: 'Events', href: '/events' },
    { name: 'Blog', href: '/blog' },
    { name: 'Team', href: '/team' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-2xl' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo/Brand */}
          <a 
            href="/" 
            className="flex items-center text-2xl lg:text-3xl font-bold tracking-tight text-white hover:text-neutral-300 transition-colors duration-300"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            <img src="./AHJBM logo.png" alt="AHJBM logo" className='ml-2 w-10'/>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Main Navigation Links */}
            {mainNavLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm tracking-widest uppercase text-neutral-300 hover:text-white transition-all duration-300 relative group"
                style={{ 
                  fontFamily: "'Montserrat', sans-serif",
                  animationDelay: `${index * 50}ms`
                }}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            {/* Dropdown Menu */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-1 text-sm tracking-widest uppercase text-neutral-300 hover:text-white transition-all duration-300 relative group"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                More
                <ChevronDown 
                  size={16} 
                  className={`transform transition-transform duration-300 ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
                <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
              </button>

              {/* Dropdown Content */}
              {isDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-black/95 backdrop-blur-sm border border-neutral-800 shadow-2xl  overflow-hidden">
                  {dropdownLinks.map((link, index) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-6 py-3 text-sm tracking-widest uppercase text-neutral-300 hover:text-white hover:bg-neutral-900 transition-all duration-300"
                      style={{ 
                        fontFamily: "'Montserrat', sans-serif",
                        animation: `fadeInDown 0.3s ease-out ${index * 0.05}s backwards`
                      }}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white hover:text-neutral-300 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-6 space-y-4 border-t border-neutral-800">
            {/* Main links in mobile */}
            {mainNavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm tracking-widest uppercase text-neutral-300 hover:text-white transition-all duration-300 hover:translate-x-2"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {link.name}
              </a>
            ))}
            
            {/* Separator */}
            <div className="border-t border-neutral-800 my-2"></div>
            
            {/* Dropdown links in mobile */}
            {dropdownLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm tracking-widest uppercase text-neutral-400 hover:text-white transition-all duration-300 hover:translate-x-2 pl-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {link.name}
              </a>
            ))}


          </div>
        </div>
      </nav>

      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
};

export default Header;