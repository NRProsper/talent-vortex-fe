'use client';

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, DollarSign, GraduationCap, Mail, Send, Tags } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useGetSingleChallenge } from "@/hooks/useChallengeHooks";
import { Suspense } from "react";
import { format } from "date-fns";
import { Prize } from "@/types";
import LoadingSpinner from "@/components/global/LoadingSpinner";
import ShareButton from "@/components/global/ShareButton";

function ChallengeContent() {
  const params = useParams<{ uri: string; }>();
  const { data: challenge } = useGetSingleChallenge(params.uri);


  if (!challenge) return null;

  return (
    <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-28 my-9 md:my-20">
      <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
        {/* Main Content */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h1 className="text-2xl font-bold">{challenge.title}</h1>
                    <p className="text-muted-foreground mt-2">{challenge.description}</p>
                  </div>
                  <Badge variant="secondary" className="uppercase">
                    {challenge.status}
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  {challenge.skillsNeeded.map((skill: string) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <Image
                src="/images/site-template.svg"
                alt="Challenge preview"
                width={800}
                height={400}
                className="rounded-lg border"
              />
              <div>
                <h2 className="text-xl font-semibold mb-4">Tasks</h2>
                <div className="space-y-2 text-muted-foreground">
                  {challenge.tasks.split("\n").map((task: string, index: number) => (
                    <p key={index}>{task}</p>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-4">Prizes</h2>
                <div className="space-y-4">
                  {challenge.prizes.map((prize: Prize) => (
                    <div key={prize.place} className="flex items-center justify-between p-4 rounded-lg border">
                      <div className="flex items-center gap-4">
                        <Badge variant="secondary">{prize.place}</Badge>
                        <span className="font-medium">Prize Pool</span>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">
                          ${prize.minValue.toLocaleString()} - ${prize.maxValue.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">Key Information</h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <div className="space-y-1">
                  <p className="text-sm font-medium">Timeline</p>
                  <p className="text-sm text-muted-foreground">
                    {format(new Date(challenge.startDate), "MMM dd, yyyy")} -{" "}
                    {format(new Date(challenge.endDate), "MMM dd, yyyy")}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-muted-foreground" />
                <div className="space-y-1">
                  <p className="text-sm font-medium">Total Prize Pool</p>
                  <p className="text-sm text-muted-foreground">
                    {challenge.prizes.reduce((acc: number, prize: Prize) => acc + prize.maxValue, 0).toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-muted-foreground" />
                <div className="space-y-1">
                  <p className="text-sm font-medium">Experience Level</p>
                  <p className="text-sm text-muted-foreground capitalize">{challenge.juniorityLevel}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Tags className="h-4 w-4 text-muted-foreground" />
                <div className="space-y-1">
                  <p className="text-sm font-medium">Category</p>
                  <p className="text-sm text-muted-foreground">{challenge.category.name}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <div className="space-y-1">
                  <p className="text-sm font-medium">Contact</p>
                  <p className="text-sm text-muted-foreground">{challenge.email}</p>
                </div>
              </div>
            </CardContent>
            <Separator />
            <CardFooter className="pt-6">
              <div className="flex w-full flex-col gap-2">
                <Button asChild className="w-full">
                  <Link href={`/challenges/${challenge.slug}/apply`}>
                    <Send className="mr-2 h-4 w-4" />
                    Apply Now
                  </Link>
                </Button>
                <ShareButton challenge={challenge} />
              </div>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">Timeline</h2>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Submission deadline:{" "}
                  <span className="font-medium text-foreground">
                    {format(new Date(challenge.endDate), "MMM dd, yyyy")}
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default function SingleChallengePage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ChallengeContent />
    </Suspense>
  );
}

