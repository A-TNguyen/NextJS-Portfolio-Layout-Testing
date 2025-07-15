import { FC } from 'react';
import { withH2Prefix } from '@/utils/tagPrefix';

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: FC<SectionHeaderProps> = ({ title }) => {
  return (
    // SECTION HEADER: Change background, blur, and text colors here.
    // This style will be applied to all section headers ("About", "Experience", "Projects").
    <h2 className="mb-6 text-left uppercase tracking-widest w-screen lg:sr-only sticky top-0 z-20 -mx-8 px-8 backdrop-blur-sm">
      {/* TAG-PREFIX-CHANGE */}
      {withH2Prefix(title)}
    </h2>
  );
};

export default SectionHeader; 