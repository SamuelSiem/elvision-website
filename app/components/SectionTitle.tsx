'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  className = '',
}: SectionTitleProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`${centered ? 'text-center' : ''} ${className}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-main mb-4">{title}</h2>
      {subtitle && (
        <p className="text-main/80 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
} 