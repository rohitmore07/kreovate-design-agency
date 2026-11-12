import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Sparkles, Layers, MoveHorizontal } from 'lucide-react';
import { PORTFOLIO_WORKS } from '../config/studioConfig';

gsap.registerPlugin(ScrollTrigger);

const PORTFOLIO_CATEGORIES = [
  'All',
  'Branding',
  'Graphic Design',
  'Social Media',
  'Packaging',
  'Print Design',
  'Digital Experiences',
];

export default function PortfolioSection({ onStartSimilarProject }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState(null);
  const sectionRef = useRef(null);
  const horizontalTrackRef = useRef(null);

  const filteredWorks =
    selectedCategory === 'All'
      ? PORTFOLIO_WORKS
      : PORTFOLIO_WORKS.filter((work) => work.category === selectedCategory);

  useLayoutEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (!prefersReduced && horizontalTrackRef.current) {
        gsap.to(horizontalTrackRef.current, {
          xPercent: -18,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-[#494D5F] text-[#E5EAF5] bg-architectural-grid-dark overflow-hidden"
    >
      {/* Ambient Lavender & Sky Blue Studio Spotlights */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 left-[15%] w-[520px] h-[520px] rounded-full blur-3xl opacity-22"
        style={{ background: 'radial-gradient(circle, #8458B3 0%, transparent 70%)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-[5%] w-[440px] h-[440px] rounded-full blur-3xl opacity-18"
        style={{ background: 'radial-gradient(circle, #A0D2EB 0%, transparent 70%)' }}
      />

      {/* Kinetic Horizontal Editorial Marquee Strip driven by GSAP ScrollTrigger */}
      <div className="mb-16 overflow-hidden border-y border-[#E5EAF5]/10 py-4 select-none">
        <div
          ref={horizontalTrackRef}
          className="flex items-center gap-8 whitespace-nowrap will-change-transform"
        >
          {[
            'BRAND IDENTITY',
            '·',
            'PACKAGING DESIGN',
            '·',
            'PREMIUM PRINTING',
            '·',
            'DIGITAL EXPERIENCES',
            '·',
            'SOCIAL CAMPAIGNS',
            '·',
            'EDITORIAL GRAPHICS',
            '·',
            'BRAND IDENTITY',
            '·',
            'PACKAGING DESIGN',
            '·',
            'PREMIUM PRINTING',
          ].map((word, i) => (
            <span
              key={i}
              className={`font-display text-2xl sm:text-4xl font-extrabold tracking-tight ${
                word === '·'
                  ? 'text-[#8458B3]'
                  : i % 4 === 0
                  ? 'text-[#E5EAF5]/85'
                  : 'text-transparent [-webkit-text-stroke:1px_rgba(208,189,244,0.45)]'
              }`}
            >
              {word}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-[#E5EAF5]/12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 font-mono-label text-xs font-semibold uppercase tracking-[0.22em] text-[#A0D2EB] mb-4">
              <span className="w-6 h-[2px] bg-[#A0D2EB]" />
              <span>Curated Exhibition · Portfolio</span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-[#E5EAF5]">
              Selected Works.
              <span className="block text-brand-gradient-light mt-1">Creative Thinking.</span>
            </h2>
          </motion.div>

          <div className="flex items-center gap-3 text-xs font-mono-label uppercase tracking-widest text-[#D0BDF4]/80">
            <MoveHorizontal className="w-4 h-4 text-[#A0D2EB]" />
            <span>Filter by discipline or inspect case studies</span>
          </div>
        </div>

        {/* Interactive Category Filter Pills */}
        <div className="mt-8 mb-12 flex flex-wrap items-center gap-2.5">
          {PORTFOLIO_CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`relative px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-300 ${
                  isActive
                    ? 'text-[#494D5F]'
                    : 'text-[#E5EAF5]/80 hover:text-[#E5EAF5] bg-[#E5EAF5]/8 border border-[#E5EAF5]/12'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="portfolio-filter-pill"
                    transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-[#D0BDF4] -z-10 shadow-lg"
                  />
                )}
                {category}
              </button>
            );
          })}
        </div>

        {/* Asymmetric Editorial Masonry Showcase */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-12 gap-7"
        >
          <AnimatePresence mode="popLayout">
            {filteredWorks.map((work, idx) => {
              // Asymmetric editorial column spans when viewing All
              const spanClass =
                selectedCategory === 'All'
                  ? idx === 0
                    ? 'md:col-span-7'
                    : idx === 1
                    ? 'md:col-span-5'
                    : idx === 2
                    ? 'md:col-span-5'
                    : idx === 3
                    ? 'md:col-span-7'
                    : 'md:col-span-6'
                  : 'md:col-span-6';

              return (
                <motion.article
                  layout
                  key={work.id}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setActiveProject(work)}
                  data-cursor="View"
                  className={`${spanClass} group cursor-pointer rounded-[2rem] bg-[#E5EAF5]/[0.05] border border-[#E5EAF5]/12 overflow-hidden flex flex-col justify-between hover:border-[#D0BDF4]/50 transition-colors duration-500`}
                >
                  {/* Image Container with Clip & Smooth Zoom Reveal */}
                  <div className="relative overflow-hidden aspect-[16/11] bg-[#3C4050]">
                    <motion.img
                      src={work.image}
                      alt={work.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#494D5F] via-[#494D5F]/20 to-transparent opacity-75 group-hover:opacity-55 transition-opacity duration-500" />

                    {/* Top Category & Year Pill */}
                    <div className="absolute top-4 inset-x-4 flex items-center justify-between">
                      <span
                        className="px-3.5 py-1 rounded-full font-mono-label text-[11px] font-semibold uppercase tracking-wider text-[#494D5F] shadow-sm"
                        style={{ backgroundColor: work.accent }}
                      >
                        {work.category}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#494D5F]/80 backdrop-blur-md border border-[#E5EAF5]/15 font-mono-label text-xs text-[#E5EAF5]">
                        {work.year}
                      </span>
                    </div>

                    {/* Floating Corner Action Button */}
                    <div className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-[#E5EAF5] text-[#494D5F] group-hover:bg-[#8458B3] group-hover:text-[#E5EAF5] flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Editorial Card Details */}
                  <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                    <div>
                      <p className="font-mono-label text-xs uppercase tracking-[0.2em] text-[#A0D2EB]">
                        {work.client}
                      </p>
                      <h3 className="mt-2 font-display text-xl sm:text-2xl font-bold text-[#E5EAF5] group-hover:text-[#D0BDF4] transition-colors">
                        {work.title}
                      </h3>
                      <p className="mt-2.5 text-sm text-[#E5EAF5]/75 leading-relaxed">
                        {work.summary}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-[#E5EAF5]/10 flex flex-wrap gap-2">
                      {work.deliverables.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-[#E5EAF5]/8 text-[#D0BDF4] font-mono-label text-[11px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Full-Screen Editorial Case Study Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            key="portfolio-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
            className="fixed inset-0 z-50 bg-[#2C2F3B]/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto"
          >
            <motion.div
              key="portfolio-modal-card"
              initial={{ opacity: 0, y: 36, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl rounded-[2.2rem] bg-[#E5EAF5] text-[#494D5F] overflow-hidden shadow-2xl border border-white/50 my-auto"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                aria-label="Close project preview"
                className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-[#494D5F] text-[#E5EAF5] hover:bg-[#8458B3] flex items-center justify-center shadow-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Hero Preview Visual */}
              <div className="relative aspect-[16/9] max-h-[420px] w-full overflow-hidden bg-[#494D5F]">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#494D5F]/75 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <span
                      className="inline-block px-3.5 py-1 rounded-full font-mono-label text-xs font-bold uppercase tracking-wider text-[#494D5F] mb-2"
                      style={{ backgroundColor: activeProject.accent }}
                    >
                      {activeProject.category} · {activeProject.year}
                    </span>
                    <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-[#E5EAF5]">
                      {activeProject.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Case Study Narrative */}
              <div className="p-6 sm:p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="inline-flex items-center gap-2 font-mono-label text-xs uppercase tracking-widest text-[#8458B3] font-bold">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>The Creative Brief</span>
                    </div>
                    <p className="mt-2.5 text-sm sm:text-base text-[#494D5F]/85 leading-relaxed">
                      {activeProject.challenge}
                    </p>
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 font-mono-label text-xs uppercase tracking-widest text-[#8458B3] font-bold">
                      <Layers className="w-3.5 h-3.5" />
                      <span>Kreovate Execution</span>
                    </div>
                    <p className="mt-2.5 text-sm sm:text-base text-[#494D5F]/85 leading-relaxed">
                      {activeProject.solution}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#494D5F]/12 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div>
                    <p className="font-mono-label text-[11px] uppercase tracking-widest text-[#494D5F]/60 mb-2">
                      Key Deliverables
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.deliverables.map((item) => (
                        <span
                          key={item}
                          className="px-3.5 py-1.5 rounded-full bg-[#D0BDF4]/45 text-[#494D5F] font-mono-label text-xs font-semibold"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      const title = activeProject.title;
                      setActiveProject(null);
                      onStartSimilarProject?.(title);
                    }}
                    className="shrink-0 inline-flex items-center justify-center gap-2 rounded-full bg-[#8458B3] hover:bg-[#7145A1] text-[#E5EAF5] px-6 py-3.5 text-sm font-semibold shadow-lg transition-colors"
                  >
                    <span>Start a Similar Project</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
