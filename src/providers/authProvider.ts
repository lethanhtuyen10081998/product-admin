import axios, { Method } from 'axios';
import { COOKIE_TOKEN_KEY } from 'src/auth/cookie';
import { HTTP_HEADER_AUTHORIZATION } from 'src/auth/httpHeaders';
import { NextIronRequest } from 'src/auth/session';
import endpoints from 'src/services/endpoints';

export const internalApiInstance = axios.create({
  baseURL: endpoints.LOCAL_API_PREFIX,
});
export const apiInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
});

export const apiInstanceAuthentication = (input: {
  request: NextIronRequest;
  url: string;
  data?: any;
}) => {
  const { request, url, data } = input;
  const headers: { [HTTP_HEADER_AUTHORIZATION]?: string } = {};
  const accessToken = request.session.get(COOKIE_TOKEN_KEY);
  const method = request.method as Method;

  if (accessToken) {
    headers[HTTP_HEADER_AUTHORIZATION] = `Bearer ${accessToken}`;
  }

  return apiInstance({
    headers: { ...headers },
    url,
    data,
    method,
    params: {
      ...data,
    },
  });
};
