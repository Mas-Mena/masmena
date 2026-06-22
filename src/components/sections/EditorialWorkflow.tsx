import React from 'react';
import { motion } from 'framer-motion';
import CtaButton from '../ui/CtaButton';


const EditorialWorkflow: React.FC = () => {
  return (
    <section id="process" className="relative w-full bg-[var(--bg-primary)] text-[var(--text-primary)] py-24 md:py-32 border-t border-[var(--border-color)] overflow-hidden transition-colors duration-700">
      
      {/* Background Vertical Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="container-custom h-full relative">
          <div className="absolute left-[75%] top-0 bottom-0 w-[1px] bg-white/5" />
          <div className="absolute left-[25%] top-0 bottom-0 w-[1px] bg-white/5" />
        </div>
      </div>

      <div className="container-custom relative z-10 flex flex-col gap-24 md:gap-32">
        
        {/* Section Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end relative pb-4">

          <div className="relative z-10">
            <p className="text-[var(--text-secondary)] uppercase tracking-[0.3em] text-[10px] font-bold mb-6">How We Work</p>
            
            <h2 className="relative font-medium tracking-tight leading-[1.05] text-[var(--text-primary)] text-[36px] md:text-[50px] mb-8">
              Every Step Is Intentional. Every Outcome Is Measurable.
            </h2>

            <p className="text-[var(--text-secondary)] text-[15px] md:text-[16px] leading-relaxed max-w-[500px] font-normal">
              In just 3 steps, we turn insights into impact. Every successful campaign starts with understanding the market and ends with measurable results. Our proven process ensures every strategy is intentional, creative, and built to perform.
            </p>
          </div>

          <div className="relative z-10 flex lg:justify-end items-end h-full lg:pb-4">
            <CtaButton href="#contact" text="Book Your Appointment" />
          </div>

        </div>

        {/* Step 01: Research & Discovery */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div className="relative order-2 lg:order-1">
            
            <div className="relative inline-block">
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[100px] sm:text-[130px] md:text-[160px] font-serif font-light text-[var(--text-primary)]/[0.035] pointer-events-none select-none z-0">
                (01)
              </span>
              <h3 className="relative z-10 mb-6 font-display font-medium text-3xl md:text-4xl text-[var(--text-primary)]">
                Research & Discovery
              </h3>
            </div>

            <p className="text-[var(--text-secondary)] text-[15px] md:text-[16px] leading-relaxed max-w-[420px] font-normal">
              We begin with market research, audience understanding, and opportunity identification.
            </p>
          </div>

          {/* Right: Mockup */}
          <div className="relative order-1 lg:order-2 flex justify-end">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full max-w-[560px] bg-[#0a0a0a] border border-white/10 overflow-hidden shadow-[0_48px_96px_-24px_rgba(0,0,0,1)] flex"
            >
              {/* Notion Sidebar */}
              <div className="hidden sm:flex w-[70px] md:w-[85px] border-r border-white/10 flex-col bg-[#0d0d0d]">
                <div className="h-[85px] flex items-center justify-center border-b border-white/10">
                  <div className="w-10 h-10 bg-zinc-900 border border-white/5 flex items-center justify-center shadow-inner">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M4.459 4.208c.84-.21 1.638-.344 2.404-.412.766-.067 1.492-.056 2.18.034.688.09 1.341.246 1.96.471.619.224 1.205.514 1.761.869.555.355 1.077.783 1.564 1.285.487.502.94 1.08 1.359 1.735l.08.125c.41.655.854 1.233 1.332 1.735.478.502 1.002.93 1.572 1.285.57.355 1.18.645 1.83.869.65.225 1.338.382 2.062.472.724.09 1.48.101 2.27.034.789-.068 1.616-.202 2.483-.412l.186-.046v1.942l-.186-.045c-.867-.211-1.694-.344-2.483-.412-.79-.068-1.546-.057-2.27.034-.724.09-1.412.247-2.062.472-.65.225-1.26.514-1.83.869-.57.355-1.094.783-1.572 1.285-.478.502-.922 1.08-1.332 1.735l-.08.125c-.419.655-.872 1.233-1.359 1.735-.487.502-1.009.93-1.564 1.285-.556.355-1.142.644-1.761.869-.619.225-1.272.382-1.96.472-.688.09-1.414.102-2.18.034-.766-.068-1.564-.202-2.404-.412l-.186-.046v-1.942l.186.046c.84.21 1.638.344 2.404.412.766.067 1.492.056 2.18-.034.688-.09 1.341-.246 1.96-.471.619-.224 1.205-.514 1.761-.869.555-.355 1.077-.783 1.564-1.285.487-.502.94-1.08 1.359-1.735l.08-.125c.41-.655.854-1.233 1.332-1.735.478-.502 1.002-.93 1.572-1.285.57-.355 1.18-.645 1.83-.869.65-.225 1.338-.382 2.062-.472.724-.09 1.48-.101 2.27-.034.789-.068 1.616-.202 2.483-.412l-.186-.046v-1.942l-.186.046c-.867.21-1.694.344-2.483.412-.79.067-1.546.056-2.27-.034-.724-.09-1.412-.246-2.062-.471-.65-.225-1.26-.514-1.83-.869-.57-.355-1.094-.783-1.572-1.285-.478-.502-.922-1.08-1.332-1.735l-.08-.125c-.419-.655-.872-1.233-1.359-1.735-.487-.502-1.009-.93-1.564-1.285-.556-.355-1.142-.644-1.761-.869-.619-.225-1.272-.382-1.96-.472-.688-.09-1.414-.101-2.18-.034-.766.068-1.564.202-2.404.412l-.186.046V4.254l.186-.046z"/></svg>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-center py-8 gap-10">
                  <div className="p-3 bg-white/5 border border-white/5 text-white/40 hover:text-white transition-all cursor-pointer group">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:scale-110 transition-transform"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
                  </div>
                  <div className="text-white/20 hover:text-white/60 transition-colors cursor-pointer">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                  </div>
                </div>
              </div>
              
              {/* Notion Main Area */}
              <div className="flex-1 flex flex-col">
                {/* Header Item */}
                <div className="p-4 sm:p-8 border-b border-white/10 flex justify-between items-center bg-white/[0.03]">
                  <div>
                    <h3 className="text-[14px] sm:text-[18px] font-semibold text-white mb-1.5 sm:mb-2 tracking-tight">Research & Discovery</h3>
                    <div className="flex items-center gap-1.5 sm:gap-2.5 text-[10px] sm:text-[12px] text-white/40 font-medium">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                      STAGE 01 — UNDERSTANDING
                    </div>
                  </div>
                  {/* Circular Progress */}
                  <div className="relative w-14 h-14 rounded-full border border-white/10 flex items-center justify-center">
                    <svg className="absolute inset-0 w-full h-full -rotate-90">
                      <circle cx="28" cy="28" r="26" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
                      <circle cx="28" cy="28" r="26" fill="none" stroke="var(--accent-color)" strokeWidth="3" strokeDasharray="163" strokeDashoffset="0" strokeLinecap="round" />
                    </svg>
                    <span className="text-[11px] font-bold text-white">100%</span>
                  </div>
                </div>

                {/* Task List */}
                <div className="flex flex-col">
                  {[
                    { label: 'Market Competitor Analysis', sub: '3 Tasks', stat: '3/3' },
                    { label: 'Target Audience Personas', sub: '2 Tasks', stat: '2/2' },
                    { label: 'GCC & Jordan Keyword Mapping', sub: '5 Tasks', stat: '4/5' }
                  ].map((task, i) => (
                    <div key={i} className="p-4 px-5 sm:p-7 sm:px-8 border-b border-white/5 flex justify-between items-center hover:bg-white/[0.01] transition-colors group">
                      <div>
                        <h3 className="text-[13px] sm:text-[14px] font-medium text-white/90 mb-1 tracking-tight group-hover:text-white transition-colors">{task.label}</h3>
                        <p className="text-[10px] sm:text-[12px] text-white/40 font-medium">{task.sub}</p>
                      </div>
                      <span className="text-[12px] sm:text-[14px] text-white/70 font-semibold tracking-tighter">{task.stat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>


        {/* Step 02: Strategy & Execution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 lg:gap-24 items-center">
          {/* Left: Mockup */}
          <div className="relative order-1 lg:order-1 flex justify-start">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full max-w-[520px] bg-[#0a0a0a] border border-white/10 overflow-hidden shadow-[0_48px_96px_-24px_rgba(0,0,0,1)]"
            >
              <div className="flex">
                {/* Slack Sidebar */}
                <div className="hidden sm:flex w-[75px] md:w-[90px] border-r border-white/10 flex-col bg-[#0d0d0d]">
                  <div className="h-[90px] flex items-center justify-center border-b border-white/10">
                    <div className="w-10 h-10 bg-zinc-900 border border-white/5 flex items-center justify-center text-white/60">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    </div>
                  </div>
                  <div className="py-8 flex flex-col gap-6 items-center">
                    <div className="relative">
                      <img src="https://i.pravatar.cc/100?img=32" className="w-11 h-11 border border-white/20 object-cover p-[2px]" alt="" />
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#4ade80] border-2 border-[#0d0d0d] rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Slack Chat Area */}
                <div className="flex-1 flex flex-col">
                  {/* Chat Header */}
                  <div className="h-[75px] sm:h-[90px] px-4 sm:px-8 flex justify-between items-center border-b border-white/10 bg-white/[0.01]">
                    <div>
                      <h3 className="text-[13px] sm:text-[16px] font-bold text-white tracking-tight">You x MAS MENA®</h3>
                      <p className="text-[8px] sm:text-[10px] text-white/40 mt-1 font-bold tracking-wide sm:tracking-widest uppercase flex items-center gap-1.5">
                        10 Members — 5 Online <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] shadow-[0_0_8px_#4ade80]"></span>
                      </p>
                    </div>
                    {/* Avatars Stack */}
                    <div className="flex -space-x-2 sm:-space-x-2.5 scale-90 sm:scale-100 origin-right">
                      {[11, 12, 13, 14].map(id => (
                        <img key={id} src={`https://i.pravatar.cc/100?img=${id}`} className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-[2px] border-[#0a0a0a]" alt=""/>
                      ))}
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-[2px] border-[#0a0a0a] bg-zinc-800 flex items-center justify-center text-[9px] sm:text-[10px] font-bold text-white/60">+6</div>
                    </div>
                  </div>

                  {/* Chat Message Block */}
                  <div className="p-4 pb-6 sm:p-8 sm:pb-10">
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <h4 className="text-[13px] sm:text-[14px] font-bold text-white/90">Yasmine</h4>
                      <span className="text-[10px] sm:text-[11px] text-white/30 font-medium">10 MAY 2026, 13:00PM</span>
                    </div>
                    <div className="text-[12px] sm:text-[14px] leading-relaxed text-white/40 font-medium p-4 sm:p-6 bg-white/[0.03] border border-white/5 relative">
                      <span className="text-white font-bold">Hi @client</span>, the marketing strategy proposal is complete! We have finalized the list of GCC influencers and the offline activations timeline for Amman. Let us know if you want to review the social media content plan.
                      <div className="hidden sm:block absolute top-4 -left-[6px] w-3 h-3 bg-white/[0.03] border-l border-b border-white/5 rotate-45" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Content */}
          <div className="relative order-2 lg:order-2 pl-0 lg:pl-16">
            
            <div className="relative inline-block">
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[100px] sm:text-[130px] md:text-[160px] font-serif font-light text-[var(--text-primary)]/[0.035] pointer-events-none select-none z-0">
                (02)
              </span>
              <h3 className="relative z-10 mb-6 font-display font-medium text-3xl md:text-4xl text-[var(--text-primary)]">
                Strategy & Execution
              </h3>
            </div>

            <p className="text-[var(--text-secondary)] text-[15px] md:text-[16px] leading-relaxed max-w-[420px] font-normal">
              Develop tailored online and offline marketing solutions, including content, influencers, social media, and activations.
            </p>
          </div>
        </div>

        {/* Step 03: Measure & Optimize */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div className="relative order-2 lg:order-1">
            
            <div className="relative inline-block">
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[100px] sm:text-[130px] md:text-[160px] font-serif font-light text-[var(--text-primary)]/[0.035] pointer-events-none select-none z-0">
                (03)
              </span>
              <h3 className="relative z-10 mb-6 font-display font-medium text-3xl md:text-4xl text-[var(--text-primary)]">
                Measure & Optimize
              </h3>
            </div>

            <p className="text-[var(--text-secondary)] text-[15px] md:text-[16px] leading-relaxed max-w-[420px] font-normal">
              Track campaign KPIs, analyze performance, and optimize for growth and long-term customer loyalty.
            </p>
          </div>

          {/* Right: Mockup */}
          <div className="relative order-1 lg:order-2 flex justify-end">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full max-w-[560px] bg-[#0a0a0a] border border-white/10 overflow-hidden shadow-[0_48px_96px_-24px_rgba(0,0,0,1)] flex"
            >
              {/* Sidebar */}
              <div className="hidden sm:flex w-[70px] md:w-[85px] border-r border-white/10 flex-col bg-[#0d0d0d]">
                <div className="h-[85px] flex items-center justify-center border-b border-white/10">
                  <div className="w-10 h-10 bg-zinc-900 border border-white/5 flex items-center justify-center shadow-inner text-white/60">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-center py-8 gap-10">
                  <div className="p-3 bg-white/5 border border-white/5 text-white/40 hover:text-white transition-all cursor-pointer group">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:scale-110 transition-transform"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  </div>
                  <div className="text-white/20 hover:text-white/60 transition-colors cursor-pointer">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/></svg>
                  </div>
                </div>
              </div>
              
              {/* Main Area */}
              <div className="flex-1 flex flex-col">
                {/* Header Item */}
                <div className="p-4 sm:p-8 border-b border-white/10 flex justify-between items-center bg-white/[0.03]">
                  <div>
                    <h3 className="text-[14px] sm:text-[18px] font-semibold text-white mb-1.5 sm:mb-2 tracking-tight">Performance Analytics</h3>
                    <div className="flex items-center gap-1.5 sm:gap-2.5 text-[10px] sm:text-[12px] text-[#4ade80] font-bold">
                      <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse mr-1"></span>
                      CAMPAIGN ROI STATUS: OPTIMIZED
                    </div>
                  </div>
                  {/* Circular Progress */}
                  <div className="relative w-14 h-14 rounded-full border border-white/10 flex items-center justify-center">
                    <svg className="absolute inset-0 w-full h-full -rotate-90">
                      <circle cx="28" cy="28" r="26" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
                      <circle cx="28" cy="28" r="26" fill="none" stroke="#4ade80" strokeWidth="3" strokeDasharray="163" strokeDashoffset="16" strokeLinecap="round" />
                    </svg>
                    <span className="text-[11px] font-bold text-white">90%</span>
                  </div>
                </div>

                {/* Dashboard Metrics */}
                <div className="p-4 sm:p-6 grid grid-cols-3 gap-3 border-b border-white/10 bg-white/[0.01]">
                  {[
                    { title: 'ROI', val: '4.2x', change: '+18%' },
                    { title: 'Reach', val: '1.8M', change: '+24%' },
                    { title: 'CTR', val: '4.8%', change: '+12%' }
                  ].map((metric, i) => (
                    <div key={i} className="p-3 bg-white/[0.02] border border-white/5 flex flex-col">
                      <span className="text-[9px] sm:text-[10px] text-white/40 uppercase font-bold tracking-wider">{metric.title}</span>
                      <span className="text-[13px] sm:text-[16px] font-bold text-white mt-1">{metric.val}</span>
                      <span className="text-[8px] sm:text-[9px] text-[#4ade80] font-bold mt-0.5">{metric.change}</span>
                    </div>
                  ))}
                </div>

                {/* Checklist */}
                <div className="flex flex-col">
                  {[
                    { label: 'Adjust ad budget allocations', stat: 'Completed', color: 'text-[#4ade80]' },
                    { label: 'Retarget high-intent GCC visitors', stat: 'Active', color: 'text-[#facc15]' },
                    { label: 'Scale high-performing video assets', stat: 'Pending', color: 'text-white/40' }
                  ].map((item, i) => (
                    <div key={i} className="p-4 px-5 sm:p-5 sm:px-8 border-b border-white/5 flex justify-between items-center hover:bg-white/[0.01] transition-colors group">
                      <span className="text-[12px] sm:text-[13px] font-medium text-white/70 group-hover:text-white transition-colors">{item.label}</span>
                      <span className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-wider ${item.color}`}>{item.stat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EditorialWorkflow;
