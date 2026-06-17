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
      <div className="container-custom relative z-10 mb-20">
        <div className="max-w-3xl relative">
          <h2 className="relative font-medium tracking-tight mb-8 leading-[1.05] text-[var(--text-primary)]">
            Plans Built For You.<br />Choose The Perfect Fit.
          </h2>
          <p className="text-[var(--text-secondary)] text-[15px] leading-relaxed max-w-[500px] mt-6">
            Choose a plan tailored to scale your brand. From high-impact social media campaigns and custom web experiences to enterprise-grade omnichannel presence management.
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
                <h3 className="text-[24px] lg:text-[28px] font-semibold tracking-tight text-white mb-2">
                  Basic
                </h3>
                <div className="flex flex-col mt-2">
                  <span className="text-[32px] font-bold text-white tracking-tight">700 JOD<span className="text-[14px] text-white/40 font-normal"> / mo</span></span>
                  <span className="text-[12px] text-white/50 font-normal mt-1">Perfect for brand presence & social growth</span>
                </div>
              </div>

              {/* Features List */}
              <div className="flex-1 flex flex-col justify-start mb-10">
                <ul className="flex flex-col gap-[14px] text-[12px] lg:text-[13px] text-white/70 font-normal">
                  <li className="flex items-start gap-3.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 text-white/50 flex-shrink-0"><path d="M20 6L9 17l-5-5"/></svg>
                    <span>15 custom posts & short-form reels / TikToks per month</span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 text-white/50 flex-shrink-0"><path d="M20 6L9 17l-5-5"/></svg>
                    <span>Localized English & Arabic copywriting & optimization</span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 text-white/50 flex-shrink-0"><path d="M20 6L9 17l-5-5"/></svg>
                    <span>Professional graphic design & brand asset creation</span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 text-white/50 flex-shrink-0"><path d="M20 6L9 17l-5-5"/></svg>
                    <span>Strategic hashtag, trend, and target-audience research</span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 text-white/50 flex-shrink-0"><path d="M20 6L9 17l-5-5"/></svg>
                    <span>Community management & audience engagement</span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 text-white/50 flex-shrink-0"><path d="M20 6L9 17l-5-5"/></svg>
                    <span>Monthly analytics dashboard & campaign reporting</span>
                  </li>
                </ul>
              </div>

              {/* Price & CTA */}
              <div className="pointer-events-auto mt-auto">
                <a href="#contact" className="group/btn flex items-center justify-between w-full border-b border-white/10 pb-4 transition-all hover:border-white cursor-pointer">
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
                <span className="text-[8px] font-bold tracking-[0.25em] text-white/40 uppercase bg-white/5 px-2.5 py-1 rounded-none border border-white/5">MOST POPULAR</span>
              </div>
              
              {/* Card Title */}
              <div className="flex flex-col mb-8">
                <h3 className="text-[24px] lg:text-[28px] font-semibold tracking-tight text-white mb-2">
                  Premium
                </h3>
                <div className="flex flex-col mt-2">
                  <span className="text-[32px] font-bold text-white tracking-tight">1,000 JOD<span className="text-[14px] text-white/40 font-normal"> / mo</span></span>
                  <span className="text-[12px] text-white/50 font-normal mt-1">Complete social growth & digital presence</span>
                </div>
              </div>

              {/* Features List */}
              <div className="flex-1 flex flex-col justify-start mb-10">
                <ul className="flex flex-col gap-[14px] text-[12px] lg:text-[13px] text-white/95 font-medium">
                  <li className="flex items-start gap-3.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="mt-0.5 text-[var(--accent-color)] flex-shrink-0"><path d="M20 6L9 17l-5-5"/></svg>
                    <span>Everything in the Social Media plan included</span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="mt-0.5 text-[var(--accent-color)] flex-shrink-0"><path d="M20 6L9 17l-5-5"/></svg>
                    <span>30 custom posts & reels / TikToks per month</span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="mt-0.5 text-[var(--accent-color)] flex-shrink-0"><path d="M20 6L9 17l-5-5"/></svg>
                    <span>Custom high-performance marketing website (up to 8 pages)</span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="mt-0.5 text-[var(--accent-color)] flex-shrink-0"><path d="M20 6L9 17l-5-5"/></svg>
                    <span>Modern responsive web design developed in React/Webflow</span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="mt-0.5 text-[var(--accent-color)] flex-shrink-0"><path d="M20 6L9 17l-5-5"/></svg>
                    <span>Complete SEO setup, indexing, & speed optimization</span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="mt-0.5 text-[var(--accent-color)] flex-shrink-0"><path d="M20 6L9 17l-5-5"/></svg>
                    <span>Integrated conversion tracking & lead capture setup</span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="mt-0.5 text-[var(--accent-color)] flex-shrink-0"><path d="M20 6L9 17l-5-5"/></svg>
                    <span className="text-white">Dedicated account manager & bi-weekly syncs</span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="mt-0.5 text-[var(--accent-color)] flex-shrink-0"><path d="M20 6L9 17l-5-5"/></svg>
                    <span className="text-white">Premium customer care support & priority access</span>
                  </li>
                </ul>
              </div>

              {/* Price & CTA */}
              <div className="pointer-events-auto mt-auto">
                <a href="#contact" className="group/btn flex items-center justify-between w-full border-b border-white pb-4 transition-all cursor-pointer">
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
                <h3 className="text-[24px] lg:text-[28px] font-semibold tracking-tight text-white mb-2">
                  Ultimate
                </h3>
                <div className="flex flex-col mt-2 h-[48px] justify-center">
                  <span className="text-[28px] font-bold text-white tracking-tight">Custom</span>
                  <span className="text-[12px] text-white/50 font-normal mt-1">For details & custom enterprise scaling</span>
                </div>
              </div>

              {/* Features List */}
              <div className="flex-1 flex flex-col justify-start mb-10">
                <ul className="flex flex-col gap-[14px] text-[12px] lg:text-[13px] text-white/70 font-normal">
                  <li className="flex items-start gap-3.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 text-white/50 flex-shrink-0"><path d="M20 6L9 17l-5-5"/></svg>
                    <span>Full-scale omnichannel digital strategy & execution</span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 text-white/50 flex-shrink-0"><path d="M20 6L9 17l-5-5"/></svg>
                    <span>Bespoke high-performance web apps, client portals & e-commerce</span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 text-white/50 flex-shrink-0"><path d="M20 6L9 17l-5-5"/></svg>
                    <span>Influencer marketing campaigns with GCC & regional creators</span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 text-white/50 flex-shrink-0"><path d="M20 6L9 17l-5-5"/></svg>
                    <span>Paid media buying & optimization (Meta, Google, TikTok, LinkedIn)</span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 text-white/50 flex-shrink-0"><path d="M20 6L9 17l-5-5"/></svg>
                    <span>TV, Radio & Out-of-Home (OOH) regional media planning</span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 text-white/50 flex-shrink-0"><path d="M20 6L9 17l-5-5"/></svg>
                    <span>Dedicated 24/7 partner support & WhatsApp/Slack channel</span>
                  </li>
                </ul>
              </div>

              {/* Price & CTA */}
              <div className="pointer-events-auto mt-auto">
                <a href="#contact" className="group/btn flex items-center justify-between w-full border-b border-white/10 pb-4 transition-all hover:border-white cursor-pointer">
                  <span className="text-[12px] font-bold uppercase tracking-widest text-white">Talk to Sales</span>
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
