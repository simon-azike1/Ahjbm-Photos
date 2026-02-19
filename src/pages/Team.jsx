import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Users } from "lucide-react";
import usePublicCollection from "../hooks/usePublicCollection";

const Team = () => {
  const { items: apiTeamMembers, loading, error } = usePublicCollection("team", []);

  const teamMembers = (Array.isArray(apiTeamMembers) ? apiTeamMembers : []).map((member, idx) => ({
    id: member._id || member.id || idx,
    name: member.name || "Team Member",
    role: member.role || "Team",
    bio: member.bio || member.description || "",
    image: member.image || member.imgSrc || "/AHJBM logo.png",
    linkedin: member.linkedin || null,
    featured: Boolean(member.featured),
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section id="team" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-5xl lg:text-6xl font-bold text-white mb-10"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Our Creative Team
          </h2>
          <p className="text-neutral-500 text-sm">Records: {teamMembers.length}</p>
          {error ? <p className="text-red-400 text-sm mt-2">Team API error: {error}</p> : null}
        </motion.div>

        {!loading && teamMembers.length === 0 ? (
          <div className="text-center py-20 border border-neutral-800 bg-neutral-950 rounded-xl">
            <Users className="mx-auto text-neutral-500 mb-4" size={32} />
            <p className="text-neutral-300 text-lg">No team members published yet.</p>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
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

                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(event) => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src = "/AHJBM logo.png";
                    }}
                  />

                  <motion.div
                    className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center gap-4"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="w-16 h-1 bg-white" />

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

                <div className="p-6 space-y-3">
                  <h3
                    className="text-xl font-semibold text-white"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {member.name}
                  </h3>

                  <span className="text-xs uppercase tracking-widest text-neutral-500">{member.role}</span>

                  <p className="text-neutral-400 text-sm leading-relaxed min-h-[80px]">{member.bio}</p>

                  <div className="pt-2 border-t border-neutral-800">
                    <div className="w-12 h-1 bg-white" />
                  </div>
                </div>

                <motion.div
                  className="h-1 bg-gradient-to-r from-indigo-500 to-purple-600 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Team;
