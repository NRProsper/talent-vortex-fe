"use client";

import {
  useTotalChallenges,
  useOpenChallenges,
  useOngoingChallenges,
  useCompletedChallenges,
} from "@/hooks/useAnalyticsHooks";
import type { TimeRange } from "@/types";
import { AnalyticsCard } from "./AnalyticsCard";
import { Trophy, Target, Medal, Star } from "lucide-react";
import LoadingSpinner from "@/components/global/LoadingSpinner";

interface TalentDetailedAnalyticsProps {
  timeRange: TimeRange;
}

export function TalentDetailedAnalytics({ timeRange }: TalentDetailedAnalyticsProps) {
  const { data: totalData, isLoading: totalLoading } = useTotalChallenges({ timeRange });
  const { data: openData, isLoading: openLoading } = useOpenChallenges({ timeRange });
  const { data: ongoingData, isLoading: ongoingLoading } = useOngoingChallenges({ timeRange });
  const { data: completedData, isLoading: completedLoading } = useCompletedChallenges({ timeRange });

  if (totalLoading || openLoading || ongoingLoading || completedLoading) {
    return <LoadingSpinner />;
  }

  const analytics = [
    {
      title: "Total Participations",
      value: totalData.current,
      icon: Star,
      description: "All challenges you've participated in",
      percentageChange: totalData.percentageChange,
    },
    {
      title: "Available Challenges",
      value: openData.current,
      icon: Trophy,
      description: "Open challenges you can participate in",
      percentageChange: openData.percentageChange,
    },
    {
      title: "Active Challenges",
      value: ongoingData.current,
      icon: Target,
      description: "Challenges you're currently working on",
      percentageChange: ongoingData.percentageChange,
    },
    {
      title: "Completed Challenges",
      value: completedData.current,
      icon: Medal,
      description: "Successfully completed challenges",
      percentageChange: completedData.percentageChange,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {analytics.map((item) => (
        <AnalyticsCard key={item.title} {...item} />
      ))}
    </div>
  );
}

