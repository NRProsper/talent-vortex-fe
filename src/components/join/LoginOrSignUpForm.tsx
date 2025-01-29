"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, signupSchema, type LoginFormValues, type SignupFormValues } from "@/types/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLogin, useRegister } from "@/hooks/useAuthHooks";

export default function LoginOrSignUpForm() {
  const { mutate: login, isPending: isLoginLoading } = useLogin();
  const { mutate: register, isPending: isRegisterLoading } = useRegister();

  const loginForm = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const signupForm = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onLoginSubmit(data: LoginFormValues) {
    login(data);
  }

  async function onSignupSubmit(data: SignupFormValues) {
    const { confirmPassword, ...registerData } = data;
    register(registerData);
  }

  return (
    <Tabs defaultValue="login" className="w-full max-w-md mx-auto">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Sign In</TabsTrigger>
        <TabsTrigger value="signup">Create Account</TabsTrigger>
      </TabsList>
      <div className="p-6 space-y-6 bg-white rounded-lg shadow-sm mt-6">
        <TabsContent value="login">
          <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...loginForm.register("email")} />
              {loginForm.formState.errors.email && (
                <p className="text-sm text-red-500">{loginForm.formState.errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <PasswordInput id="password" {...loginForm.register("password")} />
              {loginForm.formState.errors.password && (
                <p className="text-sm text-red-500">{loginForm.formState.errors.password.message}</p>
              )}
            </div>

            <Button type="submit" className="w-full" disabled={isLoginLoading}>
              {isLoginLoading ? "Signing in..." : "Sign in"}
            </Button>

            <button type="button" className="w-full text-sm text-blue-500 hover:underline">
              Forgot your password?
            </button>
          </form>
        </TabsContent>
        <TabsContent value="signup">
          <form onSubmit={signupForm.handleSubmit(onSignupSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First name</Label>
              <Input
                id="firstName"
                type="text"
                placeholder="Enter your First name"
                {...signupForm.register("firstName")}
              />
              {signupForm.formState.errors.firstName && (
                <p className="text-sm text-red-500">{signupForm.formState.errors.firstName.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName">Last name</Label>
              <Input
                id="lastName"
                type="text"
                placeholder="Enter your Last name"
                {...signupForm.register("lastName")}
              />
              {signupForm.formState.errors.lastName && (
                <p className="text-sm text-red-500">{signupForm.formState.errors.lastName.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="signupEmail">Email</Label>
              <Input id="signupEmail" type="email" placeholder="Enter your Email" {...signupForm.register("email")} />
              {signupForm.formState.errors.email && (
                <p className="text-sm text-red-500">{signupForm.formState.errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="signupPassword">Password</Label>
              <PasswordInput
                id="signupPassword"
                placeholder="Enter your Password"
                {...signupForm.register("password")}
              />
              {signupForm.formState.errors.password && (
                <p className="text-sm text-red-500">{signupForm.formState.errors.password.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <PasswordInput
                id="confirmPassword"
                placeholder="Please confirm your Password"
                {...signupForm.register("confirmPassword")}
              />
              {signupForm.formState.errors.confirmPassword && (
                <p className="text-sm text-red-500">{signupForm.formState.errors.confirmPassword.message}</p>
              )}
            </div>

            <Button type="submit" className="w-full" disabled={isRegisterLoading}>
              {isRegisterLoading ? "Creating Account..." : "Create Account"}
            </Button>
          </form>
        </TabsContent>
      </div>
    </Tabs>
  );
}

