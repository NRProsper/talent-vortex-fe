import axiosInstance from '@/lib/axiosConfig';
import { handleAxiosError } from '@/lib/errorHandler';
import { CreateFormRequest, UpdateFormRequest } from '@/types';

export const createForm = async (data: CreateFormRequest) => {
  try {
    const response = await axiosInstance.post('/forms', data);
    return response.data;
  } catch (error) {
    throw new Error(handleAxiosError(error));
  }
};

export const updateForm = async (id: string, data: UpdateFormRequest) => {
  try {
    const response = await axiosInstance.patch(`/forms/${id}`, data);
    return response.data;
  } catch (error) {
    throw new Error(handleAxiosError(error));
  }
};

export const deleteForm = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`/forms/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(handleAxiosError(error));
  }
};