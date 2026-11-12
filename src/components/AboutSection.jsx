import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { ArrowUpRight, PenTool, Printer, Monitor } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection({ onNavigate }) {
  const sectionRef = useRef(null);
  const imageWrapRef = useRef(null);

  useLayoutEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (!prefersReduced) {
        gsap.fromTo(
          imageWrapRef.current,
          { clipPath: 'inset(12% 0% 12% 0% round 2rem)', scale: 0.96 },
          {
            clipPath: 'inset(0% 0% 0% 0% round 2rem)',
            scale: 1,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
              once: true,
            },
          }
        );

        gsap.from('.about-svg-path', {
          strokeDashoffset: 360,
          duration: 1.4,
          stagger: 0.2,
          ease: 'power2.out',
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
      id="about"
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-gradient-to-b from-[#E5EAF5] via-[#E5EAF5] to-[#D0BDF4]/25 overflow-hidden"
    >
      {/* Subtle decorative Sky Blue highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-16 left-[-10%] w-96 h-96 rounded-full blur-3xl opacity-45"
        style={{ background: 'radial-gradient(circle, #A0D2EB 0%, transparent 70%)' }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Animated Visual Composition */}
          <div className="lg:col-span-6 relative">
            <div
              ref={imageWrapRef}
              className="relative overflow-hidden rounded-[2rem] shadow-[0_30px_70px_-20px_rgba(73,77,95,0.22)] border border-[#494D5F]/10 bg-[#D0BDF4]/30"
            >
              <img
                src="/images/about-studio.png"
                alt="Kreovate Design Agency tactile swatches and design craft"
                loading="lazy"
                className="w-full aspect-[4/4.2] object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#494D5F]/35 via-transparent to-[#A0D2EB]/15" />

              {/* Animated SVG Architectural Overlay Diagram */}
              <svg
                viewBox="0 0 220 220"
                className="pointer-events-none absolute top-5 right-5 w-28 h-28 sm:w-36 sm:h-36 drop-shadow-md"
                fill="none"
                aria-hidden="true"
              >
                <rect
                  x="10"
                  y="10"
                  width="200"
                  height="200"
                  rx="28"
                  fill="rgba(229, 234, 245, 0.85)"
                />
                <circle
                  cx="110"
                  cy="110"
                  r="72"
                  stroke="#8458B3"
                  strokeWidth="2"
                  strokeDasharray="360"
                  className="about-svg-path"
                />
                <polygon
                  points="110,48 164,142 56,142"
                  stroke="#494D5F"
                  strokeWidth="2.2"
                  strokeDasharray="360"
                  className="about-svg-path"
                />
                <circle cx="110" cy="48" r="5" fill="#A0D2EB" />
                <circle cx="164" cy="142" r="5" fill="#8458B3" />
                <circle cx="56" cy="142" r="5" fill="#D0BDF4" />
              </svg>
            </div>

            {/* Overlapping Editorial Studio Manifesto Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 sm:mt-0 sm:absolute sm:-bottom-8 sm:-right-6 max-w-xs rounded-2xl bg-[#494D5F] text-[#E5EAF5] p-5 shadow-2xl border border-[#E5EAF5]/15"
            >
              <p className="font-mono-label text-[10px] uppercase tracking-[0.22em] text-[#A0D2EB]">
                Our Philosophy
              </p>
              <p className="font-display text-base font-bold mt-1.5 leading-snug">
                Where strategic thinking meets tactile print &amp; modern digital craft.
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className="inline-block h-1.5 w-8 rounded-full bg-[#8458B3]" />
                <span className="inline-block h-1.5 w-4 rounded-full bg-[#D0BDF4]" />
                <span className="inline-block h-1.5 w-2 rounded-full bg-[#A0D2EB]" />
              </div>
            </motion.div>
          </div>

          {/* Right Editorial Narrative Column */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 font-mono-label text-xs font-semibold uppercase tracking-[0.22em] text-[#8458B3] mb-4">
                <span className="w-6 h-[2px] bg-[#8458B3]" />
                <span>About Kreovate Design Agency</span>
              </div>

              <h2 className="font-display font-extrabold text-3xl sm:text-5xl leading-[1.08] tracking-tight text-[#494D5F]">
                Creativity That Builds Brands.
              </h2>

              <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#494D5F]/85">
                At Kreovate Design Agency, we believe great design goes beyond aesthetics. It
                communicates your story, builds recognition, and creates meaningful connections
                with your audience.
              </p>

              <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#494D5F]/85">
                We bring together creative thinking, strategic branding, and thoughtful design to
                help businesses communicate their identity through impactful visuals and digital
                experiences.
              </p>

              {/* Three Core Pillars */}
              <div className="mt-9 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-2xl bg-[#E5EAF5]/90 border border-[#494D5F]/10 p-4 shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-[#D0BDF4]/55 flex items-center justify-center text-[#494D5F] mb-3">
                    <PenTool className="w-4 h-4" />
                  </div>
                  <h3 className="font-display text-sm font-bold text-[#494D5F]">
                    Brand Identity
                  </h3>
                  <p className="text-xs text-[#494D5F]/75 mt-1 leading-relaxed">
                    Distinctive logos, palettes, and cohesive visual systems.
                  </p>
                </div>

                <div className="rounded-2xl bg-[#E5EAF5]/90 border border-[#494D5F]/10 p-4 shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-[#A0D2EB]/55 flex items-center justify-center text-[#494D5F] mb-3">
                    <Printer className="w-4 h-4" />
                  </div>
                  <h3 className="font-display text-sm font-bold text-[#494D5F]">
                    Premium Print
                  </h3>
                  <p className="text-xs text-[#494D5F]/75 mt-1 leading-relaxed">
                    High-impact flex banners, packaging, cards &amp; brochures.
                  </p>
                </div>

                <div className="rounded-2xl bg-[#E5EAF5]/90 border border-[#494D5F]/10 p-4 shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-[#8458B3]/20 flex items-center justify-center text-[#8458B3] mb-3">
                    <Monitor className="w-4 h-4" />
                  </div>
                  <h3 className="font-display text-sm font-bold text-[#494D5F]">
                    Digital Design
                  </h3>
                  <p className="text-xs text-[#494D5F]/75 mt-1 leading-relaxed">
                    Modern websites, mobile apps, and engaging social campaigns.
                  </p>
                </div>
              </div>

              <div className="mt-9">
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate?.('#services');
                  }}
                  className="inline-flex items-center gap-2 font-display text-sm font-bold text-[#8458B3] hover:text-[#494D5F] transition-colors group"
                >
                  <span>Discover our 10 specialized disciplines</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
