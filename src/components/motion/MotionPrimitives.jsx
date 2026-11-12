import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from 'framer-motion';

/**
 * Custom Geometric Kreovate Emblem + Wordmark
 */
export function KreovateLogo({ dark = false, size = 'md' }) {
  const iconSize = size === 'sm' ? 32 : size === 'lg' ? 48 : 38;
  return (
    <div className="inline-flex items-center gap-3 select-none group">
      <div
        className="relative flex items-center justify-center rounded-xl transition-transform duration-500 group-hover:rotate-6"
        style={{ width: iconSize, height: iconSize }}
      >
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect
            x="2"
            y="2"
            width="40"
            height="40"
            rx="12"
            fill={dark ? '#E5EAF5' : '#494D5F'}
          />
          {/* Sky Blue geometric prism facet */}
          <path
            d="M14 12V32M14 22L27 12M19.5 18L29 32"
            stroke="#A0D2EB"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Lavender & Purple creative orbit accent */}
          <circle cx="30.5" cy="13.5" r="3.5" fill="#D0BDF4" />
          <path
            d="M11 33.5C16.5 36.5 27.5 36.5 33 33.5"
            stroke="#8458B3"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span
          className={`font-display font-bold tracking-tight ${
            size === 'lg' ? 'text-2xl' : 'text-lg sm:text-xl'
          } ${dark ? 'text-[#E5EAF5]' : 'text-[#494D5F]'}`}
        >
          Kreovate
        </span>
        <span
          className={`font-mono-label text-[10px] uppercase tracking-[0.24em] mt-0.5 ${
            dark ? 'text-[#A0D2EB]' : 'text-[#8458B3]'
          }`}
        >
          Design Agency
        </span>
      </div>
    </div>
  );
}

/**
 * Cinematic Page-Loading Curtain with Animated SVG Logo
 */
export function Preloader({ onComplete }) {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      setVisible(false);
      onComplete?.();
      return;
    }

    let frame;
    const start = performance.now();
    const duration = 1250;

    const tick = (now) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (pct < 100) {
        frame = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setVisible(false);
          onComplete?.();
        }, 220);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="kreovate-preloader"
          initial={{ y: 0 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-between bg-[#494D5F] text-[#E5EAF5] px-6 py-10 overflow-hidden"
        >
          {/* Ambient radial gradient glow */}
          <div
            className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-35"
            style={{ background: 'radial-gradient(circle, #8458B3 0%, transparent 70%)' }}
          />
          <div
            className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-30"
            style={{ background: 'radial-gradient(circle, #A0D2EB 0%, transparent 70%)' }}
          />

          <div className="w-full max-w-6xl flex items-center justify-between text-xs font-mono-label tracking-[0.25em] uppercase text-[#D0BDF4]/80">
            <span>Kreovate Design Agency</span>
            <span>Est. Creative Collective</span>
          </div>

          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative"
            >
              <svg
                width="88"
                height="88"
                viewBox="0 0 88 88"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.rect
                  x="4"
                  y="4"
                  width="80"
                  height="80"
                  rx="24"
                  stroke="#D0BDF4"
                  strokeOpacity="0.35"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.9, ease: 'easeInOut' }}
                />
                <motion.path
                  d="M28 24V64M28 44L54 24M39 36L58 64"
                  stroke="#A0D2EB"
                  strokeWidth="5.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.95, ease: [0.65, 0, 0.35, 1] }}
                />
                <motion.circle
                  cx="61"
                  cy="27"
                  r="6"
                  fill="#8458B3"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.45, type: 'spring', stiffness: 260, damping: 18 }}
                />
              </svg>
            </motion.div>

            <div className="text-center">
              <p className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#E5EAF5]">
                Designing Ideas. Creating Impact.
              </p>
              <p className="font-mono-label text-xs tracking-[0.26em] uppercase text-[#A0D2EB] mt-2">
                Crafting Visual Identities &amp; Print Excellence
              </p>
            </div>
          </div>

          <div className="w-full max-w-md flex flex-col gap-2">
            <div className="flex items-center justify-between font-mono-label text-xs text-[#D0BDF4]">
              <span>LOADING AGENCY EXPERIENCE</span>
              <span>{String(progress).padStart(3, '0')}%</span>
            </div>
            <div className="h-[2px] w-full bg-[#E5EAF5]/15 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-100"
                style={{
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, #A0D2EB 0%, #D0BDF4 50%, #8458B3 100%)',
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/**
 * Custom Interactive Trailing Cursor (Desktop Pointer Devices Only)
 */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [cursorLabel, setCursorLabel] = useState('');
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const ringX = useSpring(mouseX, { stiffness: 260, damping: 26, mass: 0.5 });
  const ringY = useSpring(mouseY, { stiffness: 260, damping: 26, mass: 0.5 });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isFinePointer || prefersReduced) return;

    setEnabled(true);

    const handleMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleOver = (e) => {
      const target = e.target.closest('a, button, [data-cursor]');
      if (target) {
        setHovered(true);
        const label = target.getAttribute('data-cursor') || '';
        setCursorLabel(label);
      } else {
        setHovered(false);
        setCursorLabel('');
      }
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    window.addEventListener('mouseover', handleOver, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseover', handleOver);
    };
  }, [mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <>
      {/* Trailing outer halo ring */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[90] hidden lg:flex items-center justify-center rounded-full mix-blend-normal"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: cursorLabel ? 84 : hovered ? 52 : 34,
          height: cursorLabel ? 84 : hovered ? 52 : 34,
          backgroundColor: cursorLabel
            ? 'rgba(132, 88, 179, 0.92)'
            : hovered
            ? 'rgba(208, 189, 244, 0.25)'
            : 'rgba(160, 210, 235, 0.08)',
          borderColor: hovered ? '#8458B3' : 'rgba(73, 77, 95, 0.35)',
        }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
      >
        <div
          className="w-full h-full rounded-full border flex items-center justify-center"
          style={{ borderColor: 'inherit' }}
        >
          {cursorLabel && (
            <span className="font-mono-label text-[10px] font-semibold uppercase tracking-widest text-[#E5EAF5]">
              {cursorLabel}
            </span>
          )}
        </div>
      </motion.div>

      {/* Precision center dot */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[91] hidden lg:block w-2 h-2 rounded-full bg-[#8458B3]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: cursorLabel ? 0 : hovered ? 0.6 : 1,
        }}
      />
    </>
  );
}

/**
 * Magnetic CTA Button with Spring Attraction
 */
export function MagneticButton({
  children,
  onClick,
  href,
  className = '',
  strength = 0.28,
  type = 'button',
  target,
  rel,
  ariaLabel,
  cursorText,
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 250, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 250, damping: 18, mass: 0.4 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * strength);
    y.set((e.clientY - centerY) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      type={href ? undefined : type}
      onClick={onClick}
      aria-label={ariaLabel}
      data-cursor={cursorText}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.97 }}
      className={className}
    >
      {children}
    </Component>
  );
}

/**
 * Interactive 3D Tilt Card with Specular Highlight
 */
export function TiltCard({ children, className = '', accent = '#8458B3' }) {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [6, -6]), {
    stiffness: 220,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-6, 6]), {
    stiffness: 220,
    damping: 22,
  });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    mouseX.set(px);
    mouseY.set(py);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
        transformStyle: 'preserve-3d',
      }}
      className={`relative group ${className}`}
    >
      {/* Subtle dynamic accent border shimmer */}
      <div
        className="pointer-events-none absolute -inset-[1px] rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${accent}66, rgba(160, 210, 235, 0.35), transparent 70%)`,
        }}
      />
      {children}
    </motion.div>
  );
}

/**
 * Custom Geometric Animated SVG Icons for All 10 Kreovate Services
 */
export function ServiceGeometricIcon({ serviceId, accent = '#8458B3' }) {
  switch (serviceId) {
    case 'flex-banner':
      return (
        <svg viewBox="0 0 48 48" className="w-11 h-11" fill="none">
          <rect x="6" y="10" width="36" height="22" rx="4" stroke="#494D5F" strokeWidth="2.2" />
          <path d="M12 32V40M36 32V40" stroke="#494D5F" strokeWidth="2.2" strokeLinecap="round" />
          <path
            d="M12 25L19 18L25 23L31 16L36 21"
            stroke={accent}
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="15" cy="15" r="2" fill="#8458B3" />
        </svg>
      );
    case 'office-stationery':
      return (
        <svg viewBox="0 0 48 48" className="w-11 h-11" fill="none">
          <rect x="10" y="7" width="22" height="30" rx="3" stroke="#494D5F" strokeWidth="2.2" />
          <rect
            x="18"
            y="15"
            width="20"
            height="26"
            rx="3"
            fill="#E5EAF5"
            stroke={accent}
            strokeWidth="2.2"
          />
          <path d="M23 23H33M23 28H30" stroke="#494D5F" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'marketing-materials':
      return (
        <svg viewBox="0 0 48 48" className="w-11 h-11" fill="none">
          <path
            d="M8 12L19 9V37L8 40V12Z"
            stroke="#494D5F"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path
            d="M19 9L29 12V40L19 37V9Z"
            fill={accent}
            fillOpacity="0.25"
            stroke={accent}
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path
            d="M29 12L40 9V37L29 40V12Z"
            stroke="#494D5F"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'invitation-cards':
      return (
        <svg viewBox="0 0 48 48" className="w-11 h-11" fill="none">
          <rect x="8" y="14" width="32" height="24" rx="4" stroke="#494D5F" strokeWidth="2.2" />
          <path
            d="M9 16L24 27L39 16"
            stroke={accent}
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 8L25.8 11.6L29.8 12.2L26.9 15L27.6 19L24 17.1L20.4 19L21.1 15L18.2 12.2L22.2 11.6L24 8Z"
            fill="#8458B3"
          />
        </svg>
      );
    case 'packaging-solutions':
      return (
        <svg viewBox="0 0 48 48" className="w-11 h-11" fill="none">
          <path
            d="M24 6L40 15V33L24 42L8 33V15L24 6Z"
            stroke="#494D5F"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path
            d="M8 15L24 24L40 15M24 24V42"
            stroke={accent}
            strokeWidth="2.3"
            strokeLinejoin="round"
          />
          <path d="M16 10.5L32 19.5" stroke="#8458B3" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'logo-design':
      return (
        <svg viewBox="0 0 48 48" className="w-11 h-11" fill="none">
          <circle cx="24" cy="24" r="15" stroke="#494D5F" strokeWidth="2.2" />
          <path
            d="M24 9L34 29H14L24 9Z"
            stroke={accent}
            strokeWidth="2.3"
            strokeLinejoin="round"
          />
          <circle cx="24" cy="24" r="3.5" fill="#8458B3" />
        </svg>
      );
    case 'complete-branding':
      return (
        <svg viewBox="0 0 48 48" className="w-11 h-11" fill="none">
          <rect x="8" y="8" width="14" height="14" rx="3" fill={accent} fillOpacity="0.35" stroke="#494D5F" strokeWidth="2.2" />
          <rect x="26" y="8" width="14" height="14" rx="7" stroke="#8458B3" strokeWidth="2.2" />
          <rect x="8" y="26" width="14" height="14" rx="7" stroke="#494D5F" strokeWidth="2.2" />
          <rect x="26" y="26" width="14" height="14" rx="3" fill="#A0D2EB" fillOpacity="0.45" stroke="#494D5F" strokeWidth="2.2" />
        </svg>
      );
    case 'social-media':
      return (
        <svg viewBox="0 0 48 48" className="w-11 h-11" fill="none">
          <rect x="12" y="6" width="24" height="36" rx="5" stroke="#494D5F" strokeWidth="2.2" />
          <rect x="16" y="13" width="16" height="14" rx="2.5" fill={accent} fillOpacity="0.3" stroke={accent} strokeWidth="2" />
          <circle cx="24" cy="34" r="2.2" fill="#8458B3" />
        </svg>
      );
    case 'web-app-ui':
      return (
        <svg viewBox="0 0 48 48" className="w-11 h-11" fill="none">
          <rect x="6" y="9" width="36" height="26" rx="4" stroke="#494D5F" strokeWidth="2.2" />
          <path d="M6 16H42" stroke="#494D5F" strokeWidth="2" />
          <circle cx="11" cy="12.5" r="1.2" fill="#8458B3" />
          <circle cx="15" cy="12.5" r="1.2" fill="#A0D2EB" />
          <rect x="12" y="21" width="12" height="9" rx="2" fill={accent} fillOpacity="0.35" stroke={accent} strokeWidth="1.8" />
          <path d="M28 22H36M28 27H34M18 39H30" stroke="#494D5F" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 48 48" className="w-11 h-11" fill="none">
          <path
            d="M10 10H24V38H10C8.9 38 8 37.1 8 36V12C8 10.9 8.9 10 10 10Z"
            stroke="#494D5F"
            strokeWidth="2.2"
          />
          <path
            d="M24 10H38C39.1 10 40 10.9 40 12V36C40 37.1 39.1 38 38 38H24V10Z"
            fill={accent}
            fillOpacity="0.28"
            stroke={accent}
            strokeWidth="2.2"
          />
          <path d="M13 18H19M13 24H19M29 18H35M29 24H35" stroke="#494D5F" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
  }
}
