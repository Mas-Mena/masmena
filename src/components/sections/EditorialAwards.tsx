import React from 'react';

const awardsData = [
  {
    category: 'Marketing Excellence',
    organization: 'MENA Awards',
    recognition: 'Healthcare',
    year: '2023'
  },
  {
    category: 'Experiential Pop-Up',
    organization: 'Chamber of Commerce',
    recognition: 'Best Engagement',
    year: '2024'
  },
  {
    category: 'Short-Form Video',
    organization: 'Arab Media Forum',
    recognition: 'Best Creative Content',
    year: '2024'
  },
  {
    category: 'Social Media Strategy',
    organization: 'MENA Digital Awards',
    recognition: 'Best Innovation',
    year: '2025'
  },
  {
    category: 'GCC 360° Brand Campaign',
    organization: 'Advertising Association',
    recognition: 'Best Integrated Strategy',
    year: '2023'
  },
  {
    category: 'Integrated FMCG Activation',
    organization: 'Brand Summit',
    recognition: 'Special Kudos',
    year: '2022'
  }
];

const EditorialAwards: React.FC = () => {
  return (
    <section id="awards" className="py-24 md:py-32 bg-[var(--bg-primary)] text-[var(--text-primary)] border-t border-[var(--border-color)] overflow-hidden transition-colors duration-700">
      <div className="container-custom">
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end relative pb-4 border-b border-[var(--border-color)] mb-12 md:mb-16">

          <div className="relative z-10">
            <p className="text-[var(--text-secondary)] uppercase tracking-[0.3em] text-[10px] font-bold mb-6">Our Recognition</p>
            
            <h2 className="relative font-medium tracking-tight leading-[1.05] text-[var(--text-primary)] text-4xl md:text-5xl lg:text-[56px] mb-8">
              <span className="font-serif italic font-light mr-2">Recognized</span>
              Excellence
            </h2>

            <p className="text-[var(--text-secondary)] text-[15px] md:text-[16px] leading-relaxed max-w-[500px] font-normal">
              Every campaign is strategic. Our dedication to creative storytelling, regional relevance, and measurable impact has been celebrated by leading organizations across the MENA region.
            </p>
          </div>

          <div className="relative z-10 flex lg:justify-end items-end h-full lg:pb-4">
            <a 
              href="#contact" 
              className="group flex items-center justify-between border-b border-[var(--border-color)] pb-4 transition-all hover:border-[var(--text-primary)] w-[220px]"
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--text-primary)]/90">
                View Campaigns
              </span>
              
              {/* Circular Dotted Spinning Indicator */}
              <div className="relative w-6 h-6 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center animate-spin-slow">
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                    <div 
                      key={i} 
                      className="absolute w-[2px] h-[2px] bg-[var(--text-primary)] rounded-full opacity-40"
                      style={{ transform: `rotate(${angle}deg) translateY(-10px)` }}
                    />
                  ))}
                </div>
                <div className="w-[1.5px] h-[1.5px] bg-[var(--text-primary)] rounded-full" />
              </div>
            </a>
          </div>

        </div>

        {/* Awards Typographic Table */}
        <div className="w-full flex flex-col relative z-10">
          
          {/* Header Row - Desktop Only */}
          <div className="hidden md:flex items-center pb-4 border-b border-[var(--border-color)] text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--text-secondary)]">
            <div className="w-[30%]">Award Category</div>
            <div className="w-[25%]">Organization</div>
            <div className="w-[30%]">Recognition</div>
            <div className="w-[15%] text-right">Year</div>
          </div>

          {/* Table Rows */}
          <div className="flex flex-col">
            {awardsData.map((award, index) => (
              <div 
                key={index} 
                className="py-6 md:py-8 border-b border-[var(--border-color)] flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-300 hover:bg-white/[0.01] hover:px-4 group cursor-pointer"
              >
                {/* Category */}
                <div className="w-full md:w-[30%]">
                  <span className="md:hidden text-[9px] uppercase tracking-widest text-[var(--text-secondary)] block mb-1">Award Category</span>
                  <h4 className="text-[17px] md:text-[19px] font-display font-medium text-[var(--text-primary)] group-hover:text-[var(--accent-color)] transition-colors duration-300">
                    {award.category}
                  </h4>
                </div>

                {/* Organization */}
                <div className="w-full md:w-[25%]">
                  <span className="md:hidden text-[9px] uppercase tracking-widest text-[var(--text-secondary)] block mb-1">Organization</span>
                  <span className="text-[13.5px] md:text-[14.5px] text-[var(--text-secondary)] font-medium group-hover:text-[var(--text-primary)] transition-colors duration-300">
                    {award.organization}
                  </span>
                </div>

                {/* Recognition */}
                <div className="w-full md:w-[30%]">
                  <span className="md:hidden text-[9px] uppercase tracking-widest text-[var(--text-secondary)] block mb-1">Recognition</span>
                  <span className="text-[13.5px] md:text-[14.5px] text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]/90 transition-colors duration-300">
                    {award.recognition}
                  </span>
                </div>

                {/* Year */}
                <div className="w-full md:w-[15%] md:text-right flex items-center md:justify-end">
                  <span className="md:hidden text-[9px] uppercase tracking-widest text-[var(--text-secondary)] mr-3">Year</span>
                  <span className="inline-block border border-[var(--border-color)] group-hover:border-[var(--accent-color)]/30 text-[var(--text-secondary)] group-hover:text-[var(--accent-color)] px-3 py-1 text-[11px] font-mono tracking-wider rounded-none transition-all duration-300">
                    {award.year}
                  </span>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default EditorialAwards;
