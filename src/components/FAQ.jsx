import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What's included in your photography package?",
      answer: "Every package includes comprehensive coverage, professional editing of all selected images, high-resolution digital delivery via a private online gallery, and a print release for personal use. Custom packages can include additional photographers, expedited delivery, or album design."
    },
    {
      question: "How far in advance should I book?",
      answer: "I recommend booking 4–8 weeks in advance for standard events, and 2–3 months for peak season dates. However, I always check availability for last-minute requests—don't hesitate to inquire even for short-notice events."
    },
    {
  question: "Do you travel for events?",
  answer: "Absolutely!\n We regularly photograph events throughout the region and we are available for domestic and international travel. Travel fees apply for locations beyond a 50-mile radius and include transportation and accommodation when necessary. We love capturing stories in new environments!"
}
,
    {
      question: "When will I receive my photos?",
      answer: "Standard delivery is 10–14 business days for events under 4 hours, and 2–3 weeks for full-day coverage. Rush delivery (48–72 hours) is available as an add-on. You'll also receive a preview image within 24 hours of your event."
    },
    {
      question: "What usage rights do I receive?",
      answer: "All clients receive a full print release for personal use—meaning you can print, share on social media, and create albums without restrictions. For commercial usage (advertising, merchandise, publications), a separate commercial license is required. We are happy to discuss options tailored to your needs."
    },
    {
      question: "How would you describe your photography style?",
      answer: "We blend documentary storytelling with intentional portraiture—capturing authentic moments as they unfold while creating a selection of polished environmental portraits. We work discreetly during key moments, allowing the natural flow of your event to remain uninterrupted. Our goal is to be present without ever feeling intrusive."
    },
    {
      question: "What if something unexpected happens?",
      answer: "While we've never missed an event in our professional career, We maintain a trusted network of exceptional photographers who share our aesthetic. Should an unforeseen circumstance arise, we will personally arrange a qualified replacement at no additional cost—and remain involved in the editing process to ensure consistency with our style."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-neutral-950">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-white tracking-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="text-neutral-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Thoughtful answers to help you feel confident and prepared.
          </motion.p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`overflow-hidden rounded-xl transition-all duration-300 ${
                openIndex === index 
                  ? 'bg-neutral-900' 
                  : 'bg-neutral-900/30 hover:bg-neutral-900/50'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-white/10"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-medium text-white text-lg">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="text-neutral-400"
                >
                  <ChevronDown size={22} strokeWidth={1.5} />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ 
                      opacity: 1, 
                      height: "auto", 
                      marginTop: "1rem" 
                    }}
                    exit={{ 
                      opacity: 0, 
                      height: 0, 
                      marginTop: 0 
                    }}
                    transition={{ 
                      duration: 0.45,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className="px-6 pb-6 pt-0 text-neutral-300 leading-relaxed whitespace-pre-line"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-neutral-400 mb-6">
            Still have questions? We're here to help.
          </p>
          <a
            href="https://wa.me/212617827666"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black uppercase tracking-widest text-sm font-semibold hover:bg-neutral-200 transition-colors duration-300 rounded-full"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Message on WhatsApp
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;