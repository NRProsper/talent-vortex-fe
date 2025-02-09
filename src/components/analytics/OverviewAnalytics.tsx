"use client";

import { useAnalyticsOverview } from "@/hooks/useAnalyticsHooks";
import { AnalyticsCard } from "./AnalyticsCard";
import { CircleSlash, Clock, CheckCircle } from "lucide-react";
import LoadingSpinner from "@/components/global/LoadingSpinner";

export function OverviewAnalytics() {
  const { data: analytics, isLoading, isError } = useAnalyticsOverview();

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <div>Error loading analytics</div>;

  const cards = [
    {
      title: "Open Challenges",
      value: analytics.analytics.open.count,
      icon: CircleSlash,
      description: "Active challenges accepting submissions",
    },
    {
      title: "Ongoing Challenges",
      value: analytics.analytics.ongoing.count,
      icon: Clock,
      description: "Challenges currently in progress",
    },
    {
      title: "Completed Challenges",
      value: analytics.analytics.completed.count,
      icon: CheckCircle,
      description: "Successfully completed challenges",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {cards.map((card) => (
        <AnalyticsCard key={card.title} {...card} />
      ))}
    </div>
  );
}

