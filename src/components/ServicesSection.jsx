import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA } from '../config/studioConfig';
import { TiltCard, ServiceGeometricIcon } from './motion/MotionPrimitives';

const DISCIPLINES = [
  'All',
  'Brand & Identity',
  'Print & Packaging',
  'Marketing & Events',
  'Digital & Social',
];

export default function ServicesSection({ onSelectService }) {
  const [activeDiscipline, setActiveDiscipline] = useState('All');

  const filteredServices =
    activeDiscipline === 'All'
      ? SERVICES_DATA
      : SERVICES_DATA.filter((service) => service.category === activeDiscipline);

  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 bg-[#E5EAF5] overflow-hidden"
    >
      {/* Top gradient transition band from About's Lavender */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#D0BDF4]/25 to-transparent"
      />
      {/* Ambient Sky Blue orb */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-24 right-[-8%] w-[480px] h-[480px] rounded-full blur-3xl opacity-40"
        style={{ background: 'radial-gradient(circle, #A0D2EB 0%, transparent 70%)' }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-[#494D5F]/12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 font-mono-label text-xs font-semibold uppercase tracking-[0.22em] text-[#8458B3] mb-4">
              <span className="w-6 h-[2px] bg-[#8458B3]" />
              <span>Our Capabilities · 01 — 10</span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-[#494D5F]">
              What We Create.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-md text-base sm:text-lg text-[#494D5F]/80 leading-relaxed"
          >
            Complete designing, printing and branding solutions for businesses, startups, and
            individuals.
          </motion.p>
        </div>

        {/* Interactive Discipline Filter Bar */}
        <div className="mt-8 mb-12 flex flex-wrap items-center gap-2.5">
          {DISCIPLINES.map((discipline) => {
            const isActive = activeDiscipline === discipline;
            const count =
              discipline === 'All'
                ? SERVICES_DATA.length
                : SERVICES_DATA.filter((s) => s.category === discipline).length;
            return (
              <button
                key={discipline}
                type="button"
                onClick={() => setActiveDiscipline(discipline)}
                className={`relative px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-300 ${
                  isActive
                    ? 'text-[#E5EAF5]'
                    : 'text-[#494D5F]/80 hover:text-[#494D5F] bg-white/55 border border-[#494D5F]/10'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="service-filter-pill"
                    transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-[#494D5F] -z-10 shadow-md"
                  />
                )}
                <span>{discipline}</span>
                <span
                  className={`ml-2 font-mono-label text-[11px] ${
                    isActive ? 'text-[#A0D2EB]' : 'text-[#8458B3]'
                  }`}
                >
                  ({count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Asymmetric Bento-Editorial Service Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => {
              // On "All" view, featured cards span 6 cols (2 per row) and standard cards span 4 cols (3 per row) for an asymmetric editorial rhythm
              const colSpanClass =
                activeDiscipline === 'All'
                  ? service.featured
                    ? 'lg:col-span-6'
                    : 'lg:col-span-4'
                  : 'lg:col-span-6';

              return (
                <motion.div
                  layout
                  key={service.id}
                  initial={{ opacity: 0, y: 24, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{
                    duration: 0.45,
                    delay: Math.min(index * 0.04, 0.28),
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={colSpanClass}
                >
                  <TiltCard
                    accent={service.accent}
                    className="h-full rounded-[1.85rem] bg-white/75 backdrop-blur-xl border border-[#494D5F]/10 p-6 sm:p-8 shadow-[0_18px_45px_-22px_rgba(73,77,95,0.16)] hover:shadow-[0_26px_60px_-20px_rgba(132,88,179,0.24)] transition-shadow duration-500 flex flex-col justify-between"
                  >
                    <div>
                      {/* Card Top Bar: Number + Category + Custom Animated Icon */}
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <span
                            className="inline-flex items-center justify-center w-10 h-10 rounded-xl font-mono-label text-sm font-bold text-[#494D5F]"
                            style={{ backgroundColor: `${service.accent}45` }}
                          >
                            {service.number}
                          </span>
                          <span className="font-mono-label text-[11px] uppercase tracking-[0.18em] text-[#494D5F]/65">
                            {service.category}
                          </span>
                        </div>

                        <div className="p-2.5 rounded-2xl bg-[#E5EAF5]/90 border border-[#494D5F]/8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                          <ServiceGeometricIcon
                            serviceId={service.id}
                            accent={service.accent}
                          />
                        </div>
                      </div>

                      {/* Service Title & Summary */}
                      <h3 className="mt-6 font-display text-xl sm:text-2xl font-bold text-[#494D5F] leading-snug group-hover:text-[#8458B3] transition-colors">
                        {service.title}
                      </h3>

                      <p className="mt-2.5 text-sm leading-relaxed text-[#494D5F]/75">
                        {service.summary}
                      </p>

                      {/* Deliverables List */}
                      <ul className="mt-5 pt-5 border-t border-[#494D5F]/10 space-y-2">
                        {service.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm text-[#494D5F]/90"
                          >
                            <CheckCircle2
                              className="w-4 h-4 shrink-0 mt-0.5"
                              style={{ color: '#8458B3' }}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Interactive Inquiry Footer */}
                    <div className="mt-7 pt-4 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => onSelectService?.(service.title)}
                        data-cursor="Inquire"
                        className="inline-flex items-center gap-2 font-display text-xs sm:text-sm font-bold text-[#494D5F] group-hover:text-[#8458B3] transition-colors"
                      >
                        <span>Start {service.number} Inquiry</span>
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#E5EAF5] group-hover:bg-[#8458B3] group-hover:text-[#E5EAF5] transition-colors">
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </button>

                      <span className="font-mono-label text-[10px] uppercase tracking-widest text-[#494D5F]/40">
                        Kreovate
                      </span>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
