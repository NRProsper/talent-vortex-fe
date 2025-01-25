import AboutSection from '@/components/home/AboutSection';
import ChallengesSection from '@/components/home/ChallengesSection';
import HeroSection from '@/components/home/HeroSection';
import SkillsSection from '@/components/home/SkillsSection';
import StatsSection from '@/components/home/StatsSection';
import React from 'react';

export default function page() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <SkillsSection />
      <ChallengesSection />
    </>
  );
}
