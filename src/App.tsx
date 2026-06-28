import { Suspense, lazy, useState, useEffect } from 'react';
import SmoothScroll from './components/layout/SmoothScroll';
import EditorialNavbar from './components/layout/EditorialNavbar';
import EditorialHero from './components/sections/EditorialHero';
import CustomCursor from './components/ui/CustomCursor';
import GlobalGridLines from './components/ui/GlobalGridLines';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

// Lazy-load below-fold sections — each becomes its own JS chunk
const EditorialClients     = lazy(() => import('./components/sections/EditorialClients'));
const EditorialWhyUs        = lazy(() => import('./components/sections/EditorialWhyUs'));
const EditorialWorkflow     = lazy(() => import('./components/sections/EditorialWorkflow'));
const EditorialAbout        = lazy(() => import('./components/sections/EditorialAbout'));
const EditorialTestimonials = lazy(() => import('./components/sections/EditorialTestimonials'));
const EditorialAwards       = lazy(() => import('./components/sections/EditorialAwards'));
const EditorialTools        = lazy(() => import('./components/sections/EditorialTools'));
const EditorialPricing      = lazy(() => import('./components/sections/EditorialPricing'));
const EditorialFAQ          = lazy(() => import('./components/sections/EditorialFAQ'));
const EditorialContact      = lazy(() => import('./components/sections/EditorialContact'));
const EditorialWorkPage     = lazy(() => import('./components/sections/EditorialWorkPage'));

// Minimal invisible placeholder while lazy chunks load
const SectionFallback = () => (
  <div className="w-full border-t border-[var(--border-color)]" style={{ minHeight: '1px' }} />
);

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
      setCurrentHash(window.location.hash);
      
      // Scroll to top when switching view
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const isWorkPage = currentPath === '/work' || currentHash === '#work';

  return (
    <SmoothScroll>
      <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-[var(--text-primary)] selection:text-[var(--bg-primary)] min-h-screen relative transition-colors duration-700">
        <CustomCursor />
        <GlobalGridLines />
        
        {isWorkPage ? (
          <Suspense fallback={<SectionFallback />}>
            <EditorialWorkPage />
          </Suspense>
        ) : (
          <>
            <EditorialNavbar />
            <main>
              {/* 1. HERO SECTION — eager, visible immediately */}
              <EditorialHero />

              {/* 1.5 PARTNERS MARQUEE SLIDER */}
              <Suspense fallback={<SectionFallback />}>
                <EditorialClients />
              </Suspense>

              {/* Below-fold sections — lazy loaded on first render */}
              <Suspense fallback={<SectionFallback />}>
                <EditorialWhyUs />
              </Suspense>

              <Suspense fallback={<SectionFallback />}>
                <EditorialWorkflow />
              </Suspense>

              <Suspense fallback={<SectionFallback />}>
                <EditorialAbout />
              </Suspense>

              <Suspense fallback={<SectionFallback />}>
                <EditorialTestimonials />
              </Suspense>

              <Suspense fallback={<SectionFallback />}>
                <EditorialAwards />
              </Suspense>

              <Suspense fallback={<SectionFallback />}>
                <EditorialTools />
              </Suspense>

              <Suspense fallback={<SectionFallback />}>
                <EditorialPricing />
              </Suspense>

              <Suspense fallback={<SectionFallback />}>
                <EditorialFAQ />
              </Suspense>

              <Suspense fallback={<SectionFallback />}>
                <EditorialContact />
              </Suspense>
            </main>

            <footer className="border-t border-[var(--border-color)] text-[10px] uppercase tracking-[0.3em] text-[var(--text-secondary)] bg-[var(--bg-primary)] transition-colors duration-700">
              <div className="container-custom py-12 flex justify-between items-center">
                <div>© {new Date().getFullYear()} MAS MENA®</div>
                <div className="flex gap-6 items-center">
                  <a 
                    href="https://www.facebook.com/ModernAdvancedServices" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-[var(--text-primary)] transition-colors flex items-center justify-center p-1"
                    aria-label="Facebook"
                  >
                    <Facebook size={16} />
                  </a>
                  <a 
                    href="https://www.instagram.com/modern.advanced.services/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-[var(--text-primary)] transition-colors flex items-center justify-center p-1"
                    aria-label="Instagram"
                  >
                    <Instagram size={16} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/mas-modern-advanced-services/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-[var(--text-primary)] transition-colors flex items-center justify-center p-1"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={16} />
                  </a>
                </div>
              </div>
            </footer>
          </>
        )}
      </div>
    </SmoothScroll>
  );
}

export default App;
