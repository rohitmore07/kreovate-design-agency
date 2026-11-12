import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { KreovateLogo, MagneticButton } from './motion/MotionPrimitives';
import { STUDIO_CONFIG } from '../config/studioConfig';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 36);

      const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    if (onNavigate) {
      onNavigate(href);
    } else {
      const target = document.querySelector(href);
      target?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3 px-4 sm:px-6 lg:px-10' : 'py-5 px-4 sm:px-8 lg:px-12'
        }`}
      >
        <div
          className={`mx-auto max-w-7xl flex items-center justify-between rounded-2xl transition-all duration-500 ${
            scrolled
              ? 'bg-[#E5EAF5]/85 backdrop-blur-xl border border-[#494D5F]/12 shadow-[0_12px_40px_-15px_rgba(73,77,95,0.18)] px-4 sm:px-6 py-2.5'
              : 'bg-transparent border border-transparent px-1 py-1'
          }`}
        >
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            aria-label="Kreovate Design Agency Home"
            className="focus:outline-none"
          >
            <KreovateLogo size="md" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#E5EAF5]/60 backdrop-blur-md border border-[#494D5F]/10 rounded-full px-2 py-1.5">
            {NAV_LINKS.map((item) => {
              const id = item.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-300 ${
                    isActive
                      ? 'text-[#E5EAF5]'
                      : 'text-[#494D5F]/80 hover:text-[#494D5F]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                      className="absolute inset-0 rounded-full bg-[#494D5F] -z-10"
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <MagneticButton
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              cursorText="Start"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#8458B3] hover:bg-[#7347A3] text-[#E5EAF5] px-5 py-2.5 text-sm font-semibold shadow-[0_10px_25px_-8px_rgba(132,88,179,0.55)] transition-colors duration-300"
            >
              <span>Let&apos;s Create Together</span>
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#494D5F] text-[#E5EAF5] hover:bg-[#8458B3] transition-colors"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Animated Mobile Full-Screen Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-nav-overlay"
            initial={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 2.5rem) 2.5rem)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at calc(100% - 2.5rem) 2.5rem)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 2.5rem) 2.5rem)' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#494D5F] text-[#E5EAF5] flex flex-col justify-between px-6 pt-28 pb-10 lg:hidden overflow-y-auto"
          >
            <div
              className="pointer-events-none absolute top-20 right-0 w-72 h-72 rounded-full blur-3xl opacity-30"
              style={{ background: 'radial-gradient(circle, #D0BDF4, transparent 70%)' }}
            />

            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((item, idx) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  initial={{ x: -24, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + idx * 0.06, duration: 0.45 }}
                  className="group flex items-baseline justify-between border-b border-[#E5EAF5]/12 py-3.5"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono-label text-xs text-[#A0D2EB]">
                      0{idx + 1}
                    </span>
                    <span className="font-display text-3xl font-bold tracking-tight group-hover:text-[#D0BDF4] transition-colors">
                      {item.label}
                    </span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[#A0D2EB] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-col gap-4"
            >
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#8458B3] text-[#E5EAF5] py-4 px-6 font-semibold text-base shadow-lg"
              >
                <span>Let&apos;s Create Together</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>
              <div className="flex items-center justify-between text-xs font-mono-label text-[#D0BDF4]/80 pt-2">
                <span>{STUDIO_CONFIG.contact.email}</span>
                <span>{STUDIO_CONFIG.contact.phonedisplay}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
