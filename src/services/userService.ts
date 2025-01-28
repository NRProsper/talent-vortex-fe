// file location: src/services/userService.ts

import axiosInstance from '@/lib/axiosConfig';
import { handleAxiosError } from '@/lib/errorHandler';
import { CreateUserRequest, QueryUserRequest, UpdateUserRequest } from '@/types';

export const createUser = async (data: CreateUserRequest) => {
  try {
    const response = await axiosInstance.post('/users', data);
    return response.data;
  } catch (error) {
    throw new Error(handleAxiosError(error));
  }
};

export const updateUser = async (id: string, data: UpdateUserRequest) => {
  try {
    const response = await axiosInstance.patch(`/users/${id}`, data);
    return response.data;
  } catch (error) {
    throw new Error(handleAxiosError(error));
  }
};

export const getUsers = async (params?: QueryUserRequest) => {
  try {
    const response = await axiosInstance.get('/users', { params });
    return response.data;
  } catch (error) {
    throw new Error(handleAxiosError(error));
  }
};

export const deleteUser = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`/users/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(handleAxiosError(error));
  }
};