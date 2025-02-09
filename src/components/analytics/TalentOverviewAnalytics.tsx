"use client";

import { useAnalyticsOverview } from "@/hooks/useAnalyticsHooks";
import { AnalyticsCard } from "./AnalyticsCard";
import { Trophy, Target, Medal } from "lucide-react";
import LoadingSpinner from "@/components/global/LoadingSpinner";

export function TalentOverviewAnalytics() {
  const { data: analytics, isLoading, isError } = useAnalyticsOverview();

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <div>Error loading analytics</div>;

  const cards = [
    {
      title: "Available Challenges",
      value: analytics.analytics.open.count,
      icon: Trophy,
      description: "Open challenges you can participate in",
    },
    {
      title: "My Active Challenges",
      value: analytics.analytics.ongoing.count,
      icon: Target,
      description: "Challenges you're currently working on",
    },
    {
      title: "Completed Challenges",
      value: analytics.analytics.completed.count,
      icon: Medal,
      description: "Challenges you've successfully completed",
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

