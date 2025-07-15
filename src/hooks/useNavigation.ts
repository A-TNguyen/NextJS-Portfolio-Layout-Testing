'use client';

import { useEffect } from 'react';
import { useSmoothScroll } from './useSmoothScroll';

/**
 * Hook to handle navigation state, URL management, and browser navigation
 */
export const useNavigation = () => {
  const { scrollToSection, scrollToTop } = useSmoothScroll();

  useEffect(() => {
    // Handle initial hash on page load
    const handleInitialLoad = () => {
      const hash = window.location.hash;
      if (hash && hash.length > 1) {
        const sectionId = hash.substring(1); // Remove the #
        setTimeout(() => {
          scrollToSection(sectionId, 0);
        }, 100); // Small delay to ensure DOM is ready
      }
    };

    // Handle browser back/forward navigation
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash && hash.length > 1) {
        const sectionId = hash.substring(1);
        scrollToSection(sectionId, 0);
      } else {
        // No hash means we're at home
        scrollToTop(0);
      }
    };

    // Handle initial load
    handleInitialLoad();

    // Listen for hash changes (back/forward buttons)
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [scrollToSection, scrollToTop]);

  // Navigation functions that handle both scrolling and URL updates
  const navigateToSection = (sectionId: string, duration: number = 0) => {
    scrollToSection(sectionId, duration);
    // Update URL with hash
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', `/#${sectionId}`);
    }
  };

  const navigateToHome = (duration: number = 0) => {
    scrollToTop(duration);
    // Clear hash from URL
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', '/');
    }
  };

  return { navigateToSection, navigateToHome };
}; 