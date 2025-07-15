import { FC, ReactNode } from 'react';

interface ContentProps {
  children: ReactNode;
}

const Content: FC<ContentProps> = ({ children }) => {
  return (
    // This component encapsulates the styling for the main content column.
    // It sets the top padding and the width for large screens.
    // All page content (About, Experience, Projects) will be nested inside this.
    <section className="pt-24 lg:w-[52%]">
      {children}
    </section>
  );
};

export default Content; 