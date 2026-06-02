import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We dive deep into your brand, audience, and market landscape to find unique opportunities.'
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'A data-backed roadmap designed to achieve your specific business objectives.'
  },
  {
    number: '03',
    title: 'Create',
    description: 'Our creative team brings the strategy to life with high-impact content and campaigns.'
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Precision execution across the most effective channels for your target audience.'
  },
  {
    number: '05',
    title: 'Measure',
    description: 'Continuous tracking and optimization to ensure maximum ROI and growth.'
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl"
          >
            Our <span className="text-primary">Process</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-white border-2 border-primary text-primary flex items-center justify-center text-xl font-bold mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-primary/30">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-sm text-navy/60 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
