import { TAuthModel } from '@/api/hooks/auth/schema';

export type ErrCallbackType = (_err: { [key: string]: string }) => void;
export type SuccessCallbackType = (_success: { [key: string]: string | boolean }) => void;

export type LoginParams = {
  email: string;
  password: string;
  rememberMe?: boolean;
};

export type AuthValuesType = {
  isLoading: boolean;
  logout: () => void;
  user: TAuthModel['IUserData'] | null;
  setUser: (_value: TAuthModel['IUserData'] | null) => void;
  setHasToken: (_token: string) => void;
};
