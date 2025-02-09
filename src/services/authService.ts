// file located at src/services/authService.ts
import axiosInstance from "@/lib/axiosConfig";
import { handleAxiosError } from "@/lib/errorHandler";
import { type LoginRequest, RegisterRequest } from "@/types";
import { setToken, removeToken } from "@/lib/tokenStorage";
import { removeUser, setUser } from "@/lib/userStorage";

export const login = async (data: LoginRequest) => {
  try {
    const response = await axiosInstance.post("/auth/login", data);
    console.log("responseToken", response.data?.access_token);

    if (response.data?.access_token) {
      setToken(response.data.access_token);
      setUser(response.data.user);
    }

    return response.data;
  } catch (error) {
    throw new Error(handleAxiosError(error));
  }
};

export const logout = () => {
  removeToken();
  removeUser();
  window.location.href = "/join";
};

export const register = async (data: RegisterRequest) => {
  try {
    const response = await axiosInstance.post('/auth/sign-up', data);
    return response.data;
  } catch (error) {
    throw new Error(handleAxiosError(error));
  }
};

export const verifyEmail = async (token: string) => {
  try {
    const decodedToken = decodeURIComponent(token);

    console.log("decodedToken", decodedToken);
    console.log("normalToken", token);

    const response = await axiosInstance.get(`/auth/verify-email?token=${decodedToken}`);
    return response.data;
  } catch (error) {
    throw new Error(handleAxiosError(error));
  }
};
