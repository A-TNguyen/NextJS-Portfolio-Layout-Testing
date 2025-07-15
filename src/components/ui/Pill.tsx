import { FC } from 'react';
import { withSpanPrefix } from '@/utils/tagPrefix';

interface PillProps {
  text: string;
}

const Pill: FC<PillProps> = ({ text }) => {
  return (
    // PILL CONTAINER: Change background and text color here
    // e.g., bg-slate-100 text-slate-600
    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full">
      {/* TAG-PREFIX-CHANGE */}
      {withSpanPrefix(text)}
    </span>
  );
};

export default Pill; 