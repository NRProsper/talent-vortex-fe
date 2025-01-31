import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

interface AnalyticsCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  description: string;
  percentageChange?: number;
}

export function AnalyticsCard({ title, value, icon: Icon, description, percentageChange }: AnalyticsCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
          <Icon className="h-5 w-5 text-blue-600" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground mt-1">
          {description}
          {percentageChange !== undefined && (
            <span className={`ml-2 ${percentageChange >= 0 ? "text-green-600" : "text-red-600"}`}>
              {percentageChange >= 0 ? "+" : ""}
              {percentageChange}%
            </span>
          )}
        </p>
      </CardContent>
    </Card>
  );
}

