'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  actions?: React.ReactNode;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  className = '',
  actions,
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
      {actions && centered ? (
        <div className="grid grid-cols-3 items-center mb-4">
          <div />
          <h2 className="text-3xl md:text-4xl font-bold text-main text-center">{title}</h2>
          <div className="justify-self-end">{actions}</div>
        </div>
      ) : (
        <div className={`${actions ? 'flex items-center justify-between mb-4' : ''}`}>
          <h2 className={`text-3xl md:text-4xl font-bold text-main ${actions ? 'text-left' : 'mb-4'}`}>{title}</h2>
          {actions && <div>{actions}</div>}
        </div>
      )}
      {subtitle && (
        <p className={`text-main/80 max-w-2xl mx-auto ${actions && !centered ? 'text-left mx-0' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
} 