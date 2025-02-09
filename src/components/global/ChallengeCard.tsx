"use client";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { type Challenge, ChallengeStatus } from "@/types/challenge";
import Link from "next/link";

interface ChallengeCardProps {
  challenge: Challenge;
}

export function ChallengeCard({ challenge }: ChallengeCardProps) {
  const startDate = new Date(challenge.startDate);
  const endDate = new Date(challenge.endDate);
  const timelineDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));

  return (
    <Card className="flex flex-col h-full">
      <div className="relative p-3">
        <Image
          src="/images/site-template.svg"
          alt={challenge.category.name}
          width={400}
          height={200}
          className="w-full h-[200px] object-cover bg-primary rounded-xl"
        />
        <Badge
          variant="outline"
          className={`absolute top-6 right-6 rounded-xl ${challenge.status === ChallengeStatus.OPEN
            ? "bg-[#0F973D] text-white border-none"
            : "bg-muted text-muted-foreground"
            }`}
        >
          {challenge.status}
        </Badge>
      </div>

      <CardContent className="flex-grow p-6">
        <h3 className="text-xl font-semibold mb-4">{challenge.title}</h3>

        <div className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-2">Skills Needed:</p>
            <div className="flex flex-wrap gap-2">
              {challenge.skillsNeeded.map((skill, index) => (
                <Badge key={index} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <p className="text-sm text-muted-foreground">Seniority Level:</p>
            <p className="text-sm font-medium">{challenge.juniorityLevel}</p>
          </div>

          <div className="flex items-center space-x-2">
            <p className="text-sm text-muted-foreground">Timeline:</p>
            <p className="text-sm font-medium">{timelineDays} Days</p>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 border-t border-muted">
        <Button
          asChild
          className="hover:bg-white hover:text-primary hover:outline hover:outline-1 hover:outline-primary transition-colors duration-200 mt-4"
        >
          <Link href={`${window.location.pathname}/${challenge._id}`}>View Challenge</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

