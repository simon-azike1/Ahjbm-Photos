import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import usePublicCollection from '../hooks/usePublicCollection';

const defaultEvents = [
  {
    id: 1,
    title: 'Annual Leadership Conference 2024',
    date: 'March 2024',
    description: 'Three-day conference featuring speakers and workshops.',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&h=600&fit=crop'
  }
];

const EventPhotos = () => {
  const { items: events } = usePublicCollection('events', defaultEvents);
  const fallbackEventImage =
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop';

  return (
    <section id="events" className="py-24 bg-black">
      <div className="mt-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 space-y-4">
        
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <motion.div
              key={event._id || event.id || idx}
              className="group relative bg-neutral-900 overflow-hidden transition-all duration-500"
              whileHover={{ y: -8 }}
            >
              {event.featured && (
                <div className="absolute top-4 right-4 z-10 bg-white text-black px-3 py-1 text-xs uppercase tracking-widest font-semibold">
                  Featured
                </div>
              )}

              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={event.coverImage || fallbackEventImage}
                  alt={event.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-6 space-y-3">
                <span className="text-xs uppercase tracking-widest text-neutral-500 flex items-center gap-2">
                  <Calendar size={14} />
                  {event.date}
                </span>
                <h3 className="text-xl font-semibold text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {event.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventPhotos;
