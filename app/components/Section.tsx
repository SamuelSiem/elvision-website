import { ReactNode } from 'react';
import Container from './Container';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
  background?: 'dark' | 'darker' | 'none';
}

export default function Section({
  children,
  className = '',
  id,
  containerClassName = '',
  background = 'none',
}: SectionProps) {
  const bgColors = {
    dark: 'bg-dark',
    darker: 'bg-darker',
    none: '',
  };

  return (
    <section
      id={id}
      className={`py-20 ${bgColors[background]} ${className}`}
    >
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
} 