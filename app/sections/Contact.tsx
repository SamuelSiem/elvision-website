'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { EnvelopeIcon, PhoneIcon, LinkIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || 'Failed to send message');
      }
      
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const inputClasses = "w-full px-4 py-3 rounded-lg bg-darker border border-gray-700 text-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-colors placeholder:text-main-secondary/50";

  return (
    <Section id="contact" className="relative overflow-hidden bg-gradient-to-b from-darker via-darker to-[#0A0E23] py-20">
      {/* Background effects for continuous gradient flow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/4 via-transparent to-accent/4 opacity-45" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_20%_0%,rgba(var(--primary-rgb),0.02)_0%,transparent_65%)] opacity-30" />
      {/* Seamless connection from testimonials */}
      <div className="pointer-events-none absolute -top-40 left-0 right-0 h-80 bg-gradient-to-t from-darker via-darker/85 to-transparent" />
      <SectionTitle
        title="Get in Touch"
        subtitle="Let's discuss how we can help transform your data into actionable insights"
        className="mb-16"
      />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {/* Left: Contact Card + Quick Actions */}
        <motion.div
          variants={itemVariants}
          className="relative z-10 bg-darker/80 backdrop-blur-sm border border-gray-800 rounded-xl p-6 lg:p-8"
        >
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white">Samuel Simogiarto</h3>
            <p className="text-main-secondary">Data Strategy Consultant</p>
          </div>

          <div className="space-y-4 mb-8">
            <a href="mailto:elvision.technology@gmail.com" className="flex items-center gap-3 text-main/90 hover:text-accent transition-colors">
              <EnvelopeIcon className="w-5 h-5 text-accent" />
              <span>elvision.technology@gmail.com</span>
            </a>
            <a href="https://wa.me/6285285495272" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-main/90 hover:text-accent transition-colors">
              <PhoneIcon className="w-5 h-5 text-accent" />
              <span>+62 852 8549 5272</span>
            </a>
            <a href="https://wa.me/17786810270" className="flex items-center gap-3 text-main/90 hover:text-accent transition-colors">
              <PhoneIcon className="w-5 h-5 text-accent" />
              <span>+1 778 681 0270</span>
            </a>
            <a href="https://linkedin.com/in/samuelsimogiarto" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-main/90 hover:text-accent transition-colors">
              <LinkIcon className="w-5 h-5 text-accent" />
              <span>linkedin.com/in/samuelsimogiarto</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              href="mailto:elvision.technology@gmail.com"
              variant="secondary"
              size="md"
              className="flex-1 bg-accent hover:bg-accent-light text-black border-0"
            >
              <EnvelopeIcon className="w-5 h-5 mr-2" />
              Send Email
            </Button>
            <Button
              href="https://wa.me/7786810270?text=Hi%20Samuel%2C%20I%27d%20like%20to%20chat%20about%20data%20strategy."
              variant="secondary"
              size="md"
              className="flex-1 bg-[#25D366] hover:bg-[#1ebe5d] text-black border-0"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="w-5 h-5 mr-2 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.672.15-.198.297-.768.966-.941 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.654-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.521-.074-.149-.672-1.611-.92-2.207-.242-.579-.487-.501-.672-.509l-.572-.01c-.198 0-.521.074-.793.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.003C7.73 21.781 4.273 20.54 1.5 17.766.2 16.467 0 14.117 0 12.003 0 5.516 5.514 0 12 0c3.197 0 6.187 1.245 8.444 3.503C22.7 5.761 24 8.75 24 11.947c0 6.486-5.514 11.999-12 11.999z"/></svg>
              WhatsApp Chat
            </Button>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div variants={itemVariants} className="relative z-10 bg-darker/60 border border-gray-800 rounded-xl p-6 lg:p-8">
          <h3 className="text-xl font-semibold text-white mb-4">Or you can fill in the form here:</h3>
          <form onSubmit={handleSubmit} className="space-y-8">
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-main mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-main mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="your@email.com"
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="subject" className="block text-main mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className={inputClasses}
                placeholder="What's this about?"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="message" className="block text-main mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className={`${inputClasses} resize-none`}
                placeholder="Your message here..."
              />
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-center">
              <button
                type="submit"
                disabled={status === 'loading'}
                className={`px-10 py-4 rounded-full font-bold transition-all transform hover:scale-105
                  ${status === 'loading' ? 'bg-gray-600 cursor-not-allowed' : 'bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-[#3C3CFF]'}
                  text-white shadow-xl shadow-primary/30 ring-2 ring-primary/30`}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </motion.div>
          </form>

          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-accent/5 border border-accent/20 rounded-lg text-accent text-center"
            >
              Thank you for your message! We&apos;ll get back to you soon.
            </motion.div>
          )}

          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-red-500/5 border border-red-500/20 rounded-lg text-red-500 text-center"
            >
              <p className="font-medium mb-2">Oops! Something went wrong.</p>
              <p className="text-sm text-red-400">
                The contact form is currently not configured. Please use the email or WhatsApp options above, or contact us directly at{' '}
                <a href="mailto:elvision.technology@gmail.com" className="underline hover:text-red-300">
                  elvision.technology@gmail.com
                </a>
              </p>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </Section>
  );
} 