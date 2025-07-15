import { FC, ReactNode } from 'react';

interface SectionProps {
  id: string;
  children: ReactNode;
}

const Section: FC<SectionProps> = ({ id, children }) => {
  return (
    <section id={id} className={'mb-24 scroll-mt-24'}>
      {children}
    </section>
  );
};

export default Section; 