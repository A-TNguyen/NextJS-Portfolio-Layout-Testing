import { FC } from 'react';
import Section from '@/components/Section';
import { aboutData } from '@/content/data';
import SectionHeader from '../ui/SectionHeader';
import { withPPrefix } from '@/utils/tagPrefix';

const About: FC = () => {
  return (
    <Section id="about">
      <SectionHeader title="About" />
      {/* SECTION CONTENT: Change background and text colors here */}
      <div className="space-y-4">
        {aboutData.description.map((paragraph, index) => (
          // The <p> tag automatically gets its styles from the global config.
          <p key={index} className="text-left">
            {/* TAG-PREFIX-CHANGE */}
            {withPPrefix(paragraph)}
          </p>
        ))}
      </div>
    </Section>
  );
};

export default About; 