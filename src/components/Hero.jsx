import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDownRight, Sparkles, Compass, Layers } from 'lucide-react';
import { MagneticButton } from './motion/MotionPrimitives';

gsap.registerPlugin(ScrollTrigger);

function SplitWords({ text, className = '', gradientLastWord = false }) {
  const words = text.split(' ');
  return (
    <span className={`inline-block ${className}`} aria-label={text}>
      {words.map((word, wIdx) => {
        const isLast = gradientLastWord && wIdx === words.length - 1;
        return (
          <span key={wIdx} className="inline-block whitespace-nowrap mr-[0.26em] last:mr-0">
            {word.split('').map((char, cIdx) => (
              <span
                key={cIdx}
                className="hero-char inline-block will-change-transform"
              >
                <span className={isLast ? 'text-brand-gradient' : ''}>{char}</span>
              </span>
            ))}
          </span>
        );
      })}
    </span>
  );
}

export default function Hero({ onNavigate }) {
  const sectionRef = useRef(null);
  const sculptureRef = useRef(null);
  const orbOneRef = useRef(null);
  const orbTwoRef = useRef(null);
  const [pointer, setPointer] = useState({ x: 50, y: 40 });

  useLayoutEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (!prefersReduced) {
        // Staggered character-by-character split-text entrance
        gsap.from('.hero-char', {
          yPercent: 115,
          opacity: 0,
          rotateX: -35,
          duration: 0.95,
          stagger: 0.022,
          ease: 'power4.out',
          delay: 0.25,
        });

        // Staggered editorial copy & CTAs
        gsap.from('.hero-fade-up', {
          y: 28,
          opacity: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: 'power3.out',
          delay: 0.65,
        });

        // Sculpture & floating cards entrance
        gsap.from('.hero-visual-stage', {
          scale: 0.92,
          opacity: 0,
          y: 35,
          duration: 1.1,
          ease: 'power3.out',
          delay: 0.45,
        });

        // Scroll-linked parallax depth
        gsap.to(sculptureRef.current, {
          y: -55,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });

        gsap.to(orbOneRef.current, {
          y: -90,
          x: 30,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });

        gsap.to(orbTwoRef.current, {
          y: 70,
          x: -25,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPointer({ x, y });
  };

  const scrollTo = (e, selector) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(selector);
    } else {
      document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full overflow-hidden bg-[#E5EAF5] bg-architectural-grid pt-28 pb-20 lg:pt-36 lg:pb-24 flex items-center"
    >
      {/* Interactive cursor-reactive soft gradient illumination */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(620px circle at ${pointer.x}% ${pointer.y}%, rgba(160, 210, 235, 0.34), rgba(208, 189, 244, 0.18) 42%, transparent 72%)`,
        }}
      />

      {/* Ambient floating color aura blobs */}
      <div
        ref={orbOneRef}
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-6%] w-[460px] h-[460px] rounded-full blur-3xl opacity-55 animate-pulse-aura"
        style={{
          background: 'radial-gradient(circle, #D0BDF4 0%, rgba(160, 210, 235, 0.25) 65%, transparent 100%)',
        }}
      />
      <div
        ref={orbTwoRef}
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-[-8%] w-[520px] h-[520px] rounded-full blur-3xl opacity-55"
        style={{
          background: 'radial-gradient(circle, #A0D2EB 0%, rgba(132, 88, 179, 0.16) 70%, transparent 100%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Editorial Typography Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Studio Eyebrow Badge */}
            <div className="hero-fade-up inline-flex items-center gap-2.5 rounded-full bg-[#E5EAF5]/90 border border-[#494D5F]/15 px-4 py-1.5 shadow-sm mb-7">
              <span className="w-2 h-2 rounded-full bg-[#8458B3] animate-ping" />
              <span className="font-mono-label text-xs font-semibold uppercase tracking-[0.2em] text-[#494D5F]">
                Creative Branding · Print · Digital Studio
              </span>
            </div>

            {/* Oversized Split-Text display Headline */}
            <h1 className="font-display font-extrabold text-[2.5rem] sm:text-5xl xl:text-[4rem] leading-[1.03] tracking-[-0.03em] text-[#494D5F] overflow-hidden">
              <span className="block overflow-hidden pb-1">
                <SplitWords text="Designing Ideas." />
              </span>
              <span className="block overflow-hidden pb-2 mt-1">
                <SplitWords text="Creating Impact." gradientLastWord />
              </span>
            </h1>

            {/* Supporting Editorial Copy */}
            <p className="hero-fade-up mt-6 max-w-2xl text-base sm:text-lg lg:text-[1.15rem] leading-relaxed text-[#494D5F]/82 font-normal">
              We transform ideas into powerful visual identities and digital experiences. From
              creative branding to premium printing and digital design, we help businesses stand
              out.
            </p>

            {/* Primary & Secondary Magnetic CTAs */}
            <div className="hero-fade-up mt-9 flex flex-wrap items-center gap-4">
              <MagneticButton
                href="#services"
                onClick={(e) => scrollTo(e, '#services')}
                cursorText="Explore"
                className="inline-flex items-center gap-3 rounded-full bg-[#8458B3] hover:bg-[#7145A1] text-[#E5EAF5] px-7 py-4 text-sm sm:text-base font-semibold shadow-[0_18px_36px_-12px_rgba(132,88,179,0.65)] transition-colors duration-300"
              >
                <span>Explore Our Services</span>
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#E5EAF5]/20">
                  <ArrowDownRight className="w-4 h-4" />
                </span>
              </MagneticButton>

              <MagneticButton
                href="#contact"
                onClick={(e) => scrollTo(e, '#contact')}
                cursorText="Create"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#E5EAF5]/80 hover:bg-[#494D5F] text-[#494D5F] hover:text-[#E5EAF5] border border-[#494D5F]/22 px-7 py-4 text-sm sm:text-base font-semibold backdrop-blur-md transition-colors duration-300"
              >
                <span>Start a Project</span>
              </MagneticButton>
            </div>

            {/* Subtle Studio Capabilities Strip */}
            <div className="hero-fade-up mt-12 pt-7 border-t border-[#494D5F]/12 w-full grid grid-cols-3 gap-4 sm:gap-8 max-w-xl">
              <div>
                <p className="font-display text-2xl sm:text-3xl font-bold text-[#494D5F]">10+</p>
                <p className="font-mono-label text-[11px] uppercase tracking-wider text-[#494D5F]/70 mt-1">
                  Creative Disciplines
                </p>
              </div>
              <div>
                <p className="font-display text-2xl sm:text-3xl font-bold text-[#8458B3]">360°</p>
                <p className="font-mono-label text-[11px] uppercase tracking-wider text-[#494D5F]/70 mt-1">
                  Print &amp; Digital Craft
                </p>
              </div>
              <div>
                <p className="font-display text-2xl sm:text-3xl font-bold text-[#494D5F]">100%</p>
                <p className="font-mono-label text-[11px] uppercase tracking-wider text-[#494D5F]/70 mt-1">
                  Bespoke Execution
                </p>
              </div>
            </div>
          </div>

          {/* Right Abstract 3D Sculptural Composition */}
          <div className="lg:col-span-5 hero-visual-stage relative flex items-center justify-center">
            <div ref={sculptureRef} className="relative w-full max-w-[470px]">
              {/* Decorative geometric orbit SVG behind sculpture */}
              <svg
                viewBox="0 0 460 460"
                className="pointer-events-none absolute -inset-6 w-[calc(100%+48px)] h-[calc(100%+48px)] opacity-65 animate-[spin_46s_linear_infinite]"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="230"
                  cy="230"
                  r="210"
                  stroke="#8458B3"
                  strokeOpacity="0.28"
                  strokeWidth="1.2"
                  strokeDasharray="6 8"
                />
                <circle
                  cx="230"
                  cy="230"
                  r="175"
                  stroke="#A0D2EB"
                  strokeOpacity="0.55"
                  strokeWidth="1.5"
                />
                <circle cx="230" cy="20" r="6" fill="#8458B3" />
                <circle cx="405" cy="230" r="5" fill="#A0D2EB" />
              </svg>

              {/* Main 3D Glass & Ceramic Sculpture Frame */}
              <div className="relative rounded-[2.25rem] p-3 bg-gradient-to-br from-[#A0D2EB]/55 via-[#D0BDF4]/55 to-[#8458B3]/35 shadow-[0_32px_70px_-20px_rgba(73,77,95,0.28)] backdrop-blur-xl border border-white/60">
                <div className="relative overflow-hidden rounded-[1.75rem] aspect-[4/4.3] bg-[#E5EAF5]">
                  <img
                    src="/images/hero-sculpture.png"
                    alt="Abstract 3D sculptural composition in Kreovate brand palette"
                    className="w-full h-full object-cover scale-[1.03] transition-transform duration-700 hover:scale-108"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#494D5F]/35 via-transparent to-transparent" />

                  {/* Bottom glass caption bar */}
                  <div className="absolute bottom-4 inset-x-4 rounded-2xl bg-[#E5EAF5]/85 backdrop-blur-md border border-white/60 px-4 py-3 flex items-center justify-between">
                    <div>
                      <p className="font-mono-label text-[10px] uppercase tracking-[0.2em] text-[#8458B3] font-semibold">
                        Signature Palette &amp; Form
                      </p>
                      <p className="font-display text-sm font-bold text-[#494D5F]">
                        Brand · Print · Digital UI
                      </p>
                    </div>
                    <div className="flex items-center -space-x-1.5">
                      <span className="w-5 h-5 rounded-full bg-[#A0D2EB] border-2 border-[#E5EAF5]" />
                      <span className="w-5 h-5 rounded-full bg-[#D0BDF4] border-2 border-[#E5EAF5]" />
                      <span className="w-5 h-5 rounded-full bg-[#8458B3] border-2 border-[#E5EAF5]" />
                      <span className="w-5 h-5 rounded-full bg-[#494D5F] border-2 border-[#E5EAF5]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Glass Card 1 — Top Left */}
              <div className="animate-float-slow hidden sm:flex items-center gap-3 absolute -top-5 -left-7 rounded-2xl bg-[#494D5F] text-[#E5EAF5] px-4 py-3 shadow-xl border border-[#E5EAF5]/15">
                <div className="w-9 h-9 rounded-xl bg-[#8458B3] flex items-center justify-center text-[#E5EAF5]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-display text-xs font-bold">Visual Storytelling</p>
                  <p className="font-mono-label text-[10px] text-[#A0D2EB]">
                    Identity &amp; Packaging
                  </p>
                </div>
              </div>

              {/* Floating Glass Card 2 — Bottom Right */}
              <div className="animate-float-reverse hidden sm:flex items-center gap-3 absolute -bottom-6 -right-5 rounded-2xl bg-[#E5EAF5]/95 backdrop-blur-xl text-[#494D5F] px-4 py-3 shadow-xl border border-[#494D5F]/12">
                <div className="w-9 h-9 rounded-xl bg-[#A0D2EB]/45 flex items-center justify-center text-[#494D5F]">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-display text-xs font-bold">Precision Print</p>
                  <p className="font-mono-label text-[10px] text-[#8458B3]">
                    Flex · Stationery · UI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Scroll Cue */}
        <div className="mt-14 hidden md:flex items-center justify-between text-xs font-mono-label uppercase tracking-[0.22em] text-[#494D5F]/60">
          <div className="flex items-center gap-2">
            <Compass className="w-3.5 h-3.5 text-[#8458B3]" />
            <span>Scroll to explore studio capabilities</span>
          </div>
          <a
            href="#about"
            onClick={(e) => scrollTo(e, '#about')}
            className="inline-flex items-center gap-2 hover:text-[#8458B3] transition-colors"
          >
            <span>01 / Introduction</span>
            <span className="inline-block w-8 h-[1px] bg-current" />
          </a>
        </div>
      </div>
    </section>
  );
}
