'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useRef } from 'react';
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
    company: 'Pattison Food Group',
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
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  return (
    <Section id="experience" className="relative overflow-hidden bg-gradient-to-b from-[#0A0E23] via-darker to-darker py-20">
      {/* Background effects for continuous gradient flow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/6 via-transparent to-accent/6 opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_20%_0%,rgba(var(--primary-rgb),0.04)_0%,transparent_65%)] opacity-10" />
      {/* Seamless connection from services */}
      <div className="pointer-events-none absolute -top-40 left-0 right-0 h-80 bg-gradient-to-t from-darker via-darker/85 to-transparent" />
      <SectionTitle
        title="Professional Experience"
        subtitle="A track record of delivering impactful data solutions across industries"
        className="mb-10"
        actions={
          <Button
            href="https://drive.google.com/uc?export=download&id=1OmUisCWPT7VM9YbYxakHDcWII0pKKGmd"
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
            Download Resume
          </Button>

        }
      />

      

      <motion.div ref={ref} className="container mx-auto px-4">
        <div className="relative max-w-6xl mx-auto">
          {/* Desktop: evenly spaced horizontal timeline */}
          {/* Desktop: horizontally scrollable timeline */}
          <div className="relative hidden md:block pt-16 pb-20">
            {/* fade edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-darker to-transparent z-0 opacity-60" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-darker to-transparent z-0 opacity-60" />

            {/* SCROLLER */}
            <div
              ref={scrollerRef}
              className="relative z-10 flex items-center overflow-x-auto no-scrollbar snap-x snap-mandatory px-6 gap-2 h-[260px]"
            >
            <div className="shrink-0 w-12 md:w-16" />
              {experiences.map((exp, index) => (
                <div key={exp.period} className="relative flex items-center snap-center shrink-0">
                  {/* DOT + vertical connector in wrapper */}
                  <div className="relative flex items-center justify-center w-5 h-5">
                    <span className="block w-5 h-5 rounded-full bg-[#312e81] border-2 border-[#141234] shadow-md" />

                    {/* vertical line */}
                    {index % 2 === 0 ? (
                      <span className="absolute -top-7 left-1/2 -translate-x-1/2 h-7 w-[2px] bg-[#2a275a]" />
                    ) : (
                      <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 h-7 w-[2px] bg-[#2a275a]" />
                    )}

                    {/* CARD (anchored to the dot wrapper, so it centers correctly) */}
                    {index % 2 === 0 ? (
                      <button
                        onClick={() => setSelected(index)}
                        className="group absolute -top-28 left-1/2 -translate-x-1/2 w-50 text-center focus:outline-none cursor-pointer"
                      >
                        <div className="
                          bg-darker/90 backdrop-blur-sm
                          text-gray-300
                          rounded-xl
                          border border-gray-700
                          px-4 py-3
                          transition-all duration-300 ease-in-out
                          hover:border-accent hover:text-accent hover:bg-darker/95
                          hover:shadow-lg hover:shadow-accent/20
                          hover:scale-105 hover:-translate-y-1
                          active:scale-95
                          shadow-md
                        ">
                          <div className="text-xs font-semibold text-primary group-hover:text-accent transition-colors duration-300">{exp.period}</div>
                          <div className="text-sm text-white mt-1 group-hover:text-accent-light transition-colors duration-300">{exp.company}</div>
                          {/* Click indicator */}
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </button>
                    ) : (
                      <button
                        onClick={() => setSelected(index)}
                        className="group absolute -bottom-28 left-1/2 -translate-x-1/2 w-64 text-center focus:outline-none cursor-pointer"
                      >
                        <div className="
                          bg-darker/90 backdrop-blur-sm
                          text-gray-300
                          rounded-xl
                          border border-gray-700
                          px-4 py-3
                          transition-all duration-300 ease-in-out
                          hover:border-accent hover:text-accent hover:bg-darker/95
                          hover:shadow-lg hover:shadow-accent/20
                          hover:scale-105 hover:translate-y-1
                          active:scale-95
                          shadow-md
                        ">
                          <div className="text-xs font-semibold text-primary group-hover:text-accent transition-colors duration-300">{exp.period}</div>
                          <div className="text-sm text-white mt-1 group-hover:text-accent-light transition-colors duration-300">{exp.company}</div>
                          {/* Click indicator */}
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </button>
                    )}
                  </div>

                  {/* RIGHT-HAND CONNECTOR */}
                  {index < experiences.length - 1 && (
                    <div className="mx-1 h-[4px] rounded-full bg-gradient-to-r from-[#1e1b4b] via-[#312e81] to-[#1e1b4b] w-[160px] sm:w-[180px] md:w-[200px] shrink-0" />
                  )}
                </div>
              ))}

            </div>

            {/* Prev/Next arrows (optional, but nice) */}
            <button
              type="button"
              onClick={() => scrollerRef.current?.scrollBy({ left: -280, behavior: 'smooth' })}
              className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-40 h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
              aria-label="Scroll left"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => scrollerRef.current?.scrollBy({ left: 280, behavior: 'smooth' })}
              className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-40 h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
              aria-label="Scroll right"
            >
              ›
            </button>
          </div>

          {/* Mobile: center spine with alternating cards */}
          <div className="md:hidden relative py-8">
            {/* center vertical line */}
            <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-[#2a275a]" />

            <div className="space-y-10">
              {experiences.map((exp, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <div key={exp.period} className="relative grid grid-cols-2 items-center">
                    {/* DOT on spine (above everything) */}
                    <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 w-3.5 h-3.5 rounded-full bg-[#312e81] border-2 border-[#141234] shadow-sm" />
                  
                    {/* LEFT SIDE (card + connector) */}
                    {isLeft && (
                      <>
                        {/* connector from spine to card */}
                        <div className="absolute left-1/2 -translate-x-[calc(100%+0.5rem)] top-1/2 -translate-y-1/2 w-2 h-[2px] bg-[#2a275a]" />
                        {/* card */}
                        <motion.button
                          initial={{ opacity: 0, x: -16 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.35, delay: index * 0.06 }}
                          onClick={() => setSelected(index)}
                          className="col-start-1 justify-self-end mr-4 w-[min(19rem,92%)] text-left focus:outline-none cursor-pointer"
                        >
                          <div className="
                            bg-darker/90 backdrop-blur-sm 
                            text-gray-300 
                            rounded-xl 
                            border border-gray-700 
                            px-4 py-3 
                            transition-all duration-300 
                            hover:border-accent hover:text-accent hover:bg-darker/95
                            hover:shadow-lg hover:shadow-accent/20
                            hover:scale-105 hover:-translate-x-1
                            active:scale-95
                            shadow-md
                            group
                          ">
                            <div className="text-[11px] uppercase tracking-wider text-primary/80 group-hover:text-accent transition-colors duration-300">{exp.period}</div>
                            <div className="text-sm text-white mt-1 group-hover:text-accent-light transition-colors duration-300">{exp.company}</div>
                            {/* Click indicator */}
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        </motion.button>
                      </>
                    )}

                    {/* RIGHT SIDE (card + connector) */}
                    {!isLeft && (
                      <>
                        {/* connector from spine to card */}
                        <div className="absolute left-1/2 translate-x-2 top-1/2 -translate-y-1/2 w-2 h-[2px] bg-[#2a275a]" />
                        {/* card */}
                        <motion.button
                          initial={{ opacity: 0, x: 16 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.35, delay: index * 0.06 }}
                          onClick={() => setSelected(index)}
                          className="col-start-2 justify-self-start ml-4 w-[min(19rem,92%)] text-left focus:outline-none cursor-pointer"
                        >
                          <div className="
                            bg-darker/90 backdrop-blur-sm 
                            text-gray-300 
                            rounded-xl 
                            border border-gray-700 
                            px-4 py-3 
                            transition-all duration-300 
                            hover:border-accent hover:text-accent hover:bg-darker/95
                            hover:shadow-lg hover:shadow-accent/20
                            hover:scale-105 hover:translate-x-1
                            active:scale-95
                            shadow-md
                            group
                          ">
                            <div className="text-[11px] uppercase tracking-wider text-primary/80 group-hover:text-accent transition-colors duration-300">{exp.period}</div>
                            <div className="text-sm text-white mt-1 group-hover:text-accent-light transition-colors duration-300">{exp.company}</div>
                            {/* Click indicator */}
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        </motion.button>
                      </>
                    )}
                  </div>
                );
              })}
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
              className="w-full max-w-2xl bg-[#0f0f1a]/95 border border-gray-800 rounded-2xl p-6 backdrop-blur-sm"
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