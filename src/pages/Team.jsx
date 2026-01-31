import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import image1 from '/Images/Anthony.jpeg';
import image2 from '/Images/Blessing.jpeg';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Jerry G. Toe",
      role: "Creative & Technical Specialist",
      bio: "Leads creative execution and technical operations, managing media equipment, production setup, and creative administration to ensure professional delivery of all projects.",
      featured: true,
      imgSrc: "https://scontent.frba1-4.fna.fbcdn.net/v/t39.30808-6/597139219_122100255549152678_1634988005520058019_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFm3SpghQlulbxBGdlzcfKjvpJakc0ewvC-klqRzR7C8Fyzj6D7nshq_OfMFrfY3aYviE-XjM2iNs3TtLv4GKOr&_nc_ohc=i0fAM1LLlDsQ7kNvwE3hV4Z&_nc_oc=AdkLIZUbIna5DajjDx7fV1tNuSy_OhRc_pKwAdJhRL3orxPZc7N6OUhKreHXRy73oTI&_nc_zt=23&_nc_ht=scontent.frba1-4.fna&_nc_gid=5mntkAA4v-LDysLeNliBSQ&oh=00_AfooEouExpg76h2U2oCMRpfd91Hq3CQtIyyC-jlRb-zxYg&oe=6982EB00",
      linkedin: "https://www.linkedin.com/in/jerry-g-toe-37512a396"
    },
    {
      id: 2,
      name: "Martha Belede Pristalyn Lincoln",
      role: "Marketing & Sales Manager",
      bio: "Drives marketing strategy, branding, social media management, and sales initiatives to grow market presence and secure consistent client acquisition.",
      featured: true,
      imgSrc: "https://scontent.frba1-2.fna.fbcdn.net/v/t39.30808-6/595286795_122100439911152678_5913442682622626545_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFkaPeLuAMCDuKBEzQnern9itP5qN6Ty5mK0_mo3pPLmXp1V-FqgykEi1nvxLLiOvy0Ca7uVhsHOuS55eHbye_L&_nc_ohc=Cpk0WOZIOrMQ7kNvwF7oVmT&_nc_oc=AdkgRar-_14c-lSi3GRByobnhrMjjv-04XKV6e7LKEIqHLmJjUTvOpVTs0D909HQvwU&_nc_zt=23&_nc_ht=scontent.frba1-2.fna&_nc_gid=gdROTIOmrPMo7813lyMsHw&oh=00_AfoMmkfzLAW42ogMDDdd_9whNQS202T593A9mEKO1czV8w&oe=6982EF1B",
      linkedin: "https://www.linkedin.com/in/martha-b-p-lincoln-7b2511306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
      id: 3,
      name: "Hendrix Mayamiko Majora",
      role: "Operations & Project Manager",
      bio: "Oversees daily operations, coordinates teams and resources, and ensures all podcast and photography projects are delivered on time and to professional standards.",
      featured: false,
      imgSrc: "https://scontent.frba1-3.fna.fbcdn.net/v/t39.30808-6/596806153_122100437979152678_304154099705217096_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFUz9vyQh9CMzIzK2mwdo0863RWPPq8ZVjrdFY8-rxlWLvO6JQ0WJiRz8nMLaWYsXy-peEyuRgpaeuCckF2--1S&_nc_ohc=d0HP42nagOQQ7kNvwFGYU_0&_nc_oc=AdkPEiR00YJ0mMN7FlP90J7SimkS-uD4Ex9CmdxVB7Y-6e0nwKbIcTwwZemq008CSaQ&_nc_zt=23&_nc_ht=scontent.frba1-3.fna&_nc_gid=6pQmPSRTEJqaOT6Fw0ZueA&oh=00_Afqpl5qs6w4iYpRYj0SGXQGLXgUYZAwGqQ6WJ-vCxWlrDQ&oe=6982FE9E",
      linkedin: "https://www.linkedin.com/in/hendrix-majora"
    },
    {
      id: 4,
      name: "Benedette Naame",
      role: "Finance Officer",
      bio: "Manages budgeting, financial records, invoicing, and payments while supporting operational efficiency and long-term business growth through strategic insight.",
      featured: false,
      imgSrc: "https://scontent.frba1-4.fna.fbcdn.net/v/t39.30808-6/596779126_122100256197152678_3496240674040036648_n.jpg?stp=dst-jpg_p180x540_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEc2M2hepbKzKJDdQadJIfNchg9VoND_GRyGD1Wg0P8ZM9PCCI4bPT499EEzZBZ46CsSfkLBLhPuJHy3i9nmd5C&_nc_ohc=tLAwxzfHSogQ7kNvwG_fgAo&_nc_oc=AdkrYRJ8FkQxCyibZxmAj8-eZNS-Lghpe4tzM-wGFVo8YSb9YHP6U2G5TW_QdVFUY2c&_nc_zt=23&_nc_ht=scontent.frba1-4.fna&_nc_gid=xwXJ3iyS--tmsOk6_JLlaw&oh=00_AfrsnouKzr06O2TcH3yEtXqlBUKJVolrX4zS5pOwp_WNLg&oe=6982E56C",
      linkedin: "https://www.linkedin.com/in/benedette-naame-658150172"
    },
    {
      id: 5,
      name: "Anthony W. Akoi",
      role: "Executive & Strategy Lead",
      bio: "Sets the company vision, builds partnerships, oversees strategy and administration, and ensures every project delivers a seamless, professional experience.",
      featured: true,
      imgSrc: image1,
      linkedin: "https://www.linkedin.com/in/anthony-w-akoi-2b87b61a8"
    },
    {
      id: 6,
      name: "Blessing Andyietta Jaliba",
      role: "Lead Podcast Presenter",
      bio: "Leads and hosts the AhJbm podcast, shaping its editorial direction through engaging conversations, storytelling, and community-focused discussions.",
      featured: true,
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
    <section id="team" className="py-24 bg-black">
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
            className="text-5xl lg:text-6xl font-bold text-white"
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
