import React from "react";
import { ChallengeCard } from "@/components/global/ChallengeCard";
import { Button } from "@/components/ui/button";
import type { Challenge } from "@/types/challenge";

const challenges: Challenge[] = [
  {
    id: "1",
    title: "Design a Dashboard for SokoFund",
    skills: ["UI/UX Design", "User Research", "User Interface"],
    level: "Intermediate",
    challengeLink: "#",
    startDate: "2024-01-20",
    endDate: "2025-02-05",
    companyName: "Umurava",
  },
  {
    id: "2",
    title: "Design a Dashboard for SokoFund",
    skills: ["UI/UX Design", "User Research", "User Interface"],
    level: "Junior",
    challengeLink: "#",
    startDate: "2024-01-15",
    endDate: "2024-01-30",
    companyName: "Umurava",
  },
  {
    id: "3",
    title: "Design a Dashboard for SokoFund",
    skills: ["UI/UX Design", "User Research", "User Interface"],
    level: "Senior",
    challengeLink: "#",
    startDate: "2024-01-25",
    endDate: "2024-02-10",
    companyName: "Umurava",
  },
];

export default function ChallengesSection() {
  return (
    <section className="mx-4 sm:mx-8 md:mx-16 lg:mx-28 my-9 md:py-20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Challenges & Hackathons</h2>
          <p className="text-muted-foreground">
            Join Skills Challenges Program to accelerate your career growth and become part of Africa&apos;s largest
            workforce of digital professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {challenges.map((challenge) => (
            <ChallengeCard key={challenge.id} challenge={challenge} />
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="hover:bg-primary hover:text-white">
            View More
          </Button>
        </div>
      </div>
    </section>
  );
}

