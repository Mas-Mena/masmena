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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end relative pb-4 mb-12 md:mb-16">

          <div className="relative z-10">
            <p className="text-[var(--text-secondary)] uppercase tracking-[0.3em] text-[10px] font-bold mb-6">Our Recognition</p>
            
            <h2 className="relative font-medium tracking-tight leading-[1.05] text-[var(--text-primary)] text-[36px] md:text-[50px] mb-8">
              Recognized Excellence
            </h2>

            <p className="text-[var(--text-secondary)] text-[15px] md:text-[16px] leading-relaxed max-w-[500px] font-normal">
              Every campaign is strategic. Our dedication to creative storytelling, regional relevance, and measurable impact has been celebrated by leading organizations across the MENA region.
            </p>
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
                className="py-5 md:py-8 border-b border-[var(--border-color)] flex flex-row md:items-center justify-between md:justify-start gap-4 transition-all duration-300 hover:bg-white/[0.01] hover:px-4 group cursor-pointer"
              >
                {/* Mobile: Category + Subtext | Desktop: Category Only */}
                <div className="w-full md:w-[30%] flex flex-col gap-1 md:gap-0 pr-4 md:pr-0">
                  <h4 className="text-[16px] md:text-[19px] font-display font-medium text-[var(--text-primary)] group-hover:text-[var(--accent-color)] transition-colors duration-300">
                    {award.category}
                  </h4>
                  
                  {/* Mobile-only subtext showing Organization & Recognition */}
                  <div className="flex md:hidden items-center gap-1.5 text-[12px] text-[var(--text-secondary)] font-medium leading-none mt-1">
                    <span>{award.organization}</span>
                    <span className="opacity-30">•</span>
                    <span className="opacity-80">{award.recognition}</span>
                  </div>
                </div>

                {/* Desktop-only Organization column */}
                <div className="hidden md:block md:w-[25%]">
                  <span className="text-[13.5px] md:text-[14.5px] text-[var(--text-secondary)] font-medium group-hover:text-[var(--text-primary)] transition-colors duration-300">
                    {award.organization}
                  </span>
                </div>

                {/* Desktop-only Recognition column */}
                <div className="hidden md:block md:w-[30%]">
                  <span className="text-[13.5px] md:text-[14.5px] text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]/90 transition-colors duration-300">
                    {award.recognition}
                  </span>
                </div>

                {/* Year column (Works on both mobile & desktop, aligned right on mobile & desktop) */}
                <div className="w-auto md:w-[15%] md:text-right flex items-center justify-end flex-shrink-0">
                  <span className="inline-block border border-[var(--border-color)] group-hover:border-[var(--accent-color)]/30 text-[var(--text-secondary)] group-hover:text-[var(--accent-color)] px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] md:text-[11px] font-mono tracking-wider rounded-none transition-all duration-300">
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
