// file located at src/services/authService.ts

import axiosInstance from '@/lib/axiosConfig';
import { handleAxiosError } from '@/lib/errorHandler';
import { LoginRequest, RegisterRequest } from '@/types';

export const login = async (data: LoginRequest) => {
  try {
    const response = await axiosInstance.post('/auth/login', data);
    return response.data;
  } catch (error) {
    throw new Error(handleAxiosError(error));
  }
};

export const register = async (data: RegisterRequest) => {
  try {
    const response = await axiosInstance.post('/auth/sign-up', data);
    return response.data;
  } catch (error) {
    throw new Error(handleAxiosError(error));
  }
};