import { Suspense, lazy } from 'react';
import SmoothScroll from './components/layout/SmoothScroll';
import EditorialNavbar from './components/layout/EditorialNavbar';
import EditorialHero from './components/sections/EditorialHero';
import CustomCursor from './components/ui/CustomCursor';
import GlobalGridLines from './components/ui/GlobalGridLines';

// Lazy-load below-fold sections — each becomes its own JS chunk
const EditorialWhyUs        = lazy(() => import('./components/sections/EditorialWhyUs'));
const EditorialWorkflow     = lazy(() => import('./components/sections/EditorialWorkflow'));
const EditorialAbout        = lazy(() => import('./components/sections/EditorialAbout'));
const EditorialTestimonials = lazy(() => import('./components/sections/EditorialTestimonials'));
const EditorialAwards       = lazy(() => import('./components/sections/EditorialAwards'));
const EditorialTools        = lazy(() => import('./components/sections/EditorialTools'));
const EditorialPricing      = lazy(() => import('./components/sections/EditorialPricing'));
const EditorialFAQ          = lazy(() => import('./components/sections/EditorialFAQ'));
const EditorialContact      = lazy(() => import('./components/sections/EditorialContact'));

// Minimal invisible placeholder while lazy chunks load
const SectionFallback = () => (
  <div className="w-full border-t border-[var(--border-color)]" style={{ minHeight: '1px' }} />
);

function App() {
  return (
    <SmoothScroll>
      <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-[var(--text-primary)] selection:text-[var(--bg-primary)] min-h-screen relative transition-colors duration-700">
        <CustomCursor />
        <GlobalGridLines />
        <EditorialNavbar />
        <main>
          {/* 1. HERO SECTION — eager, visible immediately */}
          <EditorialHero />

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
            <div className="flex gap-8">
              <a href="#" className="hover:text-[var(--text-primary)] transition-colors">Instagram</a>
              <a href="#" className="hover:text-[var(--text-primary)] transition-colors">LinkedIn</a>
            </div>
          </div>
        </footer>
      </div>
    </SmoothScroll>
  );
}

export default App;
