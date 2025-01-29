"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useVerifyEmail } from "@/hooks/useAuthHooks";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Loader2, CheckCircle, XCircle, LogIn } from "lucide-react";

export default function VerifyEmailPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");
  const { data, isLoading, isError, error } = useVerifyEmail(token || "");
  const [countdown, setCountdown] = useState(5);

  console.log(searchParams);


  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (data && !isError) {
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev === 1) {
            clearInterval(timer);
            router.push("/join");
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [data, isError, router]);

  const handleLoginClick = () => {
    router.push("/join");
  };

  if (isLoading) {
    return (
      <Card className="w-[350px] mx-auto my-20">
        <CardContent className="flex flex-col items-center justify-center pt-6">
          <Loader2 className="h-16 w-16 animate-spin text-primary" />
          <p className="mt-4 text-lg font-semibold">Verifying your email...</p>
        </CardContent>
      </Card>
    );
  }

  if (isError) {
    return (
      <Card className="w-[350px] mx-auto mt-20">
        <CardHeader>
          <CardTitle className="text-center text-destructive">Verification Failed</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center">
          <XCircle className="h-16 w-16 text-destructive" />
          <p className="mt-4 text-center">
            {(error as Error).message || "An error occurred during email verification."}
          </p>
        </CardContent>
        <CardFooter>
          <Button onClick={handleLoginClick} className="w-full">
            <LogIn className="mr-2 h-4 w-4" /> Go to Login
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-[350px] mx-auto mt-20">
      <CardHeader>
        <CardTitle className="text-center text-primary">Email Verified Successfully</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center">
        <CheckCircle className="h-16 w-16 text-primary" />
        <p className="mt-4 text-center">
          Your email has been verified. You will be redirected to the login page in {countdown} seconds.
        </p>
      </CardContent>
      <CardFooter>
        <Button onClick={handleLoginClick} className="w-full">
          <LogIn className="mr-2 h-4 w-4" /> Go to Login Now
        </Button>
      </CardFooter>
    </Card>
  );
}

