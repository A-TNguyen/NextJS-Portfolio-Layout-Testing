import {
  CardData,
  AboutData,
  PersonalInfoData,
  SocialLink,
} from '@/types';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const aboutData: AboutData = {
  title: 'About Me',
  description: [
    "Back in 2012, I decided to Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  ],
};

export const experienceData: CardData[] = [
  {
    date: '2024 — PRESENT',
    title: 'Job Title Here',
    link: '#',
    description:
      'Job description here: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    skills: ['JavaScript', 'TypeScript', 'React', 'Storybook'],
  },
  {
    date: '2020 — 2024',
    title: 'Job Title Here',
    link: '#',
    description:
      'Job description here: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    skills: ['Next.js', 'GraphQL', 'Node.js', 'Figma'],
  },
  {
    date: '2018 — 2020',
    title: 'Job Title Here',
    link: '#',
    description:
      'Job description here: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    skills: ['Java', 'Spring', 'AngularJS', 'SQL'],
  },
  {
    date: '2016 — 2018',
    title: 'Job Title Here',
    link: '#',
    description:
      'Job description here: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    skills: ['HTML', 'CSS', 'jQuery', 'PHP', 'WordPress'],
  },
];

export const projectData: CardData[] = [
  {
    date: '2023',
    title: 'Project Title Here',
    link: '#',
    description:
      'Project Description here: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
  },
  {
    date: '2022',
    title: 'Project Title Here',
    link: '#',
    description:
      'Project Description here: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    skills: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
  },
  {
    date: '2021',
    title: 'Project Title Here',
    link: '#',
    description:
      'Project Description here: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    skills: ['React', 'D3.js', 'SVG', 'JavaScript'],
  },
  {
    date: '2020',
    title: 'Project Title Here',
    link: '#',
    description:
      'Project Description here: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    skills: ['React Native', 'Firebase', 'Expo', 'Redux'],
  },
];

export const personalInfo: PersonalInfoData = {
  name: 'Your Name Here',
  title: 'Your Title Here',
  description:
    'Your description here: Passionate about crafting accessible, responsive, and interactive web experiences. I specialize in React, TypeScript, Tailwind CSS, and building component-based UI systems that scale.',
};

export const socialLinks: SocialLink[] = [
  {
    href: 'https://github.com/yourusername',
    label: 'GitHub',
    icon: FaGithub,
  },
  {
    href: 'https://linkedin.com/in/yourusername',
    label: 'LinkedIn',
    icon: FaLinkedin,
  },
  {
    href: 'mailto:you@example.com',
    label: 'Email',
    icon: FaEnvelope,
  },
]; 