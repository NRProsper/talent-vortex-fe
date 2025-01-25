import AboutSection from '@/components/home/AboutSection';
import CareerSection from '@/components/home/CarrerSection';
import ChallengesSection from '@/components/home/ChallengesSection';
import GetStarted from '@/components/home/GetStarted';
import HeroSection from '@/components/home/HeroSection';
import ParticipationSection from '@/components/home/ParticipationSection';
import SkillsSection from '@/components/home/SkillsSection';
import StatsSection from '@/components/home/StatsSection';
import TestimonialsSection from '@/components/home/TestimonialSection';
import React from 'react';

export default function page() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <SkillsSection />
      <ChallengesSection />
      <ParticipationSection />
      <TestimonialsSection />
      <GetStarted />
      <CareerSection />
    </>
  );
}
