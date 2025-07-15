import { FC } from 'react';
import CardSection from '../ui/CardSection';
import { projectData } from '@/content/data';
import { projectArchiveRoute } from '@/content/routes';

const Projects: FC = () => {
  return (
    <CardSection
      id="projects"
      title="Projects"
      data={projectData}
      viewMoreLink={{
        href: projectArchiveRoute,
        text: "View Project Archive",
        ariaLabel: "View Project Archive"
      }}
    />
  );
};

export default Projects; 