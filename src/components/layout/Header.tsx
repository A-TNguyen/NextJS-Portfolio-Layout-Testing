import { FC } from 'react';
import { personalInfo } from '@/content/data';
import SmoothScrollLink from '@/components/ui/SmoothScrollLink';
import { withH1Prefix, withH2Prefix, withPPrefix } from '@/utils/tagPrefix';

const Header: FC = () => {
  return (
    // The main header for the page.
    // It now imports its own data directly.
    <header className="flex flex-col text-left">
      {/* TAG-PREFIX-CHANGE */}
      <SmoothScrollLink href="/" className="hover:opacity-80 transition-opacity cursor-pointer">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{withH1Prefix(personalInfo.name)}</h1>
      </SmoothScrollLink>
      {/* TAG-PREFIX-CHANGE */}
      <h2 className="mt-3 text-lg font-medium tracking-tight sm:text-xl">{withH2Prefix(personalInfo.title)}</h2>
      {/* TAG-PREFIX-CHANGE */}
      <p className="mt-4 max-w leading-normal">{withPPrefix(personalInfo.description)}</p>
    </header>
  );
};

export default Header; 