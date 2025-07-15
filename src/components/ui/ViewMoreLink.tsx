import { FC } from 'react';
import ExternalLinkIcon from './ExternalLinkIcon';
import { withSpanPrefix } from '@/utils/tagPrefix';

interface ViewMoreLinkProps {
  href: string;
  text: string;
  ariaLabel: string;
}

const ViewMoreLink: FC<ViewMoreLinkProps> = ({ href, text, ariaLabel }) => {
  return (
    // This component encapsulates the "View More" links found at the
    // bottom of the Experience and Projects sections.
    <div className="mt-8 text-left">
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
        {/* TAG-PREFIX-CHANGE */}
        <span>{withSpanPrefix(text)}</span>
        <ExternalLinkIcon />
      </a>
    </div>
  );
};

export default ViewMoreLink; 