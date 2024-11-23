import { NextApiResponse } from 'next';
import { COOKIE_REFRESH_TOKEN_KEY, COOKIE_TOKEN_KEY } from 'src/auth/cookie';
import { NextIronRequest, withSession } from 'src/auth/session';
import { ResponseSignIn } from 'src/services/auth/signIn';
import { apiInstance } from 'src/providers/authProvider';

export default withSession(async (request: NextIronRequest, res: NextApiResponse) => {
  await apiInstance
    .post('/login', request.body)
    .then(async (response: ResponseSignIn) => {
      request.session.set(COOKIE_TOKEN_KEY, response.data.access_token);
      request.session.set(COOKIE_REFRESH_TOKEN_KEY, response.data.refresh_token);

      await request.session.save();
      res.status(200).json(response?.data || []);
    })
    .catch((error: { response: { status: number; data: any } }) => {
      res.status(500).json(error.response.data || error);
    });
});
