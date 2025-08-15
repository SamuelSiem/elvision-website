'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, 'className'> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  href?: string;
  className?: string;
  children: ReactNode;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  href,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300';
  
  const variants = {
    primary: 'bg-primary hover:bg-primary-light text-white shadow-lg shadow-primary/20 hover:shadow-primary/40',
    secondary: 'bg-gray-700 hover:bg-gray-600 text-white shadow-lg shadow-gray-700/20 hover:shadow-gray-600/40',
    outline: 'border-2 border-accent text-accent hover:bg-accent/10 shadow-lg shadow-accent/5 hover:shadow-accent/20',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${
    fullWidth ? 'w-full' : ''
  } ${className}`;

  const buttonProps = {
    ...props,
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    className: classes,
    type: props.type || 'button',
  };

  if (href) {
    return (
      <a href={href} className={fullWidth ? 'block' : 'inline-block'}>
        <motion.button {...buttonProps}>
          {children}
        </motion.button>
      </a>
    );
  }

  return (
    <motion.button {...buttonProps}>
      {children}
    </motion.button>
  );
} 