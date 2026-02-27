import React, { useMemo, useState } from 'react';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import usePublicCollection from '../hooks/usePublicCollection';

const defaultPosts = [
  {
    id: 1,
    title: '5 Tips for Capturing Authentic Event Moments',
    category: 'Photography Tips',
    date: 'January 15, 2026',
    readTime: '5 min read',
    excerpt: 'Learn how to document live events while preserving authentic moments.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=500&fit=crop',
    featured: true
  }
];

const Blog = () => {
  const { items: blogPosts } = usePublicCollection('blogs', defaultPosts);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = useMemo(() => {
    const unique = Array.from(new Set(blogPosts.map((post) => post.category).filter(Boolean)));
    return ['All', ...unique];
  }, [blogPosts]);

  const filteredPosts =
    activeCategory === 'all'
      ? blogPosts
      : blogPosts.filter((post) => (post.category || '').toLowerCase() === activeCategory);

  const featuredPost = blogPosts.find((post) => post.featured) || blogPosts[0];

  return (
    <section id="blog" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
  

        {featuredPost && (
          <motion.div
            className="bg-neutral-950 border-2 border-neutral-800 mb-16 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-[16/10] lg:aspect-auto relative overflow-hidden">
                <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
                <div className="flex items-center gap-4 text-sm text-neutral-500">
                  <span className="flex items-center gap-2"><Calendar size={16} />{featuredPost.date}</span>
                  <span className="flex items-center gap-2"><Clock size={16} />{featuredPost.readTime}</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{featuredPost.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{featuredPost.excerpt}</p>
              </div>
            </div>
          </motion.div>
        )}

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category.toLowerCase())}
              className={`px-6 py-3 text-sm uppercase tracking-widest ${
                activeCategory === category.toLowerCase() ? 'bg-white text-black' : 'bg-neutral-950 border border-neutral-800 text-neutral-400'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, idx) => (
            <motion.article
              key={post._id || post.id || idx}
              className="bg-neutral-950 border border-neutral-800 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
            >
              <div className="aspect-[16/10] relative overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between text-xs text-neutral-500">
                  <span className="flex items-center gap-2"><Calendar size={14} />{post.date}</span>
                  <span className="flex items-center gap-2"><Clock size={14} />{post.readTime}</span>
                </div>
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-neutral-900 text-neutral-400 text-xs uppercase tracking-widest mb-3">
                  <Tag size={12} />
                  {post.category}
                </span>
                <h3 className="text-xl font-semibold text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{post.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{post.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-white text-sm uppercase tracking-widest">
                  Read More
                  <ArrowRight size={16} />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
