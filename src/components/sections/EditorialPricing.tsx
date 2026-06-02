import React from 'react';

const DotIcon = () => (
  <div className="relative w-[18px] h-[18px] flex-shrink-0 flex items-center justify-center">
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
      <div
        key={i}
        className="absolute w-[1.5px] h-[1.5px] bg-white/50"
        style={{ transform: `rotate(${angle}deg) translateY(-7px)` }}
      />
    ))}
  </div>
);

const EditorialPricing: React.FC = () => {
  return (
    <section id="pricing" className="relative w-full bg-[var(--bg-primary)] text-[var(--text-primary)] section-padding border-t border-[var(--border-color)] transition-colors duration-700">
      
      {/* Header Area */}
      <div className="container-custom relative z-10 px-8 md:px-12 lg:px-16 mb-20">
        <div className="max-w-3xl relative">
          <h2 className="relative font-medium tracking-tight mb-8 leading-[1.05] text-[var(--text-primary)]">
            <span className="font-serif italic font-light text-[50px] md:text-[72px] leading-none relative top-1 pr-0.5">P</span>lans Built for You.<br />Choose the perfect fit.
          </h2>
          <p className="text-[var(--text-secondary)] text-[15px] leading-relaxed max-w-[500px] mt-6">
            Find the perfect plan for your product. We help you design with precision, implement with modern frameworks, and support your growth at every milestone.
          </p>
        </div>
      </div>

      {/* Pricing Grid Container */}
      <div className="container-custom relative z-10 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 border border-[var(--border-color)] divide-y lg:divide-y-0 lg:divide-x divide-[var(--border-color)]">
          
          {/* ── Basic Card ── */}
          <div className="relative min-h-[580px] overflow-hidden group bg-black/40 backdrop-blur-sm flex flex-col transition-all hover:bg-black/60">
            {/* Ambient Top Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/[0.01] rounded-full blur-3xl pointer-events-none" />
            
            <div className="px-6 py-10 sm:px-8 md:px-10 md:py-12 flex flex-col flex-1 z-10">
              {/* Card Title */}
              <div className="flex flex-col mb-8">
                <h3 className="flex items-baseline leading-none mb-2">
                  <span
                    className="text-[80px] lg:text-[96px] leading-none relative font-normal -ml-3 text-white/90"
                    style={{ fontFamily: '"Great Vibes", cursive', lineHeight: 1 }}
                  >B</span>
                  <span className="text-[24px] lg:text-[28px] font-medium tracking-tight -ml-1 text-white">asic</span>
                </h3>
                <div className="flex flex-col mt-2">
                  <span className="text-[32px] font-bold text-white tracking-tight">$3,999<span className="text-[14px] text-white/40 font-normal"> / mo</span></span>
                  <span className="text-[12px] text-white/50 font-normal mt-1">Perfect for startup or small business</span>
                </div>
              </div>

              {/* Features List */}
              <div className="flex-1 flex flex-col justify-start mb-10">
                <ul className="flex flex-col gap-[14px] text-[12px] lg:text-[13px] text-white/70 font-normal">
                  <li className="flex items-start gap-3.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 text-white/50 flex-shrink-0"><path d="M20 6L9 17l-5-5"/></svg>
                    <span>Requires your wireframe</span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 text-white/50 flex-shrink-0"><path d="M20 6L9 17l-5-5"/></svg>
                    <span>Design with Figma & Framer</span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 text-white/50 flex-shrink-0"><path d="M20 6L9 17l-5-5"/></svg>
                    <span>Implement with Webflow, React, WordPress, Laravel/PHP</span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 text-white/50 flex-shrink-0"><path d="M20 6L9 17l-5-5"/></svg>
                    <span>Fully online operations</span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 text-white/50 flex-shrink-0"><path d="M20 6L9 17l-5-5"/></svg>
                    <span>Work in business days, no weekends</span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 text-white/50 flex-shrink-0"><path d="M20 6L9 17l-5-5"/></svg>
                    <span>Support for 3 months post-launch</span>
                  </li>
                </ul>
              </div>

              {/* Price & CTA */}
              <div className="pointer-events-auto mt-auto">
                <a href="#book" className="group/btn flex items-center justify-between w-full border-b border-white/10 pb-4 transition-all hover:border-white cursor-pointer">
                  <span className="text-[12px] font-bold uppercase tracking-widest text-white">Pick This Package</span>
                  <DotIcon />
                </a>
              </div>
            </div>
          </div>

          {/* ── Premium Card ── */}
          <div className="relative min-h-[580px] overflow-hidden group bg-white/[0.02] backdrop-blur-md flex flex-col transition-all hover:bg-white/[0.04]">
            {/* Accent Glowing Border Top */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            {/* Ambient Top Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />
            
            <div className="px-6 py-10 sm:px-8 md:px-10 md:py-12 flex flex-col flex-1 z-10">
              {/* Popular Badge */}
              <div className="flex justify-between items-center mb-2">
                <span className="text-[8px] font-bold tracking-[0.25em] text-white/40 uppercase bg-white/5 px-2.5 py-1 rounded-full border border-white/5">MOST POPULAR</span>
              </div>
              
              {/* Card Title */}
              <div className="flex flex-col mb-8">
                <h3 className="flex items-baseline leading-none mb-2">
                  <span
                    className="text-[80px] lg:text-[96px] leading-none relative font-normal -ml-3 text-white"
                    style={{ fontFamily: '"Great Vibes", cursive', lineHeight: 1 }}
                  >P</span>
                  <span className="text-[24px] lg:text-[28px] font-semibold tracking-tight -ml-1 text-white">remium</span>
                </h3>
                <div className="flex flex-col mt-2">
                  <span className="text-[32px] font-bold text-white tracking-tight">$5,999<span className="text-[14px] text-white/40 font-normal"> / mo</span></span>
                  <span className="text-[12px] text-white/50 font-normal mt-1">Perfect for medium or big business</span>
                </div>
              </div>

              {/* Features List */}
              <div className="flex-1 flex flex-col justify-start mb-10">
                <ul className="flex flex-col gap-[14px] text-[12px] lg:text-[13px] text-white/95 font-medium">
                  <li className="flex items-start gap-3.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="mt-0.5 text-[var(--accent-color)] flex-shrink-0"><path d="M20 6L9 17l-5-5"/></svg>
                    <span>Requires your wireframe</span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="mt-0.5 text-[var(--accent-color)] flex-shrink-0"><path d="M20 6L9 17l-5-5"/></svg>
                    <span>Design with Figma & Framer</span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="mt-0.5 text-[var(--accent-color)] flex-shrink-0"><path d="M20 6L9 17l-5-5"/></svg>
                    <span>Implement with Webflow, React, WordPress, Laravel/PHP</span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="mt-0.5 text-[var(--accent-color)] flex-shrink-0"><path d="M20 6L9 17l-5-5"/></svg>
                    <span>Remote & Online support</span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="mt-0.5 text-[var(--accent-color)] flex-shrink-0"><path d="M20 6L9 17l-5-5"/></svg>
                    <span>Active coverage, weekends included</span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="mt-0.5 text-[var(--accent-color)] flex-shrink-0"><path d="M20 6L9 17l-5-5"/></svg>
                    <span>Support for 6 months post-launch</span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="mt-0.5 text-[var(--accent-color)] flex-shrink-0"><path d="M20 6L9 17l-5-5"/></svg>
                    <span className="text-white">Your project is always our priority</span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="mt-0.5 text-[var(--accent-color)] flex-shrink-0"><path d="M20 6L9 17l-5-5"/></svg>
                    <span className="text-white">Bespoke customer care gifts</span>
                  </li>
                </ul>
              </div>

              {/* Price & CTA */}
              <div className="pointer-events-auto mt-auto">
                <a href="#book" className="group/btn flex items-center justify-between w-full border-b border-white pb-4 transition-all cursor-pointer">
                  <span className="text-[12px] font-bold uppercase tracking-widest text-white">Pick This Package</span>
                  <DotIcon />
                </a>
              </div>
            </div>
          </div>

          {/* ── Ultimate Card ── */}
          <div className="relative min-h-[580px] overflow-hidden group bg-black/40 backdrop-blur-sm flex flex-col transition-all hover:bg-black/60">
            {/* Ambient Top Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/[0.01] rounded-full blur-3xl pointer-events-none" />
            
            <div className="px-6 py-10 sm:px-8 md:px-10 md:py-12 flex flex-col flex-1 z-10">
              {/* Card Title */}
              <div className="flex flex-col mb-8">
                <h3 className="flex items-baseline leading-none mb-2">
                  <span
                    className="text-[80px] lg:text-[96px] leading-none relative font-normal -ml-3 text-white/90"
                    style={{ fontFamily: '"Great Vibes", cursive', lineHeight: 1 }}
                  >U</span>
                  <span className="text-[24px] lg:text-[28px] font-medium tracking-tight -ml-1 text-white">ltimate</span>
                </h3>
                <div className="flex flex-col mt-2">
                  <span className="text-[32px] font-bold text-white tracking-tight">$9,999<span className="text-[14px] text-white/40 font-normal"> / mo</span></span>
                  <span className="text-[12px] text-white/50 font-normal mt-1">Perfect for regional enterprise growth</span>
                </div>
              </div>

              {/* Features List */}
              <div className="flex-1 flex flex-col justify-start mb-10">
                <ul className="flex flex-col gap-[14px] text-[12px] lg:text-[13px] text-white/70 font-normal">
                  <li className="flex items-start gap-3.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 text-white/50 flex-shrink-0"><path d="M20 6L9 17l-5-5"/></svg>
                    <span>Requires your wireframe</span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 text-white/50 flex-shrink-0"><path d="M20 6L9 17l-5-5"/></svg>
                    <span>Design with Figma & Framer</span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 text-white/50 flex-shrink-0"><path d="M20 6L9 17l-5-5"/></svg>
                    <span>Implement with Webflow, React, WordPress, Laravel/PHP</span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 text-white/50 flex-shrink-0"><path d="M20 6L9 17l-5-5"/></svg>
                    <span>Remote & Online support</span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 text-white/50 flex-shrink-0"><path d="M20 6L9 17l-5-5"/></svg>
                    <span>Active coverage, weekends included</span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 text-white/50 flex-shrink-0"><path d="M20 6L9 17l-5-5"/></svg>
                    <span>Support for 12 months post-launch</span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 text-white/50 flex-shrink-0"><path d="M20 6L9 17l-5-5"/></svg>
                    <span>Your project is always our priority</span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 text-white/50 flex-shrink-0"><path d="M20 6L9 17l-5-5"/></svg>
                    <span>Bespoke customer care gifts</span>
                  </li>
                </ul>
              </div>

              {/* Price & CTA */}
              <div className="pointer-events-auto mt-auto">
                <a href="#book" className="group/btn flex items-center justify-between w-full border-b border-white/10 pb-4 transition-all hover:border-white cursor-pointer">
                  <span className="text-[12px] font-bold uppercase tracking-widest text-white">Pick This Package</span>
                  <DotIcon />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EditorialPricing;
