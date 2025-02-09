// file located at src/hooks/useAuthHooks.ts
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { login, register, verifyEmail } from "@/services/authService";
import type { LoginRequest, RegisterRequest } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getToken, isTokenExpired, removeToken } from "@/lib/tokenStorage";
import { getUser, removeUser } from "@/lib/userStorage";

export const useLogin = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: LoginRequest) => login(data),
    onSuccess: (response: { user: { role: string; }; }) => {
      const role = response.user.role;
      toast.success("Logged in successfully");
      queryClient.invalidateQueries({ queryKey: ["user"] });
      if (role === "admin") {
        router.push("/admin");
      } else if (role === "talent") {
        router.push("/talent");
      } else {
        // Handle unknown role
        toast.error("Unknown user role");
      }
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

export const useAuth = (allowedRoles: string[], redirectTo = "/join") => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const token = getToken();
      const user = getUser();
      if (!token || !user || isTokenExpired()) {
        removeToken();
        removeUser();
        router.push(redirectTo);
      } else if (!allowedRoles.includes(user.role)) {
        if (user.role === "admin") {
          router.push("/admin");
        } else if (user.role === "talent") {
          router.push("/talent");
        } else {
          router.push("/join");
        }
      } else {
        setIsAuthenticated(true);
      }
    };

    checkAuth();
  }, [allowedRoles, redirectTo, router]);

  return isAuthenticated;
}

