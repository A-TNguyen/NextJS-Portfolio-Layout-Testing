'use client';

import { FC } from 'react';
import { navItems } from '@/content/routes';
import { useActiveSection } from '@/hooks/useActiveSection';
import SmoothScrollLink from '@/components/ui/SmoothScrollLink';

const Navigation: FC = () => {
  const activeSection = useActiveSection();

  return (
    <nav className="hidden lg:block mt-16 w-max">
      <ul className="space-y-4">
        {navItems.map((item) => {
          const isActive = activeSection === item.href;
          return (
            <li key={item.href}>
              <SmoothScrollLink
                href={item.href}
                className="group flex items-center gap-4 cursor-pointer"
                duration={0}
              >
                <span
                  className={`
                    h-px transition-all bg-slate-200
                    ${isActive ? 'w-16' : 'w-8'}
                    group-hover:w-16
                  `}
                />
                <span
                  className={`
                    text-xs font-bold uppercase tracking-widest
                  `}
                >
                  {item.label}
                </span>
              </SmoothScrollLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation; 