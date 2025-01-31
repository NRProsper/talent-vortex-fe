"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { TimeRange } from "@/types";
import { TalentDetailedAnalytics } from "@/components/analytics/TalentDetailedAnalytics";
import { TalentOverviewAnalytics } from "@/components/analytics/TalentOverviewAnalytics";

export default function TalentDashboard() {
  const [timeRange, setTimeRange] = useState<TimeRange>(TimeRange.LAST_30_DAYS);

  return (
    <div className="container space-y-8 p-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">My Dashboard</h1>
        <Select value={timeRange} onValueChange={(value: TimeRange) => setTimeRange(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select time range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={TimeRange.LAST_30_DAYS}>Last 30 Days</SelectItem>
            <SelectItem value={TimeRange.THIS_WEEK}>This Week</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="detailed">Detailed Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <TalentOverviewAnalytics />
        </TabsContent>
        <TabsContent value="detailed" className="space-y-4">
          <TalentDetailedAnalytics timeRange={timeRange} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
