'use client';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useContext } from 'react';

import { LoginQueryEnum } from './key';
import { TAuthModel } from './schema';

import axiosInstance from '@/api/axiosInstance/axiosInstance';
import { endpoints } from '@/api/endpoints/endpoints';
import { TCommonSchema } from '@/types/common/common-schema';
import { AuthContext } from '@/context/AuthContext/AuthContext';
import axiosInstance2 from '@/api/axiosInstance/axiosInstance2';

export const useAuthLoginHook = () => {
  return useMutation<TAuthModel['ILoginResponse'], Error, TAuthModel['ILoginReq']>({
    mutationKey: [LoginQueryEnum.Login],
    mutationFn: async (payload: TAuthModel['ILoginReq']) => {
      const res = await axiosInstance2.post<TAuthModel['ILoginResponse']>(
        endpoints.auth.login,
        payload,
      );

      return res?.data;
    },
  });
};

export const useForgotPassHook = () => {
  return useMutation<TCommonSchema['BaseApiResponse'], Error, TAuthModel['IForgotPassReq']>({
    mutationKey: [LoginQueryEnum.Forgot],
    mutationFn: async (payload: TAuthModel['IForgotPassReq']) => {
      const res = await axiosInstance.post<TCommonSchema['BaseApiResponse']>(
        endpoints.auth.forgot,
        payload,
      );

      return res?.data;
    },
  });
};

export const useGetIsAuth = () => {
  return useQuery({
    queryKey: [LoginQueryEnum.Check],
    queryFn: async () => {
      const res = await axiosInstance.get(endpoints.auth.check);

      return res?.data;
    },
  });
};

export const useResetPassHook = () => {
  return useMutation<TAuthModel['IResetPassResponse'], Error, TAuthModel['IResetPassReq']>({
    mutationKey: [LoginQueryEnum.Reset],
    mutationFn: async (payload: TAuthModel['IResetPassReq']) => {
      const res = await axiosInstance.post<TAuthModel['IResetPassResponse']>(
        endpoints.auth.reset,
        payload,
      );

      return res?.data;
    },
  });
};

export const useAuth = () => useContext(AuthContext);

export const authService = {
  useResetPassHook,
  useAuthLoginHook,
  useForgotPassHook,
  useGetIsAuth,
  useAuth,
};
