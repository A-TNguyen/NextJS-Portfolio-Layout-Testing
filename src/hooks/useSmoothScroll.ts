import { useCallback } from 'react';
// Note: You'll need to install GSAP first: npm install gsap
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register the ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

export const useSmoothScroll = () => {
  const scrollToSection = useCallback((sectionId: string, duration: number = 0) => {
    // Remove the # if it exists in the sectionId
    const targetId = sectionId.replace('#', '');
    
    gsap.to(window, {
      duration: duration,
      scrollTo: { y: `#${targetId}`, offsetY: 96 }, // 96px offset to align with H1 header
      ease: "power2.out"
    });
  }, []);

  const scrollToTop = useCallback((duration: number = 0) => {
    gsap.to(window, {
      duration: duration,
      scrollTo: { y: 0 },
      ease: "power2.out"
    });
  }, []);

  return { scrollToSection, scrollToTop };
}; 