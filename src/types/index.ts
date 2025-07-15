import { ElementType } from 'react';

export interface CardData {
  date: string;
  title: string;
  link: string;
  description: string;
  skills: string[];
}

export interface AboutData {
  title: string;
  description: string[];
}

export interface PersonalInfoData {
  name: string;
  title: string;
  description: string;
}

export interface SocialLink {
  href: string;
  label: string;
  icon: ElementType;
}

export interface NavItem {
  href: string;
  label: string;
} 