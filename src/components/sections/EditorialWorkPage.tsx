import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ArrowLeft, Maximize2 } from 'lucide-react';

interface VideoItem {
  id: string;
  title: string;
  category: string;
  description: string;
  src: string;
}

const workVideos: VideoItem[] = [
  {
    id: 'nasmat-watan',
    title: 'Nesmet Watan',
    category: 'ASMR Campaign',
    description: 'A relaxing, sensory audio-visual experience capturing the crispness of Nesmet Watan.',
    src: 'https://dimgrey-camel-334801.hostingersite.com/wp-content/uploads/2026/06/V4-ASMR-NesmetWatan.mp4FinalEdit-3.mp4'
  },
  {
    id: 'wild-tiger-v3',
    title: 'Wild Tiger Energy',
    category: 'Promo Campaign V3',
    description: 'High-energy, fast-paced commercial showcase highlighting the untamed spirit of the drink.',
    src: 'https://dimgrey-camel-334801.hostingersite.com/wp-content/uploads/2026/06/WildTiger-V3-4.mp4'
  },
  {
    id: 'wild-tiger-asmr',
    title: 'Wild Tiger ASMR',
    category: 'ASMR Campaign',
    description: 'Satisfying close-up visuals and crisp sounds detailing the perfect serve of Wild Tiger.',
    src: 'https://dimgrey-camel-334801.hostingersite.com/wp-content/uploads/2026/06/WildTiger-ASMR.mp4'
  },
  {
    id: 'super-sour-iguana',
    title: 'Super Sour Iguana',
    category: 'Product Launch V2',
    description: 'Vibrant colors and bold animations highlighting the new sour beverage lineup.',
    src: 'https://dimgrey-camel-334801.hostingersite.com/wp-content/uploads/2026/06/SuperSour_iguanaV2.mp4'
  },
  {
    id: 'prince-omar-recap',
    title: 'Prince Omar Event',
    category: 'Event Recap Reel',
    description: 'Recap of the night capturing the crowd, DJ set, and the electric atmosphere.',
    src: 'https://dimgrey-camel-334801.hostingersite.com/wp-content/uploads/2026/06/Reel-02-Event-Recap-Prince-Omar.mp4'
  }
];

const EditorialWorkPage: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-700 pb-24 relative overflow-hidden">
      
      {/* Background Vertical Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <div className="container-custom h-full relative">
          <div className="absolute left-[75%] top-0 bottom-0 w-[1px] bg-white/5" />
          <div className="absolute left-[25%] top-0 bottom-0 w-[1px] bg-white/5" />
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 py-10 border-b border-[var(--border-color)]">
        <div className="container-custom flex justify-between items-center">
          <a href="/#" className="flex items-center group">
            <img 
              src="logo-masmena.png" 
              alt="MAS MENA" 
              className="h-7 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
          </a>
          <a 
            href="/#" 
            className="flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors group"
          >
            <ArrowLeft size={14} className="transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Home
          </a>
        </div>
      </header>

      {/* Page Content */}
      <main className="container-custom relative z-10 pt-16 md:pt-24">
        
        {/* Title Block */}
        <div className="max-w-[700px] mb-16 md:mb-24">
          <span className="text-[var(--text-secondary)] uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Our Portfolio</span>
          <h1 className="font-display text-[44px] md:text-[64px] font-medium leading-[1.05] tracking-tight mb-6">
            Selected Works
          </h1>
          <p className="text-[var(--text-secondary)] text-[15px] md:text-[16px] leading-relaxed max-w-[500px]">
            Explore our campaigns, commercial videos, and high-impact productions created for leading brands across Jordan and the MENA region.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {workVideos.map((video, idx) => (
            <VideoCard 
              key={video.id} 
              video={video} 
              index={idx}
              onPlay={() => setActiveVideo(video)} 
            />
          ))}
        </div>
      </main>

      {/* Lightbox Video Player */}
      <AnimatePresence>
        {activeVideo && (
          <VideoLightbox 
            video={activeVideo} 
            onClose={() => setActiveVideo(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

/* Video Card Component */
interface VideoCardProps {
  video: VideoItem;
  index: number;
  onPlay: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, index, onPlay }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
      className="flex flex-col gap-6 group cursor-pointer"
      onClick={onPlay}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-[#0d0d0d] border border-white/5 shadow-2xl flex items-center justify-center">
        <video
          ref={videoRef}
          src={video.src}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          muted
          loop
          playsInline
        />

        {/* Hover / Play Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-100 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center z-10">
          <motion.div
            animate={{ 
              scale: isHovered ? 1.1 : 1,
              backgroundColor: isHovered ? 'var(--accent-color)' : 'rgba(255,255,255,0.1)'
            }}
            className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md transition-colors duration-300"
          >
            <Play size={20} className="text-white fill-white ml-1" />
          </motion.div>
        </div>

        {/* Category Tag top right */}
        <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-black/70 border border-white/10 rounded-sm backdrop-blur-md text-[9px] uppercase tracking-[0.2em] font-bold text-white/80">
          {video.category}
        </div>
      </div>

      {/* Info Block */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h3 className="font-display font-medium text-2xl tracking-tight text-white group-hover:text-[var(--accent-color)] transition-colors duration-300">
            {video.title}
          </h3>
          <Maximize2 size={16} className="text-white/30 group-hover:text-white transition-colors duration-300" />
        </div>
        <p className="text-[var(--text-secondary)] text-[14px] leading-relaxed max-w-[480px]">
          {video.description}
        </p>
      </div>
    </motion.div>
  );
};

/* Lightbox Modal Component */
interface VideoLightboxProps {
  video: VideoItem;
  onClose: () => void;
}

const VideoLightbox: React.FC<VideoLightboxProps> = ({ video, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close lightbox on click outside the player
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === modalRef.current) {
      onClose();
    }
  };

  return (
    <motion.div
      ref={modalRef}
      onClick={handleOverlayClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[3000] bg-black/98 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
    >
      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 z-[3100] w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:scale-105 transition-all duration-300"
      >
        <X size={20} />
      </button>

      {/* Lightbox Wrapper */}
      <motion.div 
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="w-full max-w-[1120px] aspect-video bg-black flex flex-col relative border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.8)]"
      >
        <video 
          src={video.src}
          className="w-full h-full object-contain"
          controls
          autoPlay
          playsInline
        />

        {/* Video description footer inside lightbox */}
        <div className="absolute bottom-[-90px] left-0 right-0 hidden md:flex flex-col gap-1 text-left px-2">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--accent-color)]">
            {video.category}
          </span>
          <h4 className="font-display font-medium text-xl text-white">
            {video.title}
          </h4>
          <p className="text-[12px] text-white/60 max-w-[600px] leading-relaxed">
            {video.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EditorialWorkPage;
