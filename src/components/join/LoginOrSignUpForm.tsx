"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-hot-toast";
import { loginSchema, signupSchema, type LoginFormValues, type SignupFormValues } from "@/lib/auth";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function LoginOrSignUpForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
      joinAs: undefined,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onLoginSubmit(data: LoginFormValues) {
    try {
      console.log("Login data:", data);
      toast.success("Successfully logged in!");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  }

  async function onSignupSubmit(data: SignupFormValues) {
    try {
      console.log("Signup data:", data);
      toast.success("Account created successfully!");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="w-full max-w-md mx-auto p-6 space-y-6 bg-white rounded-lg shadow-sm">
      <div className="flex border-b">
        <button
          onClick={() => setIsLogin(true)}
          className={cn(
            "pb-2 flex-1 text-center border-b-2 -mb-px transition-colors",
            isLogin ? "border-blue-500 text-blue-500" : "border-transparent text-gray-500 hover:text-gray-700",
          )}
        >
          Sign In
        </button>
        <button
          onClick={() => setIsLogin(false)}
          className={cn(
            "pb-2 flex-1 text-center border-b-2 -mb-px transition-colors",
            !isLogin ? "border-blue-500 text-blue-500" : "border-transparent text-gray-500 hover:text-gray-700",
          )}
        >
          Create Account
        </button>
      </div>

      {isLogin ? (
        <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email
            </label>
            <Input id="email" type="email" {...loginForm.register("email")} className="w-full" />
            {loginForm.formState.errors.email && (
              <p className="text-sm text-red-500">{loginForm.formState.errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                {...loginForm.register("password")}
                className="w-full pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {loginForm.formState.errors.password && (
              <p className="text-sm text-red-500">{loginForm.formState.errors.password.message}</p>
            )}
          </div>

          <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600">
            Sign in
          </Button>

          <button type="button" className="w-full text-sm text-blue-500 hover:underline">
            Forgot your password?
          </button>
        </form>
      ) : (
        <form onSubmit={signupForm.handleSubmit(onSignupSubmit)} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="joinAs" className="text-sm font-medium text-gray-700">
              Join as:
            </label>
            <Select onValueChange={(value) => signupForm.setValue("joinAs", value as "talent" | "client")}>
              <SelectTrigger>
                <SelectValue placeholder="Select talent or client" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="talent">Talent</SelectItem>
                <SelectItem value="client">Client</SelectItem>
              </SelectContent>
            </Select>
            {signupForm.formState.errors.joinAs && (
              <p className="text-sm text-red-500">{signupForm.formState.errors.joinAs.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
              First name
            </label>
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
            <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
              Last name
            </label>
            <Input id="lastName" type="text" placeholder="Enter your Last name" {...signupForm.register("lastName")} />
            {signupForm.formState.errors.lastName && (
              <p className="text-sm text-red-500">{signupForm.formState.errors.lastName.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="signupEmail" className="text-sm font-medium text-gray-700">
              Email
            </label>
            <Input id="signupEmail" type="email" placeholder="Enter your Email" {...signupForm.register("email")} />
            {signupForm.formState.errors.email && (
              <p className="text-sm text-red-500">{signupForm.formState.errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="signupPassword" className="text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <Input
                id="signupPassword"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your Password"
                {...signupForm.register("password")}
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {signupForm.formState.errors.password && (
              <p className="text-sm text-red-500">{signupForm.formState.errors.password.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Please confirm your Password"
                {...signupForm.register("confirmPassword")}
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {signupForm.formState.errors.confirmPassword && (
              <p className="text-sm text-red-500">{signupForm.formState.errors.confirmPassword.message}</p>
            )}
          </div>

          <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600">
            Create Account
          </Button>
        </form>
      )}
    </div>
  );
}

