import axiosInstance from '@/lib/axiosConfig';
import { handleAxiosError } from '@/lib/errorHandler';
import { CreateCategoryRequest, UpdateCategoryRequest } from '@/types';

export const createCategory = async (data: CreateCategoryRequest) => {
  try {
    const response = await axiosInstance.post('/categories', data);
    return response.data;
  } catch (error) {
    throw new Error(handleAxiosError(error));
  }
};

export const updateCategory = async (id: string, data: UpdateCategoryRequest) => {
  try {
    const response = await axiosInstance.patch(`/categories/${id}`, data);
    return response.data;
  } catch (error) {
    throw new Error(handleAxiosError(error));
  }
};

export const deleteCategory = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`/categories/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(handleAxiosError(error));
  }
};