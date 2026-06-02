import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  'Zain', 'Orange', 'Umniah', 'Talabat', 'Careem', 'Jordan Ahli Bank'
];

const Partners: React.FC = () => {
  return (
    <section className="py-20 border-y border-gray-100 bg-white">
      <div className="container-custom">
        <p className="text-center text-sm font-bold text-navy/40 uppercase tracking-[0.2em] mb-12">
          Trusted by leading brands across the region
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-2xl md:text-3xl font-display font-black text-navy"
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
