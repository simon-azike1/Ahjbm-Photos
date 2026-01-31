import React, { useState } from 'react';
import { Calendar, MapPin, Users, Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Project Component - Portfolio Showcase
 * 
 * NOTE: This component currently uses Unsplash placeholder images for demonstration.
 * To use your own images:
 * 
 * 1. Add your images to a public folder (e.g., /public/images/projects/)
 * 2. Update the project data below with your image paths:
 *    coverImage: "/images/projects/conference-2024-cover.jpg"
 * 3. Replace the img src attributes with your image paths:
 *    <img src={project.coverImage} alt={project.title} />
 * 
 * Or keep using Unsplash by replacing the photo IDs with your preferred images from:
 * https://unsplash.com/
 */

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    }
  };

  const imageVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1]
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1]
      }
    })
  };

  const projects = [
    {
      id: 1,
      title: "Annual Church Conference 2024",
      client: "CESAM",
      date: "March 2024",
      location: "Temara, Morocco",
      attendees: "500+",
      category: "Conference",
      description: "Three-day spiritual conference featuring international speakers, worship sessions, and ministry workshops. Comprehensive coverage including keynote sessions, breakout workshops, worship moments, and networking events.",
      coverImage: "conference-main",
      gallery: [
        { id: 1, alt: "Opening ceremony", caption: "Conference Opening - Worship & Welcome" },
        { id: 2, alt: "Keynote speaker", caption: "Guest Speaker - Dr. Emmanuel" },
        { id: 3, alt: "Workshop session", caption: "Leadership Workshop" },
        { id: 4, alt: "Worship team", caption: "Evening Worship Session" },
        { id: 5, alt: "Attendees", caption: "Community Engagement" },
        { id: 6, alt: "Prayer time", caption: "Corporate Prayer" }
      ],
      testimonial: "Anthony captured every significant moment of our conference with exceptional professionalism and spiritual sensitivity.",
      tags: ["Conference", "Worship", "Teaching", "Community"]
    },
    {
      id: 2,
      title: "Sunday Worship Services",
      client: "CESAM Church",
      date: "Ongoing 2024-2025",
      location: "Temara, Morocco",
      attendees: "300+",
      category: "Church",
      description: "Regular weekly documentation of Sunday worship services, including praise and worship, pastoral messages, altar ministry, and congregational fellowship.",
      coverImage: "sunday-worship",
      gallery: [
        { id: 1, alt: "Worship leader", caption: "Praise & Worship" },
        { id: 2, alt: "Pastor preaching", caption: "The Word Proclaimed" },
        { id: 3, alt: "Congregation", caption: "Worshipping Together" },
        { id: 4, alt: "Choir", caption: "Choir Ministry" },
        { id: 5, alt: "Prayer", caption: "Ministry Time" },
        { id: 6, alt: "Fellowship", caption: "Post-Service Fellowship" }
      ],
      testimonial: "His ability to capture the essence of worship while remaining unobtrusive is remarkable.",
      tags: ["Worship", "Church", "Ministry", "Community"]
    },
    {
      id: 3,
      title: "Youth Ministry Retreat",
      client: "AHJBM Youth",
      date: "June 2024",
      location: "Rabat Region, Morocco",
      attendees: "150+",
      category: "Event",
      description: "Weekend youth retreat focusing on spiritual growth, leadership development, and community building through teaching sessions, outdoor activities, and worship.",
      coverImage: "youth-retreat",
      gallery: [
        { id: 1, alt: "Youth worship", caption: "Youth Worship Night" },
        { id: 2, alt: "Teaching session", caption: "Leadership Training" },
        { id: 3, alt: "Group activities", caption: "Team Building" },
        { id: 4, alt: "Prayer groups", caption: "Small Group Prayer" },
        { id: 5, alt: "Evening worship", caption: "Campfire Worship" },
        { id: 6, alt: "Group photo", caption: "Retreat Participants" }
      ],
      testimonial: "Anthony captured the energy and transformation that took place throughout the weekend.",
      tags: ["Youth", "Retreat", "Teaching", "Fellowship"]
    },
    {
      id: 4,
      title: "Leadership Summit",
      client: "Regional Church Network",
      date: "September 2024",
      location: "Casablanca, Morocco",
      attendees: "200+",
      category: "Conference",
      description: "One-day leadership summit bringing together pastors and church leaders for training, networking, and strategic planning for ministry advancement.",
      coverImage: "leadership-summit",
      gallery: [
        { id: 1, alt: "Summit opening", caption: "Summit Opening Session" },
        { id: 2, alt: "Panel discussion", caption: "Leadership Panel" },
        { id: 3, alt: "Breakout session", caption: "Strategy Workshop" },
        { id: 4, alt: "Networking", caption: "Leader Connections" },
        { id: 5, alt: "Closing session", caption: "Commissioning Service" },
        { id: 6, alt: "Group leaders", caption: "Regional Leaders" }
      ],
      testimonial: "Professional, timely, and captured exactly what we needed for our communications.",
      tags: ["Leadership", "Conference", "Networking", "Training"]
    }
  ];

  const openProject = (project) => {
    setSelectedProject(project);
    setSelectedImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setSelectedImageIndex(0);
  };

  const navigateImage = (navigationDirection) => {
    if (!selectedProject) return;
    const totalImages = selectedProject.gallery.length;
    
    if (navigationDirection === 'next') {
      setDirection(1);
      setSelectedImageIndex((prev) => (prev + 1) % totalImages);
    } else {
      setDirection(-1);
      setSelectedImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
    }
  };

  return (
    <section id="project" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 
            className="text-5xl lg:text-6xl font-bold text-white tracking-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Featured Projects
          </h2>
          <p className="text-neutral-400 text-lg max-w-3xl mx-auto leading-relaxed">
            A showcase of recent church services, conferences, and events captured 
            with dedication to storytelling and visual excellence.
          </p>
        </div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative bg-black border border-neutral-800 overflow-hidden hover:border-neutral-600 transition-all duration-500 cursor-pointer"
              onClick={() => openProject(project)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Cover Image */}
              <div className="aspect-[4/3] relative overflow-hidden bg-neutral-900">
                <img 
                  src={`https://images.unsplash.com/photo-${
                    project.id === 1 ? '1540039155733-5bb30b53aa14' : // Conference
                    project.id === 2 ? '1507003211169-0a1dd7228f2d' : // Worship
                    project.id === 3 ? '1511632765486-a01980e01a18' : // Youth
                    '1475721027785-f74eccf877e2' // Leadership
                  }?w=800&h=600&fit=crop`}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="text-center space-y-3">
                    <Camera className="text-white mx-auto" size={40} />
                    <p className="text-white text-sm uppercase tracking-widest">View Project</p>
                  </div>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white text-black px-3 py-1 text-xs uppercase tracking-widest font-semibold">
                  {project.category}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <h3 
                  className="text-2xl font-bold text-white group-hover:text-neutral-300 transition-colors"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {project.title}
                </h3>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 text-sm text-neutral-500">
                  <span className="flex items-center gap-2">
                    <Calendar size={14} />
                    {project.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={14} />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <Users size={14} />
                    {project.attendees} attendees
                  </span>
                </div>

                <p className="text-neutral-400 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-neutral-900 text-neutral-500 text-xs uppercase tracking-widest"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Border Animation */}
              <div className="h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence mode="wait">
        {selectedProject && (
          <motion.div 
            className="fixed inset-0 bg-black/95 z-50 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeProject}
          >
            <div className="min-h-screen p-4 md:p-8">
              {/* Close Button */}
              <motion.button
                onClick={closeProject}
                className="fixed top-6 right-6 text-white hover:text-neutral-400 transition-colors z-10"
                aria-label="Close"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={32} />
              </motion.button>

              <motion.div 
                className="max-w-6xl mx-auto" 
                onClick={(e) => e.stopPropagation()}
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
              {/* Project Header */}
              <div className="mb-8 text-center space-y-4">
                <h3 
                  className="text-4xl lg:text-5xl font-bold text-white"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {selectedProject.title}
                </h3>
                <p className="text-neutral-400 text-lg">{selectedProject.client}</p>
                <div className="flex flex-wrap justify-center gap-6 text-sm text-neutral-500">
                  <span className="flex items-center gap-2">
                    <Calendar size={16} />
                    {selectedProject.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={16} />
                    {selectedProject.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <Users size={16} />
                    {selectedProject.attendees} attendees
                  </span>
                </div>
              </div>

              {/* Image Gallery */}
              <div className="mb-8">
                <div className="relative bg-neutral-900 aspect-[16/10] overflow-hidden">
                  {/* Main Image with AnimatePresence */}
                  <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.img
                      key={selectedImageIndex}
                      custom={direction}
                      variants={imageVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      src={`https://images.unsplash.com/photo-${
                        selectedProject.id === 1 && selectedImageIndex === 0 ? '1540039155733-5bb30b53aa14' :
                        selectedProject.id === 1 && selectedImageIndex === 1 ? '1475721027785-f74eccf877e2' :
                        selectedProject.id === 1 && selectedImageIndex === 2 ? '1523580494863-6f3031224c94' :
                        selectedProject.id === 1 && selectedImageIndex === 3 ? '1511632765486-a01980e01a18' :
                        selectedProject.id === 1 && selectedImageIndex === 4 ? '1528605248644-14dd04022da1' :
                        selectedProject.id === 1 && selectedImageIndex === 5 ? '1507003211169-0a1dd7228f2d' :
                        selectedProject.id === 2 && selectedImageIndex === 0 ? '1507003211169-0a1dd7228f2d' :
                        selectedProject.id === 2 && selectedImageIndex === 1 ? '1511632765486-a01980e01a18' :
                        selectedProject.id === 2 && selectedImageIndex === 2 ? '1438232992991-6d4674d1b6f8' :
                        selectedProject.id === 2 && selectedImageIndex === 3 ? '1510511459019-5dda7724fd87' :
                        selectedProject.id === 2 && selectedImageIndex === 4 ? '1507003211169-0a1dd7228f2d' :
                        selectedProject.id === 2 && selectedImageIndex === 5 ? '1528605248644-14dd04022da1' :
                        selectedProject.id === 3 && selectedImageIndex === 0 ? '1511632765486-a01980e01a18' :
                        selectedProject.id === 3 && selectedImageIndex === 1 ? '1523580494863-6f3031224c94' :
                        selectedProject.id === 3 && selectedImageIndex === 2 ? '1529156069898-49953e39b3ac' :
                        selectedProject.id === 3 && selectedImageIndex === 3 ? '1517164850305-99a3e65bb47e' :
                        selectedProject.id === 3 && selectedImageIndex === 4 ? '1511632765486-a01980e01a18' :
                        selectedProject.id === 3 && selectedImageIndex === 5 ? '1528605248644-14dd04022da1' :
                        selectedProject.id === 4 && selectedImageIndex === 0 ? '1475721027785-f74eccf877e2' :
                        selectedProject.id === 4 && selectedImageIndex === 1 ? '1540039155733-5bb30b53aa14' :
                        selectedProject.id === 4 && selectedImageIndex === 2 ? '1523580494863-6f3031224c94' :
                        selectedProject.id === 4 && selectedImageIndex === 3 ? '1528605248644-14dd04022da1' :
                        selectedProject.id === 4 && selectedImageIndex === 4 ? '1511632765486-a01980e01a18' :
                        '1507003211169-0a1dd7228f2d'
                      }?w=1200&h=750&fit=crop`}
                      alt={selectedProject.gallery[selectedImageIndex].alt}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </AnimatePresence>

                  {/* Navigation */}
                  <motion.button
                    onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white hover:bg-black/70 transition-colors"
                    aria-label="Previous image"
                    whileHover={{ scale: 1.1, x: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronLeft size={32} />
                  </motion.button>
                  <motion.button
                    onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white hover:bg-black/70 transition-colors"
                    aria-label="Next image"
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronRight size={32} />
                  </motion.button>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 right-4 bg-black/70 px-3 py-1 text-white text-sm">
                    {selectedImageIndex + 1} / {selectedProject.gallery.length}
                  </div>
                </div>

                {/* Caption */}
                <p className="text-center text-neutral-400 mt-4">
                  {selectedProject.gallery[selectedImageIndex].caption}
                </p>
              </div>

              {/* Thumbnail Strip */}
              <div className="grid grid-cols-6 gap-2 mb-8">
                {selectedProject.gallery.map((image, idx) => (
                  <motion.button
                    key={image.id}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`aspect-square overflow-hidden border-2 transition-all ${
                      idx === selectedImageIndex 
                        ? 'border-white' 
                        : 'border-transparent hover:border-neutral-600'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img 
                      src={`https://images.unsplash.com/photo-${
                        selectedProject.id === 1 && idx === 0 ? '1540039155733-5bb30b53aa14' :
                        selectedProject.id === 1 && idx === 1 ? '1475721027785-f74eccf877e2' :
                        selectedProject.id === 1 && idx === 2 ? '1523580494863-6f3031224c94' :
                        selectedProject.id === 1 && idx === 3 ? '1511632765486-a01980e01a18' :
                        selectedProject.id === 1 && idx === 4 ? '1528605248644-14dd04022da1' :
                        selectedProject.id === 1 && idx === 5 ? '1507003211169-0a1dd7228f2d' :
                        selectedProject.id === 2 && idx === 0 ? '1507003211169-0a1dd7228f2d' :
                        selectedProject.id === 2 && idx === 1 ? '1511632765486-a01980e01a18' :
                        selectedProject.id === 2 && idx === 2 ? '1438232992991-6d4674d1b6f8' :
                        selectedProject.id === 2 && idx === 3 ? '1510511459019-5dda7724fd87' :
                        selectedProject.id === 2 && idx === 4 ? '1507003211169-0a1dd7228f2d' :
                        selectedProject.id === 2 && idx === 5 ? '1528605248644-14dd04022da1' :
                        selectedProject.id === 3 && idx === 0 ? '1511632765486-a01980e01a18' :
                        selectedProject.id === 3 && idx === 1 ? '1523580494863-6f3031224c94' :
                        selectedProject.id === 3 && idx === 2 ? '1529156069898-49953e39b3ac' :
                        selectedProject.id === 3 && idx === 3 ? '1517164850305-99a3e65bb47e' :
                        selectedProject.id === 3 && idx === 4 ? '1511632765486-a01980e01a18' :
                        selectedProject.id === 3 && idx === 5 ? '1528605248644-14dd04022da1' :
                        selectedProject.id === 4 && idx === 0 ? '1475721027785-f74eccf877e2' :
                        selectedProject.id === 4 && idx === 1 ? '1540039155733-5bb30b53aa14' :
                        selectedProject.id === 4 && idx === 2 ? '1523580494863-6f3031224c94' :
                        selectedProject.id === 4 && idx === 3 ? '1528605248644-14dd04022da1' :
                        selectedProject.id === 4 && idx === 4 ? '1511632765486-a01980e01a18' :
                        '1507003211169-0a1dd7228f2d'
                      }?w=200&h=200&fit=crop`}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.button>
                ))}
              </div>

              {/* Project Details */}
              <div className="bg-neutral-900 border border-neutral-800 p-8 space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Project Description
                  </h4>
                  <p className="text-neutral-300 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {selectedProject.testimonial && (
                  <div className="border-l-4 border-white pl-6">
                    <p className="text-neutral-300 italic mb-2">
                      "{selectedProject.testimonial}"
                    </p>
                    <p className="text-sm text-neutral-500 uppercase tracking-widest">
                      — {selectedProject.client}
                    </p>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-black border border-neutral-700 text-neutral-400 text-sm uppercase tracking-widest"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default Project;