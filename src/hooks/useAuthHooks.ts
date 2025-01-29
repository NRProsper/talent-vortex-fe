// file located at src/hooks/useAuthHooks.ts
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { login, register, verifyEmail } from "@/services/authService";
import type { LoginRequest, RegisterRequest } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getToken, isTokenExpired } from "@/lib/tokenStorage";

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
};

export const useVerifyEmail = (token: string) => {
  return useQuery({
    queryKey: ["token", token],
    queryFn: () => verifyEmail(token),
  });
};

export const useAuth = (redirectTo = "/join") => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const token = getToken();
      if (!token || isTokenExpired()) {
        router.push(redirectTo);
      } else {
        setIsAuthenticated(true);
      }
    };

    checkAuth();
  }, [redirectTo, router]);

  return isAuthenticated;
};
