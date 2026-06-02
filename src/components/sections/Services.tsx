import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Smartphone, 
  Video, 
  Camera, 
  ShoppingBag, 
  Store, 
  Search, 
  Globe, 
  Target, 
  Zap 
} from 'lucide-react';

const services = [
  {
    title: 'Influencer Marketing',
    description: 'Connecting your brand with the most influential voices across the MENA region.',
    icon: Users,
    color: 'bg-blue-500',
  },
  {
    title: 'Social Media Management',
    description: 'Strategic content creation and community management that builds brand loyalty.',
    icon: Smartphone,
    color: 'bg-cyan-500',
  },
  {
    title: 'Short-form Video Production',
    description: 'High-impact TikTok, Reels, and Shorts content tailored for regional audiences.',
    icon: Video,
    color: 'bg-purple-500',
  },
  {
    title: 'Professional Photography',
    description: 'Premium visual storytelling that captures the essence of your brand.',
    icon: Camera,
    color: 'bg-rose-500',
  },
  {
    title: 'Affiliate Marketing',
    description: 'Performance-based partnerships that drive measurable sales and growth.',
    icon: Target,
    color: 'bg-amber-500',
  },
  {
    title: 'eCommerce Experiences',
    description: 'Designing and optimizing digital storefronts for maximum conversion.',
    icon: ShoppingBag,
    color: 'bg-emerald-500',
  },
  {
    title: 'Experiential Pop-Ups',
    description: 'Creating memorable physical activations that bridge digital and reality.',
    icon: Store,
    color: 'bg-indigo-500',
  },
  {
    title: 'SEO & Performance',
    description: 'Data-driven strategies to dominate search results and acquire users.',
    icon: Search,
    color: 'bg-orange-500',
  },
  {
    title: 'Digital PR',
    description: 'Strategic communication that elevates your brand narrative in the media.',
    icon: Globe,
    color: 'bg-teal-500',
  },
  {
    title: 'Creative Strategy',
    description: 'Innovative campaign concepts that cut through the noise and deliver results.',
    icon: Zap,
    color: 'bg-yellow-500',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-background-soft">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mb-6"
          >
            Our <span className="text-primary">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-navy/60 max-w-2xl mx-auto"
          >
            Comprehensive marketing solutions tailored for the unique landscape of Jordan and the wider MENA region.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 group hover:shadow-2xl transition-all duration-500"
            >
              <div className={`w-14 h-14 rounded-2xl ${service.color} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-7 h-7 ${service.color.replace('bg-', 'text-')}`} />
              </div>
              <h3 className="text-xl mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-navy/60 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
