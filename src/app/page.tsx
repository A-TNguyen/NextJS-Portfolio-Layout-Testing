'use client';

import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Content from '@/components/layout/Content';
import Footer from '@/components/layout/Footer';
import { useNavigation } from '@/hooks/useNavigation';

export default function Home() {
  // Initialize navigation functionality
  useNavigation();

  return (
    <Content>
      <About />
      <Experience />
      <Projects />
      <Footer />
    </Content>
  );
}