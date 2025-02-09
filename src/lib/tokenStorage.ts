// file located at src/lib/tokenStorage.ts

interface TokenData {
  token: string;
  expiresAt: number;
}

const TOKEN_KEY = "access_token";
const JWT_EXPIRE = process.env.NEXT_PUBLIC_JWT_EXPIRE || "4h";

const parseExpireTime = (expireString: string): number => {
  const unit = expireString.slice(-1);
  const value = Number.parseInt(expireString.slice(0, -1));

  switch (unit) {
    case "h":
      return value * 60 * 60 * 1000;
    case "m":
      return value * 60 * 1000;
    case "s":
      return value * 1000;
    default:
      return 4 * 60 * 60 * 1000; // default to 4 hours
  }
};

export const setToken = (token: string) => {
  const expiresIn = parseExpireTime(JWT_EXPIRE);
  const expiresAt = new Date().getTime() + expiresIn;
  const tokenData: TokenData = { token, expiresAt };
  localStorage.setItem(TOKEN_KEY, JSON.stringify(tokenData));
};

export const getToken = (): string | null => {
  const tokenData = localStorage.getItem(TOKEN_KEY);
  if (!tokenData) return null;

  const { token, expiresAt }: TokenData = JSON.parse(tokenData);

  if (new Date().getTime() > expiresAt) {
    removeToken();
    return null;
  }

  return token;
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const isTokenExpired = (): boolean => {
  const tokenData = localStorage.getItem(TOKEN_KEY);
  if (!tokenData) return true;

  const { expiresAt }: TokenData = JSON.parse(tokenData);
  return new Date().getTime() > expiresAt;
}

