'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { submitContactForm } from '@/actions/contact';

export function Contact() {
  const [isPending, setIsPending] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsPending(true);
    const result = await submitContactForm(formData);
    if (result.success) {
      setSuccess(true);
      // Reset form or show success message
    }
    setIsPending(false);
  }

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          <div>
            <h2 className="text-4xl md:text-6xl font-bold font-serif mb-6 text-[var(--color-primary)] leading-tight">
              Let's Create Something <br />
              Amazing Together! <span className="text-[var(--color-accent)]">🌸</span>
            </h2>
            <p className="text-[var(--color-text-light)] mb-12 text-lg">
              Feel free to reach out to me for any inquiries, collaborations, or just to say hello. I'm always open to discussing new projects and creative ideas.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center text-xl text-[var(--color-primary)]">
                  ✉️
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text-light)] font-medium">Email</p>
                  <a href="mailto:hello@amna.dev" className="text-lg font-semibold text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors">
                    hello@amna.dev
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center text-xl text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300">
                  📍
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text-light)] font-medium">Location</p>
                  <p className="text-lg font-semibold text-[var(--color-primary)]">
                    Islamabad, Pakistan
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 mt-12">
              <a href="#" className="w-12 h-12 border border-[var(--color-primary)]/20 rounded-full flex items-center justify-center text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 hover:scale-110 shadow-sm">
                in
              </a>
              <a href="#" className="w-12 h-12 border border-[var(--color-primary)]/20 rounded-full flex items-center justify-center text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 hover:scale-110 shadow-sm">
                GH
              </a>
            </div>
          </div>
          
          <div className="bg-[var(--color-card)]/90 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-xl border border-[var(--color-primary)]/10 relative overflow-hidden group">
            <h3 className="text-2xl font-bold font-serif mb-6 text-[var(--color-primary)]">Send a Message</h3>
            
            {success ? (
              <div className="bg-[var(--color-primary)]/10 text-[var(--color-primary)] p-6 rounded-xl border border-[var(--color-primary)]/20 text-center font-medium">
                Thank you for your message! I will get back to you soon. 🌿
              </div>
            ) : (
              <form action={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-light)] mb-2">Name</label>
                    <input type="text" name="name" required placeholder="John Doe" className="w-full px-4 py-3 bg-white rounded-xl border border-[var(--color-primary)]/10 focus:border-[var(--color-primary)]/50 focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all shadow-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-light)] mb-2">Email</label>
                    <input type="email" name="email" required placeholder="john@example.com" className="w-full px-4 py-3 bg-white rounded-xl border border-[var(--color-primary)]/10 focus:border-[var(--color-primary)]/50 focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all shadow-sm" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-light)] mb-2">Service Required</label>
                  <select name="projectType" required className="w-full px-4 py-3 bg-white rounded-xl border border-[var(--color-primary)]/10 focus:border-[var(--color-primary)]/50 focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all shadow-sm text-[var(--color-text)] cursor-pointer">
                    <option value="">Select a Service</option>
                    <option value="frontend">Frontend Development</option>
                    <option value="uiux">UI/UX Design</option>
                    <option value="wordpress">WordPress Development</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-light)] mb-2">Message</label>
                  <textarea name="message" required rows={4} placeholder="Tell me about your project..." className="w-full px-4 py-3 bg-white rounded-xl border border-[var(--color-primary)]/10 focus:border-[var(--color-primary)]/50 focus:ring-0 outline-none transition-colors resize-none"></textarea>
                </div>
                
                <Button type="submit" disabled={isPending} className="w-full py-4 text-lg">
                  {isPending ? 'Sending...' : 'Send Message 🚀'}
                </Button>
              </form>
            )}
            
            {/* Contact Illustration */}
            <div className="absolute -bottom-0 -right-0 z-0 hidden md:block">
              <Image 
                src="/images/contact-img.png" 
                alt="Contact Illustration" 
                width={200} 
                height={200} 
                className="object-contain opacity-50 pointer-events-none" 
              />
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Decorative Leaves Bottom Left */}
      <div className="absolute bottom-0 left-0 z-0 opacity-80 pointer-events-none w-48 h-48 md:w-64 md:h-64">
        <Image 
          src="/images/leaves1.png" 
          alt="Leaves Decoration" 
          fill 
          className="object-contain object-bottom-left" 
        />
      </div>
    </section>
  );
}
