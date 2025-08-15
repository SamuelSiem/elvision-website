import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Experience from './sections/Experience';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Experience />
      <Testimonials />
      <Contact />
    </>
  );
}
