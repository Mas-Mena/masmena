import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                alt="MAS MENA Team"
                className="w-full h-auto"
              />
            </motion.div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-xl z-20 border border-gray-100"
            >
              <div className="text-4xl font-bold text-primary mb-1">10+</div>
              <div className="text-sm font-semibold text-navy/60">Years of Experience</div>
            </motion.div>
          </div>

          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">About MAS MENA</h4>
              <h2 className="text-4xl md:text-5xl mb-8 leading-tight">
                Empowering Brands in the <span className="text-primary">Digital Era</span>
              </h2>
              <p className="text-lg text-navy/70 mb-8 leading-relaxed">
                MAS MENA is more than just a marketing agency. We are a team of creative thinkers, data analysts, and cultural experts dedicated to helping brands thrive in the diverse and dynamic MENA landscape.
              </p>
              
              <div className="space-y-4 mb-10">
                {[
                  'Deep regional cultural understanding',
                  'Data-driven performance marketing',
                  'Award-winning creative production',
                  'Exclusive influencer partnerships'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="font-semibold text-navy/80">{item}</span>
                  </div>
                ))}
              </div>

              <button className="btn-secondary">
                Learn More About Us
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
