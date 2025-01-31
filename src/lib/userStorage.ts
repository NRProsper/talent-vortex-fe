// file located at src/lib/userStorage.ts

interface UserData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

const USER_KEY = "user_data";

export const setUser = (user: UserData) => {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const getUser = (): UserData | null => {
  const userData = localStorage.getItem(USER_KEY);
  if (!userData) return null;

  return JSON.parse(userData) as UserData;
};

export const removeUser = () => {
  localStorage.removeItem(USER_KEY);
};

export const isUserAuthenticated = (): boolean => {
  return !!getUser();
};