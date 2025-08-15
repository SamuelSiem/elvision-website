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
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.1)_0%,transparent_50%)]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center relative z-10"
      >
        {/* Animated gradient headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
        >
          <span className="animated-gradient">
            Elevate Insights
          </span>
          <br />
          <span className="animated-gradient">
            Envision Your Future
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-main-secondary max-w-3xl mx-auto mb-12"
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
              size="lg"
              className="
                relative inline-flex items-center
                px-8 py-4
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
              Get Started
            </Button>
          </div>

          <Button
            href="#services"
            variant="secondary"
            size="lg"
            className="
              relative inline-flex items-center
              px-8 py-4
              bg-gray-800/80 hover:bg-gray-700
              text-white font-semibold
              rounded-full
              shadow-lg
              transform transition duration-300 hover:scale-105
            "
          >
            Learn More
          </Button>
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
