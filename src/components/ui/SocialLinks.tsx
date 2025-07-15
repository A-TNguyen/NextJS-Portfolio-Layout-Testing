import { FC } from 'react';
import { socialLinks } from '@/content/data';

interface SocialLink {
  href: string;
  label: string;
  icon: React.ElementType;
  bgColor: string;
}

const SocialLinks: FC = () => {
  return (
    <ul className="flex justify-start gap-4 mt-8 py-2">
      {socialLinks.map((link) => (
        <li key={link.href}>
          <a 
            href={link.href} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label={link.label}
            className={`flex items-center rounded-md transition-opacity hover:opacity-80`}
          >
            <link.icon className="w-7 h-6" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks; 