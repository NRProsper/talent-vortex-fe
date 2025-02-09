"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { TimeRange } from "@/types";
import { DetailedAnalytics } from "@/components/analytics/DetailedAnalytics";
import { OverviewAnalytics } from "@/components/analytics/OverviewAnalytics";

export default function AdminDashboard() {
  const [timeRange, setTimeRange] = useState<TimeRange>(TimeRange.LAST_30_DAYS);

  return (
    <div className="container space-y-8 p-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
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
          <OverviewAnalytics />
        </TabsContent>
        <TabsContent value="detailed" className="space-y-4">
          <DetailedAnalytics timeRange={timeRange} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
