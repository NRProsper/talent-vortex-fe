export enum TimeRange {
  LAST_30_DAYS = 'last_30_days',
  THIS_WEEK = 'this_week',
}

export type AnalyticsQueryRequest = {
  timeRange?: TimeRange;
};

export interface AnalyticsResponse {
  current: number;
  previous: number;
  percentageChange: number;
  timeRange: TimeRange;
}

export interface ChallengeStatusCounts {
  count: number;
}

export interface ChallengeOverviewResponse {
  analytics: {
    completed: ChallengeStatusCounts;
    open: ChallengeStatusCounts;
    ongoing: ChallengeStatusCounts;
  };
}