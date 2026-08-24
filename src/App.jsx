import SmoothScrollProvider from './components/layout/SmoothScrollProvider';
import GrainOverlay from './components/ui/GrainOverlay';
import CustomCursor from './components/ui/CustomCursor';
import Preloader from './components/ui/Preloader';
import Marquee from './components/ui/Marquee';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import WaysToBuild from './components/sections/WaysToBuild';
import Templates from './components/sections/Templates';
import Process from './components/sections/Process';
import Maintenance from './components/sections/Maintenance';
import WhyUs from './components/sections/WhyUs';
import Audience from './components/sections/Audience';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <SmoothScrollProvider>
      <Preloader />
      <GrainOverlay />
      <CustomCursor />
      <div className="app">
        <Navbar />
        <main id="main-content">
          <Hero />
          <Marquee />
          <About />
          <Services />
          <WaysToBuild />
          <Templates />
          <Process />
          <Maintenance />
          <WhyUs />
          <Audience />
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}
