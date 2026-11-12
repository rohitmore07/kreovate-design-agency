import React from 'react';
import { ArrowUp, ArrowUpRight, MessageCircle } from 'lucide-react';
import { KreovateLogo, MagneticButton } from './motion/MotionPrimitives';
import { SERVICES_DATA, STUDIO_CONFIG } from '../config/studioConfig';

export default function Footer({ onNavigate, onSelectService }) {
  const year = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/${STUDIO_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
    `Hello ${STUDIO_CONFIG.name}, I would like to connect regarding a creative project.`
  )}`;

  return (
    <footer className="relative bg-[#3B3F4F] text-[#E5EAF5] border-t border-[#E5EAF5]/10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-[#E5EAF5]/12">
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <KreovateLogo dark size="lg" />
              <p className="mt-5 font-display text-lg font-semibold text-[#D0BDF4] max-w-sm leading-snug">
                {STUDIO_CONFIG.tagline}
              </p>
              <p className="mt-3 text-sm text-[#E5EAF5]/70 max-w-sm leading-relaxed">
                Graphic design, visual branding, precision printing, packaging, and digital UI/UX
                crafted to elevate ambitious brands.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {STUDIO_CONFIG.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full bg-[#E5EAF5]/10 hover:bg-[#8458B3] px-3.5 py-1.5 text-xs font-medium text-[#E5EAF5] transition-colors"
                >
                  <span>{social.name}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-2">
            <h4 className="font-mono-label text-xs font-semibold uppercase tracking-[0.22em] text-[#A0D2EB] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-[#E5EAF5]/80">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Services', href: '#services' },
                { label: 'About', href: '#about' },
                { label: 'Portfolio', href: '#portfolio' },
                { label: 'Why Kreovate', href: '#why-choose-us' },
                { label: 'Our Process', href: '#process' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate?.(link.href);
                    }}
                    className="hover:text-[#D0BDF4] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-4">
            <h4 className="font-mono-label text-xs font-semibold uppercase tracking-[0.22em] text-[#A0D2EB] mb-4">
              Core Services
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs sm:text-sm text-[#E5EAF5]/80">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <button
                    type="button"
                    onClick={() => onSelectService?.(service.title)}
                    className="text-left hover:text-[#D0BDF4] transition-colors"
                  >
                    <span className="font-mono-label text-[11px] text-[#A0D2EB] mr-1.5">
                      {service.number}.
                    </span>
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <h4 className="font-mono-label text-xs font-semibold uppercase tracking-[0.22em] text-[#A0D2EB] mb-4">
                Connect
              </h4>
              <div className="space-y-2.5 text-sm text-[#E5EAF5]/80">
                <p>{STUDIO_CONFIG.contact.email}</p>
                <p>{STUDIO_CONFIG.contact.phonedisplay}</p>
                <p className="text-xs text-[#E5EAF5]/65 leading-relaxed">
                  {STUDIO_CONFIG.contact.location}
                </p>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#A0D2EB] text-[#494D5F] px-4 py-2 text-xs font-bold hover:bg-[#B8E0F4] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Whatsapp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Magnetic Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E5EAF5]/65">
          <p>
            © {year} {STUDIO_CONFIG.name}. All rights reserved. Designed with creative precision.
          </p>

          <MagneticButton
            onClick={() => onNavigate?.('#home')}
            cursorText="Top"
            className="inline-flex items-center gap-2 rounded-full bg-[#E5EAF5]/10 hover:bg-[#8458B3] text-[#E5EAF5] px-4 py-2 font-mono-label text-xs uppercase tracking-widest transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </MagneticButton>
        </div>
      </div>
    </footer>
  );
}
