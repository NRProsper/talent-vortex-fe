// file located at src/hooks/useUser.ts

import { useEffect, useState } from "react";
import { getUser, isUserAuthenticated } from "@/lib/userStorage";

export const useUser = () => {
  const [user, setUser] = useState(getUser());

  useEffect(() => {
    const checkUser = () => {
      const userData = getUser();
      if (!userData || !isUserAuthenticated()) {
        setUser(null);
      } else {
        setUser(userData);
      }
    };

    checkUser();
  }, []);

  return {
    id: user?.id,
    firstName: user?.firstName,
    lastName: user?.lastName,
    email: user?.email,
    role: user?.role,
  };
};