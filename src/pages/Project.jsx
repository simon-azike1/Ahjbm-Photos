import React, { useState } from 'react';
import { Calendar, MapPin, Users, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import usePublicCollection from '../hooks/usePublicCollection';

const defaultProjects = [
  {
    id: 1,
    title: 'Annual Church Conference 2024',
    client: 'CESAM',
    date: 'March 2024',
    location: 'Temara, Morocco',
    attendees: '500+',
    category: 'Conference',
    description: 'Three-day spiritual conference coverage.',
    coverImage: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=1200&h=750&fit=crop',
    gallery: [
      { src: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=1200&h=750&fit=crop', alt: 'Conference opening' },
      { src: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&h=750&fit=crop', alt: 'Conference session' }
    ],
    tags: ['Conference', 'Worship']
  }
];

const Project = () => {
  const { items: projects } = usePublicCollection('projects', defaultProjects);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openProject = (project) => {
    setSelectedProject(project);
    setSelectedImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setSelectedImageIndex(0);
  };

  const currentGallery = selectedProject?.gallery?.length
    ? selectedProject.gallery
    : [{ src: selectedProject?.coverImage, alt: selectedProject?.title }];

  const getCoverImage = (project) => {
    if (project.coverImage) return project.coverImage;
    if (Array.isArray(project.gallery) && project.gallery[0]?.src) return project.gallery[0].src;
    return 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&h=750&fit=crop';
  };

  const navigateImage = (direction) => {
    if (!currentGallery.length) return;
    if (direction === 'next') {
      setSelectedImageIndex((prev) => (prev + 1) % currentGallery.length);
    } else {
      setSelectedImageIndex((prev) => (prev - 1 + currentGallery.length) % currentGallery.length);
    }
  };

  return (
    <section id="project" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
    

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project._id || project.id || idx}
              className="group relative bg-black border border-neutral-800 overflow-hidden hover:border-neutral-600 transition-all duration-500 cursor-pointer"
              onClick={() => openProject(project)}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-neutral-900">
                <img src={getCoverImage(project)} alt={project.title} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute top-4 left-4 bg-white text-black px-3 py-1 text-xs uppercase tracking-widest font-semibold">
                  {project.category || 'Project'}
                </div>
              </div>

              <motion.div
                className="p-6 space-y-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.18 }}
              >
                <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-4 text-sm text-neutral-500">
                  {project.date && <span className="flex items-center gap-2"><Calendar size={14} />{project.date}</span>}
                  {project.location && <span className="flex items-center gap-2"><MapPin size={14} />{project.location}</span>}
                  {project.attendees && <span className="flex items-center gap-2"><Users size={14} />{project.attendees}</span>}
                </div>
                <p className="text-neutral-400 leading-relaxed line-clamp-3">{project.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div className="fixed inset-0 bg-black/95 z-50 overflow-y-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeProject}>
            <div className="min-h-screen p-4 md:p-8">
              <button onClick={closeProject} className="fixed top-6 right-6 text-white z-10" aria-label="Close">
                <X size={32} />
              </button>

              <div className="max-w-6xl mx-auto" onClick={(e) => e.stopPropagation()}>
                <div className="mb-8 text-center space-y-4">
                  <h3 className="text-4xl lg:text-5xl font-bold text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {selectedProject.title}
                  </h3>
                </div>

                <div className="relative bg-neutral-900 aspect-[16/10] overflow-hidden mb-4">
                  <img
                    src={currentGallery[selectedImageIndex]?.src || getCoverImage(selectedProject)}
                    alt={currentGallery[selectedImageIndex]?.alt || selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  {currentGallery.length > 1 && (
                    <>
                      <button onClick={() => navigateImage('prev')} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white">
                        <ChevronLeft size={32} />
                      </button>
                      <button onClick={() => navigateImage('next')} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white">
                        <ChevronRight size={32} />
                      </button>
                    </>
                  )}
                </div>

                {currentGallery.length > 1 && (
                  <div className="grid grid-cols-6 gap-2">
                    {currentGallery.map((image, idx) => (
                      <button
                        key={`${image.src}-${idx}`}
                        onClick={() => setSelectedImageIndex(idx)}
                        className={`aspect-square overflow-hidden border-2 ${idx === selectedImageIndex ? 'border-white' : 'border-transparent'}`}
                      >
                        <img src={image.src} alt={image.alt || `Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Project;
