import { axiosPublic } from '../../axios';
import { OauthInfoResponse, OauthLoginResponse } from './authReponse';

export const AuthApi = {
  REFRESH: async (refreshToken: string): Promise<OauthLoginResponse> => {
    const response = await axiosPublic.post(
      `/auth/token/refresh?token=${refreshToken}`,
    );
    return response.data.data;
  },

  OAUTH_LINK: async () => {
    const response = await axiosPublic.get('/auth/oauth/kakao/link');
    return response.data.data;
  },

  OAUTH_VALID: async (idToken: string) => {
    console.log(idToken);
    const response = await axiosPublic.get(
      `/auth/oauth/kakao/register/valid?id_token=${idToken}`,
    );
    return response.data.data;
  },

  OAUTH_INFO: async (accessToken: string): Promise<OauthInfoResponse> => {
    const response = await axiosPublic.post(
      `/auth/oauth/kakao/info?access_token=${accessToken}`,
    );
    return response.data.data;
  },

  OAUTH_REGISTER: async ({
    idToken,
    payload,
  }: {
    idToken: string;
    payload: OauthInfoResponse;
  }): Promise<OauthLoginResponse> => {
    const response = await axiosPublic.post(
      `/auth/oauth/kakao/register?id_token=${idToken}`,
      payload,
    );
    return response.data.data;
  },

  OAUTH_LOGIN: async (idToken: string): Promise<OauthLoginResponse> => {
    const response = await axiosPublic.post(
      `/auth/oauth/kakao/login?id_token=${idToken}`,
    );
    return response.data.data;
  },
};