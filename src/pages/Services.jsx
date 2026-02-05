import React from 'react';
import { Camera, Calendar, Users2, CheckCircle2, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Camera,
      title: "Event Photography",
      tagline: "Live Coverage",
      price: "Custom Pricing",
      description: "Comprehensive coverage of live events, capturing genuine emotions, key moments, and the authentic energy of your gathering with a documentary approach.",
      features: [
        "Candid emotional moments",
        "Key speaker and presentation coverage",
        "Group interactions and connections",
        "Performance and activity documentation",
        "Authentic environmental portraits",
        "Professional editing included"
      ],
      highlighted: true
    },
    {
      icon: Calendar,
      title: "Corporate Events",
      tagline: "Professional Coverage",
      price: "From $300",
      description: "Documentary-style coverage of conferences, seminars, and corporate programs with clean, professional compositions and strategic visual storytelling.",
      features: [
        "Full event documentation",
        "Speaker and presentation coverage",
        "Attendee interactions and networking",
        "Venue and setup shots",
        "High-resolution digital delivery",
        "Same-week turnaround available"
      ],
      highlighted: false
    },
    {
      icon: Users2,
      title: "Brand Photography",
      tagline: "Visual Identity",
      price: "Custom Packages",
      description: "Professional visual storytelling for businesses, teams, and digital platforms to strengthen your brand identity and connect with your audience.",
      features: [
        "Team and leadership portraits",
        "Office and workplace environment",
        "Product and service documentation",
        "Social media content creation",
        "Behind-the-scenes coverage",
        "Photo library management"
      ],
      highlighted: false
    }
  ];

  const process = [
    {
      step: "01",
      title: "Consultation",
      description: "We discuss your vision, event details, and specific photography needs"
    },
    {
      step: "02",
      title: "Planning",
      description: "I develop a coverage plan and shot list tailored to your event"
    },
    {
      step: "03",
      title: "Execution",
      description: "Professional photography coverage on the day of your event"
    },
    {
      step: "04",
      title: "Delivery",
      description: "Edited, high-resolution images delivered within agreed timeframe"
    }
  ];

  const addons = [
    "Additional photographer for large events",
    "Expedited 24-48 hour delivery",
    "Social media optimized versions",
    "Custom photo books or albums",
    "Video highlight reel",
    "Raw file access"
  ];

  const message = encodeURIComponent(
  "Hello, I would like to inquire about your services."
);
  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-20">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <h2 
            className="text-5xl lg:text-6xl font-bold text-white tracking-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Our Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className={`relative bg-neutral-950 border-2 transition-all duration-500 group hover:transform hover:scale-105 ${
                service.highlighted 
                  ? 'border-white' 
                  : 'border-neutral-800 hover:border-neutral-600'
              }`}
              style={{
                animation: `fadeInUp 0.8s ease-out ${idx * 0.2}s backwards`
              }}
            >
              {/* Highlighted Badge */}
              {service.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-1 text-xs uppercase tracking-widest font-semibold">
                  Most Popular
                </div>
              )}

              <div className="p-8 space-y-6">
                {/* Icon */}
                <div className="flex items-center justify-between">
                  <div className={`p-4 ${service.highlighted ? 'bg-white' : 'bg-neutral-900'} transition-colors duration-300`}>
                    <service.icon 
                      className={service.highlighted ? 'text-black' : 'text-white'} 
                      size={32} 
                    />
                  </div>
                  <span className="text-neutral-400 text-sm uppercase tracking-widest" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {service.tagline}
                  </span>
                </div>

                {/* Title & Price */}
                <div className="space-y-2">
                  <h3 
                    className="text-3xl font-bold text-white"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-2xl font-semibold text-neutral-300">{service.price}</p>
                </div>

                {/* Description */}
                <p className="text-neutral-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 pt-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-neutral-300">
                      <CheckCircle2 className="flex-shrink-0 mt-0.5 text-white" size={18} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href={`https://wa.me/212617827666?text=${message}`}
                  target='_blank'
                  className={`block text-center py-4 uppercase tracking-widest text-sm font-semibold transition-all duration-300 mt-6 group/btn ${
                    service.highlighted
                      ? 'bg-white text-black hover:bg-neutral-200'
                      : 'bg-neutral-900 text-white hover:bg-neutral-800'
                  }`}
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Book This Service
                  <ArrowRight className="inline ml-2 transform group-hover/btn:translate-x-1 transition-transform" size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-neutral-950 border border-neutral-900 p-12 lg:p-16 mb-24">
          <div className="text-center mb-12">
            <h3 
              className="text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              How It Works
            </h3>
            <p className="text-neutral-400">A simple, straightforward process from start to finish</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, idx) => (
              <div
                key={item.step}
                className="relative text-center space-y-4"
                style={{
                  animation: `fadeIn 0.8s ease-out ${idx * 0.15}s backwards`
                }}
              >
                {/* Step Number */}
                <div className="inline-block">
                  <div className="text-6xl font-bold text-neutral-800" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {item.step}
                  </div>
                </div>
                {/* Content */}
                <h4 className="text-xl font-semibold text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {item.title}
                </h4>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {item.description}
                </p>
                {/* Arrow */}
                {idx < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 text-neutral-800">
                    <ArrowRight size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Add-ons Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 
              className="text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Add-On Services
            </h3>
            <p className="text-neutral-400">Enhance your package with these additional options</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {addons.map((addon, idx) => (
              <div
                key={addon}
                className="flex items-center gap-3 bg-neutral-950 border border-neutral-800 p-4 hover:border-neutral-600 transition-colors duration-300"
                style={{
                  animation: `fadeIn 0.6s ease-out ${idx * 0.1}s backwards`
                }}
              >
                <Camera className="text-neutral-500 flex-shrink-0" size={20} />
                <span className="text-neutral-300">{addon}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-24 text-center space-y-8 bg-neutral-950 border-2 border-neutral-800 p-12 lg:p-16">
          <h3 
            className="text-4xl font-bold text-white"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Have Questions?
          </h3>
          <p className="text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Not sure which service is right for you? Let's discuss your needs and 
            create a custom package that fits your vision and budget.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
           <a
           href={`https://wa.me/212617827666?text=${message}`}
           target="_blank"
           rel="noopener noreferrer"
           className="px-8 py-4 bg-white text-black uppercase tracking-widest text-sm font-semibold hover:bg-neutral-200 transition-colors duration-300"
           style={{ fontFamily: "'Montserrat', sans-serif" }}

          >
           
           Get a Quote

           </a>
            {/* <a 
              href="mailto:akoianthonyw@gmail.com"
              className="px-8 py-4 bg-transparent border-2 border-white text-white uppercase tracking-widest text-sm font-semibold hover:bg-white hover:text-black transition-all duration-300"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Email Me
            </a> */}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;