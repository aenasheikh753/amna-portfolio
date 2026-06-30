'use client';

import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import Spinner from '@/components/Spinner';
import { FaWhatsapp, FaEnvelope, FaLinkedinIn, FaGithub } from 'react-icons/fa';
// Local toast state used instead of 'sonner' library

export function Contact() {
  const [isPending, setIsPending] = useState(false);
  const [toast, setToast] = useState<{type: 'success' | 'error'; msg: string} | null>(null);
  const [values, setValues] = useState({ name: '', email: '', subject: '', projectType: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', subject: '', projectType: '', message: '' });
  // const [success, setSuccess] = useState(false); // removed unused success state

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPending(true);

    // Client-side validation
    const newErrors: any = {};
    if (!values.name || values.name.length < 3) newErrors.name = 'Name must be at least 3 characters';
    if (!values.email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email as string)) newErrors.email = 'Invalid email';
    if (!values.message || values.message.length < 20) newErrors.message = 'Message must be at least 20 characters';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setToast({ type: 'error', msg: 'Please correct the highlighted fields' });
      setIsPending(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const result: { success: boolean; message?: string; errors?: string[] } = await response.json();
      if (response.ok && result.success) {
        setToast({ type: 'success', msg: result.message ?? 'Message sent successfully!' });
        setValues({ name: '', email: '', subject: '', projectType: '', message: '' });
      } else {
        const msg = result.message ?? result.errors?.join(', ') ?? 'An unexpected error occurred.';
        setToast({ type: 'error', msg });
      }
    } catch (err) {
      console.error(err);
      setToast({ type: 'error', msg: 'Network error – please try again later.' });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold font-serif mb-6 text-[var(--color-primary)] leading-tight">
              Let&apos;s Create Something <br />
              Amazing Together! <span className="text-[var(--color-accent)]">🌸</span>
            </h2>
            <p className="text-[var(--color-text-light)] mb-12 text-lg">
              Feel free to reach out for inquiries, collaborations, or just to say hello.
            </p>
            <div className="flex space-x-4">
              <a href="https://wa.me/03365355358" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="WhatsApp" className="w-12 h-12 flex items-center justify-center bg-[var(--color-primary)]/10 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:bg-[var(--color-primary)] hover:text-white shadow-sm hover:shadow-[var(--color-primary)]/50">
                <FaWhatsapp className="text-[var(--color-primary)] hover:text-white transition-colors duration-300" size={20} />
              </a>
              <a href="mailto:amnaaena12@gmail.com" aria-label="Email" title="Email" className="w-12 h-12 flex items-center justify-center bg-[var(--color-primary)]/10 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:bg-[var(--color-primary)] hover:text-white shadow-sm hover:shadow-[var(--color-primary)]/50">
                <FaEnvelope className="text-[var(--color-primary)] hover:text-white transition-colors duration-300" size={20} />
              </a>
              <a href="https://www.linkedin.com/in/amna-sheikhh12/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn" className="w-12 h-12 flex items-center justify-center bg-[var(--color-primary)]/10 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:bg-[var(--color-primary)] hover:text-white shadow-sm hover:shadow-[var(--color-primary)]/50">
                <FaLinkedinIn className="text-[var(--color-primary)] hover:text-white transition-colors duration-300" size={20} />
              </a>
              <a href="https://github.com/aenasheikh753" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub" className="w-12 h-12 flex items-center justify-center bg-[var(--color-primary)]/10 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:bg-[var(--color-primary)] hover:text-white shadow-sm hover:shadow-[var(--color-primary)]/50">
                <FaGithub className="text-[var(--color-primary)] hover:text-white transition-colors duration-300" size={20} />
              </a>
            </div>
              <div className="mt-6">
                <a href="/Amna%20Yasin%20-%20Frontend%20web%20developer(Next.js).pdf" download className="inline-block bg-[var(--color-primary)] text-white py-2 px-6 rounded-full hover:bg-[var(--color-secondary)] transition-colors">
                  Download CV
                </a>
              </div>
          </div>
          <div className="bg-[var(--color-card)]/90 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-xl border border-[var(--color-primary)]/10 relative overflow-hidden group">
            <h3 className="text-2xl font-bold font-serif mb-6 text-[var(--color-primary)]">Send a Message</h3>
            {toast && (
              <div className={`mb-4 p-4 rounded-md text-white ${toast.type === 'success' ? 'bg-[var(--color-primary)]' : 'bg-red-600'}`}>
                {toast.msg}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-light)] mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 bg-white rounded-xl border focus:border-[var(--color-primary)]/50 focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all shadow-sm ${errors.name ? 'border-red-500' : 'border-[var(--color-primary)]/10'}`}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-light)] mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`w-full px-4 py-3 bg-white rounded-xl border focus:border-[var(--color-primary)]/50 focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all shadow-sm ${errors.email ? 'border-red-500' : 'border-[var(--color-primary)]/10'}`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>
              </div>
              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-light)] mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                  placeholder="Your request"
                  className={`w-full px-4 py-3 bg-white rounded-xl border focus:border-[var(--color-primary)]/50 focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all shadow-sm ${errors.subject ? 'border-red-500' : 'border-[var(--color-primary)]/10'}`}
                />
                {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
              </div>
              {/* Service Required */}
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-light)] mb-2">Service Required</label>
                <select
                  name="projectType"
                  className="w-full px-4 py-3 bg-white rounded-xl border border-[var(--color-primary)]/10 focus:border-[var(--color-primary)]/50 focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all shadow-sm text-[var(--color-text)] cursor-pointer"
                >
                  <option value="">Select a Service</option>
                  <option value="frontend">Frontend Development</option>
                  <option value="uiux">UI/UX Design</option>
                  <option value="wordpress">WordPress Development</option>
                  <option value="other">Other</option>
                </select>
              </div>
              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-light)] mb-2">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={values.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className={`w-full px-4 py-3 bg-white rounded-xl border focus:border-[var(--color-primary)]/50 focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-colors resize-none ${errors.message ? 'border-red-500' : 'border-[var(--color-primary)]/10'}`}
                />
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>
              {/* Submit button */}
              <Button type="submit" disabled={isPending} className="w-full py-4 text-lg">
                {isPending ? (
                  <>
                    <Spinner /> Sending...
                  </>
                ) : (
                  'Send Message 🚀'
                )}
              </Button>
            </form>
          </div>
        </div>
        {/* Illustration */}
        <div className="absolute -bottom-0 -right-0 z-0 hidden md:block">
          <Image src="/images/contact-img.png" alt="Contact Illustration" width={200} height={200} className="object-contain opacity-50 pointer-events-none" />
        </div>
        {/* Decorative Leaves */}
        <div className="absolute bottom-0 left-0 z-0 opacity-80 pointer-events-none w-48 h-48 md:w-64 md:h-64">
          <Image src="/images/leaves1.png" alt="Leaves Decoration" fill className="object-contain object-bottom-left" />
        </div>
      </div>
    </section>
  );
}
