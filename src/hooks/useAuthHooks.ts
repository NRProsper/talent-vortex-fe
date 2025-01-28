// file located at src/hooks/useAuthHooks.ts

import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { login, register } from "@/services/authService";
import type { LoginRequest, RegisterRequest } from "@/types";

export const useLogin = () => {
  return useMutation({
    mutationFn: (data: LoginRequest) => login(data),
    onSuccess: () => {
      toast.success("Logged in successfully");
    },
    onError: (error: Error) => {
      toast.error(`Login failed: ${error.message}`);
    },
  });
};

export const useRegister = () => {
  return useMutation({
    mutationFn: (data: RegisterRequest) => register(data),
    onSuccess: () => {
      toast.success("Registered successfully");
    },
    onError: (error: Error) => {
      toast.error(`Registration failed: ${error.message}`);
    },
  });
}

