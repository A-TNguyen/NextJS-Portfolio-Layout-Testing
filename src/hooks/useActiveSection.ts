'use client';

import { useState, useEffect } from 'react';
import { navItems } from '@/content/routes';

/**
 * A custom React hook to spy on scroll position and determine the active section.
 * @returns The href of the currently active section.
 */
export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('/#about'); // Default to about section

  useEffect(() => {
    const intersectingSections = new Set<string>();
    const observers: IntersectionObserver[] = [];

    // Function to determine which section should be active based on what's intersecting
    const updateActiveSection = () => {
      if (intersectingSections.size === 0) {
        // If nothing is intersecting, keep current active section
        return;
      }

      // Convert intersecting sections to array and sort by their order in navItems
      const intersectingArray = Array.from(intersectingSections);
      const sortedSections = navItems
        .filter(item => intersectingArray.includes(item.href))
        .map(item => item.href);

      if (sortedSections.length > 0) {
        // For multiple intersecting sections, pick the first one in document order
        setActiveSection(sortedSections[0]);
      }
    };

    navItems.forEach((item, index) => {
      // Extract section ID from hash URL (e.g., "/#about" -> "about")
      const sectionId = item.href.split('#')[1];
      const section = document.getElementById(sectionId);
      
      if (!section) {
        return;
      }

      // Use a more generous intersection observer
      const options: IntersectionObserverInit = {
        rootMargin: '-50px 0px -50px 0px', // Small margins to trigger when section is well into viewport
        threshold: 0
      };

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          intersectingSections.add(item.href);
        } else {
          intersectingSections.delete(item.href);
        }
        updateActiveSection();
      }, options);

      observer.observe(section);
      observers.push(observer);
    });

    // Handle initial hash on page load
    const handleInitialHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const matchingItem = navItems.find(item => item.href === hash);
        if (matchingItem) {
          setActiveSection(matchingItem.href);
        }
      }
    };

    setTimeout(handleInitialHash, 100);

    // Cleanup function
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [navItems]);

  return activeSection;
}; 