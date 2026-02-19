import React, { useState } from 'react';
import { Mail, Phone, Instagram, MapPin, Send, CheckCircle } from 'lucide-react';
import {motion} from "framer-motion"
import FAQ from '../components/FAQ';
import { submitInquiry } from '../lib/contentApi';
import usePublicCollection from '../hooks/usePublicCollection';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    eventDate: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { items: contacts } = usePublicCollection('contact', []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitInquiry(formData);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        eventDate: '',
        message: ''
      });
    } catch (error) {
      console.error(error);
      setIsSubmitted(false);
    }
  };

  const defaultContactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "akoianthonyw@gmail.com",
      link: "mailto:akoianthonyw@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone / WhatsApp",
      value: "+212 617 827 666",
      link: "tel:+212617827666"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@Athony W. Akoi",
      // link: "https://instagram.com/athonyw.akoi"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Temara, Morocco",
      link: null
    }
  ];
  const contactRecord = contacts[0];
  const contactInfo = contactRecord
    ? [
        { icon: Mail, label: "Email", value: contactRecord.email || "N/A", link: contactRecord.email ? `mailto:${contactRecord.email}` : null },
        { icon: Phone, label: "Phone / WhatsApp", value: contactRecord.phone || "N/A", link: contactRecord.phone ? `tel:${contactRecord.phone}` : null },
        { icon: Instagram, label: "Instagram", value: contactRecord.instagram || "N/A", link: null },
        { icon: MapPin, label: "Location", value: contactRecord.location || "Temara, Morocco", link: null }
      ]
    : defaultContactInfo;

  const services = [
    "Church Photography",
    "Event Coverage",
    "Conference Documentation",
    "Organizational Media",
    "Other"
  ];

  return (
    <section id="contact" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-24">
        {/* Section Header */}
    <motion.div
  className="text-center mb-16 space-y-4"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  <h1 className="text-white text-4xl md:text-5xl font-bold tracking-wide">
    Get in Touch
  </h1>
  <p className="text-neutral-300 max-w-xl mx-auto text-sm md:text-base">
    We’d love to hear from you. Reach out for inquiries, collaborations, or any questions you may have.
  </p>
</motion.div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-35">
          {/* Contact Form */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 
                className="text-3xl font-semibold text-white"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Send a Message
              </h3>
              <p className="text-neutral-400">
                Fill out the form below and I'll get back to you within 24 hours.
              </p>
            </div>

            {isSubmitted && (
              <div className="bg-green-900/20 border border-green-700 p-4 flex items-center gap-3 text-green-300">
                <CheckCircle size={20} />
                <span>Thank you! Your message has been sent successfully.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm uppercase tracking-widest text-neutral-400 mb-2"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-neutral-800 text-white focus:border-white focus:outline-none transition-colors duration-300"
                  placeholder="John Doe"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm uppercase tracking-widest text-neutral-400 mb-2"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-neutral-800 text-white focus:border-white focus:outline-none transition-colors duration-300"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label 
                    htmlFor="phone" 
                    className="block text-sm uppercase tracking-widest text-neutral-400 mb-2"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-neutral-800 text-white focus:border-white focus:outline-none transition-colors duration-300"
                    placeholder="+212 XXX XXX XXX"
                  />
                </div>
              </div>

              {/* Service & Event Date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label 
                    htmlFor="service" 
                    className="block text-sm uppercase tracking-widest text-neutral-400 mb-2"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-neutral-800 text-white focus:border-white focus:outline-none transition-colors duration-300"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label 
                    htmlFor="eventDate" 
                    className="block text-sm uppercase tracking-widest text-neutral-400 mb-2"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Event Date
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-neutral-800 text-white focus:border-white focus:outline-none transition-colors duration-300"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm uppercase tracking-widest text-neutral-400 mb-2"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-neutral-800 text-white focus:border-white focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell us about your event, your vision, and any specific requirements..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-4 bg-white text-black uppercase tracking-widest text-sm font-semibold hover:bg-neutral-200 transition-all duration-300 flex items-center justify-center gap-2 group"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Send Message
                <Send size={18} className="transform group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 
                className="text-3xl font-semibold text-white"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Contact Information
              </h3>
              <p className="text-neutral-400">
                Prefer to reach out directly? Use any of the methods below.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, idx) => (
                <div
                  key={info.label}
                  className="bg-black border border-neutral-800 p-6 hover:border-neutral-600 transition-all duration-300"
                  style={{
                    animation: `fadeInLeft 0.6s ease-out ${idx * 0.1}s backwards`
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-neutral-900">
                      <info.icon className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm uppercase tracking-widest text-neutral-500 mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        {info.label}
                      </p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          target={info.icon === Instagram ? "_blank" : undefined}
                          rel={info.icon === Instagram ? "noopener noreferrer" : undefined}
                          className="text-white hover:text-neutral-300 transition-colors duration-300 break-all"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white">{info.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Info */}
            <div className="bg-black border-2 border-neutral-800 p-8 space-y-6">
              <h4 
                className="text-2xl font-semibold text-white"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Quick Info
              </h4>
              <div className="space-y-4 text-neutral-300">
                <div className="flex items-start gap-3">
                  <span className="text-white mt-1">→</span>
                  <div>
                    <p className="font-semibold text-white mb-1">Response Time</p>
                    <p className="text-sm text-neutral-400">Within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-white mt-1">→</span>
                  <div>
                    <p className="font-semibold text-white mb-1">Booking Lead Time</p>
                    <p className="text-sm text-neutral-400">Minimum 2 weeks recommended</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-white mt-1">→</span>
                  <div>
                    <p className="font-semibold text-white mb-1">Delivery Time</p>
                    <p className="text-sm text-neutral-400">5-7 business days (standard)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-white mt-1">→</span>
                  <div>
                    <p className="font-semibold text-white mb-1">Service Areas</p>
                    <p className="text-sm text-neutral-400">Morocco & surrounding regions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="bg-neutral-900 p-8 border-l-4 border-white">
              <p className="text-neutral-300 italic mb-4 leading-relaxed">
                "We captured international conferences beautifully. Our attention to 
                detail and respect for the coorperate world moments are exceptional."
              </p>
              <p className="text-sm text-neutral-500 uppercase tracking-widest" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                - We capture Real Moments!
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
      <FAQ />
    </section>
  );
};

export default Contact;
