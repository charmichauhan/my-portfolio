import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/layout/BackToTop';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}
