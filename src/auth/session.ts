import { NextApiRequest, NextApiResponse } from 'next';
import { Session, withIronSession } from 'next-iron-session';
import { COOKIE_TOKEN_KEY, COOKIE_TOKEN_NAME } from './cookie';
import { Routes } from 'src/constants/route';

export type NextIronRequest = NextApiRequest & {
  session: Session;
  req: NextIronRequest;
  res: NextApiResponse;
  params: any;
  locale?: string;
};
export type NextIronHandler = (req: NextIronRequest, res: NextApiResponse) => Promise<any>;

const currentTime = Date.now();
const oneYearInMilliseconds = 365 * 24 * 60 * 60 * 1000;
const time = currentTime + oneYearInMilliseconds;
const expirationTime = new Date(time);

export const withSession = (handler: NextIronHandler) =>
  withIronSession(handler, {
    password: process.env.NEXT_PUBLIC_SESSION_PASSWORD_KEY || '',
    cookieName: COOKIE_TOKEN_NAME,
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production',
      expires: expirationTime,
    },
  });

export const serverSideAuthentication = (handler: NextIronHandler) => {
  return withSession(async (request: NextIronRequest, response: NextApiResponse) => {
    const access_token = request.req.session.get(COOKIE_TOKEN_KEY);

    if (!access_token) {
      return {
        redirect: {
          destination: Routes.SIGN_IN,
        },
      };
    }

    return handler(request, response);
  });
};

export const serverSideUnAuthentication = (handler: NextIronHandler) => {
  return withSession(async (request: NextIronRequest, response: NextApiResponse) => {
    const access_token = request.req.session.get(COOKIE_TOKEN_KEY);

    if (access_token) {
      return {
        redirect: {
          destination: '/' + request?.locale || 'vn',
        },
      };
    }
    return handler(request, response);
  });
};
