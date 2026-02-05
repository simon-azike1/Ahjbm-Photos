import React from "react";
import FAQ from "./FAQ.jsx";
import { motion } from "framer-motion";

// Example portfolio images (replace with your own)
const portfolioImages = [
  { src: "https://www.srisowbarnikaadecorator.com/wp-content/uploads/2023/01/10-Tips-for-Professional-Corporate-Event-Planning.jpg", title: "Professional Event", description: "Capturing the professionalism of corporate events." },
  { src: "https://www.trvst.world/wp-content/uploads/2023/01/community-event-ideas.jpg", title: "Community Gathering", description: "Capturing the spirit of community." },
  { src: "https://www.eventsair.com/wp-content/uploads/2020/01/corporate-event-2-1.jpg", title: "Corporate Event" , description: "Capturing the essence of corporate events."},
  { src: "https://www.musicnotes.com/blog/content/images/now/wp-content/uploads/live-performance-blog-header.png", title: "Live Performance", description: "Capturing the energy of live events." },
  { src: "https://www.fluxmagazine.com/wp-content/smush-webp/2022/11/Occasion-Web-1.jpg.webp", title: "Special Occasion", description: "Capturing memorable moments." },
  { src: "https://scontent.frba1-4.fna.fbcdn.net/v/t39.30808-6/597599851_122100205503152678_4147643650427902337_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeE1P2X1DBMh5zHsPSsyxJe52hjTbS-BFwnaGNNtL4EXCS7xoLu8EhkTthdH-CMj0BTZ3hJVd-kKEYJQ5UieKuva&_nc_ohc=yD0nwtnt0GQQ7kNvwEMWJqL&_nc_oc=AdnP7a3spC8itvusJN8e9a6Rzdq7zYEESND7khUh0wF-hY3aeb4JMDjkykuz3TMTITk&_nc_zt=23&_nc_ht=scontent.frba1-4.fna&_nc_gid=Im3ySh6tzEeJ-tTiQG2CDg&oh=00_AfvHqRU0_lUo4SeQ3belXX4poUSoqOrNdxiNRx9NHMFRig&oe=6983E099", title: "Group Portrait", description: "Capturing group dynamics and relationships." },
  { src: "https://www.delveinsight.com/_next/image?url=https%3A%2F%2Fassets.delveinsight.com%2Fimg%2FresearchCoverage%2Fimage-1.png&w=3840&q=75", title: "Conference Coverage", description: "Documenting key moments and speakers." },
  { src: "https://blog.fractureme.com/wp-content/uploads/2024/07/sliding-candid-photo.jpg", title: "Candid Moments", description: "Capturing genuine interactions and emotions." },
];

// Example testimonials
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Event Organizer",
    quote: "Anthony captured our event beautifully. His professionalism and attention to detail were outstanding!",
  },
  {
    name: "Michael Chen",
    role: "Corporate Client",
    quote: "The conference photos were stunning and perfectly captured the essence of our brand. Highly recommended!",
  },
  {
    name: "Emma Williams",
    role: "Event Coordinator",
    quote: "Working with Anthony was seamless. The photos exceeded our expectations and were delivered on time.",
  },
];

// Example awards
const awards = [
  { title: "Best Event Photographer 2024", logo: "https://media.istockphoto.com/id/2062707205/photo/gold-star-on-a-blue-background-as-a-reward-top-performance-award-winners-cup-achievements.jpg?s=612x612&w=0&k=20&c=6HeaeFYryuuOyPTW8ucQKsUMUi3F8oHvE9CSPVgoV60=" },
  { title: "Creative Media Excellence", logo: "https://img.freepik.com/free-psd/golden-star-award-trophy-symbol-excellence-achievement_632498-26030.jpg" },
];

const HomeExtras = () => {
  return (
    <div className="bg-black text-white">

      {/* ===== Portfolio / Gallery ===== */}
      <section id="portfolio" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Portfolio Highlights
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-center mb-16">
            A selection of moments captured with care, creativity, and professionalism
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolioImages.map((img, idx) => (
              <motion.div
                key={idx}
                className="overflow-hidden rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300 bg-neutral-900 p-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <img src={img.src} alt={img.title} className="w-full h-64 object-cover" />
                <h2 className="mt-2 text-center text-sm text-neutral-400">{img.title}</h2>
                <p className="text-xs text-neutral-500 text-center mt-1">{img.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Testimonials ===== */}
      <section id="testimonials" className="py-24 bg-neutral-950">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            What Clients Say
          </h2>
          <div className="flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                className="bg-neutral-900 p-8 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <p className="text-neutral-400 italic mb-4">"{t.quote}"</p>
                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-sm text-neutral-500">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Awards / Recognition ===== */}
      <section id="awards" className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Awards & Recognition
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center">
            {awards.map((a, idx) => (
              <motion.div
                key={idx}
                className="p-4 bg-neutral-900 rounded-lg flex flex-col items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <img src={a.logo} alt={a.title} className="h-16 mb-2" />
                <p className="text-sm text-neutral-400 text-center">{a.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ Section ===== */}
    <FAQ />
      {/* ===== Newsletter / Social Follow Section ===== */}
      <section id="newsletter" className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Stay Updated
          </h2>
          <p className="text-neutral-400 mb-8">
            Subscribe to our newsletter for latest photos, tips, and upcoming events.
          </p>
          <form className="flex flex-col sm:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg border border-neutral-700 bg-neutral-900 text-white focus:outline-none w-full sm:w-auto"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-neutral-200 transition-colors duration-300"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Subscribe
            </button>
          </form>
          <div className="flex justify-center gap-6 mt-8 text-neutral-400">
            {/* <a 
              href="https://www.linkedin.com/in/anthony-w-akoi-2b87b61a8/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              LinkedIn
            </a> */}
            {/* <a 
              href="https://web.facebook.com/profile.php?id=61584580358996" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a> */}
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomeExtras;