'use client';

import { motion } from 'framer-motion';
import Section from '../components/Section';
import Button from '../components/Button';

export default function Hero() {
  return (
    <Section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E23] via-[#0A0E23] to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-primary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_20%_100%,rgba(var(--primary-rgb),0.08)_0%,transparent_65%)] opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_70%_at_95%_100%,rgba(var(--primary-rgb),0.05)_0%,transparent_75%)] blur-2xl opacity-60" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-b from-transparent via-[#0A0E23]/70 to-[#0A0E23]" />
      

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center relative z-10"
      >
        {/* Headline with subtle spotlight behind */}
        <div className="relative inline-block mx-auto">
          <div
            className="pointer-events-none absolute -inset-8 md:-inset-10 rounded-[2rem] bg-[radial-gradient(ellipse_at_center,rgba(166,177,255,0.28)_0%,rgba(41,0,189,0.18)_45%,transparent_72%)] blur-3xl opacity-80"
            aria-hidden="true"
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative text-3xl md:text-5xl font-bold mb-6 leading-tight"
          >
            <span className="animated-gradient">Elevate Insights</span>
            <br />
            <span className="animated-gradient">Envision Your Future</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-main-secondary max-w-3xl mx-auto mb-12"
        >
          Transforming complex data into actionable insights for better business decisions
        </motion.p>

        {/* Buttons with pulsing ring behind primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
        >
          <div className="relative inline-block">
            {/* pulsing glow */}
            <span className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary to-accent opacity-75 blur-xl animate-ping"></span>
            <Button
              href="#contact"
              variant="primary"
              size="md"
              className="
                relative inline-flex items-center
                bg-gradient-to-r bg-accent to-[#3a32a8]/50 hover:bg-[#09044f]
                text-accent font-bold
                rounded-full
                border-1 border-accent
                shadow-md
                transition-all duration-300 ease-in-out transform hover:scale-105
                hover:bg-accent hover:text-white
                focus:outline-none focus:ring-4 focus:ring-accent/50
              "
            >
              Work With Us
            </Button>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative blobs (behind text) */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, delay: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-3xl"
      />
    </Section>
  );
}
