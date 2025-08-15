'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';

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
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <Section id="experience" background="darker">
      <SectionTitle
        title="Professional Experience"
        subtitle="A track record of delivering impactful data solutions across industries"
        className="mb-16"
      />

      <motion.div
        ref={ref}
        className="container mx-auto px-4"
      >
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-[7.5rem] top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary-light opacity-30" />

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.period}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative flex flex-col md:flex-row group"
              >
                {/* Year with dot */}
                <div className="flex-none w-full md:w-[7.5rem] mb-4 md:mb-0 flex items-center">
                  <div className="relative flex items-center w-full md:justify-end">
                    <div className="absolute left-0 md:right-0 md:left-auto w-3 h-3 bg-gradient-to-br from-primary to-accent rounded-full shadow-lg shadow-primary/30 transform -translate-x-1.5 md:translate-x-1.5" />
                    <div className="pl-6 md:pr-6 text-lg font-semibold text-primary">
                      {experience.period}
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 md:pl-12">
                  <div className="bg-darker/80 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-primary/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/5">
                    <h3 className="text-xl font-bold text-white group-hover:text-accent-light transition-colors duration-300">
                      {experience.title}
                    </h3>
                    <p className="text-primary-light mb-3 group-hover:text-primary transition-colors duration-300">
                      {experience.company}
                    </p>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {experience.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
} 