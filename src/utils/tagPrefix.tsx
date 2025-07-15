import { ReactNode } from 'react';

/**
 * Utility function to add tag prefixes to text content for debugging/identification
 */
export const withTagPrefix = (tag: string, content: ReactNode): ReactNode => {
  return (
    <>
      {/* TAG-PREFIX-CHANGE */}
      {tag}: {content}
    </>
  );
};

// Specific helper functions for common tags
export const withH1Prefix = (content: ReactNode) => withTagPrefix('H1', content);
export const withH2Prefix = (content: ReactNode) => withTagPrefix('H2', content);
export const withH3Prefix = (content: ReactNode) => withTagPrefix('H3', content);
export const withPPrefix = (content: ReactNode) => withTagPrefix('P', content);
export const withSpanPrefix = (content: ReactNode) => withTagPrefix('Span', content);
export const withDivPrefix = (content: ReactNode) => withTagPrefix('Div', content);
export const withFooterPrefix = (content: ReactNode) => withTagPrefix('Footer', content); 