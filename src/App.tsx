import { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useScroll, useSpring } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import WhyChooseSection from './components/WhyChooseSection';
import ProcessSection from './components/ProcessSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { Preloader, CustomCursor } from './components/motion/MotionPrimitives';
import { STUDIO_CONFIG } from './config/studioConfig';

gsap.registerPlugin(ScrollTrigger);

export function App() {
  const lenisRef = useRef<Lenis | null>(null);
  const [preselectedService, setPreselectedService] = useState('');
  const [prefilledNote, setPrefilledNote] = useState('');

  // Top scroll progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const handleNavigate = (selector: string) => {
    const target = document.querySelector(selector);
    if (!target) return;
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target as HTMLElement, { offset: -20 });
    } else {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
    handleNavigate('#contact');
  };

  const handleStartSimilarProject = (projectTitle: string) => {
    setPrefilledNote(projectTitle);
    handleNavigate('#contact');
  };

  const floatingWhatsappUrl = `https://wa.me/${STUDIO_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
    `Hello ${STUDIO_CONFIG.name}! I'd like to discuss a creative design or printing project.`
  )}`;

  return (
    <div className="relative min-h-screen bg-[#E5EAF5] text-[#494D5F]">
      {/* Page Loading Curtain */}
      <Preloader />

      {/* Custom Interactive Trailing Cursor */}
      <CustomCursor />

      {/* Subtle Scroll Progress Bar */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] z-[60] origin-left bg-gradient-to-r from-[#A0D2EB] via-[#D0BDF4] to-[#8458B3]"
      />

      {/* Minimal Floating Glass Navigation */}
      <Navbar onNavigate={handleNavigate} />

      {/* Main Editorial Studio Experience */}
      <main>
        <Hero onNavigate={handleNavigate} />
        <AboutSection onNavigate={handleNavigate} />
        <ServicesSection onSelectService={handleSelectService} />
        <PortfolioSection onStartSimilarProject={handleStartSimilarProject} />
        <WhyChooseSection />
        <ProcessSection />
        <ContactSection
          preselectedService={preselectedService}
          prefilledNote={prefilledNote}
        />
      </main>

      {/* Studio Footer */}
      <Footer
        onNavigate={handleNavigate}
        onSelectService={handleSelectService}
      />

      {/* Floating Quick-WhatsApp Studio Pill */}
      <a
        href={floatingWhatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Kreovate Design Agency on WhatsApp"
        data-cursor="WhatsApp"
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 rounded-full bg-[#494D5F] hover:bg-[#8458B3] text-[#E5EAF5] pl-4 pr-5 py-3 shadow-[0_16px_38px_-10px_rgba(73,77,95,0.5)] border border-[#E5EAF5]/15 transition-all duration-300 hover:scale-105"
      >
        <span className="w-8 h-8 rounded-full bg-[#A0D2EB] text-[#494D5F] flex items-center justify-center">
          <MessageCircle className="w-4 h-4" />
        </span>
        <span className="hidden sm:inline font-display text-xs font-bold tracking-wide">
          Let&apos;s Chat
        </span>
      </a>
    </div>
  );
}

export default App;
