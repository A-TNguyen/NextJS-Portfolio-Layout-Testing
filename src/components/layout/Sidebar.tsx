import { FC, ReactNode } from 'react';
import Navigation from './Navigation';
import SocialLinks from '@/components/ui/SocialLinks';

interface SidebarProps {
  children: ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
  return (
    <aside className="w-full lg:w-[48%] lg:h-screen lg:sticky lg:top-0 lg:flex lg:flex-col lg:justify-between lg:py-24">
      <div>
        {children}
        <Navigation />
      </div>
      <SocialLinks />
    </aside>
  );
};

export default Sidebar; 