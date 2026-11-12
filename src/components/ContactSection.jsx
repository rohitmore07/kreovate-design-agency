import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import { SERVICES_DATA, STUDIO_CONFIG } from '../config/studioConfig';
import { MagneticButton } from './motion/MotionPrimitives';

export default function ContactSection({ preselectedService = '', prefilledNote = '' }) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: SERVICES_DATA[0].title,
    description: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      const matched = SERVICES_DATA.find(
        (s) => s.title.toLowerCase() === preselectedService.toLowerCase()
      );
      setFormState((prev) => ({
        ...prev,
        service: matched ? matched.title : preselectedService,
      }));
    }
  }, [preselectedService]);

  useEffect(() => {
    if (prefilledNote) {
      setFormState((prev) => ({
        ...prev,
        description: `Interested in a project inspired by: ${prefilledNote}. `,
      }));
    }
  }, [prefilledNote]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Build dynamic WhatsApp URL using configurable number
  const whatsappMessage = encodeURIComponent(
    `Hello ${STUDIO_CONFIG.name}! ${
      formState.name ? `My name is ${formState.name}. ` : ''
    }I would like to inquire about "${formState.service}". ${
      formState.description ? `Project details: ${formState.description}` : ''
    }`
  );
  const whatsappUrl = `https://wa.me/${STUDIO_CONFIG.contact.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 bg-[#494D5F] text-[#E5EAF5] bg-architectural-grid-dark overflow-hidden"
    >
      {/* Ambient Lavender & Sky Blue Studio Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-6%] w-[500px] h-[500px] rounded-full blur-3xl opacity-25"
        style={{ background: 'radial-gradient(circle, #8458B3 0%, transparent 70%)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-[-6%] w-[460px] h-[460px] rounded-full blur-3xl opacity-22"
        style={{ background: 'radial-gradient(circle, #A0D2EB 0%, transparent 70%)' }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Studio Contact & Direct WhatsApp Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 font-mono-label text-xs font-semibold uppercase tracking-[0.22em] text-[#A0D2EB] mb-4">
                <span className="w-6 h-[2px] bg-[#A0D2EB]" />
                <span>Start a Conversation</span>
              </div>

              <h2 className="font-display font-extrabold text-3xl sm:text-5xl leading-[1.06] tracking-tight text-[#E5EAF5]">
                Have an Idea?{' '}
                <span className="block text-brand-gradient-light mt-1">
                  Let&apos;s Make It Happen.
                </span>
              </h2>

              <p className="mt-5 text-base sm:text-lg text-[#E5EAF5]/80 leading-relaxed">
                Whether you need a fresh brand identity, creative designs, or professional
                printing, let&apos;s create something meaningful together.
              </p>

              {/* Direct WhatsApp Quick Launch Card */}
              <div className="mt-8 rounded-[1.85rem] bg-gradient-to-br from-[#8458B3]/35 via-[#E5EAF5]/[0.06] to-[#A0D2EB]/15 border border-[#D0BDF4]/25 p-6 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#A0D2EB] text-[#494D5F] flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-display text-base font-bold text-[#E5EAF5]">
                      Instant Studio WhatsApp
                    </p>
                    <p className="font-mono-label text-xs text-[#D0BDF4]">
                      Quick quotes, print specs &amp; direct consultation
                    </p>
                  </div>
                </div>

                <MagneticButton
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  cursorText="Chat"
                  className="mt-5 w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-[#A0D2EB] hover:bg-[#B4DCF0] text-[#494D5F] px-6 py-3.5 text-sm font-bold shadow-lg transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp ({STUDIO_CONFIG.contact.phonedisplay})</span>
                  <ArrowUpRight className="w-4 h-4" />
                </MagneticButton>
              </div>

              {/* Configurable Contact Metadata */}
              <div className="mt-8 space-y-4 text-sm text-[#E5EAF5]/85">
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#E5EAF5]/10 flex items-center justify-center text-[#D0BDF4]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-mono-label text-[10px] uppercase tracking-widest text-[#A0D2EB]">
                      Our Email
                    </p>
                    <a
                      href={`mailto:${STUDIO_CONFIG.contact.email}`}
                      className="font-medium hover:text-[#D0BDF4] transition-colors"
                    >
                      {STUDIO_CONFIG.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#E5EAF5]/10 flex items-center justify-center text-[#D0BDF4]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-mono-label text-[10px] uppercase tracking-widest text-[#A0D2EB]">
                      Direct Line
                    </p>
                    <p className="font-medium">{STUDIO_CONFIG.contact.phonedisplay}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#E5EAF5]/10 flex items-center justify-center text-[#D0BDF4]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-mono-label text-[10px] uppercase tracking-widest text-[#A0D2EB]">
                      Location
                    </p>
                    <p className="font-medium">{STUDIO_CONFIG.contact.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#E5EAF5]/10 flex items-center justify-center text-[#D0BDF4]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-mono-label text-[10px] uppercase tracking-widest text-[#A0D2EB]">
                      Hours
                    </p>
                    <p className="font-medium">{STUDIO_CONFIG.contact.workingHours}</p>
                  </div>
                </div>
              </div>

              {/* Configurable Social Channels */}
              <div className="mt-8 pt-6 border-t border-[#E5EAF5]/12">
                <p className="font-mono-label text-[11px] uppercase tracking-[0.22em] text-[#D0BDF4] mb-3">
                  Follow Our Creative Feed
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {STUDIO_CONFIG.socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#E5EAF5]/10 hover:bg-[#8458B3] text-[#E5EAF5] px-4 py-2 text-xs font-semibold transition-colors"
                    >
                      <span>{social.name}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Interactive Project Inquiry Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75 }}
              className="rounded-[2.25rem] bg-[#E5EAF5] text-[#494D5F] p-6 sm:p-10 lg:p-12 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.4)] border border-white/60"
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="inquiry-confirmed"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center flex flex-col items-center"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-[#8458B3] text-[#E5EAF5] flex items-center justify-center shadow-lg mb-6">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <span className="font-mono-label text-xs uppercase tracking-[0.22em] text-[#8458B3] font-bold">
                      Project Brief Received
                    </span>
                    <h3 className="mt-2 font-display text-3xl font-extrabold text-[#494D5F]">
                      Thank You, {formState.name || 'Creator'}!
                    </h3>
                    <p className="mt-3 max-w-md text-sm sm:text-base text-[#494D5F]/80 leading-relaxed">
                      We&apos;ve received your inquiry for{' '}
                      <span className="font-semibold text-[#8458B3]">{formState.service}</span>.
                      Our creative team will review your brief and connect with you shortly.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[#494D5F] hover:bg-[#8458B3] text-[#E5EAF5] px-6 py-3.5 text-sm font-semibold transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Send Copy via WhatsApp</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setFormState((prev) => ({
                            ...prev,
                            name: '',
                            email: '',
                            phone: '',
                            description: '',
                          }));
                        }}
                        className="inline-flex items-center gap-2 rounded-full border border-[#494D5F]/20 px-6 py-3.5 text-sm font-semibold text-[#494D5F] hover:bg-white/60 transition-colors"
                      >
                        <span>Submit Another Inquiry</span>
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="inquiry-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="flex items-center justify-between border-b border-[#494D5F]/12 pb-5">
                      <div>
                        <p className="font-mono-label text-xs uppercase tracking-[0.2em] text-[#8458B3] font-semibold">
                          Project Brief Form
                        </p>
                        <h3 className="font-display text-2xl font-bold text-[#494D5F] mt-1">
                          Tell Us About Your Vision
                        </h3>
                      </div>
                      <Sparkles className="w-6 h-6 text-[#8458B3]" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="client-name"
                          className="block font-mono-label text-xs font-semibold uppercase tracking-wider text-[#494D5F]/80 mb-2"
                        >
                          Name *
                        </label>
                        <input
                          id="client-name"
                          name="name"
                          type="text"
                          required
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="Your full name or brand"
                          className="w-full rounded-2xl bg-white/85 border border-[#494D5F]/15 px-4 py-3.5 text-sm text-[#494D5F] placeholder:text-[#494D5F]/40 focus:outline-none focus:border-[#8458B3] focus:ring-2 focus:ring-[#8458B3]/20 transition-all"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="client-email"
                          className="block font-mono-label text-xs font-semibold uppercase tracking-wider text-[#494D5F]/80 mb-2"
                        >
                          Email *
                        </label>
                        <input
                          id="client-email"
                          name="email"
                          type="email"
                          required
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          className="w-full rounded-2xl bg-white/85 border border-[#494D5F]/15 px-4 py-3.5 text-sm text-[#494D5F] placeholder:text-[#494D5F]/40 focus:outline-none focus:border-[#8458B3] focus:ring-2 focus:ring-[#8458B3]/20 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="client-phone"
                          className="block font-mono-label text-xs font-semibold uppercase tracking-wider text-[#494D5F]/80 mb-2"
                        >
                          Phone Number *
                        </label>
                        <input
                          id="client-phone"
                          name="phone"
                          type="tel"
                          required
                          value={formState.phone}
                          onChange={handleChange}
                          placeholder="+91 00000 00000"
                          className="w-full rounded-2xl bg-white/85 border border-[#494D5F]/15 px-4 py-3.5 text-sm text-[#494D5F] placeholder:text-[#494D5F]/40 focus:outline-none focus:border-[#8458B3] focus:ring-2 focus:ring-[#8458B3]/20 transition-all"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="client-service"
                          className="block font-mono-label text-xs font-semibold uppercase tracking-wider text-[#494D5F]/80 mb-2"
                        >
                          Service Required *
                        </label>
                        <select
                          id="client-service"
                          name="service"
                          value={formState.service}
                          onChange={handleChange}
                          className="w-full rounded-2xl bg-white/85 border border-[#494D5F]/15 px-4 py-3.5 text-sm text-[#494D5F] focus:outline-none focus:border-[#8458B3] focus:ring-2 focus:ring-[#8458B3]/20 transition-all"
                        >
                          {SERVICES_DATA.map((service) => (
                            <option key={service.id} value={service.title}>
                              {service.number}. {service.title}
                            </option>
                          ))}
                          <option value="Custom Multi-Service Package">
                            Custom Multi-Service Package
                          </option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="client-description"
                        className="block font-mono-label text-xs font-semibold uppercase tracking-wider text-[#494D5F]/80 mb-2"
                      >
                        Project Description *
                      </label>
                      <textarea
                        id="client-description"
                        name="description"
                        rows={4}
                        required
                        value={formState.description}
                        onChange={handleChange}
                        placeholder="Share your goals, print sizes/quantities, branding ideas, or target timeline..."
                        className="w-full rounded-2xl bg-white/85 border border-[#494D5F]/15 px-4 py-3.5 text-sm text-[#494D5F] placeholder:text-[#494D5F]/40 focus:outline-none focus:border-[#8458B3] focus:ring-2 focus:ring-[#8458B3]/20 transition-all resize-none"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <MagneticButton
                        type="submit"
                        cursorText="Send"
                        className="inline-flex items-center justify-center gap-3 rounded-full bg-[#8458B3] hover:bg-[#7145A1] text-[#E5EAF5] px-8 py-4 text-sm sm:text-base font-bold shadow-[0_18px_36px_-12px_rgba(132,88,179,0.65)] transition-colors"
                      >
                        <span>Send Project Inquiry</span>
                        <Send className="w-4 h-4" />
                      </MagneticButton>

                      <span className="font-mono-label text-[11px] text-[#494D5F]/60">
                        Typical studio response within 24 hours
                      </span>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
