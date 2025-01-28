import { useQuery } from "@tanstack/react-query";
import {
  getAnalyticsOverview,
  getTotalChallenges,
  getOpenChallenges,
  getOngoingChallenges,
  getCompletedChallenges,
} from "@/services/analyticsService";
import type { AnalyticsQueryRequest } from "@/types";

export const useAnalyticsOverview = () => {
  return useQuery({
    queryKey: ["analytics", "overview"],
    queryFn: getAnalyticsOverview,
  });
};

export const useTotalChallenges = (params?: AnalyticsQueryRequest) => {
  return useQuery({
    queryKey: ["analytics", "total", params],
    queryFn: () => getTotalChallenges(params),
  });
};

export const useOpenChallenges = (params?: AnalyticsQueryRequest) => {
  return useQuery({
    queryKey: ["analytics", "open", params],
    queryFn: () => getOpenChallenges(params),
  });
};

export const useOngoingChallenges = (params?: AnalyticsQueryRequest) => {
  return useQuery({
    queryKey: ["analytics", "ongoing", params],
    queryFn: () => getOngoingChallenges(params),
  });
};

export const useCompletedChallenges = (params?: AnalyticsQueryRequest) => {
  return useQuery({
    queryKey: ["analytics", "completed", params],
    queryFn: () => getCompletedChallenges(params),
  });
}

