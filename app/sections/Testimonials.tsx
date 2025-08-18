'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';

const testimonials = [
  {
    quote: "Sam was an absolute pleasure and professional to work with and I'm so grateful that we got to work together. He has set a high bar for what I've come to expect from a Data/BI Analyst. Not only is Sam technically skilled with writing queries for questions that are asked of him, he comes up with his own curiosities and theories to further investigate the data. I'm always impressed with Sam's ability to explain and summarize data to team members who may not have a technical background - this is a super important skill since he regularly works with people outside of his own immediate data team.",
    author: "Jessica Kwok",
    title: "Senior Software Developer",
    company: "Makeship"
  },
  {
    quote: "While working with Sam his communication skills were beyond excellent. He is always able to make data driven decisions that just make sense. I had the pleasure of working with him once a week. He is someone you will want on your team, his cross departmental communication was always commended across the company.",
    author: "Mattias Henders",
    title: "Senior Software Engineer",
    company: "PG Forsta"
  },
  {
    quote: "Sam is a true data expert, with a keen eye for detail and a passion for exploring data. His ability to extract insights from complex data sets and present them in a clear, concise manner has always impressed me. But beyond his technical skills, Sam is a wonderful colleague and a true team player. He is always willing to lend a helping hand and share his knowledge with others. Any company would be lucky to have him and am sure he will make a positive impact on any team he joins.",
    author: "Rose Maria Jose",
    title: "Senior BI Developer",
    company: "Best Buy Canada"
  },
  {
    quote: "Samuel has been a valued member of our team for the past couple years. Always a friendly face and a favorite to work with for the whole team. His attention to detail and ability to anticipate both customers' and the store's needs have been a huge asset. I whole heartedly recommend Samuel and know any company would be lucky to have him.",
    author: "Greg Tracey",
    title: "General Manager",
    company: "Sport Chek"
  },
  {
    quote: "Samuel has been the champion of addressing business painpoints with their forward-thinking approach and creativity, consistently driving impactful solutions, particularly in the field of advanced analytics and insights. Their innovative mindset has significantly improved efficiency and delivered lasting value to our business.",
    author: "Johana S.",
    title: "Colliers Canada",
    company: "Portfolio Controller, Technology & Data"
  },
  {
    quote: "Sam has demonstrated exceptional expertise in BI development, particularly through his transformative work on the latest Brokerage Paid Social Ad Performance Dashboard. His innovative ideas and effective communication were crucial to the project's success. Sam's ability to embrace change and think differently highlights his potential to lead our industry into the future. Although new to world of CRE, his significant impact and drive for innovation make him a deserving candidate for this award.",
    author: "Amber Tiller",
    title: "Senior Digital Marketing Specialist",
    company: "Colliers International"
  },
  {
    quote: "Sam has been an absolute pleasure to work with, he is proactive in building data visualization solutions, offer help in a timely manner, and take the time to understand our business needs. Sam has helped us build a crucial dashboard for our Inside Sales program and Digital Marketing Advertising, helping us better attribute our efforts and determine a stronger lead funnel program. Sam continue to be excellent partners to work with as they are always willing to support, troubleshoot issues, and offer new ways to solve problems; they embody what it means to be enterprising.",
    author: "Aldo Stephanus",
    title: "Director, Digital Marketing Canada",
    company: "Colliers Canada"
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