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
    period: 'Jan–Jul 2020',
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
        className="mb-16"
      />

      <div className="container mx-auto px-4 -mt-14 mb-6 flex justify-end">
        <Button
          href="/resume.pdf"
          variant="primary"
          size="md"
          className="rounded-full px-6"
        >
          Download Resume
        </Button>
      </div>

      <motion.div ref={ref} className="container mx-auto px-4">
        <div className="relative max-w-6xl mx-auto">
          {/* Horizontal timeline */}
          <div className="overflow-x-auto no-scrollbar">
            <div className="relative min-w-full">
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-primary via-accent to-primary-light opacity-30" />

              <div className="relative flex items-center gap-10 md:gap-16 py-8">
                {experiences.map((exp, index) => (
                  <motion.button
                    key={exp.period}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => setSelected(index)}
                    className="group relative flex flex-col items-center focus:outline-none"
                  >
                    {/* Dot */}
                    <span className="relative mb-3">
                      <span className="absolute -inset-2 rounded-full bg-primary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="block w-3 h-3 rounded-full bg-gradient-to-br from-primary to-accent shadow shadow-primary/30 group-hover:scale-110 transition-transform" />
                    </span>
                    {/* Period */}
                    <span className="text-sm font-semibold text-primary">
                      {exp.period}
                    </span>
                    {/* Company/Title */}
                    <span className="mt-1 text-main-secondary group-hover:text-white transition-colors text-sm text-center whitespace-nowrap">
                      {exp.company} · {exp.title}
                    </span>
                  </motion.button>
                ))}
              </div>
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