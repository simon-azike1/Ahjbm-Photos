import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    'All',
    'Photography Tips',
    'Behind the Scenes',
    'Event Recaps',
    'Client Stories',
    'Equipment & Gear'
  ];

  const blogPosts = [
    {
      id: 1,
      title: "5 Tips for Capturing Authentic Event Moments",
      category: "Photography Tips",
      date: "January 15, 2026",
      readTime: "5 min read",
      excerpt: "Learn how to document live events while respecting the atmosphere and capturing genuine emotions.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=500&fit=crop", // Camera and photography equipment
      featured: true
    },
    {
      id: 2,
      title: "Behind the Scenes: Annual Corporate Conference 2025",
      category: "Event Recaps",
      date: "December 20, 2025",
      readTime: "8 min read",
      excerpt: "A detailed look at how we covered three days of conference sessions, workshops, and keynote presentations.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop", // Conference/business meeting
      featured: true
    },
    {
      id: 3,
      title: "The Power of Candid Photography at Live Events",
      category: "Client Stories",
      date: "November 10, 2025",
      readTime: "6 min read",
      excerpt: "Why unposed, spontaneous moments often tell the most powerful stories of human connection and shared experiences.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=500&fit=crop", // People laughing/candid moment
      featured: false
    },
    {
      id: 4,
      title: "My Go-To Camera Gear for Professional Events",
      category: "Equipment & Gear",
      date: "October 28, 2025",
      readTime: "7 min read",
      excerpt: "A comprehensive guide to the equipment I use for conferences, celebrations, and special occasions.",
      image: "https://images.unsplash.com/photo-1606243235023-460e03ae2e92?w=800&h=500&fit=crop", // Camera gear/equipment
      featured: false
    },
    {
      id: 5,
      title: "Mastering Lighting Challenges at Indoor Events",
      category: "Photography Tips",
      date: "October 5, 2025",
      readTime: "6 min read",
      excerpt: "Working with mixed lighting, low light situations, and dramatic stage lighting in diverse event environments.",
      image: "https://images.unsplash.com/photo-1556035511-3168381ea4d4?w=800&h=500&fit=crop", // Stage lighting/event lighting
      featured: false
    },
    {
      id: 6,
      title: "A Day in the Life: Lead Photographer at a Major Conference",
      category: "Behind the Scenes",
      date: "September 15, 2025",
      readTime: "9 min read",
      excerpt: "Follow me through a typical event day and see what goes into capturing key moments from setup to delivery.",
      image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=500&fit=crop", // Photographer at work
      featured: false
    }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category.toLowerCase() === activeCategory);

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <section id="blog" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 
            className="text-5xl lg:text-6xl font-bold text-white tracking-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Blog & Insights
          </h2>
          <p className="text-neutral-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Photography tips, behind-the-scenes stories, and insights on capturing 
            meaningful moments through the lens.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div 
            className="bg-neutral-950 border-2 border-neutral-800 mb-16 overflow-hidden group hover:border-neutral-600 transition-all duration-500"
            style={{ animation: 'fadeIn 0.8s ease-out' }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="aspect-[16/10] lg:aspect-auto relative overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-white text-black px-3 py-1 text-xs uppercase tracking-widest font-semibold">
                  Featured
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
                <div className="flex items-center gap-4 text-sm text-neutral-500">
                  <span className="flex items-center gap-2">
                    <Calendar size={16} />
                    {featuredPost.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-2">
                    <Clock size={16} />
                    {featuredPost.readTime}
                  </span>
                </div>

                <div>
                  <span className="inline-block px-3 py-1 bg-neutral-900 text-neutral-400 text-xs uppercase tracking-widest mb-4">
                    {featuredPost.category}
                  </span>
                  <h3 
                    className="text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-neutral-300 transition-colors"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {featuredPost.title}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <a 
                  href={`#blog-${featuredPost.id}`}
                  className="inline-flex items-center gap-2 text-white hover:text-neutral-400 transition-colors group/btn uppercase tracking-widest text-sm font-semibold"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Read Full Article
                  <ArrowRight size={18} className="transform group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category.toLowerCase())}
              className={`px-6 py-3 text-sm uppercase tracking-widest transition-all duration-300 ${
                activeCategory === category.toLowerCase()
                  ? 'bg-white text-black'
                  : 'bg-neutral-950 border border-neutral-800 text-neutral-400 hover:bg-neutral-900 hover:text-white'
              }`}
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, idx) => (
            <article
              key={post.id}
              className="bg-neutral-950 border border-neutral-800 overflow-hidden hover:border-neutral-600 transition-all duration-500 group"
              style={{
                animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s backwards`
              }}
            >
              {/* Image */}
              <div className="aspect-[16/10] relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white text-sm uppercase tracking-widest">Read Article</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between text-xs text-neutral-500">
                  <span className="flex items-center gap-2">
                    <Calendar size={14} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>

                <div>
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-neutral-900 text-neutral-400 text-xs uppercase tracking-widest mb-3">
                    <Tag size={12} />
                    {post.category}
                  </span>
                  <h3 
                    className="text-xl font-semibold text-white mb-3 group-hover:text-neutral-300 transition-colors"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <a 
                  href={`#blog-${post.id}`}
                  className="inline-flex items-center gap-2 text-white hover:text-neutral-400 transition-colors text-sm uppercase tracking-widest group/btn"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Read More
                  <ArrowRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        {filteredPosts.length > 0 && (
          <div className="mt-16 text-center">
            <button 
              className="px-8 py-4 bg-neutral-950 border-2 border-neutral-800 text-white uppercase tracking-widest text-sm font-semibold hover:bg-white hover:text-black hover:border-white transition-all duration-300"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Load More Articles
            </button>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-24 bg-neutral-950 border-2 border-neutral-800 p-12 lg:p-16 text-center space-y-6">
          <h3 
            className="text-4xl font-bold text-white"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Stay Updated
          </h3>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Subscribe to receive photography tips, behind-the-scenes stories, and updates 
            on my latest work directly to your inbox.
          </p>
          <form className="max-w-lg mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-black border border-neutral-800 text-white focus:border-white focus:outline-none transition-colors duration-300"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-black uppercase tracking-widest text-sm font-semibold hover:bg-neutral-200 transition-colors duration-300"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
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
            transform: translateY(30px);
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

export default Blog;