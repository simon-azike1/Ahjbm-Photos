import React from 'react';
import { Camera, Mail, Phone, Instagram, Heart, Award } from 'lucide-react';

const Footer = ({ contact, socialLinks }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 
              className="text-2xl font-bold text-white tracking-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {contact?.name}
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Professional photography dedicated to capturing authentic moments, 
              telling compelling stories, and creating timeless visual narratives 
              that resonate and endure.
            </p>
            <div className="flex items-center gap-2 text-neutral-500 text-sm pt-2">
              <Award size={16} />
              <span>Member of Professional Photographers Association</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            {/* <h4 className="text-white font-semibold uppercase tracking-widest text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Navigate
            </h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-neutral-400 hover:text-white transition-colors duration-300 text-sm group inline-flex items-center gap-2"
                  >
                    <span>{link}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                  </a>
                </li>
              ))}
            </ul> */}
          </div>

          {/* Services */}
          <div className="space-y-4">
            {/* <h4 className="text-white font-semibold uppercase tracking-widest text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Services
            </h4>
            <ul className="space-y-2 text-neutral-400 text-sm">
              <li className="group inline-flex items-center gap-2 hover:text-white transition-colors">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">•</span>
                <span>Event Photography</span>
              </li>
              <li className="group inline-flex items-center gap-2 hover:text-white transition-colors">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">•</span>
                <span>Corporate Events</span>
              </li>
              <li className="group inline-flex items-center gap-2 hover:text-white transition-colors">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">•</span>
                <span>Brand Photography</span>
              </li>
              <li className="group inline-flex items-center gap-2 hover:text-white transition-colors">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">•</span>
                <span>Documentary Coverage</span>
              </li>
              <li className="group inline-flex items-center gap-2 hover:text-white transition-colors">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">•</span>
                <span>Team Portraits</span>
              </li>
            </ul> */}
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold uppercase tracking-widest text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Connect
            </h4>
            <div className="space-y-3">
              <a 
                href={`mailto:${contact?.email}`}
                className="flex items-start gap-3 text-neutral-400 hover:text-white transition-colors duration-300 group"
              >
                <Mail size={18} className="mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm break-all group-hover:underline">{contact?.email}</span>
              </a>
              <a 
                href={`tel:${contact?.phone}`}
                className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors duration-300 group"
              >
                <Phone size={18} className="flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm group-hover:underline">{contact?.phone}</span>
              </a>
              <a 
                href={`https://instagram.com/${contact?.instagram?.replace('@','')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors duration-300 group"
              >
                <Instagram size={18} className="flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm group-hover:underline">{contact?.instagram}</span>
              </a>
            </div>
            <div className="pt-2">
              {/* <a
                href="https://wa.me/212624766818"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black text-xs uppercase tracking-widest font-semibold hover:bg-neutral-200 transition-colors duration-300 rounded-full"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Book on WhatsApp
              </a> */}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-900 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-500">
              <div className="flex items-center gap-2">
                <Camera size={16} />
                <span>Lead Photographer – Anthony</span>
              </div>
              <div className="hidden md:block text-neutral-700">|</div>
              <div className="flex items-center gap-2">
                <span>Based in Morocco</span>
                <span className="text-neutral-700">•</span>
                <span>Available Worldwide</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/212624766818"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2 bg-black from-indigo-500 to-purple-600 text-white text-sm uppercase tracking-widest font-semibold hover:opacity-90 transition-opacity duration-300 rounded-full"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <Phone size={14} />
                Book Now
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-900 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
            <div className="flex items-center gap-6">
              <p>© {currentYear} {contact?.name}. All rights reserved.</p>
              <div className="hidden md:block text-neutral-700">|</div>
              {/* <a 
                href="#privacy" 
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </a> */}
              <div className="hidden md:block text-neutral-700">|</div>
              {/* <a 
                href="#terms" 
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </a> */}
            </div>
            <p className="flex  ml-4 items-center gap-2">
              Crafted with by <a 
                href="https://my-new-portfolio-hazel.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                SimZikTech
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;