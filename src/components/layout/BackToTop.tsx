'use client';

import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > 300);
    const initialUpdate = window.requestAnimationFrame(updateVisibility);

    window.addEventListener('scroll', updateVisibility, { passive: true });

    return () => {
      window.cancelAnimationFrame(initialUpdate);
      window.removeEventListener('scroll', updateVisibility);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 rounded-full bg-linear-to-r from-blue-600 to-purple-600 p-4 text-white shadow-lg transition-transform duration-200 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <FaArrowUp aria-hidden="true" className="h-5 w-5" />
    </button>
  );
};

export default BackToTop;
