"use client";

import {
  useTotalChallenges,
  useOpenChallenges,
  useOngoingChallenges,
  useCompletedChallenges,
} from "@/hooks/useAnalyticsHooks";
import type { TimeRange } from "@/types";
import { AnalyticsCard } from "./AnalyticsCard";
import { BarChart, CircleSlash, Clock, CheckCircle } from "lucide-react";
import LoadingSpinner from "@/components/global/LoadingSpinner";

interface DetailedAnalyticsProps {
  timeRange: TimeRange;
}

export function DetailedAnalytics({ timeRange }: DetailedAnalyticsProps) {
  const { data: totalData, isLoading: totalLoading } = useTotalChallenges({ timeRange });
  const { data: openData, isLoading: openLoading } = useOpenChallenges({ timeRange });
  const { data: ongoingData, isLoading: ongoingLoading } = useOngoingChallenges({ timeRange });
  const { data: completedData, isLoading: completedLoading } = useCompletedChallenges({ timeRange });

  if (totalLoading || openLoading || ongoingLoading || completedLoading) {
    return <LoadingSpinner />;
  }

  const analytics = [
    {
      title: "Total Challenges",
      value: totalData.current,
      icon: BarChart,
      description: "All challenges",
      percentageChange: totalData.percentageChange,
    },
    {
      title: "Open Challenges",
      value: openData.current,
      icon: CircleSlash,
      description: "Active challenges accepting submissions",
      percentageChange: openData.percentageChange,
    },
    {
      title: "Ongoing Challenges",
      value: ongoingData.current,
      icon: Clock,
      description: "Challenges currently in progress",
      percentageChange: ongoingData.percentageChange,
    },
    {
      title: "Completed Challenges",
      value: completedData.current,
      icon: CheckCircle,
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

