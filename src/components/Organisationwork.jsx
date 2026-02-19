import React from 'react';
import { Briefcase, Camera, TrendingUp, Users2 } from 'lucide-react';

const Organisationwork = () => {
  const organizations = [
    {
      name: "CESAM",
      role: "Lead Photographer",
      type: "Media Team",
      period: "2022 - Present",
      description: "Leading photography coverage and visual storytelling for all church services, events, and special programs. Coordinating with the media team to deliver consistent, high-quality imagery for organizational use.",
      highlights: [
        "Led photography for 100+ church services and events",
        "Developed visual brand guidelines for consistency",
        "Trained and mentored junior photographers",
        "Coordinated multi-camera coverage for large events"
      ],
      icon: Camera,
      color: "from-blue-900 to-blue-800"
    },
    {
      name: "AHJBM Digital Family",
      role: "Lead Photographer",
      type: "Digital Media",
      period: "2021 - Present",
      description: "Contributing to comprehensive visual storytelling and brand representation across digital platforms. Capturing authentic moments that reflect the organization's mission and values.",
      highlights: [
        "Created visual content for social media campaigns",
        "Documented organizational milestones and achievements",
        "Collaborated with content creators and videographers",
        "Maintained photo archive and asset management"
      ],
      icon: TrendingUp,
      color: "from-purple-900 to-purple-800"
    }
  ];

  const expertise = [
    {
      title: "Team Leadership",
      description: "Leading photography teams, delegating tasks, and ensuring cohesive visual output",
      icon: Users2
    },
    {
      title: "Visual Storytelling",
      description: "Crafting narratives through images that communicate organizational vision and values",
      icon: Camera
    },
    {
      title: "Brand Consistency",
      description: "Maintaining visual standards and style guides across all organizational materials",
      icon: Briefcase
    }
  ];

  return (
    <section id="organization" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 
            className="text-5xl lg:text-6xl font-bold text-white tracking-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Organizational Experience
          </h2>
          <p className="text-neutral-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Professional media team experience, contributing to visual storytelling 
            and brand representation for mission-driven organizations.
          </p>
        </div>

        {/* Organizations */}
        <div className="space-y-12 mb-20">
          {organizations.map((org, idx) => (
            <div
              key={org.name}
              className="group relative bg-neutral-900 overflow-hidden hover:shadow-2xl transition-all duration-500"
              style={{
                animation: `slideInLeft 0.8s ease-out ${idx * 0.2}s backwards`
              }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${org.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>

              <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 lg:p-12">
                {/* Left Column - Organization Info */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/5 border border-white/10 rounded">
                      <org.icon className="text-white" size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 
                        className="text-3xl font-bold text-white mb-1"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {org.name}
                      </h3>
                      <p className="text-neutral-400 text-sm uppercase tracking-widest" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        {org.type}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span className="text-white font-semibold">{org.role}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-neutral-600 rounded-full"></span>
                      <span className="text-neutral-400 text-sm">{org.period}</span>
                    </div>
                  </div>
                </div>

                {/* Middle Column - Description */}
                <div className="lg:col-span-2 space-y-6">
                  <p className="text-neutral-300 leading-relaxed">
                    {org.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-3">
                    <h4 className="text-white font-semibold uppercase tracking-widest text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      Key Contributions
                    </h4>
                    <ul className="space-y-2">
                      {org.highlights.map((highlight, hIdx) => (
                        <li 
                          key={hIdx}
                          className="flex items-start gap-3 text-neutral-400"
                          style={{
                            animation: `fadeIn 0.5s ease-out ${(idx * 0.2) + (hIdx * 0.1) + 0.3}s backwards`
                          }}
                        >
                          <span className="text-white mt-1.5">→</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom Accent Line */}
              <div className={`h-1 bg-gradient-to-r ${org.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}></div>
            </div>
          ))}
        </div>

        {/* Expertise Grid */}
        <div className="border-t border-neutral-800 pt-16">
          <h3 
            className="text-3xl font-semibold text-white mb-12 text-center"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Core Competencies
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertise.map((item, idx) => (
              <div
                key={item.title}
                className="text-center space-y-4 group"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.15}s backwards`
                }}
              >
                <div className="flex justify-center">
                  <div className="p-4 bg-neutral-900 border border-neutral-800 group-hover:border-neutral-700 transition-colors duration-300">
                    <item.icon className="text-neutral-400 group-hover:text-white transition-colors duration-300" size={32} />
                  </div>
                </div>
                <h4 
                  className="text-xl font-semibold text-white"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {item.title}
                </h4>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center space-y-6 bg-neutral-900 p-12 border border-neutral-800">
          <h3 
            className="text-3xl font-semibold text-white"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Looking for a Media Team Photographer?
          </h3>
          <p className="text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            I bring experience in team leadership, visual storytelling, and brand consistency 
            to help organizations tell their story through powerful imagery.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a 
              href="#contact"
              className="px-8 py-4 bg-white text-black uppercase tracking-widest text-sm font-semibold hover:bg-neutral-200 transition-colors duration-300"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Get In Touch
            </a>
            <a 
              href="#services"
              className="px-8 py-4 bg-transparent border-2 border-white text-white uppercase tracking-widest text-sm font-semibold hover:bg-white hover:text-black transition-all duration-300"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              View Services
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Organisationwork;
