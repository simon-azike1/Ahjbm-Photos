import React from 'react';
import { Camera, CheckCircle2, ArrowRight } from 'lucide-react';
import usePublicCollection from '../hooks/usePublicCollection';

const defaultServices = [
  {
    id: 1,
    title: 'Event Photography',
    tagline: 'Live Coverage',
    price: 'Custom Pricing',
    description: 'Comprehensive live event coverage with documentary style.',
    features: ['Candid moments', 'Professional editing'],
    highlighted: true
  }
];

const Services = () => {
  const { items: services } = usePublicCollection('services', defaultServices);
  const message = encodeURIComponent('Hello, I would like to inquire about your services.');

  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-20">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl lg:text-6xl font-bold text-white tracking-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, idx) => (
            <div
              key={service._id || service.id || idx}
              className={`relative bg-neutral-950 border-2 transition-all duration-500 ${
                service.highlighted ? 'border-white' : 'border-neutral-800'
              }`}
            >
              <div className="p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <div className={`p-4 ${service.highlighted ? 'bg-white' : 'bg-neutral-900'}`}>
                    <Camera className={service.highlighted ? 'text-black' : 'text-white'} size={32} />
                  </div>
                  <span className="text-neutral-400 text-sm uppercase tracking-widest">{service.tagline}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {service.title}
                  </h3>
                  {service.price && <p className="text-2xl font-semibold text-neutral-300">{service.price}</p>}
                </div>

                <p className="text-neutral-400 leading-relaxed">{service.description}</p>

                <ul className="space-y-3 pt-4">
                  {(service.features || []).map((feature, featureIdx) => (
                    <li key={`${feature}-${featureIdx}`} className="flex items-start gap-3 text-neutral-300">
                      <CheckCircle2 className="flex-shrink-0 mt-0.5 text-white" size={18} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/212617827666?text=${message}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-4 uppercase tracking-widest text-sm font-semibold bg-neutral-900 text-white"
                >
                  Book This Service
                  <ArrowRight className="inline ml-2" size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
