'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import {
  ChartBarIcon,
  PresentationChartLineIcon,
  CogIcon,
  CloudArrowUpIcon,
  LightBulbIcon,
  CommandLineIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Data Analytics & Visualization',
    description: 'Transform raw data into actionable insights with custom dashboards and reports using Power BI, Tableau, and Looker.',
    icon: ChartBarIcon,
  },
  {
    title: 'Business Intelligence',
    description: 'Develop comprehensive BI solutions that drive strategic decision-making and operational efficiency.',
    icon: PresentationChartLineIcon,
  },
  {
    title: 'Data Architecture',
    description: 'Design and implement scalable data infrastructure using modern cloud platforms and best practices.',
    icon: CogIcon,
  },
  {
    title: 'Cloud Solutions',
    description: 'Leverage cloud platforms (AWS, Azure, GCP) for robust, scalable data solutions and analytics.',
    icon: CloudArrowUpIcon,
  },
  {
    title: 'AI/ML Integration',
    description: 'Implement machine learning models for predictive analytics and automated insights generation.',
    icon: LightBulbIcon,
  },
  {
    title: 'Data Automation',
    description: 'Streamline data processes with automated pipelines and ETL workflows for improved efficiency.',
    icon: CommandLineIcon,
  },
];

export default function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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

  return (
    <Section id="clients" className="relative overflow-hidden bg-gradient-to-b from-dark via-[#0A0E23] to-[#0A0E23] py-16">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/7 via-transparent to-accent/7 opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_20%_0%,rgba(var(--primary-rgb),0.05)_0%,transparent_65%)] opacity-10" />
      <SectionTitle
        title="Our Services"
        subtitle="Comprehensive data solutions tailored to your business needs"
        className="mb-16"
      />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={itemVariants}
            className="group relative p-6 bg-darker rounded-lg border border-gray-700 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 overflow-hidden"
          >
            {/* Gradient background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative flex items-start space-x-4">
              <div className="flex-shrink-0">
                <service.icon className="w-8 h-8 text-primary group-hover:text-accent transition-all duration-300 group-hover:scale-110 transform" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold bg-gradient-to-r from-white to-gray-100 group-hover:from-accent-light group-hover:to-primary bg-clip-text text-transparent transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-main-secondary group-hover:text-main/90 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
} 