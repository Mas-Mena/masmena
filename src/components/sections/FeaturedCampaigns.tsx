import React from 'react';
import { motion } from 'framer-motion';

const campaigns = [
  {
    title: 'Red Sea Gateway',
    category: 'Influencer Marketing',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600',
    results: '2.5M Reach',
    tags: ['Travel', 'MENA']
  },
  {
    title: 'Amman Tech Summit',
    category: 'Digital PR',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=600',
    results: '500k Engagement',
    tags: ['Tech', 'Events']
  },
  {
    title: 'Desert Oasis',
    category: 'Content Production',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=600',
    results: '150% ROI',
    tags: ['Lifestyle', 'Luxury']
  }
];

const FeaturedCampaigns: React.FC = () => {
  return (
    <section id="campaigns" className="py-24 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl mb-6"
            >
              Featured <span className="text-primary">Campaigns</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-navy/60"
            >
              Discover how we've helped leading brands connect with their audience and drive real impact across the region.
            </motion.p>
          </div>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="btn-secondary"
          >
            See All Case Studies
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="text-white">
                    <div className="text-sm font-bold uppercase tracking-wider mb-2">{campaign.category}</div>
                    <div className="text-2xl font-bold">{campaign.results}</div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  {campaign.tags.map((tag, j) => (
                    <span key={j} className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold text-white border border-white/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="text-2xl mb-2 group-hover:text-primary transition-colors">{campaign.title}</h3>
              <p className="text-navy/40 font-semibold">{campaign.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCampaigns;
