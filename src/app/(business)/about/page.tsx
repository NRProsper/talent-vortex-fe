import { OurStory } from "@/components/about/OurStory";
import { WhySection } from "@/components/about/WhySection";
import { SkillsChallenges } from "@/components/about/SkillsChallenges";

export default function AboutPage() {
  return (
    <main className="mx-4 sm:mx-8 md:mx-16 lg:mx-28 my-9 md:py-20">
      <OurStory />
      <WhySection />
      <SkillsChallenges />
    </main>
  );
}

