import axiosInstance from '@/lib/axiosConfig';
import { handleAxiosError } from '@/lib/errorHandler';
import { AnalyticsQueryRequest } from '@/types';

export const getAnalyticsOverview = async () => {
  try {
    const response = await axiosInstance.get('/analytics');
    return response.data;
  } catch (error) {
    throw new Error(handleAxiosError(error));
  }
};

export const getTotalChallenges = async (params?: AnalyticsQueryRequest) => {
  try {
    const response = await axiosInstance.get('/analytics/total', { params });
    return response.data;
  } catch (error) {
    throw new Error(handleAxiosError(error));
  }
};

export const getOpenChallenges = async (params?: AnalyticsQueryRequest) => {
  try {
    const response = await axiosInstance.get('/analytics/open', { params });
    return response.data;
  } catch (error) {
    throw new Error(handleAxiosError(error));
  }
};

export const getOngoingChallenges = async (params?: AnalyticsQueryRequest) => {
  try {
    const response = await axiosInstance.get('/analytics/ongoing', { params });
    return response.data;
  } catch (error) {
    throw new Error(handleAxiosError(error));
  }
};

export const getCompletedChallenges = async (params?: AnalyticsQueryRequest) => {
  try {
    const response = await axiosInstance.get('/analytics/completed', { params });
    return response.data;
  } catch (error) {
    throw new Error(handleAxiosError(error));
  }
};