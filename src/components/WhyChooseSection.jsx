import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, Zap, Palette, Award, Sliders } from 'lucide-react';
import { WHY_CHOOSE_US } from '../config/studioConfig';

const ICONS = [Award, Palette, Sparkles, Zap, Sliders, ShieldCheck];

export default function WhyChooseSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeQuality = WHY_CHOOSE_US[activeIndex];
  const ActiveIcon = ICONS[activeIndex];

  return (
    <section
      id="why-choose-us"
      className="relative py-24 sm:py-32 bg-gradient-to-br from-[#D0BDF4]/35 via-[#E5EAF5] to-[#A0D2EB]/30 overflow-hidden"
    >
      {/* Decorative soft radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-[-8%] w-[440px] h-[440px] rounded-full blur-3xl opacity-50"
        style={{ background: 'radial-gradient(circle, #D0BDF4 0%, transparent 70%)' }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Sticky Editorial Anchor & Dynamic Geometric Spotlight */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 font-mono-label text-xs font-semibold uppercase tracking-[0.22em] text-[#8458B3] mb-4">
                <span className="w-6 h-[2px] bg-[#8458B3]" />
                <span>The Kreovate Difference</span>
              </div>

              <h2 className="font-display font-extrabold text-3xl sm:text-5xl leading-[1.06] tracking-tight text-[#494D5F]">
                Why Businesses Choose Kreovate.
              </h2>

              <p className="mt-5 text-base text-[#494D5F]/80 leading-relaxed">
                Every brand touchpoint deserves studio-level attention. We unite creative direction
                with dependable production so your business stands apart with confidence.
              </p>

              {/* Dynamic Interactive Spotlight Card */}
              <motion.div
                key={activeQuality.number}
                initial={{ opacity: 0.65, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
                className="mt-8 rounded-[2rem] bg-[#494D5F] text-[#E5EAF5] p-7 sm:p-8 shadow-[0_28px_60px_-20px_rgba(73,77,95,0.35)] border border-[#E5EAF5]/12 relative overflow-hidden"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-12 -bottom-12 w-48 h-48 rounded-full blur-2xl opacity-45"
                  style={{ background: activeQuality.accent }}
                />

                <div className="relative z-10 flex items-center justify-between">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-[#494D5F]"
                    style={{ backgroundColor: activeQuality.accent }}
                  >
                    <ActiveIcon className="w-6 h-6" />
                  </div>
                  <span className="font-display text-4xl font-extrabold text-[#E5EAF5]/20">
                    {activeQuality.number}
                  </span>
                </div>

                <h3 className="relative z-10 mt-6 font-display text-2xl font-bold text-[#E5EAF5]">
                  {activeQuality.title}
                </h3>
                <p className="relative z-10 mt-2.5 text-sm leading-relaxed text-[#E5EAF5]/80">
                  {activeQuality.description}
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Oversized Interactive Typographic Index */}
          <div className="lg:col-span-7 divide-y divide-[#494D5F]/14 border-y border-[#494D5F]/14">
            {WHY_CHOOSE_US.map((item, idx) => {
              const isSelected = idx === activeIndex;
              const ItemIcon = ICONS[idx];
              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => setActiveIndex(idx)}
                  className={`group cursor-pointer py-6 sm:py-7 px-4 sm:px-6 transition-all duration-300 rounded-2xl ${
                    isSelected ? 'bg-white/75 shadow-sm' : 'hover:bg-white/40'
                  }`}
                >
                  <div className="flex items-start sm:items-center justify-between gap-4">
                    <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                      <span
                        className={`font-mono-label text-sm font-bold px-3 py-1 rounded-full transition-colors ${
                          isSelected
                            ? 'bg-[#8458B3] text-[#E5EAF5]'
                            : 'bg-[#494D5F]/10 text-[#494D5F]'
                        }`}
                      >
                        {item.number}
                      </span>

                      <div>
                        <h3
                          className={`font-display text-xl sm:text-2xl font-bold transition-colors ${
                            isSelected
                              ? 'text-[#8458B3]'
                              : 'text-[#494D5F] group-hover:text-[#8458B3]'
                          }`}
                        >
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-sm text-[#494D5F]/75 leading-relaxed max-w-xl">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isSelected
                          ? 'bg-[#494D5F] text-[#A0D2EB] scale-110'
                          : 'bg-[#E5EAF5] text-[#494D5F]/60 group-hover:text-[#494D5F]'
                      }`}
                    >
                      <ItemIcon className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
