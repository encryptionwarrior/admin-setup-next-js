'use client';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { destroyCookie, parseCookies } from 'nookies';
import { createContext, ReactNode, useEffect, useState } from 'react';

import { AuthValuesType } from './types';

import { getOAuthAppAccessToken, setOAuthAppAccessToken } from '@/api/axiosInstance/axiosInstance';
import { TAuthModel } from '@/api/hooks/auth/schema';
import { fetchUserDetails } from '@/api/hooks/profile/hooks';
import { GLOBAL_CONSTANTS } from '@/constants';
// import { ROUTES } from '@/navigation/sidebar/routes';


const defaultProvider: AuthValuesType = {
  user: null,
  isLoading: false,
  setUser: () => null,
  setHasToken: () => null,

  logout: () => Promise.resolve(),
};

const AuthContext = createContext(defaultProvider);

type Props = {
  children: ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<TAuthModel['IUserData'] | null>(null);
  const storageTokenKeyName = GLOBAL_CONSTANTS.ACCESS_TOKEN;
  const storageRefreshTokenKeyName = GLOBAL_CONSTANTS.REFRESH_TOKEN;
  const storedToken = parseCookies(null, storageTokenKeyName);
  const [hasToken, setHasToken] = useState<string | null>(
    getOAuthAppAccessToken() || storedToken[storageTokenKeyName as string],
  );
  const handleLogout = () => {
    destroyCookie(undefined, storageTokenKeyName as string, {
      path: '/',
    });
    destroyCookie(undefined, storageRefreshTokenKeyName as string, {
      path: '/',
    });
    setOAuthAppAccessToken(null);
    setUser(null);
    setHasToken(null);
    router.push("/sign-in");
  };

  // console.info(hasToken, 'At authprovider');
  const { data, isLoading, error } = useQuery({
    queryKey: ['userDetails', hasToken],
    queryFn: fetchUserDetails,
    enabled: !!hasToken,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  const router = useRouter();

  useEffect(() => {
    if (data?.data) {
      setUser(data.data);
    }
  }, [data?.data]);

  useEffect(() => {
    if (error) {
      setOAuthAppAccessToken(null);
      setUser(null);
      destroyCookie(undefined, storageTokenKeyName as string, {
        path: '/',
      });
      destroyCookie(undefined, storageRefreshTokenKeyName as string, {
        path: '/',
      });
      // router.push(ROUTES.auth.login);
    }
  }, [error, router, storageTokenKeyName]);

  const values = {
    user,
    isLoading,
    setUser,
    logout: handleLogout,
    setHasToken,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
