'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';

const testimonials = [
  {
    quote: "Working with Samuel was transformative for our analytics strategy. His expertise in Power BI and data modeling helped us streamline our reporting and make better decisions.",
    author: "Michael Rodriguez",
    title: "VP of Operations",
    company: "DataFirst Solutions"
  },
  {
    quote: "Samuel's deep understanding of data architecture and business intelligence transformed how we handle our data. His solutions significantly improved our operational efficiency.",
    author: "Sarah Chen",
    title: "Director of Analytics",
    company: "TechCorp Global"
  },
  {
    quote: "The dashboards and reporting systems implemented by Samuel have become essential tools for our decision-making process. His work has had a lasting impact on our business.",
    author: "James Wilson",
    title: "COO",
    company: "Innovation Labs"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-advance timer
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <Section id="testimonials" background="darker" className="overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Client Testimonials"
          subtitle="What our clients say about working with us"
          className="mb-16"
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Slider */}
          <div className="relative min-h-[300px] flex items-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute w-full"
              >
                <div className="text-center px-4 md:px-8">
                  <p className="text-xl md:text-2xl text-gray-300 italic mb-8">
                    &quot;{testimonials[currentIndex].quote}&quot;
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-white">
                      {testimonials[currentIndex].author}
                    </h4>
                    <p className="text-primary">
                      {testimonials[currentIndex].title}
                    </p>
                    <p className="text-gray-400">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrevious}
              className="absolute left-0 -translate-x-full md:-translate-x-12 text-gray-400 hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon className="w-8 h-8" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 translate-x-full md:translate-x-12 text-gray-400 hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRightIcon className="w-8 h-8" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex
                    ? 'bg-primary'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
} 