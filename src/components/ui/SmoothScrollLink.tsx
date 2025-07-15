'use client';

import { FC, ReactNode } from 'react';
import { useNavigation } from '@/hooks/useNavigation';

interface SmoothScrollLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  duration?: number;
  onClick?: () => void;
}

const SmoothScrollLink: FC<SmoothScrollLinkProps> = ({ 
  href, 
  children, 
  className = '', 
  duration = 0,
  onClick 
}) => {
  const { navigateToSection, navigateToHome } = useNavigation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    if (href === '/' || href === '#top') {
      navigateToHome(duration);
    } else if (href.includes('#')) {
      // Extract section ID from hash URL (e.g., "/#about" -> "about")
      const sectionId = href.split('#')[1];
      if (sectionId) {
        navigateToSection(sectionId, duration);
      }
    }
    
    onClick?.();
  };

  return (
    <a
      href={href}
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

export default SmoothScrollLink; 