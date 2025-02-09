// file location: src/services/challengeService.ts
import axiosInstance from '@/lib/axiosConfig';
import { handleAxiosError } from '@/lib/errorHandler';
import { CreateChallengeRequest, QueryChallengeRequest, UpdateChallengeRequest } from '@/types';

export const createChallenge = async (data: CreateChallengeRequest) => {
  try {
    const response = await axiosInstance.post('/challenges', data);
    return response.data;
  } catch (error) {
    throw new Error(handleAxiosError(error));
  }
};

export const updateChallenge = async (id: string, data: UpdateChallengeRequest) => {
  try {
    const response = await axiosInstance.put(`/challenges/${id}`, data);
    return response.data;
  } catch (error) {
    throw new Error(handleAxiosError(error));
  }
};

export const getChallenges = async (params?: QueryChallengeRequest) => {
  try {
    const response = await axiosInstance.get('/challenges', { params });
    return response.data;
  } catch (error) {
    throw new Error(handleAxiosError(error));
  }
};

export const getSingleChallenge = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/challenges/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(handleAxiosError(error));
  }
};

export const deleteChallenge = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`/challenges/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(handleAxiosError(error));
  }
};