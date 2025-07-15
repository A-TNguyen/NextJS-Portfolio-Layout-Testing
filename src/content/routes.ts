import { NavItem } from '@/types';

export const appRoutes = {
  home: "/",
  about: "/#about",
  experience: "/#experience",
  projects: "/#projects",
} as const;

// Section identifiers for scrolling
export const sections = {
  about: "about",
  experience: "experience", 
  projects: "projects",
} as const;

export const navItems: NavItem[] = [
  { href: appRoutes.about, label: 'About' },
  { href: appRoutes.experience, label: 'Experience' },
  { href: appRoutes.projects, label: 'Projects' },
];

export const resumeRoute = '/resume.pdf';
export const projectArchiveRoute = '/archive'; 