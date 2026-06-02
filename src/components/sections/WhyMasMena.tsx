import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, MessageSquare, Users2, BarChart3, Palette } from 'lucide-react';

const reasons = [
  {
    title: 'Regional Knowledge',
    description: 'Deep understanding of local nuances in Jordan, GCC, and the wider MENA market.',
    icon: Globe2
  },
  {
    title: 'Arabic-First Content',
    description: 'Expert copywriting and content creation that speaks the language of your audience.',
    icon: MessageSquare
  },
  {
    title: 'Influencer Network',
    description: 'Direct access to top-tier and micro-influencers across multiple niches.',
    icon: Users2
  },
  {
    title: 'Performance Tracking',
    description: 'Advanced analytics and reporting to ensure every dollar spent delivers value.',
    icon: BarChart3
  },
  {
    title: 'Creative Production',
    description: 'In-house studio for high-quality video, photo, and digital asset creation.',
    icon: Palette
  }
];

const WhyMasMena: React.FC = () => {
  return (
    <section className="py-24 bg-navy text-white overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mb-20">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
          >
            Why Choose Us
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight"
          >
            Regional Expertise Meets <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Global Standards</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:border-primary transition-all duration-500 group-hover:scale-110">
                <reason.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{reason.title}</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMasMena;
