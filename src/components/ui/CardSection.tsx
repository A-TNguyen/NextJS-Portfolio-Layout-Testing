import { FC } from 'react';
import Section from '../Section';
import CardLayout from './CardLayout';
import SectionHeader from './SectionHeader';
import ViewMoreLink from './ViewMoreLink';
import { CardData } from '@/types';

interface CardSectionProps {
  id: string;
  title: string;
  data: CardData[];
  viewMoreLink: {
    href: string;
    text: string;
    ariaLabel: string;
  };
}

const CardSection: FC<CardSectionProps> = ({ id, title, data, viewMoreLink }) => {
  return (
    <Section id={id}>
      <SectionHeader title={title} />
      <div>
        {data.map((item, index) => (
          <CardLayout
            key={index}
            date={item.date}
            title={item.title}
            link={item.link}
            description={item.description}
            skills={item.skills}
          />
        ))}
      </div>
      <ViewMoreLink
        href={viewMoreLink.href}
        text={viewMoreLink.text}
        ariaLabel={viewMoreLink.ariaLabel}
      />
    </Section>
  );
};

export default CardSection; 