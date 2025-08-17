'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';

export default function About() {
  const [imgSrc] = useState('https://lh3.googleusercontent.com/d/1lzEC6Kb8fU0rMbbIlEiXTEcTW6TsmaZq=w1600');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Section id="about" className="relative overflow-hidden bg-gradient-to-b from-[#0A0E23] via-[#0A0E23] to-dark py-24">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_20%_0%,rgba(var(--primary-rgb),0.08)_0%,transparent_65%)] opacity-70" />
      {/* Extra blend at top-right */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_70%_at_95%_0%,rgba(var(--primary-rgb),0.05)_0%,transparent_75%)] blur-2xl opacity-60" />
      <div className="pointer-events-none absolute top-0 right-0 w-full h-40 bg-gradient-to-bl from-[#0A0E23]/85 via-[#0A0E23]/40 to-transparent opacity-80" />
      {/* Seamless connection from hero */}
      <div className="pointer-events-none absolute -top-40 left-0 right-0 h-80 bg-gradient-to-t from-[#0A0E23] via-[#0A0E23]/85 to-transparent" />

      <div className="container mx-auto px-4 relative">
        <SectionTitle
          title="About Us"
          subtitle="Empowering businesses through data-driven insights"
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12"
        >
          {/* Left column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group max-w-lg mx-auto"
          >
            <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 p-1">
              <Image
                src={imgSrc}
                alt="Data Analytics Team"
                width={1200}
                height={900}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto object-cover rounded-3xl"
              />
            </div>
          </motion.div>

          {/* Right column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold mb-6">
              <span
                className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent inline-block"
              >
                Empowering Businesses Through Data
              </span>
            </h3>

            <div className="space-y-4 text-gray-300">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg"
              >
                At Elvision Technology Consulting, we partner with forward-thinking organizations to transform raw data into strategic assets. From data architecture and advanced analytics to bespoke BI dashboards, our end-to-end approach delivers actionable insights that drive revenue growth, operational efficiency, and sustained competitive advantage.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-lg"
              >
                Leveraging industry best practices and cutting-edge tools, our seasoned consultants work hand-in-hand with your team to uncover hidden opportunities and optimize decision-making. With a proven track record of measurable ROI on complex projects, we help you stay ahead in today&apos;s data-driven landscape.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
                className="grid grid-cols-2 gap-6 mt-8"
              >
                <div className="group bg-darker/80 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-primary/50 transition-all duration-300">
                  <div className="flex flex-col items-start">
                    <span className="text-4xl font-bold text-white mb-2">100+</span>
                    <span className="text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      Projects Completed
                    </span>
                  </div>
                </div>
                <div className="group bg-darker/80 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-primary/50 transition-all duration-300">
                  <div className="flex flex-col items-start">
                    <span className="text-4xl font-bold text-white mb-2">99%</span>
                    <span className="text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      Client Satisfaction
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
} 