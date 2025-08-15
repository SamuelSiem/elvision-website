import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Container({
  children,
  className = '',
  id,
}: ContainerProps) {
  return (
    <div
      id={id}
      className={`container mx-auto px-4 md:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
} 