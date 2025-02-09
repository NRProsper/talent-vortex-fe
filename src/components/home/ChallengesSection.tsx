"use client";

import { ChallengeCard } from "@/components/global/ChallengeCard";
import { Button } from "@/components/ui/button";
import LoadingSpinner from "../global/LoadingSpinner";
import { useGetChallenges } from "@/hooks/useChallengeHooks";
import type { Challenge } from "@/types";
import Link from "next/link";

export default function ChallengesSection() {
  const { data, isLoading, isError } = useGetChallenges({ limit: 3 });

  const challenges = data?.challenges || [];

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <div>Error loading challenges</div>;

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
          {challenges.map((challenge: Challenge) => (
            <ChallengeCard key={challenge._id} challenge={challenge} />
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg" className="hover:bg-primary hover:text-white">
            <Link href="/challenges">View More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

