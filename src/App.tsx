import SmoothScroll from './components/layout/SmoothScroll';
import EditorialNavbar from './components/layout/EditorialNavbar';
import EditorialHero from './components/sections/EditorialHero';
import EditorialClients from './components/sections/EditorialClients';
import EditorialWhyUs from './components/sections/EditorialWhyUs';
import EditorialAbout from './components/sections/EditorialAbout';
import EditorialWorkflow from './components/sections/EditorialWorkflow';
import EditorialTestimonials from './components/sections/EditorialTestimonials';
import EditorialAboutLegacy from './components/sections/EditorialAboutLegacy';
import EditorialPricing from './components/sections/EditorialPricing';
import EditorialFAQ from './components/sections/EditorialFAQ';
import EditorialContact from './components/sections/EditorialContact';
import CustomCursor from './components/ui/CustomCursor';
import GlobalGridLines from './components/ui/GlobalGridLines';

function App() {
  return (
    <SmoothScroll>
      <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-[var(--text-primary)] selection:text-[var(--bg-primary)] min-h-screen relative transition-colors duration-700">
        <CustomCursor />
        <GlobalGridLines />
        <EditorialNavbar />
        <main>
          <EditorialHero />
          <EditorialClients />
          <EditorialWhyUs />
          <EditorialAbout />
          <EditorialWorkflow />
          <EditorialTestimonials />
          <EditorialAboutLegacy />
          <EditorialPricing />
          <EditorialFAQ />
          <EditorialContact />
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
