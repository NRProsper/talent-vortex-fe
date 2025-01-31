"use client";

import { useGetSingleChallenge } from "@/hooks/useChallengeHooks";
import { useParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import LoadingSpinner from "@/components/global/LoadingSpinner";

export default function ChallengePage() {
  const { slug } = useParams();
  const { data: challenge, isLoading, isError } = useGetSingleChallenge(slug as string);

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <div>Error loading challenge</div>;
  if (!challenge) return <div>Challenge not found</div>;

  return (
    <div className="container px-4 md:px-8 lg:px-20 py-9 md:py-20 max-w-[1920px] mx-auto">
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/challenges">Challenges</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{challenge.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">{challenge.title}</h1>
        <Badge className="mb-4">{challenge.status}</Badge>
        <p className="text-gray-600 mb-6">{challenge.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Skills Needed</h2>
            <div className="flex flex-wrap gap-2">
              {challenge.skillsNeeded.map((skill, index) => (
                <Badge key={index} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Juniority Level</h2>
            <p>{challenge.juniorityLevel}</p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Tasks</h2>
          <pre className="whitespace-pre-wrap bg-gray-100 p-4 rounded">{challenge.tasks}</pre>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Prizes</h2>
          <ul>
            {challenge.prizes.map((prize, index) => (
              <li key={index}>
                {prize.place}: ${prize.minValue} - ${prize.maxValue}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p>Start Date: {new Date(challenge.startDate).toLocaleDateString()}</p>
            <p>End Date: {new Date(challenge.endDate).toLocaleDateString()}</p>
          </div>
          <Button>Apply Now</Button>
        </div>
      </div>
    </div>
  );
}

