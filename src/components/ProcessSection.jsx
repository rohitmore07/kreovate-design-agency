import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../config/studioConfig';

gsap.registerPlugin(ScrollTrigger);

export default function ProcessSection() {
  const sectionRef = useRef(null);
  const progressLineRef = useRef(null);

  useLayoutEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (!prefersReduced) {
        // Scroll-triggered progress connector line
        gsap.fromTo(
          progressLineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 68%',
              end: 'bottom 72%',
              scrub: 0.8,
            },
          }
        );

        // Staggered step card reveal
        gsap.from('.process-step-card', {
          y: 36,
          opacity: 0,
          duration: 0.8,
          stagger: 0.16,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 72%',
            once: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-[#E5EAF5] bg-architectural-grid overflow-hidden"
    >
      {/* Subtle Sky Blue & Lavender ambient glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-12 right-[10%] w-96 h-96 rounded-full blur-3xl opacity-45"
        style={{ background: 'radial-gradient(circle, #A0D2EB 0%, transparent 70%)' }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 font-mono-label text-xs font-semibold uppercase tracking-[0.22em] text-[#8458B3] mb-4">
            <span className="w-6 h-[2px] bg-[#8458B3]" />
            <span>Creative Workflow · 01 — 04</span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-[#494D5F]">
            From Idea to Impact.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#494D5F]/80 max-w-2xl leading-relaxed">
            A structured, collaborative creative workflow designed to turn initial sparks into
            unforgettable brand identities, print collateral, and digital platforms.
          </p>
        </motion.div>

        {/* Scroll-Triggered Timeline Track (Desktop) */}
        <div className="relative mt-16">

          {/* 4 Process Phases */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {PROCESS_STEPS.map((phase) => (
              <div
                key={phase.step}
                className="process-step-card relative flex flex-col"
              >
                {/* Timeline Step Node */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="relative z-10 w-16 h-16 rounded-2xl bg-[#494D5F] text-[#E5EAF5] flex flex-col items-center justify-center shadow-lg border-4 border-[#E5EAF5]"
                  >
                    <span className="font-mono-label text-[10px] uppercase tracking-widest text-[#A0D2EB]">
                      Step
                    </span>
                    <span className="font-display text-xl font-extrabold leading-none">
                      {phase.step}
                    </span>
                  </div>
                  <span className="font-mono-label text-xs uppercase tracking-[0.18em] text-[#8458B3] font-semibold">
                    {phase.subtitle}
                  </span>
                </div>

                {/* Editorial Phase Card */}
                <div className="flex-1 rounded-[1.85rem] bg-white/80 backdrop-blur-xl border border-[#494D5F]/10 p-6 sm:p-7 shadow-[0_18px_45px_-22px_rgba(73,77,95,0.16)] hover:border-[#8458B3]/40 transition-colors duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono-label text-xs font-bold text-[#8458B3]">
                        {phase.step} —
                      </span>
                      <h3 className="font-display text-2xl font-bold text-[#494D5F]">
                        {phase.title}
                      </h3>
                    </div>

                    <p className="mt-3 text-sm sm:text-base font-semibold text-[#494D5F]">
                      {phase.description}
                    </p>

                    <p className="mt-3 text-sm text-[#494D5F]/75 leading-relaxed">
                      {phase.detail}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#494D5F]/10 flex items-center justify-between">
                    <span
                      className="h-2 w-12 rounded-full"
                      style={{ backgroundColor: phase.accent }}
                    />
                    <span className="font-mono-label text-[11px] text-[#494D5F]/50">
                      Phase {phase.step}/04
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
