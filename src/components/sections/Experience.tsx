import { FC } from 'react';
import CardSection from '../ui/CardSection';
import { experienceData } from '@/content/data';
import { resumeRoute } from '@/content/routes';

const Experience: FC = () => {
  return (
    <CardSection
      id="experience"
      title="Experience"
      data={experienceData}
      viewMoreLink={{
        href: resumeRoute,
        text: "View Full Résumé",
        ariaLabel: "View Full Résumé (opens in a new tab)"
      }}
    />
  );
};

export default Experience; 