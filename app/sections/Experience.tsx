'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

const experiences = [
  {
    period: '2024–Present',
    title: 'Lead BI Developer',
    company: 'Colliers International',
    description: 'Leading strategic BI initiatives integrating marketing, finance, and operations data with AI/ML and automation to deliver actionable insights, streamline reporting, mentor teams, and drive innovation.',
  },
  {
    period: '2023–2024',
    title: 'Data Manager & Consultant',
    company: 'Makeship',
    description: 'Architected scalable self-serve analytics pipelines using GCP, BigQuery, Looker Studio, and Python; led A/B testing and embedded data-driven decision-making to improve operations and reduce manual reporting.',
  },
  {
    period: '2021–2023',
    title: 'Data Analyst Practice Specialist',
    company: 'Best Buy Canada',
    description: 'Led analytics community of 13; developed ML-driven NPS dashboards in Microsoft Fabrics, automating daily updates and pioneering Synapse data models to enhance customer insights and reporting efficiency.',
  },
  {
    period: '2020–2021',
    title: 'Senior Data Analyst',
    company: 'Save On Foods & Pattison Food Group',
    description: 'Engineered integrated reporting pipelines in Python and Power BI; developed cross-departmental dashboards identifying $50M revenue opportunities and streamlining COVID-19 reporting processes.',
  },
  {
    period: '2020',
    title: 'Data Analyst',
    company: 'Rocky Mountaineer',
    description: 'Provided data analysis to support multi-department operations, delivering insights that enhanced business decisions and improved operational efficiencies.',
  },
  {
    period: '2019–2020',
    title: 'Cards Advisor',
    company: 'RBC Royal Bank',
    description: 'Increased client retention through exceptional service and relationship management, gaining frontline experience and fostering a customer-first mindset.',
  },
];

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <Section id="experience" background="darker">
      <SectionTitle
        title="Professional Experience"
        subtitle="A track record of delivering impactful data solutions across industries"
        className="mb-10"
        actions={
          <Button href="/resume.pdf" variant="primary" size="sm" className="rounded-full px-4">
            Download Resume
          </Button>
        }
      />

      

      <motion.div ref={ref} className="container mx-auto px-4">
        <div className="relative max-w-6xl mx-auto">
          {/* Desktop: evenly spaced horizontal timeline */}
          <div className="relative hidden md:block pt-16 pb-20">
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1.5 rounded-full bg-gradient-to-r from-primary via-accent to-primary-light shadow-[0_0_20px_rgba(41,0,189,0.25)] z-0" />

            <div className="relative flex items-center justify-between gap-10 z-10">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.period}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex-1 flex justify-center"
                >
                  {/* Alternating cards */}
                  {index % 2 === 0 ? (
                    <>
                      <button
                        onClick={() => setSelected(index)}
                        className="group absolute -top-28 w-64 text-center focus:outline-none"
                      >
                        <div className="bg-darker/80 border border-gray-800 rounded-xl p-3 shadow-sm hover:shadow-primary/10 hover:border-primary/50 transition-all">
                          <div className="text-xs font-semibold text-primary">{exp.period}</div>
                          <div className="text-sm text-white mt-1">{exp.company}</div>
                        </div>
                      </button>
                      <span className="absolute -top-8 h-8 w-0.5 bg-primary/70" />
                    </>
                  ) : (
                    <>
                      <span className="absolute -bottom-8 h-8 w-0.5 bg-primary/70" />
                      <button
                        onClick={() => setSelected(index)}
                        className="group absolute -bottom-28 w-64 text-center focus:outline-none"
                      >
                        <div className="bg-darker/80 border border-gray-800 rounded-xl p-3 shadow-sm hover:shadow-primary/10 hover:border-primary/50 transition-all">
                          <div className="text-xs font-semibold text-primary">{exp.period}</div>
                          <div className="text-sm text-white mt-1">{exp.company}</div>
                        </div>
                      </button>
                    </>
                  )}

                  {/* Center dot */}
                  <span className="relative z-10 block w-3.5 h-3.5 rounded-full bg-gradient-to-br from-primary to-accent shadow shadow-primary/40 ring-2 ring-darker" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile: stacked vertical timeline */}
          <div className="md:hidden relative py-2 pl-6">
            <div className="absolute left-3 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-primary via-accent to-primary-light opacity-40" />
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.button
                  key={exp.period}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setSelected(index)}
                  className="group relative flex flex-col items-start focus:outline-none"
                >
                  <span className="absolute left-0 top-2 block w-3 h-3 rounded-full bg-gradient-to-br from-primary to-accent shadow shadow-primary/30" />
                  <span className="text-sm font-semibold text-primary">
                    {exp.period}
                  </span>
                  <span className="mt-1 text-main-secondary group-hover:text-white transition-colors text-sm">
                    {exp.company}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="w-full max-w-2xl bg-darker/95 border border-gray-800 rounded-2xl p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {experiences[selected].title}
                  </h3>
                  <p className="text-primary-light">
                    {experiences[selected].company} • {experiences[selected].period}
                  </p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="text-main-secondary hover:text-white"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>
              <p className="mt-4 text-gray-300">
                {experiences[selected].description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}