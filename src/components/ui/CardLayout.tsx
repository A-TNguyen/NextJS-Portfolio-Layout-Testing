import { FC } from 'react';
import Pill from './Pill';
import { CardData } from '@/types';
import ExternalLinkIcon from './ExternalLinkIcon';
import { withDivPrefix, withH3Prefix, withPPrefix } from '@/utils/tagPrefix';

const CardLayout: FC<CardData> = ({
  date,
  title,
  link,
  description,
  skills,
}) => {
  return (
    // CARD CONTAINER: Merged Card styling with CardLayout
    <div className="bg-white shadow-sm grid md:grid-cols-4 md:items-baseline gap-2 lg:p-4 mb-4 transition-all">
      {/* Left Column (Date) */}
      <div
        // DATE TEXT: Change text color here, e.g., text-slate-500
        className="md:col-span-1 z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide lg:-ml-4"
        aria-label={date}
      >
        {/* TAG-PREFIX-CHANGE */}
        {withDivPrefix(date)}
      </div>

      {/* Right Column (Details) */}
      <div className="md:col-span-3 flex flex-col items-start">
        {/* The job/project title is an h3, a sub-heading of the section's h2. */}
        <h3 className="inline-flex items-baseline group/link">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} (opens in a new tab)`}
          >
            {/* TAG-PREFIX-CHANGE */}
            <span className="truncate">{withH3Prefix(title)}</span>
            <ExternalLinkIcon />
          </a>
        </h3>
        {/* The description is a p tag, which gets base styles globally. */}
        {/* TAG-PREFIX-CHANGE */}
        <p>{withPPrefix(description)}</p>
        <ul className="flex flex-wrap gap-2 mt-4">
          {skills.map((skill) => (
            <li key={skill}>
              <Pill text={skill} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardLayout; 