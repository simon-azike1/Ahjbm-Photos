import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import image1 from '/Images/Anthony.png';
import image2 from '/Images/Blessing.jpg';
import image3 from '/Images/Hendrix.png';
import image4 from '/Images/Martha.png';
import image5 from '/Images/Benedith.jpg';
import image6 from '/Images/Jerry.jpg';

const Team = () => {
  const teamMembers = [
  {
    id: 1,
    name: "Anthony W. Akoi",
    role: "Executive & Strategy Lead",
    bio: "Sets the company vision, builds partnerships, oversees strategy and administration, and ensures every project delivers a seamless, professional experience.",
    featured: true,
    imgSrc: image1,
    linkedin: "https://www.linkedin.com/in/anthony-w-akoi-2b87b61a8"
  },
  {
    id: 5,
    name: "Jerry G. Toe",
    role: "Creative & Technical Specialist",
    bio: "Leads creative execution and technical operations, managing media equipment, production setup, and creative administration to ensure professional delivery of all projects.",
    featured: false,
    imgSrc: image6,
    linkedin: "https://www.linkedin.com/in/jerry-g-toe-37512a396"
  },
  {
    id: 2,
    name: "Martha Belede Pristalyn Lincoln",
    role: "Marketing & Sales Manager",
    bio: "Drives marketing strategy, branding, social media management, and sales initiatives to grow market presence and secure consistent client acquisition.",
    featured: false,
    imgSrc: image4,
    linkedin: "https://www.linkedin.com/in/martha-b-p-lincoln-7b2511306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  },
  {
    id: 3,
    name: "Hendrix Mayamiko Majora",
    role: "Operations & Project Manager",
    bio: "Oversees daily operations, coordinates teams and resources, and ensures all podcast and photography projects are delivered on time and to professional standards.",
    featured: false,
    imgSrc: image3,
    linkedin: "https://www.linkedin.com/in/hendrix-majora"
  },
  {
    id: 4,
    name: "Benedette Naame",
    role: "Finance Officer",
    bio: "Manages budgeting, financial records, invoicing, and payments while supporting operational efficiency and long-term business growth through strategic insight.",
    featured: false,
    imgSrc: image5,
    linkedin: "https://www.linkedin.com/in/benedette-naame-658150172"
  },
  {
    id: 6,
    name: "Blessing Andyietta Jaliba",
    role: "Lead Podcast Presenter",
    bio: "Leads and hosts the AhJbm podcast, shaping its editorial direction through engaging conversations, storytelling, and community-focused discussions.",
    featured: false,
    imgSrc: image2,
    linkedin: null
  }


  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <section id="team" className="py-24 bg-black ">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-20">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-5xl lg:text-6xl font-bold text-white mb-10"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Our Creative Team
          </h2>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              className="group relative bg-neutral-900 border border-neutral-800 overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              {member.featured && (
                <div className="absolute top-4 left-4 z-10 bg-white text-black px-3 py-1 text-xs uppercase tracking-widest font-semibold">
                  Lead
                </div>
              )}

              {/* Image */}
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={member.imgSrc}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center gap-4"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="w-16 h-1 bg-white"></div>

                  <p className="text-white text-sm uppercase tracking-widest text-center">
                    Creative Visionary
                  </p>

                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-white text-white text-xs uppercase tracking-widest hover:bg-white hover:text-black transition"
                    >
                      <Linkedin size={16} />
                      LinkedIn
                    </a>
                  )}
                </motion.div>
              </div>

              {/* Info */}
              <div className="p-6 space-y-3">
                <h3
                  className="text-xl font-semibold text-white"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {member.name}
                </h3>

                <span className="text-xs uppercase tracking-widest text-neutral-500">
                  {member.role}
                </span>

                <p className="text-neutral-400 text-sm leading-relaxed min-h-[80px]">
                  {member.bio}
                </p>

                <div className="pt-2 border-t border-neutral-800">
                  <div className="w-12 h-1 bg-white"></div>
                </div>
              </div>

              {/* Bottom Accent */}
              <motion.div
                className="h-1 bg-gradient-to-r from-indigo-500 to-purple-600 origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
