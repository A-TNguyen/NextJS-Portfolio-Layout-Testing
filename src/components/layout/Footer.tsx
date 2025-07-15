import { FC } from 'react';
import { withFooterPrefix } from '@/utils/tagPrefix';

const Footer: FC = () => {
  return (
    <footer className="text-center text-sm text-slate-500 py-4">
      {/* TAG-PREFIX-CHANGE */}
      {withFooterPrefix(`© ${new Date().getFullYear()} Your Name Here. All Rights Reserved.`)}
    </footer>
  );
};

export default Footer; 